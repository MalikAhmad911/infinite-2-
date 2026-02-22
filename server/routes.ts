import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

const serviceSlugs = [
  "local-seo","google-ads","social-media-management","content-marketing","website-design",
  "facebook-ads","email-marketing","link-building","reputation-management","conversion-rate-optimization",
  "seo-audit","keyword-research","technical-seo","ecommerce-seo","national-seo",
  "international-seo","youtube-seo","voice-search-seo","mobile-seo","on-page-seo",
  "off-page-seo","schema-markup","google-my-business","instagram-ads","linkedin-ads",
  "youtube-ads","tiktok-ads","pinterest-ads","twitter-ads","bing-ads",
  "programmatic-advertising","retargeting-campaigns","display-advertising","facebook-marketing","instagram-marketing",
  "linkedin-marketing","tiktok-marketing","pinterest-marketing","twitter-marketing","youtube-channel-management",
  "snapchat-marketing","social-media-strategy","content-marketing-strategy","blog-writing","copywriting",
  "video-script-writing","email-copywriting","landing-page-copywriting","press-release-writing","case-study-writing",
  "white-paper-writing","infographic-design","wordpress-development","shopify-development","landing-page-design",
  "ui-ux-design","mobile-app-design","website-redesign","website-speed-optimization","website-maintenance",
  "ecommerce-development","email-campaign-management","email-automation","newsletter-design","drip-campaign-setup",
  "email-list-building","video-production","video-marketing","youtube-marketing","video-ads-creation",
  "explainer-videos","social-media-videos","online-reputation-management","review-generation","brand-monitoring",
  "crisis-management","google-reviews-management","google-analytics-setup","conversion-tracking","marketing-dashboard",
  "monthly-reporting","roi-tracking","lead-generation","b2b-lead-generation","local-lead-generation",
  "sales-funnel-building","crm-setup","marketing-automation","influencer-marketing","affiliate-marketing",
  "amazon-marketing","podcast-marketing","webinar-marketing","community-management","chatbot-marketing",
  "sms-marketing","whatsapp-marketing","ab-testing","competitor-analysis","digital-marketing-consulting"
];

const blogSlugs = [
  "local-seo-strategies-2025",
  "cut-google-ads-spend-40-percent",
  "instagram-marketing-local-businesses",
  "content-marketing-roi-measurement",
  "website-killing-conversions",
  "technical-seo-checklist",
  "email-marketing-automation-sequences",
  "google-analytics-4-setup-guide",
  "performance-max-campaigns-guide",
  "social-media-strategy-small-business"
];

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/sitemap.xml", (_req, res) => {
    const base = "https://infiniterankers.com";
    const today = new Date().toISOString().split("T")[0];
    const pages = [
      { path: "/", freq: "daily", priority: "1.0" },
      { path: "/about", freq: "monthly", priority: "0.8" },
      { path: "/services", freq: "weekly", priority: "0.9" },
      { path: "/results", freq: "monthly", priority: "0.8" },
      { path: "/blog", freq: "weekly", priority: "0.8" },
      { path: "/contact", freq: "monthly", priority: "0.7" },
    ];
    const urls = pages.map(p => `  <url>\n    <loc>${base}${p.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${p.freq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`);
    const serviceUrls = serviceSlugs.map(s => `  <url>\n    <loc>${base}/${s}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`);
    const blogUrls = blogSlugs.map(s => `  <url>\n    <loc>${base}/${s}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>`);
    res.set("Content-Type", "application/xml");
    res.set("Cache-Control", "public, max-age=3600");
    res.send(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls.join("\n")}\n${serviceUrls.join("\n")}\n${blogUrls.join("\n")}\n</urlset>`);
  });

  app.get("/robots.txt", (_req, res) => {
    res.set("Content-Type", "text/plain");
    res.set("Cache-Control", "public, max-age=86400");
    res.send(`User-agent: *\nAllow: /\n\nUser-agent: Googlebot\nAllow: /\n\nUser-agent: Bingbot\nAllow: /\n\nSitemap: https://infiniterankers.com/sitemap.xml\n`);
  });

  return httpServer;
}
