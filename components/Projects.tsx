"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/lib/data";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative overflow-hidden rounded-xl bg-[#0f0f0f] border border-white/5 hover:border-white/10 transition-all duration-500 cursor-pointer"
    >
      {/* Image placeholder / colored block */}
      <div
        className="relative w-full aspect-[16/9] overflow-hidden"
        style={{ background: `${project.color}10` }}
      >
        <div
          className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 30% 50%, ${project.color}, transparent 70%)`,
          }}
        />
        {/* Placeholder label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-6xl font-bold opacity-10"
            style={{ color: project.color }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#080808]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
          <span className="text-[#F5F5F5] text-sm tracking-widest uppercase border border-white/20 px-6 py-3 rounded-full">
            View Project →
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-[#888888] text-xs tracking-widest uppercase mb-1">
              {project.category} · {project.year}
            </p>
            <h3 className="text-[#F5F5F5] text-xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-syne)" }}>
              {project.title}
            </h3>
          </div>
          <span
            className="text-xs font-medium px-3 py-1 rounded-full mt-1"
            style={{
              color: project.color,
              background: `${project.color}15`,
            }}
          >
            {project.result}
          </span>
        </div>
        <p className="text-[#888888] text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="work" className="border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-32">
        {/* Section header */}
        <div ref={titleRef} className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[#666] text-xs tracking-[0.25em] uppercase mb-5"
            >
              Selected Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-[#F5F5F5] tracking-[-0.03em] leading-[1]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Projects that
              <br />
              <span className="text-[#6EE7B7]">move the needle</span>
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            href="#contact"
            className="text-sm text-[#666] hover:text-[#F5F5F5] transition-colors duration-300 shrink-0"
          >
            All projects →
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
