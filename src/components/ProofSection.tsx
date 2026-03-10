// src/components/ProofSection.tsx

const engagements = [
  {
    category: "Example",
    title: "Operations cleanup + automation",
    description:
      "We cleaned up the intake and scheduling flow so staff stopped chasing people and doing the same work twice.",
    before: "Manual scheduling, missed follow-ups, duplicate admin work.",
    after: "Automated intake forms, booking rules, reminders, and a simple internal dashboard.",
    result:
      "Less admin time, faster replies, and a smoother weekly schedule.",
    context: "Multi-location service business",
  },
  {
    category: "Example",
    title: "Booking system + payments",
    description:
      "We built a booking flow that takes payments, applies scheduling rules, and gives the team a clear view of what’s coming up.",
    context: "Growing service business",
  },
  {
    category: "Example",
    title: "Replace old tools that keep breaking",
    description:
      "We replaced messy, fragile tools with a cleaner setup the team can keep using and expanding.",
    context: "Operations team",
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
    <section
      id="examples"
      className="bg-neutral-950/30 px-6 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#3F6E8F]">
            Results
          </p>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.04em] text-neutral-100">
            What we’ve built
          </h2>

          <p className="mt-5 text-base sm:text-lg font-light text-neutral-400">
            Simple goal: less manual work, fewer no-shows, faster replies, and cleaner operations.
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