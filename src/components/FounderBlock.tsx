// src/components/FounderBlock.tsx
import { ShieldCheck, Wrench, Layers } from "lucide-react";

export default function FounderBlock() {
  const points = [
    {
      title: "Built to last",
      desc: "We build systems you can own and rely on — clean foundations that don’t break as you grow.",
      icon: ShieldCheck,
    },
    {
      title: "Operations-first",
      desc: "We start with your workflow: intake, scheduling, follow-ups, fulfillment, and reporting.",
      icon: Wrench,
    },
    {
      title: "Product-level execution",
      desc: "Clear architecture, clear interfaces, disciplined delivery — the same standard we use for our own platform.",
      icon: Layers,
    },
  ];

  return (
    <section className="px-8 lg:px-16 py-20">
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

            <p className="mt-6 text-lg font-light text-neutral-400 leading-relaxed">
              We build software and automation that replaces manual work —
              booking, workflows, integrations, and internal dashboards —
              so you can scale without chaos.
            </p>

            <p className="mt-6 text-sm font-light text-neutral-500 leading-relaxed">
              If you’re ready to invest in a real system (not a quick fix), we’ll
              map the workflow and ship it clean.
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
                      <Icon
                        className="h-5 w-5 text-[#3F6E8F]"
                        aria-hidden="true"
                      />
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
                If you want a stable system that actually runs the business,
                we’ll be a strong fit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}