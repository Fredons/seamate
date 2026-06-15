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
    <section className="relative h-[92vh] min-h-[600px] w-full overflow-hidden bg-cream">
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

      {/* Light bone wash — fully opaque on the left third for dark-ink text,
          then clears so the photo reads crisply across the right ~40%. */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(247,244,236,1)_0%,rgba(247,244,236,0.94)_32%,rgba(247,244,236,0.4)_60%,rgba(247,244,236,0)_85%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-cream/55 via-transparent to-transparent" />

      {/* Content — top-aligned with a clamped top offset that always clears the
          floating nav (min 120px) and scales down from centre on tall screens.
          This prevents the eyebrow from tucking under the nav on short viewports. */}
      <div className="relative h-full mx-auto max-w-[1400px] px-6 md:px-12 flex flex-col justify-start pt-[clamp(122px,21vh,250px)] pb-28">
        <div className="max-w-[760px]">
          <span
            className="hero-rise inline-flex items-center gap-2.5 text-ink/65 text-[11px] md:text-[12px] uppercase tracking-[0.28em] font-medium"
            style={{ animationDelay: "120ms" }}
          >
            <span className="w-5 h-px bg-brass" />
            Seamate Group · African Development Platform · Est. 2007
          </span>

          <h1
            className="hero-rise font-display text-ink text-[clamp(2.9rem,6.5vw,5.6rem)] leading-[0.98] tracking-tight mt-6"
            style={{ animationDelay: "240ms" }}
          >
            Built in Lagos.{" "}
            <em className="italic text-green">Trusted across Africa.</em>
          </h1>

          <p
            className="hero-rise text-text-secondary text-lg md:text-xl leading-relaxed max-w-[560px] mt-7"
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
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-ink/20 bg-paper/40 backdrop-blur-sm hover:bg-paper/70 hover:border-green/50 px-7 py-4 text-ink font-medium text-[15px] tracking-wide transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
            >
              <span>Explore Our Divisions</span>
              <ArrowRight className="w-4 h-4 text-green group-hover:translate-x-0.5 transition-transform duration-500" />
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
                    i === active ? "w-10 bg-green" : "w-5 bg-ink/25 group-hover:bg-ink/50"
                  }`}
                />
              </button>
            ))}
          </div>

          <span className="hidden sm:flex items-center gap-2 text-ink/55 text-[11px] uppercase tracking-[0.25em]">
            Scroll
            <span className="w-px h-6 bg-ink/25 relative overflow-hidden">
              <span className="absolute inset-x-0 top-0 h-2 bg-ink/70 animate-[scrollcue_2s_ease-in-out_infinite]" />
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
