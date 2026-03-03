// src/components/WhoWeWorkWith.tsx
import { Check, X } from "lucide-react";

export default function WhoWeWorkWith() {
  // ✅ Simplified language: obvious, human, value-forward
  const goodFit = [
    {
      title: "Businesses that are busy (and growing)",
      desc: "You’re getting more customers, but the admin work is piling up and things are starting to slip.",
    },
    {
      title: "Teams stuck doing everything manually",
      desc: "Too many texts, spreadsheets, DMs, and “who’s handling this?” moments.",
    },
    {
      title: "Owners ready to fix the system for real",
      desc: "You want a setup that keeps working long-term — not another quick patch.",
    },
  ];

  const notFor = [
    {
      title: "Just a quick website",
      desc: "If you only need a simple page and nothing else, we’re not the best fit.",
    },
    {
      title: "Lowest-price shopping",
      desc: "We build serious systems. That means real planning, real work, and real results.",
    },
    {
      title: "Templates and “copy/paste” builds",
      desc: "We don’t sell themes. We build around your workflow and how your business actually runs.",
    },
  ];

  return (
    <section className="px-6 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.04em]">
            Fit matters.
          </h2>
          <p className="mt-5 text-base sm:text-lg font-light text-neutral-400">
            We’re for businesses that want fewer manual steps and a cleaner way
            to run day-to-day operations.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* GOOD FIT */}
          <div className="rounded-3xl border border-neutral-800/60 bg-black/30 p-8 md:p-10 backdrop-blur-xl">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#3F6E8F]">
              Who we work with
            </p>

            <div className="mt-8 space-y-6">
              {goodFit.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950">
                    <Check
                      className="h-4 w-4 text-[#3F6E8F]"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-light text-neutral-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-neutral-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm font-light text-neutral-500">
              If you want less chaos and more control, this is a good fit.
            </p>
          </div>

          {/* NOT FOR */}
          <div className="rounded-3xl border border-neutral-800/60 bg-black/30 p-8 md:p-10 backdrop-blur-xl">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#3F6E8F]">
              Who we’re not for
            </p>

            <div className="mt-8 space-y-6">
              {notFor.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950">
                    <X
                      className="h-4 w-4 text-neutral-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-light text-neutral-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-neutral-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm font-light text-neutral-500">
              If you need something quick and cheap, we’ll point you to a better
              option.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}