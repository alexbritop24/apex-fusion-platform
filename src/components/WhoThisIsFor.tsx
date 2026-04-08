import { CheckCircle2, XCircle } from "lucide-react";

const goodFit = [
  {
    title: "Service businesses with real lead flow",
    description:
      "You already get inquiries, calls, bookings, or form submissions — but your systems are messy or manual.",
  },
  {
    title: "Teams losing time to repetitive work",
    description:
      "Your staff is stuck doing confirmations, follow-ups, reminders, routing, and admin work by hand.",
  },
  {
    title: "Operators who need cleaner execution",
    description:
      "You want a business that responds faster, drops fewer leads, and runs with less chaos.",
  },
  {
    title: "Businesses ready to invest in real systems",
    description:
      "You’re looking for durable infrastructure, not a cheap patch or a one-week hack job.",
  },
];

const notFit = [
  {
    title: "Businesses looking for the cheapest option",
    description:
      "If price is the only priority, there are better fits than Apex.",
  },
  {
    title: "Teams that do not want to change anything",
    description:
      "Automation only works when the business is ready to improve the workflow behind it.",
  },
  {
    title: "Projects with no clear business use",
    description:
      "We focus on systems that improve response time, operations, bookings, and revenue.",
  },
];

export default function WhoThisIsFor() {
  return (
    <section className="relative overflow-hidden px-6 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24 bg-neutral-950/30">
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
            Who this is for
          </p>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.04em] text-neutral-100">
            Built for businesses that need better systems
          </h2>

          <p className="mt-5 text-base sm:text-lg font-light text-neutral-400">
            Apex is a strong fit for businesses that already have momentum — but
            need cleaner operations, faster response systems, and less manual work.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Good fit */}
          <div className="rounded-3xl border border-neutral-800/60 bg-black/30 p-8 md:p-10 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#3F6E8F]">
              Good fit
            </p>

            <div className="mt-8 space-y-6">
              {goodFit.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-950">
                    <CheckCircle2
                      className="h-5 w-5 text-[#5B8FB0]"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="text-base md:text-lg font-light text-neutral-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Not fit */}
          <div className="rounded-3xl border border-neutral-800/60 bg-black/30 p-8 md:p-10 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#3F6E8F]">
              Not the best fit
            </p>

            <div className="mt-8 space-y-6">
              {notFit.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-950">
                    <XCircle
                      className="h-5 w-5 text-neutral-500"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="text-base md:text-lg font-light text-neutral-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm font-light text-neutral-500">
              We’re focused on systems that solve real operational bottlenecks,
              not generic one-off projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}