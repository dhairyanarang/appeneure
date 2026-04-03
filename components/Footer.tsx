"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer id="contact" className="border-t border-white/5">
      {/* CTA Section */}
      <div className="px-6 md:px-12 py-24 max-w-7xl mx-auto text-center" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[#888888] text-sm tracking-[0.2em] uppercase mb-6"
        >
          Ready to Build?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-semibold text-[#F5F5F5] tracking-tight mb-10"
        >
          Let&apos;s make
          <br />
          <span className="text-[#6EE7B7]">something great</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:hello@appeneure.com"
            className="px-8 py-4 bg-[#6EE7B7] text-[#080808] font-semibold rounded-full hover:bg-[#5dd9a8] transition-all duration-200 hover:scale-105 active:scale-95"
          >
            hello@appeneure.com
          </a>
          <a
            href="https://cal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white/10 text-[#F5F5F5] rounded-full hover:bg-white/5 transition-all duration-200"
          >
            Book a Call →
          </a>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[#888888] text-sm">
          © {new Date().getFullYear()} Appeneure. All rights reserved.
        </span>
        <div className="flex items-center gap-6">
          {["Twitter", "LinkedIn", "Instagram"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-[#888888] hover:text-[#F5F5F5] text-sm transition-colors duration-200"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
