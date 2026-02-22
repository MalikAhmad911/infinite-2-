import { useParams, Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight, ArrowLeft, CheckCircle2, Star, ChevronDown,
  Phone, Shield, Award, Target, Zap, TrendingUp, Users,
  BarChart3, Search, Globe, Mail, Palette, Layers, Settings,
  Quote, Play, LineChart
} from "lucide-react";
import SEO from "@/components/seo";
import { getServiceBySlug, getAllServices, getServiceBySlug as getService } from "@/data/services-data";
import { getVisualComponent } from "@/components/service-visuals";
import WorkflowDiagram from "@/components/workflow-diagram";

function FadeInSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: string; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");
  const numericPart = value.replace(/[^0-9.]/g, "");
  const num = parseFloat(numericPart);

  useEffect(() => {
    if (!inView || isNaN(num)) { setDisplay(value); return; }
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * num);
      setDisplay(current.toLocaleString());
      if (progress < 1) requestAnimationFrame(animate);
      else setDisplay(num.toLocaleString());
    };
    requestAnimationFrame(animate);
  }, [inView, num, value]);

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeInSection delay={index * 0.05}>
      <div className="border border-gray-100 rounded-xl overflow-hidden hover:border-brand-blue/20 transition-colors">
        <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left">
          <span className="font-semibold text-sm pr-4" style={{ color: "#1A1A2E" }}>{question}</span>
          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown className="w-4 h-4 text-brand-blue flex-shrink-0" />
          </motion.div>
        </button>
        <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
          <div className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "#4A4A6A" }}>{answer}</div>
        </motion.div>
      </div>
    </FadeInSection>
  );
}

const categoryIcons: Record<string, React.ReactNode> = {
  "SEO": <Search className="w-4 h-4" />,
  "PPC": <Target className="w-4 h-4" />,
  "Social Media": <Users className="w-4 h-4" />,
  "Content Marketing": <Layers className="w-4 h-4" />,
  "Web Design": <Palette className="w-4 h-4" />,
  "Email Marketing": <Mail className="w-4 h-4" />,
  "Reputation Management": <Shield className="w-4 h-4" />,
  "CRO": <BarChart3 className="w-4 h-4" />,
  "Video Marketing": <Play className="w-4 h-4" />,
  "Analytics": <LineChart className="w-4 h-4" />,
  "Lead Generation": <TrendingUp className="w-4 h-4" />,
  "Specialized Services": <Zap className="w-4 h-4" />,
};

const processIcons = [Target, Settings, TrendingUp, Award];
const benefitIcons = [Zap, Shield, TrendingUp, Users, Globe, Star];

