import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight, CheckCircle2, Target, Zap, Users, Award,
  Globe, TrendingUp, Heart, Shield, Lightbulb, Rocket
} from "lucide-react";
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

const values = [
  { icon: Target, title: "Results-Driven", desc: "Every strategy is laser-focused on delivering measurable ROI for your business" },
  { icon: Heart, title: "Client-First", desc: "Your success is our success. We treat every client's business like our own" },
  { icon: Shield, title: "Transparency", desc: "No hidden fees, no jargon. Clear reporting and honest communication always" },
  { icon: Lightbulb, title: "Innovation", desc: "We stay ahead of trends to give you a competitive edge in your market" },
  { icon: Rocket, title: "Speed", desc: "Fast implementation with no shortcuts. We move quickly without compromising quality" },
  { icon: Users, title: "Collaboration", desc: "We work as an extension of your team, not just another vendor" },
];

const timeline = [
  { year: "2019", title: "Founded", desc: "Started with a mission to help local businesses compete online" },
  { year: "2020", title: "100 Clients", desc: "Reached our first 100 clients and became a Google Partner" },
  { year: "2022", title: "50+ Team Members", desc: "Expanded our team of specialists across all digital marketing disciplines" },
  { year: "2024", title: "500+ Clients", desc: "Serving over 500 businesses with $50M+ in generated revenue" },
  { year: "2025", title: "Industry Leader", desc: "Recognized as one of the top digital marketing agencies in the USA" },
];

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="About Us - Infinite Rankers | USA's Data-Driven Marketing Agency"
        description="Learn about Infinite Rankers — a certified Google Partner agency helping 500+ businesses grow with data-driven digital marketing strategies since 2019."
        canonical="https://infiniterankers.io/about"
      />
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-brand-violet/5 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-blue text-xs font-semibold uppercase tracking-widest mb-4 sm:mb-6"
          >
            About Infinite Rankers
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-brand-dark tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 5vw, 4.5rem)" }}
          >
            Built for Growth.
            <br />
            <span className="text-gradient-blue">Driven by Data.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-brand-muted max-w-2xl mx-auto"
          >
            We're a team of digital marketing experts, data scientists, and creative thinkers
            dedicated to helping local businesses achieve extraordinary online growth.
          </motion.p>
        </div>
      </section>

      <section className="py-12 sm:py-16 border-y border-brand-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8">
            <AnimatedCounter end={500} suffix="+" label="Clients Served" />
            <AnimatedCounter end={6} suffix="+" label="Years Experience" />
            <AnimatedCounter end={100} suffix="+" label="Services" />
            <AnimatedCounter end={98} suffix="%" label="Retention Rate" />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <FadeIn>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-blue text-xs font-semibold uppercase tracking-widest mb-4 sm:mb-6">
                Our Story
              </span>
              <h2 className="font-heading font-bold text-brand-dark tracking-tight leading-tight" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}>
                From Startup to
                <br />
                <span className="text-gradient-blue">Industry Leader</span>
              </h2>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-brand-muted leading-relaxed">
                Infinite Rankers was founded in 2019 with a simple belief: every local business
                deserves access to world-class digital marketing. What started as a small team of
                passionate marketers has grown into one of the most trusted digital marketing
                agencies in the USA.
              </p>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-brand-muted leading-relaxed">
                As a certified Google Partner, we leverage cutting-edge technology, data analytics,
                and proven strategies to deliver measurable results. We've helped over 500 businesses
                generate more than $50 million in revenue through our comprehensive suite of 100+
                digital marketing services.
              </p>
              <div className="flex items-center gap-2 mt-4 sm:mt-6 px-4 py-2.5 rounded-md border border-brand-blue/10 bg-brand-blue/5 w-fit">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="text-sm text-brand-muted font-medium">Certified Google Partner</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-4 sm:space-y-6">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    className="flex gap-3 sm:gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-brand-blue flex-shrink-0 mt-1.5" />
                      {i < timeline.length - 1 && <div className="w-px h-full bg-brand-blue/10 mt-2" />}
                    </div>
                    <div className="pb-4 sm:pb-6">
                      <span className="font-stat text-lg sm:text-xl text-brand-blue tracking-wider">{item.year}</span>
                      <h3 className="font-heading font-semibold text-brand-dark mt-1 text-sm sm:text-base">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-brand-muted mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-32 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Values"
            title="What Drives Us Every Day"
            subtitle="These core values guide everything we do for our clients."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div className="glass-card glass-card-hover rounded-xl p-4 sm:p-5 lg:p-6 h-full transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-brand-blue/10 flex items-center justify-center mb-3 sm:mb-4">
                    <v.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-blue" />
                  </div>
                  <h3 className="font-heading font-semibold text-brand-dark mb-1 sm:mb-2" style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}>{v.title}</h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-32 relative overflow-hidden bg-gradient-cta noise-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[150px] animate-blob-1" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-heading font-bold text-brand-dark tracking-tight" style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}>
              Ready to Work With the Best?
            </h2>
            <p className="mt-3 sm:mt-4 text-brand-muted text-sm sm:text-base lg:text-lg max-w-xl mx-auto">
              Join 500+ businesses that trust Infinite Rankers to drive their growth.
            </p>
            <div className="mt-6 sm:mt-8">
              <Link href="/contact">
                <span className="relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 min-h-[44px] bg-brand-blue text-white font-semibold rounded-md cursor-pointer group overflow-hidden">
                  <span className="relative z-10">Get Started Today</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                </span>
              </Link>
            </div>
            <a href="https://infiniterankers.io" target="_blank" rel="noopener noreferrer" className="mt-4 sm:mt-6 inline-block text-sm text-brand-muted hover:text-brand-blue transition-colors min-h-[44px] flex items-center justify-center" data-testid="link-about-site">Visit infiniterankers.io →</a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
