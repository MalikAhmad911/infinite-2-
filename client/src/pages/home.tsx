import { useRef, useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight, Search, BarChart3, Users, Globe, Mail, Video,
  Shield, TrendingUp, Link2, Megaphone, LineChart, Palette,
  Scale, Stethoscope, UtensilsCrossed, Building2, ShoppingCart,
  Wrench, Car, Scissors, Dumbbell, Hotel, Landmark,
  CheckCircle2, Star, ChevronRight, ChevronLeft, Play, Zap, Target,
  ArrowUpRight, Clock, Phone, Activity
} from "lucide-react";
import SectionHeading from "@/components/section-heading";
import SEO from "@/components/seo";

const services = [
  { icon: Search, title: "SEO", desc: "Local, national, technical & e-commerce SEO to dominate rankings organically." },
  { icon: BarChart3, title: "PPC & Google Ads", desc: "Data-driven paid campaigns that maximize ROI and minimize cost per lead." },
  { icon: Users, title: "Social Media Marketing", desc: "Strategic social presence across all platforms to engage your audience." },
  { icon: Palette, title: "Content Marketing", desc: "Compelling content that drives traffic, builds authority, and converts." },
  { icon: Globe, title: "Web Design & Dev", desc: "Stunning, conversion-optimized websites built for performance." },
  { icon: Mail, title: "Email Marketing", desc: "Automated campaigns that nurture leads and boost customer retention." },
  { icon: Video, title: "Video Marketing", desc: "Professional video content that captivates and converts viewers." },
  { icon: Shield, title: "Reputation Mgmt", desc: "Protect and enhance your brand's online reputation across the web." },
  { icon: TrendingUp, title: "CRO", desc: "Turn more visitors into customers with data-backed improvements." },
  { icon: Link2, title: "Link Building", desc: "High-authority backlinks that boost domain authority and rankings." },
  { icon: Megaphone, title: "Influencer Marketing", desc: "Strategic partnerships with influencers to amplify your brand reach." },
  { icon: LineChart, title: "Analytics & Reporting", desc: "Transparent, detailed reports showing exactly how campaigns perform." },
];

const caseStudies = [
  {
    industry: "E-Commerce",
    business: "Fashion Retail Store",
    challenge: "Struggling online store with declining traffic and high bounce rates",
    metrics: [
      { label: "Revenue Increase", value: 340, suffix: "%", prefix: "", decimals: 0 },
      { label: "Organic Traffic", value: 520, prefix: "+", suffix: "%", decimals: 0 },
      { label: "ROAS", value: 8.2, suffix: "x", prefix: "", decimals: 1 },
    ],
  },
  {
    industry: "Law Firm",
    business: "Regional Legal Practice",
    challenge: "Local law firm invisible in Google Maps and search results",
    metrics: [
      { label: "Lead Generation", value: 280, prefix: "+", suffix: "%", decimals: 0 },
      { label: "Google Map Pack", value: 1, prefix: "#", suffix: "", decimals: 0 },
      { label: "Cost Per Lead", value: 65, prefix: "-", suffix: "%", decimals: 0 },
    ],
  },
  {
    industry: "Healthcare",
    business: "Multi-Location Medical",
    challenge: "Multi-location medical practice with poor online presence",
    metrics: [
      { label: "Patient Bookings", value: 190, prefix: "+", suffix: "%", decimals: 0 },
      { label: "Revenue Generated", value: 120, prefix: "$", suffix: "K", decimals: 0 },
      { label: "Review Score", value: 4.9, prefix: "", suffix: "", decimals: 1 },
    ],
  },
];

const processSteps = [
  { num: "01", title: "Free Audit & Strategy Call", desc: "We analyze your current online presence and identify growth opportunities." },
  { num: "02", title: "Custom Marketing Plan", desc: "We build a tailored strategy aligned with your business goals and budget." },
  { num: "03", title: "Execute & Optimize", desc: "Our team implements and continuously optimizes for maximum results." },
  { num: "04", title: "Report & Scale", desc: "Transparent reporting and strategic scaling to accelerate growth." },
];

