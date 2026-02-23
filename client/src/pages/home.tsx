import { useRef, useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight, Search, BarChart3, Users, Globe, Mail, Video,
  Shield, TrendingUp, Link2, Megaphone, LineChart, Palette,
  Scale, Stethoscope, UtensilsCrossed, Building2, ShoppingCart,
  Wrench, Car, Scissors, Dumbbell, Hotel, Landmark,
  CheckCircle2, Star, ChevronRight, ChevronLeft, Play, Zap, Target,
  ArrowUpRight, Clock, Phone, Activity, Award, Eye, HeartHandshake,
  FileText, Sparkles, Quote, Settings, Database, Layers, MonitorPlay
} from "lucide-react";
import SectionHeading from "@/components/section-heading";
import SEO from "@/components/seo";

const services = [
  { icon: Search, title: "Local SEO", desc: "Dominate Google Maps and local search results. We optimize your Google Business Profile, build local citations, and earn reviews that bring customers to your door.", example: "Google Business Profile, Local Citations, Map Pack" },
  { icon: BarChart3, title: "Technical SEO", desc: "Fix crawl errors, improve site speed, and build the technical foundation search engines love. Better infrastructure means higher rankings.", example: "Site Audits, Schema Markup, Core Web Vitals" },
  { icon: ShoppingCart, title: "E-commerce SEO", desc: "Optimize product pages, category structures, and internal linking to drive organic sales. More visibility means more revenue.", example: "Product Optimization, Shopify SEO, WooCommerce" },
  { icon: Target, title: "PPC & Google Ads", desc: "Data-driven paid campaigns that maximize every dollar. We reduce wasted spend and scale what converts for predictable lead generation.", example: "Search Ads, Display, Remarketing, Shopping" },
  { icon: Users, title: "Social Media Marketing", desc: "Strategic social presence across Facebook, Instagram, LinkedIn, and TikTok. Build community, drive engagement, and convert followers into customers.", example: "Content Strategy, Paid Social, Community Mgmt" },
  { icon: Palette, title: "Content Marketing", desc: "Compelling blog posts, landing pages, and resources that attract organic traffic, build authority, and convert readers into leads.", example: "Blog Writing, Whitepapers, Infographics" },
  { icon: Globe, title: "Web Design & Development", desc: "Stunning, conversion-optimized websites built for performance. Fast load times, mobile-first design, and seamless user experience.", example: "Custom Design, WordPress, Landing Pages" },
  { icon: Mail, title: "Email Marketing", desc: "Automated email sequences that nurture leads, boost retention, and drive repeat purchases. Personalized campaigns that feel human.", example: "Drip Campaigns, Newsletters, Automation" },
  { icon: Video, title: "Video Production", desc: "Professional video content that captivates audiences and drives engagement across YouTube, social media, and your website.", example: "Brand Videos, Testimonials, Social Clips" },
  { icon: Shield, title: "Reputation Management", desc: "Protect and enhance your online reputation. We monitor reviews, respond professionally, and build the 5-star presence your business deserves.", example: "Review Generation, Crisis Management, Monitoring" },
  { icon: Link2, title: "Link Building", desc: "High-authority backlinks from relevant, trusted websites that boost your domain authority and search rankings naturally.", example: "Guest Posts, Digital PR, HARO Outreach" },
  { icon: TrendingUp, title: "Conversion Optimization", desc: "Turn more website visitors into paying customers with data-backed A/B testing, UX improvements, and landing page optimization.", example: "A/B Testing, Heatmaps, Funnel Analysis" },
];

const caseStudies = [
  {
    industry: "Law Firm",
    business: "Family Law Firm — Pennsylvania",
    challenge: "No online visibility, losing cases to competitors with stronger digital presence",
    solution: "Local SEO + Reputation Management",
    metrics: [
      { label: "Organic Traffic", value: 340, suffix: "%", prefix: "+", decimals: 0 },
      { label: "Qualified Leads/Month", value: 156, prefix: "", suffix: "", decimals: 0 },
      { label: "Revenue Generated/Year", value: 425, prefix: "$", suffix: "K", decimals: 0 },
    ],
    quote: "Infinite Rankers transformed our practice. We went from invisible online to the #1 result in our area. The leads haven't stopped coming.",
    author: "John Smith",
    role: "Managing Partner",
  },
  {
    industry: "E-Commerce",
    business: "Sustainable Home Goods — Online",
    challenge: "High website traffic but painfully low conversion rate of just 1.2%",
    solution: "CRO + PPC Optimization + Email Campaigns",
    metrics: [
      { label: "Conversion Rate Increase", value: 245, suffix: "%", prefix: "+", decimals: 0 },
      { label: "Additional Annual Revenue", value: 2.1, prefix: "$", suffix: "M", decimals: 1 },
      { label: "Customer Acquisition Cost", value: 38, prefix: "-", suffix: "%", decimals: 0 },
    ],
    quote: "We doubled our revenue in 6 months. Their CRO expertise alone paid for the entire engagement ten times over.",
    author: "Sarah Chen",
    role: "Founder & CEO",
  },
  {
    industry: "Medical",
    business: "Dental Practice — Texas",
    challenge: "Need to attract high-value new patients in a competitive metropolitan market",
    solution: "Google Ads + Landing Page Optimization",
    metrics: [
      { label: "New Patients/Month", value: 89, prefix: "+", suffix: "", decimals: 0 },
      { label: "Revenue/Month", value: 180, prefix: "$", suffix: "K", decimals: 0 },
      { label: "Google Rating", value: 4.8, prefix: "", suffix: "/5", decimals: 1 },
    ],
    quote: "Best marketing investment we ever made. Our practice has grown 3x since partnering with Infinite Rankers.",
    author: "Dr. Michael Torres",
    role: "Practice Owner",
  },
];

