import { useState } from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import BookingModal from "../components/BookingModal";
import Footer from "../components/Footer";

export default function SystemsForServiceBusinesses() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-[#f5f5f5]">
      <SEO
        title="Systems for Service Businesses | Apex Fusion Studios"
        description="We rebuild operational backends for service businesses — booking, automation, dashboards, and integrations — so you scale without multiplying headcount."
        path="/systems-for-service-businesses"
      />

      <Navigation />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

      <main id="main" className="pt-28">
        {/* 1) HERO */}
        <section className="relative overflow-hidden px-8 py-20 lg:px-16 lg:py-24">
          {/* subtle background orbs */}
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

          <div className="relative mx-auto max-w-5xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#3F6E8F]">
              Systems for service businesses
            </p>

            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extralight tracking-[-0.04em] leading-[1.02] text-neutral-100">
              Your ops shouldn’t break
              <br />
              when demand grows.
            </h1>

            <p className="mt-7 max-w-3xl text-lg md:text-xl font-light text-neutral-400 leading-relaxed">
              We rebuild operational backends so your business scales without
              more headcount: booking infrastructure, automation workflows,
              internal dashboards, and the integrations that keep everything in
              sync.
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
                15-minute fit call. No obligation.
              </p>
            </div>
          </div>
        </section>

        <div className="px-8 lg:px-16">
          <div className="mx-auto max-w-5xl">
            {/* 2) WHAT BREAKS */}
            <section className="mt-10">
              <h2 className="text-3xl md:text-4xl font-extralight tracking-[-0.03em] text-neutral-100">
                What breaks first as you grow
              </h2>
              <p className="mt-4 text-neutral-400 font-light leading-relaxed">
                The failure points are predictable. We fix the root system, not
                the symptoms.
              </p>

              <div className="mt-10 grid gap-px bg-neutral-800/60 rounded-3xl overflow-hidden md:grid-cols-2">
                {[
                  {
                    title: "Leads leak",
                    desc: "No consistent intake flow. Messages get missed. Follow-ups are manual.",
                  },
                  {
                    title: "Scheduling becomes chaos",
                    desc: "Double bookings, unclear availability, and constant rescheduling friction.",
                  },
                  {
                    title: "Manual admin expands forever",
                    desc: "Every new booking adds coordination, reminders, and spreadsheets.",
                  },
                  {
                    title: "No operational visibility",
                    desc: "You can’t see capacity, utilization, no-shows, or bottlenecks fast enough.",
                  },
                  {
                    title: "Tools don’t talk",
                    desc: "Calendar, payments, forms, CRM, and notes live in separate islands.",
                  },
                  {
                    title: "Inconsistent handoffs",
                    desc: "Fulfillment depends on people remembering steps instead of the system enforcing them.",
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="bg-black p-10 transition-all duration-500 hover:bg-neutral-900/60"
                  >
                    <h3 className="text-xl font-light text-neutral-100">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-sm font-light leading-relaxed text-neutral-400">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3) WHAT WE REBUILD */}
            <section className="mt-20">
              <h2 className="text-3xl md:text-4xl font-extralight tracking-[-0.03em] text-neutral-100">
                What we rebuild
              </h2>
              <p className="mt-4 text-neutral-400 font-light leading-relaxed">
                We install a durable operating layer — so execution stays clean
                as volume increases.
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "Intake → booking → follow-up",
                    desc: "A single flow from lead capture to scheduled revenue — with confirmations and reminders built in.",
                  },
                  {
                    title: "Payments + policies",
                    desc: "Deposits, invoices, no-show rules, receipts, and clean reconciliation that matches how you operate.",
                  },
                  {
                    title: "Visibility + dashboards",
                    desc: "Real reporting on volume, utilization, outcomes, and the bottlenecks that slow the team down.",
                  },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="rounded-3xl border border-neutral-800/60 bg-black/30 p-10 backdrop-blur-xl transition-all duration-500 hover:border-[#3F6E8F]/40 hover:bg-neutral-900/30"
                  >
                    <p className="text-xs uppercase tracking-[0.22em] text-[#3F6E8F]">
                      Core layer
                    </p>
                    <h3 className="mt-5 text-2xl font-light text-neutral-100">
                      {c.title}
                    </h3>
                    <p className="mt-4 text-sm font-light leading-relaxed text-neutral-400">
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4) PROCESS (3 STEPS) */}
            <section className="mt-20 rounded-3xl border border-neutral-800/60 bg-neutral-950/30 p-10 backdrop-blur-xl">
              <h2 className="text-3xl font-extralight tracking-[-0.03em] text-neutral-100">
                The process
              </h2>
              <p className="mt-4 text-neutral-400 font-light leading-relaxed">
                We reduce risk by defining the system before building it — then
                ship in measurable increments.
              </p>

              <div className="mt-10 grid gap-8 md:grid-cols-3">
                {[
                  {
                    step: "01",
                    title: "Audit",
                    desc: "Map workflows, identify bottlenecks, and define what must be automated or rebuilt.",
                  },
                  {
                    step: "02",
                    title: "Blueprint",
                    desc: "Design boundaries, data model, and integrations so the build is predictable and clean.",
                  },
                  {
                    step: "03",
                    title: "Build",
                    desc: "Ship production-grade systems, then harden with monitoring, performance budgets, and guardrails.",
                  },
                ].map((s) => (
                  <div
                    key={s.step}
                    className="rounded-2xl border border-neutral-800 bg-black/40 p-8"
                  >
                    <p className="text-xs tracking-[0.22em] text-neutral-500">
                      STEP {s.step}
                    </p>
                    <h3 className="mt-4 text-xl font-light text-neutral-100">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm font-light leading-relaxed text-neutral-400">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 5) FINAL CTA */}
            <section className="mt-20 pb-24">
              <div className="rounded-3xl border border-neutral-800/60 bg-black/30 p-10 text-center backdrop-blur-xl md:p-14">
                <h2 className="text-3xl font-extralight tracking-[-0.04em] md:text-4xl lg:text-5xl">
                  Ready to stop patching ops?
                </h2>
                <p className="mx-auto mt-6 max-w-3xl text-lg font-light text-neutral-400">
                  If you’re serious about replacing manual coordination with
                  durable infrastructure, we’ll map the system and ship it with
                  precision.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
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
                    15-minute fit call. No obligation.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}