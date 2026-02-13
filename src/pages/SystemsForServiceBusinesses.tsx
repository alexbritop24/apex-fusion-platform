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

      <Navigation onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

      <main id="main" className="pt-28 px-8 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.22em] text-[#3F6E8F]">
            Systems for service businesses
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extralight tracking-[-0.04em] leading-none text-neutral-100">
            Scale operations
            <br />
            without scaling headcount.
          </h1>

          <p className="mt-8 text-lg md:text-xl font-light text-neutral-400 leading-relaxed">
            Apex Fusion Studios builds operational backends for established service
            businesses: booking infrastructure, automation workflows, internal
            dashboards, and the integrations that keep everything in sync.
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

          {/* What we build */}
          <section className="mt-20">
            <h2 className="text-3xl md:text-4xl font-extralight tracking-[-0.03em] text-neutral-100">
              What we build for service operators
            </h2>
            <p className="mt-4 text-neutral-400 font-light leading-relaxed">
              These are the core systems that usually break first as demand grows.
              We rebuild them as a durable operating layer.
            </p>

            <div className="mt-10 grid gap-px bg-neutral-800/60 rounded-3xl overflow-hidden md:grid-cols-2">
              {[
                {
                  title: "Booking + scheduling infrastructure",
                  desc: "Real availability logic, confirmations, reminders, rescheduling flows, and admin controls.",
                },
                {
                  title: "Automation workflows",
                  desc: "Reduce manual handoffs: intake → booking → follow-up → payment → reporting.",
                },
                {
                  title: "Payments + policies",
                  desc: "Deposits, no-show policies, invoices, receipts, and clean reconciliation workflows.",
                },
                {
                  title: "Dashboards + reporting",
                  desc: "Visibility into volume, capacity, utilization, outcomes, and operational bottlenecks.",
                },
                {
                  title: "Integrations",
                  desc: "Connect tools you already use (calendar, CRM, email/SMS, forms, payments, internal tools).",
                },
                {
                  title: "Internal tools",
                  desc: "Purpose-built admin systems so teams execute faster with fewer errors.",
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

          {/* Who it’s for / not for */}
          <section className="mt-20 grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-neutral-800/60 bg-black/30 p-10 backdrop-blur-xl">
              <h2 className="text-2xl font-extralight text-neutral-100">
                A strong fit if
              </h2>
              <ul className="mt-6 space-y-3 text-sm font-light text-neutral-400">
                <li>• You’re losing time to manual scheduling and admin work.</li>
                <li>• Your tools don’t talk to each other (duplicate entry everywhere).</li>
                <li>• You need reliability, not another “quick fix.”</li>
                <li>• You want systems that scale with real demand.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-neutral-800/60 bg-black/30 p-10 backdrop-blur-xl">
              <h2 className="text-2xl font-extralight text-neutral-100">
                Not a fit if
              </h2>
              <ul className="mt-6 space-y-3 text-sm font-light text-neutral-400">
                <li>• You only need a one-off landing page.</li>
                <li>• You’re looking for template-based solutions.</li>
                <li>• You want the cheapest option.</li>
                <li>• You aren’t ready to invest in durable infrastructure.</li>
              </ul>
            </div>
          </section>

          {/* Process */}
          <section className="mt-20 rounded-3xl border border-neutral-800/60 bg-neutral-950/30 p-10 backdrop-blur-xl">
            <h2 className="text-3xl font-extralight tracking-[-0.03em] text-neutral-100">
              The process
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Assess",
                  desc: "Map workflows, identify bottlenecks, and define what must be automated or rebuilt.",
                },
                {
                  step: "02",
                  title: "Build",
                  desc: "Design architecture and ship production-grade systems with clean ownership.",
                },
                {
                  step: "03",
                  title: "Harden",
                  desc: "Deploy, instrument, and refine until the system performs under real load.",
                },
              ].map((s) => (
                <div key={s.step} className="border border-neutral-800 rounded-2xl bg-black/40 p-8">
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

            <div className="mt-10">
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="rounded-lg border border-neutral-800 bg-black px-5 py-3 text-sm font-semibold text-neutral-100 transition-all duration-500 hover:border-[#3F6E8F]/60 hover:text-white focus-visible:ring-2 focus-visible:ring-[#3F6E8F]"
              >
                Request a Systems Assessment
              </button>
            </div>
          </section>

          {/* Internal links for SEO + navigation */}
          <section className="mt-20 pb-24">
            <h2 className="text-2xl font-extralight text-neutral-100">
              Explore
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/services"
                className="rounded-full border border-neutral-800 bg-black/40 px-5 py-2 text-sm text-neutral-300 transition-all duration-500 hover:border-[#3F6E8F]/60 hover:text-white"
              >
                Services
              </a>
              <a
                href="/about"
                className="rounded-full border border-neutral-800 bg-black/40 px-5 py-2 text-sm text-neutral-300 transition-all duration-500 hover:border-[#3F6E8F]/60 hover:text-white"
              >
                About
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