const processSteps = [
  { num: "01", title: "Audit & Discovery", timeline: "Week 1", desc: "Free website audit + competitor analysis + strategy call. You understand exactly where you stand and what's possible." },
  { num: "02", title: "Custom Strategy Plan", timeline: "Week 2–3", desc: "We deliver a detailed roadmap: which channels, messaging, timeline, and expected ROI. You approve before we execute." },
  { num: "03", title: "Execute & Optimize", timeline: "Ongoing", desc: "We launch campaigns, test continuously, and optimize based on real data. Weekly optimization cycles for maximum results." },
  { num: "04", title: "Report & Scale", timeline: "Monthly", desc: "Transparent reports, strategy calls, and we identify opportunities to scale what's working for exponential growth." },
];

const testimonials = [
  { name: "Jennifer Martinez", business: "Law Office Manager", quote: "Infinite Rankers increased our leads by 340% in 8 months. Their team is responsive, data-driven, and genuinely invested in our success. Highly recommend to any law firm.", rating: 5 },
  { name: "Marcus Johnson", business: "E-commerce Founder", quote: "We tried 3 agencies before Infinite Rankers. The difference? They actually care about ROI, not just vanity metrics. Our ad spend dropped 30% while conversions doubled.", rating: 5 },
  { name: "Dr. Priya Patel", business: "Medical Practice Owner", quote: "Our patient bookings increased by 190% in just 4 months. The team understood healthcare marketing regulations and delivered results that exceeded our projections.", rating: 5 },
  { name: "Robert Williams", business: "Auto Dealer GM", quote: "They took our dealership from page 3 to the top spot on Google. We're now getting 50+ qualified leads per week from organic search alone. Incredible ROI.", rating: 5 },
  { name: "Amanda Foster", business: "Restaurant Owner", quote: "Our social media following tripled and foot traffic doubled. Their content strategy made us the talk of the town. We actually had to hire more staff to keep up.", rating: 5 },
  { name: "David Kim", business: "SaaS Founder", quote: "Their SEO and content strategy helped us rank for competitive keywords we never thought possible. Our organic traffic grew 520% in 12 months. Game-changing.", rating: 5 },
  { name: "Lisa Thompson", business: "Dental Practice", quote: "We saw a 200% increase in new patient appointments within 3 months. Their expertise in healthcare marketing is unmatched. Worth every penny.", rating: 5 },
  { name: "Carlos Rivera", business: "HVAC Business Owner", quote: "Before Infinite Rankers, we relied on word of mouth. Now we're the #1 result for every HVAC keyword in our city. Our revenue has literally tripled.", rating: 5 },
  { name: "Sarah Mitchell", business: "Real Estate Agent", quote: "I was skeptical about digital marketing, but the results speak for themselves. 78 new client leads in my first 3 months. They changed my entire business trajectory.", rating: 5 },
  { name: "Michael Brooks", business: "Fitness Studio Owner", quote: "The ROI on their Google Ads campaigns has been phenomenal. Every dollar spent brings back tenfold. We opened 2 new locations thanks to their marketing.", rating: 5 },
  { name: "Emily Chen", business: "Salon Owner", quote: "They redesigned our website and managed our social media. Online bookings went from 10% to 65% of our total appointments. Absolutely transformative.", rating: 5 },
  { name: "James Rodriguez", business: "Construction Company", quote: "Infinite Rankers built us a lead generation machine. We went from struggling for projects to having a 6-month waitlist. Their PPC strategy is brilliant.", rating: 5 },
  { name: "Natasha Williams", business: "Hotel Manager", quote: "Direct bookings increased by 180% after they optimized our website and launched targeted campaigns. We reduced our dependency on OTAs significantly.", rating: 5 },
  { name: "Kevin O'Brien", business: "Financial Advisor", quote: "They understand the compliance requirements of financial services marketing. Generated 45 high-net-worth client leads in our first quarter together.", rating: 5 },
  { name: "Rachel Greene", business: "Boutique Owner", quote: "Our e-commerce store went from $8K/month to $47K/month in revenue. Their email marketing strategy alone accounts for 30% of our sales now.", rating: 5 },
  { name: "Anthony Davis", business: "Plumbing Company", quote: "We're now the most visible plumbing company in our entire metro area. Emergency calls increased 240% and we had to add two new service trucks.", rating: 5 },
];

