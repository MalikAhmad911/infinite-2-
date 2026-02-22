import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  schema?: object | object[];
  canonical?: string;
  ogImage?: string;
}

function setMeta(attr: string, key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function SEO({ title, description, schema, canonical, ogImage }: SEOProps) {
  useEffect(() => {
    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", "index, follow");
    setMeta("name", "author", "Infinite Rankers");

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "Infinite Rankers");
    if (ogImage) setMeta("property", "og:image", ogImage);
    if (canonical) setMeta("property", "og:url", canonical);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    if (ogImage) setMeta("name", "twitter:image", ogImage);

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    if (schema) {
      document.querySelectorAll('script[data-seo-component="true"]').forEach(el => el.remove());
      const schemas = Array.isArray(schema) ? schema : [schema];
      schemas.forEach((s, i) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo-component", "true");
        script.textContent = JSON.stringify(s);
        document.head.appendChild(script);
      });
    }
  }, [title, description, schema, canonical, ogImage]);

  return null;
}
