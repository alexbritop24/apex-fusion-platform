import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import apexLogoIcon from "../assets/logo/apex-logo-full-white.png";

type NavigationProps = {
  onOpenBooking: () => void;
};

export default function Navigation({ onOpenBooking }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/services", label: "Services" },
      { to: "/systems-audit", label: "Free Systems Audit" },
      { to: "/about", label: "About" },
    ],
    []
  );

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 rounded-lg bg-neutral-900 px-4 py-2 text-sm text-white focus-visible:ring-2 focus-visible:ring-[#3F6E8F]"
      >
        Skip to content
      </a>

      <nav
        className={[
          "h-24 transition-all duration-700",
          scrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-neutral-800/50"
            : "bg-transparent",
        ].join(" ")}
        aria-label="Primary"
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-8 lg:px-16">
          {/* Logo */}
          <Link to="/" className="inline-flex items-center">
            <img
              src={apexLogoIcon}
              alt="Apex Fusion Studios"
              className="h-16 w-auto"
              loading="eager"
            />
          </Link>

          {/* Center Links */}
          <div className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => {
              const active = isActive(item.to);

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "relative pb-2 text-sm font-light",
                    "transition-colors duration-300",
                    active
                      ? "text-neutral-200"
                      : "text-neutral-500 hover:text-[#3F6E8F]",
                    "focus-visible:ring-2 focus-visible:ring-[#3F6E8F] rounded",

                    // Underline base
                    "after:absolute after:left-0 after:bottom-0 after:h-px after:w-full",
                    "after:bg-[#3F6E8F]",
                    "after:opacity-0 after:translate-y-1",
                    "after:transition-all after:duration-500",

                    // Hover animation
                    "hover:after:opacity-60 hover:after:translate-y-0",

                    // Active state
                    active ? "after:opacity-80 after:translate-y-0" : "",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* ✅ CTA now routes to /book */}
          <Link
            to="/book"
            className={[
              "rounded-lg px-6 py-2.5 text-sm font-semibold text-white",
              "bg-gradient-to-b from-[#3F6E8F] to-[#2F5D7C]",
              "shadow-lg shadow-[#3F6E8F]/20",
              "transition-all duration-500",
              "hover:from-[#5B8FB0] hover:to-[#3F6E8F]",
              "hover:shadow-[#5B8FB0]/25 hover:-translate-y-0.5",
              "focus-visible:ring-2 focus-visible:ring-[#3F6E8F]",
            ].join(" ")}
          >
            Request a Systems Assessment
          </Link>
        </div>
      </nav>
    </header>
  );
}