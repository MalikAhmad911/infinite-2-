import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Clock, ChevronRight, Search } from "lucide-react";
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

const categories = ["All", "SEO", "PPC", "Social Media", "Content", "Web Design", "Email", "Analytics"];

const blogPosts = [
  {
    category: "SEO",
    title: "10 Local SEO Strategies That Will Dominate in 2025",
    excerpt: "Discover the most effective local SEO tactics to outrank your competitors and attract more customers in your area.",
    readTime: "8 min",
    date: "Jan 15, 2025",
    featured: true,
  },
  {
    category: "PPC",
    title: "How to Cut Your Google Ads Spend by 40% Without Losing Leads",
    excerpt: "Learn the advanced bidding strategies and campaign structures that top agencies use to maximize every ad dollar.",
    readTime: "6 min",
    date: "Jan 12, 2025",
    featured: true,
  },
  {
    category: "Social Media",
    title: "The Complete Guide to Instagram Marketing for Local Businesses",
    excerpt: "Step-by-step guide to building a strong Instagram presence that drives real customers to your local business.",
    readTime: "10 min",
    date: "Jan 10, 2025",
    featured: true,
  },
  {
    category: "Content",
    title: "Content Marketing ROI: How to Measure What Actually Matters",
    excerpt: "Stop guessing and start measuring. Here's exactly how to calculate the true ROI of your content marketing efforts.",
    readTime: "7 min",
    date: "Jan 8, 2025",
  },
  {
    category: "Web Design",
    title: "Why Your Website Is Killing Your Conversions (And How to Fix It)",
    excerpt: "Common website design mistakes that are costing you leads and the UX principles that will dramatically improve your conversion rate.",
    readTime: "9 min",
    date: "Jan 5, 2025",
  },
  {
    category: "SEO",
    title: "Technical SEO Checklist: 50 Points Every Website Needs",
    excerpt: "The comprehensive technical SEO audit checklist used by our team to ensure every client's website is fully optimized.",
    readTime: "12 min",
    date: "Jan 3, 2025",
  },
  {
    category: "Email",
    title: "Email Marketing Automation: 5 Sequences That Generate Revenue on Autopilot",
    excerpt: "Set up these five email sequences once and watch them generate leads and sales while you sleep.",
    readTime: "8 min",
    date: "Dec 28, 2024",
  },
  {
    category: "Analytics",
    title: "Google Analytics 4: The Definitive Setup Guide for Marketers",
    excerpt: "Everything you need to know about setting up GA4 properly so you can make smarter, data-driven marketing decisions.",
    readTime: "11 min",
    date: "Dec 25, 2024",
  },
  {
    category: "PPC",
    title: "Performance Max Campaigns: The Ultimate Guide for 2025",
    excerpt: "Master Google's most powerful campaign type with our comprehensive guide to Performance Max optimization.",
    readTime: "9 min",
    date: "Dec 22, 2024",
  },
];

export default function Blog() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Digital Marketing Blog & Insights | Infinite Rankers"
        description="Expert digital marketing strategies, SEO tips, PPC guides, and industry insights from Infinite Rankers. Stay ahead with actionable marketing knowledge."
      />
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-blue text-xs font-semibold uppercase tracking-widest mb-6"
          >
            Blog & Insights
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-7xl text-brand-dark tracking-tight"
          >
            Marketing Insights
            <br />
            <span className="text-gradient-blue">That Drive Growth</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-brand-muted max-w-2xl mx-auto"
          >
            Expert strategies, actionable tips, and industry insights from our team of
            digital marketing specialists.
          </motion.p>
        </div>
      </section>

      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                data-testid={`filter-${cat.toLowerCase()}`}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  cat === "All"
                    ? "bg-brand-blue text-white"
                    : "bg-brand-blue/5 text-brand-muted hover:text-brand-dark hover:bg-brand-blue/10 border border-brand-blue/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogPosts.filter(p => p.featured).length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
              {blogPosts.filter(p => p.featured).map((post, i) => (
                <FadeIn key={post.title} delay={i * 0.1}>
                  <div className="glass-card rounded-xl overflow-hidden group cursor-pointer h-full transition-all duration-300 hover:border-brand-blue/10">
                    <div className="h-52 bg-gradient-to-br from-brand-blue/5 via-brand-violet/5 to-brand-blue-light/5 relative overflow-hidden">
                      <div className="absolute inset-0 noise-bg" />
                      <div className="absolute inset-0 grid-bg opacity-30" />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="px-2 py-1 rounded bg-brand-blue/15 text-brand-blue text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-brand-muted mb-3">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-heading font-semibold text-brand-dark text-lg mb-3 group-hover:text-brand-blue transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-sm text-brand-muted leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <span className="text-sm text-brand-blue font-medium flex items-center gap-1">
                        Read Article <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}

          <div className="space-y-4">
            {blogPosts.filter(p => !p.featured).map((post, i) => (
              <FadeIn key={post.title} delay={i * 0.05}>
                <div className="glass-card glass-card-hover rounded-xl p-6 group cursor-pointer transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-0.5 rounded bg-brand-blue/10 text-brand-blue text-xs font-semibold">
                          {post.category}
                        </span>
                        <span className="text-xs text-brand-muted">{post.date}</span>
                        <span className="text-xs text-brand-muted flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-heading font-semibold text-brand-dark text-base mb-2 group-hover:text-brand-blue transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-brand-muted leading-relaxed">{post.excerpt}</p>
                    </div>
                    <div className="flex-shrink-0 self-center">
                      <span className="text-sm text-brand-blue font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Read <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://infiniterankers.io" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-muted hover:text-brand-blue transition-colors" data-testid="link-blog-site">Read more at infiniterankers.io →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
