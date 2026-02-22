import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import {
  Search, ArrowRight, Phone
} from "lucide-react";
import SEO from "@/components/seo";
import { getAllServices } from "@/data/services-data";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  );
}

const categoryColors: Record<string, { text: string; bg: string; border: string }> = {
  "SEO": { text: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" },
  "PPC": { text: "text-violet-600", bg: "bg-violet-50", border: "border-violet-200" },
  "Social Media": { text: "text-pink-600", bg: "bg-pink-50", border: "border-pink-200" },
  "Content Marketing": { text: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
  "Web Design": { text: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-200" },
  "Email Marketing": { text: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200" },
  "Video Marketing": { text: "text-red-600", bg: "bg-red-50", border: "border-red-200" },
  "Reputation Management": { text: "text-teal-600", bg: "bg-teal-50", border: "border-teal-200" },
  "CRO": { text: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200" },
  "Analytics": { text: "text-cyan-600", bg: "bg-cyan-50", border: "border-cyan-200" },
  "Lead Generation": { text: "text-lime-600", bg: "bg-lime-50", border: "border-lime-200" },
  "Specialized Services": { text: "text-purple-600", bg: "bg-purple-50", border: "border-purple-200" },
};

export default function Services() {
  const allServices = getAllServices();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(allServices.map(s => s.category)));
    return ["All", ...cats];
  }, [allServices]);

  const filtered = useMemo(() => {
    return allServices.filter(s => {
      const matchesCategory = activeCategory === "All" || s.category === activeCategory;
      const matchesSearch = searchQuery === "" ||
        s.h1.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.slug.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [allServices, activeCategory, searchQuery]);

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="100+ Digital Marketing Services | Infinite Rankers — Google Partner Agency"
        description="Explore 100+ digital marketing services including SEO, PPC, social media, web design, content marketing, and more. Full-service Google Partner agency in the USA."
        canonical="https://infiniterankers.com/services"
      />

      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/[0.03] via-white to-brand-violet/[0.03]" />
        <div className="absolute inset-0 noise-bg opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/15 bg-brand-blue/5 text-brand-blue text-xs font-semibold uppercase tracking-widest mb-6">
            100+ Services
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-bold tracking-tight" style={{ fontSize: "clamp(36px, 5vw, 64px)", color: "#1A1A2E" }}>
            Everything You Need{" "}
            <span className="text-gradient-blue">Under One Roof</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="mt-5 text-lg max-w-2xl mx-auto" style={{ color: "#4A4A6A" }}>
            From SEO to social media, PPC to web design — we offer a complete suite of
            digital marketing services to help your business grow.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="mt-8 max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] text-sm focus:outline-none focus:border-brand-blue/30 focus:ring-2 focus:ring-brand-blue/10 transition-all"
              style={{ color: "#1A1A2E" }}
            />
          </motion.div>
        </div>
      </section>

      <section className="pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => {
              const colors = categoryColors[cat] || { text: "text-gray-600", bg: "bg-gray-50", border: "border-gray-200" };
              const isActive = activeCategory === cat;
              return (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                    isActive
                      ? `${colors.bg} ${colors.text} ${colors.border}`
                      : "bg-white text-gray-500 border-gray-100 hover:border-gray-200"
                  }`}>
                  {cat}
                  {cat !== "All" && (
                    <span className="ml-1.5 opacity-60">
                      ({allServices.filter(s => s.category === cat).length})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg font-medium" style={{ color: "#4A4A6A" }}>No services found matching your search.</p>
              <button onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                className="mt-4 text-brand-blue font-medium text-sm">Clear filters</button>
            </div>
          ) : (
            <>
              <p className="text-sm mb-6" style={{ color: "#6B6B8B" }}>
                Showing {filtered.length} service{filtered.length !== 1 ? "s" : ""}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filtered.map((service, i) => {
                  const colors = categoryColors[service.category] || { text: "text-gray-600", bg: "bg-gray-50", border: "border-gray-200" };
                  return (
                    <FadeIn key={service.slug} delay={Math.min(i * 0.03, 0.3)}>
                      <Link href={`/${service.slug}`}>
                        <div className="group p-5 rounded-xl border border-gray-100 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(58,95,191,0.1)] hover:-translate-y-1 hover:border-brand-blue/20 transition-all duration-300 cursor-pointer h-full">
                          <div className={`inline-flex items-center px-2 py-0.5 rounded-full ${colors.bg} ${colors.text} text-[10px] font-semibold uppercase tracking-wider mb-3`}>
                            {service.category}
                          </div>
                          <h3 className="font-semibold text-sm leading-snug mb-2 group-hover:text-brand-blue transition-colors" style={{ color: "#1A1A2E" }}>
                            {service.h1.length > 50 ? service.h1.substring(0, 50) + "..." : service.h1}
                          </h3>
                          <p className="text-xs leading-relaxed line-clamp-2 mb-3" style={{ color: "#6B6B8B" }}>
                            {service.subheading}
                          </p>
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity">
                            Learn More <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </Link>
                    </FadeIn>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-brand-violet/4 to-brand-blue-light/3" />
        <div className="absolute inset-0 noise-bg" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-bold tracking-tight mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", color: "#1A1A2E" }}>
              Not Sure Which Service You Need?
            </h2>
            <p className="text-lg max-w-xl mx-auto mb-8" style={{ color: "#4A4A6A" }}>
              Our experts will analyze your business and recommend the perfect strategy — completely free.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <span className="relative inline-flex items-center gap-2 px-7 py-3.5 bg-brand-blue text-white font-semibold rounded-lg group overflow-hidden shadow-[0_4px_20px_rgba(58,95,191,0.3)]">
                  <span className="relative z-10">Get Your Free Audit</span>
                  <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer" />
                </span>
              </Link>
              <a href="tel:+17034159373" className="inline-flex items-center gap-2 font-medium hover:text-brand-blue transition-colors" style={{ color: "#4A4A6A" }}>
                <Phone className="w-4 h-4" /> (703) 415-9373
              </a>
            </div>
            <a href="https://infiniterankers.com" target="_blank" rel="noopener noreferrer"
              className="mt-8 inline-block text-sm hover:text-brand-blue transition-colors" style={{ color: "#6B6B8B" }}>
              Visit infiniterankers.com →
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