const industries = [
  { icon: Scale, label: "Law Firms" },
  { icon: Stethoscope, label: "Dental & Medical" },
  { icon: Building2, label: "Real Estate" },
  { icon: ShoppingCart, label: "E-Commerce" },
  { icon: Wrench, label: "Home Services" },
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Car, label: "Auto Dealers" },
  { icon: Dumbbell, label: "Fitness & Wellness" },
  { icon: Hotel, label: "Hotels & Hospitality" },
  { icon: Landmark, label: "Financial Services" },
  { icon: Scissors, label: "Beauty & Salons" },
  { icon: Globe, label: "Manufacturing & B2B" },
];

const blogPosts = [
  { category: "SEO", title: "The 7 Local SEO Strategies That Will Dominate in 2025", readTime: "8 min read", image: "/images/blog-seo.jpg", excerpt: "Discover the proven local SEO tactics that top-performing businesses use to dominate their market and attract qualified leads." },
  { category: "PPC", title: "How to Cut Your Google Ads Spend by 40% Without Losing Leads", readTime: "6 min read", image: "/images/blog-ppc.jpg", excerpt: "Learn the exact optimization strategies our team uses to dramatically reduce wasted ad spend while maintaining lead volume." },
  { category: "Social Media", title: "The Complete Guide to Instagram Marketing for Local Businesses", readTime: "10 min read", image: "/images/blog-social.jpg", excerpt: "A step-by-step blueprint for turning your Instagram presence into a reliable customer acquisition channel." },
];

const partnerLogos = [
  { name: "Google Partner", icon: "🔍" },
  { name: "Meta Business", icon: "📘" },
  { name: "SEMrush", icon: "📊" },
  { name: "Ahrefs", icon: "🔗" },
  { name: "HubSpot", icon: "🟠" },
  { name: "Clutch", icon: "⭐" },
  { name: "Shopify", icon: "🛒" },
  { name: "Mailchimp", icon: "📧" },
];

function FadeInSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AnimatedNumber({ value, prefix = "", suffix = "", decimals = 0 }: { value: number; prefix?: string; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    let raf: number;
    const duration = 2000;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * value);
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-stat tabular-nums">
      {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}
    </span>
  );
}

