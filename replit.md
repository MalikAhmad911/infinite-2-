# Infinite Rankers - Digital Marketing Agency Website

## Overview
Premium digital marketing agency website for Infinite Rankers, a USA-based Google Partner agency. Built with React + Tailwind CSS + Framer Motion with a blue-purple gradient mesh design aesthetic.

## Recent Changes
- **Full color scheme redesign**: Replaced orange/cyan/gold with blue/purple/violet palette
- Background: White (#FFFFFF) base with gradient mesh overlays
- Primary: Royal Blue (#3A5FBF), Violet (#8B5CF6), Steel Blue (#6B8FD4)
- Footer: Dark (#0A0A14) for contrast
- New typography: Clash Display (hero display), JetBrains Mono (stats), Syne (headings), DM Sans (body)
- Hero redesigned: Split layout with left text/CTAs and right animated floating dashboard
- Grain texture overlay (noise-bg) throughout
- Animated gradient blobs (3 animations: blob-drift-1/2/3)
- Glass card effects with gradient borders on hover
- Custom cursor: blue ring (#3A5FBF) + violet dot (#8B5CF6)
- Real contact info maintained throughout all pages
- Backlinks to infiniterankers.io across all pages

## Architecture
- Frontend: React + Tailwind CSS + Framer Motion
- Backend: Express.js (minimal, serving static assets)
- Routing: wouter
- Animations: Framer Motion + CSS keyframe animations
- Smooth Scroll: Lenis
- Custom cursor: rAF-based ring + dot (fast, lerp interpolation)

## Pages
1. Home (/) - Hero (split layout + dashboard), Partners marquee, About snippet, Services grid, Why Us, Case Studies, Process, Testimonials, Industries, Blog Preview, CTA
2. About (/about) - Company story, timeline, values, stats
3. Services (/services) - 12 service categories with 100+ individual services
4. Results (/results) - 6 detailed case studies with metrics
5. Blog (/blog) - Blog listing with category filters
6. Contact (/contact) - Contact form, contact methods, FAQs

## Design Tokens
- Background: #FFFFFF (white) - main pages
- Gradient sections: bg-gradient-section (subtle blue/violet gradient)
- CTA gradient: bg-gradient-cta (blue/violet mesh)
- Footer: #0A0A14 (brand-dark)
- Primary: #3A5FBF (brand-blue)
- Violet: #8B5CF6 (brand-violet)
- Steel Blue: #6B8FD4 (brand-blue-light)
- Slate: #4A5980 (brand-slate)
- Text: #0A0A14 (brand-dark), #5A5A7A (brand-dark-secondary), #7B7B9A (brand-muted)
- Cards: glass-card (white bg, subtle border, backdrop-blur)
- Grain overlay: noise-bg class (SVG filter)
- Gradient text: text-gradient-blue, text-gradient-violet

## CSS Custom Classes
- `.glass-card` - White bg with subtle blue border, backdrop-blur
- `.glass-card-hover` - Hover effect with violet glow shadow
- `.gradient-border` - Left gradient border (blue to violet)
- `.noise-bg` - Grain texture overlay
- `.bg-gradient-mesh` - Hero gradient mesh background
- `.bg-gradient-section` - Section gradient background
- `.bg-gradient-cta` - CTA section gradient
- `.text-gradient-blue` - Blue-to-violet gradient text
- `.text-gradient-violet` - Violet-to-blue gradient text
- `.animate-float` / `.animate-float-delayed` - Floating animations
- `.animate-glow` - Blue glow effect on buttons
- `.animate-shimmer` - Shimmer effect on CTAs
- `.animate-marquee` - Infinite scroll marquee
- `.animate-blob-1/2/3` - Blob drift animations

## Contact Info
- Phone: (703) 415-9373
- Email: contact@infiniterankers.io
- Address: 203 N Caroline Pl, Dover, DE 19904, USA

## User Preferences
- Blue-purple gradient mesh design (user evolved from light premium to this)
- White base background (#FFFFFF)
- Fast, responsive cursor (blue/violet themed)
- Premium animations with grain texture
- SaaS/Agency-level UI quality (Awwwards/Webflow standards)
- Mobile-first responsive design
- Backlinks to infiniterankers.io across pages
- Google Partner branding throughout
