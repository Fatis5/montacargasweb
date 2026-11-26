import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd, Breadcrumbs, CtaBand } from "@/components/ui";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog: guías técnicas sobre montacargas industriales",
  description:
    "Artículos técnicos sobre mantenimiento, renta, NOM-006-STPS y montacargas chinos para empresas e industrias del norte del Estado de México. Por Montacargas Teoloyucan.",
  alternates: { canonical: "/blog" },
};

const crumbs = [{ name: "Inicio", path: "/" }, { name: "Blog", path: "/blog" }];

export default function BlogIndex() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": `${SITE.url}/blog`,
            name: "Blog de Montacargas Teoloyucan",
            description: "Guías técnicas sobre mantenimiento, renta y operación segura de montacargas.",
            url: `${SITE.url}/blog`,
            publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
            inLanguage: "es-MX",
          },
        ]}
      />

      {/* Hero */}
      <section className="bg-ink py-16 text-white">
        <div className="container-x">
          <p className="eyebrow !text-safety">Recursos técnicos</p>
          <h1 className="display mt-3 text-5xl font-extrabold uppercase leading-none md:text-7xl">Blog</h1>
          <p className="mt-4 max-w-2xl text-white/75 text-lg">
            Guías prácticas sobre mantenimiento de montacargas, NOM-006-STPS, montacargas chinos y logística industrial.
            Escrito por los técnicos de Montacargas Teoloyucan.
          </p>
        </div>
      </section>

      <Breadcrumbs items={crumbs} />

      {/* Artículos */}
      <section className="container-x py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="reveal flex flex-col overflow-hidden rounded-lg border border-black/10 bg-white hover:shadow-lg transition-shadow">
              <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/9] bg-steel overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover transition group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <time className="text-xs text-iron" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" })}
                </time>
                <h2 className="display mt-2 text-xl font-extrabold uppercase leading-tight">
                  <Link href={`/blog/${post.slug}`} className="hover:text-safety-dark transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 flex-1 text-sm text-iron line-clamp-3">{post.description}</p>
                <Link href={`/blog/${post.slug}`} className="mt-4 text-sm font-semibold underline decoration-safety decoration-2 underline-offset-4">
                  Leer artículo →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
