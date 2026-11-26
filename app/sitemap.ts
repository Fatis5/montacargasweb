import type { MetadataRoute } from "next";
export const dynamic = "force-static";
import { SITE, SERVICES, ZONES, BRAND_LIST } from "@/lib/site";
import { BLOG_POSTS } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const fixed = ["", "/servicios", "/mantenimiento-montacargas-chinos", "/marcas", "/zonas", "/blog", "/preguntas-frecuentes", "/contacto"];
  return [
    ...fixed.map((p) => ({ url: `${SITE.url}${p}`, lastModified: now, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...SERVICES.map((s) => ({ url: `${SITE.url}/servicios/${s.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...ZONES.map((z) => ({ url: `${SITE.url}/zonas/${z.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...BRAND_LIST.map((m) => ({ url: `${SITE.url}/marcas/${m.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...BLOG_POSTS.map((p) => ({ url: `${SITE.url}/blog/${p.slug}`, lastModified: new Date(p.date), changeFrequency: "yearly" as const, priority: 0.7 })),
  ];
}
