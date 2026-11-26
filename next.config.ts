import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // URLs del sitio anterior en Google Sites → páginas nuevas
  async redirects() {
    return [
      // Rutas del sitio anterior en Google Sites
      { source: "/inicio", destination: "/", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/servicios", destination: "/servicios", permanent: false }, // ya existe
      { source: "/contacto", destination: "/contacto", permanent: false },   // ya existe
      { source: "/quienes-somos", destination: "/#quienes-somos", permanent: true },
      { source: "/nosotros", destination: "/#quienes-somos", permanent: true },
      { source: "/renta", destination: "/servicios/renta-de-montacargas", permanent: true },
      { source: "/renta-de-montacargas", destination: "/servicios/renta-de-montacargas", permanent: true },
      { source: "/mantenimiento", destination: "/servicios/mantenimiento-preventivo-montacargas", permanent: true },
      { source: "/reparacion", destination: "/servicios/reparacion-de-montacargas", permanent: true },
      { source: "/venta", destination: "/servicios/venta-de-montacargas", permanent: true },
      // Página legacy → servicio canonical
      { source: "/mantenimiento-montacargas-chinos", destination: "/servicios/mantenimiento-montacargas-chinos", permanent: true },
    ];
  },
};

export default nextConfig;
