// src/components/BookingModal.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, CheckCircle2 } from "lucide-react";

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type Timeline =
  | ""
  | "ASAP"
  | "2-4 Weeks"
  | "1-3 Months"
  | "Exploring / Not sure yet";

type BusinessType =
  | ""
  | "Barber / Salon"
  | "Clinic / Medspa"
  | "Home Services"
  | "Agency"
  | "Local Retail"
  | "Professional Services"
  | "Other";

type Bottleneck =
  | "Scheduling / calendar chaos"
  | "Lead intake / forms"
  | "Follow-ups / reminders"
  | "Payments / invoicing"
  | "Operations handoffs"
  | "Reporting / visibility"
  | "Automation / integrations"
  | "Website / conversion"
  | "Calls / response speed"
  | "Lead qualification";

type FormState = {
  fullName: string;
  email: string;
  company: string;
  businessType: BusinessType;
  timeline: Timeline;
  bottlenecks: Bottleneck[];
  message: string;
};

const BOTTLENECK_OPTIONS: Bottleneck[] = [
  "Scheduling / calendar chaos",
  "Lead intake / forms",
  "Follow-ups / reminders",
  "Payments / invoicing",
  "Operations handoffs",
  "Reporting / visibility",
  "Automation / integrations",
  "Website / conversion",
  "Calls / response speed",
  "Lead qualification",
];

const initialState: FormState = {
  fullName: "",
  email: "",
  company: "",
  businessType: "",
  timeline: "",
  bottlenecks: [],
  message: "",
};

