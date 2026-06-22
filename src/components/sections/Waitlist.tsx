"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { fadeUp, stagger, ease } from "@/lib/utils";

export function Waitlist() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section ref={ref} className="section-py bg-atlas-charcoal relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-atlas-green/10 blur-3xl pointer-events-none" />

      <div className="container-atlas relative z-10">
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6"
        >
          <motion.span variants={fadeUp} className="text-xs font-semibold tracking-[0.15em] uppercase text-atlas-green-glow">
            Early access
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-bold text-white"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.75rem)", lineHeight: 1.08, letterSpacing: "-0.03em" }}
          >
            The people with capital are not the people with time.{" "}
            <span style={{ background: "linear-gradient(135deg, #2ECC71, #A8E6C3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Atlas closes that gap.
            </span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-white/60 text-lg leading-relaxed max-w-lg">
            We&apos;re onboarding a select group of investors and analysts to shape the platform. Join the waitlist to get early access.
          </motion.p>

          {/* Social proof */}
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {["from-orange-400 to-orange-600", "from-violet-500 to-violet-700", "from-teal-400 to-teal-600", "from-pink-500 to-rose-600"].map((g, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full bg-gradient-to-br ${g} border-2 border-atlas-charcoal`}
                />
              ))}
            </div>
            <p className="text-white/50 text-sm">
              <span className="text-white font-semibold">2,400+</span> investors already waiting
            </p>
          </motion.div>

          {/* Form */}
          <motion.div variants={fadeUp} className="w-full mt-2">
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="flex flex-col items-center gap-3 py-8"
              >
                <div className="w-16 h-16 rounded-full bg-atlas-green/20 border border-atlas-green/40 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2ECC71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-white font-semibold text-lg">You&apos;re on the list.</p>
                <p className="text-white/50 text-sm">We&apos;ll be in touch when your access is ready.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm
                    focus:outline-none focus:border-atlas-green focus:bg-white/15 transition-all duration-200"
                />
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-3.5 rounded-full bg-atlas-green text-white font-semibold text-sm
                    hover:bg-atlas-green-light transition-colors duration-200 shadow-green
                    disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[160px]"
                >
                  {loading ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full block"
                      />
                      Joining...
                    </>
                  ) : (
                    <>
                      Request Access
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Trust line */}
          {!submitted && (
            <motion.p variants={fadeUp} className="text-white/30 text-xs">
              No credit card. No commitment. Your data stays private.
            </motion.p>
          )}

          {/* Features */}
          <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/10 w-full">
            {[
              { icon: "🔒", label: "Capital stays in your account" },
              { icon: "✅", label: "SEBI-compliant execution" },
              { icon: "⚡", label: "Automated. Always on." },
            ].map((f) => (
              <div key={f.label} className="flex flex-col items-center gap-2">
                <span className="text-2xl">{f.icon}</span>
                <p className="text-white/50 text-xs text-center leading-tight">{f.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
