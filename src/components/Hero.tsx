// src/components/Hero.tsx
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

  return (
    <section className="relative min-h-screen overflow-hidden px-6 md:px-8 lg:px-16 py-28 md:py-32">
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src="/system-core.png"
          alt=""
          className="h-full w-full object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Glow accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{ background: "#3F6E8F", opacity: 0.04 }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -right-48 h-[620px] w-[620px] rounded-full blur-3xl"
        style={{ background: "#3F6E8F", opacity: 0.04 }}
      />

      {/* Content */}
      <div
        className="relative z-10 mx-auto max-w-6xl text-center"
        style={{
          opacity: heroOpacity,
          transform: `translateY(${heroTranslate}px)`,
        }}
      >
        <p className="text-[11px] uppercase tracking-[0.22em] text-[#3F6E8F]">
          For serious operators
        </p>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-[-0.04em] leading-[1.02]">
          AI systems, automation,
          <br className="hidden sm:block" />
          and software that run your business.
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-base sm:text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
          We build the infrastructure behind modern service businesses — from AI
          call handling and booking flows to follow-ups, internal tools, and
          business automation.
        </p>

        <p className="mx-auto mt-5 max-w-2xl text-sm text-neutral-500">
          Less manual work. Faster replies. Clearer operations. More closed work.
        </p>

        <p className="mx-auto mt-4 max-w-3xl text-xs sm:text-sm text-neutral-600">
          AI systems • automation • booking • internal tools
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <button
            type="button"
            onClick={onPrimaryCTA}
            className={[
              "w-full sm:w-auto",
              "rounded-full px-9 py-4 text-sm font-semibold text-white",
              "bg-gradient-to-b from-[#3F6E8F] to-[#2F5D7C]",
              "shadow-xl shadow-[#3F6E8F]/25",
              "transition-all duration-500",
              "hover:from-[#5B8FB0] hover:to-[#3F6E8F]",
              "hover:shadow-[#5B8FB0]/30 hover:-translate-y-1",
              "focus-visible:ring-2 focus-visible:ring-[#3F6E8F]",
            ].join(" ")}
          >
            Request a Systems Assessment
          </button>

          <button
            type="button"
            onClick={onSecondaryCTA}
            className={[
              "w-full sm:w-auto",
              "rounded-full px-9 py-4 text-sm font-semibold",
              "border border-neutral-800 bg-black/30 text-neutral-200",
              "backdrop-blur-xl",
              "transition-all duration-500",
              "hover:border-[#3F6E8F]/60 hover:text-white hover:-translate-y-1",
              "focus-visible:ring-2 focus-visible:ring-[#3F6E8F]",
            ].join(" ")}
          >
            See examples
          </button>
        </div>

        <p className="mt-10 text-xs text-neutral-600 tracking-wide">
          Built for service businesses that need better systems, not more chaos
        </p>
      </div>
    </section>
  );
}