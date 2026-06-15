// ═══════════════════════════════════════════
// opengraph-image — branded 1200×630 share card (Institutional Excellence).
// Generated at build via next/og ImageResponse. Next auto-injects the
// og:image tags for "/" and all child routes.
// ═══════════════════════════════════════════

import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "Seamate Group — African Maritime, Energy & Industrial Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Embed the colour logo on a white plaque (read from /public at build).
  let logoSrc: string | null = null;
  try {
    const buf = await readFile(join(process.cwd(), "public", "seamate-logo.png"));
    logoSrc = `data:image/png;base64,${buf.toString("base64")}`;
  } catch {
    logoSrc = null;
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#00132E",
          padding: "72px 76px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* brand keylines */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "12px", backgroundColor: "#1F7A4E" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "12px", backgroundColor: "#F7511C" }} />

        {/* header */}
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          {logoSrc ? (
            <div style={{ display: "flex", backgroundColor: "#ffffff", padding: "12px 18px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logoSrc} height={50} alt="" />
            </div>
          ) : null}
          <div style={{ display: "flex", color: "#ffffff", fontSize: "28px", fontWeight: 700, letterSpacing: "0.04em" }}>
            SEAMATE GROUP
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", color: "#F7511C", fontSize: "24px", fontWeight: 700, letterSpacing: "0.18em", marginBottom: "22px" }}>
            AFRICAN DEVELOPMENT PLATFORM · EST. 2007
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: "78px", fontWeight: 800, lineHeight: 1.03, color: "#ffffff", letterSpacing: "-0.02em" }}>
            <div style={{ display: "flex" }}>African Infrastructure,</div>
            <div style={{ display: "flex", color: "#F7511C" }}>Global Excellence.</div>
          </div>
        </div>

        {/* footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", color: "#A7B0BC", fontSize: "23px" }}>
            ISO 9001:2015 · Lagos · Maritime · Energy · Logistics
          </div>
          <div style={{ display: "flex", color: "#ffffff", fontSize: "23px", fontWeight: 700 }}>seamategroup.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
