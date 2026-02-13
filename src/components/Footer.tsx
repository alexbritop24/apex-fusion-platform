import { Link } from "react-router-dom";
import apexLogoIcon from "../assets/logo/apex-logo-full-white.png";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-8 py-14 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        {/* Left */}
        <div className="flex items-center gap-4">
          <img
            src={apexLogoIcon}
            alt="Apex Fusion Studios"
            className="h-10 w-auto"
            loading="lazy"
          />
          <div className="leading-tight">
            <p className="text-sm text-neutral-400">
              © {new Date().getFullYear()} Apex Fusion Studios
            </p>
            <p className="mt-1 text-xs text-neutral-600">
              Premium software, automation & digital infrastructure.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center gap-6 text-sm">
          <Link
            to="/services"
            className="text-neutral-500 transition-colors duration-300 hover:text-[#3F6E8F] focus-visible:ring-2 focus-visible:ring-[#3F6E8F] rounded"
          >
            Services
          </Link>

          <Link
            to="/about"
            className="text-neutral-500 transition-colors duration-300 hover:text-[#3F6E8F] focus-visible:ring-2 focus-visible:ring-[#3F6E8F] rounded"
          >
            About
          </Link>

          <Link
            to="/privacy"
            className="text-neutral-500 transition-colors duration-300 hover:text-[#3F6E8F] focus-visible:ring-2 focus-visible:ring-[#3F6E8F] rounded"
          >
            Privacy
          </Link>

          <Link
            to="/terms"
            className="text-neutral-500 transition-colors duration-300 hover:text-[#3F6E8F] focus-visible:ring-2 focus-visible:ring-[#3F6E8F] rounded"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}