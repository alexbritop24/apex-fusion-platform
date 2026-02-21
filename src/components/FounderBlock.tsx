// src/components/FounderBlock.tsx
import { ShieldCheck, Wrench, Layers } from "lucide-react";

export default function FounderBlock() {
  const points = [
    {
      title: "Built to last",
      desc: "We create systems you can own and extend — not quick fixes that break when you grow.",
      icon: ShieldCheck,
    },
    {
      title: "Designed around your workflow",
      desc: "Intake, scheduling, follow-ups, fulfillment, reporting — everything starts with how you actually operate.",
      icon: Wrench,
    },
    {
      title: "Executed with discipline",
      desc: "Clean architecture, clear logic, and structured delivery from start to finish.",
      icon: Layers,
    },
  ];

  return (
    <section className="px-6 md:px-8 lg:px-16 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          {/* Left */}
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#3F6E8F]">
              Founder-led delivery
            </p>

            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.04em] text-neutral-100 leading-[1.05]">
              Built by engineers.
              <br />
              Designed for operators.
            </h2>

            <p className="mt-6 text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
              We build custom software and automation for service businesses
              that are outgrowing spreadsheets, DMs, and patchwork tools.
            </p>

            <p className="mt-5 text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
              The goal is simple: fewer manual steps, clearer processes,
              and systems that support growth instead of slowing it down.
            </p>

            <p className="mt-6 text-sm text-neutral-500 font-light leading-relaxed">
              Our flagship product — the Apex Booking System — reflects the same
              standards we apply to every client build.
            </p>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-neutral-800/60 bg-black/30 p-8 md:p-10 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
              How we work
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
                      <h3 className="text-base sm:text-lg font-light text-neutral-100">
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
                If you’re ready to replace manual operations with a real system,
                we’ll be a strong fit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}