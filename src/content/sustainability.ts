// ═══════════════════════════════════════════
// SUSTAINABILITY — four pillars
// Cadetship gets the strongest treatment (real numbers via SASI).
// ═══════════════════════════════════════════

export type SustainabilityPillar = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  body: string;
  highlights?: { label: string; value: string }[];
  image?: { src: string; alt: string; caption?: string; mode?: "cover" | "contain" };
};

export const SUSTAINABILITY: SustainabilityPillar[] = [
  {
    slug: "decarbonisation",
    number: "01",
    title: "Maritime Decarbonisation",
    tagline: "Three pillars — electrification, training, research.",
    body:
      "Battery systems, hybrid propulsion, and shore-power infrastructure for vessels and green ports. Partnerships with maritime academies on green-technology curricula, and joint R&D with international institutions on Africa-specific solutions.",
    highlights: [
      { label: "Focus area", value: "Battery · Hybrid · Shore Power" },
      { label: "Horizon", value: "2030 commitment" },
    ],
    image: {
      src: "/images/decarbonisation.jpg",
      alt: "Illustration of a container vessel rendered in green vegetation crossing blue water",
      mode: "cover",
    },
  },
  {
    slug: "blue-economy",
    number: "02",
    title: "Blue Economy",
    tagline: "Coastal stewardship aligned to the UN SDGs.",
    body:
      "Pollution prevention, ocean stewardship, and economic-inclusion programs across coastal Nigeria. Our work supports food security, livelihoods, and the long-term health of the maritime environment.",
    highlights: [
      { label: "Framework", value: "UN SDG aligned" },
      { label: "Scope", value: "Trans-African coastal corridor" },
    ],
    image: {
      src: "/images/africa-blue-economy-infographic.png",
      alt: "Infographic — Africa's blue economy, key statistics from the Institute for Security Studies",
      caption: "Africa's blue economy — ISS",
      mode: "contain",
    },
  },
  {
    slug: "cadetship",
    number: "03",
    title: "Cadetship Program — SASI",
    tagline: "Seamate Africa Seatime Initiative.",
    body:
      "A training-to-employment pipeline that prepares deck officers, engineer officers, and naval architects through STCW-compliant onboard placement. Built to address a projected global shortage of 165,000 officers by 2035.",
    highlights: [
      { label: "Initial intake", value: "500 cadets" },
      { label: "10-year target", value: "10,000 African seafarers" },
      { label: "Investment raise", value: "$12M – $25M" },
    ],
  },
  {
    slug: "stem-hub",
    number: "04",
    title: "Maritime Technology & STEM Hub",
    tagline: "Mentorship and seed funding for African maritime tech.",
    body:
      "Career-pathway mentorship for young people entering maritime and the blue economy, plus early-stage investment in robotics and technology start-ups that target African operational realities.",
  },
];
