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
    <section id="about" className="px-6 md:px-12 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div ref={ref}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[#888888] text-sm tracking-[0.2em] uppercase mb-4"
            >
              About Us
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl font-semibold text-[#F5F5F5] tracking-tight mb-8"
            >
              Built by builders,
              <br />
              <span className="text-[#6EE7B7]">for builders</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[#888888] text-base leading-relaxed mb-6"
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
              className="text-[#888888] text-base leading-relaxed mb-10"
            >
              We partner with startups, founders, and growing businesses to turn
              their ideas into polished digital products — from MVP to scale.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              href="#contact"
              className="inline-flex items-center gap-2 text-[#6EE7B7] text-sm font-medium group"
            >
              Work with us
              <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </motion.a>
          </div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-px bg-white/5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="bg-[#080808] p-10 flex flex-col items-start hover:bg-[#0f0f0f] transition-colors duration-300"
              >
                <span className="text-4xl md:text-5xl font-semibold text-[#F5F5F5] mb-2">
                  {stat.value}
                </span>
                <span className="text-[#888888] text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
