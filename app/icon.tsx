import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffc20e",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
        }}
      >
        <span style={{ fontFamily: "sans-serif", fontSize: 20, fontWeight: 900, color: "#14161a" }}>M</span>
      </div>
    ),
    { ...size }
  );
}
