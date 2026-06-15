// ═══════════════════════════════════════════
// TrustStrip — Institutional Excellence (Stitch).
// Certified Excellence badge + Tier-1 partner logos, grayscale.
// ═══════════════════════════════════════════

import Image from "next/image";
import { TIER_1 } from "@/content/partners";
import { MS } from "@/components/icons";

export function TrustStrip() {
  return (
    <section className="bg-surface-2 border-b border-steel-line/60" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-[1280px] px-4 md:px-12 py-10 md:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex flex-col items-center lg:items-start shrink-0">
            <div className="flex items-center gap-2 mb-1.5">
              <MS name="verified" filled className="text-green text-[20px]" />
              <span id="trust-heading" className="font-ui text-steel text-[11px] font-bold uppercase tracking-[0.18em]">
                Certified Excellence
              </span>
            </div>
            <p className="font-display text-navy text-xl font-bold tracking-tight">
              ISO 9001:2015 <span className="text-green">Certified</span>
            </p>
          </div>

          <div className="hidden lg:block w-px h-14 bg-steel-line/70" />

          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
            {TIER_1.map((p) => (
              <div key={p.name} className="grayscale opacity-65 hover:opacity-100 hover:grayscale-0 transition-all duration-500" title={p.full}>
                <Image src={p.logo} alt={p.full} width={160} height={64} sizes="160px" className="h-12 md:h-14 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
