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
    <section aria-labelledby="partners-heading" className="relative bg-surface py-20 md:py-28 overflow-hidden border-t border-steel-line/50">
      <div className="mx-auto max-w-[1280px] px-4 md:px-12 mb-14 md:mb-16">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-7 h-[2px] bg-orange" />
          <span className="font-ui text-steel text-[11px] font-bold uppercase tracking-[0.18em]">
            Recognized &amp; Trusted
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end">
          <h2 id="partners-heading" className="md:col-span-7 font-display text-navy text-[clamp(1.9rem,3.4vw,2.8rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
            {variant === "rich" ? (
              <>
                The operators, regulators, and standards bodies{" "}
                <span className="text-orange">we answer to.</span>
              </>
            ) : (
              <>
                The names <span className="text-orange">our buyers already know.</span>
              </>
            )}
          </h2>
          <p className="md:col-span-5 font-body text-text-secondary text-[15px] leading-relaxed md:text-right md:pb-2">
            <span className="font-mono text-steel text-[12px] uppercase tracking-[0.18em]">
              {ALL_PARTNERS.length} partners
            </span>
            <span className="block mt-2">
              Clients, regulators, and accreditation bodies across Africa and the
              EMEA corridor.
            </span>
          </p>
        </div>
      </div>

      {variant === "rich" ? <RichTracks /> : <CompressedTrack />}

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-surface to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-surface to-transparent z-10" />
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
        <div className="mx-auto max-w-[1280px] px-4 md:px-12 mb-5">
          <span className="inline-flex items-center gap-2.5 font-ui text-steel text-[10px] font-bold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 bg-green" />
            {label}
          </span>
        </div>
      )}
      <div
        className={`marquee-track ${direction === "reverse" ? "marquee-reverse" : ""}`}
        style={{ ["--marquee-duration" as string]: `${speed}s` }}
      >
        <div className="marquee-inner gap-4 md:gap-5 px-2 md:px-2.5">
          {doubled.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="shrink-0 group bg-white border border-steel-line/60 hover:border-navy transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] flex items-center justify-center h-20 md:h-24 w-[180px] md:w-[220px] px-7"
              title={p.full}
            >
              <Image
                src={p.logo}
                alt={p.full}
                width={200}
                height={80}
                className="h-11 md:h-14 w-auto object-contain grayscale opacity-65 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                sizes="220px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
