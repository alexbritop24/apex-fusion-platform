import { useEffect } from "react";

type SEOProps = {
  title?: string;
  description?: string;
  ogImage?: string;
  url?: string;
};

export default function SEO({
  title = "Apex Fusion Studios - Premium Software & Automation",
  description = "We build custom software products, automation systems, and digital infrastructure for businesses that refuse to settle.",
  ogImage = "/og-image.png",
  url = "https://apexfusionstudios.com",
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const upsert = (selector: string, attr: "name" | "property", key: string, content: string) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    upsert('meta[name="description"]', "name", "description", description);

    upsert('meta[property="og:title"]', "property", "og:title", title);
    upsert('meta[property="og:description"]', "property", "og:description", description);
    upsert('meta[property="og:image"]', "property", "og:image", ogImage);
    upsert('meta[property="og:url"]', "property", "og:url", url);

    upsert('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    upsert('meta[name="twitter:title"]', "name", "twitter:title", title);
    upsert('meta[name="twitter:description"]', "name", "twitter:description", description);
    upsert('meta[name="twitter:image"]', "name", "twitter:image", ogImage);
  }, [title, description, ogImage, url]);

  return null;
}