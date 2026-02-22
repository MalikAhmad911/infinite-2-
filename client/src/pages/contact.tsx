import { Link } from "wouter";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  Phone, Mail, MapPin, ArrowRight, Clock, MessageCircle,
  Calendar, Send, CheckCircle2
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

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    desc: "Speak directly with our team",
    value: "(703) 415-9373",
    action: "Call Now",
    href: "tel:+17034159373",
  },
  {
    icon: Mail,
    title: "Email Us",
    desc: "Get a response within 24 hours",
    value: "contact@infiniterankers.io",
    action: "Send Email",
    href: "mailto:contact@infiniterankers.io",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    desc: "Come see our office",
    value: "203 N Caroline Pl, Dover, DE 19904, USA",
    action: "Get Directions",
    href: "https://maps.google.com/?q=203+N+Caroline+Pl+Dover+DE+19904",
  },
  {
    icon: Clock,
    title: "Business Hours",
    desc: "Monday - Friday",
    value: "9:00 AM - 6:00 PM EST",
    action: "Schedule Call",
  },
];

const faqs = [
  {
    q: "How long does it take to see results?",
    a: "SEO typically takes 3-6 months for significant results, while PPC can generate leads within the first week. We'll set clear expectations based on your specific goals and timeline."
  },
  {
    q: "What's included in the free audit?",
    a: "Our comprehensive audit includes website analysis, SEO health check, competitor analysis, Google Ads account review, and a custom strategy recommendation — all at no cost."
  },
  {
    q: "Do you require long-term contracts?",
    a: "No. While we recommend a minimum 6-month commitment for SEO, we offer flexible month-to-month agreements. Our 98% retention rate speaks for itself."
  },
  {
    q: "How much do your services cost?",
    a: "Our pricing varies based on your specific needs and goals. We offer packages starting from $1,500/month. Schedule a free consultation for a custom quote."
  },
  {
    q: "What industries do you work with?",
    a: "We serve all industries but specialize in local businesses including law firms, medical practices, restaurants, real estate, e-commerce, contractors, and more."
  },
];

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Contact Us - Get Your Free Marketing Audit | Infinite Rankers"
        description="Contact Infinite Rankers for a free digital marketing audit. Get expert recommendations to grow your business online. No obligations, response within 24 hours."
        canonical="https://infiniterankers.io/contact"
      />
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-brand-violet/5 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-blue text-xs font-semibold uppercase tracking-widest mb-4 sm:mb-6"
          >
            Contact Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-brand-dark tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 5vw, 4.5rem)" }}
          >
            Let's Start Your
            <br />
            <span className="text-gradient-blue">Growth Journey</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-brand-muted max-w-2xl mx-auto"
          >
            Get your free marketing audit and discover exactly how we can help your
            business grow online. No obligations, no pressure.
          </motion.p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <FadeIn>
                <div className="glass-card rounded-xl p-4 sm:p-6 lg:p-10">
                  <h2 className="font-heading font-bold text-brand-dark mb-2" style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)" }}>Get Your Free Audit</h2>
                  <p className="text-xs sm:text-sm text-brand-muted mb-6 sm:mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                  <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="text-xs sm:text-sm text-brand-muted font-medium mb-1.5 sm:mb-2 block">First Name</label>
                        <input
                          type="text"
                          data-testid="input-first-name"
                          placeholder="John"
                          className="w-full px-3 sm:px-4 py-3 min-h-[44px] rounded-md bg-white border border-brand-blue/10 text-brand-dark placeholder:text-brand-muted focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/20 transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-xs sm:text-sm text-brand-muted font-medium mb-1.5 sm:mb-2 block">Last Name</label>
                        <input
                          type="text"
                          data-testid="input-last-name"
                          placeholder="Doe"
                          className="w-full px-3 sm:px-4 py-3 min-h-[44px] rounded-md bg-white border border-brand-blue/10 text-brand-dark placeholder:text-brand-muted focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/20 transition-all text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs sm:text-sm text-brand-muted font-medium mb-1.5 sm:mb-2 block">Email Address</label>
                      <input
                        type="email"
                        data-testid="input-email"
                        placeholder="john@company.com"
                        className="w-full px-3 sm:px-4 py-3 min-h-[44px] rounded-md bg-white border border-brand-blue/10 text-brand-dark placeholder:text-brand-muted focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/20 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs sm:text-sm text-brand-muted font-medium mb-1.5 sm:mb-2 block">Phone Number</label>
                      <input
                        type="tel"
                        data-testid="input-phone"
                        placeholder="(555) 123-4567"
                        className="w-full px-3 sm:px-4 py-3 min-h-[44px] rounded-md bg-white border border-brand-blue/10 text-brand-dark placeholder:text-brand-muted focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/20 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs sm:text-sm text-brand-muted font-medium mb-1.5 sm:mb-2 block">Website URL</label>
                      <input
                        type="url"
                        data-testid="input-website"
                        placeholder="https://yourwebsite.com"
                        className="w-full px-3 sm:px-4 py-3 min-h-[44px] rounded-md bg-white border border-brand-blue/10 text-brand-dark placeholder:text-brand-muted focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/20 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs sm:text-sm text-brand-muted font-medium mb-1.5 sm:mb-2 block">What services are you interested in?</label>
                      <select
                        data-testid="select-service"
                        className="w-full px-3 sm:px-4 py-3 min-h-[44px] rounded-md bg-white border border-brand-blue/10 text-brand-muted focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/20 transition-all text-sm appearance-none"
                      >
                        <option value="">Select a service...</option>
                        <option value="seo">SEO Services</option>
                        <option value="ppc">PPC & Google Ads</option>
                        <option value="social">Social Media Marketing</option>
                        <option value="web">Web Design & Development</option>
                        <option value="content">Content Marketing</option>
                        <option value="email">Email Marketing</option>
                        <option value="full">Full-Service Package</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs sm:text-sm text-brand-muted font-medium mb-1.5 sm:mb-2 block">Tell us about your goals</label>
                      <textarea
                        data-testid="textarea-message"
                        rows={4}
                        placeholder="What are your main marketing challenges and goals?"
                        className="w-full px-3 sm:px-4 py-3 rounded-md bg-white border border-brand-blue/10 text-brand-dark placeholder:text-brand-muted focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/20 transition-all text-sm resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      data-testid="button-submit-form"
                      className="relative w-full inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[44px] bg-brand-blue text-white font-semibold rounded-md cursor-pointer group overflow-hidden"
                    >
                      <span className="relative z-10">Get My Free Audit</span>
                      <Send className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </button>
                  </form>

                  <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2 sm:gap-4 text-xs text-brand-muted">
                    <span className="flex items-center gap-1 min-h-[44px] sm:min-h-0"><CheckCircle2 className="w-3 h-3 text-green-500" /> Free consultation</span>
                    <span className="flex items-center gap-1 min-h-[44px] sm:min-h-0"><CheckCircle2 className="w-3 h-3 text-green-500" /> No obligation</span>
                    <span className="flex items-center gap-1 min-h-[44px] sm:min-h-0"><CheckCircle2 className="w-3 h-3 text-green-500" /> Response within 24hrs</span>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-2 space-y-3 sm:space-y-4">
              {contactMethods.map((method, i) => (
                <FadeIn key={method.title} delay={i * 0.08}>
                  <div className="glass-card glass-card-hover rounded-xl p-4 sm:p-5 lg:p-6 transition-all duration-300">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 rounded-md bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                        <method.icon className="w-5 h-5 text-brand-blue" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-heading font-semibold text-brand-dark text-sm">{method.title}</h3>
                        <p className="text-xs text-brand-muted mt-0.5">{method.desc}</p>
                        <p className="text-sm text-brand-dark-secondary mt-2 font-medium break-words">{method.value}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}

              <FadeIn delay={0.4}>
                <div className="glass-card rounded-xl p-4 sm:p-5 lg:p-6 mt-4 sm:mt-6">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <span className="text-sm text-brand-muted font-medium">Google Partner</span>
                  </div>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    As a certified Google Partner, we have access to exclusive tools, beta features,
                    and direct Google support to maximize your campaigns.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-32 bg-gradient-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="FAQs"
            title="Frequently Asked Questions"
            subtitle="Got questions? We've got answers."
          />
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="glass-card rounded-xl p-4 sm:p-5 lg:p-6">
                  <h3 className="font-heading font-semibold text-brand-dark mb-2 sm:mb-3" style={{ fontSize: "clamp(0.875rem, 1.5vw, 1rem)" }}>{faq.q}</h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
