// ═══════════════════════════════════════════
// PageHero — shared editorial hero for inner pages.
// Consistent rhythm: small eyebrow + large display headline + lede paragraph.
// Server component.
// ═══════════════════════════════════════════

import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "wide";
};

export function PageHero({ eyebrow, title, lede, align = "left" }: Props) {
  return (
    <section className="relative bg-cream pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className={align === "wide" ? "max-w-[1100px]" : "max-w-[820px]"}>
          <span className="reveal block text-[11px] uppercase tracking-[0.25em] text-green font-medium mb-6">
            {eyebrow}
          </span>
          <h1 className="reveal font-display text-ink text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.98] tracking-tight whitespace-pre-line">
            {title}
          </h1>
          {lede && (
            <p className="reveal text-text-secondary text-lg md:text-xl leading-relaxed max-w-[58ch] mt-8">
              {lede}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
