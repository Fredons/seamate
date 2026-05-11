// ═══════════════════════════════════════════
// /sustainability — four pillars on one page, anchored.
// Cadetship (SASI) gets the strongest treatment with real numbers.
// ═══════════════════════════════════════════

import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { MailButton } from "@/components/MailButton";
import { SUSTAINABILITY } from "@/content/sustainability";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Maritime decarbonisation, blue economy stewardship, the SASI cadetship pipeline (500 → 10,000 African seafarers), and the Maritime Technology & STEM Hub.",
  alternates: { canonical: "/sustainability" },
};

export default function SustainabilityPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Sustainability"
        title={"The maritime future\nAfrica deserves."}
        lede="Decarbonisation work, blue-economy stewardship, and the Seamate Africa Seatime Initiative — built for the next two decades of African maritime, not a marketing line."
      />

      {/* Hero image strip — native 3:2; matching container avoids crop. */}
      <section className="bg-cream pb-16 md:pb-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="reveal img-reveal rounded-[2rem] bg-ink/[0.03] p-1.5 ring-1 ring-ink/[0.04]">
            <div className="rounded-[calc(2rem-0.375rem)] overflow-hidden relative aspect-[3/2]">
              <Image
                src="/images/blue-economy-aerial.jpg"
                alt="Aerial view of a research vessel beside aquaculture pens in a deep-blue bay"
                fill
                priority
                sizes="(min-width: 1400px) 1376px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Anchor index */}
      <section className="bg-cream border-y border-ink/[0.06]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {SUSTAINABILITY.map((p) => (
              <a
                key={p.slug}
                href={`#${p.slug}`}
                className="group flex items-start gap-3 border-t border-green/30 pt-4 hover:border-green transition-all"
              >
                <span className="font-mono text-green/60 text-xs mt-1">{p.number}</span>
                <span className="flex-1">
                  <span className="block text-ink font-semibold text-base tracking-tight group-hover:text-green transition-colors">
                    {p.title}
                  </span>
                  <span className="block text-text-secondary text-[13px] leading-relaxed mt-1.5">{p.tagline}</span>
                </span>
                <ArrowRight className="w-4 h-4 text-green/40 mt-1 group-hover:translate-x-0.5 group-hover:text-green transition-all" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {SUSTAINABILITY.map((pillar, i) => (
        <section
          key={pillar.slug}
          id={pillar.slug}
          className={`scroll-mt-24 py-24 md:py-32 ${i % 2 === 1 ? "bg-paper" : "bg-cream"}`}
          aria-labelledby={`${pillar.slug}-heading`}
        >
          <div className="mx-auto max-w-[1400px] px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
              <div className="md:col-span-5">
                <div className="reveal md:sticky md:top-32">
                  <span className="font-mono text-green text-[11px] uppercase tracking-[0.25em] font-medium">
                    {pillar.number} &mdash; Pillar
                  </span>
                  <h2
                    id={`${pillar.slug}-heading`}
                    className="font-display text-ink text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-tight mt-4"
                  >
                    {pillar.title}
                  </h2>
                  <p className="text-text-secondary text-base leading-relaxed mt-6 max-w-[44ch]">
                    {pillar.tagline}
                  </p>
                </div>
              </div>

              <div className="md:col-span-7 reveal">
                {pillar.image && (
                  <figure className={`img-reveal rounded-[2rem] p-1.5 ring-1 ring-ink/[0.04] mb-10 ${pillar.image.mode === "contain" ? "bg-paper" : "bg-ink/[0.03]"}`}>
                    <div className={`rounded-[calc(2rem-0.375rem)] overflow-hidden relative ${pillar.image.mode === "contain" ? "aspect-[3/2] bg-paper" : "aspect-[3/2]"}`}>
                      <Image
                        src={pillar.image.src}
                        alt={pillar.image.alt}
                        fill
                        sizes="(min-width: 768px) 55vw, 100vw"
                        className={pillar.image.mode === "contain" ? "object-contain p-4" : "object-cover"}
                      />
                    </div>
                    {pillar.image.caption && (
                      <figcaption className="font-mono text-ink/40 text-[10px] uppercase tracking-[0.2em] px-4 pt-3">
                        {pillar.image.caption}
                      </figcaption>
                    )}
                  </figure>
                )}

                <p className="text-text-secondary text-lg leading-relaxed max-w-[58ch]">{pillar.body}</p>

                {pillar.highlights && pillar.highlights.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                    {pillar.highlights.map((h) => (
                      <div key={h.label} className="border-t-2 border-green/30 pt-4">
                        <span className="font-mono text-green text-xl md:text-2xl font-medium">{h.value}</span>
                        <span className="block text-ink/45 text-[11px] uppercase tracking-wider mt-1.5">{h.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* SASI deeper treatment */}
                {pillar.slug === "cadetship" && (
                  <div className="mt-10 rounded-2xl bg-green-pale border border-green/20 p-6 md:p-8">
                    <span className="font-mono text-green text-[11px] uppercase tracking-[0.2em]">SASI Investment</span>
                    <p className="text-ink text-[15px] leading-relaxed mt-3 max-w-[60ch]">
                      We are raising $12M&ndash;$25M to scale SASI into a full training-to-employment
                      pipeline, partnering with tanker, dry-cargo, and clean-energy vessel operators.
                      For partnership or capital inquiries, contact the program directly.
                    </p>
                    <div className="mt-6">
                      <MailButton
                        variant="link"
                        label="Inquire about SASI"
                        subject="SASI Cadetship Program Inquiry"
                        body={
                          "Hello Seamate,\n\nI'd like to learn more about the Seamate Africa Seatime Initiative.\n\nMy interest:\n- [ ] Cadet enrollment\n- [ ] Investment / capital partnership\n- [ ] Vessel operator partnership\n- [ ] Academic / institutional partnership\n\nBackground:\n\nThank you,\n"
                        }
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      <SDGStrip />
    </SiteShell>
  );
}

// ─── UN SDG closing strip ───────────────────────────────────────────────
// Five SDGs that map directly to Seamate's stated pillars. Closes the page
// before the partner wall — institutional credibility moment.
const SDGS = [
  { num: "01", file: "/images/sdg/sdg-01.png", title: "No Poverty", caption: "Blue-economy livelihoods" },
  { num: "04", file: "/images/sdg/sdg-04.png", title: "Quality Education", caption: "Cadetship · STEM Hub" },
  { num: "07", file: "/images/sdg/sdg-07.png", title: "Clean Energy", caption: "Maritime decarbonisation" },
  { num: "14", file: "/images/sdg/sdg-14.png", title: "Life Below Water", caption: "Coastal stewardship" },
  { num: "17", file: "/images/sdg/sdg-17.png", title: "Partnerships", caption: "Industry & institutions" },
];

function SDGStrip() {
  return (
    <section aria-labelledby="sdg-heading" className="bg-paper py-24 md:py-32 border-t border-ink/[0.06]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="reveal max-w-[820px] mb-12 md:mb-16">
          <span className="font-mono text-green text-[11px] uppercase tracking-[0.25em] block mb-4">
            Aligned to
          </span>
          <h2 id="sdg-heading" className="font-display text-ink text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.05] tracking-tight">
            Five UN Sustainable Development Goals.{" "}
            <em className="text-green-muted">One operational mandate.</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {SDGS.map((sdg, i) => (
            <div
              key={sdg.num}
              className="reveal flex flex-col items-start"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-full aspect-square rounded-2xl overflow-hidden border border-ink/[0.06] hover-lift">
                <Image
                  src={sdg.file}
                  alt={`UN Sustainable Development Goal ${sdg.num} — ${sdg.title}`}
                  width={512}
                  height={512}
                  sizes="(min-width: 1024px) 240px, (min-width: 640px) 30vw, 45vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-mono text-green/50 text-[10px] mt-4">SDG {sdg.num}</span>
              <h3 className="font-display text-ink text-lg md:text-xl leading-tight tracking-tight mt-1">
                {sdg.title}
              </h3>
              <p className="text-text-secondary text-[13px] leading-relaxed mt-2">{sdg.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
