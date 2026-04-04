"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "success",
  "solutions",
  "results",
  "growth",
  "impact",
  "excellence",
  "potential",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % words.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-5 pt-16"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-[900px] mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm text-[var(--fg-muted)] mb-8 tracking-wide"
          style={{ fontFamily: "var(--font-body)" }}
        >
          App Development Studio
        </motion.p>

        {/* h1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.8rem,6vw,5rem)] font-medium text-[var(--fg)] mb-2 leading-[1]"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.05em" }}
        >
          App Development Studio
        </motion.h1>

        {/* Subtitle + animated word */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <p
            className="text-[clamp(2.8rem,6vw,5rem)] font-medium text-[var(--fg-muted)] leading-[1] mb-0"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.05em" }}
          >
            Turning ideas into
          </p>

          {/* Cycling word */}
          <div
            className="overflow-hidden"
            style={{ height: "clamp(2.8rem,6vw,5rem)", lineHeight: 1 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={words[current]}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-110%" }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[clamp(2.8rem,6vw,5rem)] font-medium leading-[1]"
                style={{
                  fontFamily: "var(--font-display)",
                  letterSpacing: "-0.05em",
                  color: "var(--accent)",
                }}
              >
                {words[current]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-base md:text-lg text-[var(--fg-muted)] max-w-[520px] mx-auto mt-10 mb-10 leading-relaxed"
          style={{ fontFamily: "var(--font-body)", letterSpacing: "-0.01em" }}
        >
          Transform ideas into powerful mobile and web apps that users love and
          businesses depend on to grow.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#services"
            className="px-6 py-3 text-sm font-medium rounded-[3px] transition-all duration-200 hover:opacity-80"
            style={{
              background: "var(--fg)",
              color: "var(--bg)",
              fontFamily: "var(--font-body)",
            }}
          >
            Our services
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-sm font-medium rounded-[3px] border border-[var(--border)] text-[var(--fg-muted)] hover:text-[var(--fg)] hover:border-[var(--fg)] transition-all duration-200"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span
            className="text-[10px] tracking-[0.3em] uppercase text-[var(--fg-muted)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-[var(--fg-muted)] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
