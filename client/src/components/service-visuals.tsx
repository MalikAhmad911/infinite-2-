import { motion } from "framer-motion";

const barVariants = {
  hidden: { scaleY: 0 },
  visible: (i: number) => ({
    scaleY: 1,
    transition: { delay: 0.8 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: 0.6 + i * 0.08, duration: 0.5 },
  }),
};

const slideIn = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function CardShell({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideIn}
      className="w-full max-w-md bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden"
    >
      {children}
    </motion.div>
  );
}

export function AnalyticsDashboard() {
  const bars = [45, 62, 38, 75, 55, 85, 68];
  return (
    <CardShell>
      <div className="px-5 pt-5 pb-2 flex items-center justify-between">
        <span className="font-semibold text-sm" style={{ color: "#1A1A2E" }}>Marketing Analytics</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-green-50 text-green-600 font-medium">Live Dashboard</span>
      </div>
      <div className="px-5 grid grid-cols-3 gap-3 mb-4">
        {[{ label: "Visitors", val: "+18%"}, { label: "Conversion", val: "+8.2%"}, { label: "Revenue", val: "+22%"}].map((s, i) => (
          <motion.div key={s.label} custom={i} variants={fadeUp} initial="hidden" animate="visible" className="bg-gray-50 rounded-lg p-2.5">
            <div className="text-[10px] text-gray-400 mb-1">{s.label}</div>
            <div className="text-sm font-semibold text-brand-blue">{s.val}</div>
          </motion.div>
        ))}
      </div>
      <div className="px-5 pb-2">
        <div className="text-xs font-medium mb-2" style={{ color: "#4A4A6A" }}>Traffic Overview</div>
        <div className="flex items-end gap-1.5 h-24">
          {bars.map((h, i) => (
            <motion.div key={i} custom={i} variants={barVariants} initial="hidden" animate="visible"
              className="flex-1 rounded-t-md bg-gradient-to-t from-brand-blue to-brand-violet" style={{ height: `${h}%`, originY: 1 }} />
          ))}
        </div>
      </div>
      <div className="px-5 py-3 border-t border-gray-50">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-gray-400">Trend</span>
          <motion.div initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-5 h-5 border-2 border-brand-blue/30 border-t-brand-blue rounded-full" />
        </div>
        <svg viewBox="0 0 200 40" className="w-full h-8 mt-1">
          <motion.path d="M0,35 C30,30 50,15 80,20 C110,25 130,8 160,12 C180,15 195,5 200,8"
            fill="none" stroke="#6B8FD4" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }} />
        </svg>
      </div>
    </CardShell>
  );
}

export function AdMetrics() {
  return (
    <CardShell>
      <div className="px-5 pt-5 pb-2 flex items-center justify-between">
        <span className="font-semibold text-sm" style={{ color: "#1A1A2E" }}>Ad Performance</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-brand-blue font-medium">Google Ads</span>
      </div>
      <div className="px-5 grid grid-cols-2 gap-3 mb-4">
        {[{ label: "CTR", val: "4.8%", change: "+1.2%" }, { label: "CPC", val: "$1.24", change: "-18%" },
          { label: "Conversions", val: "342", change: "+45%" }, { label: "ROAS", val: "5.2x", change: "+0.8x" }].map((s, i) => (
          <motion.div key={s.label} custom={i} variants={fadeUp} initial="hidden" animate="visible"
            className="bg-gray-50 rounded-lg p-3">
            <div className="text-[10px] text-gray-400">{s.label}</div>
            <div className="text-lg font-bold" style={{ color: "#1A1A2E" }}>{s.val}</div>
            <div className="text-[10px] font-medium text-green-500">{s.change}</div>
          </motion.div>
        ))}
      </div>
      <div className="px-5 pb-4">
        <div className="text-xs font-medium mb-2" style={{ color: "#4A4A6A" }}>Spend vs Revenue</div>
        <div className="relative h-20">
          <svg viewBox="0 0 200 60" className="w-full h-full">
            <motion.path d="M0,50 C40,45 60,30 100,25 C140,20 170,10 200,5"
              fill="none" stroke="#8B5CF6" strokeWidth="2.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }} />
            <motion.path d="M0,55 C40,52 60,48 100,42 C140,36 170,30 200,22"
              fill="none" stroke="#3A5FBF" strokeWidth="2" strokeDasharray="4,4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }} />
          </svg>
        </div>
      </div>
      <div className="px-5 py-3 border-t border-gray-50 flex items-center justify-between">
        <span className="text-[10px] text-gray-400">Budget Utilization</span>
        <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <motion.div className="h-full bg-gradient-to-r from-brand-blue to-brand-violet rounded-full"
            initial={{ width: 0 }} animate={{ width: "78%" }} transition={{ delay: 1.5, duration: 1 }} />
        </div>
      </div>
    </CardShell>
  );
}

