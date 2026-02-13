import { Check } from "lucide-react";

type PlatformHighlightProps = {
  onOpenBooking: () => void;
};

const features = [
  "Automated workflows",
  "Real-time availability",
  "Payment processing",
  "Analytics dashboard",
];

export default function PlatformHighlight({ onOpenBooking }: PlatformHighlightProps) {
  return (
    <section className="bg-neutral-950/30 px-8 lg:px-16 py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left: content */}
        <div>
          <p className="text-xs tracking-widest uppercase text-brand-400">
            Flagship Product
          </p>

          <h2 className="mt-4 text-5xl lg:text-6xl font-extralight tracking-tight leading-none">
            Apex Booking System
          </h2>

          <p className="mt-6 text-lg text-neutral-400 max-w-xl">
            Enterprise-grade scheduling infrastructure built for teams that want fewer
            missed appointments, tighter operations, and a booking experience that feels
            premium end-to-end.
          </p>

          <ul className="mt-10 space-y-4">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-neutral-300">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 border border-neutral-800">
                  <Check className="h-4 w-4 text-brand-400" />
                </span>
                <span className="text-base">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <button
              type="button"
              onClick={onOpenBooking}
              className="group inline-flex items-center gap-2 text-brand-400 hover:text-brand-500 transition-colors duration-500 focus-visible:ring-2 focus-visible:ring-brand-400 rounded-md px-2 py-2 -ml-2"
            >
              Experience it yourself <span className="transition-transform duration-500 group-hover:translate-x-0.5">→</span>
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
                  apexbooking.com/dashboard
                </div>
              </div>
              <div className="w-10" />
            </div>

            {/* Dashboard content */}
            <div className="pt-6">
              <div className="flex items-start justify-between gap-8">
                <div>
                  <p className="text-sm text-neutral-400">Dashboard</p>
                  <h3 className="mt-2 text-2xl font-extralight">Upcoming Appointments</h3>
                </div>

                <div className="hidden sm:block rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3">
                  <p className="text-xs text-neutral-500">Today</p>
                  <p className="mt-1 text-sm text-neutral-200">Wed • 9:12 AM</p>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <AppointmentRow time="9:00 AM" name="Sarah Johnson" initials="SJ" />
                <AppointmentRow time="11:30 AM" name="Michael Chen" initials="MC" />
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
        <div className="text-sm text-neutral-400 w-20">{time}</div>

        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-xs text-brand-400">
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