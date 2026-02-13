import { Helmet } from "react-helmet-async";

type SEOProps = {
  title?: string;
  description?: string;
  canonicalUrl?: string;
};

export default function SEO({
  title = "Apex Fusion Studios - Premium Software & Automation",
  description = "We build custom software products, automation systems, and digital infrastructure for businesses that refuse to settle.",
  canonicalUrl = "https://apexfusion.com",
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content="Apex Fusion Studios" />
      <meta property="og:description" content="Premium software and automation company" />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Apex Fusion Studios" />
      <meta name="twitter:description" content="Premium software and automation" />
      <meta name="twitter:image" content="/og-image.png" />
    </Helmet>
  );
}