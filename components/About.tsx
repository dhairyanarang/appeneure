"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { strengths } from "@/lib/data";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section id="about" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-[1280px] mx-auto px-5 py-24 md:py-32">
        {/* Top: eyebrow + heading + description */}
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20"
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-sm text-[var(--fg-muted)] mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              About us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2rem,4vw,3.5rem)] font-medium text-[var(--fg)]"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.05em" }}
            >
              We design, build,
              <br />
              and deliver.
            </motion.h2>
          </div>

          <div className="flex flex-col justify-end gap-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-[var(--fg-muted)] leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              We&apos;re an app development studio founded by passionate builders and
              designers. We create memorable mobile apps, web platforms, and digital
              products — from the first sketch to the App Store.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base text-[var(--fg-muted)] leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              No fluff, no filler — just results. We partner with startups, founders,
              and growing businesses to ship products that move the needle.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4"
            >
              <a
                href="#contact"
                className="text-sm font-medium px-5 py-2.5 rounded-[3px] transition-colors duration-200"
                style={{
                  background: "var(--fg)",
                  color: "var(--bg)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Get in touch
              </a>
              <a
                href="#work"
                className="text-sm font-medium px-5 py-2.5 rounded-[3px] border border-[var(--border)] text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-body)" }}
              >
                View projects
              </a>
            </motion.div>
          </div>
        </div>

        {/* Strengths grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: "var(--border)" }}
        >
          {strengths.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="p-8 flex flex-col gap-4"
              style={{ background: "var(--bg)" }}
            >
              <div
                className="w-8 h-8 rounded-[3px] flex items-center justify-center text-base"
                style={{ background: "var(--accent)", color: "var(--accent-dark)" }}
              >
                {["✦", "◈", "⬡", "◎"][i]}
              </div>
              <h3
                className="text-base font-medium text-[var(--fg)]"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm text-[var(--fg-muted)] leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
