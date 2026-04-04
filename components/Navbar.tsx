"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: "rgba(252,252,252,0.96)",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-5 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-base font-semibold text-[var(--fg)] tracking-tight"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.05em" }}
          >
            appeneure
          </a>

          {/* Nav links — desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center px-4 py-[9px] text-sm font-medium rounded-[3px] transition-colors duration-200 hover:opacity-85"
              style={{
                background: "var(--fg)",
                color: "var(--bg)",
                fontFamily: "var(--font-body)",
                letterSpacing: "-0.01em",
              }}
            >
              Get in touch
            </a>

            {/* Hamburger — mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-[5px] p-1"
              aria-label="Toggle menu"
            >
              <span
                className="block w-5 h-[1.5px] bg-[var(--fg)] transition-all duration-300 origin-center"
                style={{
                  transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="block w-5 h-[1.5px] bg-[var(--fg)] transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block w-5 h-[1.5px] bg-[var(--fg)] transition-all duration-300 origin-center"
                style={{
                  transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile off-canvas */}
      <motion.div
        initial={false}
        animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -8 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="fixed top-16 left-0 right-0 z-40 md:hidden bg-[var(--bg)] border-b border-[var(--border)]"
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
      >
        <div className="max-w-[1280px] mx-auto px-5 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-base text-[var(--fg)] border-b border-[var(--border)] last:border-0"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center justify-center py-3 text-sm font-medium rounded-[3px]"
            style={{
              background: "var(--fg)",
              color: "var(--bg)",
              fontFamily: "var(--font-body)",
            }}
          >
            Get in touch
          </a>
        </div>
      </motion.div>
    </>
  );
}
