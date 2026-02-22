import { useParams, Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight, CheckCircle2, ChevronDown, Phone, Award, Target,
  TrendingUp, Users, BarChart3, Search, Globe, MapPin, Star,
  Zap, Shield, Building2, ExternalLink, ArrowUpRight
} from "lucide-react";
import SEO from "@/components/seo";
import { getLandingPageBySlug } from "@/data/landing-pages-data";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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

function Counter({ value, suffix = "", prefix = "" }: { value: string; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");
  const numericPart = value.replace(/[^0-9.]/g, "");
  const num = parseFloat(numericPart);
  useEffect(() => {
    if (!inView || isNaN(num)) { setDisplay(value); return; }
    const duration = 2000;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * num).toLocaleString());
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
    <FadeIn delay={index * 0.05}>
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
    </FadeIn>
  );
}

export default function LandingPage() {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? getLandingPageBySlug(slug) : undefined;

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!page) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": page.faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Infinite Rankers",
    "description": page.metaDesc,
    "url": `https://infiniterankers.com/${page.slug}`,
    "telephone": "(703) 415-9373",
    "email": "contact@infiniterankers.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "203 N Caroline Pl",
      "addressLocality": "Dover",
      "addressRegion": "DE",
      "postalCode": "19904",
      "addressCountry": "US"
    },
    "areaServed": { "@type": "Country", "name": "United States" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": page.title,
      "itemListElement": [{
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": page.title, "description": page.subheading }
      }]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://infiniterankers.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://infiniterankers.com/services" },
      { "@type": "ListItem", "position": 3, "name": page.title, "item": `https://infiniterankers.com/${page.slug}` }
    ]
  };

  return (
    <>
      <SEO
        title={page.metaTitle}
        description={page.metaDesc}
        canonical={`https://infiniterankers.com/${page.slug}`}
        schema={[faqSchema, serviceSchema, breadcrumbSchema]}
      />

      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-violet/5" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-violet/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <FadeIn>
            <nav className="flex items-center gap-2 text-xs text-brand-muted mb-8">
              <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-brand-blue transition-colors">Services</Link>
              <span>/</span>
              <span className="text-brand-dark">{page.title}</span>
            </nav>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-blue/20 bg-brand-blue/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">Google Partner Agency</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6" style={{ color: "#1A1A2E" }}>
              {page.h1}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mb-10" style={{ color: "#4A4A6A" }}>
              {page.subheading}
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/contact">
                <span className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white rounded-lg font-semibold hover:bg-brand-blue/90 transition-all shadow-lg shadow-brand-blue/20 text-sm sm:text-base">
                  Get Free Audit <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <a href="tel:+17034159373" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-brand-blue/20 rounded-lg font-semibold text-brand-dark hover:border-brand-blue/40 transition-all text-sm sm:text-base">
                <Phone className="w-4 h-4 text-brand-blue" /> (703) 415-9373
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl">
              {page.heroStats.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-brand-blue">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-brand-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="prose prose-lg max-w-none">
              {page.introduction.split('\n\n').map((para, i) => (
                <p key={i} className={`text-sm sm:text-base leading-relaxed mb-6 ${i === 0 ? 'text-base sm:text-lg font-medium' : ''}`} style={{ color: i === 0 ? "#1A1A2E" : "#4A4A6A" }}>
                  {para}
                </p>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-brand-blue/5 to-brand-violet/5 border border-brand-blue/10">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: "#1A1A2E" }}>Keywords We Target</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {page.lsiKeywords.map((kw, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white border border-brand-blue/10 text-xs text-brand-muted">{kw}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {page.sections.map((section, i) => (
        <section key={i} className={`py-16 sm:py-20 ${i % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: "#1A1A2E" }}>{section.heading}</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div>
                {section.content.split('\n\n').map((para, j) => (
                  <p key={j} className="text-sm sm:text-base leading-relaxed mb-5" style={{ color: "#4A4A6A" }}>{para}</p>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      ))}

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full border border-brand-blue/20 text-xs font-semibold text-brand-blue uppercase tracking-wider mb-4">Benefits</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: "#1A1A2E" }}>Why Choose Our {page.title} Services</h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {page.benefits.map((b, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="p-6 rounded-xl border border-gray-100 hover:border-brand-blue/20 hover:shadow-lg transition-all h-full bg-white group">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-4 group-hover:bg-brand-blue/20 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                  </div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: "#1A1A2E" }}>{b.title}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#4A4A6A" }}>{b.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-brand-blue/5 via-white to-brand-violet/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full border border-brand-blue/20 text-xs font-semibold text-brand-blue uppercase tracking-wider mb-4">Our Process</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: "#1A1A2E" }}>How We Deliver Results</h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {page.process.map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative p-6 rounded-xl border border-gray-100 bg-white hover:shadow-lg transition-all">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-sm mb-2 mt-2" style={{ color: "#1A1A2E" }}>{step.title}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#4A4A6A" }}>{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full border border-brand-blue/20 text-xs font-semibold text-brand-blue uppercase tracking-wider mb-4">Results</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: "#1A1A2E" }}>Proven Results That Speak for Themselves</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-16">
            {page.stats.map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-brand-blue/5 to-brand-violet/5 border border-brand-blue/10">
                  <div className="text-2xl sm:text-4xl font-bold text-brand-blue mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-brand-muted">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="p-8 rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-brand-blue" />
                <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">Case Study</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: "#1A1A2E" }}>{page.caseStudy.title}</h3>
              <p className="text-sm text-brand-muted mb-2">{page.caseStudy.industry}</p>
              <p className="text-sm mb-6" style={{ color: "#4A4A6A" }}><strong>Challenge:</strong> {page.caseStudy.challenge}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {page.caseStudy.results.map((r, i) => (
                  <div key={i} className="p-4 rounded-lg bg-white border border-brand-blue/10 text-center">
                    <div className="text-lg sm:text-xl font-bold text-brand-blue mb-1">{r.value}</div>
                    <div className="text-xs text-brand-muted">{r.metric}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full border border-brand-blue/20 text-xs font-semibold text-brand-blue uppercase tracking-wider mb-4">Serving All 50 States</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: "#1A1A2E" }}>{page.title} Across Major US Cities</h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {page.cityTargeting.map((city, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="p-6 rounded-xl border border-gray-100 bg-white hover:border-brand-blue/20 hover:shadow-md transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-brand-blue" />
                    <h3 className="font-bold text-sm" style={{ color: "#1A1A2E" }}>{city.city}</h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#4A4A6A" }}>{city.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full border border-brand-blue/20 text-xs font-semibold text-brand-blue uppercase tracking-wider mb-4">FAQ</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: "#1A1A2E" }}>Frequently Asked Questions</h2>
            </div>
          </FadeIn>
          <div className="space-y-3">
            {page.faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <h2 className="text-xl sm:text-2xl font-bold" style={{ color: "#1A1A2E" }}>Related Services</h2>
              <Link href="/services">
                <span className="text-sm text-brand-blue font-semibold hover:underline flex items-center gap-1">
                  View All Services <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {page.internalLinks.map((link, i) => (
              <FadeIn key={i} delay={i * 0.03}>
                <Link href={`/${link.slug}`}>
                  <span className="block p-4 rounded-lg border border-gray-100 bg-white hover:border-brand-blue/20 hover:shadow-md transition-all text-center group">
                    <span className="text-xs sm:text-sm font-medium group-hover:text-brand-blue transition-colors" style={{ color: "#1A1A2E" }}>{link.text}</span>
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
          {page.relatedPages.length > 0 && (
            <FadeIn delay={0.2}>
              <div className="mt-8 p-6 rounded-xl bg-white border border-gray-100">
                <h3 className="font-bold text-sm mb-4" style={{ color: "#1A1A2E" }}>More USA-Focused Services</h3>
                <div className="flex flex-wrap gap-3">
                  {page.relatedPages.map((rp, i) => {
                    const label = rp.replace(/-/g, ' ').replace(/\busa\b/gi, 'USA').replace(/\b\w/g, c => c.toUpperCase());
                    return (
                      <Link key={i} href={`/${rp}`}>
                        <span className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-brand-blue/10 text-xs font-medium text-brand-blue hover:bg-brand-blue/5 transition-colors">
                          {label} <ArrowUpRight className="w-3 h-3" />
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-brand-blue via-brand-blue to-brand-violet text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border border-white/20 rounded-full" />
          <div className="absolute bottom-20 right-20 w-60 h-60 border border-white/10 rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 mb-6">
              <Star className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Free Audit Available</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Ready to Dominate Google in the USA?</h2>
            <p className="text-base sm:text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation marketing audit and discover exactly how our {page.title.toLowerCase()} services can grow your business. Results guaranteed or your money back.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <span className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-blue rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg text-sm sm:text-base">
                  Get Free Audit <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <a href="tel:+17034159373" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 rounded-lg font-semibold hover:bg-white/10 transition-all text-sm sm:text-base">
                <Phone className="w-4 h-4" /> Call (703) 415-9373
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
