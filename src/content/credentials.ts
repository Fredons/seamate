// ═══════════════════════════════════════════
// CREDENTIALS — awards, certifications, registrations
// Used on /about#credentials and homepage Awards section.
// ═══════════════════════════════════════════

export type Award = {
  year: string;
  name: string;
  body: string;
  note: string;
  date?: string;
};

export const AWARDS: Award[] = [
  {
    year: "2018",
    date: "November 2018",
    name: "HSE Innovation Award",
    body: "18th International HSE Biennial Conference on the Oil and Gas Industry",
    note: "First maritime company in Nigeria to receive the prestigious award for innovation in safety and quality.",
  },
  {
    year: "2020",
    date: "February 2020",
    name: "Service to the Nation Award",
    body: "Presidency Congress of Nigerian Youths (CONYO)",
    note: "Recognition as the Most Outstanding Indigenous Maritime Company.",
  },
  {
    year: "2023",
    name: "Business Excellence Award",
    body: "Acquisition International",
    note: "Winner — Excellence in Maritime Sustainability.",
  },
];

export type Credential = {
  name: string;
  detail: string;
  category: "standard" | "license" | "membership" | "classification";
};

export const CREDENTIALS: Credential[] = [
  { name: "ISO 9001:2015", detail: "Quality management system, certified", category: "standard" },
  { name: "NIMASA", detail: "Licensed maritime operator", category: "license" },
  { name: "DPR", detail: "Department of Petroleum Resources — permit holder", category: "license" },
  { name: "RINA", detail: "Registro Italiano Navale — classification society", category: "classification" },
  { name: "eCMID", detail: "Accredited Vessel Inspector", category: "classification" },
  { name: "IMO", detail: "Sustainable Shipping signatory", category: "standard" },
  { name: "ASA", detail: "Member organization", category: "membership" },
  { name: "NISCN", detail: "Registered member", category: "membership" },
  { name: "AVI", detail: "Certified", category: "membership" },
  { name: "D&B Verified", detail: "Registration 561378707", category: "license" },
];
