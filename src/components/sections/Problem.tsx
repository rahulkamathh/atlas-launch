"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, stagger, ease } from "@/lib/utils";

const problems = [
  {
    number: "01",
    headline: "Good investors don't have time to act.",
    body: "They understand markets, follow research, and make good calls — when they have bandwidth. Which is never.",
    icon: "⏳",
  },
  {
    number: "02",
    headline: "Good analysts have no scalable edge.",
    body: "SEBI-licensed experts and AI trackers generate real alpha. But turning insight into income is broken without infrastructure.",
    icon: "📡",
  },
  {
    number: "03",
    headline: "The gap between insight and execution is where money is lost.",
    body: "₹1.05 lakh crore in retail F&O losses in FY25 alone — not from bad picks. From bad execution.",
    accent: true,
    icon: "📉",
  },
];

export function Problem() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section ref={ref} className="section-py bg-white relative overflow-hidden">
      <div className="container-atlas">
        {/* Label + headline */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-2xl mb-16"
        >
          <motion.span variants={fadeUp} className="text-xs font-semibold tracking-[0.15em] uppercase text-atlas-muted block mb-4">
            01 — The problem
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-bold text-atlas-charcoal"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
          >
            The people with capital are{" "}
            <span className="relative inline-block">
              not
              <motion.span
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.9, duration: 0.5, ease }}
                className="absolute bottom-1 left-0 right-0 h-0.5 bg-red-400 origin-left"
              />
            </span>{" "}
            the people with time.
          </motion.h2>
        </motion.div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease }}
              className={`rounded-2xl p-7 flex flex-col gap-4 ${
                p.accent
                  ? "bg-atlas-charcoal text-white"
                  : "bg-atlas-border-light/60 border border-atlas-border"
              }`}
            >
              <div className="flex items-start justify-between">
                <span className={`text-3xl`}>{p.icon}</span>
                <span className={`text-xs font-bold tracking-widest ${p.accent ? "text-white/30" : "text-atlas-muted/50"}`}>
                  {p.number}
                </span>
              </div>
              <h3 className={`font-bold text-lg leading-snug ${p.accent ? "text-white" : "text-atlas-charcoal"}`}>
                {p.headline}
              </h3>
              <p className={`text-sm leading-relaxed ${p.accent ? "text-white/65" : "text-atlas-muted"}`}>
                {p.body}
              </p>
              {p.accent && (
                <div className="mt-auto pt-4 border-t border-white/10">
                  <p className="text-2xl font-bold text-atlas-green-glow">₹1.05L Cr</p>
                  <p className="text-xs text-white/50 mt-0.5">Retail F&O losses, FY25</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
