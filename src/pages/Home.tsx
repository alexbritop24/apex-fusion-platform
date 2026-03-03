// src/pages/Home.tsx
import { useState } from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import BookingModal from "../components/BookingModal";
import Hero from "../components/Hero";
import PlatformHighlight from "../components/PlatformHighlight";
import CapabilitiesGrid from "../components/CapabilitiesGrid";
import ProofSection from "../components/ProofSection";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import WhoWeWorkWith from "../components/WhoWeWorkWith";
import ProcessSection from "../components/ProcessSection";
import AuthorityBlock from "../components/AuthorityBlock";
import FounderBlock from "../components/FounderBlock";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-[#f5f5f5]">
      <SEO
        title="Apex Fusion Studios — Software, Automation, Booking Systems"
        description="We build simple, reliable systems that save time: booking, follow-ups, internal dashboards, and automation."
        path="/"
        imagePath="/og.png"
      />

      <Navigation onOpenBooking={() => setBookingOpen(true)} />

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

      {/* ✅ FIX: mobile nav is h-16, desktop is h-24 */}
      <main id="main" className="pt-16 md:pt-24">
        <Hero
          onPrimaryCTA={() => setBookingOpen(true)}
          onSecondaryCTA={() => scrollToId("what-we-build")}
        />

        <FounderBlock />
        <WhoWeWorkWith />
        <ProcessSection onOpenBooking={() => setBookingOpen(true)} />
        <AuthorityBlock />
        <PlatformHighlight onOpenBooking={() => setBookingOpen(true)} />

        {/* Anchor for "See what we build" */}
        <div id="what-we-build">
          <CapabilitiesGrid />
        </div>

        <ProofSection />
        <FinalCTA onOpenBooking={() => setBookingOpen(true)} />
        <Footer />
      </main>
    </div>
  );
}