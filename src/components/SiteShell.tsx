// ═══════════════════════════════════════════
// SiteShell — wraps every non-homepage with consistent furniture:
// Navbar (sticky), scroll-reveal context, page content, Footer.
//
// The Partner Wall is intentionally NOT rendered here. To avoid logo-wall
// fatigue, the full logo set lives in one categorized grid on /about, and
// the rich showcase marquee lives on the homepage only. Pass
// `partnerWall="compressed"` to opt a specific page back in if ever needed.
// ═══════════════════════════════════════════

import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { PartnerWall } from "./PartnerWall";
import { ScrollReveal } from "./ScrollReveal";

export function SiteShell({
  children,
  partnerWall,
}: {
  children: ReactNode;
  partnerWall?: "rich" | "compressed";
  /** @deprecated kept for backward compatibility; the wall is now off by default */
  hidePartnerWall?: boolean;
}) {
  return (
    <div className="grain min-h-screen flex flex-col">
      <Navbar />
      <ScrollReveal className="flex-1">
        <main>{children}</main>
        {partnerWall && <PartnerWall variant={partnerWall} />}
      </ScrollReveal>
      <Footer />
    </div>
  );
}
