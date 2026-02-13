const engagements = [
  {
    category: "Automation Architecture",
    title: "Operational Workflow Consolidation",
    description:
      "Replaced fragmented manual processes with unified automation flows, reducing handoffs and eliminating duplicate data entry across departments.",
    context: "Service-based operator",
  },
  {
    category: "Platform Engineering",
    title: "Custom Booking Infrastructure",
    description:
      "Designed and deployed a scalable booking system integrated with payments, calendar logic, and internal dashboards for real-time oversight.",
    context: "Growth-stage service business",
  },
  {
    category: "Systems Modernization",
    title: "Legacy Stack Refactor",
    description:
      "Re-architected brittle legacy tools into modular, maintainable systems built for long-term expansion and team scalability.",
    context: "Digital operations team",
  },
];

export default function ProofSection() {
  return (
    <section className="bg-neutral-950 px-8 py-32 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-[#3F6E8F]">
            Selected Engagements
          </p>

          <h2 className="mt-6 text-5xl font-extralight tracking-[-0.04em] text-neutral-100 lg:text-6xl">
            Systems That Compound
          </h2>

          <p className="mt-6 text-lg font-light text-neutral-400">
            Real-world implementations focused on durability, operational clarity,
            and scalable infrastructure.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {engagements.map((e) => (
            <article
              key={e.title}
              className="group rounded-2xl border border-neutral-800 bg-black/40 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#3F6E8F]/40"
            >
              <p className="text-xs uppercase tracking-widest text-[#3F6E8F]">
                {e.category}
              </p>

              <h3 className="mt-6 text-2xl font-light text-neutral-100 transition-colors duration-500 group-hover:text-white">
                {e.title}
              </h3>

              <p className="mt-6 text-sm leading-relaxed text-neutral-400">
                {e.description}
              </p>

              <p className="mt-8 text-xs text-neutral-500">
                Context: {e.context}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}