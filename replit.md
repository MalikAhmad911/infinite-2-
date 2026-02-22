# Infinite Rankers - Digital Marketing Agency Website

## Overview
Premium digital marketing agency website for Infinite Rankers, a USA-based Google Partner agency. Built with React + Tailwind CSS + Framer Motion with a blue-purple gradient mesh design aesthetic. Features 100 individual service pages with unique content, animated visuals, and SEO optimization.

## Recent Changes (Feb 2026)
- **10 SEO Backlink Landing Pages**: USA-focused landing pages for ranking (e.g., /seo-services-usa, /local-seo-google-maps-usa). Each with 1500+ words, FAQ schema, city geo-targeting, case studies, internal links, breadcrumbs, and CTA sections
- **Contact Form Updates**: "Website URL" replaced with "Business Name", service dropdown replaced with free text input
- **Contact Form Security**: HTML escaping, rate limiting (5/hour per IP), email validation, honeypot anti-bot
- **Flat URL Structure**: All pages use flat URLs (e.g., /website-design, /local-seo-strategies-2025) — no /services/ or /blog/ prefix
- **100 Individual Service Pages**: Each with unique content, animated visuals, 4-step process, 6 benefits, stats, FAQs, mini case study, and related services
- **10 Blog Posts**: Full-length articles with stock images, social sharing, related posts, author info, and CTA sections
- **Slug Resolver**: client/src/pages/slug-resolver.tsx handles routing for blog posts, service pages, AND landing pages via /:slug
- **Services Index Page**: Searchable, filterable grid of all 100 services with category pills and color-coded cards
- **Sitemap & Robots.txt**: Server-side generated with all 126 URLs (6 pages + 100 services + 10 blogs + 10 landing pages)
- **SEO**: Schema markup (ProfessionalService + Service + BlogPosting + FAQPage + BreadcrumbList), canonical URLs, Open Graph + Twitter cards
- **Workflow Diagrams**: Visual 4-step process flowcharts on all 100 service pages
- **Full Responsive Design**: All pages optimized for mobile with clamp() fonts, touch targets, responsive grids

## Architecture
- Frontend: React + Tailwind CSS + Framer Motion
- Backend: Express.js (minimal, serving static + sitemap/robots.txt)
- Routing: wouter (client-side), Express (server-side for sitemap/robots)
- Animations: Framer Motion + CSS keyframe animations
- Port: 5000 with allowedHosts: true
- Service Data: client/src/data/services-data.ts (100 services, ~5400 lines)
- Service Visuals: client/src/components/service-visuals.tsx (10 unique animated components)
- Service Template: client/src/pages/service-page.tsx (reusable page layout)
- Blog Data: client/src/data/blog-data.ts (10 posts with full content)
- Blog Post Page: client/src/pages/blog-post.tsx (individual blog article layout)
- Landing Page Data: client/src/data/landing-pages-data.ts (10 USA-focused SEO pages)
- Landing Page Template: client/src/pages/landing-page.tsx (reusable landing page layout)
- Slug Resolver: client/src/pages/slug-resolver.tsx (routes /:slug to blog, service, or landing page)

