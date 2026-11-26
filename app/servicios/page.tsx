import type { Metadata } from "next";
import { SERVICES } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd, PageHero, ServiceCard, CtaBand, Breadcrumbs } from "@/components/ui";

export const metadata: Metadata = {
  title: "Servicios de montacargas: renta, venta, reparación y mantenimiento",
  description:
    "Todos nuestros servicios de montacargas: renta, venta, mantenimiento preventivo, reparación, refacciones, llantas, baterías, capacitación DC-3 y servicio especializado a montacargas chinos en el Estado de México.",
  alternates: { canonical: "/servicios" },
};

const crumbs = [{ name: "Inicio", path: "/" }, { name: "Servicios", path: "/servicios" }];

export default function Servicios() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Servicios"
        title="Servicios integrales para montacargas"
        intro="Renta, venta, reparación, mantenimiento, refacciones y capacitación. Todo con un solo proveedor y para todas las marcas."
        image="/images/mantenimiento-montacargas-teoloyucan.webp"
      />
      <Breadcrumbs items={crumbs} />
      <section className="container-x pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => <ServiceCard key={s.slug} s={s} />)}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
