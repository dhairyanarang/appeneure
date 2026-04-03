"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { processSteps } from "@/lib/data";

function ProcessStep({
  step,
  index,
}: {
  step: (typeof processSteps)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#080808] p-10 group hover:bg-[#0a0a0a] transition-colors duration-300"
    >
      <span className="text-[#6EE7B7] text-xs font-mono tracking-widest mb-8 block">
        {step.number}
      </span>
      <h3
        className="text-[#F5F5F5] text-2xl font-bold mb-5 group-hover:text-[#6EE7B7] transition-colors duration-300 tracking-tight"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        {step.title}
      </h3>
      <p className="text-[#555] text-sm leading-[1.8]" style={{ fontFamily: "var(--font-dm-sans)" }}>
        {step.description}
      </p>
    </motion.div>
  );
}

export default function Process() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="process" className="border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-32">
        {/* Header */}
        <div ref={titleRef} className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#666] text-xs tracking-[0.25em] uppercase mb-5"
          >
            How We Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-[#F5F5F5] tracking-[-0.03em] leading-[1]"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Our process,
            <br />
            <span className="text-[#6EE7B7]">refined over years</span>
          </motion.h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {processSteps.map((step, i) => (
            <ProcessStep key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
