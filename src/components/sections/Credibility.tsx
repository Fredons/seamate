// ═══════════════════════════════════════════
// Credibility — "Built on Credibility" dark navy split (Stitch).
// Image with orange edge + floating stat card · story · stat grid · CTA.
// The dark anchor of the homepage. Sustainability themes live on /about.
// ═══════════════════════════════════════════

import Image from "next/image";
import Link from "next/link";
import { MS } from "../icons";

export function Credibility() {
  return (
    <section className="bg-navy py-24 md:py-32 overflow-hidden" aria-labelledby="credibility-heading">
      <div className="mx-auto max-w-[1280px] px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image + floating stat */}
          <div className="relative reveal">
            <div className="aspect-[4/5] border-l-[3px] border-orange pl-1.5">
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src="/images/about-tanker-sunset.jpg"
                  alt="Seamate tanker operations at sea"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-8 -right-4 md:-bottom-10 md:-right-10 bg-white px-8 py-7 md:px-10 md:py-9 border border-steel-line/60 shadow-[0_20px_50px_rgba(0,11,26,0.35)]">
              <p className="font-display text-navy text-4xl md:text-5xl font-black leading-none">18+</p>
              <p className="font-ui text-steel text-[11px] font-bold uppercase tracking-[0.14em] mt-2">Years of Impact</p>
            </div>
          </div>

          {/* Story */}
          <div className="text-white reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-7 h-[2px] bg-green-light" />
              <span className="font-ui text-green-light text-[11px] font-bold uppercase tracking-[0.18em]">Our Foundation</span>
            </div>
            <h2 id="credibility-heading" className="font-display text-white text-[clamp(2.2rem,4.2vw,3.4rem)] font-extrabold tracking-[-0.02em] leading-[1.05]">
              Built on <span className="text-orange">Credibility.</span>
            </h2>
            <div className="space-y-5 font-body text-on-dark/70 text-[17px] leading-relaxed mt-7 max-w-[58ch]">
              <p>
                Founded in 2007, Seamate has evolved from a specialised marine-services
                agency into an integrated African development platform spanning six
                divisions. Our success is rooted in deep local knowledge combined with
                global standards of execution.
              </p>
              <p>
                As a pivotal African industrial partner, we move essential energy
                resources and cargo across the continent — keeping the wheels of the
                regional economy turning, with safety at the core of every operation.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-10">
              <div className="border-t-2 border-orange/70 pt-5">
                <p className="font-display text-white text-lg font-bold">Lagos Hub</p>
                <p className="font-body text-on-dark/55 text-[14px] mt-1">Strategic Operations Centre</p>
              </div>
              <div className="border-t-2 border-green/70 pt-5">
                <p className="font-display text-white text-lg font-bold">HSSE · Blue &amp; Green</p>
                <p className="font-body text-on-dark/55 text-[14px] mt-1">Sustainability at the core</p>
              </div>
            </div>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-3 bg-white text-navy px-8 py-4 rounded-md font-ui text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-surface-2 transition-all duration-300"
            >
              Our History <MS name="history" className="text-[18px]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
