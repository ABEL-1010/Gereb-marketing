"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto max-w-6xl overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
          scrolled || open
            ? "border-white/15 bg-forest/75 shadow-lg shadow-night/30"
            : "border-white/10 bg-white/5"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3.5 sm:px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          {/* route-pin mark */}
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-green text-mint transition-colors group-hover:bg-mint group-hover:text-night">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M4 19c4-1 3-6 7-7s4-6 8-7"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeDasharray="1 4"
              />
              <circle cx="4" cy="19" r="2.5" fill="currentColor" />
              <circle cx="19" cy="5" r="2.5" fill="currentColor" />
            </svg>
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            gereb<span className="text-mint">*</span>
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-mint ${
                pathname === l.href ? "text-mint" : "text-fog"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-green px-5 py-2.5 text-sm font-bold text-paper transition-all hover:bg-mint hover:text-night hover:shadow-lg hover:shadow-mint/25"
          >
            Start a project
          </Link>
        </nav>

        {/* mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-paper transition-transform ${
              open ? "translate-y-1 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-paper transition-transform ${
              open ? "-translate-y-1 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

        {/* mobile menu */}
        {open && (
          <nav className="flex flex-col gap-1 border-t border-white/10 px-5 pb-6 pt-3 md:hidden">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-lg px-3 py-3 text-lg ${
                  pathname === l.href ? "text-mint" : "text-paper"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-full bg-green px-5 py-3 text-center font-bold text-paper"
            >
              Start a project
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
