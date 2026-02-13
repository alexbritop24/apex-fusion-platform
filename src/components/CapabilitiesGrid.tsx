import { Code, Zap, Layers, Database } from "lucide-react";

const capabilities = [
  {
    title: "Software Systems",
    description: "Robust custom software to run your business.",
    Icon: Code,
  },
  {
    title: "Automation Workflows",
    description: "Intelligent automation that saves time and eliminates errors.",
    Icon: Zap,
  },
  {
    title: "Digital Products",
    description: "Apps and tools designed for lasting impact.",
    Icon: Layers,
  },
  {
    title: "Infrastructure",
    description: "Backend architecture that powers growth.",
    Icon: Database,
  },
];

export default function CapabilitiesGrid() {
  return (
    <section className="px-8 lg:px-16 py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-5xl lg:text-6xl font-extralight tracking-[-0.04em] text-neutral-100">
          What We Build
        </h2>

        <div className="mt-20 bg-neutral-800/60 rounded-3xl overflow-hidden border border-neutral-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
            {capabilities.map(({ title, description, Icon }) => (
              <div
                key={title}
                className="group relative bg-black p-12 transition-all duration-500 hover:bg-neutral-900/90 hover:-translate-y-1 cursor-pointer"
              >
                <Icon className="h-12 w-12 text-brand-400 transition-all duration-500 group-hover:text-brand-300" />
                <h3 className="mt-6 text-3xl md:text-4xl font-light text-neutral-100 transition-colors duration-500 group-hover:text-brand-400">
                  {title}
                </h3>
                <p className="mt-4 text-lg text-neutral-400 max-w-lg">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}