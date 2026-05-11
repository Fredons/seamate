// ═══════════════════════════════════════════
// TrustStrip — five Tier-1 logos directly under the hero.
// The names a buyer recognizes in under one second.
// ═══════════════════════════════════════════

import Image from "next/image";
import { TIER_1 } from "@/content/partners";

export function TrustStrip() {
  return (
    <section className="bg-white border-y border-ink/[0.06]" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-14 md:py-16">
        <p id="trust-heading" className="text-ink/40 text-[11px] uppercase tracking-[0.25em] font-medium text-center mb-10">
          Trusted, Licensed &amp; Certified by
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-10 md:gap-x-20">
          {TIER_1.map((p) => (
            <div key={p.name} className="reveal opacity-85 hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]" title={p.full}>
              <Image
                src={p.logo}
                alt={p.full}
                width={180}
                height={80}
                sizes="180px"
                className="h-14 md:h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