function HeroDashboard() {
  return (
    <div className="relative w-full max-w-[480px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative rounded-2xl p-5 lg:p-6 bg-white border border-gray-200/60 shadow-[0_20px_60px_rgba(58,95,191,0.12)]">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center">
                <Activity className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-sm" style={{ color: "#1A1A2E" }}>Live Performance</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/60">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] text-emerald-700 font-semibold tracking-wide">LIVE</span>
            </div>
          </div>

          <div className="relative rounded-xl bg-gradient-to-b from-gray-50/80 to-white p-3 mb-4">
            <svg className="w-full h-[130px]" viewBox="0 0 400 130" fill="none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3A5FBF" stopOpacity="0.15" />
                  <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.06" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="heroChartLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3A5FBF" />
                  <stop offset="60%" stopColor="#6B8FD4" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              <motion.path
                d="M0,110 C30,108 50,100 80,90 C110,80 130,75 160,62 C190,49 210,44 240,35 C270,26 290,22 320,18 C350,14 370,12 400,8"
                stroke="url(#heroChartLine)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.2, delay: 0.6, ease: "easeOut" }}
              />
              <path
                d="M0,110 C30,108 50,100 80,90 C110,80 130,75 160,62 C190,49 210,44 240,35 C270,26 290,22 320,18 C350,14 370,12 400,8 L400,130 L0,130 Z"
                fill="url(#heroChartFill)"
              />
              <motion.circle
                cx="400" cy="8" r="4"
                fill="#8B5CF6"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5, duration: 0.3 }}
              />
              <motion.circle
                cx="400" cy="8" r="8"
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="1"
                opacity="0.3"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 0.4, 0], scale: [0.5, 1.5, 2] }}
                transition={{ delay: 2.5, duration: 2, repeat: Infinity }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Visitors", value: "12,847", change: "+24%" },
              { label: "Conversions", value: "1,284", change: "+18%" },
              { label: "Revenue", value: "$48.2K", change: "+32%" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center p-3 rounded-xl bg-gray-50/80 border border-gray-100"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.15, duration: 0.4 }}
              >
                <div className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
                <div className="font-stat text-base font-semibold mt-1" style={{ color: "#1A1A2E" }}>{stat.value}</div>
                <div className="flex items-center justify-center gap-0.5 mt-1">
                  <TrendingUp className="w-3 h-3 text-emerald-500" />
                  <span className="font-stat text-[11px] text-emerald-600 font-medium">{stat.change}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="absolute -top-4 -right-4 lg:-right-8 z-20"
      >
        <div className="bg-white rounded-xl px-4 py-3 shadow-[0_8px_30px_rgba(58,95,191,0.15)] border border-gray-100 animate-float" style={{ animationDuration: "4s" }}>
          <div className="flex items-center gap-1.5 mb-1">
            {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-stat text-lg font-bold" style={{ color: "#1A1A2E" }}>4.9</span>
            <span className="text-[10px] text-gray-400 font-medium">Google Rating</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 1.9 }}
        className="absolute -bottom-3 -left-4 lg:-left-8 z-20"
      >
        <div className="bg-white rounded-xl px-4 py-3 shadow-[0_8px_30px_rgba(139,92,246,0.15)] border border-gray-100 animate-float" style={{ animationDuration: "5s", animationDelay: "1s" }}>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-violet/10 flex items-center justify-center">
              <Target className="w-4 h-4 text-brand-violet" />
            </div>
            <div>
              <div className="text-[10px] text-gray-400 font-medium">Leads Generated</div>
              <div className="font-stat text-base font-bold" style={{ color: "#1A1A2E" }}>1,284</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function InfiniteTestimonialCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let raf: number;
    let scrollPos = 0;
    const speed = 0.5;

    const animate = () => {
      if (!paused) {
        scrollPos += speed;
        const halfWidth = el.scrollWidth / 2;
        if (scrollPos >= halfWidth) {
          scrollPos = 0;
        }
        el.scrollLeft = scrollPos;
      }
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div
        ref={scrollRef}
        className="flex gap-3 sm:gap-4 lg:gap-5 overflow-hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {allTestimonials.map((t, i) => (
          <div key={i} className="flex-shrink-0 w-[280px] sm:w-[340px] lg:w-[380px]">
            <div className="bg-white rounded-xl p-4 sm:p-5 lg:p-6 h-full border border-gray-100 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(139,92,246,0.08)] hover:border-brand-violet/15">
              <div className="flex items-center gap-0.5 mb-3 sm:mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6" style={{ color: "#4A4A6A" }}>
                "{t.quote}"
              </p>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center text-white text-xs sm:text-sm font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-xs sm:text-sm" style={{ color: "#1A1A2E" }}>{t.name}</div>
                  <div className="text-[10px] sm:text-xs text-gray-400">{t.business}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <SEO
        title="Infinite Rankers — #1 Digital Marketing Agency USA | Google Partner"
        description="Infinite Rankers is a USA-based Google Partner digital marketing agency offering 100+ services including SEO, PPC, social media, and web design. 500+ businesses trust us to generate leads and scale revenue."
        canonical="https://infiniterankers.com/"
        schema={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Infinite Rankers",
          "url": "https://infiniterankers.com",
          "logo": "https://infiniterankers.com/logo.webp",
          "description": "USA's Premier Digital Marketing Agency. Google Partner. SEO, PPC, Social Media, Web Design & 100+ services.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "203 N Caroline Pl",
            "addressLocality": "Dover",
            "addressRegion": "DE",
            "postalCode": "19904",
            "addressCountry": "US"
          },
          "telephone": "+17034159373",
          "email": "contact@infiniterankers.com",
          "priceRange": "$$",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127",
            "bestRating": "5"
          },
          "sameAs": ["https://www.google.com/partners"],
          "areaServed": {
            "@type": "Country",
            "name": "United States"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Digital Marketing Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "SEO Services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "PPC Advertising"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Social Media Marketing"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Web Design"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Content Marketing"
                }
              }
            ]
          }
        }}
      />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 noise-bg" />
        <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-brand-blue/8 rounded-full blur-[150px] animate-blob-1" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-brand-violet/8 rounded-full blur-[130px] animate-blob-2" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-brand-blue/15 bg-white/60 backdrop-blur-sm mb-6 sm:mb-8"
              >
                <Award className="w-4 h-4 text-brand-blue" />
                <span className="text-xs sm:text-sm font-medium" style={{ color: "#4A4A6A" }}>Google Partner Agency — USA</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="leading-[1.08] tracking-tight"
                style={{ fontSize: "clamp(28px, 5.5vw, 68px)", fontWeight: 700, fontFamily: "'Inter', sans-serif" }}
              >
                <span style={{ color: "#1A1A2E" }}>Turn Local Search Clicks</span>
                <br />
                <span style={{ color: "#1A1A2E" }}>Into Customers That</span>
                <br />
                <span className="text-gradient-blue">Actually Pay</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-4 sm:mt-6 max-w-xl leading-relaxed"
                style={{ fontSize: "clamp(14px, 1.1vw, 18px)", color: "#4A4A6A" }}
              >
                Infinite Rankers helps local businesses across the USA grow qualified leads and revenue through 100+ digital marketing services. We don't rank you for vanity metrics — we rank you for revenue.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4"
              >
                <Link href="/contact">
                  <span className="relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-7 py-3.5 min-h-[44px] bg-brand-blue text-white font-semibold rounded-lg group overflow-hidden shadow-[0_4px_20px_rgba(58,95,191,0.3)] hover:shadow-[0_6px_30px_rgba(58,95,191,0.4)] transition-shadow text-sm sm:text-base">
                    <span className="relative z-10">Schedule Free Strategy Call</span>
                    <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer" />
                  </span>
                </Link>
                <Link href="/results">
                  <span className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-7 py-3.5 min-h-[44px] border border-gray-200 font-semibold rounded-lg hover:border-brand-blue/30 hover:text-brand-blue transition-all text-sm sm:text-base" style={{ color: "#4A4A6A" }}>
                    See Case Studies
                    <Play className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2"
              >
                {[
                  "500+ Businesses Trusted Us",
                  "$50M+ Revenue Generated",
                  "98% Client Retention",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 min-h-[44px]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium" style={{ color: "#4A4A6A" }}>{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <HeroDashboard />
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-gray-300/40 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-gray-400/50" />
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-10 lg:py-14 relative bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[
              { num: 500, suffix: "+", label: "Happy Clients", icon: Users },
              { num: 50, prefix: "$", suffix: "M+", label: "Revenue Generated", icon: TrendingUp },
              { num: 100, suffix: "+", label: "Services Offered", icon: Zap },
              { num: 98, suffix: "%", label: "Client Retention", icon: Shield },
            ].map((stat, i) => (
              <FadeInSection key={stat.label} delay={i * 0.1}>
                <div className="relative bg-white rounded-xl p-4 sm:p-5 text-center border border-gray-100 group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(58,95,191,0.08)] hover:border-brand-blue/15">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-brand-blue/8 flex items-center justify-center mx-auto mb-2.5 group-hover:bg-brand-blue/12 transition-colors">
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-blue" />
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold" style={{ color: "#1A1A2E" }}>
                    <AnimatedNumber value={stat.num} prefix={stat.prefix} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm mt-1" style={{ color: "#6B6B8B" }}>{stat.label}</div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BY MARQUEE */}
      <section className="py-8 lg:py-10 relative bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs uppercase tracking-widest font-semibold mb-6" style={{ color: "#6B6B8B" }}>
            Trusted Tools & Partnerships
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, i) => (
              <div key={i} className="flex-shrink-0 mx-4">
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-50 border border-gray-100 hover:border-brand-blue/20 hover:bg-brand-blue/5 transition-colors whitespace-nowrap">
                  <span className="text-base">{logo.icon}</span>
                  <span className="text-sm font-semibold" style={{ color: "#4A4A6A" }}>{logo.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-12 sm:py-16 lg:py-28 relative bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Services"
            title="Our Complete Marketing Suite"
            subtitle="100+ Digital Marketing Services. One Expert Team. Every channel, every strategy, every result — under one roof."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {services.map((service, i) => (
              <FadeInSection key={service.title} delay={i * 0.04}>
                <div className="bg-white rounded-xl p-4 sm:p-5 lg:p-6 h-full border border-gray-100 group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(58,95,191,0.1)] hover:border-brand-blue/15">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-brand-blue/8 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-brand-blue/12 transition-colors">
                    <service.icon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base mb-2" style={{ color: "#1A1A2E" }}>{service.title}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed mb-3" style={{ color: "#4A4A6A" }}>{service.desc}</p>
                  <p className="text-xs font-medium" style={{ color: "#6B6B8B" }}>{service.example}</p>
                  <div className="flex items-center gap-1 mt-3 sm:mt-4 text-brand-blue text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity min-h-[44px]">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection className="text-center mt-8 sm:mt-10">
            <Link href="/services">
              <span className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-7 py-3.5 min-h-[44px] bg-brand-blue text-white font-semibold rounded-lg group overflow-hidden shadow-sm hover:shadow-md transition-shadow text-sm sm:text-base">
                View All 100+ Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* GROWTH INFRASTRUCTURE */}
      <section className="py-12 sm:py-16 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-blue/[0.02] to-white" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-10 sm:mb-12 lg:mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-violet mb-3 block">
              Full-Service Marketing Engine
            </span>
            <h2 className="font-bold tracking-tight" style={{ fontSize: "clamp(26px, 3.5vw, 44px)", color: "#1A1A2E" }}>
              Your Complete Growth System
            </h2>
            <p className="mt-3 text-base max-w-lg mx-auto" style={{ color: "#4A4A6A" }}>
              Every component of your digital presence, connected and optimized for revenue.
            </p>
          </FadeInSection>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-brand-blue/20 via-brand-violet/30 to-brand-blue/20 -translate-x-1/2" />

            <FadeInSection className="relative mb-8 lg:mb-0">
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-gray-100 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_24px_rgba(58,95,191,0.1)] transition-shadow lg:mr-8">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                    <Settings className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm" style={{ color: "#1A1A2E" }}>SEO & Strategy Hub</h3>
                    <p className="text-xs mt-0.5" style={{ color: "#6B6B8B" }}>Centralized campaign intelligence</p>
                  </div>
                </div>
                <div className="hidden lg:flex items-center justify-start pl-8">
                  <div className="w-3 h-3 rounded-full bg-brand-blue shadow-[0_0_8px_rgba(58,95,191,0.4)]" />
                </div>
              </div>
            </FadeInSection>

            <FadeInSection className="relative mb-8 lg:mb-0 lg:mt-6">
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div className="hidden lg:flex items-center justify-end pr-8">
                  <div className="w-3 h-3 rounded-full bg-brand-blue shadow-[0_0_8px_rgba(58,95,191,0.4)]" />
                </div>
                <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-gray-100 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_24px_rgba(58,95,191,0.1)] transition-shadow lg:ml-8">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-brand-violet/10 flex items-center justify-center">
                    <Database className="w-5 h-5 text-brand-violet" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm" style={{ color: "#1A1A2E" }}>Analytics Pipeline</h3>
                    <p className="text-xs mt-0.5" style={{ color: "#6B6B8B" }}>Real-time performance tracking</p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection className="relative mb-8 lg:mb-0 lg:mt-6">
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-gray-100 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_24px_rgba(58,95,191,0.1)] transition-shadow lg:mr-8">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm" style={{ color: "#1A1A2E" }}>Multi-Channel Engine</h3>
                    <p className="text-xs mt-0.5" style={{ color: "#6B6B8B" }}>SEO, PPC, Social & Content</p>
                  </div>
                </div>
                <div className="hidden lg:flex items-center justify-start pl-8">
                  <div className="w-3 h-3 rounded-full bg-brand-violet shadow-[0_0_8px_rgba(139,92,246,0.4)]" />
                </div>
              </div>
            </FadeInSection>

            <FadeInSection className="relative mb-8 lg:mb-0 lg:mt-6">
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div className="hidden lg:flex items-center justify-end pr-8">
                  <div className="w-3 h-3 rounded-full bg-brand-violet shadow-[0_0_8px_rgba(139,92,246,0.4)]" />
                </div>
                <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-gray-100 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_24px_rgba(58,95,191,0.1)] transition-shadow lg:ml-8">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-brand-violet/10 flex items-center justify-center">
                    <MonitorPlay className="w-5 h-5 text-brand-violet" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm" style={{ color: "#1A1A2E" }}>Ad Platforms</h3>
                    <p className="text-xs mt-0.5" style={{ color: "#6B6B8B" }}>Google, Meta, LinkedIn, YouTube</p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection className="relative lg:mt-6">
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-gray-100 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_24px_rgba(58,95,191,0.1)] transition-shadow lg:mr-8">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm" style={{ color: "#1A1A2E" }}>Revenue System</h3>
                    <p className="text-xs mt-0.5" style={{ color: "#6B6B8B" }}>Predictable, scalable growth</p>
                  </div>
                </div>
                <div className="hidden lg:flex items-center justify-start pl-8">
                  <div className="w-3 h-3 rounded-full bg-brand-blue shadow-[0_0_8px_rgba(58,95,191,0.4)]" />
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-12 sm:py-16 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start">
            <FadeInSection>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-violet/15 bg-brand-violet/5 text-brand-violet text-xs font-semibold uppercase tracking-widest mb-4 sm:mb-6">
                Why Choose Us
              </span>
              <h2 className="font-bold tracking-tight leading-tight" style={{ fontSize: "clamp(24px, 3.5vw, 44px)", color: "#1A1A2E" }}>
                Why Infinite Rankers
                <br />
                <span className="text-gradient-violet">Stands Apart</span>
              </h2>
              <p className="mt-3 sm:mt-5 text-sm sm:text-base leading-relaxed" style={{ color: "#4A4A6A" }}>
                We're not just another agency. We're your dedicated growth partner with
                a proven track record of delivering measurable results that impact your bottom line.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <div className="space-y-2 sm:space-y-3">
                {[
                  { icon: Award, title: "Google Partner Certified", desc: "We're officially verified by Google for PPC excellence. Your ads are managed by certified experts with access to exclusive tools and beta features." },
                  { icon: TrendingUp, title: "Revenue-First Strategy", desc: "We don't optimize for vanity metrics. Every campaign is designed to generate qualified leads and actual sales that grow your bottom line." },
                  { icon: HeartHandshake, title: "Dedicated Account Manager", desc: "You don't get rotated between agents. One expert knows your business inside and out. That's real accountability and partnership." },
                  { icon: Eye, title: "Transparent Reporting", desc: "Weekly dashboards. Monthly strategy calls. You always know what's working and why. No hidden metrics, no smoke and mirrors." },
                  { icon: Zap, title: "100+ Services In House", desc: "SEO, PPC, social, content, web design, video — all handled by one cohesive team. No referrals to third parties or fragmented communication." },
                  { icon: FileText, title: "Proven Track Record", desc: "500+ businesses served. $50M+ revenue generated for clients. 98% retention rate. Results speak louder than promises." },
                ].map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(139,92,246,0.08)] hover:border-brand-violet/15"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: i * 0.07, duration: 0.5 }}
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-violet/8 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 text-brand-violet" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm" style={{ color: "#1A1A2E" }}>{feature.title}</h3>
                      <p className="text-xs mt-0.5 leading-relaxed" style={{ color: "#4A4A6A" }}>{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-12 sm:py-16 lg:py-28 relative bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Case Studies"
            title="Real Businesses. Real Results."
            subtitle="See how we've helped businesses across industries achieve extraordinary growth with proven digital marketing strategies."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {caseStudies.map((study, i) => (
              <FadeInSection key={study.industry} delay={i * 0.1}>
                <div className="bg-white rounded-xl overflow-hidden h-full border border-gray-100 group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_50px_rgba(58,95,191,0.1)]">
                  <div className="h-1.5 bg-gradient-to-r from-brand-blue to-brand-violet" />
                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-brand-blue/8 text-brand-blue text-xs font-semibold uppercase tracking-wider">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="font-semibold text-sm mb-1" style={{ color: "#1A1A2E" }}>{study.business}</h3>
                    <p className="text-xs sm:text-sm mb-2" style={{ color: "#6B6B8B" }}>{study.challenge}</p>
                    <p className="text-xs font-medium text-brand-blue mb-4 sm:mb-5">Solution: {study.solution}</p>

                    <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                      {study.metrics.map((metric) => (
                        <div key={metric.label} className="flex items-center justify-between">
                          <span className="text-xs font-medium" style={{ color: "#6B6B8B" }}>{metric.label}</span>
                          <span className="text-xl sm:text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                            <AnimatedNumber
                              value={metric.value}
                              prefix={metric.prefix}
                              suffix={metric.suffix}
                              decimals={metric.decimals}
                            />
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 sm:pt-4 border-t border-gray-100">
                      <p className="text-xs italic leading-relaxed mb-2" style={{ color: "#4A4A6A" }}>"{study.quote}"</p>
                      <p className="text-xs font-semibold" style={{ color: "#1A1A2E" }}>— {study.author}, {study.role}</p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection className="text-center mt-8 sm:mt-10">
            <Link href="/results">
              <span className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-7 py-3 min-h-[44px] border border-gray-200 font-semibold rounded-lg hover:border-brand-blue/30 hover:text-brand-blue transition-colors text-sm sm:text-base" style={{ color: "#4A4A6A" }}>
                View All Case Studies
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-12 sm:py-16 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Process"
            title="Our Proven 4-Step Process"
            subtitle="From initial audit to scaling your success, our systematic approach delivers consistent, measurable growth."
          />

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/15 to-transparent -translate-y-1/2" />
            <div className="absolute lg:hidden left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue/20 via-brand-violet/30 to-brand-blue/20 sm:hidden" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
              {processSteps.map((step, i) => (
                <FadeInSection key={step.num} delay={i * 0.12}>
                  <div className="relative bg-white rounded-xl p-4 sm:p-5 lg:p-6 h-full text-center sm:text-center border border-gray-100 group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(58,95,191,0.08)]">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-violet text-white font-stat text-base sm:text-lg font-bold flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      {step.num}
                    </div>
                    <span className="inline-block px-2 py-0.5 rounded-full bg-brand-blue/8 text-brand-blue text-[10px] font-semibold uppercase tracking-wider mb-2 sm:mb-3">{step.timeline}</span>
                    <h3 className="font-semibold text-sm sm:text-base mb-2" style={{ color: "#1A1A2E" }}>{step.title}</h3>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#4A4A6A" }}>{step.desc}</p>
                    {i < processSteps.length - 1 && (
                      <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 text-gray-300">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-12 sm:py-16 lg:py-28 relative bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Testimonials"
            title="Trusted by 500+ Businesses"
            subtitle="Don't just take our word for it — hear from the businesses we've helped grow across every industry."
          />
        </div>
        <div className="max-w-[1400px] mx-auto px-4">
          <InfiniteTestimonialCarousel />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["J", "M", "S", "D"].map((letter, i) => (
                  <div key={i} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center text-white text-xs font-semibold border-2 border-white">
                    {letter}
                  </div>
                ))}
              </div>
              <span className="text-xs sm:text-sm font-medium" style={{ color: "#4A4A6A" }}>500+ happy clients</span>
            </div>
            <div className="flex items-center gap-1.5">
              {[1,2,3,4,5].map(s => <Star key={s} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />)}
              <span className="text-xs sm:text-sm font-semibold ml-1" style={{ color: "#1A1A2E" }}>4.9/5</span>
              <span className="text-xs sm:text-sm" style={{ color: "#6B6B8B" }}>average rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-12 sm:py-16 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Industries"
            title="We've Grown Businesses Across Every Industry"
            subtitle="From law firms to restaurants, we understand your market and deliver results tailored to your industry."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
            {industries.map((ind, i) => (
              <FadeInSection key={ind.label} delay={i * 0.04}>
                <div className="bg-white rounded-xl p-3 sm:p-4 lg:p-5 text-center border border-gray-100 group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(58,95,191,0.08)] hover:border-brand-blue/20 min-h-[44px]">
                  <ind.icon className="w-6 h-6 sm:w-7 sm:h-7 text-brand-blue mx-auto mb-2 sm:mb-2.5 group-hover:text-brand-violet group-hover:scale-110 transition-all" />
                  <span className="text-xs sm:text-sm font-medium" style={{ color: "#4A4A6A" }}>{ind.label}</span>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="py-12 sm:py-16 lg:py-28 relative bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Blog"
            title="Latest Insights & Resources"
            subtitle="Expert strategies and actionable tips to help your business grow online."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {blogPosts.map((post, i) => (
              <FadeInSection key={post.title} delay={i * 0.1}>
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(58,95,191,0.08)]">
                  <div className="h-40 sm:h-48 relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                      <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm text-brand-blue text-xs font-semibold border border-brand-blue/10">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center gap-2 text-xs mb-2 sm:mb-3" style={{ color: "#6B6B8B" }}>
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base leading-snug group-hover:text-brand-blue transition-colors mb-2" style={{ color: "#1A1A2E" }}>
                      {post.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#4A4A6A" }}>{post.excerpt}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection className="text-center mt-8 sm:mt-10">
            <Link href="/blog">
              <span className="inline-flex items-center gap-2 text-brand-blue font-semibold group text-sm min-h-[44px]">
                View All Articles
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-brand-violet/4 to-brand-blue-light/3" />
        <div className="absolute inset-0 noise-bg" />
        <div className="absolute top-1/3 left-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-brand-blue/8 rounded-full blur-[150px] animate-blob-1" />
        <div className="absolute bottom-1/3 right-1/4 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-brand-violet/8 rounded-full blur-[130px] animate-blob-2" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="font-bold tracking-tight" style={{ fontSize: "clamp(24px, 3.5vw, 48px)", color: "#1A1A2E" }}>
              Ready to Dominate Your Market?
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg max-w-xl mx-auto" style={{ color: "#4A4A6A" }}>
              Join 500+ businesses that trust Infinite Rankers to drive their growth.
              Get your free audit today and see what's possible.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <Link href="/contact">
                <span className="relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-7 py-3.5 min-h-[44px] bg-brand-blue text-white font-semibold rounded-lg group overflow-hidden shadow-[0_4px_20px_rgba(58,95,191,0.3)] text-sm sm:text-base">
                  <span className="relative z-10">Get Your Free Audit</span>
                  <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer" />
                </span>
              </Link>
              <a href="tel:+17034159373" className="inline-flex items-center justify-center gap-2 min-h-[44px] font-medium hover:text-brand-blue transition-colors text-sm sm:text-base" style={{ color: "#4A4A6A" }}>
                <Phone className="w-4 h-4" />
                (703) 415-9373
              </a>
            </div>
            <a href="https://infiniterankers.io" target="_blank" rel="noopener noreferrer" className="mt-6 sm:mt-8 inline-block text-sm min-h-[44px] leading-[44px] hover:text-brand-violet transition-colors" style={{ color: "#6B6B8B" }}>
              Visit infiniterankers.io →
            </a>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
