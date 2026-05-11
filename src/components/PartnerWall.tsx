// ═══════════════════════════════════════════
// PartnerWall — sitewide credibility section that sits just above the footer.
// Two variants:
//   - "rich"     : three labelled tracks scrolling in alternating directions.
//                  Used on the homepage only.
//   - "compressed" : single track, slower, no track labels.
//                    Used on every other page (except /contact).
// Both pause on hover and degrade to a static grid under prefers-reduced-motion
// via the .marquee-track / .marquee-reverse classes in globals.css.
// Server component — no client state needed.
// ═══════════════════════════════════════════

import Image from "next/image";
import { OPERATORS, REGULATORS, STANDARDS, PROJECT_CLIENTS, ALL_PARTNERS, type Partner } from "@/content/partners";

type Variant = "rich" | "compressed";

export function PartnerWall({ variant = "compressed" }: { variant?: Variant }) {
  return (
    <section aria-labelledby="partners-heading" className="relative bg-cream py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex items-baseline justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-[640px]">
            <span className="block text-[11px] uppercase tracking-[0.25em] text-green font-medium mb-3">
              Recognized &amp; Trusted
            </span>
            <h2 id="partners-heading" className="font-display text-ink text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.1] tracking-tight">
              {variant === "rich" ? (
                <>
                  Operators, regulators, and standards bodies{" "}
                  <em className="text-green-muted">across Africa and EMEA.</em>
                </>
              ) : (
                <>
                  The names <em className="text-green-muted">our buyers already know.</em>
                </>
              )}
            </h2>
          </div>
          <span className="hidden md:inline-block font-mono text-ink/40 text-[11px] uppercase tracking-[0.2em] shrink-0">
            {ALL_PARTNERS.length} partners
          </span>
        </div>
      </div>

      {variant === "rich" ? <RichTracks /> : <CompressedTrack />}

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-cream to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-cream to-transparent z-10" />
    </section>
  );
}

// ─── Rich variant: four labelled tracks ───
function RichTracks() {
  return (
    <div className="space-y-10 md:space-y-12">
      <Track label="Operators & Clients" logos={OPERATORS} direction="forward" speed={32} />
      <Track label="Project Engagements" logos={PROJECT_CLIENTS} direction="reverse" speed={36} />
      <Track label="Regulators & Authorities" logos={REGULATORS} direction="forward" speed={40} />
      <Track label="Standards & Accreditation" logos={STANDARDS} direction="reverse" speed={44} />
    </div>
  );
}

// ─── Compressed variant: single mixed track ───
function CompressedTrack() {
  return <Track logos={ALL_PARTNERS} direction="forward" speed={48} />;
}

// ─── Track primitive ───
function Track({
  logos,
  label,
  direction,
  speed,
}: {
  logos: Partner[];
  label?: string;
  direction: "forward" | "reverse";
  speed: number; // seconds for one full loop
}) {
  // Duplicate the array twice so translateX(-50%) yields a seamless loop.
  const doubled = [...logos, ...logos];

  return (
    <div>
      {label && (
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 mb-4">
          <span className="font-mono text-ink/35 text-[10px] uppercase tracking-[0.25em]">{label}</span>
        </div>
      )}
      <div
        className={`marquee-track ${direction === "reverse" ? "marquee-reverse" : ""}`}
        style={{ ["--marquee-duration" as string]: `${speed}s` }}
      >
        <div className="marquee-inner">
          {doubled.map((p, i) => (
            <div key={`${p.name}-${i}`} className="shrink-0 px-8 md:px-10 group" title={p.full}>
              <div className="h-16 md:h-20 flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                <Image
                  src={p.logo}
                  alt={p.full}
                  width={200}
                  height={80}
                  className="h-12 md:h-16 w-auto object-contain"
                  sizes="200px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
