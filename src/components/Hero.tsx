import { useEffect, useMemo, useState } from "react";

type HeroProps = {
  onPrimaryCTA: () => void;
  onSecondaryCTA: () => void;
};

export default function Hero({ onPrimaryCTA }: HeroProps) {
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
    <section className="relative min-h-screen px-8 lg:px-16 py-32 overflow-hidden">
      {/* subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-3xl"
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
        <p className="text-xs uppercase tracking-[0.22em] text-[#3F6E8F]">
          For serious operators
        </p>

        <h1 className="mt-6 text-6xl md:text-7xl lg:text-8xl font-extralight tracking-[-0.04em] leading-none">
          Replace manual chaos
          <br />
          with engineered systems.
        </h1>

        <p className="mx-auto mt-10 max-w-3xl text-xl lg:text-2xl text-neutral-400 font-light">
          We design custom software, automation workflows, and booking systems
          that eliminate operational friction and give service businesses
          durable infrastructure to scale.
        </p>

        {/* Qualification layer */}
        <p className="mx-auto mt-6 max-w-2xl text-sm text-neutral-500">
          Built for teams ready to invest in systems that compound — not
          templates or one-off fixes.
        </p>

        <div className="mt-14 flex items-center justify-center gap-8">
          <button
            type="button"
            onClick={onPrimaryCTA}
            className={[
              "rounded-full px-9 py-4 font-semibold text-white",
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
        </div>

        {/* Micro trust line */}
        <p className="mt-10 text-xs text-neutral-600 tracking-wide">
          Custom infrastructure • Automation engineering • Apex Booking System
        </p>
      </div>
    </section>
  );
}