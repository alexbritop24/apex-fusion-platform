import { useState } from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import BookingModal from "../components/BookingModal";
import Footer from "../components/Footer";
import { Check, ArrowRight } from "lucide-react";

export default function SystemsAudit() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const bottlenecks = [
    {
      title: "Scheduling chaos",
      desc: "No real availability logic, inconsistent confirmations, and manual rescheduling that leaks time.",
    },
    {
      title: "Broken handoffs",
      desc: "Lead → intake → booking → fulfillment isn’t one system, so work gets dropped or duplicated.",
    },
    {
      title: "No-show + policy leakage",
      desc: "Weak deposit/no-show enforcement and no clean way to track exceptions or follow-up outcomes.",
    },
    {
      title: "Tool sprawl",
      desc: "Calendar, forms, payments, email/SMS, CRM — none of it syncs, so you rebuild the truth manually.",
    },
    {
      title: "No operational visibility",
      desc: "You can’t see volume, capacity, utilization, or bottlenecks — so scaling becomes guesswork.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-[#f5f5f5]">
      <SEO
        title="Free Systems Audit | Apex Fusion Studios"
        description="Request a free systems audit. We identify bottlenecks in scheduling, automation, and operations — and reply within 24 hours."
        path="/systems-audit"
      />

      <Navigation onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

      <main id="main" className="pt-28 px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          {/* HERO */}
          <section className="relative overflow-hidden py-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full blur-3xl"
              style={{ background: "#3F6E8F", opacity: 0.03 }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-48 -right-48 h-[620px] w-[620px] rounded-full blur-3xl"
              style={{ background: "#3F6E8F", opacity: 0.03 }}
            />

            <div className="relative">
              <p className="text-xs uppercase tracking-[0.22em] text-[#3F6E8F]">
                Free systems audit
              </p>

              <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extralight tracking-[-0.04em] leading-none text-neutral-100">
                Find what’s slowing
                <br />
                your operation down.
              </h1>

              <p className="mt-8 max-w-3xl text-lg md:text-xl font-light text-neutral-400 leading-relaxed">
                We review your workflow and tooling, identify the highest-leverage bottlenecks,
                and respond with a clear systems-first path forward.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className={[
                    "rounded-full px-10 py-5 text-lg font-semibold text-white",
                    "bg-gradient-to-b from-[#3F6E8F] to-[#2F5D7C]",
                    "shadow-xl shadow-[#3F6E8F]/25",
                    "transition-all duration-500",
                    "hover:from-[#5B8FB0] hover:to-[#3F6E8F] hover:shadow-[#5B8FB0]/30 hover:-translate-y-1",
                    "focus-visible:ring-2 focus-visible:ring-[#3F6E8F]",
                  ].join(" ")}
                >
                  Request a Systems Assessment
                </button>

                <p className="text-sm text-neutral-500 font-light">
                  We reply within 24 hours.
                </p>
              </div>
            </div>
          </section>

          {/* BOTTLENECKS */}
          <section className="py-14">
            <h2 className="text-3xl md:text-4xl font-extralight tracking-[-0.03em] text-neutral-100">
              Common bottlenecks we audit
            </h2>
            <p className="mt-4 text-neutral-400 font-light leading-relaxed max-w-3xl">
              If any of these are true, you’re already paying for it in time, errors, and missed follow-ups.
            </p>

            <div className="mt-10 grid gap-px bg-neutral-800/60 rounded-3xl overflow-hidden md:grid-cols-2">
              {bottlenecks.map((b) => (
                <div
                  key={b.title}
                  className="bg-black p-10 transition-all duration-500 hover:bg-neutral-900/60"
                >
                  <h3 className="text-xl font-light text-neutral-100">{b.title}</h3>
                  <p className="mt-4 text-sm font-light leading-relaxed text-neutral-400">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* WHAT YOU GET */}
          <section className="py-14">
            <div className="rounded-3xl border border-neutral-800/60 bg-black/30 p-10 backdrop-blur-xl">
              <h2 className="text-3xl font-extralight tracking-[-0.03em] text-neutral-100">
                What you get
              </h2>

              <ul className="mt-8 space-y-3 text-sm font-light text-neutral-300">
                {[
                  "A bottleneck map (what’s breaking, where time leaks)",
                  "The highest-leverage system to fix first",
                  "A recommended architecture direction (simple + maintainable)",
                  "A clear next step if you want us to build it",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/5">
                      <Check className="h-3.5 w-3.5 text-[#3F6E8F]" aria-hidden="true" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="rounded-lg border border-neutral-800 bg-black px-5 py-3 text-sm font-semibold text-neutral-100 transition-all duration-500 hover:border-[#3F6E8F]/60 hover:text-white focus-visible:ring-2 focus-visible:ring-[#3F6E8F]"
                >
                  Request a Systems Assessment
                </button>

                <a
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors duration-500 hover:text-[#3F6E8F]"
                >
                  Explore services <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>

          <section className="pt-8 pb-24">
            <div className="flex flex-wrap gap-3">
              <a
                href="/systems-for-service-businesses"
                className="rounded-full border border-neutral-800 bg-black/40 px-5 py-2 text-sm text-neutral-300 transition-all duration-500 hover:border-[#3F6E8F]/60 hover:text-white"
              >
                Systems for Service Businesses
              </a>
              <a
                href="/"
                className="rounded-full border border-neutral-800 bg-black/40 px-5 py-2 text-sm text-neutral-300 transition-all duration-500 hover:border-[#3F6E8F]/60 hover:text-white"
              >
                Home
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}