import type { Metadata } from "next";
import Link from "next/link";
import { BRAND_LIST, img } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd, PageHero, CtaBand, Breadcrumbs } from "@/components/ui";

export const metadata: Metadata = {
  title: "Especialistas en todas las marcas de montacargas: Toyota, Crown, Yale, Hyster, Heli",
  description:
    "Especialistas en mantenimiento y reparación de montacargas Toyota, Crown, Yale, Hyster, Caterpillar, Mitsubishi, Komatsu, Nissan, Clark, Linde y marcas chinas como Heli, Hangcha, Lonking, EP y XCMG.",
  alternates: { canonical: "/marcas" },
};

const crumbs = [{ name: "Inicio", path: "/" }, { name: "Marcas", path: "/marcas" }];

export default function Marcas() {
  const comunes = BRAND_LIST.filter((x) => !x.china);
  const chinas = BRAND_LIST.filter((x) => x.china);
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Marcas"
        title="Especialistas en todas las marcas"
        intro="Toyota, Crown, Yale, Hyster, Caterpillar, Komatsu y todas las marcas líderes, además de las marcas chinas que casi nadie atiende. Un solo proveedor para toda tu flotilla."
        image={img("venta")}
      />
      <Breadcrumbs items={crumbs} />
      <section className="container-x pb-12">
        <h2 className="display text-3xl font-extrabold uppercase">Marcas americanas, japonesas, europeas y coreanas</h2>
        <p className="mt-2 max-w-3xl text-iron">Conocemos a fondo sus motores, transmisiones, sistemas hidráulicos y controladores eléctricos.</p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {comunes.map((x) => (
            <Link key={x.slug} href={`/marcas/${x.slug}`} className="rounded-md border border-black/10 bg-white p-4 text-center transition hover:border-safety hover:shadow-lg">
              <h3 className="font-bold">Montacargas {x.name}</h3>
              <span className="text-xs text-iron">{x.origin}</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="bg-steel py-14 text-white">
        <div className="container-x">
          <p className="eyebrow !text-safety">Lo que casi nadie hace</p>
          <h2 className="display mt-2 text-3xl font-extrabold uppercase">Marcas chinas</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {chinas.map((x) => (
              <Link key={x.slug} href={`/marcas/${x.slug}`} className="rounded-md border-2 border-safety bg-safety/10 p-4 text-center font-bold text-safety hover:bg-safety/20">
                <h3>Montacargas {x.name}</h3>
              </Link>
            ))}
          </div>
          <Link href="/mantenimiento-montacargas-chinos" className="btn-primary mt-8">Mantenimiento de montacargas chinos</Link>
        </div>
      </section>
      <CtaBand title="¿No ves tu marca?" text="Pregúntanos. Lo más probable es que también la atendamos." />
    </>
  );
}