## Service Categories (100 total)
- SEO (15): local-seo, seo-audit, keyword-research, technical-seo, ecommerce-seo, national-seo, international-seo, youtube-seo, voice-search-seo, mobile-seo, on-page-seo, off-page-seo, schema-markup, google-my-business + more
- PPC (11): google-ads, instagram-ads, linkedin-ads, youtube-ads, tiktok-ads, pinterest-ads, twitter-ads, bing-ads, programmatic-advertising, retargeting-campaigns, display-advertising
- Social Media (11): social-media-management, facebook-marketing, instagram-marketing, linkedin-marketing, tiktok-marketing, pinterest-marketing, twitter-marketing, youtube-channel-management, snapchat-marketing, social-media-strategy + more
- Content Marketing (11): content-marketing, blog-writing, copywriting, video-script-writing, email-copywriting, landing-page-copywriting, press-release-writing, case-study-writing, white-paper-writing, infographic-design, content-marketing-strategy
- Web Design (10): website-design, wordpress-development, shopify-development, landing-page-design, ui-ux-design, mobile-app-design, website-redesign, website-speed-optimization, website-maintenance, ecommerce-development
- Email Marketing (6): email-marketing, email-campaign-management, email-automation, newsletter-design, drip-campaign-setup, email-list-building
- Video Marketing (6): video-production, video-marketing, youtube-marketing, video-ads-creation, explainer-videos, social-media-videos
- Reputation Management (6): reputation-management, online-reputation-management, review-generation, brand-monitoring, crisis-management, google-reviews-management
- Analytics (5): google-analytics-setup, conversion-tracking, marketing-dashboard, monthly-reporting, roi-tracking
- Lead Generation (6): lead-generation, b2b-lead-generation, local-lead-generation, sales-funnel-building, crm-setup, marketing-automation
- Specialized Services (11): influencer-marketing, affiliate-marketing, amazon-marketing, podcast-marketing, webinar-marketing, community-management, chatbot-marketing, sms-marketing, whatsapp-marketing, competitor-analysis, digital-marketing-consulting
- CRO (2): conversion-rate-optimization, ab-testing

## Visual Types (10 unique animated components)
1. analytics-dashboard - SEO/Analytics services
2. ad-metrics - PPC services
3. social-engagement - Social Media services
4. content-calendar - Content Marketing services
5. design-preview - Web Design services
6. email-stats - Email Marketing services
7. link-network - Link Building
8. reputation-chart - Reputation Management services
9. conversion-funnel - CRO/Lead Gen services
10. campaign-overview - Video/Specialized services

## Pages
1. Home (/) - Hero, Stats bar, Partners marquee, Services grid (12), Growth Infrastructure (5), Why Choose Us (6), Case Studies (3), Process (4-step), Testimonials (16), Industries (12), Blog (3), CTA
2. About (/about) - Company story, timeline, values, stats
3. Services (/services) - Searchable/filterable grid of 100 services with category pills
4. Service Detail (/services/:slug) - 100 individual pages with unique content
5. Results (/results) - Detailed case studies with metrics
6. Blog (/blog) - Blog listing with category filters
7. Contact (/contact) - Contact form, contact methods, FAQs

## Design Tokens
- Background: #FFFFFF (white)
- Text primary: #1A1A2E (dark gray-black)
- Text secondary: #4A4A6A (dark blue-gray)
- Text muted: #6B6B8B
- Primary: #3A5FBF (brand-blue)
- Violet: #8B5CF6 (brand-violet)
- Steel Blue: #6B8FD4 (brand-blue-light)
- Footer: #0A0A14 (brand-dark)
- Cards: white bg, subtle border, hover with shadow
- Grain overlay: noise-bg class (SVG filter)
- Gradient text: text-gradient-blue, text-gradient-violet

## Typography
- Body: Inter 400 (16-18px)
- Headings: Inter 700
- Display: Space Mono 700
- Stats/Numbers: JetBrains Mono 600
- Font sizing uses clamp() for responsive scaling

## Contact Info
- Phone: (703) 415-9373
- Email: contact@infiniterankers.com
- Address: 203 N Caroline Pl, Dover, DE 19904, USA

## User Preferences
- Blue-purple gradient mesh design
- White base background (#FFFFFF)
- Darker, more readable text colors (#1A1A2E primary)
- Inter font family for clean, professional look
- Premium animations with grain texture
- SaaS/Agency-level UI quality (Awwwards/Webflow standards)
- Mobile-first responsive design
- Backlinks to infiniterankers.com across pages
- Google Partner branding throughout
- Logo: /logo.webp (circular blue-purple swirl)
- 100 individual service pages with unique content per service
