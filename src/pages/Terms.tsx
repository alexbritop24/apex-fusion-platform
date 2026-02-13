import { useState } from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import BookingModal from "../components/BookingModal";
import Footer from "../components/Footer";

type Section = {
  title: string;
  body: React.ReactNode;
};

export default function Terms() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const sections: Section[] = [
    {
      title: "Acceptance of terms",
      body: (
        <>
          <p className="text-neutral-300">
            These Terms of Service (“Terms”) govern your access to and use of
            the Apex Fusion Studios website (“Site”). By accessing or using the
            Site, you agree to be bound by these Terms.
          </p>
        </>
      ),
    },
    {
      title: "Use of the website",
      body: (
        <>
          <p className="text-neutral-300">
            You may use this Site only for lawful purposes and in accordance
            with these Terms. You agree not to misuse the Site, attempt to gain
            unauthorized access, interfere with availability, or introduce
            malicious code.
          </p>
        </>
      ),
    },
    {
      title: "No professional advice",
      body: (
        <>
          <p className="text-neutral-300">
            Content on this Site is provided for general informational purposes
            only and does not constitute legal, financial, or professional
            advice.
          </p>
        </>
      ),
    },
    {
      title: "Intellectual property",
      body: (
        <>
          <p className="text-neutral-300">
            The Site and its contents (including text, graphics, logos, and
            design elements) are owned by Apex Fusion Studios or its licensors
            and are protected by applicable intellectual property laws. You may
            not reproduce, distribute, or create derivative works without prior
            written permission.
          </p>
        </>
      ),
    },
    {
      title: "Third-party services and links",
      body: (
        <>
          <p className="text-neutral-300">
            The Site may reference or link to third-party websites or services.
            We do not control and are not responsible for third-party content,
            policies, or practices. Your use of third-party services is at your
            own risk.
          </p>
        </>
      ),
    },
    {
      title: "Communications",
      body: (
        <>
          <p className="text-neutral-300">
            If you submit information through our forms, you agree that we may
            contact you regarding your inquiry. You are responsible for
            ensuring the accuracy of information you submit.
          </p>
        </>
      ),
    },
    {
      title: "Disclaimers",
      body: (
        <>
          <p className="text-neutral-300">
            The Site is provided on an “as is” and “as available” basis. We
            make no warranties of any kind, express or implied, regarding the
            operation of the Site or the information contained on it.
          </p>
        </>
      ),
    },
    {
      title: "Limitation of liability",
      body: (
        <>
          <p className="text-neutral-300">
            To the maximum extent permitted by law, Apex Fusion Studios will not
            be liable for any indirect, incidental, special, consequential, or
            punitive damages, or any loss of profits or revenues, arising from
            your use of or inability to use the Site.
          </p>
        </>
      ),
    },
    {
      title: "Indemnification",
      body: (
        <>
          <p className="text-neutral-300">
            You agree to indemnify and hold harmless Apex Fusion Studios and its
            affiliates, officers, agents, and employees from any claims,
            liabilities, damages, losses, and expenses arising out of your use
            of the Site or violation of these Terms.
          </p>
        </>
      ),
    },
    {
      title: "Changes to the site or terms",
      body: (
        <>
          <p className="text-neutral-300">
            We may update the Site and these Terms at any time. Updates will be
            posted on this page with a revised effective date. Continued use of
            the Site after changes constitutes acceptance of the revised Terms.
          </p>
        </>
      ),
    },
    {
      title: "Governing law",
      body: (
        <>
          <p className="text-neutral-300">
            These Terms are governed by the laws of the applicable jurisdiction
            in which Apex Fusion Studios operates, without regard to conflict of
            law principles.
          </p>
        </>
      ),
    },
    {
      title: "Contact",
      body: (
        <>
          <p className="text-neutral-300">
            For questions about these Terms, contact us using the consultation
            form on this website.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-[#f5f5f5]">
      <SEO
        title="Terms of Service — Apex Fusion Studios"
        description="Terms of Service for Apex Fusion Studios."
      />

      <Navigation onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

      <main id="main" className="pt-24">
        {/* HERO */}
        <section className="relative overflow-hidden px-8 py-24 lg:px-16">
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

          <div className="relative mx-auto max-w-4xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#3F6E8F]">
              Legal
            </p>
            <h1 className="mt-5 text-4xl font-extralight tracking-[-0.04em] md:text-5xl lg:text-6xl">
              Terms of Service
            </h1>
            <p className="mt-6 text-lg font-light text-neutral-400">
              Effective date:{" "}
              <span className="text-neutral-200">
                {new Date().toLocaleDateString()}
              </span>
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="px-8 pb-28 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl border border-neutral-800/60 bg-black/30 p-10 backdrop-blur-xl md:p-12">
              <div className="space-y-10">
                {sections.map((s) => (
                  <div key={s.title}>
                    <h2 className="text-xl font-light text-neutral-100">
                      {s.title}
                    </h2>
                    <div className="mt-4 text-sm font-light leading-relaxed">
                      {s.body}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="text-sm font-medium text-neutral-400 transition-colors duration-500 hover:text-[#3F6E8F] focus-visible:ring-2 focus-visible:ring-[#3F6E8F]"
                >
                  Contact us →
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}