import Link from "next/link";
import Image from "next/image";
import { SITE, SERVICES, ZONES, waLink, img, type Service } from "@/lib/site"; // img aún se usa en Header (logo)
import { MobileMenu } from "@/components/MobileMenu";

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

const NAV = [
  { href: "/servicios", label: "Servicios" },
  { href: "/mantenimiento-montacargas-chinos", label: "Chinos" },
  { href: "/marcas", label: "Marcas" },
  { href: "/zonas", label: "Zonas" },
  { href: "/blog", label: "Blog" },
  { href: "/preguntas-frecuentes", label: "FAQ" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-ink/95 text-white backdrop-blur">
      <div className="hazard h-1.5" aria-hidden />
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label={`${SITE.name}, inicio`}>
          <span className="relative h-10 w-10 overflow-hidden rounded bg-white">
            <Image src={img("logo")} alt={`Logotipo de ${SITE.name}`} fill sizes="40px" className="object-contain p-0.5" priority />
          </span>
          <span className="display text-lg font-extrabold uppercase leading-none">
            Montacargas<span className="block text-xs font-semibold tracking-[0.3em] text-safety">Teoloyucan</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex" aria-label="Principal">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="text-white/80 hover:text-safety">{n.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={`tel:${SITE.phoneE164}`} className="hidden text-sm font-semibold text-safety md:block lg:hidden xl:block">{SITE.phone}</a>
          <a href={waLink()} className="btn-primary !py-2 text-sm hidden md:inline-flex" target="_blank" rel="noopener">Cotizar</a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="hazard h-2" aria-hidden />
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div>
          <p className="display text-xl font-extrabold uppercase text-white">{SITE.name}</p>
          <p className="mt-3 text-sm">{SITE.slogan}. Especialistas en todas las marcas (Toyota, Crown, Yale, Hyster, Caterpillar y más) y en montacargas chinos.</p>
        </div>
        <div>
          <p className="mb-3 font-bold text-white">Servicios</p>
          <ul className="space-y-1.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}><Link href={`/servicios/${s.slug}`} className="hover:text-safety">{s.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 font-bold text-white">Zonas que atendemos</p>
          <ul className="space-y-1.5 text-sm">
            {ZONES.map((z) => (
              <li key={z.slug}><Link href={`/zonas/${z.slug}`} className="hover:text-safety">Montacargas en {z.name}</Link></li>
            ))}
          </ul>
        </div>
        <address className="not-italic text-sm">
          <p className="mb-3 font-bold text-white">Contacto</p>
          <p>{SITE.address.street}<br />{SITE.address.locality}, C.P. {SITE.address.postalCode}<br />{SITE.address.city}, {SITE.address.region}</p>
          <p className="mt-3"><a href={`tel:${SITE.phoneE164}`} className="text-safety">{SITE.phone}</a></p>
          <p><a href={`mailto:${SITE.email}`} className="hover:text-safety">{SITE.email}</a></p>
          <p className="mt-3">{SITE.hours}</p>
        </address>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {SITE.legalName}. Renta, venta y mantenimiento de montacargas en el Estado de México.
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden>
        <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3M12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8M20.5 3.5A11.8 11.8 0 0 0 1.9 17.7L.2 24l6.4-1.7A11.8 11.8 0 0 0 24 12c0-3.2-1.2-6.1-3.5-8.5" />
      </svg>
    </a>
  );
}

export function PageHero({ eyebrow, title, intro, image }: { eyebrow: string; title: string; intro: string; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {image && (
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-30" />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" aria-hidden />
      <div className="container-x relative py-16 md:py-24">
        <p className="eyebrow !text-safety">{eyebrow}</p>
        <h1 className="display mt-3 max-w-4xl text-[2rem] break-words sm:text-4xl font-extrabold uppercase leading-[0.95] md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-white/80">{intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={waLink()} target="_blank" rel="noopener" className="btn-primary">Cotizar por WhatsApp</a>
          <a href={`tel:${SITE.phoneE164}`} className="btn-ghost">Llamar: {SITE.phone}</a>
        </div>
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Ruta de navegación" className="container-x py-4 text-sm text-iron">
      <ol className="flex flex-wrap gap-1">
        {items.map((it, i) => (
          <li key={it.path} className="flex gap-1">
            {i > 0 && <span aria-hidden>/</span>}
            {i === items.length - 1 ? <span className="font-semibold text-ink">{it.name}</span> : <Link href={it.path} className="hover:underline">{it.name}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ServiceCard({ s }: { s: Service }) {
  return (
    <Link
      href={`/servicios/${s.slug}`}
      className={`group flex flex-col overflow-hidden rounded-lg border bg-white transition hover:-translate-y-1 hover:shadow-xl ${s.featured ? "border-safety ring-2 ring-safety" : "border-black/10"}`}
    >
      <div className="relative aspect-[16/10] bg-steel">
        <Image src={s.image} alt={s.imageAlt} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover object-center transition group-hover:scale-105" />
        {s.featured && <span className="absolute left-3 top-3 rounded bg-safety px-2 py-1 text-xs font-bold uppercase text-ink">Especialidad</span>}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="display text-xl font-bold uppercase">{s.name}</h3>
        <p className="mt-2 flex-1 text-sm text-iron">{s.short}</p>
        <span className="mt-4 text-sm font-semibold text-ink underline decoration-safety decoration-2 underline-offset-4">Ver servicio →</span>
      </div>
    </Link>
  );
}

export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-black/10 rounded-lg border border-black/10 bg-white">
      {faqs.map((f) => (
        <details key={f.q} className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
            <h3>{f.q}</h3>
            <span className="text-2xl text-safety-dark transition group-open:rotate-45" aria-hidden>+</span>
          </summary>
          <p className="mt-3 text-iron">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({ title = "¿Tu montacargas está parado?", text = "Agenda diagnóstico, renta o póliza de mantenimiento. Atendemos parques industriales del norte del Estado de México." }: { title?: string; text?: string }) {
  return (
    <section className="bg-safety">
      <div className="container-x flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
        <div>
          <h2 className="display text-3xl font-extrabold uppercase text-ink md:text-4xl">{title}</h2>
          <p className="mt-2 max-w-2xl text-ink/80">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={waLink()} target="_blank" rel="noopener" className="btn-dark">WhatsApp</a>
          <a href={`tel:${SITE.phoneE164}`} className="btn-dark !bg-transparent !text-ink border-2 border-ink">{SITE.phone}</a>
        </div>
      </div>
    </section>
  );
}

/* Barra fija inferior en móvil — Llamar y WhatsApp */
export function BottomBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 border-t border-white/10 bg-ink lg:hidden" aria-label="Contacto rápido">
      <a
        href={`tel:${SITE.phoneE164}`}
        className="flex items-center justify-center gap-2 py-4 text-sm font-semibold text-white hover:bg-white/10 transition"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-safety" aria-hidden="true">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
        </svg>
        Llamar
      </a>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener"
        className="flex items-center justify-center gap-2 py-4 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1db954] transition"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3M12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8M20.5 3.5A11.8 11.8 0 0 0 1.9 17.7L.2 24l6.4-1.7A11.8 11.8 0 0 0 24 12c0-3.2-1.2-6.1-3.5-8.5" />
        </svg>
        WhatsApp
      </a>
    </div>
  );
}