export default function ServicePage() {
  const params = useParams<{ slug: string }>();
  const service = getServiceBySlug(params.slug || "");

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: "#1A1A2E" }}>Service Not Found</h1>
          <Link href="/services"><span className="text-brand-blue font-medium">← Back to Services</span></Link>
        </div>
      </div>
    );
  }

  const relatedServices = service.relatedServices
    .map(slug => getAllServices().find(s => s.slug === slug))
    .filter(Boolean);

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title={service.metaTitle}
        description={service.metaDesc}
        canonical={`https://infiniterankers.com/${service.slug}`}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.h1,
          "description": service.metaDesc,
          "provider": {
            "@type": "Organization",
            "name": "Infinite Rankers",
            "url": "https://infiniterankers.com",
            "logo": "https://infiniterankers.com/logo.webp",
            "address": { "@type": "PostalAddress", "streetAddress": "203 N Caroline Pl", "addressLocality": "Dover", "addressRegion": "DE", "postalCode": "19904", "addressCountry": "US" },
            "telephone": "+17034159373",
            "sameAs": ["https://www.google.com/partners"]
          },
          "areaServed": { "@type": "Country", "name": "United States" },
          "serviceType": service.category,
          "url": `https://infiniterankers.com/${service.slug}`,
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "127", "bestRating": "5" }
        }}
      />

      {/* HERO */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[85vh] flex items-center overflow-hidden pt-24 pb-8 sm:pt-28 lg:pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/[0.03] via-white to-brand-violet/[0.03]" />
        <div className="absolute inset-0 noise-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Link href="/services">
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium mb-4 sm:mb-6 hover:text-brand-blue transition-colors" style={{ color: "#4A4A6A" }}>
                    <ArrowLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Back to Services
                  </span>
                </Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-brand-blue/15 bg-brand-blue/5 text-brand-blue text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-4 sm:mb-5">
                {categoryIcons[service.category] || <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                {service.category}
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
                className="font-bold tracking-tight leading-[1.1] mb-4 sm:mb-5"
                style={{ fontSize: "clamp(26px, 4.5vw, 52px)", color: "#1A1A2E" }}>
                {service.h1}
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}
                className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg mb-6 sm:mb-8" style={{ color: "#4A4A6A" }}>
                {service.subheading}
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3">
                <Link href="/contact">
                  <span className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg group shadow-[0_4px_20px_rgba(58,95,191,0.3)] hover:shadow-[0_6px_28px_rgba(58,95,191,0.4)] transition-shadow text-sm sm:text-base w-full sm:w-auto">
                    Get Free {service.category} Audit
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link href="/results">
                  <span className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 border border-gray-200 font-semibold rounded-lg hover:border-brand-blue/30 transition-colors text-sm sm:text-base w-full sm:w-auto" style={{ color: "#4A4A6A" }}>
                    See Results
                  </span>
                </Link>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex justify-center">
              {getVisualComponent(service.visualType)}
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-4 sm:py-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-12">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-blue" />
              <span className="text-xs sm:text-sm font-medium" style={{ color: "#4A4A6A" }}>Google Partner Agency</span>
            </div>
            <div className="flex items-center gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-400 fill-yellow-400" />)}
              <span className="text-xs sm:text-sm font-medium ml-1" style={{ color: "#4A4A6A" }}>4.9/5</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 lg:gap-8">
              {service.stats.slice(0, 1).map((stat, i) => (
                <div key={i} className="text-center">
                  <span className="text-xs sm:text-sm font-bold" style={{ color: "#1A1A2E" }}>{stat.value}</span>
                  <span className="text-[10px] sm:text-xs ml-1" style={{ color: "#6B6B8B" }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE VISUAL */}
      <section className="lg:hidden py-8">
        <div className="max-w-sm mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center transform scale-90">
            {getVisualComponent(service.visualType)}
          </motion.div>
        </div>
      </section>

      {/* WHAT IS SECTION + SIDEBAR */}
      <section className="py-12 sm:py-16 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-12">
            <div>
              <FadeInSection>
                <h2 className="font-bold tracking-tight mb-6 sm:mb-8" style={{ fontSize: "clamp(22px, 3vw, 38px)", color: "#1A1A2E" }}>
                  {service.whatIsTitle}
                </h2>
              </FadeInSection>
              <div className="space-y-5 sm:space-y-6">
                {service.whatIsContent.split('\n\n').map((p, i) => (
                  <FadeInSection key={i} delay={i * 0.08}>
                    {i === 0 ? (
                      <p className="text-base sm:text-lg leading-[1.8] sm:leading-[1.85] font-medium" style={{ color: "#1A1A2E" }}>{p}</p>
                    ) : (
                      <p className="text-sm sm:text-base leading-[1.8] sm:leading-[1.85]" style={{ color: "#4A4A6A" }}>{p}</p>
                    )}
                    {i === 1 && (
                      <div className="mt-5 sm:mt-6 p-4 sm:p-5 rounded-xl bg-gradient-to-r from-brand-blue/[0.04] to-brand-violet/[0.04] border-l-4 border-brand-blue">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                          <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: "#1A1A2E" }}>
                            Our {service.category.toLowerCase()} experts have helped 500+ businesses achieve measurable growth through proven strategies.
                          </p>
                        </div>
                      </div>
                    )}
                  </FadeInSection>
                ))}
              </div>
              <FadeInSection delay={0.4}>
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link href="/contact">
                    <span className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg text-sm group shadow-[0_4px_16px_rgba(58,95,191,0.25)] hover:shadow-[0_6px_24px_rgba(58,95,191,0.35)] transition-shadow w-full sm:w-auto">
                      Get Started Today
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <Link href="/results">
                    <span className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 border border-gray-200 font-semibold rounded-lg text-sm hover:border-brand-blue/30 transition-colors w-full sm:w-auto" style={{ color: "#4A4A6A" }}>
                      View Case Studies
                    </span>
                  </Link>
                </div>
              </FadeInSection>
            </div>

            <div className="lg:sticky lg:top-28 lg:self-start space-y-5">
              <FadeInSection delay={0.2}>
                <div className="rounded-2xl border border-brand-blue/10 bg-gradient-to-br from-brand-blue/[0.03] to-brand-violet/[0.03] p-5 sm:p-6">
                  <h3 className="font-bold text-sm sm:text-base mb-3" style={{ color: "#1A1A2E" }}>Get a Free {service.category} Audit</h3>
                  <p className="text-xs sm:text-sm leading-relaxed mb-4" style={{ color: "#4A4A6A" }}>
                    Discover exactly how we can improve your {service.category.toLowerCase()} performance with a no-obligation strategy session.
                  </p>
                  <Link href="/contact">
                    <span className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-brand-blue text-white font-semibold rounded-lg text-sm shadow-[0_4px_16px_rgba(58,95,191,0.25)] hover:shadow-[0_6px_24px_rgba(58,95,191,0.35)] transition-shadow group">
                      Book Free Call
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <a href="tel:+17034159373" className="flex items-center justify-center gap-2 w-full px-4 py-2.5 border border-gray-200 font-medium rounded-lg text-sm mt-2.5 hover:border-brand-blue/30 transition-colors" style={{ color: "#4A4A6A" }}>
                    <Phone className="w-3.5 h-3.5" />
                    (703) 415-9373
                  </a>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.3}>
                <div className="rounded-2xl border border-gray-100 bg-white p-5 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
                  <h3 className="font-bold text-sm sm:text-base mb-3" style={{ color: "#1A1A2E" }}>Key Results</h3>
                  <div className="space-y-2.5">
                    {service.stats.map((stat, i) => (
                      <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-brand-blue/[0.03]">
                        <div className="text-base sm:text-lg font-bold text-brand-blue" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                          {stat.value}
                        </div>
                        <div className="text-[10px] sm:text-xs font-medium" style={{ color: "#4A4A6A" }}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.4}>
                <div className="rounded-2xl border border-gray-100 bg-white p-5 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
                  <h3 className="font-bold text-sm sm:text-base mb-3" style={{ color: "#1A1A2E" }}>Related Services</h3>
                  <div className="space-y-2">
                    {relatedServices.slice(0, 4).map((rs) => rs && (
                      <Link key={rs.slug} href={`/${rs.slug}`}>
                        <div className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-brand-blue/[0.04] transition-colors cursor-pointer group">
                          <div className="w-7 h-7 rounded-md bg-brand-violet/10 flex items-center justify-center flex-shrink-0">
                            {categoryIcons[rs.category] || <Zap className="w-3.5 h-3.5 text-brand-violet" />}
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs sm:text-sm font-medium group-hover:text-brand-blue transition-colors truncate" style={{ color: "#1A1A2E" }}>
                              {rs.h1.length > 28 ? rs.h1.substring(0, 28) + "..." : rs.h1}
                            </div>
                            <div className="text-[10px] text-brand-blue/60">{rs.category}</div>
                          </div>
                          <ArrowRight className="w-3 h-3 text-brand-blue/40 group-hover:text-brand-blue group-hover:translate-x-0.5 transition-all ml-auto flex-shrink-0" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.5}>
                <div className="rounded-2xl border border-brand-violet/10 bg-brand-violet/[0.03] p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-brand-violet" />
                    <h3 className="font-bold text-sm" style={{ color: "#1A1A2E" }}>Google Partner</h3>
                  </div>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: "#4A4A6A" }}>
                    Certified agency with proven expertise across all Google platforms.
                  </p>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />)}
                    <span className="text-xs font-semibold ml-1.5" style={{ color: "#1A1A2E" }}>4.9/5 Rating</span>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW DIAGRAM */}
      <section className="py-16 sm:py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/[0.02] to-transparent" />
        <div className="absolute inset-0 noise-bg opacity-20" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-10 sm:mb-14 lg:mb-16">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-brand-violet mb-3 block">Our Process</span>
            <h2 className="font-bold tracking-tight" style={{ fontSize: "clamp(22px, 3.5vw, 42px)", color: "#1A1A2E" }}>
              How We Deliver {service.category} Results
            </h2>
            <p className="mt-3 text-sm sm:text-base max-w-lg mx-auto" style={{ color: "#6B6B8B" }}>
              A proven 4-step workflow designed to maximize your ROI
            </p>
          </FadeInSection>
          <WorkflowDiagram steps={service.process} category={service.category} />
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-12 sm:py-16 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-8 sm:mb-12 lg:mb-16">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-brand-blue mb-2 sm:mb-3 block">Why Choose Us</span>
            <h2 className="font-bold tracking-tight" style={{ fontSize: "clamp(22px, 3.5vw, 42px)", color: "#1A1A2E" }}>
              What You Get With Our {service.category} Services
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {service.benefits.map((b, i) => {
              const Icon = benefitIcons[i % benefitIcons.length];
              return (
                <FadeInSection key={i} delay={i * 0.08}>
                  <div className="p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-gray-100 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.08)] hover:-translate-y-1 transition-all duration-300">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-brand-violet/10 flex items-center justify-center mb-3 sm:mb-4">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-violet" />
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base mb-1.5 sm:mb-2" style={{ color: "#1A1A2E" }}>{b.title}</h3>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#4A4A6A" }}>{b.description}</p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 sm:py-16 lg:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/[0.03] via-brand-violet/[0.03] to-brand-blue/[0.03]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-6 sm:mb-10">
            <h2 className="font-bold tracking-tight" style={{ fontSize: "clamp(20px, 3vw, 36px)", color: "#1A1A2E" }}>
              What Our {service.category} Clients Achieve
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {service.stats.map((stat, i) => (
              <FadeInSection key={i} delay={i * 0.15}>
                <div className="text-center p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-white border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-brand-blue mb-1 sm:mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-[10px] sm:text-xs lg:text-sm font-medium leading-tight" style={{ color: "#4A4A6A" }}>{stat.label}</div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* MINI CASE STUDY */}
      <section className="py-12 sm:py-16 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="bg-gradient-to-br from-brand-blue/[0.04] to-brand-violet/[0.04] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 border border-brand-blue/10">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-brand-violet mb-3 sm:mb-4 block">Case Study</span>
              <h2 className="font-bold tracking-tight mb-4 sm:mb-6" style={{ fontSize: "clamp(18px, 2.5vw, 32px)", color: "#1A1A2E" }}>
                Real Results: {service.miniCaseStudy.industry}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 mb-6 sm:mb-8">
                <div>
                  <h3 className="font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2 text-brand-blue">Challenge</h3>
                  <p className="text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4" style={{ color: "#4A4A6A" }}>{service.miniCaseStudy.challenge}</p>
                  <h3 className="font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2 text-brand-violet">Solution</h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#4A4A6A" }}>{service.miniCaseStudy.solution}</p>
                </div>
                <div>
                  <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-4 sm:mb-6">
                    {service.miniCaseStudy.results.map((r, i) => (
                      <div key={i} className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-white rounded-lg sm:rounded-xl border border-gray-100">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                        <div>
                          <span className="text-xs sm:text-sm font-bold" style={{ color: "#1A1A2E" }}>{r.value}</span>
                          <span className="text-[10px] sm:text-xs ml-1 sm:ml-1.5" style={{ color: "#6B6B8B" }}>{r.metric}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="border-t border-brand-blue/10 pt-4 sm:pt-6">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-brand-violet/30 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs sm:text-sm italic leading-relaxed mb-2 sm:mb-3" style={{ color: "#4A4A6A" }}>"{service.miniCaseStudy.quote}"</p>
                    <p className="text-[10px] sm:text-xs font-semibold" style={{ color: "#1A1A2E" }}>— {service.miniCaseStudy.author}, {service.miniCaseStudy.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 sm:py-16 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/[0.01] to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-8 sm:mb-12">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-brand-blue mb-2 sm:mb-3 block">FAQ</span>
            <h2 className="font-bold tracking-tight" style={{ fontSize: "clamp(20px, 3vw, 36px)", color: "#1A1A2E" }}>
              Frequently Asked Questions
            </h2>
          </FadeInSection>
          <div className="space-y-2 sm:space-y-3">
            {service.faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-12 sm:py-16 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-8 sm:mb-12">
            <h2 className="font-bold tracking-tight" style={{ fontSize: "clamp(20px, 3vw, 36px)", color: "#1A1A2E" }}>
              Related Services
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {relatedServices.map((rs, i) => rs && (
              <FadeInSection key={rs.slug} delay={i * 0.1}>
                <Link href={`/${rs.slug}`}>
                  <div className="p-3 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl border border-gray-100 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(58,95,191,0.1)] hover:-translate-y-1 hover:border-brand-blue/20 transition-all duration-300 cursor-pointer group h-full">
                    <div className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-brand-blue/5 text-brand-blue text-[8px] sm:text-[10px] font-semibold uppercase tracking-wider mb-2 sm:mb-3">
                      {rs.category}
                    </div>
                    <h3 className="font-semibold text-xs sm:text-sm mb-1 sm:mb-1.5 group-hover:text-brand-blue transition-colors leading-snug" style={{ color: "#1A1A2E" }}>
                      {rs.h1.length > 35 ? rs.h1.substring(0, 35) + "..." : rs.h1}
                    </h3>
                    <p className="text-[10px] sm:text-xs leading-relaxed line-clamp-2 hidden sm:block" style={{ color: "#6B6B8B" }}>{rs.subheading}</p>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-14 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-brand-violet/4 to-brand-blue-light/3" />
        <div className="absolute inset-0 noise-bg" />
        <div className="absolute top-1/3 left-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-brand-blue/8 rounded-full blur-[120px] sm:blur-[150px] animate-blob-1" />
        <div className="absolute bottom-1/3 right-1/4 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-brand-violet/8 rounded-full blur-[100px] sm:blur-[130px] animate-blob-2" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="font-bold tracking-tight mb-3 sm:mb-4" style={{ fontSize: "clamp(22px, 3.5vw, 48px)", color: "#1A1A2E" }}>
              Ready to Grow With {service.category}?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg max-w-xl mx-auto mb-2 sm:mb-3" style={{ color: "#4A4A6A" }}>
              Book your free strategy call and discover how our {service.category.toLowerCase()} services can transform your business.
            </p>
            <p className="text-xs sm:text-sm font-medium text-brand-violet mb-6 sm:mb-8">Limited spots available this month</p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <Link href="/contact">
                <span className="relative inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-brand-blue text-white font-semibold rounded-lg group overflow-hidden shadow-[0_4px_20px_rgba(58,95,191,0.3)] text-sm sm:text-base w-full sm:w-auto">
                  <span className="relative z-10">Book Free Strategy Call</span>
                  <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer" />
                </span>
              </Link>
              <a href="tel:+17034159373" className="inline-flex items-center justify-center gap-2 font-medium hover:text-brand-blue transition-colors text-sm sm:text-base" style={{ color: "#4A4A6A" }}>
                <Phone className="w-4 h-4" /> (703) 415-9373
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
