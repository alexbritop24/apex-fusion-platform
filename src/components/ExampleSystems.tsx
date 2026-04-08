// src/components/ExampleSystems.tsx
import {
  CalendarCheck2,
  MessageSquareText,
  Bot,
  LayoutDashboard,
} from "lucide-react";

const systems = [
  {
    title: "AI call & response system",
    description:
      "Handle inbound calls, missed calls, and lead qualification automatically — without your team picking up every time.",
    icon: Bot,
    image: "/infrastructure-grid.PNG",
  },
  {
    title: "Booking + client flow system",
    description:
      "Online booking, confirmations, reminders, deposits, and clean scheduling without manual coordination.",
    icon: CalendarCheck2,
    image: "/system-flow-orbs.PNG",
  },
  {
    title: "Lead follow-up automation",
    description:
      "Capture leads, reply instantly, and follow up automatically so no opportunity gets lost.",
    icon: MessageSquareText,
    image: "/automation-pipeline.PNG",
  },
  {
    title: "Operations dashboard",
    description:
      "Track bookings, leads, team activity, and performance in one clear system.",
    icon: LayoutDashboard,
    image: "/booking-dashboard.PNG",
  },
];

export default function ExampleSystems() {
  return (
    <section
      id="examples"
      className="px-6 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24 bg-neutral-950/30"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#3F6E8F]">
            Example systems
          </p>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.04em] text-neutral-100">
            Systems we can build
          </h2>

          <p className="mt-5 text-base sm:text-lg font-light text-neutral-400">
            From AI call handling to booking flows and internal dashboards —
            these are the systems that remove manual work and keep operations running clean.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {systems.map((system) => {
            const Icon = system.icon;

            return (
              <div
                key={system.title}
                className="group rounded-3xl border border-neutral-800/60 bg-black/30 backdrop-blur-xl transition-all duration-500 hover:border-[#3F6E8F]/40 hover:bg-neutral-900/40 overflow-hidden"
              >
                {/* IMAGE */}
                <div className="relative h-40 w-full overflow-hidden">
                  <img
                    src={system.image}
                    alt=""
                    className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="p-8">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#3F6E8F]/30 bg-[#3F6E8F]/10">
                    <Icon
                      className="h-6 w-6 text-[#5B8FB0]"
                      strokeWidth={2.1}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-5 text-xl font-light text-neutral-100">
                    {system.title}
                  </h3>

                  <p className="mt-3 text-sm font-light leading-relaxed text-neutral-400">
                    {system.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}