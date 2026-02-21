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
    <section className="px-8 lg:px-16 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left */}
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#3F6E8F]">
              Founder-led delivery
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.04em] text-neutral-100">
              Built by engineers.
              <br />
              Designed for operators.
            </h2>

            {/* ✅ SIMPLIFIED COPY */}
            <p className="mt-6 text-lg font-light text-neutral-400 leading-relaxed">
              We build software and automation that replaces manual work — booking,
              workflows, integrations, and internal dashboards — so you can scale
              without chaos.
            </p>

            <p className="mt-6 text-sm font-light text-neutral-500 leading-relaxed">
              If you’re ready to invest in a durable system (not a template), we’ll
              be a strong fit.
            </p>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-neutral-800/60 bg-black/30 p-10 backdrop-blur-xl md:p-12">
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
              Principles
            </p>

            <div className="mt-8 space-y-8">
              {points.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="flex gap-4">
                    <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-950">
                      <Icon className="h-5 w-5 text-[#3F6E8F]" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-light text-neutral-100">
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

            <div className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-950 px-6 py-5">
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