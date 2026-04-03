"use client";

import { motion } from "framer-motion";
import { marqueeItems } from "@/lib/data";

function MarqueeTrack({ reverse = false }: { reverse?: boolean }) {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 text-[#888888] text-sm tracking-[0.15em] uppercase"
          >
            {item}
            <span className="inline-block w-1 h-1 rounded-full bg-[#6EE7B7]" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="py-8 border-y border-white/5 overflow-hidden">
      <MarqueeTrack />
    </section>
  );
}
