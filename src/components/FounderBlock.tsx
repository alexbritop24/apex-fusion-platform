// src/components/FounderBlock.tsx
import { ShieldCheck, Wrench, Layers } from "lucide-react";

export default function FounderBlock() {
  const points = [
    {
      title: "Built to last",
      desc: "Clean systems you can own, extend, and rely on — not fragile quick fixes.",
      icon: ShieldCheck,
    },
    {
      title: "Ops-first",
      desc: "We start with the workflow: intake, scheduling, follow-ups, fulfillment, reporting.",
      icon: Wrench,
    },
    {
      title: "Product-level execution",
      desc: "Clear architecture, disciplined delivery, and stable releases.",
      icon: Layers,
    },
  ];

  return (
    <section className="px-6 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          {/* Left */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#3F6E8F]">
              Founder-led delivery
            </p>

            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.04em] text-neutral-100 leading-[1.05]">
              Built by engineers.
              <br />
              Designed for operators.
            </h2>

            {/* Simplified core message */}
            <p className="mt-6 text-base sm:text-lg font-light text-neutral-400 leading-relaxed max-w-xl">
              We build software and automation that replaces manual work —
              booking, workflows, integrations, and internal dashboards —
              so you can scale without chaos.
            </p>

            <p className="mt-5 text-sm font-light text-neutral-500 leading-relaxed max-w-xl">
              If you’re ready to invest in a durable system (not a template),
              we’ll be a strong fit.
            </p>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-neutral-800/60 bg-black/30 p-8 md:p-10 backdrop-blur-xl">
            <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
              Principles
            </p>

            <div className="mt-8 space-y-7">
              {points.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="flex gap-4">
                    <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-950">
                      <Icon
                        className="h-5 w-5 text-[#3F6E8F]"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-light text-neutral-100">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm font-light leading-relaxed text-neutral-400">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-9 rounded-2xl border border-neutral-800 bg-neutral-950 px-6 py-5">
              <p className="text-sm font-light text-neutral-300">
                Fast fit check → clear plan → clean build → stable delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}