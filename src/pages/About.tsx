// src/pages/About.tsx
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
      title: "Systems first",
      description:
        "We map the workflow, data, permissions, and edge cases before we build the UI.",
      icon: <Workflow className="h-5 w-5" aria-hidden="true" />,
    },
    {
      title: "Built for real operations",
      description:
        "Stable under pressure. Clear ownership. No fragile glue code.",
      icon: <ShieldCheck className="h-5 w-5" aria-hidden="true" />,
    },
    {
      title: "Fast, but controlled",
      description:
        "We ship in usable increments and protect quality with disciplined decisions.",
      icon: <Gauge className="h-5 w-5" aria-hidden="true" />,
    },
  ];

  const whatWeDo = [
    "Custom software systems that run operations",
    "Automation workflows (intake, routing, follow-ups, approvals)",
    "Digital infrastructure (APIs, databases, auth, deployments)",
    "Premium websites built for clarity and conversion",
    "Product builds — including the Apex Booking System",
  ];

  return (
    <div className="min-h-screen bg-black text-[#f5f5f5]">
      <SEO
        title="About — Apex Fusion Studios"
        description="Apex Fusion Studios builds premium software systems, automation, and infrastructure for serious operators."
        path="/about"
      />

      <Navigation onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

      {/* ✅ FIX: mobile nav is h-16, desktop nav is h-24 */}
      <main id="main" className="pt-16 md:pt-24">
        {/* HERO */}
        <section className="relative overflow-hidden px-8 py-24 lg:px-16 lg:py-28">
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
              We build systems
              <br />
              for teams that{" "}
              <span className="text-neutral-200">operate seriously</span>.
            </h1>

            <p className="mt-8 max-w-3xl text-lg font-light text-neutral-400 md:text-xl">
              Apex Fusion Studios builds software, automation, and infrastructure
              that reduces manual work and makes execution predictable.
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
                href="#approach"
                className="inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors duration-500 hover:text-[#3F6E8F] focus-visible:ring-2 focus-visible:ring-[#3F6E8F]"
              >
                What we do <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section id="approach" className="px-8 py-24 lg:px-16 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Left */}
            <div>
              <h2 className="text-4xl font-extralight tracking-[-0.04em] md:text-5xl lg:text-6xl">
                What we build
              </h2>

              <p className="mt-6 text-lg font-light text-neutral-400">
                Simple goal: replace messy operations with clear systems your
                team can run every day.
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
                    <p className="text-sm font-light text-neutral-300">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-14 grid gap-6 md:grid-cols-3">
                {principles.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-2xl border border-neutral-800/60 bg-black/30 p-7 backdrop-blur-xl"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950 text-[#3F6E8F]">
                      {p.icon}
                    </div>

                    <h3 className="mt-5 text-base font-light text-neutral-100">
                      {p.title}
                    </h3>

                    <p className="mt-2 text-sm font-light leading-relaxed text-neutral-400">
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="rounded-3xl border border-neutral-800/60 bg-black/30 p-10 backdrop-blur-xl md:p-12">
              <p className="text-xs uppercase tracking-[0.22em] text-[#3F6E8F]">
                Flagship platform
              </p>

              <h3 className="mt-5 text-2xl font-light text-neutral-100 md:text-3xl">
                Apex Booking System
              </h3>

              <p className="mt-5 text-base font-light leading-relaxed text-neutral-400">
                Scheduling + intake built to reduce no-shows, automate follow-ups,
                and give you visibility into what’s happening.
              </p>

              <p className="mt-4 text-sm font-light text-neutral-400">
                Same discipline we use on client systems: clarity, reliability,
                and long-term ownership.
              </p>

              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="mt-8 text-sm font-medium text-neutral-400 transition-colors duration-500 hover:text-[#3F6E8F] focus-visible:ring-2 focus-visible:ring-[#3F6E8F]"
              >
                Discuss your system →
              </button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-8 py-24 lg:px-16 lg:py-28">
          <div className="mx-auto max-w-6xl rounded-3xl border border-neutral-800/60 bg-black/30 p-10 text-center backdrop-blur-xl md:p-14">
            <h2 className="text-3xl font-extralight tracking-[-0.04em] md:text-4xl lg:text-5xl">
              Ready to clean up operations?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg font-light text-neutral-400">
              If you want fewer manual steps and more predictable execution,
              we’ll map the system and ship the build.
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

            <p className="mt-5 text-xs text-neutral-500">
              Prefer email? apexfusionstudiosusa@gmail.com
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}