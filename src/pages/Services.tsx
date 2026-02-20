// src/pages/Services.tsx
import { useState } from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import BookingModal from "../components/BookingModal";
import Footer from "../components/Footer";
import {
  Code2,
  Workflow,
  Database,
  ShieldCheck,
  ArrowRight,
  Check,
  LayoutTemplate,
} from "lucide-react";

type ServiceCard = {
  title: string;
  description: string;
  bullets: string[];
  icon: React.ReactNode;
};

export default function Services() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const services: ServiceCard[] = [
    {
      title: "Custom Software Systems",
      description:
        "Purpose-built software for critical operations — reliable, clear, and designed for long-term ownership.",
      bullets: [
        "Internal tools & operator dashboards",
        "Client portals & admin platforms",
        "Data modeling and system architecture",
        "Production-grade React + API builds",
      ],
      icon: <Code2 className="h-6 w-6" aria-hidden="true" />,
    },
    {
      title: "Automation & Workflows",
      description:
        "Automation that reduces manual coordination, cuts errors, and makes execution predictable.",
      bullets: [
        "Lead → intake → fulfillment pipelines",
        "Notifications, routing, and approvals",
        "AI-assisted workflows where it’s useful",
        "Audit trails & monitoring",
      ],
      icon: <Workflow className="h-6 w-6" aria-hidden="true" />,
    },
    {
      title: "Digital Infrastructure",
      description:
        "Backend foundations that let you scale: APIs, data, environments, deployments, and observability.",
      bullets: [
        "APIs, databases, auth, permissions",
        "Cloud deployments & CI/CD pipelines",
        "Performance, logging, error tracking",
        "Security headers & best practices",
      ],
      icon: <Database className="h-6 w-6" aria-hidden="true" />,
    },
    {
      title: "Systems Hardening",
      description:
        "Stability and security upgrades for teams that can’t afford downtime or fragile workflows.",
      bullets: [
        "Refactors that reduce operational risk",
        "Reliability & incident prevention",
        "Access controls and least privilege",
        "Performance budgets & guardrails",
      ],
      icon: <ShieldCheck className="h-6 w-6" aria-hidden="true" />,
    },
    {
      title: "Website Design",
      description:
        "Premium marketing websites engineered for clarity, conversion, and brand authority.",
      bullets: [
        "High-end marketing sites (Vite/React)",
        "Information architecture & UX structure",
        "Performance, accessibility, SEO foundations",
        "Deployment + analytics instrumentation",
      ],
      icon: <LayoutTemplate className="h-6 w-6" aria-hidden="true" />,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-[#f5f5f5]">
      <SEO
        title="Services — Apex Fusion Studios"
        description="Premium custom software systems, automation workflows, digital infrastructure, and web experiences built for serious operators."
        path="/services"
      />

      {/* ✅ IMPORTANT: wire navbar CTA */}
      <Navigation onOpenBooking={() => setBookingOpen(true)} />

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

      <main id="main" className="pt-24">
        {/* HERO */}
        <section className="relative overflow-hidden px-8 py-24 lg:px-16">
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

          <div className="relative mx-auto max-w-6xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#3F6E8F]">
              Services
            </p>

            <h1 className="mt-5 text-5xl font-extralight leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl">
              Systems built to{" "}
              <span className="text-neutral-200">perform</span>.
              <br />
              Infrastructure you can{" "}
              <span className="text-neutral-200">own</span>.
            </h1>

            <p className="mt-8 max-w-3xl text-lg font-light text-neutral-400 md:text-xl">
              We build software, automation, and high-end web experiences for
              operators who need execution that stays stable as the business grows.
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className={[
                  "rounded-full px-9 py-4 font-semibold text-white",
                  "bg-gradient-to-b from-[#3F6E8F] to-[#2F5D7C]",
                  "shadow-xl shadow-[#3F6E8F]/25",
                  "transition-all duration-500",
                  "hover:from-[#5B8FB0] hover:to-[#3F6E8F] hover:shadow-[#5B8FB0]/30 hover:-translate-y-1",
                  "focus-visible:ring-2 focus-visible:ring-[#3F6E8F]",
                ].join(" ")}
              >
                Request a Systems Assessment
              </button>

              <a
                href="#offer"
                className="inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors duration-500 hover:text-[#3F6E8F] focus-visible:ring-2 focus-visible:ring-[#3F6E8F]"
              >
                Explore what we build <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section id="offer" className="px-8 py-20 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-extralight tracking-[-0.04em] md:text-5xl lg:text-6xl">
                What we build
              </h2>
              <p className="mt-6 text-lg font-light text-neutral-400">
                Systems designed to remove friction, automate coordination, and
                create compounding operational leverage.
              </p>
            </div>

            {/* Discoverable landing page link */}
            <a
              href="/systems-for-service-businesses"
              className="group mt-12 block rounded-3xl border border-neutral-800/60 bg-black/30 p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#3F6E8F]/60 hover:bg-neutral-900/40 focus-visible:ring-2 focus-visible:ring-[#3F6E8F]"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-[#3F6E8F]">
                For service businesses
              </p>

              <h3 className="mt-5 text-2xl font-extralight tracking-[-0.03em] text-neutral-100 md:text-3xl">
                Systems for Service Businesses
              </h3>

              <p className="mt-4 max-w-3xl text-sm font-light leading-relaxed text-neutral-400 md:text-base">
                Intake, scheduling, follow-ups, fulfillment, reporting, and automation —
                rebuilt so you scale without chaos.
              </p>

              <p className="mt-6 text-sm font-semibold text-neutral-200 transition-colors duration-500 group-hover:text-[#5B8FB0]">
                View the page →
              </p>
            </a>

            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group rounded-2xl border border-neutral-800/60 bg-black/30 p-10 backdrop-blur-xl transition-all duration-500 hover:border-[#3F6E8F]/40 hover:bg-neutral-900/40"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950 text-[#3F6E8F]">
                        {s.icon}
                      </div>
                      <h3 className="mt-6 text-2xl font-light text-neutral-100 transition-colors duration-500 group-hover:text-[#3F6E8F]">
                        {s.title}
                      </h3>
                      <p className="mt-4 text-base font-light text-neutral-400">
                        {s.description}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-8 space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/5">
                          <Check
                            className="h-3.5 w-3.5 text-[#3F6E8F]"
                            aria-hidden="true"
                          />
                        </span>
                        <span className="text-sm font-light text-neutral-300">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10">
                    <button
                      type="button"
                      onClick={() => setBookingOpen(true)}
                      className="text-sm font-medium text-neutral-400 transition-colors duration-500 hover:text-[#3F6E8F] focus-visible:ring-2 focus-visible:ring-[#3F6E8F]"
                    >
                      Discuss this →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-8 py-24 lg:px-16">
          <div className="mx-auto max-w-6xl rounded-3xl border border-neutral-800/60 bg-black/30 p-10 text-center backdrop-blur-xl md:p-14">
            <h2 className="text-3xl font-extralight tracking-[-0.04em] md:text-4xl lg:text-5xl">
              Ready to replace friction with systems?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg font-light text-neutral-400">
              We’ll review your workflow, confirm fit, and recommend the fastest path
              to a stable, scalable system.
            </p>

            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className={[
                  "rounded-full px-9 py-4 font-semibold text-white",
                  "bg-gradient-to-b from-[#3F6E8F] to-[#2F5D7C]",
                  "shadow-xl shadow-[#3F6E8F]/25",
                  "transition-all duration-500",
                  "hover:from-[#5B8FB0] hover:to-[#3F6E8F] hover:shadow-[#5B8FB0]/30 hover:-translate-y-1",
                  "focus-visible:ring-2 focus-visible:ring-[#3F6E8F]",
                ].join(" ")}
              >
                Request a Systems Assessment
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}