import { useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight, Search, BarChart3, Users, Globe, Mail, Video,
  Shield, TrendingUp, Link2, Megaphone, LineChart, Palette,
  Scale, Stethoscope, UtensilsCrossed, Building2, ShoppingCart,
  Wrench, Car, Scissors, Dumbbell, Hotel, Landmark,
  CheckCircle2, Star, ChevronRight, Play, Zap, Target,
  ArrowUpRight, Clock, Phone, Activity
} from "lucide-react";
import AnimatedCounter from "@/components/animated-counter";
import SectionHeading from "@/components/section-heading";
import SEO from "@/components/seo";

const services = [
  { icon: Search, title: "SEO", desc: "Local, National, Technical & E-commerce SEO to dominate search rankings" },
  { icon: BarChart3, title: "PPC & Google Ads", desc: "Data-driven paid campaigns that maximize ROI and minimize cost per lead" },
  { icon: Users, title: "Social Media Marketing", desc: "Strategic social presence across all platforms to engage your audience" },
  { icon: Palette, title: "Content Marketing", desc: "Compelling content that drives traffic, builds authority, and converts" },
  { icon: Globe, title: "Web Design & Development", desc: "Stunning, conversion-optimized websites built for performance" },
  { icon: Mail, title: "Email Marketing", desc: "Automated campaigns that nurture leads and boost customer retention" },
  { icon: Video, title: "Video Marketing", desc: "Professional video content that captivates and converts viewers" },
  { icon: Shield, title: "Reputation Management", desc: "Protect and enhance your brand's online reputation across the web" },
  { icon: TrendingUp, title: "Conversion Rate Optimization", desc: "Turn more visitors into customers with data-backed improvements" },
  { icon: Link2, title: "Link Building", desc: "High-authority backlinks that boost your domain authority and rankings" },
  { icon: Megaphone, title: "Influencer Marketing", desc: "Strategic partnerships with influencers to amplify your brand reach" },
  { icon: LineChart, title: "Analytics & Reporting", desc: "Transparent, detailed reports that show exactly how your campaigns perform" },
];

const caseStudies = [
  {
    industry: "E-Commerce",
    challenge: "Struggling online store with declining traffic and high bounce rates",
    metrics: [
      { label: "Revenue Increase", value: "340%" },
      { label: "Organic Traffic", value: "+520%" },
      { label: "ROAS", value: "8.2x" },
    ],
  },
  {
    industry: "Law Firm",
    challenge: "Local law firm invisible in Google Maps and search results",
    metrics: [
      { label: "Lead Generation", value: "+280%" },
      { label: "Google Map Pack", value: "#1" },
      { label: "Cost Per Lead", value: "-65%" },
    ],
  },
  {
    industry: "Healthcare",
    challenge: "Multi-location medical practice with poor online presence",
    metrics: [
      { label: "Patient Bookings", value: "+190%" },
      { label: "Local Rankings", value: "Top 3" },
      { label: "Review Score", value: "4.9★" },
    ],
  },
];

const processSteps = [
  { num: "01", title: "Free Audit & Strategy Call", desc: "We analyze your current online presence and identify growth opportunities" },
  { num: "02", title: "Custom Marketing Plan", desc: "We build a tailored strategy aligned with your business goals and budget" },
  { num: "03", title: "Execute & Optimize", desc: "Our team implements and continuously optimizes for maximum results" },
  { num: "04", title: "Report & Scale", desc: "Transparent reporting and strategic scaling to accelerate growth" },
];

const testimonials = [
  { name: "Sarah Mitchell", business: "E-Commerce Owner", quote: "Infinite Rankers transformed our online presence completely. Our revenue has tripled in just 8 months. Their team is incredibly knowledgeable and responsive.", rating: 5 },
  { name: "James Rodriguez", business: "Law Firm Partner", quote: "We went from page 5 to the #1 spot in Google Maps. The leads have been pouring in. Best investment we've made for our practice.", rating: 5 },
  { name: "Emily Chen", business: "Restaurant Owner", quote: "Their social media strategy brought us more customers than we could handle. We had to hire more staff! Truly incredible results.", rating: 5 },
  { name: "Michael Brooks", business: "Real Estate Agent", quote: "The ROI on their Google Ads campaigns has been phenomenal. Every dollar spent brings back tenfold. Highly recommended for any business.", rating: 5 },
];

