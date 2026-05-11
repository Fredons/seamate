// ═══════════════════════════════════════════
// PARTNERS — the Partner Wall data
// Three editorial tracks: Operators, Regulators, Standards.
// ═══════════════════════════════════════════

export type Partner = {
  name: string;
  full: string;
  logo: string;
};

export const OPERATORS: Partner[] = [
  { name: "Dangote", full: "Dangote Petroleum Refinery — Approved domestic distributor", logo: "/images/logos/partners/dangote.png" },
  { name: "NLNG", full: "Nigeria Liquefied Natural Gas", logo: "/images/logos/partners/nlng.png" },
  { name: "ExxonMobil", full: "ExxonMobil", logo: "/images/logos/partners/exxonmobil.png" },
  { name: "NNPC", full: "Nigerian National Petroleum Corporation", logo: "/images/logos/partners/nnpc.png" },
];

export const REGULATORS: Partner[] = [
  { name: "NIMASA", full: "Nigerian Maritime Administration & Safety Agency — Licensed", logo: "/images/logos/partners/nimasa.png" },
  { name: "DPR", full: "Department of Petroleum Resources — Permit holder", logo: "/images/logos/partners/dpr.jpg" },
  { name: "NOSDRA", full: "National Oil Spill Detection & Response Agency", logo: "/images/logos/partners/nosdra.png" },
  { name: "AfCFTA", full: "African Continental Free Trade Area", logo: "/images/logos/partners/afcfta.png" },
];

export const STANDARDS: Partner[] = [
  { name: "ISO 9001:2015", full: "ISO 9001:2015 Quality Management Certified", logo: "/images/logos/partners/iso.png" },
  { name: "RINA", full: "RINA — Registro Italiano Navale Classification", logo: "/images/logos/partners/rina.png" },
  { name: "IMO", full: "IMO — Sustainable Shipping for a Sustainable Planet", logo: "/images/logos/partners/imo.png" },
  { name: "eCMID", full: "eCMID Accredited Vessel Inspector", logo: "/images/logos/partners/ecmid.png" },
  { name: "ASA", full: "ASA Member", logo: "/images/logos/partners/asa.png" },
  { name: "NISCN", full: "NISCN Registered", logo: "/images/logos/partners/niscn.jpg" },
  { name: "AVI", full: "AVI Certified", logo: "/images/logos/partners/avi.jpg" },
];

// Past and active project engagements that aren't otherwise classified.
export const PROJECT_CLIENTS: Partner[] = [
  { name: "Tamrose", full: "Tamrose Ventures Limited", logo: "/images/logos/partners/tamrose.png" },
  { name: "Makon", full: "Makon Group", logo: "/images/logos/partners/makon.jpg" },
  { name: "Dorman Long", full: "Dorman Long Engineering Limited", logo: "/images/logos/partners/dorman-long.png" },
  { name: "UPDC", full: "UPDC — UACN Property Development Company", logo: "/images/logos/partners/updc.png" },
];

export const ALL_PARTNERS: Partner[] = [
  ...OPERATORS,
  ...REGULATORS,
  ...STANDARDS,
  ...PROJECT_CLIENTS,
];

// Tier-1 subset shown in the homepage trust strip (top of page, max 5).
export const TIER_1: Partner[] = [
  OPERATORS[0], // Dangote
  OPERATORS[1], // NLNG
  OPERATORS[2], // ExxonMobil
  REGULATORS[0], // NIMASA
  STANDARDS[0], // ISO 9001
];

// Named technical partners — referenced explicitly in /about partner copy.
// Use these in the partnership section, not the homepage Partner Wall, since
// each partnership is described with specific scope in the body text.
export const NAMED_TECH_PARTNERS: Partner[] = [
  {
    name: "MTS",
    full: "Maritime Training Services — e-learning across 120+ topics and 150+ on-demand courses",
    logo: "/images/logos/partners/mts.jpg",
  },
  {
    name: "TIMM",
    full: "TIMM Trusted Technology — Marine grounding systems, LNG/LPG loading infrastructure",
    logo: "/images/logos/partners/timm.png",
  },
];
