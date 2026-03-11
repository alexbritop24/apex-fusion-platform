// src/components/ProblemsWeFix.tsx
import { TriangleAlert } from "lucide-react";

const problems = [
  {
    title: "Leads slipping through the cracks",
    description:
      "People message, call, or fill out forms — but no one follows up consistently.",
  },
  {
    title: "Manual booking and scheduling",
    description:
      "Your team spends too much time managing calendars, confirmations, and reminders.",
  },
  {
    title: "Slow responses to customers",
    description:
      "Potential clients wait too long for answers and end up going somewhere else.",
  },
  {
    title: "Disconnected tools and messy workflows",
    description:
      "Information lives in too many places and your team wastes time coordinating.",
  },
];

export default function ProblemsWeFix() {
  return (
    <section className="px-6 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#3F6E8F]">
            Common problems
          </p>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.04em] text-neutral-100">
            Problems we fix
          </h2>

          <p className="mt-5 text-base sm:text-lg font-light text-neutral-400">
            Most businesses don’t need more tools. They need fewer manual steps
            and cleaner systems.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border border-neutral-800/60 bg-black/30 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5 hover:border-[#3F6E8F]/40 hover:bg-neutral-900/40"
            >
              <div className="inline-flex h-12 items-center rounded-full border border-[#3F6E8F]/30 bg-[#3F6E8F]/10 px-4">
              <span className="text-sm font-semibold tracking-wide text-[#7FB2D1]">
                        ISSUE
              </span>
              </div>

              <h3 className="mt-5 text-xl font-light text-neutral-100">
                {p.title}
              </h3>

              <p className="mt-3 text-sm font-light leading-relaxed text-neutral-400">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}