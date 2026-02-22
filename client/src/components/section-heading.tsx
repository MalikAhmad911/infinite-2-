import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({ badge, title, subtitle, center = true, light = false }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className={`mb-12 lg:mb-14 ${center ? "text-center" : ""}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-blue/15 bg-brand-blue/5 text-brand-blue text-xs font-semibold uppercase tracking-widest">
            {badge}
          </span>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-heading font-bold tracking-tight"
        style={{ fontSize: "clamp(26px, 3vw, 40px)", fontFamily: "'Inter', sans-serif", color: "#1A1A2E" }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-3 max-w-2xl leading-relaxed ${center ? "mx-auto" : ""}`}
          style={{ fontSize: "clamp(14px, 1.1vw, 16px)", color: "#4A4A6A" }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
