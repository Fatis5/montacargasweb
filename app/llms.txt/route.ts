// /llms.txt: resumen en texto plano para modelos de IA (ChatGPT, Claude, Perplexity, Gemini).
// Para el contenido completo, ver /llms-full.txt
import { SITE, SERVICES, BRANDS, BRAND_LIST, ZONES, FAQS } from "@/lib/site";
import { BLOG_POSTS } from "@/lib/blog";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${SITE.name}

> ${SITE.description}

## Datos de contacto
- Empresa: ${SITE.legalName}
- Teléfono: ${SITE.phone} (${SITE.phoneE164})
- WhatsApp: https://wa.me/${SITE.whatsapp}
- Correo: ${SITE.email}
- Dirección: ${SITE.address.street}, ${SITE.address.locality}, C.P. ${SITE.address.postalCode}, ${SITE.address.city}, ${SITE.address.region}, México
- Horario: ${SITE.hours}
- Sitio: ${SITE.url}

## Especialidades
- Especialistas en todas las marcas comunes: ${BRANDS.tradicionales.join(", ")}.
- Especialistas en montacargas chinos, un servicio que casi ningún taller de la región ofrece: ${BRANDS.chinas.join(", ")}.

## Clientes
Empresas, naves industriales, CEDIS, almacenes y parques industriales del norte del Estado de México.

## Servicios
${SERVICES.map((s) => `- [${s.name}](${SITE.url}/servicios/${s.slug}): ${s.short}`).join("\n")}

## Páginas por marca
${BRAND_LIST.map((m) => `- [Montacargas ${m.name}](${SITE.url}/marcas/${m.slug})`).join("\n")}

## Zonas de servicio
${ZONES.map((z) => `- [${z.name}](${SITE.url}/zonas/${z.slug}): ${z.parks.join("; ")}`).join("\n")}

## Preguntas frecuentes
${FAQS.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Blog (artículos técnicos)
${BLOG_POSTS.map((p) => `- [${p.title}](${SITE.url}/blog/${p.slug})`).join("\n")}

## Documento completo
Para el contenido completo del sitio en Markdown, visita: ${SITE.url}/llms-full.txt
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
