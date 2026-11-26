import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE.name} — Renta, venta y mantenimiento de montacargas`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#14161a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "72px 80px",
        }}
      >
        {/* Franja superior */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 12,
            background: "#ffc20e",
            display: "flex",
          }}
        />

        {/* Nombre */}
        <div style={{ display: "flex", flexDirection: "column", marginBottom: 24 }}>
          <span style={{ fontFamily: "sans-serif", fontSize: 56, fontWeight: 900, color: "#ffffff", textTransform: "uppercase", letterSpacing: "-2px", lineHeight: 1 }}>
            Montacargas
          </span>
          <span style={{ fontFamily: "sans-serif", fontSize: 56, fontWeight: 900, color: "#ffc20e", textTransform: "uppercase", letterSpacing: "-2px", lineHeight: 1 }}>
            Teoloyucan
          </span>
        </div>

        {/* Tagline */}
        <div style={{ display: "flex" }}>
          <span style={{ fontFamily: "sans-serif", fontSize: 36, fontWeight: 700, color: "rgba(255,255,255,0.80)", maxWidth: 900, lineHeight: 1.3 }}>
            Especialistas en Toyota, Crown, Yale, Hyster, Caterpillar y en montacargas chinos (Heli, Hangcha, Lonking)
          </span>
        </div>

        {/* Datos de contacto */}
        <div style={{ display: "flex", gap: 48, marginTop: 32 }}>
          <span style={{ fontFamily: "sans-serif", fontSize: 20, color: "rgba(255,255,255,0.55)" }}>
            {SITE.phone}
          </span>
          <span style={{ fontFamily: "sans-serif", fontSize: 20, color: "rgba(255,255,255,0.55)" }}>
            {SITE.address.city}, {SITE.address.region}
          </span>
          <span style={{ fontFamily: "sans-serif", fontSize: 20, color: "rgba(255,255,255,0.35)" }}>
            {SITE.url}
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
