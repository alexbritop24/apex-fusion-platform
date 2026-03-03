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
    <section className="bg-neutral-950/30 px-6 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left: content */}
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
              follow-ups, routing, handoffs, and dashboards.
            </span>
          </p>

          <ul className="mt-8 space-y-4">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-neutral-300">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 border border-neutral-800">
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
              className="group inline-flex items-center gap-2 text-sm font-medium text-brand-400 hover:text-brand-500 transition-colors duration-500 focus-visible:ring-2 focus-visible:ring-brand-400 rounded-md px-2 py-2 -ml-2"
            >
              Talk through your workflow
              <span className="transition-transform duration-500 group-hover:translate-x-0.5">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Right: browser mock */}
        <div className="relative">
          <div className="rounded-2xl border border-neutral-800/50 bg-neutral-900/70 backdrop-blur-xl p-6 shadow-2xl shadow-black/60">
            {/* Browser chrome */}
            <div className="flex items-center justify-between gap-4 border-b border-neutral-800/70 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
              </div>

              <div className="flex-1 px-4">
                <div className="mx-auto max-w-sm rounded-full border border-neutral-800 bg-neutral-950 px-4 py-1.5 text-xs text-neutral-400">
                  dashboard
                </div>
              </div>

              <div className="w-10" />
            </div>

            {/* Dashboard content */}
            <div className="pt-6">
              <div className="flex items-start justify-between gap-8">
                <div>
                  <p className="text-sm text-neutral-400">Today</p>
                  <h3 className="mt-2 text-2xl font-extralight text-neutral-100">
                    Upcoming appointments
                  </h3>
                </div>

                <div className="hidden sm:block rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3">
                  <p className="text-xs text-neutral-500">Status</p>
                  <p className="mt-1 text-sm text-neutral-200">On track</p>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <AppointmentRow time="9:00 AM" name="Sarah Johnson" initials="SJ" />
                <AppointmentRow
                  time="11:30 AM"
                  name="Michael Chen"
                  initials="MC"
                />
                <AppointmentRow time="2:00 PM" name="Emma Davis" initials="ED" />
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <StatCard label="Bookings (30d)" value="24" />
                <StatCard label="Show rate" value="98%" />
              </div>
            </div>
          </div>

          {/* subtle edge glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-6 rounded-[28px] blur-2xl opacity-30"
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

function AppointmentRow({
  time,
  name,
  initials,
}: {
  time: string;
  name: string;
  initials: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-neutral-800/70 bg-neutral-950 px-4 py-3 transition-transform duration-500 hover:translate-y-[-1px]">
      <div className="flex items-center gap-4">
        <div className="w-20 text-sm text-neutral-400">{time}</div>

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900 text-xs text-brand-400">
            {initials}
          </div>
          <div className="text-sm text-neutral-200">{name}</div>
        </div>
      </div>

      <div className="hidden sm:flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-brand-400" />
        <span className="text-xs text-neutral-500">Confirmed</span>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
      <p className="text-xs text-neutral-500">{label}</p>
      <p className="mt-2 text-2xl font-extralight text-neutral-100">{value}</p>
    </div>
  );
}