"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/data";

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "var(--bg-dark)" }}>
      <div className="max-w-[1280px] mx-auto px-5 py-24 md:py-32" ref={ref}>
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-sm mb-16"
          style={{ color: "var(--fg-dark-muted)", fontFamily: "var(--font-body)" }}
        >
          Highlights
        </motion.p>

        {/* Stats row */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: "var(--border-dark)" }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="flex flex-col gap-3 p-8"
              style={{ background: "var(--bg-dark)" }}
            >
              <span
                className="text-[clamp(2.5rem,5vw,4rem)] font-medium leading-none"
                style={{
                  color: "var(--accent)",
                  fontFamily: "var(--font-display)",
                  letterSpacing: "-0.05em",
                }}
              >
                {stat.value}
              </span>
              <span
                className="text-sm"
                style={{ color: "var(--fg-dark-muted)", fontFamily: "var(--font-body)" }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
