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

    const text = [
      `Kind: ${kind}`,
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Company: ${safeCompany}`,
      "",
      "Message:",
      message
    ].join("\n");

    const from = process.env.APEX_FROM_EMAIL || "onboarding@resend.dev";

    await resend.emails.send({
      from,
      to: TO_EMAIL,
      replyTo: email,
      subject,
      text
    });

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    return res.status(500).json({
      ok: false,
      error: "Unexpected server error.",
      detail: err?.message ?? String(err)
    });
  }
}