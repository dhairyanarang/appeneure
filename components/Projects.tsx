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
      className="group relative overflow-hidden rounded-2xl bg-[#111111] border border-white/5 hover:border-white/10 transition-all duration-500 cursor-pointer"
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
            <h3 className="text-[#F5F5F5] text-xl font-semibold">
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
    <section id="work" className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
      {/* Section header */}
      <div ref={titleRef} className="mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[#888888] text-sm tracking-[0.2em] uppercase mb-4"
        >
          Selected Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl font-semibold text-[#F5F5F5] tracking-tight"
        >
          Projects that
          <br />
          <span className="text-[#6EE7B7]">move the needle</span>
        </motion.h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
