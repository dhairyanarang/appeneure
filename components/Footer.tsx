"use client";

import { footerNav } from "@/lib/data";

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "X (Twitter)", href: "#" },
  { label: "Behance", href: "#" },
  { label: "Dribbble", href: "#" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-dark)", borderTop: "1px solid var(--border-dark)" }}>
      {/* Top section */}
      <div className="max-w-[1280px] mx-auto px-5 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand col */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <a
              href="/"
              className="text-xl font-semibold"
              style={{
                color: "var(--fg-dark)",
                fontFamily: "var(--font-display)",
                letterSpacing: "-0.05em",
              }}
            >
              appeneure
            </a>
            <p
              className="text-sm leading-relaxed max-w-[280px]"
              style={{ color: "var(--fg-dark-muted)", fontFamily: "var(--font-body)" }}
            >
              App Development Studio — building mobile and web products that
              users love and businesses depend on.
            </p>
            {/* Social links */}
            <div className="flex flex-wrap gap-4 mt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-xs transition-colors duration-200 hover:text-[var(--accent)]"
                  style={{ color: "var(--fg-dark-muted)", fontFamily: "var(--font-body)" }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Menu */}
          <div className="flex flex-col gap-4">
            <p
              className="text-xs font-medium uppercase tracking-widest mb-1"
              style={{ color: "var(--fg-dark-muted)", fontFamily: "var(--font-body)" }}
            >
              Menu
            </p>
            {footerNav.menu.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm transition-colors duration-200 hover:text-[var(--accent)]"
                style={{ color: "var(--fg-dark-muted)", fontFamily: "var(--font-body)" }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <p
              className="text-xs font-medium uppercase tracking-widest mb-1"
              style={{ color: "var(--fg-dark-muted)", fontFamily: "var(--font-body)" }}
            >
              Services
            </p>
            {footerNav.services.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm transition-colors duration-200 hover:text-[var(--accent)]"
                style={{ color: "var(--fg-dark-muted)", fontFamily: "var(--font-body)" }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <p
              className="text-xs font-medium uppercase tracking-widest mb-1"
              style={{ color: "var(--fg-dark-muted)", fontFamily: "var(--font-body)" }}
            >
              Legal
            </p>
            {footerNav.legal.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm transition-colors duration-200 hover:text-[var(--accent)]"
                style={{ color: "var(--fg-dark-muted)", fontFamily: "var(--font-body)" }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "var(--border-dark)" }}
      >
        <div className="max-w-[1280px] mx-auto px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span
            className="text-xs"
            style={{ color: "var(--fg-dark-muted)", fontFamily: "var(--font-body)" }}
          >
            © {new Date().getFullYear()} Appeneure. All rights reserved.
          </span>
          <span
            className="text-xs"
            style={{ color: "var(--fg-dark-muted)", fontFamily: "var(--font-body)" }}
          >
            Built with ♡ in India
          </span>
        </div>
      </div>
    </footer>
  );
}
