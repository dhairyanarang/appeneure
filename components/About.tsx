"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "50+", label: "Apps Shipped" },
  { value: "98%", label: "Client Retention" },
  { value: "5★", label: "Average Rating" },
  { value: "3yr", label: "In Business" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div ref={ref}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[#666] text-xs tracking-[0.25em] uppercase mb-5"
            >
              About Us
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-[#F5F5F5] tracking-[-0.03em] leading-[1] mb-10"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Built by builders,
              <br />
              <span className="text-[#6EE7B7]">for builders</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[#666] text-base leading-[1.8] mb-5"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Appeneure was born from a simple belief — great software should be
              accessible to every business, not just the big ones. We&apos;re a
              tight-knit team of designers and developers who care deeply about
              craft, speed, and results.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-[#666] text-base leading-[1.8] mb-12"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              We partner with startups, founders, and growing businesses to turn
              ideas into polished digital products — from MVP to scale.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              href="#contact"
              className="inline-flex items-center gap-2 text-[#6EE7B7] text-sm font-medium group"
            >
              Work with us
              <span className="inline-block group-hover:translate-x-1.5 transition-transform duration-200">→</span>
            </motion.a>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="bg-[#080808] p-10 flex flex-col items-start hover:bg-[#0d0d0d] transition-colors duration-300"
              >
                <span
                  className="text-5xl font-bold text-[#F5F5F5] mb-2 tracking-tight"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {stat.value}
                </span>
                <span className="text-[#666] text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
