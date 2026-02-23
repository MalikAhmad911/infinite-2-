import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, TrendingUp, Users, DollarSign, Target, BarChart3, Globe } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import AnimatedCounter from "@/components/animated-counter";
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

const caseStudies = [
  {
    industry: "E-Commerce",
    title: "Online Fashion Store",
    challenge: "A growing e-commerce brand struggled with declining organic traffic and high customer acquisition costs. Their Google Ads ROAS was below 2x.",
    solution: "We implemented a comprehensive SEO strategy, restructured their Google Ads campaigns, and launched targeted social media campaigns.",
    results: [
      { label: "Revenue Increase", value: "340%", icon: DollarSign },
      { label: "Organic Traffic", value: "+520%", icon: TrendingUp },
      { label: "Google Ads ROAS", value: "8.2x", icon: BarChart3 },
      { label: "Cost Per Acquisition", value: "-58%", icon: Target },
    ],
    timeframe: "12 months",
  },
  {
    industry: "Legal",
    title: "Personal Injury Law Firm",
    challenge: "A local law firm was invisible in Google search and Maps. They were spending $15,000/month on ads with minimal return.",
    solution: "Complete local SEO overhaul, Google Business Profile optimization, review generation strategy, and PPC restructuring.",
    results: [
      { label: "Lead Generation", value: "+280%", icon: Users },
      { label: "Google Map Pack", value: "#1", icon: Globe },
      { label: "Cost Per Lead", value: "-65%", icon: DollarSign },
      { label: "Conversion Rate", value: "+145%", icon: Target },
    ],
    timeframe: "8 months",
  },
  {
    industry: "Healthcare",
    title: "Multi-Location Medical Practice",
    challenge: "A medical practice with 5 locations had poor online visibility and was losing patients to competitors with stronger digital presence.",
    solution: "Multi-location SEO strategy, reputation management, content marketing, and targeted PPC campaigns for each location.",
    results: [
      { label: "Patient Bookings", value: "+190%", icon: Users },
      { label: "Local Rankings", value: "Top 3", icon: TrendingUp },
      { label: "Online Reviews", value: "4.9★", icon: Target },
      { label: "Website Traffic", value: "+310%", icon: Globe },
    ],
    timeframe: "10 months",
  },
  {
    industry: "Restaurant",
    title: "Upscale Restaurant Chain",
    challenge: "Three-location restaurant chain struggling to fill seats during weekdays and compete with chains that had bigger marketing budgets.",
    solution: "Social media marketing, local SEO, Google Ads for delivery keywords, and influencer partnerships with food bloggers.",
    results: [
      { label: "Walk-in Traffic", value: "+175%", icon: Users },
      { label: "Online Orders", value: "+420%", icon: DollarSign },
      { label: "Social Following", value: "+850%", icon: TrendingUp },
      { label: "Review Score", value: "4.8★", icon: Target },
    ],
    timeframe: "6 months",
  },
  {
    industry: "Real Estate",
    title: "Real Estate Brokerage",
    challenge: "A mid-size brokerage firm was losing market share to competitors who dominated online lead generation and had stronger brand awareness.",
    solution: "Comprehensive content marketing, IDX website redesign, PPC campaigns for high-value keywords, and social media branding.",
    results: [
      { label: "Qualified Leads", value: "+230%", icon: Users },
      { label: "Avg. Deal Size", value: "+45%", icon: DollarSign },
      { label: "Brand Searches", value: "+380%", icon: Globe },
      { label: "Market Share", value: "+12%", icon: BarChart3 },
    ],
    timeframe: "14 months",
  },
  {
    industry: "SaaS",
    title: "B2B Software Company",
    challenge: "An early-stage SaaS company needed to build an inbound marketing engine from scratch to reduce reliance on expensive outbound sales.",
    solution: "Full content marketing strategy, technical SEO foundation, PPC for bottom-of-funnel keywords, and LinkedIn advertising.",
    results: [
      { label: "MRR Growth", value: "+260%", icon: DollarSign },
      { label: "Organic Signups", value: "+490%", icon: Users },
      { label: "CAC Reduction", value: "-52%", icon: Target },
      { label: "Domain Authority", value: "+35", icon: TrendingUp },
    ],
    timeframe: "18 months",
  },
];

