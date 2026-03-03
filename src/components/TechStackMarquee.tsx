// src/components/TechStackMarquee.tsx
import { useMemo } from "react";

type ItemInput =
  | string
  | {
      name: string;
    };

type TechStackMarqueeProps = {
  items: ItemInput[];
  label?: string;
  speedSeconds?: number; // lower = faster
};

type Tech = {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
};

function normalizeItem(i: ItemInput): string {
  return typeof i === "string" ? i : i.name;
}

/**
 * Inline SVG icons (no assets needed).
 * We intentionally keep them single-color to match your dark theme.
 */
function ReactIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M128 98.7c-16.2 0-29.3 13.1-29.3 29.3s13.1 29.3 29.3 29.3 29.3-13.1 29.3-29.3S144.2 98.7 128 98.7Zm0-50.7c-13.9 0-28.2 17.2-37.4 45.2-31.4-6.2-57 0-64 13.1-7 13.2 4.2 35.9 27.5 56.5-23.3 20.6-34.5 43.4-27.5 56.5 7 13.2 32.6 19.3 64 13.1C99.8 190.8 114.1 208 128 208s28.2-17.2 37.4-45.2c31.4 6.2 57 0 64-13.1 7-13.2-4.2-35.9-27.5-56.5 23.3-20.6 34.5-43.4 27.5-56.5-7-13.2-32.6-19.3-64-13.1C156.2 65.2 141.9 48 128 48Zm0 14c7.1 0 18.1 14.9 25.7 39.2-8 2.4-16.6 5.4-25.7 9-9.1-3.6-17.7-6.6-25.7-9C109.9 76.9 120.9 62 128 62Zm-52.1 47.7c10.5 0 23.5 1.8 37.8 5.1-3.3 9.3-6.1 19.2-8.2 29.2-10.7 6.7-20.4 13.9-28.6 21.4-22.2-17.6-33.5-35.9-29.6-43.3 2.3-4.2 13-12.4 28.6-12.4Zm104.2 0c15.6 0 26.3 8.2 28.6 12.4 3.9 7.4-7.4 25.7-29.6 43.3-8.2-7.5-17.9-14.7-28.6-21.4-2.1-10-4.9-19.9-8.2-29.2 14.3-3.3 27.3-5.1 37.8-5.1ZM128 124.7c10.7 0 19.3 8.6 19.3 19.3s-8.6 19.3-19.3 19.3-19.3-8.6-19.3-19.3 8.6-19.3 19.3-19.3Zm-31.4 6.1c1.7 6.4 3.9 12.7 6.4 18.9-4.4 3-8.5 6.1-12.3 9.3 1.8-9.7 4.1-19.2 5.9-28.2Zm62.8 0c1.8 9 4.1 18.5 5.9 28.2-3.8-3.2-7.9-6.3-12.3-9.3 2.5-6.2 4.7-12.5 6.4-18.9Zm-79.1 44.9c8.2 7.5 17.9 14.7 28.6 21.4 2.1 10 4.9 19.9 8.2 29.2-14.3 3.3-27.3 5.1-37.8 5.1-15.6 0-26.3-8.2-28.6-12.4-3.9-7.4 7.4-25.7 29.6-43.3Zm95.4 50.8c-7.6 24.3-18.6 39.2-25.7 39.2s-18.1-14.9-25.7-39.2c8-2.4 16.6-5.4 25.7-9 9.1 3.6 17.7 6.6 25.7 9Zm-52.1-19.1c9.1-3.6 17.7-7.8 25.7-12.5 8 4.7 16.6 8.9 25.7 12.5-7.6 2.2-16.1 3.4-25.7 3.4s-18.1-1.2-25.7-3.4Zm39.4-2.6c10.7-6.7 20.4-13.9 28.6-21.4 22.2 17.6 33.5 35.9 29.6 43.3-2.3 4.2-13 12.4-28.6 12.4-10.5 0-23.5-1.8-37.8-5.1 3.3-9.3 6.1-19.2 8.2-29.2Z"
      />
    </svg>
  );
}

function TypeScriptIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M32 32h192v192H32V32Zm39.7 77.6h112.2v21.5h-40.4v93.3h-31.5v-93.3H71.7v-21.5Zm118.2 40.8c0-17.5 12.3-30.1 37.8-30.1 9.2 0 17.3 1.4 23.3 3.4v21c-6.1-2.4-13.4-3.9-20.9-3.9-10.3 0-15.7 3.2-15.7 8.9 0 5.8 4.6 8.1 16.8 12.2 18.9 6.3 27.4 14.2 27.4 29.1 0 18.6-14.3 30.7-39.6 30.7-10.3 0-20.7-2.3-27.4-5.4v-22.4c7.6 3.9 17.9 6.6 27 6.6 10.6 0 16.5-3 16.5-9.2 0-6.1-5.2-8.7-17.9-13.1-18-6.1-26.3-13.5-26.3-28.8Z"
      />
    </svg>
  );
}

function PythonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M126.6 24c-18.8.1-33.9 3.9-33.9 3.9-10.1 2.3-12.6 7.3-12.6 16.4v12h68v8H56.4S24 68 24 126.8c0 58.9 28.5 56.8 28.5 56.8h17V159c0-23.5 20.4-22.2 20.4-22.2h67.8s19.1.3 19.1-18.6V48.3c0-18.9-15.9-20.6-15.9-20.6S145.4 24 126.6 24Zm-37.5 19.2c5.8 0 10.6 4.7 10.6 10.5 0 5.8-4.7 10.5-10.6 10.5-5.8 0-10.6-4.7-10.6-10.5 0-5.8 4.7-10.5 10.6-10.5Z"
      />
      <path
        fill="currentColor"
        d="M129.4 232c18.8-.1 33.9-3.9 33.9-3.9 10.1-2.3 12.6-7.3 12.6-16.4v-12h-68v-8h89.7s32.4-3.6 32.4-62.4c0-58.9-28.5-56.8-28.5-56.8h-17V97c0 23.5-20.4 22.2-20.4 22.2H95.4s-19.1-.3-19.1 18.6v69.9c0 18.9 15.9 20.6 15.9 20.6S110.6 232 129.4 232Zm37.5-19.2c-5.8 0-10.6-4.7-10.6-10.5 0-5.8 4.7-10.5 10.6-10.5 5.8 0 10.6 4.7 10.6 10.5 0 5.8-4.7 10.5-10.6 10.5Z"
      />
    </svg>
  );
}

function SwiftIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M212.7 169.4c-4.7-7.7-6.9-13.4-6.2-22.8 1.6-22.5-7.4-45.7-24.9-63.2C158.7 60.5 128.8 52 99 57.6c24.3 11.3 44.4 31.1 56.8 55.6-19.5-18.7-42.2-34.5-67.1-47.6 15.7 19.8 35 39 58 57.7-18.4-9.6-41-23.5-68.2-47.1 7.8 21.7 22.9 44.5 45.6 66.4-18.2 12.1-39.7 18.8-62.2 18.8-8 0-15.9-.8-23.7-2.3 14.3 22.6 39.7 37.7 68.7 37.7 14.8 0 28.8-3.9 41-10.7 11.7-6.6 22.6-4.8 31.1 1.1 9.5 6.5 14.5 18.1 14.5 18.1 9.5-19.3 7.6-41.9-1.4-56Z"
      />
    </svg>
  );
}

function VercelIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} aria-hidden="true">
      <path fill="currentColor" d="M128 44 240 212H16L128 44Z" />
    </svg>
  );
}

function ResendIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M32 64h192v128H32V64Zm16 16v96l64-48L48 80Zm160 0-64 48 64 48V80ZM128 140 48 192h160l-80-52Z"
      />
    </svg>
  );
}

function ApiIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M40 72a24 24 0 0 1 24-24h128a24 24 0 0 1 24 24v112a24 24 0 0 1-24 24H64a24 24 0 0 1-24-24V72Zm24-8a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8H64Zm28 40h72v16H92v-16Zm0 40h52v16H92v-16Z"
      />
    </svg>
  );
}

function AutomationIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M128 24a16 16 0 0 1 16 16v12.7a75.8 75.8 0 0 1 21.7 9l9-9a16 16 0 0 1 22.6 22.6l-9 9a75.8 75.8 0 0 1 9 21.7H216a16 16 0 0 1 0 32h-12.7a75.8 75.8 0 0 1-9 21.7l9 9a16 16 0 0 1-22.6 22.6l-9-9a75.8 75.8 0 0 1-21.7 9V216a16 16 0 0 1-32 0v-12.7a75.8 75.8 0 0 1-21.7-9l-9 9a16 16 0 0 1-22.6-22.6l9-9a75.8 75.8 0 0 1-9-21.7H40a16 16 0 0 1 0-32h12.7a75.8 75.8 0 0 1 9-21.7l-9-9A16 16 0 0 1 75.3 52.7l9 9a75.8 75.8 0 0 1 21.7-9V40a16 16 0 0 1 16-16Zm0 64a40 40 0 1 0 40 40 40 40 0 0 0-40-40Zm0 16a24 24 0 1 1-24 24 24 24 0 0 1 24-24Z"
      />
    </svg>
  );
}

function DashboardIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M40 48h176a16 16 0 0 1 16 16v128a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16Zm0 16v128h176V64H40Zm24 24h80v16H64V88Zm0 40h56v16H64v-16Zm0 40h96v16H64v-16Zm112-80h16v56h-16V88Z"
      />
    </svg>
  );
}

function IntegrationsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M88 72a40 40 0 1 1 0 80H64a48 48 0 0 1 0-96h24Zm0 16H64a32 32 0 0 0 0 64h24a24 24 0 0 0 0-48Zm104-16a48 48 0 0 1 0 96h-24a40 40 0 1 1 0-80h24Zm0 80a32 32 0 0 0 0-64h-24a24 24 0 0 0 0 48h24Zm-104-8h80v16H88v-16Z"
      />
    </svg>
  );
}

function iconFor(name: string): Tech["Icon"] {
  const key = name.toLowerCase().trim();

  if (key === "react") return ReactIcon;
  if (key === "typescript") return TypeScriptIcon;
  if (key === "python") return PythonIcon;
  if (key === "swift") return SwiftIcon;
  if (key === "vercel") return VercelIcon;
  if (key === "resend") return ResendIcon;

  if (key === "apis" || key === "api") return ApiIcon;
  if (key === "automation") return AutomationIcon;
  if (key === "dashboards" || key === "dashboard") return DashboardIcon;
  if (key === "integrations" || key === "integration") return IntegrationsIcon;

  // fallback generic dot
  return function Fallback({ className }: { className?: string }) {
    return (
      <svg viewBox="0 0 256 256" className={className} aria-hidden="true">
        <path fill="currentColor" d="M128 48a80 80 0 1 0 80 80 80 80 0 0 0-80-80Zm0 16a64 64 0 1 1-64 64 64 64 0 0 1 64-64Z" />
      </svg>
    );
  };
}

export default function TechStackMarquee({
  items,
  label = "STACK",
  speedSeconds = 26,
}: TechStackMarqueeProps) {
  const techs = useMemo<Tech[]>(() => {
    return items.map((it) => {
      const name = normalizeItem(it);
      return { name, Icon: iconFor(name) };
    });
  }, [items]);

  // Duplicate for seamless loop
  const loop = useMemo(() => [...techs, ...techs], [techs]);

  return (
    <section
      className={[
        "relative overflow-hidden rounded-3xl",
        "border border-neutral-800/60 bg-black/30 backdrop-blur-xl",
        "px-6 py-6 md:px-8 md:py-7",
      ].join(" ")}
      aria-label="Tech stack"
    >
      {/* subtle inner glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 10%, rgba(63,110,143,0.14), transparent 55%)",
        }}
      />

      <div className="relative flex items-center justify-between gap-6">
        <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
          {label}
        </p>

        <p className="hidden sm:block text-xs text-neutral-600">
          Hover to pause.
        </p>
      </div>

      <div className="relative mt-5">
        {/* left/right mask so it fades in/out like premium strips */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-16"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0))",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-16"
          style={{
            background:
              "linear-gradient(to left, rgba(0,0,0,0.85), rgba(0,0,0,0))",
          }}
        />

        <div className="group overflow-hidden">
          <div
            className="flex w-max items-center gap-7 will-change-transform group-hover:[animation-play-state:paused]"
            style={{
              animation: `afs-marquee ${speedSeconds}s linear infinite`,
            }}
          >
            {loop.map((t, idx) => (
              <div
                key={`${t.name}-${idx}`}
                className={[
                  "flex items-center gap-3",
                  "rounded-full border border-neutral-800/70 bg-neutral-950/60",
                  "px-4 py-2.5",
                  "transition-all duration-300",
                  "hover:border-[#3F6E8F]/50 hover:bg-neutral-900/60 hover:-translate-y-[1px]",
                ].join(" ")}
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-800 bg-black/40">
                  <t.Icon className="h-5 w-5 text-[#3F6E8F]" />
                </span>
                <span className="text-sm font-light text-neutral-200">
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* local keyframes */}
      <style>{`
        @keyframes afs-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}