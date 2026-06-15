"use client";

// ═══════════════════════════════════════════
// HeroSlider — cinematic full-bleed hero.
// Replaces the split-layout hero the client found "generic".
// Honors the old site's full-bleed-image + big-serif-headline pattern,
// elevated: crossfading slideshow, slow Ken Burns zoom, gradient scrim,
// refined type, slide controls, scroll cue. Reduced-motion aware.
// ═══════════════════════════════════════════

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "./icons";
import { buildMailto } from "@/content/site";

const SLIDES = [
  {
    src: "/images/hero/hero-containers.jpg",
    alt: "Aerial view over a fully loaded container vessel at sea",
    position: "object-center",
  },
  {
    src: "/images/hero/hero-jetty.jpg",
    alt: "A timber jetty reaching into calm coastal water at dawn",
    position: "object-[center_60%]",
  },
];

const ADVANCE_MS = 6500;

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) return;

    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, ADVANCE_MS);
    return () => clearInterval(id);
  }, []);

  const capabilityHref = buildMailto({
    subject: "Capability Statement Request",
    body: "Hello Seamate Group,\n\nPlease send your latest capability statement covering divisions, certifications, and engagement scope.\n\nThank you,\n",
  });

  return (
    <section className="relative h-[92vh] min-h-[600px] w-full overflow-hidden bg-navy">
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-[cubic-bezier(0.32,0.72,0,1)]"
          style={{ opacity: i === active ? 1 : 0 }}
          aria-hidden={i === active ? undefined : true}
        >
          <div className={`relative h-full w-full ${i === active ? "hero-kenburns" : ""}`}>
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className={`object-cover ${slide.position}`}
            />
          </div>
        </div>
      ))}

      {/* Scrim — left-weighted + bottom-up so headline stays legible on both images */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/55 to-navy/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/25" />

      {/* Content — pt/pb keep it clear of the floating nav and the slide controls
          on shorter viewports while staying vertically centred on tall screens. */}
      <div className="relative h-full mx-auto max-w-[1400px] px-6 md:px-12 flex flex-col justify-center pt-28 pb-32 md:pt-24 md:pb-28">
        <div className="max-w-[760px]">
          <span
            className="hero-rise inline-flex items-center gap-2.5 text-cream/90 text-[11px] md:text-[12px] uppercase tracking-[0.28em] font-medium"
            style={{ animationDelay: "120ms" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-light" />
            Seamate Group · African Development Platform · Est. 2007
          </span>

          <h1
            className="hero-rise font-display text-cream text-[clamp(2.9rem,6.5vw,5.6rem)] leading-[0.98] tracking-tight mt-6 [text-shadow:0_2px_40px_rgba(10,25,41,0.5)]"
            style={{ animationDelay: "240ms" }}
          >
            Built in Lagos.{" "}
            <em className="italic text-green-light">Trusted across Africa.</em>
          </h1>

          <p
            className="hero-rise text-cream/85 text-lg md:text-xl leading-relaxed max-w-[560px] mt-7 [text-shadow:0_1px_20px_rgba(10,25,41,0.5)]"
            style={{ animationDelay: "380ms" }}
          >
            Eighteen years of ISO 9001:2015 operations across maritime, energy,
            logistics, and workforce systems — for the operators NLNG, Dangote
            Refinery, and the institutions building Africa&rsquo;s next two decades.
          </p>

          <div
            className="hero-rise flex flex-col sm:flex-row gap-4 mt-10"
            style={{ animationDelay: "520ms" }}
          >
            <a
              href={capabilityHref}
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-green hover:bg-green-light px-7 py-4 text-cream font-semibold text-[15px] tracking-wide transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] hover:-translate-y-[1px] hover:shadow-[0_12px_40px_rgba(29,122,75,0.4)]"
            >
              <span>Request Capability Statement</span>
              <span className="w-7 h-7 rounded-full bg-cream/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[1px] transition-all duration-500">
                <ArrowUpRight className="w-4 h-4 text-cream" />
              </span>
            </a>
            <Link
              href="/divisions"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-cream/30 bg-cream/[0.04] backdrop-blur-sm hover:bg-cream/10 hover:border-cream/50 px-7 py-4 text-cream font-medium text-[15px] tracking-wide transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
            >
              <span>Explore Our Divisions</span>
              <ArrowRight className="w-4 h-4 text-cream group-hover:translate-x-0.5 transition-transform duration-500" />
            </Link>
          </div>
        </div>
      </div>

      {/* Slide controls — bottom left, aligned to the content column */}
      <div className="absolute bottom-8 md:bottom-10 left-0 right-0">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show slide ${i + 1}`}
                aria-current={i === active}
                className="group py-2"
              >
                <span
                  className={`block h-[3px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    i === active ? "w-10 bg-cream" : "w-5 bg-cream/40 group-hover:bg-cream/70"
                  }`}
                />
              </button>
            ))}
          </div>

          <span className="hidden sm:flex items-center gap-2 text-cream/60 text-[11px] uppercase tracking-[0.25em]">
            Scroll
            <span className="w-px h-6 bg-cream/30 relative overflow-hidden">
              <span className="absolute inset-x-0 top-0 h-2 bg-cream/80 animate-[scrollcue_2s_ease-in-out_infinite]" />
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
