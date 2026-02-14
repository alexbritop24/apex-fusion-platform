import { useState } from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import BookingModal from "../components/BookingModal";
import Footer from "../components/Footer";
import { Check, ArrowRight, ShieldCheck, Gauge, Workflow } from "lucide-react";

type Principle = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export default function About() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const principles: Principle[] = [
    {
      title: "Systems over surface",
      description:
        "We design the underlying system first — data, workflows, permissions, failure modes — then we build the interface on top of it.",
      icon: <Workflow className="h-5 w-5" aria-hidden="true" />,
    },
    {
      title: "Reliability is a feature",
      description:
        "The goal isn’t code that works today. It’s infrastructure that stays stable under real operational pressure.",
      icon: <ShieldCheck className="h-5 w-5" aria-hidden="true" />,
    },
    {
      title: "Speed with discipline",
      description:
        "We ship in usable increments, minimize rework, and protect quality by making decisions at the architecture level.",
      icon: <Gauge className="h-5 w-5" aria-hidden="true" />,
    },
  ];

  const whatWeDo = [
    "Custom software systems that run operations",
    "Automation workflows that remove coordination overhead",
    "Digital infrastructure: data, APIs, auth, deployments",
    "Premium website design engineered for authority and conversion",
    "Product development — including the Apex Booking System platform",
  ];

  return (
    <div className="min-h-screen bg-black text-[#f5f5f5]">
      <SEO
        title="About — Apex Fusion Studios"
        description="Apex Fusion Studios is a premium software and automation company building digital systems and infrastructure for serious operators."
      />

      <Navigation />
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />

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
              About
            </p>

            <h1 className="mt-5 text-5xl font-extralight leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl">
              We build infrastructure
              <br />
              for teams that{" "}
              <span className="text-neutral-200">operate seriously</span>.
            </h1>

            <p className="mt-8 max-w-3xl text-lg font-light text-neutral-400 md:text-xl">
              Apex Fusion Studios is a premium software and automation company.
              We design and build digital systems that reduce operational
              friction, enforce consistency, and create compounding leverage.
              <span className="text-neutral-200">
                {" "}
                Not an agency. Not templates.
              </span>{" "}
              Real systems — built for long-term ownership.
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
                href="#principles"
                className="inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors duration-500 hover:text-[#3F6E8F] focus-visible:ring-2 focus-visible:ring-[#3F6E8F]"
              >
                How we think <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="px-8 py-28 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="text-4xl font-extralight tracking-[-0.04em] md:text-5xl lg:text-6xl">
                What we do
              </h2>
              <p className="mt-6 text-lg font-light text-neutral-400">
                We partner with organizations that are ready to invest in durable
                systems: software that stays clean, automation that stays
                reliable, and infrastructure that scales without chaos.
              </p>

              <div className="mt-10 space-y-3">
                {whatWeDo.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/5">
                      <Check
                        className="h-3.5 w-3.5 text-[#3F6E8F]"
                        aria-hidden="true"
                      />
                    </span>
                    <p className="text-sm font-light text-neutral-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: GLASS PANEL */}
            <div className="rounded-3xl border border-neutral-800/60 bg-black/30 p-10 backdrop-blur-xl md:p-12">
              <p className="text-xs uppercase tracking-[0.22em] text-[#3F6E8F]">
                Flagship platform
              </p>

              <h3 className="mt-5 text-2xl font-light text-neutral-100 md:text-3xl">
                Apex Booking System
              </h3>

              <p className="mt-5 text-base font-light leading-relaxed text-neutral-400">
                A scheduling platform built to reduce no-shows, automate
                workflows, and give operators real visibility. We build it as a
                product — and we apply the same product discipline to every
                system we deliver.
              </p>

              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="mt-8 text-sm font-medium text-neutral-400 transition-colors duration-500 hover:text-[#3F6E8F] focus-visible:ring-2 focus-visible:ring-[#3F6E8F]"
              >
                Discuss the platform →
              </button>
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section
          id="principles"
          className="bg-neutral-950 px-8 py-28 lg:px-16"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-extralight tracking-[-0.04em] md:text-5xl lg:text-6xl">
                How we think
              </h2>
              <p className="mt-6 text-lg font-light text-neutral-400">
                Our work is guided by fundamentals: clarity, durability, and
                execution. This is what keeps systems stable as the business
                grows.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {principles.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-neutral-800/60 bg-black/30 p-9 backdrop-blur-xl"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950 text-[#3F6E8F]">
                    {p.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-light text-neutral-100">
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

        {/* CTA */}
        <section className="px-8 py-28 lg:px-16">
          <div className="mx-auto max-w-6xl rounded-3xl border border-neutral-800/60 bg-black/30 p-10 text-center backdrop-blur-xl md:p-14">
            <h2 className="text-3xl font-extralight tracking-[-0.04em] md:text-4xl lg:text-5xl">
              Build something exceptional
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg font-light text-neutral-400">
              If you’re ready to replace manual operations with engineered
              systems, we’ll help you design the architecture and ship it with
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