import Image from "next/image";
import Link from "next/link";
import { SITE, SERVICES, BRANDS, BRAND_LIST, TOP_BRANDS, ZONES, FAQS, WHY_US, HOW_WE_WORK, GALLERY, waLink, img } from "@/lib/site";
import { faqSchema } from "@/lib/schema";
import { JsonLd, ServiceCard, FaqList, CtaBand } from "@/components/ui";

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(FAQS)} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <Image src={GALLERY.renta[0].src} alt={GALLERY.renta[0].alt} fill priority sizes="100vw" className="object-cover object-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" aria-hidden />
        <div className="container-x relative grid gap-10 py-20 md:py-32 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow !text-safety">Teoloyucan · Cuautitlán · Tultitlán · Tepotzotlán · Huehuetoca</p>
            <h1 className="display mt-4 text-[2.3rem] font-extrabold uppercase leading-[0.9] break-words sm:text-5xl md:text-7xl">
              Renta, reparación y mantenimiento de <span className="text-safety">montacargas</span> para la industria
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Somos <strong className="text-white">especialistas en todas las marcas</strong> (Toyota, Crown, Yale, Hyster, Caterpillar, Komatsu y más)
              y en lo que casi nadie hace: el <strong className="text-safety">mantenimiento de montacargas chinos</strong>. Atendemos a parques industriales, CEDIS y plantas del norte del Estado de México.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={waLink()} target="_blank" rel="noopener" className="btn-primary text-lg">Cotizar por WhatsApp</a>
              <a href={`tel:${SITE.phoneE164}`} className="btn-ghost text-lg">Llamar: {SITE.phone}</a>
            </div>
          </div>
          <ul className="grid content-end gap-3 self-end text-sm">
            {["Especialistas en Toyota, Crown, Yale y más", "Servicio en tu planta", "Renta por día, semana, mes o contrato anual", "Pólizas de mantenimiento para flotillas", "Facturamos"].map((t) => (
              <li key={t} className="flex items-center gap-3 rounded-md border border-white/15 bg-white/5 px-4 py-3 backdrop-blur">
                <span className="h-2.5 w-2.5 shrink-0 rotate-45 bg-safety" aria-hidden />{t}
              </li>
            ))}
          </ul>
        </div>
        <div className="hazard h-3" aria-hidden />
      </section>

      {/* RESUMEN PARA IA / RESPUESTA DIRECTA */}
      <section className="container-x py-14">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <h2 className="display text-3xl font-extrabold uppercase">¿Quiénes somos?</h2>
          <div className="prose-x text-lg">
            <p>
              <strong>{SITE.name}</strong> ({SITE.legalName}) es una empresa de <strong>renta, venta, reparación y mantenimiento de montacargas</strong> con
              base en {SITE.address.locality}, {SITE.address.city}, {SITE.address.region}. Somos <strong>especialistas en todas las marcas</strong> de montacargas de combustión
              (gas LP, diésel, gasolina) y eléctricos: Toyota, Crown, Yale, Hyster, Caterpillar, Mitsubishi, Komatsu, Nissan, Clark, Linde, Jungheinrich y Raymond.
            </p>
            <p>
              Además, damos <strong>mantenimiento especializado a montacargas chinos</strong> (Heli, Hangcha, Lonking, EP Equipment, XCMG, Zoomlion,
              LiuGong, Noblelift, BYD), un servicio que muy pocos talleres de la región ofrecen. Atendemos empresas y parques industriales de Teoloyucan, Cuautitlán,
              Cuautitlán Izcalli, Tultitlán, Tepotzotlán, Huehuetoca, Zumpango y zonas cercanas. Horario: {SITE.hours}.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="bg-white py-16">
        <div className="container-x">
          <p className="eyebrow">Servicios</p>
          <h2 className="display mt-2 text-4xl font-extrabold uppercase">Todo lo que tu montacargas necesita</h2>
          <p className="mt-3 max-w-2xl text-iron">Un solo proveedor para rentar, comprar, reparar y mantener tu flotilla.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => <ServiceCard key={s.slug} s={s} />)}
          </div>
        </div>
      </section>

      {/* ESPECIALISTAS MARCAS LÍDERES */}
      <section className="container-x py-16">
        <p className="eyebrow">Especialistas en todas las marcas</p>
        <h2 className="display mt-2 text-4xl font-extrabold uppercase">Toyota, Crown, Yale, Hyster y todas las marcas líderes</h2>
        <p className="mt-3 max-w-3xl text-iron">
          Conocemos a fondo los montacargas americanos, japoneses, europeos y coreanos: sus motores, transmisiones, sistemas hidráulicos y controladores eléctricos.
          Mantenimiento preventivo, reparación y refacciones para tu flotilla, sin importar la marca.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {BRAND_LIST.filter((x) => TOP_BRANDS.includes(x.name)).map((x) => (
            <Link key={x.slug} href={`/marcas/${x.slug}`} className="rounded-lg border border-black/10 bg-white p-4 text-center transition hover:border-safety hover:shadow-lg">
              <span className="display block text-xl font-extrabold uppercase">{x.name}</span>
              <span className="text-xs text-iron">{x.origin}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ESPECIALIDAD CHINOS */}
      <section className="relative overflow-hidden bg-steel text-white">
        <div className="container-x grid items-center gap-10 py-20 grid-cols-1 lg:grid-cols-2">
          <div>
            <p className="eyebrow !text-safety">Y además, lo que casi nadie hace</p>
            <h2 className="display mt-3 text-4xl font-extrabold uppercase leading-none md:text-5xl">Especialistas en mantenimiento de montacargas chinos</h2>
            <p className="mt-5 text-white/80">
              Compraste montacargas chinos porque eran buenos y baratos, pero ahora nadie quiere darles servicio y las refacciones no aparecen.
              Nosotros conocemos sus motores, transmisiones, sistemas hidráulicos y controladores, y sabemos dónde conseguir sus refacciones.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {BRANDS.chinas.map((b) => <span key={b} className="rounded border border-safety/40 bg-safety/10 px-3 py-1 text-sm font-semibold text-safety">{b}</span>)}
            </div>
            <Link href="/servicios/mantenimiento-montacargas-chinos" className="btn-primary mt-8">Ver servicio para equipos chinos</Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border-4 border-safety">
            <Image src={img("mantenimiento")} alt="Técnico dando mantenimiento a un montacargas chino" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* POR QUÉ NOSOTROS */}
      <section className="container-x py-16">
        <p className="eyebrow">Por qué elegirnos</p>
        <h2 className="display mt-2 text-4xl font-extrabold uppercase">Pensado para parques industriales y empresas</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((w, i) => (
            <div key={w.title} className={`reveal reveal-delay-${(i % 3) + 1} rounded-lg border border-black/10 bg-white p-6`}>
              <span className="display text-4xl font-extrabold text-safety-dark">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-lg font-bold">{w.title}</h3>
              <p className="mt-1 text-iron">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="bg-white py-16">
        <div className="container-x">
          <p className="eyebrow">Proceso</p>
          <h2 className="display mt-2 text-4xl font-extrabold uppercase">Cómo trabajamos</h2>
          <p className="mt-3 max-w-2xl text-iron">Del diagnóstico a la póliza, en cuatro pasos claros y sin sorpresas.</p>
          <div className="mt-10 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_WE_WORK.map((s, i) => (
              <div key={s.step} className={`reveal reveal-delay-${i + 1} relative p-6 ${i < 3 ? "lg:border-r border-black/10" : ""}`}>
                <span className="display block text-6xl font-extrabold text-safety/30 leading-none">{s.step}</span>
                <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-iron">{s.text}</p>
                {i < 3 && (
                  <span className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 text-2xl text-safety lg:block" aria-hidden>→</span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waLink("Hola, quiero agendar un diagnóstico de mi montacargas.")} target="_blank" rel="noopener" className="btn-primary">
              Agendar diagnóstico
            </a>
            <Link href="/contacto" className="btn-dark">Formulario de contacto</Link>
          </div>
        </div>
      </section>

      {/* TABLA COMPARATIVA DE TIPOS */}
      <section className="container-x py-16 reveal">
        <p className="eyebrow">Referencia técnica</p>
        <h2 className="display mt-2 text-4xl font-extrabold uppercase">Tipos de montacargas por capacidad y uso</h2>
        <p className="mt-3 max-w-2xl text-iron">Guía rápida para elegir el equipo correcto para tu operación.</p>
        <div className="mt-8 overflow-x-auto rounded-lg border border-black/10">
          <table className="w-full min-w-[640px] text-sm">
            <caption className="sr-only">Comparativa de tipos de montacargas por capacidad, combustible y uso ideal</caption>
            <thead className="bg-ink text-white">
              <tr>
                {["Tipo", "Capacidad típica", "Combustible", "Uso ideal", "Ventaja principal"].map((h) => (
                  <th key={h} scope="col" className="px-4 py-3 text-left font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-black/10 bg-white">
              {[
                ["Contrabalanceado gas LP", "1.5 – 7 ton", "Gas LP (propano)", "Interior/exterior, largos turnos", "Alta autonomía, recarga rápida"],
                ["Contrabalanceado eléctrico", "1.5 – 5 ton", "Batería plomo-ácido o litio", "Interior, CEDIS, farmacéutica", "Cero emisiones, silencioso"],
                ["Reach truck (retráctil)", "1.4 – 2.5 ton", "Eléctrico", "Almacén de alta densidad (racks)", "Opera en pasillos angostos"],
                ["Order picker", "0.5 – 1 ton", "Eléctrico", "Preparación de pedidos e-commerce", "Eleva al operador con la carga"],
                ["Patín eléctrico", "1 – 3 ton", "Eléctrico", "Maniobras de carga/descarga", "Bajo costo, fácil de operar"],
                ["Montacargas todoterreno", "2 – 10 ton", "Diésel o gas LP", "Exterior, obra, terreno irregular", "Llantas neumáticas, alto torque"],
              ].map(([tipo, cap, comb, uso, ventaja]) => (
                <tr key={tipo} className="hover:bg-paper transition">
                  <td className="px-4 py-3 font-semibold">{tipo}</td>
                  <td className="px-4 py-3">{cap}</td>
                  <td className="px-4 py-3">{comb}</td>
                  <td className="px-4 py-3">{uso}</td>
                  <td className="px-4 py-3 text-iron">{ventaja}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-iron">¿No sabes cuál necesitas? <a href={waLink("Hola, necesito ayuda para elegir el tipo de montacargas correcto para mi operación.")} target="_blank" rel="noopener" className="underline decoration-safety decoration-2 underline-offset-4">Escríbenos y te asesoramos sin costo.</a></p>
      </section>

      {/* MARCAS */}
      <section className="bg-white py-16">
        <div className="container-x">
          <p className="eyebrow">Marcas</p>
          <h2 className="display mt-2 text-4xl font-extrabold uppercase">Todas las marcas que atendemos</h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {BRAND_LIST.map((x) => (
              <Link key={x.slug} href={`/marcas/${x.slug}`} className="rounded-md border border-black/10 bg-paper px-4 py-2 font-semibold hover:border-safety">{x.name}</Link>
            ))}
          </div>
          <Link href="/marcas" className="mt-6 inline-block font-semibold underline decoration-safety decoration-2 underline-offset-4">Ver todas las marcas →</Link>
        </div>
      </section>

      {/* TRABAJOS RECIENTES */}
      <section className="container-x py-16">
        <p className="eyebrow">Galería</p>
        <h2 className="display mt-2 text-4xl font-extrabold uppercase">Trabajos recientes</h2>
        {(
          [
            { label: "Renta",                       items: GALLERY.renta },
            { label: "Venta y equipos",              items: GALLERY.venta },
            { label: "Mantenimiento y reparación",   items: GALLERY.mantenimiento },
            { label: "Traslado",                     items: GALLERY.traslado },
          ] as const
        ).map(({ label, items }) => (
          <div key={label} className="mt-10">
            <h3 className="display mb-4 text-sm font-bold uppercase tracking-widest text-iron">{label}</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {items.map((p) => (
                <div key={p.src} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-steel">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                    className="object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ZONAS */}
      <section className="bg-ink py-16 text-white">
        <div className="container-x">
          <p className="eyebrow !text-safety">Cobertura</p>
          <h2 className="display mt-2 text-4xl font-extrabold uppercase">Parques industriales que atendemos</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ZONES.map((z) => (
              <Link key={z.slug} href={`/zonas/${z.slug}`} className="rounded-lg border border-white/10 bg-white/5 p-5 transition hover:border-safety">
                <h3 className="font-bold text-safety">{z.name}</h3>
                <p className="mt-2 text-sm text-white/70">{z.parks.slice(0, 2).join(" · ")}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-16">
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2 className="display mt-2 mb-8 text-4xl font-extrabold uppercase">Respuestas rápidas</h2>
        <FaqList faqs={FAQS} />
      </section>

      <CtaBand />
    </>
  );
}