export default function BookingModal({
  isOpen,
  onClose,
}: BookingModalProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");

  const panelRef = useRef<HTMLDivElement | null>(null);

  const portalRoot = useMemo(() => {
    const el = document.getElementById("modal-root");
    return el ?? document.body;
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    setTimeout(() => panelRef.current?.focus(), 0);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setSubmitting(false);
      setError(null);
      setHoneypot("");
      setForm(initialState);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const set =
    (key: keyof FormState) =>
    (value: string | string[]) =>
      setForm((prev) => ({ ...prev, [key]: value }));

  const toggleBottleneck = (b: Bottleneck) => {
    setForm((prev) => {
      const exists = prev.bottlenecks.includes(b);
      return {
        ...prev,
        bottlenecks: exists
          ? prev.bottlenecks.filter((x) => x !== b)
          : [...prev.bottlenecks, b],
      };
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (submitting) return;

    try {
      setSubmitting(true);

      const compiledMessage = [
        `Business type: ${form.businessType || "—"}`,
        `Timeline: ${form.timeline || "—"}`,
        `Bottlenecks: ${
          form.bottlenecks.length ? form.bottlenecks.join(", ") : "—"
        }`,
        "",
        form.message.trim(),
      ].join("\n");

      const payload = {
        kind: "assessment",
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        company: form.company.trim(),
        message: compiledMessage,
        website: honeypot,
      };

      const r = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await r.json().catch(() => ({}));

      if (!r.ok) {
        throw new Error(
          data?.error || "Something failed while sending. Try again."
        );
      }

      setSubmitted(true);
      setTimeout(() => onClose(), 1800);
    } catch (err: any) {
      setError(err?.message ?? "Something failed while sending. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-label="Request a Systems Assessment"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="flex min-h-full items-center justify-center px-4 py-8 md:px-6 md:py-10">
        <div
          ref={panelRef}
          tabIndex={-1}
          className="w-full max-w-3xl overflow-hidden rounded-3xl border border-neutral-800/60 bg-neutral-900/95 shadow-2xl shadow-black/60 outline-none"
        >
          {/* Header */}
          <div className="border-b border-neutral-800/60 p-8 md:p-10">
            <div className="flex items-start justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#3F6E8F]">
                  Systems Assessment
                </p>

                <h2 className="mt-4 text-2xl md:text-3xl font-extralight tracking-tight text-neutral-100">
                  Let’s figure out what system fits your business.
                </h2>

                <p className="mt-3 text-sm md:text-base text-neutral-400 leading-relaxed">
                  Tell us what’s slowing things down. We’ll review your workflow,
                  identify the bottleneck, and recommend the best place to start.
                </p>

                <div className="mt-5 flex flex-col gap-2 text-sm text-neutral-500 md:flex-row md:flex-wrap md:gap-5">
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#3F6E8F]" />
                    15-minute fit review
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#3F6E8F]" />
                    Reply within 24 hours
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#3F6E8F]" />
                    No obligation
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-xl p-2 text-neutral-300 hover:text-white focus-visible:ring-2 focus-visible:ring-[#3F6E8F]"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {error ? (
              <div className="mt-6 rounded-xl border border-red-900/40 bg-red-950/40 px-4 py-3 text-sm text-red-200">
                {error}
              </div>
            ) : null}

            {submitted ? (
              <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
                <p className="text-lg font-extralight text-neutral-100">
                  Submitted. We’ll reply within 24 hours.
                </p>
              </div>
            ) : null}
          </div>

          {!submitted ? (
            <form onSubmit={onSubmit}>
              <div className="max-h-[62vh] space-y-5 overflow-auto p-8 md:p-10">
                {/* Honeypot */}
                <div className="hidden">
                  <label>
                    Website
                    <input
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      autoComplete="off"
                    />
                  </label>
                </div>

                {/* Basic info */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm text-neutral-300">Full Name</span>
                    <input
                      value={form.fullName}
                      onChange={(e) => set("fullName")(e.target.value)}
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-white placeholder:text-neutral-600 focus:border-[#3F6E8F] focus:outline-none"
                      placeholder="Your name"
                      autoComplete="name"
                      required
                    />
                  </label>

                  <label className="space-y-2">
                    <span className="text-sm text-neutral-300">Email</span>
                    <input
                      value={form.email}
                      onChange={(e) => set("email")(e.target.value)}
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-white placeholder:text-neutral-600 focus:border-[#3F6E8F] focus:outline-none"
                      placeholder="you@company.com"
                      autoComplete="email"
                      type="email"
                      required
                    />
                  </label>
                </div>

                <label className="block space-y-2">
                  <span className="text-sm text-neutral-300">Company</span>
                  <input
                    value={form.company}
                    onChange={(e) => set("company")(e.target.value)}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-white placeholder:text-neutral-600 focus:border-[#3F6E8F] focus:outline-none"
                    placeholder="Company name"
                    autoComplete="organization"
                  />
                </label>

                {/* Qualification */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm text-neutral-300">
                      Business type
                    </span>
                    <select
                      value={form.businessType}
                      onChange={(e) => set("businessType")(e.target.value)}
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-white focus:border-[#3F6E8F] focus:outline-none"
                      required
                    >
                      <option value="">Select one…</option>
                      <option value="Barber / Salon">Barber / Salon</option>
                      <option value="Clinic / Medspa">Clinic / Medspa</option>
                      <option value="Home Services">Home Services</option>
                      <option value="Agency">Agency</option>
                      <option value="Local Retail">Local Retail</option>
                      <option value="Professional Services">
                        Professional Services
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </label>

                  <label className="space-y-2">
                    <span className="text-sm text-neutral-300">Timeline</span>
                    <select
                      value={form.timeline}
                      onChange={(e) => set("timeline")(e.target.value)}
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-white focus:border-[#3F6E8F] focus:outline-none"
                      required
                    >
                      <option value="">Select one…</option>
                      <option value="ASAP">ASAP</option>
                      <option value="2-4 Weeks">2–4 weeks</option>
                      <option value="1-3 Months">1–3 months</option>
                      <option value="Exploring / Not sure yet">
                        Exploring / not sure yet
                      </option>
                    </select>
                  </label>
                </div>

                {/* Bottlenecks */}
                <fieldset className="rounded-2xl border border-neutral-800/60 bg-black/20 p-5">
                  <legend className="px-1 text-sm text-neutral-300">
                    What needs the most help right now?
                  </legend>

                  <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {BOTTLENECK_OPTIONS.map((b) => {
                      const checked = form.bottlenecks.includes(b);

                      return (
                        <label
                          key={b}
                          className="flex items-start gap-3 rounded-xl border border-neutral-800 bg-neutral-950/60 px-4 py-3"
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleBottleneck(b)}
                            className="mt-1 h-4 w-4 accent-[#3F6E8F]"
                          />
                          <span className="text-sm font-light text-neutral-200">
                            {b}
                          </span>
                        </label>
                      );
                    })}
                  </div>

                  <p className="mt-4 text-xs text-neutral-500">
                    Pick the areas costing you the most time, speed, or visibility.
                  </p>
                </fieldset>

                {/* Message */}
                <label className="block space-y-2">
                  <span className="text-sm text-neutral-300">
                    Tell us what’s going on
                  </span>
                  <textarea
                    value={form.message}
                    onChange={(e) => set("message")(e.target.value)}
                    className="min-h-[140px] w-full resize-none rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-white placeholder:text-neutral-600 focus:border-[#3F6E8F] focus:outline-none"
                    placeholder="Briefly describe your current workflow, where things break, and what you want the system to do."
                    required
                  />
                </label>
              </div>

              {/* Submit bar */}
              <div className="sticky bottom-0 border-t border-neutral-800/60 bg-neutral-950/90 px-8 py-5 backdrop-blur-xl md:px-10">
                <button
                  type="submit"
                  disabled={submitting}
                  className={[
                    "w-full rounded-xl py-4 font-semibold text-white",
                    "bg-gradient-to-b from-[#3F6E8F] to-[#2F5D7C]",
                    "shadow-xl shadow-[#3F6E8F]/20",
                    "transition-all duration-500",
                    "hover:from-[#5B8FB0] hover:to-[#3F6E8F] hover:shadow-[#5B8FB0]/25 hover:-translate-y-0.5",
                    "focus-visible:ring-2 focus-visible:ring-[#3F6E8F]",
                    submitting ? "cursor-not-allowed opacity-70" : "",
                  ].join(" ")}
                >
                  {submitting ? "Sending..." : "Submit Assessment Request"}
                </button>

                <p className="mt-3 text-center text-xs text-neutral-500">
                  We’ll review fit, identify the bottleneck, and reply within 24 hours.
                </p>
              </div>
            </form>
          ) : null}
        </div>
      </div>
    </div>,
    portalRoot
  );
}