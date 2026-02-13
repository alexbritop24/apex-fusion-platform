const studies = [
  {
    category: "Automation",
    metric: "78% reduction in ops overhead",
    client: "Enterprise SaaS",
  },
  {
    category: "Product",
    metric: "2.4M bookings processed",
    client: "B2B Platform",
  },
  {
    category: "Systems",
    metric: "14× faster delivery",
    client: "Digital Agency",
  },
];

export default function ProofSection() {
  return (
    <section className="bg-neutral-950 px-8 lg:px-16 py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-5xl lg:text-6xl font-extralight tracking-[-0.04em] text-neutral-100">
          Results
        </h2>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {studies.map((s) => (
            <article
              key={s.metric}
              className="group rounded-2xl border border-neutral-800 bg-black/40 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-brand-400/50"
            >
              <p className="text-xs uppercase tracking-widest text-brand-400">
                {s.category}
              </p>

              <p className="mt-5 text-3xl font-light leading-tight text-neutral-100 transition-colors duration-500 group-hover:text-brand-300">
                {s.metric}
              </p>

              <p className="mt-6 text-sm text-neutral-500">{s.client}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}