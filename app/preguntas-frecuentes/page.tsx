import type { Metadata } from "next";
import { FAQS, SERVICES } from "@/lib/site";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd, PageHero, FaqList, CtaBand, Breadcrumbs } from "@/components/ui";

export const metadata: Metadata = {
  title: "Preguntas frecuentes sobre renta y mantenimiento de montacargas",
  description: "Respuestas sobre renta de montacargas, mantenimiento, reparación, montacargas chinos, cobertura, horarios y facturación.",
  alternates: { canonical: "/preguntas-frecuentes" },
};

const crumbs = [{ name: "Inicio", path: "/" }, { name: "Preguntas frecuentes", path: "/preguntas-frecuentes" }];
const ALL = [...FAQS, ...SERVICES.flatMap((s) => s.faqs)];

export default function Faq() {
  return (
    <>
      <JsonLd data={[faqSchema(ALL), breadcrumbSchema(crumbs)]} />
      <PageHero eyebrow="FAQ" title="Preguntas frecuentes" intro="Todo lo que nos preguntan sobre renta, mantenimiento y reparación de montacargas." image="/images/mantenimiento-montacargas-teoloyucan.webp" />
      <Breadcrumbs items={crumbs} />
      <section className="container-x pb-16"><FaqList faqs={ALL} /></section>
      <CtaBand />
    </>
  );
}
