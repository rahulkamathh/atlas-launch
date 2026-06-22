"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { AtlasLogo } from "@/components/ui/AtlasLogo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 20));

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-atlas-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-atlas flex items-center justify-between h-16">
        <a href="#" className="hover:opacity-80 transition-opacity duration-200">
          <AtlasLogo iconSize={26} showWordmark={true} />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-atlas-muted">
          {["How it works", "Trackers", "About"].map((link) => (
            <a key={link} href="#" className="hover:text-atlas-charcoal transition-colors duration-150">
              {link}
            </a>
          ))}
        </div>

        <Button variant="primary" size="sm">
          Join Waitlist
        </Button>
      </div>
    </motion.nav>
  );
}
