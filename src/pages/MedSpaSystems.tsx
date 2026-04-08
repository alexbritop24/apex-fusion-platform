import { useState } from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import BookingModal from "../components/BookingModal";
import Footer from "../components/Footer";
import MedSpaShowcase from "../components/MedSpaShowcase";
import { Check } from "lucide-react";

export default function MedSpaSystems() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const benefits = [
    "Automated booking confirmations",
    "SMS reminders to reduce no-shows",
    "Lead follow-up without manual chasing",
    "Faster responses to new inquiries",
    "Cleaner operations for your staff",
    "A premium client experience from first click to check-in",
  ];

  return (
    <div className="min-h-screen bg-black text-[#f5f5f5]">
      <SEO
        title="Automated Booking & Client Follow-Up Systems for Med Spas — Apex Fusion Studios"
        description="Reduce no-shows, respond faster to leads, and keep your appointment schedule full with automated systems built for med spas."
        path="/med-spa-systems"
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
            className="pointer-events-none absolute inset-0"
          >
            <img
              src="/system-core.PNG"
              alt=""
              className="h-full w-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-black/75" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl text-center">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#3F6E8F]">
              Med Spa Systems
            </p>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-[-0.04em] leading-[1.02]">
              Automated Booking & Client
              <br className="hidden sm:block" />
              Follow-Up Systems for Med Spas
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-base sm:text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
              Reduce no-shows, respond faster to leads, and keep your appointment
              schedule full without your staff handling everything manually.
            </p>

            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className={[
                  "rounded-full px-9 py-4 text-sm font-semibold text-white",
                  "bg-gradient-to-b from-[#3F6E8F] to-[#2F5D7C]",
                  "shadow-xl shadow-[#3F6E8F]/25",
                  "transition-all duration-500",
                  "hover:from-[#5B8FB0] hover:to-[#3F6E8F]",
                  "hover:shadow-[#5B8FB0]/30 hover:-translate-y-1",
                ].join(" ")}
              >
                Request a Free Systems Audit
              </button>
            </div>
          </div>
        </section>

        {/* SHOWCASE */}
        <MedSpaShowcase />

        {/* BENEFITS */}
        <section className="px-6 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#3F6E8F]">
                What it solves
              </p>

              <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extralight tracking-[-0.04em]">
                Built to keep your schedule full
              </h2>

              <p className="mt-5 text-base sm:text-lg font-light text-neutral-400">
                Most med spas don’t have a lead problem. They have a response,
                follow-up, and booking system problem.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-neutral-800/60 bg-black/30 p-5 backdrop-blur-xl"
                >
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/5">
                    <Check className="h-3.5 w-3.5 text-[#3F6E8F]" />
                  </span>
                  <span className="text-sm sm:text-base font-light text-neutral-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-5xl rounded-3xl border border-neutral-800/60 bg-black/30 p-10 text-center backdrop-blur-xl md:p-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-[-0.04em] text-neutral-100">
              Want to see what this could look like for your clinic?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg font-light text-neutral-400">
              We’ll review your current booking process, show you where leads are
              getting lost, and map a cleaner system for your med spa.
            </p>

            <div className="mt-10">
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className={[
                  "rounded-full px-9 py-4 text-sm font-semibold text-white",
                  "bg-gradient-to-b from-[#3F6E8F] to-[#2F5D7C]",
                  "shadow-xl shadow-[#3F6E8F]/25",
                  "transition-all duration-500",
                  "hover:from-[#5B8FB0] hover:to-[#3F6E8F]",
                  "hover:shadow-[#5B8FB0]/30 hover:-translate-y-1",
                ].join(" ")}
              >
                Request a Free Systems Audit
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}