// src/components/AuthorityBlock.tsx
import { Code, Shield, Workflow, Server, Check } from "lucide-react";
import TechStackMarquee from "./TechStackMarquee";

type Pillar = {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
};

type Signal = {
  title: string;
  desc: string;
};

export default function AuthorityBlock() {
  const pillars: Pillar[] = [
    {
      title: "Software Systems",
      desc: "Custom apps and internal tools designed around your workflows — not generic templates.",
      icon: Code,
    },
    {
      title: "Automation Engineering",
      desc: "Workflow automation that reduces manual steps, eliminates handoffs, and prevents errors.",
      icon: Workflow,
    },
    {
      title: "Infrastructure + Deployments",
      desc: "Production-grade architecture, deployments, and monitoring for long-term reliability.",
      icon: Server,
    },
    {
      title: "Security-minded by default",
      desc: "Least-privilege access patterns, safe data handling, and hardened delivery workflows.",
      icon: Shield,
    },
  ];

  const signals: Signal[] = [
    {
      title: "Designed for operators",
      desc: "We build systems that reduce friction inside real businesses — scheduling, ops, and back office.",
    },
    {
      title: "Durable over trendy",
      desc: "We prioritize maintainability, clarity, and long-term ownership over novelty.",
    },
    {
      title: "Proof available on request",
      desc: "Select outcomes and references can be shared after an initial fit check.",
    },
  ];

  return (
    <section className="px-6 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#3F6E8F]">
            Credibility
          </p>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.04em]">
            Infrastructure-first.
            <br />
            Built to compound.
          </h2>

          <p className="mt-5 text-base sm:text-lg font-light text-neutral-400">
            We deliver systems that stay reliable under growth: software,
            automation, and operational platforms.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="mt-14 grid gap-px bg-neutral-800/60 rounded-3xl overflow-hidden md:grid-cols-2">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-black p-8 md:p-10 transition-all duration-500 hover:bg-neutral-900/60"
              >
                <Icon className="h-8 w-8 text-[#3F6E8F]" aria-hidden="true" />

                <h3 className="mt-5 text-xl md:text-2xl font-light text-neutral-100">
                  {p.title}
                </h3>

                <p className="mt-3 text-sm font-light leading-relaxed text-neutral-400">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Signals */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {signals.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-neutral-800/60 bg-black/30 p-7 md:p-8 backdrop-blur-xl"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950">
                  <Check className="h-4 w-4 text-[#3F6E8F]" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-neutral-200">
                    {s.title}
                  </h4>
                  <p className="mt-2 text-sm font-light leading-relaxed text-neutral-400">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Tech stack marquee (logos + names) */}
        <div className="mt-10">
          <TechStackMarquee
            items={[
              "React",
              "TypeScript",
              "APIs",
              "Automation",
              "Vercel",
              "Resend",
              "Swift",
              "Python",
              "Dashboards",
              "Integrations",
            ]}
            speedSeconds={26}
          />
        </div>
      </div>
    </section>
  );
}