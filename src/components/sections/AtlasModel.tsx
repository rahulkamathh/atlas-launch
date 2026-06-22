"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, stagger, ease } from "@/lib/utils";
import { AtlasIcon } from "@/components/ui/AtlasLogo";

export function AtlasModel() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section ref={ref} className="section-py bg-white">
      <div className="container-atlas">
        {/* Header */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span variants={fadeUp} className="text-xs font-semibold tracking-[0.15em] uppercase text-atlas-muted block mb-4">
            03 — The solution
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-bold text-atlas-charcoal mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
          >
            Atlas connects expertise to execution.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-atlas-muted text-lg leading-relaxed">
            One compliant infrastructure layer between analysts and investors — with automated execution built in.
          </motion.p>
        </motion.div>

        {/* Three-column supply/atlas/demand */}
        <div className="grid md:grid-cols-3 gap-4 items-stretch max-w-4xl mx-auto">

          {/* Supply */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease }}
            className="rounded-2xl border border-atlas-border bg-atlas-border-light/40 p-7 flex flex-col gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-white border border-atlas-border flex items-center justify-center text-xl shadow-sm">
              📡
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase text-atlas-muted mb-1">Supply</p>
              <h3 className="font-bold text-atlas-charcoal text-lg leading-snug mb-2">Analysts &amp; AI Trackers</h3>
              <p className="text-atlas-muted text-sm leading-relaxed">
                SEBI-licensed analysts and Atlas-owned AI agents publish live trackers with transparent track records.
              </p>
            </div>
            <div className="mt-auto space-y-2">
              {["SEBI-licensed analysts", "Atlas AI agents", "Verified performance", "Live trade signals"].map(f => (
                <div key={f} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-atlas-muted/40" />
                  <span className="text-xs text-atlas-muted">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Atlas — center, elevated */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.7, ease }}
            className="rounded-2xl bg-atlas-charcoal p-7 flex flex-col gap-4 shadow-green relative overflow-hidden md:-mt-4 md:-mb-4"
          >
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-atlas-green/10 blur-2xl" />
            <div className="w-10 h-10 rounded-xl bg-atlas-green flex items-center justify-center">
              <AtlasIcon size={22} invert={true} />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase text-atlas-green mb-1">Atlas</p>
              <h3 className="font-bold text-white text-lg leading-snug mb-2">The compliant infrastructure layer</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Verification, brokerage APIs, and automated execution in one place.
              </p>
            </div>
            <div className="mt-auto space-y-2">
              {["Brokerage API integration", "SEBI-compliant routing", "Risk & position checks", "Real-time execution"].map(f => (
                <div key={f} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-atlas-green" />
                  <span className="text-xs text-white/60">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Demand */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.7, ease }}
            className="rounded-2xl border border-atlas-border bg-atlas-border-light/40 p-7 flex flex-col gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-white border border-atlas-border flex items-center justify-center text-xl shadow-sm">
              💼
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase text-atlas-muted mb-1">Demand</p>
              <h3 className="font-bold text-atlas-charcoal text-lg leading-snug mb-2">Investors</h3>
              <p className="text-atlas-muted text-sm leading-relaxed">
                Subscribe to trackers and automate execution in their own accounts. Capital stays with them, always.
              </p>
            </div>
            <div className="mt-auto space-y-2">
              {["Capital stays in your account", "Choose any tracker", "Trades execute automatically", "Cancel anytime"].map(f => (
                <div key={f} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-atlas-muted/40" />
                  <span className="text-xs text-atlas-muted">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* How it works — 3 steps */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.7, ease }}
          className="mt-16 rounded-2xl bg-atlas-cream border border-atlas-border p-8"
        >
          <p className="text-xs font-bold tracking-widest uppercase text-atlas-muted text-center mb-8">04 — Three steps. Then it runs itself.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: "01", title: "Discover", body: "Browse analyst and AI trackers, ranked by verified performance." },
              { n: "02", title: "Connect", body: "Link your brokerage account securely — Zerodha, Upstox, and more." },
              { n: "03", title: "Automate", body: "Trades execute in your account when the tracker moves. You don't lift a finger." },
            ].map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.12, duration: 0.5, ease }}
                className="flex flex-col gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-atlas-charcoal text-white text-xs font-bold flex items-center justify-center">
                  {step.n}
                </div>
                <h4 className="font-bold text-atlas-charcoal">{step.title}</h4>
                <p className="text-atlas-muted text-sm leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
