"use client";

// ═══════════════════════════════════════════
// Navbar — pill nav with mobile sheet
// Sticky-blur background, scroll-aware shadow, full-screen mobile menu.
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
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const ctaHref = buildMailto({
    subject: "General Inquiry",
    body: "Hello Seamate,\n\nI'd like to discuss working with your team.\n\n",
  });

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 px-4 pt-5">
        <div
          className={`mx-auto max-w-[1400px] flex items-center justify-between rounded-full bg-white/85 backdrop-blur-xl px-5 md:px-6 py-3 border border-ink/[0.06] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.06)]" : "shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
          }`}
        >
          <Link href="/" className="flex items-center shrink-0" aria-label="Seamate — home">
            <Image src="/seamate-logo.png" alt="Seamate Maritime Integrated Services" width={140} height={36} className="h-9 w-auto" priority />
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="link-slide text-[13px] font-medium tracking-wide text-ink/55 hover:text-green transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={ctaHref}
              className="hidden md:inline-flex group items-center gap-2 rounded-full bg-green hover:bg-green-light px-4 py-2 text-cream text-[13px] font-semibold tracking-wide transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
            >
              <span>Get in Touch</span>
              <span className="w-5 h-5 rounded-full bg-cream/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[1px] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                <ArrowUpRight className="w-3 h-3 text-cream" />
              </span>
            </a>

            <button
              type="button"
              className="md:hidden w-10 h-10 rounded-full bg-ink/[0.04] border border-ink/[0.06] flex items-center justify-center text-ink/70 hover:text-ink transition-all duration-300"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-ink/30 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-[420px] bg-cream shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-ink/[0.06]">
            <Image src="/seamate-logo.png" alt="Seamate" width={120} height={32} className="h-8 w-auto" />
            <button
              type="button"
              className="w-10 h-10 rounded-full bg-ink/[0.04] flex items-center justify-center text-ink/70"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>
          <nav className="p-6 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-ink text-3xl py-3 border-b border-ink/[0.06] hover:text-green transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={ctaHref}
              onClick={() => setOpen(false)}
              className="group mt-6 flex items-center justify-between gap-3 rounded-full bg-green px-6 py-4 text-cream font-semibold text-[15px] tracking-wide"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 text-cream" />
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
