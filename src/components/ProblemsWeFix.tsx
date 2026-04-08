// src/components/ProblemsWeFix.tsx
import { AlertTriangle } from "lucide-react";

const problems = [
  {
    title: "Leads come in, but response is too slow",
    description:
      "Calls, messages, and form submissions are not handled fast enough, so opportunities get lost before your team replies.",
  },
  {
    title: "Too much manual follow-up",
    description:
      "Your team is stuck sending reminders, checking in with leads, and moving work forward by hand.",
  },
  {
    title: "Systems do not talk to each other",
    description:
      "Information is scattered across forms, calendars, inboxes, spreadsheets, and tools that were never built to work together.",
  },
  {
    title: "No clear visibility into operations",
    description:
      "You cannot easily see what is happening with leads, bookings, team activity, or where the workflow is breaking.",
  },
];

export default function ProblemsWeFix() {
  return (
    <section className="relative overflow-hidden px-6 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
      {/* subtle background image */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <img
          src="/signal-burst.PNG"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#3F6E8F]">
            Common problems
          </p>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.04em] text-neutral-100">
            Problems we fix
          </h2>

          <p className="mt-5 text-base sm:text-lg font-light text-neutral-400">
            Most businesses do not need more tools. They need better systems,
            faster response, and cleaner operations.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border border-neutral-800/60 bg-black/30 p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#3F6E8F]/40 hover:bg-neutral-900/40"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-950 text-[#3F6E8F]">
                <AlertTriangle className="h-5 w-5" aria-hidden="true" />
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