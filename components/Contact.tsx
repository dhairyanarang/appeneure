"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const budgetOptions = [
  "Select budget range",
  "$5K – $10K",
  "$10K – $25K",
  "$25K – $50K",
  "$50K+",
];

const serviceOptions = ["Strategy & Research", "Design", "Development", "Full Package"];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    budget: budgetOptions[0],
    services: [] as string[],
  });

  const toggleService = (s: string) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(s)
        ? f.services.filter((x) => x !== s)
        : [...f.services, s],
    }));
  };

  const inputStyle = {
    background: "var(--bg)",
    border: "1px solid var(--border)",
    color: "var(--fg)",
    fontFamily: "var(--font-body)",
    borderRadius: "6px",
    padding: "12px 16px",
    fontSize: "14px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
  } as const;

  return (
    <section
      id="contact"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-[1280px] mx-auto px-5 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: heading */}
          <div ref={ref}>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-sm text-[var(--fg-muted)] mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Let&apos;s work together
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.4rem,5vw,4.5rem)] font-medium text-[var(--fg)] mb-8"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.05em" }}
            >
              Let&apos;s make it happen
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base text-[var(--fg-muted)] leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Tell us about your project and we&apos;ll get back to you within 24 hours.
              No commitments, no fluff — just an honest conversation about what
              we can build together.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-3"
            >
              <a
                href="mailto:hello@appeneure.com"
                className="text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-body)" }}
              >
                hello@appeneure.com
              </a>
              <a
                href="https://cal.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-[var(--fg)] hover:text-[var(--accent)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Book a call →
              </a>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs text-[var(--fg-muted)]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Name *
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={inputStyle}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs text-[var(--fg-muted)]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label
                className="text-xs text-[var(--fg-muted)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Message *
              </label>
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>

            {/* Budget */}
            <div className="flex flex-col gap-1.5">
              <label
                className="text-xs text-[var(--fg-muted)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Budget
              </label>
              <select
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                style={inputStyle}
              >
                {budgetOptions.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Service checkboxes */}
            <div className="flex flex-col gap-2">
              <label
                className="text-xs text-[var(--fg-muted)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Services needed
              </label>
              <div className="flex flex-wrap gap-2">
                {serviceOptions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => toggleService(s)}
                    className="px-3 py-1.5 text-xs rounded-[3px] border transition-all duration-200"
                    style={{
                      fontFamily: "var(--font-body)",
                      borderColor: form.services.includes(s)
                        ? "var(--fg)"
                        : "var(--border)",
                      background: form.services.includes(s)
                        ? "var(--fg)"
                        : "transparent",
                      color: form.services.includes(s)
                        ? "var(--bg)"
                        : "var(--fg-muted)",
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-2 px-6 py-3.5 text-sm font-medium rounded-[3px] transition-opacity duration-200 hover:opacity-80"
              style={{
                background: "var(--fg)",
                color: "var(--bg)",
                fontFamily: "var(--font-body)",
              }}
            >
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
