"use client";

// ═══════════════════════════════════════════
// HeroSlider — Institutional Excellence hero (Stitch).
// Full-bleed photographic slideshow + left navy gradient, "Since 2007" orange
// pill, Inter extrabold headline with orange accent, dual CTA. White on navy.
// Crossfade + Ken Burns, reduced-motion aware.
// ═══════════════════════════════════════════

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, MS } from "./icons";
import { buildMailto } from "@/content/site";

const SLIDES = [
  { src: "/images/hero/hero-containers.jpg", alt: "Container vessel at the Lagos port at dawn", position: "object-center" },
  { src: "/images/dangote-composite.jpg", alt: "Dangote refinery, tanker truck and offshore vessel at SPM", position: "object-center" },
  { src: "/images/hero/hero-jetty.jpg", alt: "A timber jetty reaching into calm coastal water", position: "object-[center_60%]" },
];

const ADVANCE_MS = 6500;

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) return;
    const id = setInterval(() => setActive((i) => (i + 1) % SLIDES.length), ADVANCE_MS);
    return () => clearInterval(id);
  }, []);

  const capabilityHref = buildMailto({
    subject: "Capability Statement Request",
    body: "Hello Seamate Group,\n\nPlease send your latest capability statement covering divisions, certifications, and engagement scope.\n\nThank you,\n",
  });

  return (
    <section className="relative h-[92vh] min-h-[620px] w-full overflow-hidden bg-navy">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-[cubic-bezier(0.32,0.72,0,1)]"
          style={{ opacity: i === active ? 1 : 0 }}
          aria-hidden={i === active ? undefined : true}
        >
          <div className={`relative h-full w-full ${i === active ? "hero-kenburns" : ""}`}>
            <Image src={slide.src} alt={slide.alt} fill priority={i === 0} sizes="100vw" className={`object-cover ${slide.position}`} />
          </div>
        </div>
      ))}

      {/* Navy scrim — left-weighted for white text */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/45 to-navy/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/30" />

      <div className="relative h-full mx-auto max-w-[1280px] px-4 md:px-12 flex flex-col justify-center pt-[clamp(100px,13vh,180px)] pb-28">
        <div className="max-w-[820px]">
          <span
            className="hero-rise inline-flex items-center gap-2 border border-orange/40 bg-orange/15 text-orange px-4 py-1.5 rounded-sm font-ui text-[11px] font-bold uppercase tracking-[0.2em]"
            style={{ animationDelay: "100ms" }}
          >
            <MS name="anchor" className="text-[14px]" />
            Since 2007 · ISO 9001:2015
          </span>

          <h1
            className="hero-rise font-display text-white text-[clamp(2.4rem,4.8vw,4.6rem)] font-extrabold leading-[1.03] tracking-[-0.02em] mt-5 [text-shadow:0_2px_40px_rgba(0,11,26,0.5)]"
            style={{ animationDelay: "220ms" }}
          >
            African Infrastructure,{" "}
            <span className="text-orange">Global Excellence.</span>
          </h1>

          <p
            className="hero-rise font-body text-on-dark/85 text-lg md:text-xl leading-relaxed max-w-[560px] mt-7 [text-shadow:0_1px_20px_rgba(0,11,26,0.5)]"
            style={{ animationDelay: "360ms" }}
          >
            The preferred integrated-services partner for Africa&rsquo;s maritime,
            energy, and logistics sectors — eighteen years of operational
            precision, trusted by NLNG and Dangote Refinery.
          </p>

          <div className="hero-rise flex flex-col sm:flex-row gap-4 mt-10" style={{ animationDelay: "500ms" }}>
            <a
              href={capabilityHref}
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-orange hover:bg-orange-dark px-8 py-4 rounded-md text-white font-ui text-[12px] font-bold uppercase tracking-[0.1em] transition-all duration-300 active:scale-[0.98]"
            >
              <span>Request Capability Statement</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </a>
            <Link
              href="/divisions"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-md border border-white/25 bg-white/[0.06] backdrop-blur-sm hover:bg-white/12 hover:border-white/40 px-8 py-4 text-white font-ui text-[12px] font-bold uppercase tracking-[0.1em] transition-all duration-300 active:scale-[0.98]"
            >
              <span>Explore Divisions</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-8 md:bottom-10 left-0 right-0">
        <div className="mx-auto max-w-[1280px] px-4 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {SLIDES.map((slide, i) => (
              <button key={slide.src} type="button" onClick={() => setActive(i)} aria-label={`Show slide ${i + 1}`} aria-current={i === active} className="group py-2">
                <span className={`block h-[3px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${i === active ? "w-10 bg-orange" : "w-5 bg-white/40 group-hover:bg-white/70"}`} />
              </button>
            ))}
          </div>
          <span className="hidden sm:flex items-center gap-2 text-white/60 text-[11px] font-ui font-semibold uppercase tracking-[0.25em]">
            Scroll
            <span className="w-px h-6 bg-white/30 relative overflow-hidden">
              <span className="absolute inset-x-0 top-0 h-2 bg-white/80 animate-[scrollcue_2s_ease-in-out_infinite]" />
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
