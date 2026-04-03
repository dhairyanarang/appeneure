"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navLinks = ["Work", "Process", "About"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#080808]/90 backdrop-blur-xl" : ""
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="font-display text-[#F5F5F5] font-semibold text-base tracking-tight"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Appeneure
        </a>

        {/* Nav links — centered */}
        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#888888] hover:text-[#F5F5F5] text-sm transition-colors duration-300 relative group"
            >
              {link}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#6EE7B7] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="text-sm px-5 py-2 rounded-full bg-[#6EE7B7] text-[#080808] font-medium hover:bg-[#5dd9a8] transition-all duration-200 hover:scale-105"
        >
          Let&apos;s talk
        </a>
      </div>
    </motion.header>
  );
}
