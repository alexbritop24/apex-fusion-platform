import { useState } from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import BookingModal from "../components/BookingModal";
import Footer from "../components/Footer";

export default function CustomSoftwareDevelopment() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-[#f5f5f5]">
      <SEO
        title="Custom Software Development | Apex Fusion Studios"
        description="Purpose-built software systems: internal tools, dashboards, portals, workflows, and production-grade platform builds."
        path="/custom-software-development"
      />

      <Navigation onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

      <main id="main" className="pt-28 px-8 lg:px-16">
        <div className="mx-auto max-w-5xl pb-24">
          <p className="text-xs uppercase tracking-[0.22em] text-[#3F6E8F]">
            Custom software development
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extralight tracking-[-0.04em] leading-none text-neutral-100">
            Software built for
            <br />
            real operations.
          </h1>

          <p className="mt-8 text-lg md:text-xl font-light text-neutral-400 leading-relaxed">
            We design and ship production-grade systems: dashboards, portals, operational tools,
            and workflows that stay maintainable as you scale.
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

          <section className="mt-20 grid gap-px rounded-3xl overflow-hidden bg-neutral-800/60 md:grid-cols-2">
            {[
              {
                title: "Internal tools + dashboards",
                desc: "Operational visibility, routing, approvals, and execution speed for teams.",
              },
              {
                title: "Client portals",
                desc: "Secure experiences for customers: requests, payments, documents, and tracking.",
              },
              {
                title: "Workflow systems",
                desc: "Intake → fulfillment pipelines with clean state, ownership, and auditability.",
              },
              {
                title: "Architecture + data modeling",
                desc: "A system you can extend without rewriting the core every quarter.",
              },
            ].map((c) => (
              <div key={c.title} className="bg-black p-10 transition-all duration-500 hover:bg-neutral-900/60">
                <h2 className="text-xl font-light text-neutral-100">{c.title}</h2>
                <p className="mt-4 text-sm font-light leading-relaxed text-neutral-400">{c.desc}</p>
              </div>
            ))}
          </section>

          <section className="mt-20 rounded-3xl border border-neutral-800/60 bg-black/30 p-10 backdrop-blur-xl">
            <h2 className="text-3xl font-extralight tracking-[-0.03em] text-neutral-100">
              The process
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {[
                { step: "01", title: "Assess", desc: "Define workflows, constraints, and the highest-leverage system boundaries." },
                { step: "02", title: "Architect + build", desc: "Ship in clean increments, with maintainability as a hard requirement." },
                { step: "03", title: "Deploy + harden", desc: "Instrument performance, logging, and guardrails so it holds under load." },
              ].map((s) => (
                <div key={s.step} className="rounded-2xl border border-neutral-800 bg-black/40 p-8">
                  <p className="text-xs tracking-[0.22em] text-neutral-500">STEP {s.step}</p>
                  <h3 className="mt-4 text-xl font-light text-neutral-100">{s.title}</h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-neutral-400">{s.desc}</p>
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

          <section className="mt-20">
            <div className="flex flex-wrap gap-3">
              <a
                href="/services"
                className="rounded-full border border-neutral-800 bg-black/40 px-5 py-2 text-sm text-neutral-300 transition-all duration-500 hover:border-[#3F6E8F]/60 hover:text-white"
              >
                Services
              </a>
              <a
                href="/systems-audit"
                className="rounded-full border border-neutral-800 bg-black/40 px-5 py-2 text-sm text-neutral-300 transition-all duration-500 hover:border-[#3F6E8F]/60 hover:text-white"
              >
                Free Systems Audit
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}