// api/intake.ts
import { Resend } from "resend";
import type { VercelRequest, VercelResponse } from "@vercel/node";

type IntakePayload = {
  kind?: "audit" | "assessment";
  fullName?: string;
  email?: string;
  company?: string;
  message?: string;

  // basic spam trap (hidden field in forms)
  website?: string;
};

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

/**
 * Very small, best-effort rate limit.
 * NOTE: On serverless, memory is per-instance, so this is "good enough" for spam reduction,
 * not a guarantee. For real rate limiting, use Upstash/Redis later.
 */
declare global {
  // eslint-disable-next-line no-var
  var __apex_rl: Map<string, { count: number; resetAt: number }> | undefined;
}
const rl =
  globalThis.__apex_rl ??
  (globalThis.__apex_rl = new Map<string, { count: number; resetAt: number }>());

function getClientIp(req: VercelRequest) {
  const xf = req.headers["x-forwarded-for"];
  const ip =
    (Array.isArray(xf) ? xf[0] : xf)?.split(",")[0]?.trim() ||
    req.headers["x-real-ip"]?.toString() ||
    req.socket?.remoteAddress ||
    "unknown";
  return ip;
}

function rateLimit(ip: string, limit: number, windowMs: number) {
  const now = Date.now();
  const existing = rl.get(ip);
  if (!existing || now > existing.resetAt) {
    rl.set(ip, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1, resetAt: now + windowMs };
  }
  if (existing.count >= limit) {
    return { ok: false, remaining: 0, resetAt: existing.resetAt };
  }
  existing.count += 1;
  rl.set(ip, existing);
  return { ok: true, remaining: limit - existing.count, resetAt: existing.resetAt };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS (optional but helps local testing)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  // Rate limit: 10 requests / 10 minutes / IP
  const ip = getClientIp(req);
  const windowMs = 10 * 60 * 1000;
  const limit = 10;
  const rlResult = rateLimit(ip, limit, windowMs);
  if (!rlResult.ok) {
    return res.status(429).json({
      ok: false,
      error: "Too many requests. Try again later.",
      resetAt: rlResult.resetAt,
    });
  }

  try {
    const rawBody = req.body;
    const body: IntakePayload =
      typeof rawBody === "string" ? JSON.parse(rawBody) : (rawBody as any);

    // Honeypot: real users won't fill this.
    if (body.website && body.website.trim().length > 0) {
      return res.status(200).json({ ok: true });
    }

    const kind = body.kind === "audit" ? "audit" : "assessment";
    const fullName = (body.fullName ?? "").trim();
    const email = (body.email ?? "").trim();
    const company = (body.company ?? "").trim();
    const message = (body.message ?? "").trim();

    if (!fullName || fullName.length < 2) {
      return res.status(400).json({ ok: false, error: "Name is required." });
    }
    if (!email || !isEmail(email)) {
      return res.status(400).json({ ok: false, error: "Valid email required." });
    }
    if (!message || message.length < 10) {
      return res
        .status(400)
        .json({ ok: false, error: "Message must be at least 10 characters." });
    }
    if (message.length > 5000) {
      return res.status(400).json({ ok: false, error: "Message is too long." });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO_EMAIL = process.env.APEX_TO_EMAIL;

    if (!RESEND_API_KEY || !TO_EMAIL) {
      return res.status(500).json({
        ok: false,
        error: "Server is missing RESEND_API_KEY or APEX_TO_EMAIL.",
      });
    }

    const resend = new Resend(RESEND_API_KEY);

    const subject =
      kind === "audit"
        ? `New Systems Audit Request — ${fullName}`
        : `New Systems Assessment Request — ${fullName}`;

    const safeCompany = company ? company : "—";

    // Structured body (your modal can embed qualification lines at top; this keeps it readable)
    const text = [
      "=== NEW LEAD (Apex Fusion Studios) ===",
      `Kind: ${kind}`,
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Company: ${safeCompany}`,
      `IP: ${ip}`,
      "",
      "=== MESSAGE ===",
      message,
      "",
      "=== META ===",
      `Received: ${new Date().toISOString()}`,
    ].join("\n");

    // If you haven’t verified a domain, keep this as Resend’s onboarding sender.
    // Once you verify apexfusionstudios.com on Resend, change APEX_FROM_EMAIL to e.g.:
    // "Apex Fusion Studios <intake@apexfusionstudios.com>"
   const from = "onboarding@resend.dev";

   const result = await resend.emails.send({
   from,
   to: TO_EMAIL,
   replyTo: email,
   subject,
   text,
       });

     console.log("RESEND RESULT:", result);

    // Resend returns { data, error } depending on version. Handle both.
    const id =
      (result as any)?.data?.id ||
      (result as any)?.id ||
      undefined;

    const sendError = (result as any)?.error;
    if (sendError) {
      console.error("RESEND ERROR:", sendError);
      return res.status(502).json({
        ok: false,
        error: "Resend send failed.",
        detail: sendError?.message ?? String(sendError),
      });
    }

    return res.status(200).json({ ok: true, id });
  } catch (err: any) {
    return res.status(500).json({
      ok: false,
      error: "Unexpected server error.",
      detail: err?.message ?? String(err),
    });
  }
}