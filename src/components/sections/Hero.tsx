"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { fadeUp, stagger, ease } from "@/lib/utils";
import { AtlasIcon } from "@/components/ui/AtlasLogo";

function Spark({ data, color = "#1A7A4A" }: { data: number[]; color?: string }) {
  const max = Math.max(...data), min = Math.min(...data), range = max - min || 1;
  const pts = data.map((v, i) => `${(i / (data.length - 1)) * 64},${22 - ((v - min) / range) * 22}`).join(" ");
  return (
    <svg width="64" height="24" viewBox="0 0 64 24" fill="none">
      <polyline points={pts} stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AppMockup() {
  const trackers = [
    {
      initials: "IKT", name: "India Ka Trader", type: "Analyst",
      gradient: "from-orange-400 to-orange-600",
      winRate: "68%", specialty: "Midcap momentum",
      spark: [30, 45, 38, 55, 50, 64, 60, 74],
    },
    {
      initials: "QA", name: "Quant Alpha", type: "AI Tracker",
      gradient: "from-violet-500 to-violet-700",
      winRate: "74%", specialty: "Statistical arbitrage",
      spark: [20, 40, 55, 48, 70, 65, 82, 98],
    },
    {
      initials: "MB", name: "Moat Builder", type: "Analyst",
      gradient: "from-teal-400 to-teal-600",
      winRate: "71%", specialty: "Quality compounders",
      spark: [40, 44, 48, 52, 56, 60, 65, 72],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.45, duration: 0.85, ease }}
      className="w-full max-w-sm rounded-3xl overflow-hidden border border-atlas-border bg-white"
      style={{ boxShadow: "0 24px 64px -12px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)" }}
    >
      {/* Header */}
      <div className="px-5 pt-5 pb-4 border-b border-atlas-border-light">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <AtlasIcon size={20} invert={false} />
            <span className="text-xs font-semibold text-atlas-charcoal tracking-widest uppercase">Atlas</span>
          </div>
          <div className="flex items-center gap-1.5 bg-atlas-green-muted px-2 py-1 rounded-full">
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-atlas-green"
            />
            <span className="text-[10px] text-atlas-green font-semibold">Automating</span>
          </div>
        </div>
        <p className="text-[10px] text-atlas-muted font-medium uppercase tracking-widest mb-1">Portfolio value</p>
        <div className="flex items-baseline gap-2.5 mb-3">
          <span className="text-[26px] font-bold text-atlas-charcoal leading-none tracking-tight">₹33,50,000</span>
          <div className="flex items-center gap-1">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 7L5 3L8 7" stroke="#1A7A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm font-bold text-atlas-green">+14.2%</span>
          </div>
        </div>
        <div className="flex gap-5">
          {[["3", "Trackers"], ["12", "Trades today"], ["+₹4,200", "Today's P&L"]].map(([v, l]) => (
            <div key={l}>
              <p className="text-sm font-bold text-atlas-charcoal">{v}</p>
              <p className="text-[10px] text-atlas-muted">{l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tracker list */}
      <div className="px-5 pt-3 pb-5">
        <p className="text-[10px] text-atlas-muted font-semibold uppercase tracking-widest mb-3">Live trackers</p>
        <div className="flex flex-col gap-2.5">
          {trackers.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + i * 0.12, duration: 0.5, ease }}
              className="flex items-center gap-3 p-3 rounded-2xl bg-atlas-border-light/60"
            >
              <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${a.gradient} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0`}>
                {a.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <p className="text-xs font-semibold text-atlas-charcoal truncate">{a.name}</p>
                  <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-gradient-to-r ${a.gradient} text-white flex-shrink-0`}>
                    {a.type}
                  </span>
                </div>
                <p className="text-[10px] text-atlas-muted">{a.specialty}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-sm font-bold text-atlas-charcoal">{a.winRate}</p>
                <p className="text-[9px] text-atlas-muted">Win Rate</p>
              </div>
              <Spark data={a.spark} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-center overflow-hidden bg-atlas-cream pt-16">
      <div className="absolute inset-0 grid-bg grid-fade opacity-50 pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-atlas-green/5 blur-3xl pointer-events-none" />

      <motion.div style={{ y, opacity }} className="relative z-10 w-full container-atlas">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Copy */}
          <motion.div variants={stagger(0.11)} initial="hidden" animate="visible" className="flex flex-col gap-6">
            <motion.div variants={fadeUp}>
              <Badge variant="green" dot>SEBI-compliant from April 2026 · Early access open</Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-bold text-atlas-charcoal"
              style={{ fontSize: "clamp(2.4rem, 4.8vw, 4.2rem)", lineHeight: 1.07, letterSpacing: "-0.03em" }}
            >
              Where capital meets{" "}
              <span className="text-gradient">intelligence.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-atlas-muted text-lg leading-relaxed max-w-md">
              Atlas connects expertise to execution for Indian investors who have capital — but not time.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Button variant="primary" size="lg">
                Join the Waitlist
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button variant="secondary" size="lg">See how it works</Button>
            </motion.div>

            <motion.p variants={fadeUp} className="text-xs text-atlas-muted">
              2,400+ investors on the waitlist · No spam · Free to join
            </motion.p>
          </motion.div>

          {/* Mockup */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:flex justify-center"
          >
            <AppMockup />
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-atlas-cream to-transparent pointer-events-none z-20" />
    </section>
  );
}
