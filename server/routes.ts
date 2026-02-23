import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function saveToFallbackFile(data: Record<string, string>) {
  try {
    const fallbackDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(fallbackDir)) {
      fs.mkdirSync(fallbackDir, { recursive: true });
    }
    const filePath = path.join(fallbackDir, "contact-submissions.json");
    let existing: any[] = [];
    if (fs.existsSync(filePath)) {
      try {
        existing = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      } catch { existing = []; }
    }
    existing.push({ ...data, submittedAt: new Date().toISOString(), emailSent: false });
    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));
    console.log("[CONTACT] Submission saved to fallback file:", filePath);
    return true;
  } catch (err: any) {
    console.error("[CONTACT] Failed to save fallback file:", err?.message);
    return false;
  }
}

const contactRateLimit = new Map<string, { count: number; resetAt: number }>();

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

const landingPageSlugs = [
  "seo-services-usa",
  "local-seo-google-maps-usa",
  "ppc-google-ads-usa",
  "ai-marketing-automation-usa",
  "technical-seo-website-performance-usa",
  "wordpress-website-development-usa",
  "content-marketing-backlink-strategy-usa",
  "social-media-marketing-usa",
  "landing-page-conversion-optimization-usa",
  "ecommerce-seo-usa"
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
  app.post("/api/contact", async (req, res) => {
    try {
      const ip = req.ip || req.socket.remoteAddress || "unknown";
      const now = Date.now();
      const rateData = contactRateLimit.get(ip);
      if (rateData && now < rateData.resetAt) {
        if (rateData.count >= 5) {
          return res.status(429).json({ error: "Too many requests. Please try again later." });
        }
        rateData.count++;
      } else {
        contactRateLimit.set(ip, { count: 1, resetAt: now + 3600000 });
      }

      const { firstName, lastName, email, phone, businessName, service, message } = req.body;

      if (!firstName || !email || !message) {
        return res.status(400).json({ error: "Please fill in all required fields." });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Please provide a valid email address." });
      }

      if (req.body.honeypot) {
        return res.json({ success: true, message: "Thank you! We'll get back to you within 24 hours." });
      }

      const safe = {
        firstName: escapeHtml(String(firstName).slice(0, 100)),
        lastName: escapeHtml(String(lastName || "").slice(0, 100)),
        email: escapeHtml(String(email).slice(0, 200)),
        phone: escapeHtml(String(phone || "Not provided").slice(0, 50)),
        businessName: escapeHtml(String(businessName || "Not provided").slice(0, 200)),
        service: escapeHtml(String(service || "Not specified").slice(0, 200)),
        message: escapeHtml(String(message).slice(0, 5000)),
      };

      const mailOptions = {
        from: `"Infinite Rankers Website" <${process.env.SMTP_USER}>`,
        to: "contact@infiniterankers.com",
        replyTo: email,
        subject: `New Lead: ${safe.firstName} ${safe.lastName} - ${safe.service}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #3A5FBF, #8B5CF6); padding: 24px; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 20px;">New Contact Form Submission</h1>
            </div>
            <div style="padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; font-weight: bold; color: #1A1A2E; width: 140px;">Name:</td><td style="padding: 8px 0; color: #4A4A6A;">${safe.firstName} ${safe.lastName}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #1A1A2E;">Email:</td><td style="padding: 8px 0; color: #4A4A6A;">${safe.email}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #1A1A2E;">Phone:</td><td style="padding: 8px 0; color: #4A4A6A;">${safe.phone}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #1A1A2E;">Business:</td><td style="padding: 8px 0; color: #4A4A6A;">${safe.businessName}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #1A1A2E;">Service:</td><td style="padding: 8px 0; color: #4A4A6A;">${safe.service}</td></tr>
              </table>
              <div style="margin-top: 16px; padding: 16px; background: #f9fafb; border-radius: 8px;">
                <p style="font-weight: bold; color: #1A1A2E; margin: 0 0 8px;">Message:</p>
                <p style="color: #4A4A6A; margin: 0; white-space: pre-wrap;">${safe.message}</p>
              </div>
            </div>
          </div>
        `,
      };

      const smtpConfigs = [
        { port: 587, secure: false },
        { port: 465, secure: true },
        { port: 25, secure: false },
      ];

      console.log("[CONTACT] New submission from:", safe.firstName, safe.lastName, "Email:", safe.email);
      console.log("[CONTACT] SMTP Host:", process.env.SMTP_HOST || "NOT SET");
      console.log("[CONTACT] SMTP User:", process.env.SMTP_USER || "NOT SET");
      console.log("[CONTACT] SMTP Pass:", process.env.SMTP_PASS ? "SET (" + process.env.SMTP_PASS.length + " chars)" : "NOT SET");

      let lastError: any = null;
      let emailSent = false;
      for (const config of smtpConfigs) {
        try {
          console.log(`[CONTACT] Trying SMTP port ${config.port} (secure: ${config.secure})...`);
          const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: config.port,
            secure: config.secure,
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
            },
            tls: { rejectUnauthorized: false },
            connectionTimeout: 10000,
            greetingTimeout: 10000,
            socketTimeout: 15000,
          });
          await transporter.sendMail(mailOptions);
          console.log(`[CONTACT] Email sent successfully via port ${config.port}`);
          emailSent = true;
          break;
        } catch (err: any) {
          console.error(`[CONTACT] SMTP port ${config.port} failed:`, err?.message);
          lastError = err;
        }
      }

      if (emailSent) {
        res.json({ success: true, message: "Thank you! We'll get back to you within 24 hours." });
      } else {
        console.error("[CONTACT] All SMTP ports failed. Saving to fallback file...");
        const saved = saveToFallbackFile({
          firstName: safe.firstName,
          lastName: safe.lastName,
          email: safe.email,
          phone: safe.phone,
          businessName: safe.businessName,
          service: safe.service,
          message: safe.message,
        });
        if (saved) {
          res.json({ success: true, message: "Thank you! We've received your message and will get back to you within 24 hours." });
        } else {
          res.status(500).json({ error: "Failed to send message. Please call us directly at (703) 415-9373." });
        }
      }
    } catch (error: any) {
      console.error("[CONTACT] Unexpected error:", error?.message || error);
      res.status(500).json({ error: "Failed to send message. Please call us directly at (703) 415-9373." });
    }
  });

  app.get("/api/health", (_req, res) => {
    res.json({
      status: "ok",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    });
  });

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
    const landingUrls = landingPageSlugs.map(s => `  <url>\n    <loc>${base}/${s}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>`);
    res.set("Content-Type", "application/xml");
    res.set("Cache-Control", "public, max-age=3600");
    res.send(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls.join("\n")}\n${serviceUrls.join("\n")}\n${blogUrls.join("\n")}\n${landingUrls.join("\n")}\n</urlset>`);
  });

  app.get("/robots.txt", (_req, res) => {
    res.set("Content-Type", "text/plain");
    res.set("Cache-Control", "public, max-age=86400");
    res.send(`User-agent: *\nAllow: /\n\nUser-agent: Googlebot\nAllow: /\n\nUser-agent: Bingbot\nAllow: /\n\nSitemap: https://infiniterankers.com/sitemap.xml\n`);
  });

  return httpServer;
}
