"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Apps", "Products", "Experiences", "Platforms", "Solutions"];

function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Orb 1 — large, slow drift top-left */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(110,231,183,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
          top: "-10%",
          left: "-15%",
        }}
        animate={{
          x: [0, 80, 20, 0],
          y: [0, 60, -30, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orb 2 — medium, faster, top-right */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(129,140,248,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          top: "5%",
          right: "-10%",
        }}
        animate={{
          x: [0, -60, -20, 0],
          y: [0, 80, 30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Orb 3 — bottom center */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(110,231,183,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
          bottom: "-20%",
          left: "30%",
        }}
        animate={{
          x: [0, -40, 60, 0],
          y: [0, -50, 20, 0],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #F5F5F5 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_40%,#080808_100%)]" />
    </div>
  );
}

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      id="home"
    >
      <AuroraBackground />

      <div className="relative z-10 text-center max-w-[900px] mx-auto px-8">
        {/* Eyebrow tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="inline-flex items-center gap-2 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#6EE7B7] animate-pulse" />
          <span className="text-[#888888] text-xs tracking-[0.25em] uppercase font-medium">
            App Development Agency
          </span>
        </motion.div>

        {/* Headline */}
        <h1
          className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.95] tracking-[-0.03em] mb-8"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="block text-[#F5F5F5]"
          >
            We Build
          </motion.span>

          {/* Animated word */}
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="block relative"
            style={{ height: "1.05em", overflow: "hidden" }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWord}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-110%", opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[#6EE7B7]"
              >
                {words[currentWord]}
              </motion.span>
            </AnimatePresence>
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="block text-[#F5F5F5]"
          >
            That Matter
          </motion.span>
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="text-[#666666] text-lg md:text-xl max-w-[480px] mx-auto mb-12 leading-[1.6]"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          From idea to App Store — we design and ship mobile & web
          apps that users love.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#work"
            className="px-7 py-3.5 bg-[#6EE7B7] text-[#080808] font-semibold rounded-full text-sm hover:bg-[#5dd9a8] transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            See Our Work
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 border border-white/10 text-[#888888] hover:text-[#F5F5F5] hover:border-white/20 rounded-full text-sm transition-all duration-300"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Start a Project →
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[#444] text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#444] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
