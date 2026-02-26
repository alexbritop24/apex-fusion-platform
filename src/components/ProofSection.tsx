// src/components/ProofSection.tsx

const engagements = [
  {
    category: "Case Study",
    title: "Service Business Ops Rebuild",
    description:
      "Rebuilt intake, scheduling, reminders, and reporting into a unified operational backend.",
    before: "Manual scheduling, missed follow-ups, duplicate admin entry.",
    after: "Automated intake forms, calendar logic, reminders, and internal dashboard.",
    result:
      "Reduced admin load, improved response speed, and stabilized weekly throughput.",
    context: "Multi-location service operator",
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

type CaseStudyEngagement = {
  category: string;
  title: string;
  description: string;
  before: string;
  after: string;
  result: string;
  context: string;
};

type StandardEngagement = {
  category: string;
  title: string;
  description: string;
  context: string;
};

type Engagement = CaseStudyEngagement | StandardEngagement;

function isCaseStudy(e: Engagement): e is CaseStudyEngagement {
  return (
    typeof (e as CaseStudyEngagement).before === "string" &&
    typeof (e as CaseStudyEngagement).after === "string" &&
    typeof (e as CaseStudyEngagement).result === "string"
  );
}

export default function ProofSection() {
  return (
    <section className="bg-neutral-950/30 px-6 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#3F6E8F]">
            Selected engagements
          </p>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.04em] text-neutral-100">
            Systems that compound
          </h2>

          <p className="mt-5 text-base sm:text-lg font-light text-neutral-400">
            Real builds focused on durability, operational clarity, and stable
            infrastructure.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {(engagements as Engagement[]).map((e) => (
            <article
              key={e.title}
              className="group rounded-3xl border border-neutral-800/60 bg-black/30 p-8 md:p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5 hover:border-[#3F6E8F]/40 hover:bg-neutral-900/40"
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#3F6E8F]">
                {e.category}
              </p>

              <h3 className="mt-5 text-xl md:text-2xl font-light text-neutral-100 transition-colors duration-500 group-hover:text-white">
                {e.title}
              </h3>

              <p className="mt-4 text-sm font-light leading-relaxed text-neutral-400">
                {e.description}
              </p>

              {isCaseStudy(e) ? (
                <div className="mt-5 space-y-3 text-sm font-light text-neutral-400">
                  <p>
                    <span className="text-neutral-200">Before:</span> {e.before}
                  </p>
                  <p>
                    <span className="text-neutral-200">After:</span> {e.after}
                  </p>
                  <p>
                    <span className="text-neutral-200">Result:</span> {e.result}
                  </p>
                </div>
              ) : null}

              <p className="mt-6 text-xs text-neutral-500">Context: {e.context}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}