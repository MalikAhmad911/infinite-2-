import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search, BarChart3, Users, Globe, Mail, Video, Shield, TrendingUp,
  Link2, Megaphone, LineChart, Palette, ArrowRight, MapPin, Code,
  Smartphone, ShoppingCart, Database, Headphones, FileText, Camera,
  PenTool, Share2, Radio, MessageCircle, BookOpen, Cpu, Phone,
  Award, Briefcase, Layers, Monitor, Settings, Wifi, Zap
} from "lucide-react";
import SectionHeading from "@/components/section-heading";
import SEO from "@/components/seo";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }} className={className}>
      {children}
    </motion.div>
  );
}

const serviceCategories = [
  {
    title: "Search Engine Optimization",
    icon: Search,
    color: "text-brand-blue",
    bgColor: "bg-brand-blue/10",
    services: ["Local SEO", "National SEO", "Technical SEO", "E-Commerce SEO", "Enterprise SEO", "SEO Audits", "Keyword Research", "On-Page SEO", "Off-Page SEO", "International SEO"]
  },
  {
    title: "Pay-Per-Click Advertising",
    icon: BarChart3,
    color: "text-brand-violet",
    bgColor: "bg-brand-violet/10",
    services: ["Google Ads Management", "Bing Ads", "Display Advertising", "Retargeting Campaigns", "Shopping Ads", "YouTube Ads", "App Install Campaigns", "Performance Max", "Local Service Ads", "Ad Copywriting"]
  },
  {
    title: "Social Media Marketing",
    icon: Users,
    color: "text-brand-blue-light",
    bgColor: "bg-brand-blue-light/10",
    services: ["Facebook Marketing", "Instagram Marketing", "LinkedIn Marketing", "TikTok Marketing", "Twitter/X Marketing", "Pinterest Marketing", "Social Media Management", "Community Management", "Social Listening", "Paid Social Ads"]
  },
  {
    title: "Content Marketing",
    icon: Palette,
    color: "text-brand-blue",
    bgColor: "bg-brand-blue/10",
    services: ["Blog Writing", "Article Marketing", "Infographic Design", "Whitepaper Creation", "Case Study Writing", "Content Strategy", "Guest Posting", "Press Releases", "eBook Creation", "Content Distribution"]
  },
  {
    title: "Web Design & Development",
    icon: Globe,
    color: "text-brand-violet",
    bgColor: "bg-brand-violet/10",
    services: ["Custom Website Design", "WordPress Development", "E-Commerce Development", "Landing Page Design", "Website Redesign", "Mobile App Development", "UI/UX Design", "Web Hosting", "Website Maintenance", "Speed Optimization"]
  },
  {
    title: "Email Marketing",
    icon: Mail,
    color: "text-brand-blue-light",
    bgColor: "bg-brand-blue-light/10",
    services: ["Email Campaign Management", "Newsletter Design", "Drip Campaigns", "Email Automation", "List Building", "A/B Testing", "Segmentation", "Deliverability Optimization", "Template Design", "Analytics & Reporting"]
  },
  {
    title: "Video Marketing",
    icon: Video,
    color: "text-brand-blue",
    bgColor: "bg-brand-blue/10",
    services: ["Video Production", "YouTube Marketing", "Video SEO", "Animated Videos", "Explainer Videos", "Social Media Videos", "Video Ads", "Live Streaming", "Video Editing", "Video Strategy"]
  },
  {
    title: "Reputation Management",
    icon: Shield,
    color: "text-brand-violet",
    bgColor: "bg-brand-violet/10",
    services: ["Review Management", "Online Reputation Monitoring", "Negative Content Removal", "Brand Monitoring", "Review Generation", "Crisis Management", "Reputation Repair", "Social Proof Strategy", "Trust Building", "Review Response"]
  },
  {
    title: "Conversion Rate Optimization",
    icon: TrendingUp,
    color: "text-brand-blue-light",
    bgColor: "bg-brand-blue-light/10",
    services: ["A/B Testing", "Heatmap Analysis", "User Journey Mapping", "Landing Page Optimization", "Form Optimization", "Checkout Optimization", "UX Audits", "Multivariate Testing", "Funnel Analysis", "Personalization"]
  },
  {
    title: "Link Building",
    icon: Link2,
    color: "text-brand-blue",
    bgColor: "bg-brand-blue/10",
    services: ["White Hat Link Building", "Guest Posting", "Broken Link Building", "Resource Link Building", "Digital PR", "HARO Link Building", "Niche Edits", "Link Audits", "Competitor Analysis", "Authority Building"]
  },
  {
    title: "Influencer Marketing",
    icon: Megaphone,
    color: "text-brand-violet",
    bgColor: "bg-brand-violet/10",
    services: ["Influencer Outreach", "Campaign Management", "Micro-Influencer Strategy", "Brand Ambassadors", "Affiliate Programs", "Sponsored Content", "Product Reviews", "Influencer Analytics", "Contract Negotiation", "ROI Tracking"]
  },
  {
    title: "Analytics & Reporting",
    icon: LineChart,
    color: "text-brand-blue-light",
    bgColor: "bg-brand-blue-light/10",
    services: ["Google Analytics Setup", "Data Analysis", "Custom Dashboards", "Monthly Reporting", "ROI Tracking", "Conversion Tracking", "Attribution Modeling", "Competitive Analysis", "Market Research", "Performance Forecasting"]
  },
];

export default function Services() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Our Services - 100+ Digital Marketing Solutions | Infinite Rankers"
        description="Explore 100+ digital marketing services including SEO, PPC, social media marketing, web design, content marketing, and more. Full-service agency solutions."
      />
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px] animate-blob-1" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-brand-violet/5 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-blue text-xs font-semibold uppercase tracking-widest mb-6"
          >
            100+ Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-7xl text-brand-dark tracking-tight"
          >
            Everything You Need
            <br />
            <span className="text-gradient-blue">Under One Roof</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-brand-muted max-w-2xl mx-auto"
          >
            From SEO to social media, PPC to web design — we offer a complete suite of
            digital marketing services to help your business grow.
          </motion.p>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {serviceCategories.map((cat, i) => (
              <FadeIn key={cat.title} delay={0.05}>
                <div className="glass-card rounded-xl p-6 sm:p-8 lg:p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-md ${cat.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <cat.icon className={`w-6 h-6 ${cat.color}`} />
                    </div>
                    <div>
                      <h2 className="font-heading font-bold text-xl sm:text-2xl text-brand-dark">{cat.title}</h2>
                      <p className="text-sm text-brand-muted mt-1">{cat.services.length} specialized services</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                    {cat.services.map((service) => (
                      <div
                        key={service}
                        className="px-4 py-3 rounded-md bg-gray-50 border border-gray-200 text-sm text-brand-muted hover:text-brand-dark hover:border-brand-blue/20 hover:bg-brand-blue/5 transition-all duration-300 cursor-pointer"
                      >
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 relative overflow-hidden noise-bg bg-gradient-cta">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[150px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-dark tracking-tight">
              Not Sure Which Service You Need?
            </h2>
            <p className="mt-4 text-brand-muted text-lg max-w-xl mx-auto">
              Our experts will analyze your business and recommend the perfect strategy — completely free.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <span className="relative inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white font-semibold rounded-md cursor-pointer group overflow-hidden">
                  <span className="relative z-10">Get Your Free Audit</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                </span>
              </Link>
            </div>
            <a href="https://infiniterankers.io" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-sm text-brand-muted hover:text-brand-blue transition-colors" data-testid="link-services-site">Explore more at infiniterankers.io →</a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
