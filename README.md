# Montacargas Teoloyucan: sitio web nuevo

Sitio en Next.js 16 + Tailwind CSS 4 con SEO local y optimización para buscadores de IA.

## Arrancar
```bash
npm install
# Copia las 7 imágenes rescatadas (montacargas-*.jpg/png de tu carpeta Descargas)
# a public/images/ quitándoles el prefijo "montacargas-":
#   logo.png, hero.jpg, empresa.jpg, renta.jpg, venta.jpg, mantenimiento.jpg, servicios-banner.jpg
npm run dev
```

## Páginas (64 estáticas)
- `/`: inicio
- `/servicios` y `/servicios/[slug]`: 10 servicios
- `/mantenimiento-montacargas-chinos`: landing de la especialidad
- `/marcas` y `/marcas/[slug]`: 34 marcas (Toyota, Crown, Yale, Hyster... y las chinas)
- `/zonas`, `/zonas/[slug]`: 8 zonas y parques industriales
- `/preguntas-frecuentes`, `/contacto`
- `/sitemap.xml`, `/robots.txt` (con los bots de IA permitidos), `/llms.txt`

## Datos por confirmar con el cliente (TODO en lib/site.ts)
- WhatsApp (se asumió el mismo número: 56 4225 3274)
- Correo real
- Qué parques industriales atienden hoy
- Qué servicios de la lista ofrecen realmente (llantas, baterías, capacitación DC-3, etc.)
- Capacidades de los montacargas en renta
- Redes sociales (para `sameAs`)

Para seguir mejorando el sitio, usa `PROMPT_CLAUDE_CODE.md` con Claude Code.
