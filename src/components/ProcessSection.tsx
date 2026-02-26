// src/components/ProcessSection.tsx
import { ClipboardList, Cpu, Rocket } from "lucide-react";

type Step = {
  step: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
};

type ProcessSectionProps = {
  onOpenBooking: () => void;
};

export default function ProcessSection({ onOpenBooking }: ProcessSectionProps) {
  const steps: Step[] = [
    {
      step: "01",
      title: "Systems Assessment",
      desc: "We map your operations, identify bottlenecks, and define what must be automated, rebuilt, or replaced to scale reliably.",
      icon: ClipboardList,
    },
    {
      step: "02",
      title: "Architecture + Build",
      desc: "We design the workflow and build durable software: booking, automation, dashboards, integrations, and the infrastructure behind it.",
      icon: Cpu,
    },
    {
      step: "03",
      title: "Launch + Hardening",
      desc: "We deploy, instrument, and harden the system so it keeps performing under real load — with clear ownership and next steps.",
      icon: Rocket,
    },
  ];

  return (
    <section className="px-6 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24 bg-neutral-950/30">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#3F6E8F]">
            How it works
          </p>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.04em]">
            A disciplined build process.
          </h2>

          <p className="mt-5 text-base sm:text-lg font-light text-neutral-400">
            You don’t need another tool. You need infrastructure that fits your
            operation and keeps working as you grow.
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-neutral-800/60 lg:grid-cols-3 rounded-3xl overflow-hidden">
          {steps.map((s) => {
            const Icon = s.icon;

            return (
              <div
                key={s.step}
                className="bg-black p-8 md:p-10 transition-all duration-500 hover:bg-neutral-900/60"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[11px] tracking-[0.22em] text-neutral-500">
                    STEP {s.step}
                  </p>
                  <Icon className="h-6 w-6 text-[#3F6E8F]" aria-hidden="true" />
                </div>

                <h3 className="mt-5 text-xl md:text-2xl font-light text-neutral-100">
                  {s.title}
                </h3>

                <p className="mt-3 text-sm font-light leading-relaxed text-neutral-400">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
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
            Request a Systems Assessment
          </button>
        </div>
      </div>
    </section>
  );
}