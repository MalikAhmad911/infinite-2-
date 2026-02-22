import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Settings, TrendingUp, Award, ArrowRight, CheckCircle2 } from "lucide-react";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

const stepIcons = [Target, Settings, TrendingUp, Award];
const stepColors = [
  { bg: "bg-blue-500", light: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", glow: "shadow-blue-500/20" },
  { bg: "bg-violet-500", light: "bg-violet-50", text: "text-violet-600", border: "border-violet-200", glow: "shadow-violet-500/20" },
  { bg: "bg-emerald-500", light: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200", glow: "shadow-emerald-500/20" },
  { bg: "bg-amber-500", light: "bg-amber-50", text: "text-amber-600", border: "border-amber-200", glow: "shadow-amber-500/20" },
];

export default function WorkflowDiagram({ steps, category }: { steps: ProcessStep[]; category: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="w-full">
      <div className="hidden lg:block">
        <div className="relative">
          <svg className="absolute top-[52px] left-0 w-full h-[4px] z-0" preserveAspectRatio="none" viewBox="0 0 1000 4">
            <motion.line
              x1="60" y1="2" x2="940" y2="2"
              stroke="url(#flowGradient)" strokeWidth="3" strokeDasharray="8 4"
              initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}} transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="33%" stopColor="#8B5CF6" />
                <stop offset="66%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-4 gap-4 relative z-10">
            {steps.map((step, i) => {
              const Icon = stepIcons[i % stepIcons.length];
              const color = stepColors[i % stepColors.length];
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}>
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      className={`w-[104px] h-[104px] rounded-2xl ${color.light} border-2 ${color.border} flex items-center justify-center relative shadow-lg ${color.glow} mb-5`}
                      whileHover={{ scale: 1.08, y: -4 }}
                      transition={{ type: "spring", stiffness: 300 }}>
                      <Icon className={`w-8 h-8 ${color.text}`} />
                      <div className={`absolute -top-2.5 -right-2.5 w-7 h-7 ${color.bg} rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md`}>
                        {step.step}
                      </div>
                    </motion.div>
                    <h4 className="font-bold text-sm mb-2" style={{ color: "#1A1A2E" }}>{step.title}</h4>
                    <p className="text-xs leading-relaxed max-w-[200px]" style={{ color: "#6B6B8B" }}>{step.description}</p>
                  </div>

                  {i < steps.length - 1 && (
                    <motion.div
                      className="hidden lg:flex absolute right-0 top-[52px] translate-x-1/2 -translate-y-1/2"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.8 + i * 0.2 }}
                      style={{ left: `${(i + 1) * 25}%`, position: "absolute" }}>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="flex items-center justify-center gap-3 mt-8 pt-6 border-t border-dashed border-gray-200"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1.5 }}>
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className={`w-3.5 h-3.5 ${stepColors[i].text}`} />
                <span className="text-[11px] font-medium" style={{ color: "#6B6B8B" }}>{step.title}</span>
                {i < steps.length - 1 && <ArrowRight className="w-3 h-3 text-gray-300 ml-1" />}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="lg:hidden">
        <div className="relative pl-8">
          <div className="absolute left-[15px] top-0 bottom-0 w-[2px]">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-blue-400 via-violet-400 via-emerald-400 to-amber-400 rounded-full"
              initial={{ scaleY: 0, originY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            />
          </div>

          <div className="space-y-6">
            {steps.map((step, i) => {
              const Icon = stepIcons[i % stepIcons.length];
              const color = stepColors[i % stepColors.length];
              return (
                <motion.div key={i}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.2 }}>
                  <div className={`absolute left-[-24px] top-4 w-[30px] h-[30px] rounded-lg ${color.bg} flex items-center justify-center text-white text-xs font-bold shadow-md ${color.glow} z-10`}>
                    {step.step}
                  </div>
                  <div className={`p-4 rounded-xl border ${color.border} ${color.light} ml-4`}>
                    <div className="flex items-center gap-2.5 mb-2">
                      <Icon className={`w-4 h-4 ${color.text}`} />
                      <h4 className="font-bold text-sm" style={{ color: "#1A1A2E" }}>{step.title}</h4>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "#4A4A6A" }}>{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="mt-6 ml-4 flex items-center gap-2 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-100"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5 }}>
            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span className="text-xs font-medium" style={{ color: "#4A4A6A" }}>Complete workflow delivers measurable results</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