export function SocialEngagement() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const values = [320, 480, 420, 650, 580, 890, 720];
  const max = Math.max(...values);
  return (
    <CardShell>
      <div className="px-5 pt-5 pb-2 flex items-center justify-between">
        <span className="font-semibold text-sm" style={{ color: "#1A1A2E" }}>Social Engagement</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-pink-50 text-pink-500 font-medium">This Week</span>
      </div>
      <div className="px-5 grid grid-cols-3 gap-2 mb-4">
        {[{ label: "Followers", val: "12.4K", icon: "👥" }, { label: "Engagement", val: "6.8%", icon: "💬" }, { label: "Reach", val: "89K", icon: "📡" }].map((s, i) => (
          <motion.div key={s.label} custom={i} variants={fadeUp} initial="hidden" animate="visible" className="bg-gray-50 rounded-lg p-2 text-center">
            <div className="text-base mb-0.5">{s.icon}</div>
            <div className="text-sm font-bold" style={{ color: "#1A1A2E" }}>{s.val}</div>
            <div className="text-[9px] text-gray-400">{s.label}</div>
          </motion.div>
        ))}
      </div>
      <div className="px-5 pb-4">
        <div className="text-xs font-medium mb-2" style={{ color: "#4A4A6A" }}>Engagement Heatmap</div>
        <div className="flex items-end gap-1 h-20">
          {values.map((v, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <motion.div custom={i} variants={barVariants} initial="hidden" animate="visible"
                className="w-full rounded-t-sm bg-gradient-to-t from-pink-400 to-brand-violet" style={{ height: `${(v / max) * 100}%`, originY: 1 }} />
              <span className="text-[8px] text-gray-400">{days[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </CardShell>
  );
}

export function ContentCalendar() {
  const posts = [
    { type: "Blog", title: "SEO Guide 2026", status: "Published", color: "bg-green-500" },
    { type: "Video", title: "Client Success Story", status: "Scheduled", color: "bg-blue-500" },
    { type: "Social", title: "Industry Tips Thread", status: "Draft", color: "bg-yellow-500" },
    { type: "Email", title: "Monthly Newsletter", status: "In Review", color: "bg-purple-500" },
  ];
  return (
    <CardShell>
      <div className="px-5 pt-5 pb-2 flex items-center justify-between">
        <span className="font-semibold text-sm" style={{ color: "#1A1A2E" }}>Content Pipeline</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-medium">12 Queued</span>
      </div>
      <div className="px-5 pb-4 space-y-2">
        {posts.map((p, i) => (
          <motion.div key={p.title} custom={i} variants={fadeUp} initial="hidden" animate="visible"
            className="flex items-center gap-3 p-2.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className={`w-2 h-2 rounded-full ${p.color}`} />
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold truncate" style={{ color: "#1A1A2E" }}>{p.title}</div>
              <div className="text-[10px] text-gray-400">{p.type}</div>
            </div>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-white border border-gray-100 text-gray-500 whitespace-nowrap">{p.status}</span>
          </motion.div>
        ))}
      </div>
      <div className="px-5 py-3 border-t border-gray-50">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-gray-400">Content Score</span>
          <span className="text-xs font-bold text-green-500">A+</span>
        </div>
        <div className="w-full h-1.5 bg-gray-100 rounded-full mt-1.5 overflow-hidden">
          <motion.div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
            initial={{ width: 0 }} animate={{ width: "92%" }} transition={{ delay: 1.5, duration: 1 }} />
        </div>
      </div>
    </CardShell>
  );
}

export function DesignPreview() {
  return (
    <CardShell>
      <div className="px-5 pt-5 pb-2 flex items-center justify-between">
        <span className="font-semibold text-sm" style={{ color: "#1A1A2E" }}>Design System</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-violet-50 text-brand-violet font-medium">Live Preview</span>
      </div>
      <div className="px-5 pb-3">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="bg-gradient-to-br from-brand-blue/5 to-brand-violet/5 rounded-xl p-4 mb-3">
          <div className="flex gap-1.5 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="space-y-2">
            <div className="h-3 w-3/4 bg-brand-blue/15 rounded" />
            <div className="h-2 w-full bg-gray-200/60 rounded" />
            <div className="h-2 w-5/6 bg-gray-200/60 rounded" />
            <div className="flex gap-2 mt-3">
              <div className="h-6 w-16 bg-brand-blue rounded-md" />
              <div className="h-6 w-16 bg-gray-200 rounded-md" />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="px-5 pb-4 grid grid-cols-4 gap-2">
        {["#3A5FBF", "#8B5CF6", "#6B8FD4", "#1A1A2E"].map((c, i) => (
          <motion.div key={c} custom={i + 2} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg shadow-sm" style={{ background: c }} />
            <span className="text-[8px] text-gray-400">{c}</span>
          </motion.div>
        ))}
      </div>
      <div className="px-5 py-3 border-t border-gray-50 flex items-center justify-between">
        <span className="text-[10px] text-gray-400">Mobile Score</span>
        <div className="flex items-center gap-1">
          <span className="text-xs font-bold text-green-500">98</span>
          <span className="text-[9px] text-gray-400">/100</span>
        </div>
      </div>
    </CardShell>
  );
}

export function EmailStats() {
  return (
    <CardShell>
      <div className="px-5 pt-5 pb-2 flex items-center justify-between">
        <span className="font-semibold text-sm" style={{ color: "#1A1A2E" }}>Email Campaign</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 font-medium">Active</span>
      </div>
      <div className="px-5 grid grid-cols-2 gap-3 mb-4">
        {[{ label: "Open Rate", val: "38.2%", trend: "↑ 12%" }, { label: "Click Rate", val: "8.7%", trend: "↑ 3.4%" },
          { label: "Subscribers", val: "24.5K", trend: "↑ 890" }, { label: "Revenue", val: "$18.4K", trend: "↑ 22%" }].map((s, i) => (
          <motion.div key={s.label} custom={i} variants={fadeUp} initial="hidden" animate="visible" className="bg-gray-50 rounded-lg p-2.5">
            <div className="text-[10px] text-gray-400">{s.label}</div>
            <div className="text-base font-bold" style={{ color: "#1A1A2E" }}>{s.val}</div>
            <div className="text-[10px] font-medium text-green-500">{s.trend}</div>
          </motion.div>
        ))}
      </div>
      <div className="px-5 pb-4">
        <div className="text-xs font-medium mb-2" style={{ color: "#4A4A6A" }}>Delivery Funnel</div>
        <div className="space-y-1.5">
          {[{ label: "Sent", pct: 100 }, { label: "Delivered", pct: 97 }, { label: "Opened", pct: 38 }, { label: "Clicked", pct: 8.7 }].map((s, i) => (
            <motion.div key={s.label} custom={i + 2} variants={fadeUp} initial="hidden" animate="visible" className="flex items-center gap-2">
              <span className="text-[9px] text-gray-400 w-14">{s.label}</span>
              <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
                  initial={{ width: 0 }} animate={{ width: `${s.pct}%` }} transition={{ delay: 1 + i * 0.15, duration: 0.8 }} />
              </div>
              <span className="text-[9px] font-medium text-gray-500 w-8 text-right">{s.pct}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </CardShell>
  );
}

export function LinkNetwork() {
  const nodes = [
    { x: 100, y: 50, r: 14, label: "Your Site" },
    { x: 40, y: 25, r: 8, label: "" }, { x: 170, y: 30, r: 9, label: "" },
    { x: 55, y: 80, r: 7, label: "" }, { x: 150, y: 85, r: 10, label: "" },
    { x: 25, y: 55, r: 6, label: "" }, { x: 180, y: 60, r: 7, label: "" },
  ];
  return (
    <CardShell>
      <div className="px-5 pt-5 pb-2 flex items-center justify-between">
        <span className="font-semibold text-sm" style={{ color: "#1A1A2E" }}>Link Profile</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-600 font-medium">Growing</span>
      </div>
      <div className="px-5 grid grid-cols-3 gap-2 mb-3">
        {[{ label: "DA Score", val: "62" }, { label: "Backlinks", val: "1,847" }, { label: "Referring", val: "342" }].map((s, i) => (
          <motion.div key={s.label} custom={i} variants={fadeUp} initial="hidden" animate="visible" className="bg-gray-50 rounded-lg p-2 text-center">
            <div className="text-sm font-bold" style={{ color: "#1A1A2E" }}>{s.val}</div>
            <div className="text-[9px] text-gray-400">{s.label}</div>
          </motion.div>
        ))}
      </div>
      <div className="px-5 pb-4">
        <svg viewBox="0 0 200 100" className="w-full h-28">
          {nodes.slice(1).map((n, i) => (
            <motion.line key={i} x1={nodes[0].x} y1={nodes[0].y} x2={n.x} y2={n.y}
              stroke="#6B8FD4" strokeWidth="1" strokeDasharray="3,3"
              initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ delay: 1 + i * 0.15, duration: 0.6 }} />
          ))}
          {nodes.map((n, i) => (
            <motion.circle key={i} cx={n.x} cy={n.y} r={n.r}
              fill={i === 0 ? "#3A5FBF" : "#8B5CF6"} fillOpacity={i === 0 ? 1 : 0.3}
              initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }} />
          ))}
          <motion.text x={100} y={54} textAnchor="middle" fill="white" fontSize="7" fontWeight="bold"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>YOU</motion.text>
        </svg>
      </div>
    </CardShell>
  );
}

export function ReputationChart() {
  return (
    <CardShell>
      <div className="px-5 pt-5 pb-2 flex items-center justify-between">
        <span className="font-semibold text-sm" style={{ color: "#1A1A2E" }}>Reputation Score</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-medium">Excellent</span>
      </div>
      <div className="px-5 flex items-center justify-center py-4">
        <div className="relative w-28 h-28">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle cx="50" cy="50" r="42" fill="none" stroke="#f0f0f0" strokeWidth="8" />
            <motion.circle cx="50" cy="50" r="42" fill="none" stroke="url(#repGrad)" strokeWidth="8"
              strokeLinecap="round" strokeDasharray={264} initial={{ strokeDashoffset: 264 }}
              animate={{ strokeDashoffset: 264 * 0.06 }} transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }} />
            <defs><linearGradient id="repGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3A5FBF" /><stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient></defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>4.9</span>
            <span className="text-[9px] text-gray-400">out of 5.0</span>
          </div>
        </div>
      </div>
      <div className="px-5 pb-4 space-y-1.5">
        {[{ stars: 5, pct: 82 }, { stars: 4, pct: 12 }, { stars: 3, pct: 4 }, { stars: 2, pct: 1 }, { stars: 1, pct: 1 }].map((r, i) => (
          <motion.div key={r.stars} custom={i + 3} variants={fadeUp} initial="hidden" animate="visible" className="flex items-center gap-2">
            <span className="text-[10px] w-3 text-gray-400">{r.stars}</span>
            <span className="text-[10px]">⭐</span>
            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
                initial={{ width: 0 }} animate={{ width: `${r.pct}%` }} transition={{ delay: 1.2 + i * 0.1, duration: 0.6 }} />
            </div>
            <span className="text-[9px] text-gray-400 w-6 text-right">{r.pct}%</span>
          </motion.div>
        ))}
      </div>
    </CardShell>
  );
}

export function ConversionFunnel() {
  const stages = [
    { label: "Visitors", val: "10,000", width: "100%" },
    { label: "Leads", val: "2,400", width: "65%" },
    { label: "Qualified", val: "960", width: "42%" },
    { label: "Customers", val: "384", width: "28%" },
  ];
  return (
    <CardShell>
      <div className="px-5 pt-5 pb-2 flex items-center justify-between">
        <span className="font-semibold text-sm" style={{ color: "#1A1A2E" }}>Conversion Funnel</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-orange-50 text-orange-500 font-medium">Optimizing</span>
      </div>
      <div className="px-5 pb-4">
        <div className="space-y-2 mt-2">
          {stages.map((s, i) => (
            <motion.div key={s.label} custom={i} variants={fadeUp} initial="hidden" animate="visible" className="flex items-center gap-3">
              <span className="text-[10px] text-gray-400 w-16">{s.label}</span>
              <div className="flex-1">
                <motion.div
                  className="h-7 rounded-lg bg-gradient-to-r from-brand-blue to-brand-violet flex items-center justify-end px-2"
                  initial={{ width: 0 }} animate={{ width: s.width }}
                  transition={{ delay: 0.8 + i * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
                  <span className="text-[10px] font-semibold text-white">{s.val}</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="px-5 py-3 border-t border-gray-50 grid grid-cols-2 gap-3">
        <div>
          <div className="text-[10px] text-gray-400">Conv. Rate</div>
          <div className="text-sm font-bold text-green-500">3.84%</div>
        </div>
        <div>
          <div className="text-[10px] text-gray-400">Improvement</div>
          <div className="text-sm font-bold text-brand-blue">+127%</div>
        </div>
      </div>
    </CardShell>
  );
}

export function CampaignOverview() {
  return (
    <CardShell>
      <div className="px-5 pt-5 pb-2 flex items-center justify-between">
        <span className="font-semibold text-sm" style={{ color: "#1A1A2E" }}>Campaign Manager</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-500 font-medium">3 Active</span>
      </div>
      <div className="px-5 pb-4 space-y-2">
        {[{ name: "Brand Awareness", platform: "Facebook", budget: "$2.4K", roas: "4.2x", pct: 72, color: "from-blue-500 to-indigo-500" },
          { name: "Lead Gen", platform: "Instagram", budget: "$1.8K", roas: "5.1x", pct: 58, color: "from-pink-500 to-rose-500" },
          { name: "Retargeting", platform: "Multi", budget: "$950", roas: "8.3x", pct: 89, color: "from-violet-500 to-purple-500" }].map((c, i) => (
          <motion.div key={c.name} custom={i} variants={fadeUp} initial="hidden" animate="visible"
            className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-semibold" style={{ color: "#1A1A2E" }}>{c.name}</span>
              <span className="text-[9px] text-gray-400">{c.platform}</span>
            </div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] text-gray-400">Budget: {c.budget}</span>
              <span className="text-[10px] font-medium text-green-500">ROAS {c.roas}</span>
            </div>
            <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <motion.div className={`h-full bg-gradient-to-r ${c.color} rounded-full`}
                initial={{ width: 0 }} animate={{ width: `${c.pct}%` }} transition={{ delay: 1 + i * 0.2, duration: 0.8 }} />
            </div>
          </motion.div>
        ))}
      </div>
    </CardShell>
  );
}

export function getVisualComponent(visualType: string) {
  switch (visualType) {
    case "analytics-dashboard": return <AnalyticsDashboard />;
    case "ad-metrics": return <AdMetrics />;
    case "social-engagement": return <SocialEngagement />;
    case "content-calendar": return <ContentCalendar />;
    case "design-preview": return <DesignPreview />;
    case "email-stats": return <EmailStats />;
    case "link-network": return <LinkNetwork />;
    case "reputation-chart": return <ReputationChart />;
    case "conversion-funnel": return <ConversionFunnel />;
    case "campaign-overview": return <CampaignOverview />;
    default: return <AnalyticsDashboard />;
  }
}
