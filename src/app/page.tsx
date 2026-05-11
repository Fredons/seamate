// ═══════════════════════════════════════════
// Homepage — lean editorial flow, server component.
// 7 sections + rich partner wall + footer.
// All client logic isolated to the ScrollReveal wrapper.
// ═══════════════════════════════════════════

import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PartnerWall } from "@/components/PartnerWall";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { EnergyTradePillar } from "@/components/sections/EnergyTradePillar";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { SustainabilitySnapshot } from "@/components/sections/SustainabilitySnapshot";
import { AwardsSection } from "@/components/sections/AwardsSection";

export const metadata: Metadata = {
  title: "Seamate Maritime Integrated Services | Lagos · EMEA",
  description:
    "ISO 9001:2015 certified maritime services. Ship management, marine inspection, HSSE, shipping & logistics, and Dangote-approved energy trade. Lagos-based, EMEA reach.",
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
          <ServicesOverview />
          <EnergyTradePillar />
          <SustainabilitySnapshot />
          <AwardsSection />
          <PartnerWall variant="rich" />
        </main>
      </ScrollReveal>
      <Footer />
    </div>
  );
}
