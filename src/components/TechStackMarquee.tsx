// src/components/TechStackMarquee.tsx
type TechStackMarqueeProps = {
  items?: string[];
};

export default function TechStackMarquee({
  items = ["React", "TypeScript", "Node", "Vercel", "Resend", "Swift", "Python"],
}: TechStackMarqueeProps) {
  const row = [...items, ...items];

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-800/60 bg-black/30 backdrop-blur-xl">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/80 to-transparent" />

        <div className="flex gap-3 whitespace-nowrap px-6 py-5 will-change-transform animate-[marquee_18s_linear_infinite]">
          {row.map((label, i) => (
            <span
              key={`${label}-${i}`}
              className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-950/60 px-4 py-2 text-xs tracking-wide text-neutral-200"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}