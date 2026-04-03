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
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="bg-[#080808] p-8 group hover:bg-[#0f0f0f] transition-colors duration-300"
    >
      <span className="text-[#6EE7B7] text-sm font-mono mb-6 block">
        {step.number}
      </span>
      <h3 className="text-[#F5F5F5] text-xl font-semibold mb-4 group-hover:text-[#6EE7B7] transition-colors duration-300">
        {step.title}
      </h3>
      <p className="text-[#888888] text-sm leading-relaxed">{step.description}</p>
    </motion.div>
  );
}

export default function Process() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="process" className="px-6 md:px-12 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#888888] text-sm tracking-[0.2em] uppercase mb-4"
          >
            How We Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold text-[#F5F5F5] tracking-tight max-w-lg"
          >
            Our process,
            <br />
            <span className="text-[#6EE7B7]">refined over years</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {processSteps.map((step, i) => (
            <ProcessStep key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
