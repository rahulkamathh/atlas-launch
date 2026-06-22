"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, stagger, ease } from "@/lib/utils";

const layers = [
  { layer: "Learn", owner: "YouTube, Finshots", atlas: false },
  { layer: "Discover", owner: "Telegram, Twitter", atlas: false },
  { layer: "Discuss", owner: "WhatsApp groups", atlas: false },
  { layer: "Execute", owner: "Zerodha, Upstox", atlas: false },
  { layer: "Automate", owner: "Streak, Sensibull", atlas: false },
  { layer: "All of it", owner: "Atlas", atlas: true },
];

const personas = [
  { icon: "🏢", title: "Business owners", desc: "Capital & literacy. No bandwidth." },
  { icon: "🩺", title: "Doctors", desc: "High income. Zero market hours." },
  { icon: "⚖️", title: "Lawyers", desc: "Understand risk. Can't watch screens." },
  { icon: "💼", title: "Executives", desc: "Market-savvy. Calendar-blocked." },
  { icon: "✈️", title: "NRIs", desc: "Indian exposure. Foreign timezone." },
];

export function Future() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="section-py bg-atlas-cream relative overflow-hidden">
      <div className="absolute inset-0 grid-bg grid-fade opacity-40 pointer-events-none" />
      <div className="container-atlas relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — competitive table */}
          <div>
            <motion.div
              variants={stagger(0.08)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex flex-col gap-4 mb-8"
            >
              <motion.span variants={fadeUp} className="text-xs font-semibold tracking-[0.15em] uppercase text-atlas-muted">
                07 — Competitive landscape
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="font-bold text-atlas-charcoal"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", lineHeight: 1.12, letterSpacing: "-0.025em" }}
              >
                Every other product owns one layer.{" "}
                <span className="text-gradient">Atlas owns the workflow.</span>
              </motion.h2>
            </motion.div>

            {/* Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7, ease }}
              className="rounded-2xl overflow-hidden border border-atlas-border bg-white shadow-card"
            >
              <div className="grid grid-cols-2 px-5 py-3 border-b border-atlas-border bg-atlas-border-light/50">
                <p className="text-xs font-bold uppercase tracking-widest text-atlas-muted">Layer</p>
                <p className="text-xs font-bold uppercase tracking-widest text-atlas-muted">Current owner</p>
              </div>
              {layers.map((row, i) => (
                <motion.div
                  key={row.layer}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.35 + i * 0.08, duration: 0.5, ease }}
                  className={`grid grid-cols-2 px-5 py-4 border-b border-atlas-border-light last:border-0 ${
                    row.atlas ? "bg-atlas-charcoal" : ""
                  }`}
                >
                  <p className={`text-sm font-semibold ${row.atlas ? "text-white" : "text-atlas-charcoal"}`}>
                    {row.layer}
                  </p>
                  <div className="flex items-center gap-2">
                    {row.atlas && (
                      <div className="w-5 h-5 rounded-full bg-atlas-green flex items-center justify-center flex-shrink-0">
                        <svg width="10" height="10" fill="none" viewBox="0 0 16 16" stroke="white" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l4 4 6-6" />
                        </svg>
                      </div>
                    )}
                    <p className={`text-sm font-bold ${row.atlas ? "text-atlas-green" : "text-atlas-muted"}`}>
                      {row.owner}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — market / personas */}
          <div>
            <motion.div
              variants={stagger(0.08)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex flex-col gap-4 mb-8"
            >
              <motion.span variants={fadeUp} className="text-xs font-semibold tracking-[0.15em] uppercase text-atlas-muted">
                06 — Market opportunity
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="font-bold text-atlas-charcoal"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", lineHeight: 1.12, letterSpacing: "-0.025em" }}
              >
                Professionals with capital.{" "}
                <span className="text-gradient">No time.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-atlas-muted leading-relaxed">
                Existing products sell information — not execution. Atlas is the first product built for people who already understand markets but can't act on them.
              </motion.p>
            </motion.div>

            <div className="flex flex-col gap-3">
              {personas.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.55, ease }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-atlas-border shadow-card hover:border-atlas-green/30 hover:shadow-card-hover transition-all duration-200"
                >
                  <span className="text-2xl w-10 text-center">{p.icon}</span>
                  <div>
                    <p className="font-semibold text-atlas-charcoal text-sm">{p.title}</p>
                    <p className="text-xs text-atlas-muted mt-0.5">{p.desc}</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-2 h-2 rounded-full bg-atlas-green/40" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Business model — 3 tiers */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.7, ease }}
          className="mt-16 rounded-2xl bg-white border border-atlas-border shadow-card overflow-hidden"
        >
          <div className="px-8 py-6 border-b border-atlas-border-light">
            <p className="text-xs font-bold tracking-widest uppercase text-atlas-muted mb-1">05 — Business model</p>
            <p className="font-bold text-atlas-charcoal text-lg">Three tiers. One platform.</p>
          </div>
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-atlas-border-light">
            {[
              { tier: "OBSERVE", color: "text-atlas-muted", bg: "", desc: "Monitor portfolio performance and track analyst activity for free.", features: ["Portfolio dashboard", "Tracker browse", "Performance history"] },
              { tier: "FOLLOW", color: "text-atlas-charcoal", bg: "bg-atlas-border-light/40", desc: "Access real-time trades and investment activity as it happens.", features: ["Live trade feed", "Signal notifications", "Analyst access"] },
              { tier: "AUTOMATE", color: "text-atlas-green", bg: "bg-atlas-green-muted/40", desc: "Trades execute automatically in your brokerage account.", features: ["Auto-execution", "Position sizing", "Risk controls"], highlight: true },
            ].map((t) => (
              <div key={t.tier} className={`p-7 flex flex-col gap-3 ${t.bg}`}>
                <p className={`text-xs font-bold tracking-widest ${t.color}`}>{t.tier}</p>
                <p className="text-atlas-charcoal text-sm leading-relaxed">{t.desc}</p>
                <div className="mt-auto pt-3 space-y-1.5">
                  {t.features.map(f => (
                    <div key={f} className="flex items-center gap-2">
                      <svg width="12" height="12" fill="none" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="7" fill={t.highlight ? "#EAF5EE" : "#F0F0F5"}/>
                        <path d="M5 8l2 2 4-4" stroke={t.highlight ? "#1A7A4A" : "#6B6B7A"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-xs text-atlas-muted">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
