import type { Metadata } from "next";
import Link from "next/link";
import { ZONES } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd, PageHero, CtaBand, Breadcrumbs } from "@/components/ui";

export const metadata: Metadata = {
  title: "Zonas y parques industriales que atendemos en el Estado de México",
  description:
    "Renta y mantenimiento de montacargas en Teoloyucan, Cuautitlán, Cuautitlán Izcalli, Tultitlán, Tepotzotlán, Huehuetoca, Zumpango (AIFA) y parques industriales del norte del Edomex.",
  alternates: { canonical: "/zonas" },
};

const crumbs = [{ name: "Inicio", path: "/" }, { name: "Zonas", path: "/zonas" }];

export default function Zonas() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero eyebrow="Cobertura" title="Parques industriales y zonas que atendemos" intro="Desde Teoloyucan cubrimos el corredor industrial y logístico del norte del Estado de México." image="/images/flota-montacargas-hyster-crown-patin-electrico-cedis.jpg" />
      <Breadcrumbs items={crumbs} />
      <section className="container-x grid gap-5 pb-16 sm:grid-cols-2 lg:grid-cols-3">
        {ZONES.map((z) => (
          <Link key={z.slug} href={`/zonas/${z.slug}`} className="rounded-lg border border-black/10 bg-white p-6 transition hover:border-safety hover:shadow-lg">
            <h2 className="display text-2xl font-extrabold uppercase">Montacargas en {z.name}</h2>
            <p className="mt-2 text-sm text-iron">{z.note}</p>
            <ul className="mt-3 space-y-1 text-sm">
              {z.parks.map((p) => <li key={p}>• {p}</li>)}
            </ul>
          </Link>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
