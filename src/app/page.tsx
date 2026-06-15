// ═══════════════════════════════════════════
// Homepage — Seamate Group platform framing.
// Section order: Hero → TrustStrip → DivisionsOverview (6 divisions)
//              → AfricanDevelopment → Awards → PartnerWall → Footer.
// All client logic isolated to the ScrollReveal wrapper.
// ═══════════════════════════════════════════

import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PartnerWall } from "@/components/PartnerWall";
import { HeroSlider } from "@/components/HeroSlider";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { DivisionsOverview } from "@/components/sections/DivisionsOverview";
import { Credibility } from "@/components/sections/Credibility";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Seamate Group — African Maritime, Energy & Industrial Platform",
  description:
    "Seamate Group is an African development platform: maritime services, energy distribution, logistics, industrial advisory, agro systems, and workforce development. Lagos-headquartered. ISO 9001:2015 certified. Dangote Refinery approved distributor.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="grain">
      <Navbar />
      <ScrollReveal>
        <main>
          <HeroSlider />
          <TrustStrip />
          <DivisionsOverview />
          <Credibility />
          <AwardsSection />
          <PartnerWall variant="rich" />
          <CTABand />
        </main>
      </ScrollReveal>
      <Footer />
    </div>
  );
}
