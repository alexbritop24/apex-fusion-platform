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

/** --- simple in-memory rate limiting (best-effort on serverless) --- */
type RateEntry = { count: number; resetAt: number };
const RATE_BUCKET = new Map<string, RateEntry>();

function getClientIp(req: any) {
  const xf = req.headers?.["x-forwarded-for"];
  if (typeof xf === "string" && xf.length) return xf.split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
}

function rateLimit(key: string, limit: number, windowMs: number) {
  const now = Date.now();
  const existing = RATE_BUCKET.get(key);

  if (!existing || now > existing.resetAt) {
    RATE_BUCKET.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true as const, remaining: limit - 1, resetAt: now + windowMs };
  }

  if (existing.count >= limit) {
    return { ok: false as const, remaining: 0, resetAt: existing.resetAt };
  }

  existing.count += 1;
  RATE_BUCKET.set(key, existing);
  return { ok: true as const, remaining: limit - existing.count, resetAt: existing.resetAt };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const body: IntakePayload =
      typeof req.body === "string" ? JSON.parse(req.body) : (req.body as any);

    // Honeypot: real users won't fill this.
    if (body.website && body.website.trim().length > 0) {
      return res.status(200).json({ ok: true }); // pretend success
    }

    const kind = body.kind === "audit" ? "audit" : "assessment";
    const fullName = (body.fullName ?? "").trim();
    const email = (body.email ?? "").trim();
    const company = (body.company ?? "").trim();
    const message = (body.message ?? "").trim();

    // Rate limit (per IP + email)
    const ip = getClientIp(req);
    const key = `${ip}:${email || "no-email"}`;
    const rl = rateLimit(key, 5, 10 * 60 * 1000); // 5 requests / 10 minutes

    if (!rl.ok) {
      res.setHeader("Retry-After", Math.ceil((rl.resetAt - Date.now()) / 1000));
      return res.status(429).json({
        ok: false,
        error: "Too many requests. Try again in a few minutes."
      });
    }

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
      return res
        .status(400)
        .json({ ok: false, error: "Message is too long." });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO_EMAIL = process.env.APEX_TO_EMAIL;

    if (!RESEND_API_KEY || !TO_EMAIL) {
      return res.status(500).json({
        ok: false,
        error: "Server is missing RESEND_API_KEY or APEX_TO_EMAIL."
      });
    }

    const resend = new Resend(RESEND_API_KEY);

    const subject =
      kind === "audit"
        ? `New Systems Audit Request — ${fullName}`
        : `New Systems Assessment Request — ${fullName}`;

    const safeCompany = company ? company : "—";

    // NOTE: Your modal already formats business type / timeline / bottlenecks into `message`.
    // We keep it as-is, but wrap it with a clear header so it's readable.
    const text = [
      "=== NEW INTAKE ===",
      `Kind: ${kind}`,
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Company: ${safeCompany}`,
      `IP: ${ip}`,
      "",
      "=== DETAILS ===",
      message
    ].join("\n");

   
    const from = "no-reply@apexfusionstudios.com";

    const result = await resend.emails.send({
      from,
      to: TO_EMAIL,
      replyTo: email,
      subject,
      text
    });

    // If Resend returns an error object, surface it clearly
    if ((result as any)?.error) {
      const err = (result as any).error;
      console.log("RESEND ERROR:", err);
      return res.status(502).json({
        ok: false,
        error: "Resend send failed.",
        detail: err?.message ?? String(err)
      });
    }

    console.log("RESEND OK:", result);

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.log("INTAKE ERROR:", err);
    return res.status(500).json({
      ok: false,
      error: "Unexpected server error.",
      detail: err?.message ?? String(err)
    });
  }
}