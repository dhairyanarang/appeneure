"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { services } from "@/lib/data";

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col p-8 gap-8"
      style={{ background: "var(--bg-alt)" }}
    >
      {/* Number */}
      <span
        className="text-xs font-medium text-[var(--fg-muted)]"
        style={{ fontFamily: "var(--font-body)" }}
      >
        0{service.id}
      </span>

      {/* Title */}
      <h3
        className="text-2xl font-medium text-[var(--fg)]"
        style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}
      >
        {service.title}
      </h3>

      {/* Items */}
      <ul className="flex flex-col gap-2.5">
        {service.items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2.5 text-sm text-[var(--fg-muted)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <span
              className="w-[5px] h-[5px] rounded-full shrink-0"
              style={{ background: "var(--accent)" }}
            />
            {item}
          </li>
        ))}
      </ul>

      {/* Description */}
      <p
        className="text-sm text-[var(--fg-muted)] leading-relaxed flex-1"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {service.description}
      </p>

      {/* CTA */}
      <a
        href={service.href}
        className="inline-flex items-center gap-1 text-sm font-medium text-[var(--fg)] hover:gap-2 transition-all duration-200"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {service.cta} <span>→</span>
      </a>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-alt)",
      }}
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
            What we do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2rem,4vw,3.5rem)] font-medium text-[var(--fg)]"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.05em" }}
          >
            Our solutions
          </motion.h2>
        </div>

        {/* 3 cards side by side */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px"
          style={{ background: "var(--border)" }}
        >
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
