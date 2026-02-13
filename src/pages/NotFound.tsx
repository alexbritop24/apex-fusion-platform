import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-[#f5f5f5] px-8 lg:px-16 py-24">
      <SEO title="404 - Apex Fusion Studios" />
      <h1 className="text-5xl font-extralight tracking-tight">404</h1>
      <p className="mt-4 text-neutral-400">This page doesn’t exist.</p>
      <a
        href="/"
        className="mt-8 inline-block text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        Back to home →
      </a>
    </div>
  );
}