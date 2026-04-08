// src/components/MedSpaShowcase.tsx
export default function MedSpaShowcase() {
  return (
    <section className="px-6 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#3F6E8F]">
            Built for your industry
          </p>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extralight tracking-[-0.04em] text-neutral-100">
            See what your system could look like
          </h2>

          <p className="mt-5 text-base font-light leading-relaxed text-neutral-400">
            A live preview of a med spa check-in experience — automated,
            branded, and running without your team lifting a finger.
          </p>
        </div>

        {/* MOBILE: static premium preview */}
        <div className="md:hidden">
          <div className="relative overflow-hidden rounded-3xl border border-neutral-800/60 bg-black/30 backdrop-blur-xl">
            <img
              src="/booking-dashboard.PNG"
              alt="Med spa system preview"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
          </div>

          <p className="mt-6 text-center text-xs tracking-wide text-neutral-600">
            Mobile preview — full interactive demo available on larger screens
          </p>
        </div>

        {/* TABLET / DESKTOP: live iframe */}
        <div className="hidden md:block">
          <div
            className="relative w-full overflow-hidden rounded-3xl border border-neutral-800/60"
            style={{ height: "580px" }}
          >
            <iframe
              src="/medspa-scene.html"
              className="h-full w-full"
              style={{ border: "none" }}
              title="Med Spa System Preview"
            />

            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
          </div>

          <p className="mt-6 text-center text-xs tracking-wide text-neutral-600">
            Live interactive demo — automated booking confirmation UI
          </p>
        </div>
      </div>
    </section>
  );
}