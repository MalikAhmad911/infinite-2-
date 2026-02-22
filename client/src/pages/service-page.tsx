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
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.h1,
          "provider": { "@type": "Organization", "name": "Infinite Rankers" },
          "areaServed": "United States",
          "description": service.metaDesc,
          "url": `https://infiniterankers.io/services/${service.slug}`
        }}
      />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/[0.03] via-white to-brand-violet/[0.03]" />
        <div className="absolute inset-0 noise-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Link href="/services">
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium mb-6 hover:text-brand-blue transition-colors" style={{ color: "#4A4A6A" }}>
                    <ArrowLeft className="w-3.5 h-3.5" /> Back to Services
                  </span>
                </Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-blue/15 bg-brand-blue/5 text-brand-blue text-xs font-semibold uppercase tracking-widest mb-5">
                {categoryIcons[service.category] || <Zap className="w-3.5 h-3.5" />}
                {service.category}
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
                className="font-bold tracking-tight leading-[1.1] mb-5"
                style={{ fontSize: "clamp(32px, 4.5vw, 52px)", color: "#1A1A2E" }}>
                {service.h1}
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}
                className="text-base lg:text-lg leading-relaxed max-w-lg mb-8" style={{ color: "#4A4A6A" }}>
                {service.subheading}
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col sm:flex-row items-start gap-3">
                <Link href="/contact">
                  <span className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg group shadow-[0_4px_20px_rgba(58,95,191,0.3)] hover:shadow-[0_6px_28px_rgba(58,95,191,0.4)] transition-shadow">
                    Get Free {service.category} Audit
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link href="/results">
                  <span className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 font-semibold rounded-lg hover:border-brand-blue/30 transition-colors" style={{ color: "#4A4A6A" }}>
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
      <section className="py-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-brand-blue" />
              <span className="text-sm font-medium" style={{ color: "#4A4A6A" }}>Google Partner Agency</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />)}
              <span className="text-sm font-medium ml-1" style={{ color: "#4A4A6A" }}>4.9/5</span>
            </div>
            {service.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <span className="text-sm font-bold" style={{ color: "#1A1A2E" }}>{stat.value}</span>
                <span className="text-xs ml-1" style={{ color: "#6B6B8B" }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS SECTION */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection>
              <h2 className="font-bold tracking-tight mb-6" style={{ fontSize: "clamp(24px, 3vw, 38px)", color: "#1A1A2E" }}>
                {service.whatIsTitle}
              </h2>
              <div className="text-base leading-relaxed space-y-4" style={{ color: "#4A4A6A" }}>
                {service.whatIsContent.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2} className="lg:hidden flex justify-center">
              {getVisualComponent(service.visualType)}
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/[0.02] to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-violet mb-3 block">Our Process</span>
            <h2 className="font-bold tracking-tight" style={{ fontSize: "clamp(26px, 3.5vw, 42px)", color: "#1A1A2E" }}>
              How We Deliver {service.category} Results
            </h2>
          </FadeInSection>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent -translate-y-1/2" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {service.process.map((step, i) => {
                const Icon = processIcons[i % processIcons.length];
                return (
                  <FadeInSection key={i} delay={i * 0.12}>
                    <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(58,95,191,0.1)] hover:-translate-y-1 transition-all duration-300 group">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors">
                          <Icon className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-violet">Step {step.step}</span>
                      </div>
                      <h3 className="font-semibold text-base mb-2" style={{ color: "#1A1A2E" }}>{step.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#4A4A6A" }}>{step.description}</p>
                    </div>
                  </FadeInSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue mb-3 block">Why Choose Us</span>
            <h2 className="font-bold tracking-tight" style={{ fontSize: "clamp(26px, 3.5vw, 42px)", color: "#1A1A2E" }}>
              What You Get With Our {service.category} Services
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((b, i) => {
              const Icon = benefitIcons[i % benefitIcons.length];
              return (
                <FadeInSection key={i} delay={i * 0.08}>
                  <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.08)] hover:-translate-y-1 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-brand-violet/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-brand-violet" />
                    </div>
                    <h3 className="font-semibold text-base mb-2" style={{ color: "#1A1A2E" }}>{b.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#4A4A6A" }}>{b.description}</p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 lg:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/[0.03] via-brand-violet/[0.03] to-brand-blue/[0.03]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-10">
            <h2 className="font-bold tracking-tight" style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#1A1A2E" }}>
              What Our {service.category} Clients Achieve
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {service.stats.map((stat, i) => (
              <FadeInSection key={i} delay={i * 0.15}>
                <div className="text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  <div className="text-3xl lg:text-4xl font-bold text-brand-blue mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-sm font-medium" style={{ color: "#4A4A6A" }}>{stat.label}</div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* MINI CASE STUDY */}
      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="bg-gradient-to-br from-brand-blue/[0.04] to-brand-violet/[0.04] rounded-3xl p-8 lg:p-12 border border-brand-blue/10">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-violet mb-4 block">Case Study</span>
              <h2 className="font-bold tracking-tight mb-6" style={{ fontSize: "clamp(22px, 2.5vw, 32px)", color: "#1A1A2E" }}>
                Real Results: {service.miniCaseStudy.industry}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-semibold text-sm mb-2 text-brand-blue">Challenge</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#4A4A6A" }}>{service.miniCaseStudy.challenge}</p>
                  <h3 className="font-semibold text-sm mb-2 text-brand-violet">Solution</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#4A4A6A" }}>{service.miniCaseStudy.solution}</p>
                </div>
                <div>
                  <div className="grid grid-cols-1 gap-3 mb-6">
                    {service.miniCaseStudy.results.map((r, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <div>
                          <span className="text-sm font-bold" style={{ color: "#1A1A2E" }}>{r.value}</span>
                          <span className="text-xs ml-1.5" style={{ color: "#6B6B8B" }}>{r.metric}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="border-t border-brand-blue/10 pt-6">
                <div className="flex items-start gap-3">
                  <Quote className="w-8 h-8 text-brand-violet/30 flex-shrink-0" />
                  <div>
                    <p className="text-sm italic leading-relaxed mb-3" style={{ color: "#4A4A6A" }}>"{service.miniCaseStudy.quote}"</p>
                    <p className="text-xs font-semibold" style={{ color: "#1A1A2E" }}>— {service.miniCaseStudy.author}, {service.miniCaseStudy.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/[0.01] to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue mb-3 block">FAQ</span>
            <h2 className="font-bold tracking-tight" style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#1A1A2E" }}>
              Frequently Asked Questions
            </h2>
          </FadeInSection>
          <div className="space-y-3">
            {service.faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-12">
            <h2 className="font-bold tracking-tight" style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#1A1A2E" }}>
              Services That Work Well With {service.title || service.h1.split(" ").slice(0, 3).join(" ")}
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedServices.map((rs, i) => rs && (
              <FadeInSection key={rs.slug} delay={i * 0.1}>
                <Link href={`/services/${rs.slug}`}>
                  <div className="p-5 rounded-2xl border border-gray-100 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(58,95,191,0.1)] hover:-translate-y-1 hover:border-brand-blue/20 transition-all duration-300 cursor-pointer group">
                    <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-brand-blue/5 text-brand-blue text-[10px] font-semibold uppercase tracking-wider mb-3">
                      {rs.category}
                    </div>
                    <h3 className="font-semibold text-sm mb-1.5 group-hover:text-brand-blue transition-colors" style={{ color: "#1A1A2E" }}>
                      {rs.h1.length > 40 ? rs.h1.substring(0, 40) + "..." : rs.h1}
                    </h3>
                    <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "#6B6B8B" }}>{rs.subheading}</p>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-brand-violet/4 to-brand-blue-light/3" />
        <div className="absolute inset-0 noise-bg" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-brand-blue/8 rounded-full blur-[150px] animate-blob-1" />
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-brand-violet/8 rounded-full blur-[130px] animate-blob-2" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="font-bold tracking-tight mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", color: "#1A1A2E" }}>
              Ready to Grow With {service.category}?
            </h2>
            <p className="text-lg max-w-xl mx-auto mb-3" style={{ color: "#4A4A6A" }}>
              Book your free strategy call and discover how our {service.category.toLowerCase()} services can transform your business.
            </p>
            <p className="text-sm font-medium text-brand-violet mb-8">Limited spots available this month</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <span className="relative inline-flex items-center gap-2 px-7 py-3.5 bg-brand-blue text-white font-semibold rounded-lg group overflow-hidden shadow-[0_4px_20px_rgba(58,95,191,0.3)]">
                  <span className="relative z-10">Book Free Strategy Call</span>
                  <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer" />
                </span>
              </Link>
              <a href="tel:+17034159373" className="inline-flex items-center gap-2 font-medium hover:text-brand-blue transition-colors" style={{ color: "#4A4A6A" }}>
                <Phone className="w-4 h-4" /> (703) 415-9373
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
