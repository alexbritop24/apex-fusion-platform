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
import FounderBlock from "../components/FounderBlock";
import ExampleSystems from "../components/ExampleSystems";
import ProblemsWeFix from "../components/ProblemsWeFix";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-[#f5f5f5]">
      <SEO />

      <Navigation onOpenBooking={() => setBookingOpen(true)} />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />

      <main id="main" className="pt-16 md:pt-24">
        <Hero
          onPrimaryCTA={() => setBookingOpen(true)}
          onSecondaryCTA={() =>
            document
              .getElementById("examples")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        />

        <FounderBlock />
        <WhoWeWorkWith />
        <ProcessSection onOpenBooking={() => setBookingOpen(true)} />
        <PlatformHighlight onOpenBooking={() => setBookingOpen(true)} />

        <ExampleSystems />

        <ProblemsWeFix />

        <CapabilitiesGrid />
        <ProofSection />
        <FinalCTA onOpenBooking={() => setBookingOpen(true)} />
        <Footer />
      </main>
    </div>
  );
}