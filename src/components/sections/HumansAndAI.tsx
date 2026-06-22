"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { fadeUp, stagger, ease } from "@/lib/utils";

const agents = [
  {
    rank: 1,
    name: "India Ka Trader",
    handle: "@ikt",
    type: "Analyst",
    typeColor: "from-orange-400 to-orange-600",
    initials: "IKT",
    winrate: "68%",
    sharpe: "1.84",
    drawdown: "-8.2%",
    followers: "843",
    verified: true,
    specialty: "Midcap momentum",
    trend: [30, 45, 38, 55, 42, 60, 55, 72, 65, 80, 74, 88],
  },
  {
    rank: 2,
    name: "Quant Alpha",
    handle: "@qa",
    type: "AI Agent",
    typeColor: "from-violet-500 to-violet-700",
    initials: "QA",
    winrate: "74%",
    sharpe: "2.31",
    drawdown: "-5.8%",
    followers: "1.2k",
    verified: true,
    specialty: "Statistical arbitrage",
    trend: [20, 40, 55, 48, 70, 65, 80, 78, 90, 85, 95, 98],
  },
  {
    rank: 3,
    name: "Rocket Hunter",
    handle: "@rh",
    type: "Analyst",
    typeColor: "from-pink-500 to-rose-600",
    initials: "RH",
    winrate: "61%",
    sharpe: "1.62",
    drawdown: "-11.4%",
    followers: "612",
    verified: false,
    specialty: "Small-cap breakouts",
    trend: [15, 25, 45, 35, 50, 48, 62, 58, 70, 65, 72, 78],
  },
  {
    rank: 4,
    name: "Moat Builder",
    handle: "@mb",
    type: "Analyst",
    typeColor: "from-teal-400 to-teal-600",
    initials: "MB",
    winrate: "71%",
    sharpe: "2.05",
    drawdown: "-4.1%",
    followers: "398",
    verified: true,
    specialty: "Quality compounders",
    trend: [40, 42, 45, 48, 50, 54, 56, 58, 62, 65, 68, 72],
  },
  {
    rank: 5,
    name: "Trend Rider",
    handle: "@tr",
    type: "AI Agent",
    typeColor: "from-blue-500 to-blue-700",
    initials: "TR",
    winrate: "66%",
    sharpe: "1.97",
    drawdown: "-9.6%",
    followers: "2.1k",
    verified: true,
    specialty: "Trend following",
    trend: [10, 30, 20, 45, 40, 60, 55, 72, 68, 82, 78, 90],
  },
];

function MiniChart({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 80;
  const h = 32;
  const points = data
    .map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / range) * h}`)
    .join(" ");

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none">
      <polyline points={points} stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AgentRow({ agent, index }: { agent: typeof agents[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.55, ease }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 cursor-pointer
        ${hovered ? "bg-atlas-green-muted/60 shadow-card" : "hover:bg-atlas-border-light/60"}
      `}
    >
      {/* Rank */}
      <div className="w-7 text-center">
        <span className={`font-bold text-sm ${index === 0 ? "text-atlas-green" : index === 1 ? "text-atlas-charcoal" : "text-atlas-muted"}`}>
          #{agent.rank}
        </span>
      </div>

      {/* Avatar */}
      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${agent.typeColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
        {agent.initials}
      </div>

      {/* Name */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <p className="font-semibold text-atlas-charcoal text-sm truncate">{agent.name}</p>
          {agent.verified && (
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <circle cx="6.5" cy="6.5" r="6.5" fill="#1A7A4A" />
              <path d="M3.5 6.5l2 2 4-4" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
        <div className="flex items-center gap-2 mt-0.5">
          <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-gradient-to-r ${agent.typeColor} text-white`}>
            {agent.type}
          </span>
          <span className="text-[10px] text-atlas-muted">{agent.specialty}</span>
        </div>
      </div>

      {/* Mini chart */}
      <div className="hidden md:block">
        <MiniChart data={agent.trend} color="#1A7A4A" />
      </div>

      {/* Stats */}
      <div className="flex gap-4 text-right">
        <div className="hidden sm:block">
          <p className="text-[11px] text-atlas-muted">Sharpe</p>
          <p className="font-semibold text-atlas-charcoal text-sm">{agent.sharpe}</p>
        </div>
        <div>
          <p className="text-[11px] text-atlas-muted">Win Rate</p>
          <p className="font-bold text-atlas-green text-sm">{agent.winrate}</p>
        </div>
      </div>

      {/* Follow */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-150 flex-shrink-0
          ${hovered
            ? "bg-atlas-green text-white border-atlas-green"
            : "bg-transparent text-atlas-charcoal border-atlas-border"
          }`}
      >
        Follow
      </motion.button>
    </motion.div>
  );
}

export function HumansAndAI() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [filter, setFilter] = useState<"all" | "analyst" | "ai">("all");

  const filtered = agents.filter((a) => {
    if (filter === "all") return true;
    if (filter === "analyst") return a.type === "Analyst";
    if (filter === "ai") return a.type === "AI Agent";
    return true;
  });

  return (
    <section ref={ref} className="section-py bg-atlas-cream relative overflow-hidden">
      <div className="absolute inset-0 grid-bg grid-fade opacity-40 pointer-events-none" />
      <div className="container-atlas relative z-10">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center text-center gap-4 mb-16"
        >
          <motion.span variants={fadeUp} className="text-xs font-semibold tracking-[0.15em] uppercase text-atlas-muted">
            08 — Tracker marketplace
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-bold text-atlas-charcoal max-w-xl"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", lineHeight: 1.15, letterSpacing: "-0.025em" }}
          >
            Analysts and AI trackers.{" "}
            <span className="text-gradient">Ranked by verified performance.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-atlas-muted text-lg max-w-lg leading-relaxed">
            Browse SEBI-licensed analysts and Atlas AI agents. Every track record is verified. You subscribe, it executes.
          </motion.p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          {(["all", "analyst", "ai"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-150
                ${filter === f
                  ? "bg-atlas-charcoal text-white shadow-sm"
                  : "text-atlas-muted hover:text-atlas-charcoal hover:bg-atlas-border-light"
                }`}
            >
              {f === "all" ? "All" : f === "analyst" ? "👤 Analysts" : "⚡ AI Trackers"}
            </button>
          ))}
        </motion.div>

        {/* Leaderboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.6, ease }}
          className="glass-card shadow-card overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center gap-4 px-4 py-3 border-b border-atlas-border bg-atlas-border-light/50">
            <div className="w-7" />
            <div className="w-10" />
            <div className="flex-1">
              <p className="text-xs font-semibold text-atlas-muted uppercase tracking-wider">Intelligence</p>
            </div>
            <div className="hidden md:block w-20" />
            <div className="flex gap-4 text-right pr-16">
              <div className="hidden sm:block w-12">
                <p className="text-xs font-semibold text-atlas-muted uppercase tracking-wider">Sharpe</p>
              </div>
              <div className="w-16">
                <p className="text-xs font-semibold text-atlas-muted uppercase tracking-wider">Win Rate</p>
              </div>
            </div>
          </div>
          <div className="divide-y divide-atlas-border-light">
            {filtered.map((agent, i) => (
              <AgentRow key={agent.name} agent={agent} index={i} />
            ))}
          </div>
          <div className="px-4 py-3 border-t border-atlas-border text-center">
            <button className="text-sm text-atlas-green font-medium hover:underline">
              View all 200+ trackers →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
