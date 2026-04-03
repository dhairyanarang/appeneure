"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navLinks = ["Work", "Process", "About", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/80 backdrop-blur-md border-b border-white/5"
          : ""
      }`}
    >
      <a href="/" className="text-[#F5F5F5] font-semibold text-lg tracking-tight">
        Appeneure
      </a>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[#888888] hover:text-[#F5F5F5] text-sm transition-colors duration-200 relative group"
          >
            {link}
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#6EE7B7] transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </nav>

      <a
        href="#contact"
        className="text-sm px-4 py-2 rounded-full border border-white/10 text-[#F5F5F5] hover:bg-white/5 transition-all duration-200"
      >
        Let&apos;s talk →
      </a>
    </motion.header>
  );
}
