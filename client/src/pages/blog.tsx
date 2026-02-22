import { useState, useMemo, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Clock, ChevronRight, Search } from "lucide-react";
import SEO from "@/components/seo";
import { blogPosts } from "@/data/blog-data";

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

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return blogPosts;
    return blogPosts.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const featured = filtered.filter(p => p.featured);
  const nonFeatured = filtered.filter(p => !p.featured);

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Digital Marketing Blog & Insights | Infinite Rankers"
        description="Expert digital marketing strategies, SEO tips, PPC guides, and industry insights from Infinite Rankers. Stay ahead with actionable marketing knowledge."
        canonical="https://infiniterankers.com/blog"
      />
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-blue text-xs font-semibold uppercase tracking-widest mb-4 sm:mb-6"
          >
            Blog & Insights
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-brand-dark tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 5vw, 4.5rem)" }}
          >
            Marketing Insights
            <br />
            <span className="text-gradient-blue">That Drive Growth</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-brand-muted max-w-2xl mx-auto"
          >
            Expert strategies, actionable tips, and industry insights from our team of
            digital marketing specialists.
          </motion.p>
        </div>
      </section>

      <section className="pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-all min-h-[44px] ${
                  cat === activeCategory
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

      <section className="py-8 sm:py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {featured.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
              {featured.map((post, i) => (
                <FadeIn key={post.slug} delay={i * 0.1}>
                  <Link href={`/${post.slug}`}>
                    <div className="rounded-xl overflow-hidden group cursor-pointer h-full transition-all duration-300 border border-gray-100 bg-white hover:shadow-lg hover:border-brand-blue/10">
                      <div className="h-40 sm:h-48 lg:h-52 relative overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                          <span className="px-2 py-1 rounded bg-white/90 backdrop-blur text-brand-blue text-xs font-semibold">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-4 sm:p-5 lg:p-6">
                        <div className="flex items-center gap-3 text-xs text-brand-muted mb-2 sm:mb-3">
                          <span>{post.date}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {post.readTime}
                          </span>
                        </div>
                        <h3 className="font-heading font-semibold text-brand-dark mb-2 sm:mb-3 group-hover:text-brand-blue transition-colors leading-snug" style={{ fontSize: "clamp(0.938rem, 1.5vw, 1.125rem)" }}>
                          {post.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-3 sm:mb-4">
                          {post.excerpt}
                        </p>
                        <span className="text-sm text-brand-blue font-medium flex items-center gap-1 min-h-[44px]">
                          Read Article <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          )}

          <div className="space-y-3 sm:space-y-4">
            {nonFeatured.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.05}>
                <Link href={`/${post.slug}`}>
                  <div className="rounded-xl p-4 sm:p-5 lg:p-6 group cursor-pointer transition-all duration-300 border border-gray-100 bg-white hover:shadow-md hover:border-brand-blue/10">
                    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-5">
                      <div className="w-full sm:w-32 lg:w-40 flex-shrink-0">
                        <img src={post.image} alt={post.title} className="w-full h-24 sm:h-20 lg:h-24 object-cover rounded-lg" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                          <span className="px-2 py-0.5 rounded bg-brand-blue/10 text-brand-blue text-xs font-semibold">
                            {post.category}
                          </span>
                          <span className="text-xs text-brand-muted">{post.date}</span>
                          <span className="text-xs text-brand-muted flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {post.readTime}
                          </span>
                        </div>
                        <h3 className="font-heading font-semibold text-brand-dark mb-1 sm:mb-2 group-hover:text-brand-blue transition-colors" style={{ fontSize: "clamp(0.875rem, 1.3vw, 1rem)" }}>
                          {post.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">{post.excerpt}</p>
                      </div>
                      <div className="flex-shrink-0 self-center hidden sm:block">
                        <span className="text-sm text-brand-blue font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          Read <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <a href="https://infiniterankers.com" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-muted hover:text-brand-blue transition-colors min-h-[44px] inline-flex items-center">Read more at infiniterankers.com →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
