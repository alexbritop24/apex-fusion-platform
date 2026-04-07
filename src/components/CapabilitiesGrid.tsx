// src/components/CapabilitiesGrid.tsx
import { PhoneCall, CalendarCheck2, Workflow, Blocks } from "lucide-react";

const capabilities = [
  {
    title: "AI Call & Response Systems",
    description:
      "AI handles inbound calls, missed calls, lead qualification, and first-response workflows automatically.",
    Icon: PhoneCall,
  },
  {
    title: "Booking & Client Flow Systems",
    description:
      "Booking, reminders, deposits, intake, and follow-up systems that keep clients moving without manual chasing.",
    Icon: CalendarCheck2,
  },
  {
    title: "Business Automation Systems",
    description:
      "Lead routing, onboarding, proposals, CRM workflows, and internal operations that run automatically.",
    Icon: Workflow,
  },
  {
    title: "Custom Software & Websites",
    description:
      "Websites, dashboards, portals, and internal tools built around how your business actually operates.",
    Icon: Blocks,
  },
];

export default function CapabilitiesGrid() {
  return (
    <section className="relative overflow-hidden px-6 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
      {/* subtle background image */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <img
          src="/system-flow-orbs.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* soft dark overlay so text stays readable */}
      <div className="pointer-events-none absolute inset-0 bg-black/40" />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] text-brand-400">
            Systems we build
          </p>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.04em] text-neutral-100">
            Four ways we help businesses run better.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base sm:text-lg font-light text-neutral-400">
            AI systems, automation, booking flows, and custom software — built to
            reduce manual work and make operations cleaner.
          </p>
        </div>

        <div className="mt-14 rounded-3xl border border-neutral-800/70 bg-black/40 backdrop-blur-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
            {capabilities.map(({ title, description, Icon }) => (
              <div
                key={title}
                className="group relative bg-black/70 p-8 md:p-10 transition-all duration-500 hover:bg-neutral-900/70"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-950 text-brand-400 transition-colors duration-500 group-hover:text-brand-300">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>

                <h3 className="mt-5 text-xl md:text-2xl font-light text-neutral-100 transition-colors duration-500 group-hover:text-brand-400">
                  {title}
                </h3>

                <p className="mt-3 max-w-md text-sm sm:text-base font-light leading-relaxed text-neutral-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm font-light text-neutral-500">
            Founder-led builds. Clear process. Durable systems.
          </p>
        </div>
      </div>
    </section>
  );
}