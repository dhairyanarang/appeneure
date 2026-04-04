"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { testimonials } from "@/lib/data";

function TestimonialCard({
  t,
  index,
}: {
  t: (typeof testimonials)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="flex flex-col gap-6 p-7 rounded-[6px] border"
      style={{
        borderColor: "var(--border)",
        background: "var(--bg)",
      }}
    >
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} style={{ color: "var(--accent)", fontSize: "12px" }}>
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <blockquote
        className="text-sm leading-relaxed text-[var(--fg)] flex-1"
        style={{ fontFamily: "var(--font-body)" }}
      >
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
          style={{
            background: "var(--accent)",
            color: "var(--accent-dark)",
            fontFamily: "var(--font-display)",
          }}
        >
          {t.initials}
        </div>
        <div>
          <p
            className="text-sm font-medium text-[var(--fg)] leading-tight"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t.name}
          </p>
          <p
            className="text-xs text-[var(--fg-muted)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t.role}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      style={{ borderTop: "1px solid var(--border)", background: "var(--bg-alt)" }}
    >
      <div className="max-w-[1280px] mx-auto px-5 py-24 md:py-32">
        {/* Header */}
        <div ref={ref} className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm text-[var(--fg-muted)] mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Client stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2rem,4vw,3.5rem)] font-medium text-[var(--fg)]"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.05em" }}
          >
            Stories of success
          </motion.h2>
        </div>

        {/* Grid — 3 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
