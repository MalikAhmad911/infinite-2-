import { useParams, Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, Clock, ArrowRight, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import SEO from "@/components/seo";
import { getBlogBySlug, blogPosts } from "@/data/blog-data";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogBySlug(slug || "");

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-brand-dark mb-4">Post Not Found</h1>
          <Link href="/blog"><span className="text-brand-blue font-medium">← Back to Blog</span></Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  if (relatedPosts.length < 3) {
    const more = blogPosts.filter(p => p.slug !== post.slug && !relatedPosts.includes(p)).slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...more);
  }

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title={`${post.title} | Infinite Rankers Blog`}
        description={post.excerpt}
        canonical={`https://infiniterankers.io/${post.slug}`}
        ogImage={`https://infiniterankers.io${post.image}`}
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "image": `https://infiniterankers.io${post.image}`,
          "datePublished": post.date,
          "author": { "@type": "Organization", "name": "Infinite Rankers", "url": "https://infiniterankers.io" },
          "publisher": { "@type": "Organization", "name": "Infinite Rankers", "logo": { "@type": "ImageObject", "url": "https://infiniterankers.io/logo.webp" } },
          "mainEntityOfPage": { "@type": "WebPage", "@id": `https://infiniterankers.io/${post.slug}` }
        }}
      />

      <section className="relative pt-24 pb-8 sm:pt-32 sm:pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/[0.03] via-white to-brand-violet/[0.03]" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog">
            <motion.span
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue mb-6 sm:mb-8 cursor-pointer hover:underline"
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog
            </motion.span>
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <span className="inline-block px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-semibold rounded-full mb-4">
              {post.category}
            </span>
          </motion.div>

          <motion.h1
            className="font-bold text-brand-dark leading-[1.1] mb-4 sm:mb-6"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            {post.title}
          </motion.h1>

          <motion.div
            className="flex items-center gap-4 text-sm text-gray-500 mb-8"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime} read</span>
            <span>{post.date}</span>
            <span className="hidden sm:inline">By Infinite Rankers</span>
          </motion.div>
        </div>
      </section>

      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 mb-8 sm:mb-12">
        <motion.div
          className="rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 sm:h-64 lg:h-80 object-cover"
          />
        </motion.div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        {post.content.map((paragraph, i) => {
          const inlineImage = post.inlineImages?.find(img => img.afterParagraph === i);
          return (
            <div key={i}>
              <FadeIn delay={i * 0.05}>
                <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {paragraph}
                </p>
              </FadeIn>
              {inlineImage && (
                <FadeIn delay={i * 0.05 + 0.02}>
                  <div className="my-8 sm:my-10">
                    <img
                      src={inlineImage.src}
                      alt={inlineImage.alt}
                      className="w-full h-56 sm:h-72 lg:h-80 object-cover rounded-2xl shadow-md"
                      loading="lazy"
                    />
                    <p className="text-xs sm:text-sm text-gray-400 mt-2 text-center italic">{inlineImage.alt}</p>
                  </div>
                </FadeIn>
              )}
            </div>
          );
        })}

        <FadeIn>
          <div className="mt-10 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <img src="/logo.webp" alt="Infinite Rankers" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-semibold text-brand-dark text-sm">Infinite Rankers</p>
                  <p className="text-xs text-gray-500">Digital Marketing Experts</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 mr-1">Share:</span>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=https://infiniterankers.io/${post.slug}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-gray-100 transition-colors"><Facebook className="w-4 h-4 text-gray-500" /></a>
                <a href={`https://twitter.com/intent/tweet?url=https://infiniterankers.io/${post.slug}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-gray-100 transition-colors"><Twitter className="w-4 h-4 text-gray-500" /></a>
                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://infiniterankers.io/${post.slug}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-gray-100 transition-colors"><Linkedin className="w-4 h-4 text-gray-500" /></a>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 p-6 sm:p-8 bg-gradient-to-br from-brand-blue/5 to-brand-violet/5 rounded-2xl border border-brand-blue/10">
            <h3 className="text-lg sm:text-xl font-bold text-brand-dark mb-2">Ready to Grow Your Business?</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">Get a free marketing audit and discover how we can help you achieve results like these.</p>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white font-semibold rounded-xl hover:bg-brand-blue/90 transition-colors min-h-[44px] cursor-pointer">
                Get Free Audit <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </FadeIn>
      </article>

      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-8">Related Articles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((rp, i) => (
                <FadeIn key={rp.slug} delay={i * 0.1}>
                  <Link href={`/${rp.slug}`}>
                    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                      <div className="relative h-40 sm:h-48 overflow-hidden">
                        <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <span className="absolute top-3 left-3 px-2 py-0.5 bg-white/90 backdrop-blur text-xs font-semibold rounded-full text-brand-blue">{rp.category}</span>
                      </div>
                      <div className="p-4 sm:p-5">
                        <h3 className="font-bold text-brand-dark text-sm sm:text-base leading-snug mb-2 group-hover:text-brand-blue transition-colors line-clamp-2">{rp.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-500 line-clamp-2 mb-3">{rp.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>{rp.date}</span>
                          <span>{rp.readTime} read</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
