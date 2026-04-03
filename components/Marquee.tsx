"use client";

import { motion } from "framer-motion";
import { marqueeItems } from "@/lib/data";

function MarqueeTrack() {
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-[#333] text-xs tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {item}
            <span className="inline-block w-1 h-1 rounded-full bg-[#6EE7B7]/40 shrink-0" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="py-6 border-y border-white/[0.04] overflow-hidden">
      <MarqueeTrack />
    </section>
  );
}
