"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer id="contact" className="border-t border-white/5">
      {/* CTA */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-32 text-center" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[#666] text-xs tracking-[0.25em] uppercase mb-8"
        >
          Ready to Build?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(3rem,8vw,7rem)] font-bold text-[#F5F5F5] tracking-[-0.03em] leading-[0.95] mb-12"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Let&apos;s make
          <br />
          <span className="text-[#6EE7B7]">something great</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="mailto:hello@appeneure.com"
            className="px-7 py-3.5 bg-[#6EE7B7] text-[#080808] font-semibold rounded-full text-sm hover:bg-[#5dd9a8] transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            hello@appeneure.com
          </a>
          <a
            href="#"
            className="px-7 py-3.5 border border-white/10 text-[#888] hover:text-[#F5F5F5] hover:border-white/20 rounded-full text-sm transition-all duration-300"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Book a Call →
          </a>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 max-w-[1400px] mx-auto px-8 md:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[#444] text-xs" style={{ fontFamily: "var(--font-dm-sans)" }}>
          © {new Date().getFullYear()} Appeneure. All rights reserved.
        </span>
        <div className="flex items-center gap-8">
          {["Twitter", "LinkedIn", "Instagram"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-[#444] hover:text-[#F5F5F5] text-xs transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