export default function Results() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Case Studies & Results - Proven Digital Marketing Success | Infinite Rankers"
        description="See real results from our digital marketing campaigns. Explore case studies showing 340% revenue growth, 520% traffic increases, and more for businesses across industries."
        canonical="https://infiniterankers.com/results"
      />
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px] animate-blob-1" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-brand-violet/5 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-blue text-xs font-semibold uppercase tracking-widest mb-4 sm:mb-6"
          >
            Case Studies
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-brand-dark tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 5vw, 4.5rem)" }}
          >
            Real Businesses.
            <br />
            <span className="text-gradient-blue">Real Results.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-brand-muted max-w-2xl mx-auto"
          >
            See how we've helped businesses across diverse industries achieve extraordinary
            growth through data-driven digital marketing strategies.
          </motion.p>
        </div>
      </section>

      <section className="py-12 sm:py-16 border-y border-brand-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8">
            <AnimatedCounter end={500} suffix="+" label="Clients Served" />
            <AnimatedCounter end={50} prefix="$" suffix="M+" label="Revenue Generated" />
            <AnimatedCounter end={340} suffix="%" label="Avg. Traffic Growth" />
            <AnimatedCounter end={98} suffix="%" label="Client Retention" />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {caseStudies.map((study, i) => (
              <FadeIn key={study.title} delay={0.05}>
                <div className="glass-card rounded-xl p-4 sm:p-6 lg:p-10 hover:border-brand-blue/20 transition-all duration-500">
                  <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <span className="px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-semibold uppercase tracking-wider">
                          {study.industry}
                        </span>
                        <span className="text-xs text-brand-muted">{study.timeframe}</span>
                      </div>
                      <h3 className="font-heading font-bold text-brand-dark mb-2 sm:mb-3" style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)" }}>{study.title}</h3>
                      <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                        <div>
                          <span className="text-brand-blue font-semibold">Challenge:</span>
                          <span className="text-brand-muted ml-2">{study.challenge}</span>
                        </div>
                        <div>
                          <span className="text-brand-violet font-semibold">Solution:</span>
                          <span className="text-brand-muted ml-2">{study.solution}</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 lg:w-80 flex-shrink-0">
                      {study.results.map((r) => (
                        <div key={r.label} className="bg-gray-50 rounded-md p-3 sm:p-4 text-center">
                          <r.icon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-blue mx-auto mb-1 sm:mb-2" />
                          <div className="font-stat text-brand-dark tracking-wider" style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)" }}>{r.value}</div>
                          <div className="text-[10px] sm:text-xs text-brand-muted mt-1">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-32 relative overflow-hidden noise-bg">
        <div className="absolute inset-0 bg-gradient-cta" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[150px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-heading font-bold text-brand-dark tracking-tight" style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}>
              Want Results Like These?
            </h2>
            <p className="mt-3 sm:mt-4 text-brand-muted text-sm sm:text-base lg:text-lg max-w-xl mx-auto">
              Let's discuss how we can create a custom strategy that delivers similar results for your business.
            </p>
            <div className="mt-6 sm:mt-8">
              <Link href="/contact">
                <span className="relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 min-h-[44px] bg-brand-blue text-white font-semibold rounded-md cursor-pointer group overflow-hidden">
                  <span className="relative z-10">Start Your Success Story</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                </span>
              </Link>
            </div>
            <a href="https://infiniterankers.io" target="_blank" rel="noopener noreferrer" className="mt-4 sm:mt-6 inline-block text-sm text-brand-muted hover:text-brand-violet transition-colors min-h-[44px] leading-[44px]">View more on infiniterankers.io →</a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
