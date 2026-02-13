import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormState = {
  fullName: string;
  email: string;
  company: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  company: "",
  message: "",
};

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
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

    // focus the panel for accessibility
    setTimeout(() => panelRef.current?.focus(), 0);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setForm(initialState);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Later: integrate with email service (Resend / Postmark / etc.)
    // For now: log safely (no secrets).
    console.log("Booking request:", form);

    setSubmitted(true);
    setTimeout(() => onClose(), 2000);
  };

  const set = (key: keyof FormState) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-label="Request a Systems Assessment"
      onMouseDown={(e) => {
        // click outside to close
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="min-h-full px-6 py-10 flex items-center justify-center">
        <div
          ref={panelRef}
          tabIndex={-1}
          className="w-full max-w-2xl rounded-2xl border border-neutral-800/50 bg-neutral-900 p-8 shadow-2xl shadow-black/60 outline-none"
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <h2 className="text-2xl font-extralight tracking-tight">
                Request a Systems Assessment
              </h2>
              <p className="mt-2 text-sm text-neutral-400">
                Tell us what you’re building. We’ll respond with next steps.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 text-neutral-300 hover:text-white focus-visible:ring-2 focus-visible:ring-[#3F6E8F]"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-8">
            {submitted ? (
              <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
                <p className="text-lg font-extralight">
                  Thank you. Your request goes straight to our founders’ inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="space-y-2">
                    <span className="text-sm text-neutral-300">Full Name</span>
                    <input
                      value={form.fullName}
                      onChange={(e) => set("fullName")(e.target.value)}
                      className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-3 text-white placeholder:text-neutral-600 focus:border-[#3F6E8F] focus:outline-none"
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
                      className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-3 text-white placeholder:text-neutral-600 focus:border-[#3F6E8F] focus:outline-none"
                      placeholder="you@company.com"
                      autoComplete="email"
                      type="email"
                      required
                    />
                  </label>
                </div>

                <label className="space-y-2 block">
                  <span className="text-sm text-neutral-300">Company</span>
                  <input
                    value={form.company}
                    onChange={(e) => set("company")(e.target.value)}
                    className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-3 text-white placeholder:text-neutral-600 focus:border-[#3F6E8F] focus:outline-none"
                    placeholder="Company name"
                    autoComplete="organization"
                  />
                </label>

                <label className="space-y-2 block">
                  <span className="text-sm text-neutral-300">Message</span>
                  <textarea
                    value={form.message}
                    onChange={(e) => set("message")(e.target.value)}
                    className="min-h-[120px] w-full resize-none rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-3 text-white placeholder:text-neutral-600 focus:border-[#3F6E8F] focus:outline-none"
                    placeholder="What are you looking to build?"
                    required
                  />
                </label>

                <button
                  type="submit"
                  className={[
                    "w-full rounded-lg py-4 font-semibold text-white",
                    "bg-gradient-to-b from-[#3F6E8F] to-[#2F5D7C]",
                    "shadow-xl shadow-[#3F6E8F]/20",
                    "transition-all duration-500",
                    "hover:from-[#5B8FB0] hover:to-[#3F6E8F] hover:shadow-[#5B8FB0]/25 hover:-translate-y-0.5",
                    "focus-visible:ring-2 focus-visible:ring-[#3F6E8F]",
                  ].join(" ")}
                >
                  Submit Assessment Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>,
    portalRoot
  );
}