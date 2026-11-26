import type { Metadata } from "next";
import { SITE, waLink } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd, PageHero, Breadcrumbs } from "@/components/ui";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto: cotiza renta o mantenimiento de montacargas",
  description: `Cotiza renta, reparación o mantenimiento de montacargas. Tel. ${SITE.phone}. ${SITE.address.street}, ${SITE.address.locality}, ${SITE.address.city}. ${SITE.hours}.`,
  alternates: { canonical: "/contacto" },
};

const crumbs = [{ name: "Inicio", path: "/" }, { name: "Contacto", path: "/contacto" }];

export default function Contacto() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero eyebrow="Contacto" title="Cotiza con nosotros" intro="Te respondemos el mismo día en horario laboral." image="/images/mantenimiento-montacargas-teoloyucan.webp" />
      <Breadcrumbs items={crumbs} />
      <section className="container-x grid gap-10 pb-16 lg:grid-cols-[3fr_2fr]">
        <ContactForm />
        <div className="space-y-5">
          <div className="rounded-lg bg-ink p-6 text-white">
            <p className="display text-xl font-extrabold uppercase">{SITE.name}</p>
            <address className="mt-3 not-italic text-white/80">
              {SITE.address.street}<br />{SITE.address.locality}, C.P. {SITE.address.postalCode}<br />{SITE.address.city}, {SITE.address.region}
            </address>
            <p className="mt-3"><a href={`tel:${SITE.phoneE164}`} className="text-lg font-bold text-safety">{SITE.phone}</a></p>
            <p><a href={`mailto:${SITE.email}`} className="text-white/80">{SITE.email}</a></p>
            <p className="mt-3 text-white/80">{SITE.hours}</p>
            <a href={waLink()} target="_blank" rel="noopener" className="btn-primary mt-5 w-full">WhatsApp</a>
          </div>
          <div className="overflow-hidden rounded-lg border border-black/10">
            <iframe title="Ubicación de Montacargas Teoloyucan" src={SITE.mapsEmbed} className="h-72 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </>
  );
}
