// src/components/SEO.tsx
import { useEffect } from "react";

export type SEOProps = {
  title?: string;
  description?: string;
  /** Route path like "/services" to build canonical URL */
  path?: string;
  /** Optional override per-page (e.g. "/og-services.png") */
  imagePath?: string;
};

const SITE_NAME = "Apex Fusion Studios";
const SITE_URL = "https://apexfusionstudios.com";
const DEFAULT_OG_IMAGE = "/og.png"; // put this in /public

function upsertMeta(
  nameOrProp: { name?: string; property?: string },
  content: string
) {
  const selector = nameOrProp.name
    ? `meta[name="${nameOrProp.name}"]`
    : `meta[property="${nameOrProp.property}"]`;

  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    if (nameOrProp.name) el.setAttribute("name", nameOrProp.name);
    if (nameOrProp.property) el.setAttribute("property", nameOrProp.property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function SEO({ title, description, path, imagePath }: SEOProps) {
  useEffect(() => {
    const fullTitle = title ? title : SITE_NAME;
    const canonical = path ? `${SITE_URL}${path}` : SITE_URL;
    const ogImage = `${SITE_URL}${imagePath || DEFAULT_OG_IMAGE}`;

    document.title = fullTitle;

    // Basic
    if (description) upsertMeta({ name: "description" }, description);
    upsertLink("canonical", canonical);

    // Open Graph
    upsertMeta({ property: "og:site_name" }, SITE_NAME);
    upsertMeta({ property: "og:title" }, fullTitle);
    upsertMeta({ property: "og:url" }, canonical);
    upsertMeta({ property: "og:type" }, "website");
    if (description) upsertMeta({ property: "og:description" }, description);

    upsertMeta({ property: "og:image" }, ogImage);
    upsertMeta({ property: "og:image:width" }, "1200");
    upsertMeta({ property: "og:image:height" }, "630");

    // Twitter
    upsertMeta({ name: "twitter:card" }, "summary_large_image");
    upsertMeta({ name: "twitter:title" }, fullTitle);
    if (description) upsertMeta({ name: "twitter:description" }, description);
    upsertMeta({ name: "twitter:image" }, ogImage);
  }, [title, description, path, imagePath]);

  return null;
}