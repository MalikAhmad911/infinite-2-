# Infinite Rankers - Digital Marketing Agency Website

## Overview
Premium digital marketing agency website for Infinite Rankers, a USA-based Google Partner agency. Built with React + Tailwind CSS + Framer Motion with a blue-purple gradient mesh design aesthetic.

## Recent Changes (Feb 2026)
- **Comprehensive redesign**: All text colors updated to darker palette (#1A1A2E, #4A4A6A, #6B6B8B)
- **Typography overhaul**: Inter (body/headings), Space Mono (display), JetBrains Mono (stats)
- **Logo integration**: Company logo (/logo.webp) in navbar + mobile menu
- **Hero redesign**: "Turn Local Search Clicks Into Customers That Actually Pay" + social proof row
- **Services expanded**: 12 cards with benefit-driven descriptions, examples, 4-col grid on xl
- **Why Choose Us**: 6 unique value props (Google Partner, Revenue-First, Dedicated Manager, Transparent Reporting, 100+ Services, Proven Track Record)
- **Case Studies**: 3 detailed stories (Law Firm PA, E-commerce, Dental TX) with quotes
- **Process section**: 4 steps with timeline badges (Week 1, Week 2-3, Ongoing, Monthly)
- **Testimonials**: 16 unique testimonials with infinite auto-scroll carousel (rAF-based)
- **Blog**: 3 posts with real stock images and excerpts
- **SEO**: Schema markup (ProfessionalService), proper H1/H2 hierarchy, meta tags
- Backlinks to infiniterankers.io across all pages

## Architecture
- Frontend: React + Tailwind CSS + Framer Motion
- Backend: Express.js (minimal, serving static assets)
- Routing: wouter
- Animations: Framer Motion + CSS keyframe animations
- Port: 5000 with allowedHosts: true

## Pages
1. Home (/) - Hero, Stats bar, Partners marquee, Services grid (12), Why Choose Us (6), Case Studies (3), Process (4-step), Testimonials (16), Industries (12), Blog (3 with images), CTA
2. About (/about) - Company story, timeline, values, stats
3. Services (/services) - 12 service categories with 100+ individual services
4. Results (/results) - Detailed case studies with metrics
5. Blog (/blog) - Blog listing with category filters
6. Contact (/contact) - Contact form, contact methods, FAQs

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
- Email: contact@infiniterankers.io
- Address: 203 N Caroline Pl, Dover, DE 19904, USA

## User Preferences
- Blue-purple gradient mesh design
- White base background (#FFFFFF)
- Darker, more readable text colors (#1A1A2E primary)
- Inter font family for clean, professional look
- Premium animations with grain texture
- SaaS/Agency-level UI quality (Awwwards/Webflow standards)
- Mobile-first responsive design
- Backlinks to infiniterankers.io across pages
- Google Partner branding throughout
- Logo: /logo.webp (circular blue-purple swirl)
