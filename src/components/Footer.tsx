// src/components/Footer.tsx
import { Link } from "react-router-dom";
import apexLogoIcon from "../assets/logo/apex-logo-full-white.png";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-16 py-16">
        <div className="grid gap-12 md:grid-cols-3">

          {/* LEFT — BRAND */}
          <div>
            <div className="flex items-center gap-4">
              <img
                src={apexLogoIcon}
                alt="Apex Fusion Studios"
                className="h-10 w-auto"
                loading="lazy"
              />
            </div>

            <p className="mt-6 text-sm text-neutral-400 max-w-xs leading-relaxed">
              We build AI systems, automation, and custom software that help
              businesses operate faster and close more work.
            </p>

            <p className="mt-4 text-xs text-neutral-600">
              © {new Date().getFullYear()} Apex Fusion Studios
            </p>
          </div>

          {/* MIDDLE — SYSTEMS */}
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#3F6E8F]">
              Systems
            </p>

            <div className="mt-6 flex flex-col gap-3 text-sm">
              <span className="text-neutral-400">
                AI call & response systems
              </span>
              <span className="text-neutral-400">
                Booking & client flow systems
              </span>
              <span className="text-neutral-400">
                Business automation workflows
              </span>
              <span className="text-neutral-400">
                Custom software & dashboards
              </span>
            </div>
          </div>

          {/* RIGHT — NAV + CTA */}
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#3F6E8F]">
              Navigate
            </p>

            <div className="mt-6 flex flex-col gap-3 text-sm">
              <Link
                to="/services"
                className="text-neutral-400 hover:text-white transition"
              >
                Services
              </Link>

              <Link
                to="/med-spa-systems"
                className="text-neutral-400 hover:text-white transition"
              >
                Med Spa Systems
              </Link>

              <Link
                to="/about"
                className="text-neutral-400 hover:text-white transition"
              >
                About
              </Link>

              <Link
                to="/privacy"
                className="text-neutral-400 hover:text-white transition"
              >
                Privacy
              </Link>

              <Link
                to="/terms"
                className="text-neutral-400 hover:text-white transition"
              >
                Terms
              </Link>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                to="/book"
                className="inline-block text-sm text-[#3F6E8F] hover:text-white transition"
              >
                → Request a systems assessment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}