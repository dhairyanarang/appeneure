"use client";

import { clientLogos } from "@/lib/data";

const logos = [...clientLogos, ...clientLogos]; // duplicate for seamless loop

export default function LogoMarquee() {
  return (
    <section
      className="py-8 border-y overflow-hidden"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="flex">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {logos.map((name, i) => (
            <span
              key={i}
              className="flex items-center gap-12 text-xs font-medium uppercase tracking-[0.18em]"
              style={{ color: "var(--fg-muted)", fontFamily: "var(--font-body)" }}
            >
              {name}
              <span
                className="inline-block w-1 h-1 rounded-full shrink-0"
                style={{ background: "var(--accent)" }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
