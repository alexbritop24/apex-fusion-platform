// src/components/CapabilitiesGrid.tsx
import { Code, Zap, Layers, Database } from "lucide-react";

const capabilities = [
  {
    title: "Custom Software",
    description:
      "We build the tools your team actually needs — client portals, dashboards, internal systems, and admin panels.",
    Icon: Code,
  },
  {
    title: "Automation",
    description:
      "We remove repetitive work — auto follow-ups, reminders, task routing, forms → spreadsheets/CRM, and clean handoffs.",
    Icon: Zap,
  },
  {
    title: "AI + Smart Tools",
    description:
      "We add helpful AI where it makes sense — faster replies, better intake, smarter scheduling, and cleaner ops.",
    Icon: Layers,
  },
  {
    title: "Reliable Setup",
    description:
      "We set it up so it runs every day — integrations, tracking, permissions, and a system you can keep using.",
    Icon: Database,
  },
];

export default function CapabilitiesGrid() {
  return (
    <section className="px-6 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] text-brand-400">
            What we do
          </p>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.04em] text-neutral-100">
            We build systems that save time.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base sm:text-lg font-light text-neutral-400">
            Less manual work. Fewer mistakes. Faster follow-ups. Clearer operations.
          </p>
        </div>

        <div className="mt-14 rounded-3xl border border-neutral-800 bg-neutral-800/60 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
            {capabilities.map(({ title, description, Icon }) => (
              <div
                key={title}
                className="group relative bg-black p-8 md:p-10 transition-colors duration-500 hover:bg-neutral-900/70"
              >
                <Icon className="h-8 w-8 text-brand-400 transition-colors duration-500 group-hover:text-brand-300" />

                <h3 className="mt-5 text-xl md:text-2xl font-light text-neutral-100 transition-colors duration-500 group-hover:text-brand-400">
                  {title}
                </h3>

                <p className="mt-3 text-sm sm:text-base font-light text-neutral-400 max-w-md leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}