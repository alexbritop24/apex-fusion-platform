// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-neutral-800">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-8 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        {/* Left */}
        <div className="flex items-center gap-3">
          <img
            src="/vite.svg"
            alt="Apex Fusion Studios"
            className="h-8 w-8"
            loading="lazy"
          />
          <div className="leading-tight">
            <p className="text-sm text-neutral-400">
              © {new Date().getFullYear()} Apex Fusion Studios
            </p>
            <p className="mt-1 text-xs text-neutral-600">
              Premium software, automation & platforms.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <a
            href="/privacy"
            className="text-sm text-neutral-500 hover:text-neutral-300 focus-visible:ring-2 focus-visible:ring-[#2563eb] rounded"
          >
            Privacy
          </a>
          <a
            href="/terms"
            className="text-sm text-neutral-500 hover:text-neutral-300 focus-visible:ring-2 focus-visible:ring-[#2563eb] rounded"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}