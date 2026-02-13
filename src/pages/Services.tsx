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
  Gauge,
  Boxes,
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
        "Purpose-built software to run critical operations — designed for reliability, clarity, and long-term ownership.",
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
        "Automation that removes manual coordination, reduces errors, and turns operations into a predictable system.",
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
        "The backend foundations that let you scale: data, deployments, environments, and observability.",
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
        "Premium marketing websites and product pages engineered for clarity, conversion, and long-term brand authority.",
      bullets: [
        "High-end marketing sites (Vite/React)",
        "Information architecture & UX structure",
        "Performance, accessibility, SEO foundations",
        "Deployment + analytics instrumentation",
      ],
      icon: <LayoutTemplate className="h-6 w-6" aria-hidden="true" />,
    },
  ];

  const process = [
    {
      title: "Discovery",
      desc: "We map goals to systems. We identify constraints, dependencies, and the highest-leverage path.",
      icon: <Boxes className="h-5 w-5" aria-hidden="true" />,
    },
    {
      title: "Architecture",
      desc: "We design the system boundaries, data model, and workflows before writing production code.",
      icon: <Database className="h-5 w-5" aria-hidden="true" />,
    },
    {
      title: "Build",
      desc: "We ship in focused increments. Every release is usable, testable, and measurable.",
      icon: <Gauge className="h-5 w-5" aria-hidden="true" />,
    },
    {
      title: "Scale",
      desc: "We harden, automate, and expand capabilities — turning a build into infrastructure.",
      icon: <ShieldCheck className="h-5 w-5" aria-hidden="true" />,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-[#f5f5f5]">
      <SEO
        title="Services — Apex Fusion Studios"
        description="Premium custom software systems, automation workflows, digital infrastructure, and web experiences built for serious operators."
      />

      <Navigation onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

      <main id="main" className="pt-24">
        {/* HERO */}
        <section className="relative overflow-hidden px-8 py-28 lg:px-16">
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
              Digital systems built to{" "}
              <span className="text-neutral-200">perform</span>.
              <br />
              Infrastructure you can{" "}
              <span className="text-neutral-200">own</span>.
            </h1>

            <p className="mt-8 max-w-3xl text-lg font-light text-neutral-400 md:text-xl">
              Apex Fusion Studios builds premium software, automation, and web
              experiences for teams that value reliability, speed, and clean
              execution. We also build product infrastructure — including our
              flagship{" "}
              <span className="text-neutral-200">Apex Booking System</span>.
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
                Schedule a Consultation
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
        <section id="offer" className="px-8 py-28 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-extralight tracking-[-0.04em] md:text-5xl lg:text-6xl">
                What we build
              </h2>
              <p className="mt-6 text-lg font-light text-neutral-400">
                Not “deliverables.” Systems. Designed to remove friction,
                automate coordination, and create compounding operational
                leverage.
              </p>
            </div>

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
                      Discuss this build →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-neutral-950 px-8 py-28 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-extralight tracking-[-0.04em] md:text-5xl lg:text-6xl">
                How we work
              </h2>
              <p className="mt-6 text-lg font-light text-neutral-400">
                A disciplined process that reduces risk, accelerates delivery,
                and produces systems that don’t degrade over time.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {process.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-neutral-800/60 bg-black/30 p-8 backdrop-blur-xl"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950 text-[#3F6E8F]">
                    {p.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-light text-neutral-100">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-neutral-400">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="text-sm font-medium text-neutral-400 transition-colors duration-500 hover:text-[#3F6E8F] focus-visible:ring-2 focus-visible:ring-[#3F6E8F]"
              >
                Start with discovery →
              </button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-8 py-28 lg:px-16">
          <div className="mx-auto max-w-6xl rounded-3xl border border-neutral-800/60 bg-black/30 p-10 text-center backdrop-blur-xl md:p-14">
            <h2 className="text-3xl font-extralight tracking-[-0.04em] md:text-4xl lg:text-5xl">
              Ready to replace friction with systems?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg font-light text-neutral-400">
              If you’re building something serious — and you’re ready to invest
              in durable infrastructure — we’ll map the system and ship it with
              precision.
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
                Schedule a Consultation
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}