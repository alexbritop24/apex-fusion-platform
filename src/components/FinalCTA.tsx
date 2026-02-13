type FinalCTAProps = {
  onOpenBooking: () => void;
};

export default function FinalCTA({ onOpenBooking }: FinalCTAProps) {
  return (
    <section className="relative overflow-hidden bg-black px-8 py-40 lg:px-16">
      {/* subtle radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(46,103,134,0.15), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <h2 className="text-5xl font-extralight tracking-[-0.04em] text-neutral-100 md:text-6xl">
          Build the System.
          <br />
          Own the Outcome.
        </h2>

        <p className="mt-8 text-xl font-light text-neutral-400">
          Let’s design infrastructure that scales with you — not against you.
        </p>

        <div className="mt-14">
          <button
            type="button"
            onClick={onOpenBooking}
            className={[
              "rounded-full px-10 py-5 text-lg font-semibold text-white",
              "bg-gradient-to-b from-[#3F6E8F] to-[#2F5D7C]",
              "shadow-xl shadow-[#3F6E8F]/25",
              "transition-all duration-500",
              "hover:from-[#5B8FB0] hover:to-[#3F6E8F] hover:shadow-[#5B8FB0]/30 hover:-translate-y-1",
              "focus-visible:ring-2 focus-visible:ring-[#3F6E8F]",
            ].join(" ")}
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}