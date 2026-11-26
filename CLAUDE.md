# Montacargas Teoloyucan: sitio web (Next.js App Router + Tailwind v4)

## Reglas del proyecto
- Todo el contenido (datos de contacto, servicios, marcas, zonas, FAQ, imágenes) vive en `lib/site.ts`. No dupliques texto en las páginas: léelo de ahí.
- El schema.org (JSON-LD) se genera en `lib/schema.ts`. Cualquier página nueva debe incluir su BreadcrumbList y, si tiene FAQ, su FAQPage.
- Idioma: español de México. Público: empresas y parques industriales, con un tono profesional y directo.
- Mensaje clave que siempre debe destacarse: somos ESPECIALISTAS en todas las marcas comunes (Toyota, Crown, Yale, Hyster, Caterpillar...) y, además, en el mantenimiento de montacargas CHINOS, que casi nadie hace.
- Las imágenes viven en /public/images (rescatadas del sitio anterior, que va a desaparecer). Nunca las enlaces al sitio viejo.
- No inventes reseñas, cifras, años de experiencia, certificaciones ni precios. Si falta un dato, usa `// TODO:`.
- Paleta: ink #14161a, steel #22262d, safety #ffc20e (amarillo de seguridad). Títulos en mayúsculas con la clase `display`.
- Después de cada cambio, corre `npm run build`.

## Comandos
- `npm run dev`: desarrollo en http://localhost:3000
- `npm run build`: compilación de producción
