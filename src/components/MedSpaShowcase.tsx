// src/components/MedSpaShowcase.tsx
export default function MedSpaShowcase() {
  return (
    <section className="px-6 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-3xl text-center mb-12">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#3F6E8F]">
            Built for your industry
          </p>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extralight tracking-[-0.04em] text-neutral-100">
            See what your system could look like
          </h2>
          <p className="mt-5 text-base font-light text-neutral-400">
            A live preview of a med spa check-in experience — automated, branded, and running without your team lifting a finger.
          </p>
        </div>

        <div className="relative w-full rounded-3xl overflow-hidden border border-neutral-800/60"
          style={{ height: "580px" }}>
          <iframe
            src="/medspa-scene.html"
            className="w-full h-full"
            style={{ border: "none" }}
            title="Med Spa System Preview"
          />
          {/* bottom fade */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24
            bg-gradient-to-t from-black to-transparent" />
        </div>

        <p className="mt-6 text-center text-xs text-neutral-600 tracking-wide">
          Live interactive demo — automated booking confirmation UI
        </p>

      </div>
    </section>
  );
}