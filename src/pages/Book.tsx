// src/pages/Book.tsx
import { useEffect } from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const CALENDLY_URL = "https://calendly.com/YOUR-CALENDLY/15min"; // <- replace

export default function Book() {
  useEffect(() => {
    // Load Calendly embed script once
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-black text-[#f5f5f5]">
      <SEO
        title="Request a Systems Assessment | Apex Fusion Studios"
        description="Book a 15-minute fit call to assess your workflows, bottlenecks, and the highest-leverage system to build."
        path="/book"
      />

      {/* Nav CTA will be updated to point here; keep prop for now */}
      <Navigation />

      <main id="main" className="pt-28 px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.22em] text-[#3F6E8F]">
            Request a Systems Assessment
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extralight tracking-[-0.04em] leading-none text-neutral-100">
            Book a 15-minute fit call.
          </h1>

          <p className="mt-8 max-w-3xl text-lg md:text-xl font-light text-neutral-400 leading-relaxed">
            We’ll quickly confirm fit, map your current workflow, and identify the
            highest-leverage system to rebuild.
          </p>

          <div className="mt-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-black/40 px-4 py-2 text-sm text-neutral-300">
              <span className="h-2 w-2 rounded-full bg-[#3F6E8F]" />
              15-minute fit call. No obligation.
            </div>
            <div className="text-sm text-neutral-500 font-light">
              We reply within 24 hours if you submit notes during booking.
            </div>
          </div>

          {/* Calendly inline embed */}
          <section className="mt-14 rounded-3xl border border-neutral-800/60 bg-black/30 p-4 backdrop-blur-xl md:p-6">
            <div
              className="calendly-inline-widget"
              data-url={CALENDLY_URL}
              style={{ minWidth: "320px", height: "820px" }}
            />
          </section>

          <section className="mt-14 pb-24">
            <h2 className="text-2xl font-extralight text-neutral-100">
              What to bring
            </h2>
            <ul className="mt-6 space-y-3 text-sm font-light text-neutral-400">
              <li>• Your current workflow (lead → fulfillment)</li>
              <li>• The bottleneck that’s costing you time or money</li>
              <li>• Any tools you’re using (calendar, CRM, forms, payments)</li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}