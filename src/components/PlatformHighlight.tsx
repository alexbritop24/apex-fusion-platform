// src/components/PlatformHighlight.tsx
import { Check } from "lucide-react";

type PlatformHighlightProps = {
  onOpenBooking: () => void;
};

const features = [
  "Online booking that feels premium",
  "Automatic confirmations + reminders",
  "Payments + deposits (if needed)",
  "Owner dashboard to see everything",
];

export default function PlatformHighlight({
  onOpenBooking,
}: PlatformHighlightProps) {
  return (
    <section className="relative overflow-hidden bg-neutral-950/30 px-6 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
      
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <img
          src="/automation-pipeline.PNG"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        
        {/* Left */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-brand-400">
            Example system
          </p>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.04em] leading-[1.02] text-neutral-100">
            Booking is just one piece.
          </h2>

          <p className="mt-5 max-w-xl text-base sm:text-lg font-light leading-relaxed text-neutral-400">
            This is one example of what we build: a clean booking flow that
            reduces missed appointments and keeps your schedule full.{" "}
            <span className="text-neutral-300">
              The real value is the full operation behind it — intake,
              follow-ups, routing, handoffs, dashboards, and AI-assisted
              systems around it.
            </span>
          </p>

          <ul className="mt-8 space-y-4">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-neutral-300">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900">
                  <Check className="h-3.5 w-3.5 text-brand-400" />
                </span>
                <span className="text-sm sm:text-base font-light">{f}</span>
              </li>
            ))}
          </ul>

          <p className="mt-7 max-w-xl text-sm font-light leading-relaxed text-neutral-500">
            If you want fewer no-shows, faster replies, and less manual work,
            we’ll map your workflow and build the system around it.
          </p>

          <div className="mt-8">
            <button
              type="button"
              onClick={onOpenBooking}
              className="group inline-flex items-center gap-2 rounded-md px-2 py-2 -ml-2 text-sm font-medium text-brand-400 transition-colors duration-500 hover:text-brand-500 focus-visible:ring-2 focus-visible:ring-brand-400"
            >
              Talk through your workflow →
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="rounded-[28px] border border-neutral-800/60 bg-black/40 p-3 md:p-4 backdrop-blur-xl shadow-2xl shadow-black/60">
            <div className="overflow-hidden rounded-[22px] border border-white/5 bg-neutral-950">
              <img
                src="/booking-dashboard.PNG"
                alt="Dashboard example showing booking, appointments, and owner analytics"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-6 rounded-[34px] blur-2xl opacity-30"
            style={{
              background:
                "radial-gradient(closest-side, rgba(74,123,156,0.35), transparent 70%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}