const industries = [
  { icon: Scale, label: "Law Firms" },
  { icon: Stethoscope, label: "Medical" },
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Building2, label: "Real Estate" },
  { icon: ShoppingCart, label: "E-Commerce" },
  { icon: Wrench, label: "Contractors" },
  { icon: Car, label: "Auto" },
  { icon: Scissors, label: "Salons" },
  { icon: Dumbbell, label: "Gyms" },
  { icon: Hotel, label: "Hotels" },
  { icon: Landmark, label: "Finance" },
  { icon: Globe, label: "SaaS" },
];

const blogPosts = [
  { category: "SEO", title: "10 Local SEO Strategies That Will Dominate in 2025", readTime: "8 min read" },
  { category: "PPC", title: "How to Cut Your Google Ads Spend by 40% Without Losing Leads", readTime: "6 min read" },
  { category: "Social Media", title: "The Complete Guide to Instagram Marketing for Local Businesses", readTime: "10 min read" },
];

const partnerLogos = [
  "Google Partner", "Meta Business", "Semrush", "Ahrefs", "HubSpot", "Clutch",
  "Shopify", "WordPress", "Mailchimp", "Moz"
];

function FadeInSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function HeroDashboard() {
  return (
    <div className="relative w-full h-[420px] lg:h-[500px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute inset-4 lg:inset-0"
      >
        <div className="relative glass-card rounded-xl p-5 lg:p-6 h-full gradient-border overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-brand-blue/5 rounded-xl" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-brand-blue" />
                <span className="font-heading font-semibold text-sm text-brand-dark">Live Performance</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 border border-green-200">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500 animate-pulse-ring" />
                </div>
                <span className="text-[10px] text-green-700 font-semibold">LIVE</span>
              </div>
            </div>

            <svg className="w-full h-32 lg:h-40" viewBox="0 0 400 120" fill="none">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3A5FBF" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#3A5FBF" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3A5FBF" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              <path d="M0,100 Q50,95 80,85 T160,60 T240,40 T320,25 T400,10 L400,120 L0,120 Z" fill="url(#chartGrad)" />
              <motion.path
                d="M0,100 Q50,95 80,85 T160,60 T240,40 T320,25 T400,10"
                stroke="url(#lineGrad)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
              />
              <motion.circle cx="400" cy="10" r="4" fill="#8B5CF6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} />
            </svg>

            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { label: "Visitors", value: "12,847", change: "+24%" },
                { label: "Conversions", value: "1,284", change: "+18%" },
                { label: "Revenue", value: "$48.2K", change: "+32%" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-2 rounded-lg bg-gray-50/80">
                  <div className="font-stat text-xs text-brand-muted">{stat.label}</div>
                  <div className="font-stat text-sm font-semibold text-brand-dark mt-0.5">{stat.value}</div>
                  <div className="font-stat text-[10px] text-green-600 font-medium">{stat.change}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute -top-2 -right-2 lg:top-0 lg:-right-4 glass-card rounded-lg px-3 py-2.5 animate-float gradient-border z-20"
        style={{ animationDelay: "0s" }}
      >
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-brand-blue" />
          <div>
            <div className="font-stat text-xs text-brand-muted">Organic Traffic</div>
            <div className="font-stat text-sm font-bold text-brand-dark">+340%</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 -left-2 lg:bottom-12 lg:-left-6 glass-card rounded-lg px-3 py-2.5 animate-float-delayed gradient-border z-20"
        style={{ animationDelay: "1s" }}
      >
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-brand-violet" />
          <div>
            <div className="font-stat text-xs text-brand-muted">Leads Generated</div>
            <div className="font-stat text-sm font-bold text-brand-dark">1,284</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="absolute top-16 -left-2 lg:top-20 lg:-left-4 glass-card rounded-lg px-3 py-2 animate-float gradient-border z-20"
        style={{ animationDelay: "2s" }}
      >
        <div className="flex items-center gap-1.5">
          {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
          <span className="font-stat text-xs font-bold text-brand-dark ml-1">4.9</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2.1 }}
        className="absolute bottom-2 right-4 lg:bottom-4 lg:right-2 z-20"
      >
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5 text-brand-blue" />
          </div>
          <div className="absolute inset-0 w-10 h-10 rounded-full border border-brand-blue/30 animate-pulse-ring" />
        </div>
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Infinite Rankers - USA's Premier Digital Marketing Agency | Google Partner"
        description="Infinite Rankers is a USA-based Google Partner digital marketing agency offering 100+ services. We help local businesses dominate search, generate leads, and scale revenue."
      />
      {/* HERO - Split Layout */}
      <section data-testid="section-hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 noise-bg" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[150px] animate-blob-1" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-violet/10 rounded-full blur-[130px] animate-blob-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue-light/5 rounded-full blur-[200px] animate-blob-3" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-slate text-white mb-8"
              >
                <span className="text-sm font-medium">Google Partner Agency — USA</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-display font-bold leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
              >
                <span className="text-brand-dark">We Don't Just Rank You —</span>
                <br />
                <span className="text-gradient-blue">We Grow Your Revenue</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 text-brand-muted max-w-xl leading-relaxed"
                style={{ fontSize: "clamp(15px, 1.2vw, 18px)" }}
              >
                Infinite Rankers helps local businesses across the USA
                dominate search, generate qualified leads, and scale revenue
                with 100+ digital marketing services.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 flex flex-col sm:flex-row items-start gap-4"
              >
                <Link href="/contact">
                  <span
                    data-testid="button-start-growing"
                    className="relative inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg cursor-pointer group overflow-hidden animate-glow"
                  >
                    <span className="relative z-10">Start Growing Today</span>
                    <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  </span>
                </Link>
                <Link href="/results">
                  <span
                    data-testid="button-see-results"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-brand-blue/20 text-brand-dark font-semibold rounded-lg cursor-pointer hover:border-brand-violet/40 hover:bg-brand-violet/5 transition-all"
                  >
                    See Our Results
                    <Play className="w-4 h-4 text-brand-violet" />
                  </span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-10 flex flex-wrap items-center gap-6 sm:gap-8"
              >
                {[
                  { value: "500+", label: "Clients" },
                  { value: "$50M+", label: "Revenue" },
                  { value: "100+", label: "Services" },
                  { value: "98%", label: "Retention" },
                ].map((stat, i) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-stat text-xl sm:text-2xl font-bold text-brand-dark">{stat.value}</div>
                    <div className="text-xs text-brand-muted mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <HeroDashboard />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-brand-blue/20 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-brand-blue/40" />
          </motion.div>
        </div>
      </section>

      {/* MARQUEE TICKER */}
      <section data-testid="section-partners" className="py-12 border-y border-brand-blue/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-6">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-brand-muted font-medium">
            Trusted Tools & Partnerships
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {[...partnerLogos, ...partnerLogos].map((logo, i) => (
              <div key={i} className="flex-shrink-0 mx-8 sm:mx-12 flex items-center">
                <span className="text-brand-blue/20 font-heading font-semibold text-sm sm:text-base whitespace-nowrap tracking-wider uppercase">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section data-testid="section-about" className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-blue text-xs font-semibold uppercase tracking-widest mb-6">
                About Us
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-dark tracking-tight leading-tight">
                Data-Driven Marketing
                <br />
                <span className="text-gradient-blue">That Delivers Results</span>
              </h2>
              <p className="mt-6 text-brand-muted text-base sm:text-lg leading-relaxed">
                Infinite Rankers is a full-service digital marketing agency built for local businesses
                that want real, measurable growth. As a certified Google Partner, we combine cutting-edge
                technology with proven strategies to help you dominate your market.
              </p>
              <div className="flex items-center gap-2 mt-6 px-4 py-2.5 rounded-lg border border-brand-blue/15 bg-brand-blue/5 w-fit">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="text-sm text-brand-dark-secondary font-medium">Certified Google Partner since 2019</span>
              </div>
              <Link href="/about">
                <span className="inline-flex items-center gap-2 mt-8 text-brand-blue font-semibold cursor-pointer group">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "500+", label: "Happy Clients" },
                  { num: "6+", label: "Years Experience" },
                  { num: "100+", label: "Services" },
                  { num: "$50M+", label: "Revenue Generated" },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className="glass-card glass-card-hover rounded-xl p-6 text-center transition-all duration-300"
                  >
                    <div className="font-stat text-3xl sm:text-4xl text-brand-dark font-bold">{stat.num}</div>
                    <div className="text-sm text-brand-muted mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section data-testid="section-services" className="py-20 lg:py-32 relative bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Services"
            title="100+ Digital Marketing Services, All Under One Roof"
            subtitle="From SEO to social media, PPC to web design — we have every tool and strategy your business needs to grow online."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <FadeInSection key={service.title} delay={i * 0.05}>
                <div className="glass-card rounded-xl p-6 h-full transition-all duration-[350ms] group cursor-pointer hover:translate-y-[-8px] hover:shadow-[0_20px_60px_rgba(139,92,246,0.12)] hover:border-brand-blue/20">
                  <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-4 group-hover:bg-brand-blue/15 transition-colors">
                    <service.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h3 className="font-heading font-semibold text-brand-dark text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{service.desc}</p>
                  <div className="flex items-center gap-1 mt-4 text-brand-violet text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection className="text-center mt-10">
            <Link href="/services">
              <span
                data-testid="button-view-all-services"
                className="inline-flex items-center gap-2 px-8 py-3 border border-brand-blue/20 text-brand-blue font-semibold rounded-lg cursor-pointer hover:bg-brand-blue/5 transition-colors"
              >
                View All 100+ Services
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section data-testid="section-why-us" className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-violet/20 bg-brand-violet/5 text-brand-violet text-xs font-semibold uppercase tracking-widest mb-6">
                Why Choose Us
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-dark tracking-tight leading-tight">
                Your Growth Is
                <br />
                <span className="text-gradient-violet">Our Only Mission</span>
              </h2>
              <p className="mt-6 text-brand-muted text-base sm:text-lg leading-relaxed">
                We're not just another agency. We're your dedicated growth partner with
                a proven track record and a relentless focus on delivering measurable results.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.15}>
              <div className="space-y-4">
                {[
                  { icon: CheckCircle2, title: "Certified Google Partner", desc: "Access to exclusive tools, beta features, and direct Google support" },
                  { icon: Target, title: "Data-Driven Strategies", desc: "Every decision backed by analytics, A/B testing, and real data" },
                  { icon: Zap, title: "Lead Generation Focus", desc: "We don't just drive traffic — we generate qualified leads that convert" },
                  { icon: TrendingUp, title: "Revenue-First Approach", desc: "Your ROI is our #1 priority, with transparent results you can measure" },
                  { icon: Users, title: "Dedicated Account Manager", desc: "A single point of contact who knows your business inside and out" },
                  { icon: LineChart, title: "Transparent Reporting", desc: "Real-time dashboards and detailed monthly reports you can understand" },
                ].map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    className="flex gap-4 p-4 rounded-xl glass-card transition-all duration-[350ms] hover:translate-y-[-4px] hover:shadow-[0_12px_40px_rgba(139,92,246,0.1)] hover:border-brand-violet/20"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-violet/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-brand-violet" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-brand-dark text-sm">{feature.title}</h3>
                      <p className="text-xs text-brand-muted mt-1 leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* RESULTS / CASE STUDIES */}
      <section data-testid="section-results" className="py-20 lg:py-32 relative bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Case Studies"
            title="Real Businesses. Real Results."
            subtitle="See how we've helped businesses across various industries achieve extraordinary growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, i) => (
              <FadeInSection key={study.industry} delay={i * 0.1}>
                <div className="glass-card rounded-xl p-6 sm:p-8 h-full group transition-all duration-[350ms] hover:translate-y-[-8px] hover:shadow-[0_20px_60px_rgba(139,92,246,0.12)] hover:border-brand-blue/20">
                  <div className="inline-flex px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-4">
                    {study.industry}
                  </div>
                  <p className="text-brand-muted text-sm mb-6">{study.challenge}</p>
                  <div className="space-y-4">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="flex items-center justify-between">
                        <span className="text-xs text-brand-muted">{metric.label}</span>
                        <span className="font-stat text-2xl text-brand-dark font-bold">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection className="text-center mt-10">
            <Link href="/results">
              <span
                data-testid="button-see-all-case-studies"
                className="inline-flex items-center gap-2 px-8 py-3 border border-brand-blue/20 text-brand-blue font-semibold rounded-lg cursor-pointer hover:bg-brand-blue/5 transition-colors"
              >
                See All Case Studies
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section data-testid="section-process" className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Process"
            title="How We Turn Clicks Into Customers"
            subtitle="Our proven 4-step process delivers consistent, measurable growth for every client."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <FadeInSection key={step.num} delay={i * 0.1}>
                <div className="relative glass-card rounded-xl p-6 h-full text-center group transition-all duration-[350ms] hover:translate-y-[-6px] hover:shadow-[0_16px_50px_rgba(139,92,246,0.1)]">
                  <div className="font-display text-5xl text-brand-blue/10 font-bold mb-2">{step.num}</div>
                  <h3 className="font-heading font-semibold text-brand-dark mb-2">{step.title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{step.desc}</p>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 text-brand-blue/20">
                      <ChevronRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section data-testid="section-testimonials" className="py-20 lg:py-32 relative bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Testimonials"
            title="What Our Clients Say"
            subtitle="Don't just take our word for it — hear from the businesses we've helped grow."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <FadeInSection key={t.name} delay={i * 0.1}>
                <div className="glass-card rounded-xl p-6 sm:p-8 h-full transition-all duration-[350ms] hover:translate-y-[-4px] hover:shadow-[0_16px_50px_rgba(139,92,246,0.08)]">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-brand-dark-secondary text-sm leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center text-white text-sm font-bold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-brand-dark text-sm">{t.name}</div>
                      <div className="text-xs text-brand-muted">{t.business}</div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section data-testid="section-industries" className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Industries"
            title="We Serve Every Industry"
            subtitle="From law firms to restaurants, we understand your market and deliver results."
          />

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {industries.map((ind, i) => (
              <FadeInSection key={ind.label} delay={i * 0.04}>
                <div className="glass-card rounded-xl p-4 sm:p-6 text-center group cursor-pointer transition-all duration-[350ms] hover:translate-y-[-6px] hover:shadow-[0_12px_40px_rgba(139,92,246,0.1)] hover:border-brand-blue/20">
                  <ind.icon className="w-6 h-6 sm:w-8 sm:h-8 text-brand-blue mx-auto mb-2 group-hover:text-brand-violet transition-colors" />
                  <span className="text-xs sm:text-sm text-brand-dark-secondary font-medium">{ind.label}</span>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section data-testid="section-blog" className="py-20 lg:py-32 relative bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Blog"
            title="Latest Marketing Insights"
            subtitle="Expert strategies and actionable tips from our team."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <FadeInSection key={post.title} delay={i * 0.1}>
                <div className="glass-card rounded-xl overflow-hidden group cursor-pointer h-full transition-all duration-[350ms] hover:translate-y-[-6px] hover:shadow-[0_20px_60px_rgba(139,92,246,0.1)]">
                  <div className="h-48 bg-gradient-to-br from-brand-blue/5 via-brand-violet/5 to-brand-blue-light/5 relative overflow-hidden">
                    <div className="absolute inset-0 grid-bg opacity-30" />
                    <div className="absolute inset-0 noise-bg" />
                    <div className="absolute bottom-4 left-4 z-10">
                      <span className="px-2 py-1 rounded bg-brand-blue/15 text-brand-blue text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-brand-muted mb-3">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </div>
                    <h3 className="font-heading font-semibold text-brand-dark text-base leading-snug group-hover:text-brand-blue transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection className="text-center mt-10">
            <Link href="/blog">
              <span className="inline-flex items-center gap-2 text-brand-blue font-semibold cursor-pointer group">
                View All Articles
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* CTA BANNER */}
      <section data-testid="section-cta" className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-cta" />
        <div className="absolute inset-0 noise-bg" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[150px] animate-blob-1" />
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-brand-violet/10 rounded-full blur-[130px] animate-blob-2" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="font-heading font-bold text-brand-dark tracking-tight" style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>
              Ready to Dominate Your Market?
            </h2>
            <p className="mt-4 text-brand-muted text-lg max-w-xl mx-auto">
              Join 500+ businesses that trust Infinite Rankers to drive their growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <span className="relative inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg cursor-pointer group overflow-hidden animate-glow">
                  <span className="relative z-10">Get Your Free Audit</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                </span>
              </Link>
              <a href="tel:+17034159373" className="inline-flex items-center gap-2 text-brand-dark-secondary font-medium hover:text-brand-blue transition-colors">
                <Phone className="w-4 h-4" />
                (703) 415-9373
              </a>
            </div>
            <a href="https://infiniterankers.io" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block text-sm text-brand-muted hover:text-brand-blue transition-colors" data-testid="link-main-site">Visit infiniterankers.io →</a>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
