// ═══════════════════════════════════════════
// SiteShell — wraps every non-homepage with consistent furniture:
// Navbar (sticky), scroll-reveal context, the page content,
// the compressed Partner Wall, and the Footer.
// Homepage uses the rich PartnerWall and assembles its own shell.
// ═══════════════════════════════════════════

import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { PartnerWall } from "./PartnerWall";
import { ScrollReveal } from "./ScrollReveal";

export function SiteShell({
  children,
  partnerWall = "compressed",
  hidePartnerWall = false,
}: {
  children: ReactNode;
  partnerWall?: "rich" | "compressed";
  hidePartnerWall?: boolean;
}) {
  return (
    <div className="grain min-h-screen flex flex-col">
      <Navbar />
      <ScrollReveal className="flex-1">
        <main>{children}</main>
        {!hidePartnerWall && <PartnerWall variant={partnerWall} />}
      </ScrollReveal>
      <Footer />
    </div>
  );
}
