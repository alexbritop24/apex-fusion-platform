import { useState } from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import BookingModal from "../components/BookingModal";
import Footer from "../components/Footer";

type Section = {
  title: string;
  body: React.ReactNode;
};

export default function Privacy() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const sections: Section[] = [
    {
      title: "Overview",
      body: (
        <>
          <p className="text-neutral-300">
            This Privacy Policy explains how Apex Fusion Studios (“we”, “us”,
            “our”) collects, uses, and protects information when you visit our
            website or contact us through our forms.
          </p>
          <p className="mt-4 text-neutral-300">
            By using this website, you agree to the practices described in this
            policy.
          </p>
        </>
      ),
    },
    {
      title: "Information we collect",
      body: (
        <>
          <p className="text-neutral-300">
            We may collect the following categories of information:
          </p>
          <ul className="mt-4 space-y-2 text-neutral-300">
            <li>
              • <span className="text-neutral-200">Contact details</span> (such
              as name, email, and company) when you submit a form.
            </li>
            <li>
              • <span className="text-neutral-200">Message content</span> you
              include when describing your project or request.
            </li>
            <li>
              • <span className="text-neutral-200">Basic usage data</span> (such
              as page views and interactions) via analytics tools used to
              understand site performance.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "How we use information",
      body: (
        <>
          <p className="text-neutral-300">
            We use information to:
          </p>
          <ul className="mt-4 space-y-2 text-neutral-300">
            <li>• Respond to your inquiries and communicate with you.</li>
            <li>• Evaluate and discuss potential projects or partnerships.</li>
            <li>
              • Improve our website, performance, accessibility, and security.
            </li>
            <li>• Maintain internal records related to business operations.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Cookies and analytics",
      body: (
        <>
          <p className="text-neutral-300">
            We may use cookies or similar technologies to support analytics and
            measure website performance. These tools help us understand how the
            site is used, which pages are visited, and how users navigate.
          </p>
          <p className="mt-4 text-neutral-300">
            You can control cookies through your browser settings. Disabling
            cookies may affect certain functionality.
          </p>
        </>
      ),
    },
    {
      title: "Sharing of information",
      body: (
        <>
          <p className="text-neutral-300">
            We do not sell your personal information. We may share information
            only in limited circumstances, such as:
          </p>
          <ul className="mt-4 space-y-2 text-neutral-300">
            <li>
              • With trusted service providers that help operate our website or
              communications (only as needed).
            </li>
            <li>• To comply with legal obligations or enforce our terms.</li>
            <li>
              • To protect the security and integrity of our systems and users.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Data retention",
      body: (
        <>
          <p className="text-neutral-300">
            We retain information only as long as necessary for legitimate
            business purposes, including responding to inquiries, maintaining
            records, and meeting legal or operational requirements.
          </p>
        </>
      ),
    },
    {
      title: "Security",
      body: (
        <>
          <p className="text-neutral-300">
            We take reasonable measures to protect information from
            unauthorized access, misuse, or disclosure. However, no method of
            transmission over the internet is fully secure, and we cannot
            guarantee absolute security.
          </p>
        </>
      ),
    },
    {
      title: "Your choices",
      body: (
        <>
          <p className="text-neutral-300">
            You may contact us to request access, correction, or deletion of
            information you submitted through our forms, subject to legal or
            operational requirements.
          </p>
        </>
      ),
    },
    {
      title: "Contact",
      body: (
        <>
          <p className="text-neutral-300">
            For privacy questions or requests, contact us using the consultation
            form on this website.
          </p>
        </>
      ),
    },
    {
      title: "Changes to this policy",
      body: (
        <>
          <p className="text-neutral-300">
            We may update this Privacy Policy periodically. Updates will be
            posted on this page with a revised effective date.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-[#f5f5f5]">
      <SEO
        title="Privacy Policy — Apex Fusion Studios"
        description="Privacy Policy for Apex Fusion Studios."
      />

      <Navigation />
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
              Privacy Policy
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