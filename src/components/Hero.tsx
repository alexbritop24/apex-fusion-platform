import { useEffect, useMemo, useState } from "react";

type HeroProps = {
  onPrimaryCTA: () => void;
  onSecondaryCTA: () => void;
};

export default function Hero({ onPrimaryCTA, onSecondaryCTA }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroOpacity = useMemo(() => Math.max(0, 1 - scrollY / 700), [scrollY]);
  const heroTranslate = useMemo(() => scrollY * 0.15, [scrollY]);
  const indicatorOpacity = useMemo(
    () => Math.max(0, 1 - scrollY / 250),
    [scrollY]
  );

  return (
    <section className="relative min-h-screen overflow-hidden px-8 py-32 lg:px-16">
      {/* subtle background orbs */}
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

      <div
        className="mx-auto max-w-6xl text-center"
        style={{
          opacity: heroOpacity,
          transform: `translateY(${heroTranslate}px)`,
        }}
      >
        <h1 className="mb-10 text-6xl font-extralight leading-none tracking-[-0.04em] md:text-7xl lg:text-8xl">
          Digital Systems at the
          <br />
          Peak of Perfection
        </h1>

        <p className="mx-auto mb-14 max-w-3xl text-xl font-light text-neutral-400 lg:text-2xl">
          Software, automation & platforms that propel your business forward.
        </p>

        <div className="flex items-center justify-center gap-8">
          <button
            type="button"
            onClick={onPrimaryCTA}
            className={[
              "rounded-full px-9 py-4 font-semibold text-white",
              "bg-gradient-to-b from-[#3F6E8F] to-[#2F5D7C]",
              "shadow-xl shadow-[#3F6E8F]/25",
              "transition-all duration-500",
              "hover:from-[#5B8FB0] hover:to-[#3F6E8F] hover:shadow-[#5B8FB0]/30 hover:-translate-y-1",
              "focus-visible:ring-2 focus-visible:ring-[#3F6E8F]",
            ].join(" ")}
          >
            Transform My Systems
          </button>

          <button
            type="button"
            onClick={onSecondaryCTA}
            className="text-sm text-neutral-400 transition-colors duration-500 hover:text-[#3F6E8F] focus-visible:ring-2 focus-visible:ring-[#3F6E8F]"
          >
            Try Live Demo →
          </button>
        </div>

        {/* scroll indicator */}
        <div className="mt-20 flex justify-center" style={{ opacity: indicatorOpacity }}>
          <div
            className="h-16 w-px animate-pulse"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #3F6E8F, transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}