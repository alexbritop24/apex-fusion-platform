// src/components/TechStackMarquee.tsx
import { useMemo } from "react";

export type TechItem =
  | string
  | {
      name: string;
      src: string; // e.g. "/tech/react.svg"
      invertOnDark?: boolean; // optional if a logo needs inversion
    };

type TechStackMarqueeProps = {
  items: TechItem[];
  /** speed in seconds for one full loop (lower = faster) */
  speedSeconds?: number;
};

function normalizeItem(item: TechItem) {
  if (typeof item === "string") {
    return { name: item, src: "" };
  }
  return item;
}

export default function TechStackMarquee({
  items,
  speedSeconds = 28,
}: TechStackMarqueeProps) {
  const normalized = useMemo(() => items.map(normalizeItem), [items]);
  const doubled = useMemo(() => [...normalized, ...normalized], [normalized]);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-neutral-800/60 bg-black/30 backdrop-blur-xl">
      {/* edge fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      />

      <div className="px-6 py-5 md:px-8 md:py-6">
        <div className="flex items-center gap-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
            Stack
          </p>
          <span className="h-px flex-1 bg-neutral-800/70" />
        </div>

        {/* marquee */}
        <div className="mt-5 overflow-hidden">
          <div
            className="group flex w-max items-center gap-8 will-change-transform"
            style={{
              animation: `tech-marquee ${speedSeconds}s linear infinite`,
            }}
          >
            {doubled.map((t, idx) => (
              <div
                key={`${t.name}-${idx}`}
                className="flex items-center gap-3"
                style={{
                  animation: `tech-float 4.8s ease-in-out infinite`,
                  animationDelay: `${(idx % normalized.length) * 0.12}s`,
                }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-950">
                  {t.src ? (
                    <img
                      src={t.src}
                      alt={t.name}
                      className={[
                        "h-5 w-5 opacity-90",
                        "transition-transform duration-500",
                        "group-hover:scale-[1.03]",
                        t.invertOnDark ? "invert" : "",
                      ].join(" ")}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="h-5 w-5 rounded bg-neutral-800" aria-hidden="true" />
                  )}
                </div>

                <span className="text-sm font-light text-neutral-300 whitespace-nowrap">
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-4 text-xs text-neutral-600">
          Hover to pause.
        </p>
      </div>

      {/* local keyframes so you don't need tailwind config */}
      <style>{`
        @keyframes tech-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes tech-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        .group:hover {
          animation-play-state: paused !important;
        }
        .group:hover * {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
}