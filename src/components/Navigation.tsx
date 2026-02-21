// src/components/Navigation.tsx
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import apexLogoIcon from "../assets/logo/apex-logo-full-white.png";
import { Menu, X } from "lucide-react";

type NavigationProps = {
  onOpenBooking?: () => void;
};

export default function Navigation({ onOpenBooking }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

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

  const handleCTA = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      navigate("/book");
    }
  };

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

          {/* Desktop Links */}
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
                    "after:absolute after:left-0 after:bottom-0 after:h-px after:w-full",
                    "after:bg-[#3F6E8F]",
                    "after:opacity-0 after:translate-y-1",
                    "after:transition-all after:duration-500",
                    "hover:after:opacity-60 hover:after:translate-y-0",
                    active ? "after:opacity-80 after:translate-y-0" : "",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <button
              type="button"
              onClick={handleCTA}
              className={[
                "hidden md:inline-flex",
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
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden rounded-lg p-2 text-neutral-200 hover:text-white focus-visible:ring-2 focus-visible:ring-[#3F6E8F]"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        {mobileOpen && (
          <div className="md:hidden border-t border-neutral-800/50 bg-black/95 backdrop-blur-xl">
            <div className="px-6 py-10">
              <div className="flex flex-col items-center text-center gap-4">
                {navItems.map((item) => {
                  const active = isActive(item.to);
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      aria-current={active ? "page" : undefined}
                      className={[
                        "w-full max-w-xs rounded-lg px-3 py-3 text-base font-light tracking-wide",
                        active
                          ? "text-white"
                          : "text-neutral-300 hover:text-white",
                        "hover:bg-white/5 transition",
                        "focus-visible:ring-2 focus-visible:ring-[#3F6E8F]",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    handleCTA();
                  }}
                  className={[
                    "w-full max-w-xs rounded-lg py-3 text-sm font-semibold text-white",
                    "bg-gradient-to-b from-[#3F6E8F] to-[#2F5D7C]",
                    "shadow-lg shadow-[#3F6E8F]/20",
                    "transition-all duration-500",
                    "hover:from-[#5B8FB0] hover:to-[#3F6E8F]",
                    "focus-visible:ring-2 focus-visible:ring-[#3F6E8F]",
                  ].join(" ")}
                >
                  Request a Systems Assessment
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}