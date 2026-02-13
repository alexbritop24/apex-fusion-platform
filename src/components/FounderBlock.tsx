import { ShieldCheck, Wrench, Layers } from "lucide-react";

export default function FounderBlock() {
  const points = [
    {
      title: "Durability over novelty",
      desc: "We build systems you can own, extend, and rely on — not trendy prototypes that collapse under growth.",
      icon: ShieldCheck,
    },
    {
      title: "Operations-first engineering",
      desc: "Everything starts with your workflows: intake, scheduling, follow-ups, fulfillment, and reporting.",
      icon: Wrench,
    },
    {
      title: "Product-level execution",
      desc: "Clean architecture, clear interfaces, and disciplined delivery — the same standards we apply to our own platform.",
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

            <p className="mt-6 text-lg font-light text-neutral-400 leading-relaxed">
              Apex Fusion Studios builds software and automation for established
              service businesses that are outgrowing duct-taped tools. We engineer
              operational backends — booking, workflows, integrations, and internal
              dashboards — so you can scale without multiplying headcount.
            </p>

            <p className="mt-6 text-sm font-light text-neutral-500 leading-relaxed">
              We ship with a product mindset across React + TypeScript, Swift, and
              Python — building durable systems with clear ownership, clean
              interfaces, and long-term maintainability.
            </p>

            <p className="mt-4 text-xs uppercase tracking-[0.22em] text-neutral-500">
              Stack: React / TypeScript · Swift · Python
            </p>

            <p className="mt-6 text-sm font-light text-neutral-500 leading-relaxed">
              Our flagship platform — the Apex Booking System — is the standard
              we hold ourselves to: production-grade, maintainable, and built to
              scale.
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
                If you’re serious about replacing manual operations with durable
                systems, we’ll be a strong fit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}