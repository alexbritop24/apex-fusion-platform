import { Check, X } from "lucide-react";

export default function WhoWeWorkWith() {
  const goodFit = [
    {
      title: "Operators scaling real operations",
      desc: "You have a working business, growing demand, and systems starting to break under load.",
    },
    {
      title: "Teams tired of duct-taped workflows",
      desc: "Manual coordination, scattered tools, and inconsistent processes are costing time and money.",
    },
    {
      title: "Businesses ready to invest in infrastructure",
      desc: "You want durable systems that compound — not quick fixes that collapse in 90 days.",
    },
  ];

  const notFor = [
    {
      title: "One-off landing page builds",
      desc: "If the goal is only “a website”, we’re not the right partner.",
    },
    {
      title: "Low-budget redesign projects",
      desc: "We focus on engineered systems. Serious outcomes require serious investment.",
    },
    {
      title: "Template-based solutions",
      desc: "We don’t sell themes. We build infrastructure tailored to your operations.",
    },
  ];

  return (
    <section className="px-8 lg:px-16 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.04em]">
            Fit matters.
          </h2>
          <p className="mt-6 text-lg font-light text-neutral-400">
            We work with operators who want durable systems — the kind that keep
            working as you grow.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* GOOD FIT */}
          <div className="rounded-3xl border border-neutral-800/60 bg-black/30 p-10 backdrop-blur-xl md:p-12">
            <p className="text-xs uppercase tracking-[0.22em] text-[#3F6E8F]">
              Who we work with
            </p>

            <div className="mt-8 space-y-6">
              {goodFit.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950">
                    <Check className="h-4 w-4 text-[#3F6E8F]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-neutral-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-neutral-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-sm font-light text-neutral-500">
              If you’re ready to replace operational friction with engineered
              workflows, this is for you.
            </p>
          </div>

          {/* NOT FOR */}
          <div className="rounded-3xl border border-neutral-800/60 bg-black/30 p-10 backdrop-blur-xl md:p-12">
            <p className="text-xs uppercase tracking-[0.22em] text-[#3F6E8F]">
              Who we’re not for
            </p>

            <div className="mt-8 space-y-6">
              {notFor.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950">
                    <X className="h-4 w-4 text-neutral-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-neutral-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-neutral-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-sm font-light text-neutral-500">
              If you need a quick template or a low-commitment build, we’ll
              recommend a better fit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}