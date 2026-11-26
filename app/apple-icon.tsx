import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffc20e",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <span style={{ fontFamily: "sans-serif", fontSize: 90, fontWeight: 900, color: "#14161a", lineHeight: 1 }}>M</span>
        <span style={{ fontFamily: "sans-serif", fontSize: 20, fontWeight: 700, color: "#14161a", letterSpacing: 4 }}>MST</span>
      </div>
    ),
    { ...size }
  );
}
