import type { Metadata, Viewport } from "next";
import { DM_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/content/site";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | African Maritime, Energy & Sustainability`,
    template: `%s · ${SITE.shortName}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  keywords: [
    "African maritime company",
    "Seamate Group",
    "Maritime logistics Africa",
    "Energy logistics Nigeria",
    "African trade systems",
    "Industrial development Africa",
    "Maritime advisory Africa",
    "Offshore logistics Nigeria",
    "African logistics company",
    "Agro-industrial systems Africa",
    "Workforce development Africa",
    "Ship management Nigeria",
    "OVID CMID inspection",
    "SIRE inspection",
    "Dangote refinery distributor",
    "NLNG approved",
    "ISO 9001 maritime Nigeria",
    "Single Point Mooring SPM",
    "Trans-West African Coastal Highway",
    "AfCFTA trade Africa",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.shortName,
    title: SITE.name,
    description: SITE.description,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  category: "Maritime Services",
};

export const viewport: Viewport = {
  themeColor: "#0A1929",
  width: "device-width",
  initialScale: 1,
};

// JSON-LD structured data — Organization + LocalBusiness for SEO and rich results.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.legalName,
      alternateName: SITE.shortName,
      url: SITE.url,
      logo: `${SITE.url}/seamate-logo.png`,
      foundingDate: SITE.incorporated,
      description: SITE.description,
      taxID: SITE.rcNumber,
      identifier: { "@type": "PropertyValue", propertyID: "D-U-N-S", value: SITE.dunsBradstreet },
      sameAs: [],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+2348152389425",
          contactType: "customer service",
          areaServed: ["NG", "EMEA"],
          availableLanguage: ["English"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+2348152685854",
          contactType: "vessel operations",
          areaServed: ["NG", "EMEA"],
          availableLanguage: ["English"],
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE.url}/#localbusiness`,
      name: SITE.legalName,
      url: SITE.url,
      image: `${SITE.url}/og-image.png`,
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "NG",
      },
      areaServed: { "@type": "Place", name: "EMEA — Europe, Middle East, Africa" },
      knowsAbout: [
        "Ship Management",
        "Marine Inspection",
        "OVID/CMID",
        "SIRE Inspection",
        "Marine Warranty Survey",
        "HSSE Loss Prevention",
        "Shipping & Logistics",
        "Petroleum Distribution",
        "Single Point Mooring (SPM)",
        "Industrial Advisory",
        "Trade Corridor Strategy",
        "Agro-Industrial Logistics",
        "Maritime Workforce Development",
        "SASI Cadetship Program",
        "AfCFTA Trade Integration",
        "Maritime Decarbonisation",
      ],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} antialiased`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-ink" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
