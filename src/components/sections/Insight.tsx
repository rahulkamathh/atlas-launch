"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, stagger, ease } from "@/lib/utils";

const stats = [
  {
    value: "100M",
    label: "Indian investors",
    sub: "Demat accounts growing — engagement dropping.",
  },
  {
    value: "₹1.05L Cr",
    label: "F&O losses in FY25",
    sub: "Not from bad picks. From bad execution.",
    highlight: true,
  },
  {
    value: "Apr 2026",
    label: "SEBI algo framework live",
    sub: "Full mandatory implementation is now in effect for all brokers.",
  },
];

export function Insight() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section ref={ref} className="section-py bg-atlas-cream relative overflow-hidden">
      <div className="absolute inset-0 grid-bg grid-fade opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-atlas-green/4 blur-3xl pointer-events-none" />

      <div className="container-atlas relative z-10">
        {/* Label + headline */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mb-16"
        >
          <motion.span variants={fadeUp} className="text-xs font-semibold tracking-[0.15em] uppercase text-atlas-muted block mb-4">
            02 — The insight
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-bold text-atlas-charcoal"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}
          >
            India has 100 million investors.{" "}
            <span className="text-gradient">Almost none of them are watching.</span>
          </motion.h2>
        </motion.div>

        {/* Stat cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease }}
              className={`rounded-2xl p-7 ${
                s.highlight
                  ? "bg-atlas-green text-white shadow-green"
                  : "bg-white border border-atlas-border shadow-card"
              }`}
            >
              <p className={`text-[36px] font-bold leading-none mb-2 tracking-tight ${s.highlight ? "text-white" : "text-atlas-charcoal"}`}>
                {s.value}
              </p>
              <p className={`text-sm font-semibold mb-2 ${s.highlight ? "text-white/80" : "text-atlas-charcoal"}`}>
                {s.label}
              </p>
              <p className={`text-sm leading-relaxed ${s.highlight ? "text-white/65" : "text-atlas-muted"}`}>
                {s.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* SEBI callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.7, ease }}
          className="rounded-2xl border border-atlas-green/20 bg-atlas-green-muted p-7 flex flex-col md:flex-row gap-6 items-start md:items-center"
        >
          <div className="w-10 h-10 rounded-xl bg-atlas-green flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-atlas-charcoal mb-1">SEBI's algo framework is fully live from April 2026.</p>
            <p className="text-atlas-muted text-sm leading-relaxed max-w-2xl">
              Every stockbroker in India must now support compliant automated execution for retail investors. Atlas is built on this foundation — giving every investor access to institutional-grade execution infrastructure, today.
            </p>
          </div>
          <div className="flex-shrink-0 ml-auto">
            <span className="inline-flex items-center gap-1.5 bg-atlas-green text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              SEBI Compliant
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
