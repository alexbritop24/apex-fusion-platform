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
  Bot,
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
      title: "Client Systems",
      description:
        "Systems that help you capture leads, book work, follow up faster, and keep customers moving.",
      bullets: [
        "Lead capture forms and intake flows",
        "Booking, reminders, and confirmations",
        "Payments, deposits, and status updates",
        "Follow-ups that run automatically",
      ],
      icon: <Workflow className="h-6 w-6" aria-hidden="true" />,
    },
    {
      title: "Operations Systems",
      description:
        "Internal systems that reduce manual work and help your team stay organized day to day.",
      bullets: [
        "Task routing and staff notifications",
        "Approvals, handoffs, and internal steps",
        "Simple dashboards and reporting",
        "Cleaner day-to-day operations",
      ],
      icon: <Database className="h-6 w-6" aria-hidden="true" />,
    },
    {
      title: "Custom Software",
      description:
        "Tools built around how your business actually works — not generic templates that force awkward workarounds.",
      bullets: [
        "Internal tools and admin panels",
        "Client portals and custom workflows",
        "Business-specific dashboards",
        "Systems built to match your process",
      ],
      icon: <Code2 className="h-6 w-6" aria-hidden="true" />,
    },
    {
      title: "AI + Smart Automation",
      description:
        "Practical AI tools that save time, speed up replies, and make your workflow more efficient.",
      bullets: [
        "AI chat and smart reply tools",
        "Faster intake and lead handling",
        "Automated task support",
        "Business tools with AI built in",
      ],
      icon: <Bot className="h-6 w-6" aria-hidden="true" />,
    },
    {
      title: "Reliable Setup",
      description:
        "The behind-the-scenes setup that keeps everything running clean, stable, and secure.",
      bullets: [
        "Integrations between your tools",
        "Permissions and account access",
        "Tracking, logging, and reliability",
        "Setup that can grow with your business",
      ],
      icon: <ShieldCheck className="h-6 w-6" aria-hidden="true" />,
    },
    {
      title: "Websites",
      description:
        "High-end websites built for clarity, trust, and conversion — with the right systems behind them.",
      bullets: [
        "Modern marketing websites",
        "Clear messaging and structure",
        "Fast, responsive, accessible pages",
        "Connected forms, booking, and analytics",
      ],
      icon: <LayoutTemplate className="h-6 w-6" aria-hidden="true" />,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-[#f5f5f5]">
      <SEO
        title="Services — Apex Fusion Studios"
        description="We build client systems, operations systems, custom software, AI tools, reliable setup, and websites that remove manual work."
        path="/services"
        imagePath="/og.png"
      />

      <Navigation onOpenBooking={() => setBookingOpen(true)} />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />

      <main id="main" className="pt-16 md:pt-24">
        {/* HERO */}
        <section className="relative overflow-hidden px-6 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
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
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#3F6E8F]">
              Services
            </p>

            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight leading-[1.05] tracking-[-0.04em]">
              We build systems that
              <br />
              remove manual work.
            </h1>

            <p className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl font-light text-neutral-400 leading-relaxed">
              That can mean booking, follow-ups, handoffs, internal tools, AI
              support, or a full workflow rebuild — whatever is slowing your
              business down today.
            </p>

            <p className="mt-4 max-w-2xl text-sm font-light text-neutral-500 leading-relaxed">
              The goal is simple: less chaos, faster replies, fewer mistakes,
              and smoother execution.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
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
                Explore services <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section id="offer" className="px-6 md:px-8 lg:px-16 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.04em]">
                What we build
              </h2>
              <p className="mt-5 text-base sm:text-lg font-light text-neutral-400">
                Different businesses need different systems. These are the main
                ways we help.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group rounded-2xl border border-neutral-800/60 bg-black/30 p-8 md:p-10 backdrop-blur-xl transition-all duration-500 hover:border-[#3F6E8F]/40 hover:bg-neutral-900/40"
                >
                  <div>
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950 text-[#3F6E8F]">
                      {s.icon}
                    </div>

                    <h3 className="mt-5 text-xl md:text-2xl font-light text-neutral-100 transition-colors duration-500 group-hover:text-[#3F6E8F]">
                      {s.title}
                    </h3>

                    <p className="mt-4 text-sm sm:text-base font-light leading-relaxed text-neutral-400">
                      {s.description}
                    </p>
                  </div>

                  <ul className="mt-7 space-y-3">
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

                  <div className="mt-8">
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
        <section className="px-6 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl rounded-3xl border border-neutral-800/60 bg-black/30 p-10 text-center backdrop-blur-xl md:p-14">
            <h2 className="text-3xl font-extralight tracking-[-0.04em] md:text-4xl lg:text-5xl">
              Not sure what system you need yet?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg font-light text-neutral-400">
              We’ll look at your workflow, find what’s slowing things down, and
              show you the fastest place to start.
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