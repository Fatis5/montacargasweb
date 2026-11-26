"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { SITE, waLink } from "@/lib/site";

const NAV = [
  { href: "/servicios", label: "Servicios" },
  { href: "/mantenimiento-montacargas-chinos", label: "Montacargas chinos" },
  { href: "/marcas", label: "Marcas" },
  { href: "/zonas", label: "Zonas" },
  { href: "/blog", label: "Blog" },
  { href: "/preguntas-frecuentes", label: "Preguntas" },
  { href: "/contacto", label: "Contacto" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setOpen(false), []);

  /* Esc cierra el menú */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, close]);

  /* Focus trap accesible */
  useEffect(() => {
    if (!open || !drawerRef.current) return;
    const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();
    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last?.focus(); } }
      else { if (document.activeElement === last) { e.preventDefault(); first?.focus(); } }
    };
    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, [open]);

  return (
    <>
      {/* Botón hamburguesa */}
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-drawer"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="lg:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md hover:bg-white/10 transition"
      >
        <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
        <span className={`block h-0.5 w-6 bg-white transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
        <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        id="mobile-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={`fixed right-0 top-0 z-50 h-full w-72 max-w-[82vw] bg-ink text-white shadow-2xl transition-transform duration-300 lg:hidden ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="hazard h-1.5" aria-hidden="true" />
        <div className="flex h-14 items-center justify-between px-5">
          <span className="display text-base font-extrabold uppercase tracking-wide">Menú</span>
          <button
            onClick={close}
            aria-label="Cerrar menú"
            className="flex h-9 w-9 items-center justify-center rounded-md text-xl hover:bg-white/10"
          >
            ✕
          </button>
        </div>
        <nav className="px-3 pb-6">
          <ul className="space-y-0.5">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={close}
                  className="block rounded-md px-4 py-3 font-medium text-white/85 hover:bg-white/10 hover:text-safety transition"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-3 px-2">
            <a href={`tel:${SITE.phoneE164}`} className="btn-ghost w-full justify-center text-sm">
              📞 {SITE.phone}
            </a>
            <a href={waLink()} target="_blank" rel="noopener" className="btn-primary w-full justify-center text-sm">
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
