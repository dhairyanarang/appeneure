"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, { damping: 28, stiffness: 180, mass: 0.4 });
  const ringY = useSpring(mouseY, { damping: 28, stiffness: 180, mass: 0.4 });

  const ringScale = useMotionValue(1);
  const smoothScale = useSpring(ringScale, { damping: 20, stiffness: 200 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onEnter = () => ringScale.set(1.6);
    const onLeave = () => ringScale.set(1);

    window.addEventListener("mousemove", move);

    // Use event delegation — no need to re-query elements
    document.addEventListener("mouseover", (e) => {
      const el = e.target as HTMLElement;
      if (el.closest("a, button, [role='button']")) onEnter();
    });
    document.addEventListener("mouseout", (e) => {
      const el = e.target as HTMLElement;
      if (el.closest("a, button, [role='button']")) onLeave();
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [mouseX, mouseY, ringScale]);

  return (
    <>
      {/* Ring — lags slightly behind for elegance */}
      <motion.div
        className="fixed top-0 left-0 w-7 h-7 rounded-full border border-white/30 pointer-events-none z-[9999]"
        style={{
          x: ringX,
          y: ringY,
          scale: smoothScale,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Dot — instant */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#6EE7B7] pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
