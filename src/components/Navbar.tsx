"use client";

// ═══════════════════════════════════════════
// Navbar — institutional bar (Stitch "Institutional Excellence").
// Full-width white bar, hairline bottom border, navy wordmark, Inter label
// nav, orange CTA. Shrinks on scroll. Full-screen mobile sheet.
// ═══════════════════════════════════════════

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MenuIcon, CloseIcon } from "./icons";
import { NAV, buildMailto } from "@/content/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const ctaHref = buildMailto({
    subject: "General Inquiry",
    body: "Hello Seamate Group,\n\nI'd like to discuss working with your team.\n\n",
  });

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b transition-all duration-300 ${
          scrolled ? "border-steel-line/70 shadow-[0_1px_0_rgba(21,23,28,0.04)]" : "border-transparent"
        }`}
      >
        {/* Brand keyline — the green thread, tied to the Seamate mark */}
        <div className="h-[3px] w-full bg-green" />
        <nav
          className={`mx-auto max-w-[1280px] flex items-center justify-between px-4 md:px-12 transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Seamate Group — home">
            <Image src="/seamate-logo.png" alt="" width={150} height={40} className="h-10 w-auto" priority />
            <span className="hidden sm:block font-display text-ink text-[15px] font-bold tracking-tight uppercase">
              Seamate Group
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="link-slide font-ui text-[13px] font-semibold uppercase tracking-[0.06em] text-steel hover:text-navy transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={ctaHref}
              className="hidden md:inline-flex group items-center gap-2 bg-orange hover:bg-orange-dark px-5 py-2.5 rounded-md text-white font-ui text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-300 active:scale-[0.98]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </a>

            <button
              type="button"
              className="md:hidden w-10 h-10 rounded-md bg-surface-2 border border-steel-line/60 flex items-center justify-center text-navy"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-400 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-navy/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-[420px] bg-surface shadow-2xl transition-transform duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-steel-line/60">
            <Image src="/seamate-logo.png" alt="Seamate Group" width={130} height={34} className="h-9 w-auto" />
            <button
              type="button"
              className="w-10 h-10 rounded-md bg-surface-2 flex items-center justify-center text-navy"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>
          <nav className="p-6 flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-ink text-2xl font-bold tracking-tight py-4 border-b border-steel-line/50 hover:text-orange transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={ctaHref}
              onClick={() => setOpen(false)}
              className="group mt-6 flex items-center justify-between gap-3 bg-orange px-6 py-4 rounded-md text-white font-ui text-[13px] font-bold uppercase tracking-[0.12em]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
