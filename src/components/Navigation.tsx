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
    const onScroll = () => setScrolled(window.scrollY > 60);
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
      { to: "/med-spa-systems", label: "Med Spas" },
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
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 rounded-lg bg-neutral-900 px-4 py-2 text-sm text-white focus-visible:ring-2 focus-visible:ring-[#3F6E8F]"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-[1600px] px-4 pt-4 md:px-6 lg:px-10">
        <nav
          className={[
            "relative rounded-[28px] border transition-all duration-700",
            "backdrop-blur-2xl",
            scrolled
              ? "border-white/10 bg-black/70 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
              : "border-white/8 bg-black/45 shadow-[0_10px_50px_rgba(0,0,0,0.28)]",
          ].join(" ")}
          aria-label="Primary"
        >
          <div className="mx-auto flex h-20 md:h-24 items-center justify-between px-5 md:px-8 lg:px-10">
            <Link to="/" className="inline-flex items-center">
              <img
                src={apexLogoIcon}
                alt="Apex Fusion Studios"
                className="h-14 md:h-16 w-auto"
                loading="eager"
              />
            </Link>

            <div className="hidden items-center gap-8 lg:gap-10 md:flex">
              {navItems.map((item) => {
                const active = isActive(item.to);

                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "relative pb-2 text-sm font-light whitespace-nowrap",
                      "transition-colors duration-300",
                      active
                        ? "text-neutral-100"
                        : "text-neutral-400 hover:text-white",
                      "focus-visible:ring-2 focus-visible:ring-[#3F6E8F] rounded",
                      "after:absolute after:left-0 after:bottom-0 after:h-px after:w-full",
                      "after:bg-[#7FAED1]",
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

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleCTA}
                className={[
                  "hidden md:inline-flex",
                  "rounded-2xl px-6 lg:px-7 py-3 text-sm font-semibold text-white",
                  "bg-gradient-to-b from-[#8DB3D4] to-[#6E96B8]",
                  "shadow-[0_10px_35px_rgba(63,110,143,0.22)]",
                  "transition-all duration-500",
                  "hover:from-[#A4C3DD] hover:to-[#7FAED1]",
                  "hover:shadow-[0_12px_40px_rgba(91,143,176,0.28)] hover:-translate-y-0.5",
                  "focus-visible:ring-2 focus-visible:ring-[#3F6E8F]",
                ].join(" ")}
              >
                Request a Systems Assessment
              </button>

              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                className="md:hidden rounded-xl p-2.5 text-neutral-200 hover:text-white focus-visible:ring-2 focus-visible:ring-[#3F6E8F]"
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

          {mobileOpen && (
            <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-2xl rounded-b-[28px]">
              <div className="px-6 py-8">
                <div className="flex flex-col items-center text-center gap-3">
                  {navItems.map((item) => {
                    const active = isActive(item.to);

                    return (
                      <Link
                        key={item.to}
                        to={item.to}
                        aria-current={active ? "page" : undefined}
                        className={[
                          "w-full max-w-xs rounded-xl px-4 py-3 text-base font-light tracking-wide transition",
                          active
                            ? "text-white bg-white/5"
                            : "text-neutral-300 hover:text-white hover:bg-white/5",
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
                      "mt-2 w-full max-w-xs rounded-xl py-3 text-sm font-semibold text-white",
                      "bg-gradient-to-b from-[#8DB3D4] to-[#6E96B8]",
                      "shadow-[0_10px_35px_rgba(63,110,143,0.22)]",
                      "transition-all duration-500",
                      "hover:from-[#A4C3DD] hover:to-[#7FAED1]",
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
      </div>
    </header>
  );
}