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
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group cursor-pointer"
    >
      {/* Image area */}
      <div
        className="relative w-full aspect-[4/3] rounded-[6px] overflow-hidden mb-5"
        style={{ background: project.bg }}
      >
        {/* Placeholder number */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-[8rem] font-medium leading-none select-none"
            style={{
              color: "rgba(0,0,0,0.06)",
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.05em",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Metric badge — top left */}
        <div className="absolute top-4 left-4">
          <span
            className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-[3px]"
            style={{
              background: "var(--fg)",
              color: "var(--bg)",
              fontFamily: "var(--font-body)",
            }}
          >
            {project.result}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/8 transition-all duration-300 flex items-center justify-center">
          <span
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-medium px-4 py-2 rounded-[3px] bg-white/90 text-black"
            style={{ fontFamily: "var(--font-body)" }}
          >
            View project →
          </span>
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3
            className="text-xl font-medium text-[var(--fg)] mb-1 leading-tight"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}
          >
            {project.title}
          </h3>
          <p
            className="text-sm text-[var(--fg-muted)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {project.tagline}
          </p>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0 mt-0.5">
          <span
            className="text-xs text-[var(--fg-muted)] border border-[var(--border)] px-2 py-1 rounded-[3px]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* Services tags */}
      <div className="flex gap-2 mt-3 flex-wrap">
        {project.services.map((s) => (
          <span
            key={s}
            className="text-[11px] text-[var(--fg-muted)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {s}
            {s !== project.services[project.services.length - 1] && (
              <span className="ml-2 text-[var(--border)]">•</span>
            )}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-[1280px] mx-auto px-5 py-24 md:py-32">
        {/* Header */}
        <div
          ref={ref}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-sm text-[var(--fg-muted)] mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Selected work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2rem,4vw,3.5rem)] font-medium text-[var(--fg)]"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.05em" }}
            >
              Featured projects
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            href="#contact"
            className="text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200 shrink-0"
            style={{ fontFamily: "var(--font-body)" }}
          >
            See all projects →
          </motion.a>
        </div>

        {/* Grid — 2 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
