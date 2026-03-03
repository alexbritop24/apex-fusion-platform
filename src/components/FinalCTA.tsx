type FinalCTAProps = {
  onOpenBooking: () => void;
};

export default function FinalCTA({ onOpenBooking }: FinalCTAProps) {
  return (
    <section className="relative overflow-hidden bg-black px-6 md:px-8 lg:px-16 py-20 md:py-24 lg:py-28">
      {/* subtle radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(46,103,134,0.12), transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.04em] text-neutral-100">
          Ready to fix your workflow?
        </h2>

        <p className="mt-6 text-base sm:text-lg font-light text-neutral-400">
          We’ll review your current process, find what’s slowing you down,
          and design a system that removes the friction.
        </p>

        <p className="mt-4 text-sm font-light text-neutral-500">
          Fewer no-shows. Faster replies. Less manual work.
        </p>

        <div className="mt-10">
          <button
            type="button"
            onClick={onOpenBooking}
            className={[
              "rounded-full px-9 py-4 text-sm font-semibold text-white",
              "bg-gradient-to-b from-[#3F6E8F] to-[#2F5D7C]",
              "shadow-xl shadow-[#3F6E8F]/25",
              "transition-all duration-500",
              "hover:from-[#5B8FB0] hover:to-[#3F6E8F]",
              "hover:shadow-[#5B8FB0]/30 hover:-translate-y-1",
              "focus-visible:ring-2 focus-visible:ring-[#3F6E8F]",
            ].join(" ")}
          >
            Book a strategy call
          </button>
        </div>
      </div>
    </section>
  );
}