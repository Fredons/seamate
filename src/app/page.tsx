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
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { DivisionsOverview } from "@/components/sections/DivisionsOverview";
import { AfricanDevelopment } from "@/components/sections/AfricanDevelopment";
import { AwardsSection } from "@/components/sections/AwardsSection";

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
          <Hero />
          <TrustStrip />
          <DivisionsOverview />
          <AfricanDevelopment />
          <AwardsSection />
          <PartnerWall variant="rich" />
        </main>
      </ScrollReveal>
      <Footer />
    </div>
  );
}