const testimonials = [
  { name: "Sarah Mitchell", business: "E-Commerce Owner", quote: "Infinite Rankers transformed our online presence completely. Our revenue has tripled in just 8 months. Their team is incredibly knowledgeable and responsive.", rating: 5 },
  { name: "James Rodriguez", business: "Law Firm Partner", quote: "We went from page 5 to the #1 spot in Google Maps. The leads have been pouring in. Best investment we've made for our practice.", rating: 5 },
  { name: "Emily Chen", business: "Restaurant Owner", quote: "Their social media strategy brought us more customers than we could handle. We had to hire more staff! Truly incredible results.", rating: 5 },
  { name: "Michael Brooks", business: "Real Estate Agent", quote: "The ROI on their Google Ads campaigns has been phenomenal. Every dollar spent brings back tenfold. Highly recommended for any business.", rating: 5 },
  { name: "Lisa Thompson", business: "Dental Practice", quote: "We saw a 200% increase in new patient appointments within 3 months. The team's expertise in healthcare marketing is unmatched.", rating: 5 },
  { name: "David Kim", business: "SaaS Founder", quote: "Their SEO and content strategy helped us rank for competitive keywords we never thought possible. Game-changing results for our startup.", rating: 5 },
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
              <span className="font-heading font-semibold text-sm text-brand-dark">Live Performance Dashboard</span>
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
                <div className="font-stat text-base font-semibold text-brand-dark mt-1">{stat.value}</div>
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
            <span className="font-stat text-lg font-bold text-brand-dark">4.9</span>
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
              <div className="font-stat text-base font-bold text-brand-dark">1,284</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused, totalSlides]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div ref={containerRef} className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * (100 / 3)}%)` }}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="flex-shrink-0 w-1/3 px-3">
              <div className="bg-white rounded-xl p-6 sm:p-8 h-full border border-gray-100 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(139,92,246,0.08)]">
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center text-white text-sm font-semibold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-brand-dark text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.business}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 mt-8">
        <button
          onClick={() => setCurrent(prev => Math.max(0, prev - 1))}
          className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:border-brand-blue/30 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-brand-blue w-6" : "bg-gray-200 hover:bg-gray-300 w-2"
            }`}
          />
        ))}
        <button
          onClick={() => setCurrent(prev => Math.min(totalSlides - 1, prev + 1))}
          className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:border-brand-blue/30 transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <SEO
        title="Infinite Rankers - USA's Premier Digital Marketing Agency | Google Partner"
        description="Infinite Rankers is a USA-based Google Partner digital marketing agency offering 100+ services. We help local businesses dominate search, generate leads, and scale revenue."
      />
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 noise-bg" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-blue/8 rounded-full blur-[150px] animate-blob-1" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-violet/8 rounded-full blur-[130px] animate-blob-2" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-blue/15 bg-white/60 backdrop-blur-sm mb-8"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-sm font-medium text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Google Partner </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, fontFamily: "'Inter', sans-serif" }}
              >
                <span className="text-brand-dark">We Don't Just Rank You</span>
                <br />
                <span className="text-gradient-blue">We Grow Your Revenue</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 text-gray-500 max-w-xl leading-relaxed"
                style={{ fontSize: "clamp(15px, 1.1vw, 18px)", fontFamily: "'Inter', sans-serif" }}
              >
                Infinite Rankers helps local businesses across the USA dominate search,
                generate qualified leads, and scale revenue with 100+ digital marketing services.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="mt-8 flex flex-col sm:flex-row items-start gap-4"
              >
                <Link href="/contact">
                  <span className="relative inline-flex items-center gap-2 px-7 py-3.5 bg-brand-blue text-white font-semibold rounded-lg group overflow-hidden shadow-[0_4px_20px_rgba(58,95,191,0.3)] hover:shadow-[0_6px_30px_rgba(58,95,191,0.4)] transition-shadow" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <span className="relative z-10">Get Free Audit</span>
                    <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer" />
                  </span>
                </Link>
                <Link href="/results">
                  <span className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-200 text-gray-700 font-semibold rounded-lg hover:border-brand-blue/30 hover:text-brand-blue transition-all" style={{ fontFamily: "'Inter', sans-serif" }}>
                    See Our Results
                    <Play className="w-4 h-4" />
                  </span>
                </Link>
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
            className="w-6 h-10 rounded-full border-2 border-gray-300/40 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-gray-400/50" />
          </motion.div>
        </div>
      </section>
      <section className="py-10 lg:py-14 relative bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[
              { num: 500, suffix: "+", label: "Happy Clients", icon: Users },
              { num: 10, prefix: "$", suffix: "M+", label: "Revenue Generated", icon: TrendingUp },
              { num: 100, suffix: "+", label: "Services Offered", icon: Zap },
              { num: 98, suffix: "%", label: "Client Retention", icon: Shield },
            ].map((stat, i) => (
              <FadeInSection key={stat.label} delay={i * 0.1}>
                <div className="relative bg-white rounded-xl p-4 sm:p-5 text-center border border-gray-100 group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(58,95,191,0.08)] hover:border-brand-blue/15">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-brand-blue/8 flex items-center justify-center mx-auto mb-2.5 group-hover:bg-brand-blue/12 transition-colors">
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-blue" />
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl text-brand-dark font-bold">
                    <AnimatedNumber value={stat.num} prefix={stat.prefix} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>{stat.label}</div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-5">
          <p className="text-center text-[11px] uppercase tracking-[0.2em] text-gray-400 font-medium">
            Trusted Tools & Partnerships
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, i) => (
              <div key={i} className="flex-shrink-0 mx-4">
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-50 border border-gray-100 hover:border-brand-blue/20 hover:bg-brand-blue/5 transition-colors whitespace-nowrap">
                  <span className="text-base">{logo.icon}</span>
                  <span className="text-sm font-semibold text-gray-500">{logo.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-blue/15 bg-brand-blue/5 text-brand-blue text-xs font-semibold uppercase tracking-widest mb-6">
                About Us
              </span>
              <h2 className="font-heading font-bold text-brand-dark tracking-tight leading-tight" style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>
                We Are More Than
                <br />
                <span className="text-gradient-blue">An Agency</span>
              </h2>
              <p className="mt-5 text-gray-500 leading-relaxed">
                Infinite Rankers is a full-service digital marketing agency built for local businesses
                that want real, measurable growth. We combine cutting-edge technology with proven strategies.
              </p>
              <p className="mt-3 text-gray-500 leading-relaxed">
                As a certified Google Partner, we have access to exclusive tools, beta features, and direct
                support from Google to give your business a competitive edge.
              </p>
              <p className="mt-3 text-gray-500 leading-relaxed">
                From SEO and PPC to social media and web design, our 100+ services cover every
                aspect of digital marketing your business needs to thrive.
              </p>
              <Link href="/about">
                <span className="inline-flex items-center gap-2 mt-6 text-brand-blue font-semibold group text-sm">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </FadeInSection>

            <FadeInSection delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: 500, suffix: "+", label: "Happy Clients" },
                  { num: 50, prefix: "$", suffix: "M+", label: "Revenue Generated" },
                  { num: 100, suffix: "+", label: "Services Offered" },
                  { num: 98, suffix: "%", label: "Client Retention" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl p-6 text-center bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-blue/15 transition-all duration-300"
                  >
                    <div className="text-3xl sm:text-4xl text-brand-dark font-bold">
                      <AnimatedNumber value={stat.num} prefix={stat.prefix} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-28 relative bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Services"
            title="100+ Digital Marketing Services"
            subtitle="From SEO to social media, PPC to web design — every tool your business needs to grow."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <FadeInSection key={service.title} delay={i * 0.04}>
                <div className="bg-white rounded-xl p-6 h-full border border-gray-100 group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(58,95,191,0.1)] hover:border-brand-blue/15">
                  <div className="w-11 h-11 rounded-lg bg-brand-blue/8 flex items-center justify-center mb-4 group-hover:bg-brand-blue/12 transition-colors">
                    <service.icon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <h3 className="font-heading font-semibold text-brand-dark mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
                  <div className="flex items-center gap-1 mt-4 text-brand-blue text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection className="text-center mt-10">
            <Link href="/services">
              <span className="inline-flex items-center gap-2 px-7 py-3 border border-gray-200 text-gray-600 font-semibold rounded-lg hover:border-brand-blue/30 hover:text-brand-blue transition-colors">
                View All 100+ Services
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </FadeInSection>
        </div>
      </section>
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeInSection>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-violet/15 bg-brand-violet/5 text-brand-violet text-xs font-semibold uppercase tracking-widest mb-6">
                Why Choose Us
              </span>
              <h2 className="font-heading font-bold text-brand-dark tracking-tight leading-tight" style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>
                Why 500+ Businesses
                <br />
                <span className="text-gradient-violet">Trust Infinite Rankers</span>
              </h2>
              <p className="mt-5 text-gray-500 leading-relaxed">
                We're not just another agency. We're your dedicated growth partner with
                a proven track record of delivering measurable results that impact your bottom line.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <div className="space-y-3">
                {[
                  { icon: CheckCircle2, title: "Google Partner Certified", desc: "Access to exclusive tools, beta features, and direct Google support." },
                  { icon: TrendingUp, title: "Revenue-First Approach", desc: "Your ROI is our #1 priority, with transparent results you can measure." },
                  { icon: Zap, title: "100+ Proven Services", desc: "Every digital marketing service your business needs, under one roof." },
                  { icon: Users, title: "Dedicated Account Manager", desc: "A single point of contact who knows your business inside and out." },
                  { icon: LineChart, title: "Transparent Monthly Reports", desc: "Real-time dashboards and detailed reports you can understand." },
                  { icon: Target, title: "Proven Lead Generation", desc: "We don't just drive traffic — we generate qualified leads that convert." },
                ].map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(139,92,246,0.08)] hover:border-brand-violet/15"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: i * 0.07, duration: 0.5 }}
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-violet/8 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 text-brand-violet" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-brand-dark text-sm">{feature.title}</h3>
                      <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-28 relative bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Case Studies"
            title="Real Businesses. Real Results."
            subtitle="See how we've helped businesses across industries achieve extraordinary growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, i) => (
              <FadeInSection key={study.industry} delay={i * 0.1}>
                <div className="bg-white rounded-xl overflow-hidden h-full border border-gray-100 group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_50px_rgba(58,95,191,0.1)]">
                  <div className="h-1 bg-gradient-to-r from-brand-blue to-brand-violet" />
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-brand-blue/8 text-brand-blue text-xs font-semibold uppercase tracking-wider">
                        {study.industry}
                      </span>
                      <span className="text-xs text-gray-400">{study.business}</span>
                    </div>
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">{study.challenge}</p>
                    <div className="space-y-4">
                      {study.metrics.map((metric) => (
                        <div key={metric.label} className="flex items-center justify-between">
                          <span className="text-xs text-gray-400 font-medium">{metric.label}</span>
                          <span className="text-2xl text-brand-dark font-bold">
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
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection className="text-center mt-10">
            <Link href="/results">
              <span className="inline-flex items-center gap-2 px-7 py-3 border border-gray-200 text-gray-600 font-semibold rounded-lg hover:border-brand-blue/30 hover:text-brand-blue transition-colors">
                See All Case Studies
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </FadeInSection>
        </div>
      </section>
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Process"
            title="How We Turn Clicks Into Customers"
            subtitle="Our proven 4-step process delivers consistent, measurable growth."
          />

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/15 to-transparent -translate-y-1/2" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <FadeInSection key={step.num} delay={i * 0.12}>
                  <div className="relative bg-white rounded-xl p-6 h-full text-center border border-gray-100 group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(58,95,191,0.08)]">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-violet text-white font-stat text-lg font-bold flex items-center justify-center mx-auto mb-4">
                      {step.num}
                    </div>
                    <h3 className="font-heading font-semibold text-brand-dark mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
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
      <section className="py-20 lg:py-28 relative bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Testimonials"
            title="What Our Clients Say"
            subtitle="Don't just take our word for it — hear from the businesses we've helped grow."
          />
          <div className="hidden md:block">
            <TestimonialCarousel />
          </div>
          <div className="md:hidden space-y-4">
            {testimonials.slice(0, 3).map((t, i) => (
              <FadeInSection key={t.name} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center text-white text-xs font-semibold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-brand-dark text-sm">{t.name}</div>
                      <div className="text-xs text-gray-400">{t.business}</div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Industries"
            title="We Serve Every Industry"
            subtitle="From law firms to restaurants, we understand your market and deliver results."
          />

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {industries.map((ind, i) => (
              <FadeInSection key={ind.label} delay={i * 0.04}>
                <div className="bg-white rounded-xl p-5 text-center border border-gray-100 group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(58,95,191,0.08)] hover:border-brand-blue/20">
                  <ind.icon className="w-7 h-7 text-brand-blue mx-auto mb-2.5 group-hover:text-brand-violet group-hover:scale-110 transition-all" />
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">{ind.label}</span>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-28 relative bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Blog"
            title="Latest Marketing Insights"
            subtitle="Expert strategies and actionable tips from our team."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <FadeInSection key={post.title} delay={i * 0.1}>
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(58,95,191,0.08)]">
                  <div className="h-44 bg-gradient-to-br from-brand-blue/5 via-brand-violet/5 to-brand-blue-light/5 relative overflow-hidden">
                    <div className="absolute inset-0 grid-bg opacity-40" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-2.5 py-1 rounded-md bg-white/80 backdrop-blur-sm text-brand-blue text-xs font-semibold border border-brand-blue/10">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
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
              <span className="inline-flex items-center gap-2 text-brand-blue font-semibold group text-sm">
                View All Articles
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </FadeInSection>
        </div>
      </section>
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-brand-violet/4 to-brand-blue-light/3" />
        <div className="absolute inset-0 noise-bg" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-brand-blue/8 rounded-full blur-[150px] animate-blob-1" />
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-brand-violet/8 rounded-full blur-[130px] animate-blob-2" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="font-heading font-bold text-brand-dark tracking-tight" style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}>
              Ready to Dominate Your Market?
            </h2>
            <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
              Join 500+ businesses that trust Infinite Rankers to drive their growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <span className="relative inline-flex items-center gap-2 px-7 py-3.5 bg-brand-blue text-white font-semibold rounded-lg group overflow-hidden shadow-[0_4px_20px_rgba(58,95,191,0.3)]">
                  <span className="relative z-10">Get Your Free Audit</span>
                  <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer" />
                </span>
              </Link>
              <a href="tel:+17034159373" className="inline-flex items-center gap-2 text-gray-500 font-medium hover:text-brand-blue transition-colors">
                <Phone className="w-4 h-4" />
                (703) 415-9373
              </a>
            </div>
            <a href="https://infiniterankers.io" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block text-sm text-gray-400 hover:text-brand-blue transition-colors">
              Visit infiniterankers.io →
            </a>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
