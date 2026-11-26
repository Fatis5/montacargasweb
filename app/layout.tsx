import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { SITE, img } from "@/lib/site";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { Header, Footer, WhatsAppFloat, JsonLd, BottomBar } from "@/components/ui";
import { RevealInit } from "@/components/ScrollReveal";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Renta y mantenimiento de montacargas en Teoloyucan y Cuautitlán | Montacargas Teoloyucan",
    template: "%s | Montacargas Teoloyucan",
  },
  description: SITE.description,
  keywords: [
    "renta de montacargas", "renta de montacargas Cuautitlán", "renta de montacargas Teoloyucan",
    "mantenimiento de montacargas", "reparación de montacargas", "montacargas chinos mantenimiento",
    "taller de montacargas Estado de México", "montacargas Heli", "montacargas Hangcha", "montacargas Lonking",
    "renta de montacargas Tultitlán", "renta de montacargas Tepotzotlán", "montacargas parque industrial",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE.url,
    siteName: SITE.name,
    title: "Montacargas Teoloyucan: renta, venta y mantenimiento de todas las marcas",
    description: SITE.description,
    images: [{ url: img("hero"), width: 1200, height: 1600, alt: "Montacargas Teoloyucan" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  formatDetection: { telephone: true },
  other: { "geo.region": "MX-MEX", "geo.placename": "Teoloyucan", "geo.position": `${SITE.geo.lat};${SITE.geo.lng}`, ICBM: `${SITE.geo.lat}, ${SITE.geo.lng}` },
};

export const viewport: Viewport = { themeColor: "#14161a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${inter.variable} ${archivo.variable}`}>
      <body className="overflow-x-hidden pb-16 lg:pb-0">
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
        <RevealInit />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <BottomBar />
      </body>
    </html>
  );
}
