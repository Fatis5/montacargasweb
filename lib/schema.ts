// Datos estructurados schema.org (JSON-LD). Esto es lo que leen Google y las IA
// (ChatGPT, Gemini, Perplexity, Claude) para entender quiénes somos.
import { SITE, SERVICES, ZONES, BRANDS, img, type Service } from "./site"; // img se conserva para logo/hero

// TODO: añadir URLs reales cuando existan perfiles en redes sociales:
const SAME_AS: string[] = [
  // "https://www.facebook.com/montacargasteoloyucan",
  // "https://www.instagram.com/montacargasteoloyucan",
  // "https://www.youtube.com/@montacargasteoloyucan",
  // "https://g.co/kgs/XXXXXXX",  // Google Business Profile
];

const ORG_ID = `${SITE.url}/#empresa`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoRepair"],
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    alternateName: ["Montacargas y Servicios Teoloyucan", "Renta de Montacargas Teoloyucan"],
    description: SITE.description,
    url: SITE.url,
    logo: img("logo"),
    image: [
      img("hero"),
      "/images/renta-montacargas-electricos-crown-cedis.jpg",
      img("mantenimiento"),
    ],
    telephone: SITE.phoneE164,
    email: SITE.email,
    priceRange: "$$",
    currenciesAccepted: "MXN",
    paymentAccepted: "Efectivo, transferencia, tarjeta",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    hasMap: SITE.mapsLink,
    openingHoursSpecification: SITE.hoursSchema.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: [
      ...ZONES.map((z) => ({ "@type": "City", name: `${z.name}, Estado de México` })),
      { "@type": "AdministrativeArea", name: "Estado de México" },
      { "@type": "AdministrativeArea", name: "Valle de México" },
    ],
    knowsAbout: [
      "Renta de montacargas",
      "Mantenimiento de montacargas",
      "Reparación de montacargas",
      "Mantenimiento de montacargas chinos",
      "Montacargas eléctricos",
      "Montacargas de gas LP",
      "NOM-006-STPS",
      ...BRANDS.chinas.map((b) => `Montacargas ${b}`),
      ...BRANDS.tradicionales.map((b) => `Montacargas ${b}`),
    ],
    slogan: SITE.slogan,
    sameAs: SAME_AS.length ? SAME_AS : undefined,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de montacargas",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, url: `${SITE.url}/servicios/${s.slug}` },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#web`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: "es-MX",
    publisher: { "@id": ORG_ID },
  };
}

export function serviceSchema(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.name,
    description: s.description,
    url: `${SITE.url}/servicios/${s.slug}`,
    image: s.image,
    provider: { "@id": ORG_ID },
    areaServed: ZONES.map((z) => ({ "@type": "City", name: z.name })),
    audience: { "@type": "BusinessAudience", name: "Empresas, naves industriales, CEDIS y parques industriales" },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema({
  title, description, url, datePublished, dateModified, image,
}: { title: string; description: string; url: string; datePublished: string; dateModified?: string; image?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE.url}${url}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    image: image ?? img("hero"),
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url, logo: { "@type": "ImageObject", url: img("logo") } },
    inLanguage: "es-MX",
    isPartOf: { "@type": "Blog", "@id": `${SITE.url}/blog` },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  };
}
