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
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 mb-14 md:mb-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-brass" />
          <span className="font-mono text-green text-[11px] uppercase tracking-[0.28em]">
            Recognized &amp; Trusted
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end">
          <h2 id="partners-heading" className="md:col-span-7 font-display text-ink text-[clamp(2rem,3.6vw,3rem)] leading-[1.06] tracking-tight">
            {variant === "rich" ? (
              <>
                The operators, regulators, and standards bodies{" "}
                <em className="italic text-green">we answer to.</em>
              </>
            ) : (
              <>
                The names <em className="italic text-green">our buyers already know.</em>
              </>
            )}
          </h2>
          <p className="md:col-span-5 text-text-secondary text-[15px] leading-relaxed md:text-right md:pb-2">
            <span className="font-mono text-ink/45 text-[12px] uppercase tracking-[0.2em]">
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
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-cream to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-cream to-transparent z-10" />
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
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 mb-5">
          <span className="inline-flex items-center gap-2.5 font-mono text-ink/45 text-[10px] uppercase tracking-[0.25em]">
            <span className="w-1.5 h-1.5 rounded-full bg-green/50" />
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
              className="shrink-0 group rounded-2xl bg-paper border border-ink/[0.06] shadow-[0_1px_0_rgba(20,39,43,0.02)] hover:border-green/30 hover:shadow-[0_8px_24px_rgba(20,39,43,0.06)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] flex items-center justify-center h-20 md:h-24 w-[180px] md:w-[220px] px-7"
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
