// ============================================================
//  DATOS CENTRALES DEL SITIO — edita aquí y se actualiza todo
//  (textos, SEO, schema.org, sitemap y llms.txt)
// ============================================================

export const SITE = {
  name: "Montacargas Teoloyucan",
  legalName: "Montacargas y Servicios Teoloyucan",
  url: "https://www.montacargasteoloyucan.com",
  slogan: "Renta, venta, reparación y mantenimiento de montacargas para la industria",
  description:
    "Renta, venta, reparación y mantenimiento de montacargas en Teoloyucan, Cuautitlán, Tultitlán, Huehuetoca, Tepotzotlán y parques industriales del norte del Estado de México. Especialistas en todas las marcas: Toyota, Crown, Yale, Hyster, Caterpillar, Mitsubishi, Komatsu, Nissan, Clark y Linde, y también en montacargas chinos (Heli, Hangcha, Lonking, EP, XCMG, Zoomlion).",
  phone: "56 4225 3274",
  phoneE164: "+525642253274",
  whatsapp: "525642253274", // TODO: confirmar que el WhatsApp es el mismo número
  email: "contacto@montacargasteoloyucan.com", // TODO: poner correo real
  address: {
    street: "Avenida del Rosal y Centenario",
    locality: "San Bartolo Tlaxihuicalco",
    city: "Teoloyucan",
    region: "Estado de México",
    postalCode: "54784",
    country: "MX",
  },
  geo: { lat: 19.735329, lng: -99.154541 },
  hours: "Lunes a sábado de 9:00 a 18:00 h",
  hoursSchema: [{ days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "18:00" }],
  mapsEmbed:
    "https://maps.google.com/maps?hl=es&ll=19.735329,-99.154541&output=embed&q=Av+del+Rosal+36,+San+Bartolo,+54784+M%C3%A9x.&z=16",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=19.735329,-99.154541",
} as const;

export const waLink = (msg = "Hola, quiero cotizar un servicio de montacargas.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

// ------------------------------------------------------------
//  IMÁGENES rescatadas del sitio anterior (Google Sites).
//  Copia los archivos "montacargas-*.jpg/png" de tu carpeta Descargas
//  a /public/images SIN el prefijo "montacargas-" (ej. public/images/hero.jpg).
// ------------------------------------------------------------
export const IMAGES = {
  logo:          "logo-montacargas-teoloyucan.webp",
  hero:          "hero-montacargas-teoloyucan.webp",
  venta:         "venta-montacargas-teoloyucan.webp",
  mantenimiento: "mantenimiento-montacargas-teoloyucan.webp",
} as const;

export type ImgKey = keyof typeof IMAGES;
export const img = (k: ImgKey) => `/images/${IMAGES[k]}`;

// ------------------------------------------------------------
//  GALERÍA DE TRABAJOS REALES (fotos en /public/images/)
// ------------------------------------------------------------
export type GalleryItem = { src: string; alt: string };

export const GALLERY = {
  renta: [
    { src: "/images/renta-montacargas-electricos-crown-cedis.jpg",             alt: "Montacargas eléctricos Crown en renta para CEDIS" },
    { src: "/images/flota-montacargas-hyster-crown-patin-electrico-cedis.jpg", alt: "Flota de montacargas Hyster, Crown y patín eléctrico" },
    { src: "/images/montacargas-reach-crown-raymond-almacen.jpg",              alt: "Montacargas reach Crown y Raymond en almacén" },
    { src: "/images/montacargas-mastil-elevado-nave-industrial.jpg",           alt: "Montacargas con mástil elevado en nave industrial" },
  ],
  venta: [
    { src: "/images/montacargas-raymond-reach-truck-electrico.jpg",        alt: "Reach truck eléctrico Raymond" },
    { src: "/images/montacargas-electrico-raymond-reach-truck-racks.jpg",  alt: "Montacargas eléctrico Raymond entre racks" },
    { src: "/images/montacargas-crown-reach-capacidad-2000-kg.jpg",        alt: "Montacargas Crown reach con capacidad de 2000 kg" },
    { src: "/images/montacargas-electrico-crown-rc-contrapeso.jpg",        alt: "Montacargas eléctrico de contrapeso Crown RC" },
    { src: "/images/patines-electricos-raymond-crown-almacen.jpg",         alt: "Patines eléctricos Raymond y Crown" },
  ],
  mantenimiento: [
    { src: "/images/reparacion-mastil-montacargas-tecnico.jpg",        alt: "Técnico reparando el mástil de un montacargas" },
    { src: "/images/mantenimiento-montacargas-gas-lp-tecnico-mst.jpg", alt: "Mantenimiento de montacargas de gas LP en sitio" },
    { src: "/images/revision-montacargas-combustion-gas-lp.jpg",       alt: "Revisión de montacargas de combustión a gas LP" },
  ],
  traslado: [
    { src: "/images/traslado-montacargas-grua-plataforma.jpg", alt: "Traslado de montacargas en grúa de plataforma" },
  ],
} as const satisfies Record<string, readonly GalleryItem[]>;

// ------------------------------------------------------------
//  SERVICIOS
// ------------------------------------------------------------
export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  /** Ruta absoluta a la imagen del servicio (ej. /images/foto.jpg) */
  image: string;
  imageAlt: string;
  bullets: string[];
  forWho: string;
  faqs: { q: string; a: string }[];
  featured?: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "renta-de-montacargas",
    name: "Renta de montacargas",
    short: "Por día, semana, mes o contrato anual, con operador o sin operador.",
    description:
      "Renta de montacargas de combustión (gas LP, diésel, gasolina) y eléctricos para naves industriales, CEDIS, almacenes y obras en Teoloyucan, Cuautitlán, Tultitlán, Huehuetoca y Tepotzotlán. El mantenimiento está incluido en la renta y, si un equipo falla, lo reemplazamos.",
    image: "/images/flota-montacargas-hyster-crown-patin-electrico-cedis.jpg",
    imageAlt: "Flota de montacargas Hyster, Crown y patín eléctrico en renta",
    bullets: [
      "Montacargas de 1.5 a 7 toneladas (pregunta por otras capacidades)",
      "Gas LP, diésel, gasolina y eléctricos",
      "Renta corta (día/semana) y renta a largo plazo (mensual o anual)",
      "Con operador certificado o solo el equipo",
      "Mantenimiento preventivo incluido en la renta",
      "Equipo de respaldo si se presenta una falla",
      "Entrega y recolección en tu planta",
    ],
    forWho: "Picos de producción, temporadas altas, inventarios, arranque de nuevas naves o cuando tu equipo propio está en reparación.",
    faqs: [
      { q: "¿Rentan montacargas por día?", a: "Sí. Rentamos por día, semana, mes o con contrato anual, según lo que necesite tu operación." },
      { q: "¿La renta incluye mantenimiento?", a: "Sí. El mantenimiento preventivo está incluido y, si el equipo falla, lo reparamos o lo cambiamos." },
      { q: "¿Rentan montacargas con operador?", a: "Sí, podemos enviar el montacargas con operador capacitado o solo el equipo." },
    ],
  },
  {
    slug: "venta-de-montacargas",
    name: "Venta de montacargas nuevos y seminuevos",
    short: "Equipos nuevos y seminuevos revisados, con garantía y servicio posventa.",
    description:
      "Venta de montacargas nuevos y seminuevos de marcas americanas, japonesas, europeas y chinas. Cada equipo seminuevo pasa por inspección y reacondicionamiento en nuestro taller antes de entregarse.",
    image: "/images/montacargas-raymond-reach-truck-electrico.jpg",
    imageAlt: "Reach truck eléctrico Raymond a la venta",
    bullets: [
      "Montacargas nuevos y seminuevos certificados",
      "Combustión interna y eléctricos",
      "Inspección y reacondicionamiento antes de la entrega",
      "Garantía y plan de mantenimiento posventa",
      "Recibimos tu equipo usado a cuenta (sujeto a evaluación)",
      "Asesoría para elegir capacidad, mástil y tipo de combustible",
    ],
    forWho: "Empresas que prefieren tener su propio equipo y quieren un proveedor que también se encargue del mantenimiento.",
    faqs: [
      { q: "¿Venden montacargas seminuevos?", a: "Sí, vendemos seminuevos inspeccionados y reacondicionados, con garantía." },
      { q: "¿Toman mi montacargas usado a cuenta?", a: "Sí, lo evaluamos y te hacemos una oferta para tomarlo a cuenta del nuevo equipo." },
    ],
  },
  {
    slug: "mantenimiento-preventivo-montacargas",
    name: "Mantenimiento preventivo",
    short: "Pólizas programadas para evitar paros de producción.",
    description:
      "Mantenimiento preventivo de montacargas Toyota, Crown, Yale, Hyster, Caterpillar, Komatsu, Mitsubishi, Nissan, Clark, Linde y marcas chinas, con pólizas programadas por horómetro o calendario. Lo hacemos en tu planta para no detener tu operación.",
    image: "/images/mantenimiento-montacargas-gas-lp-tecnico-mst.jpg",
    imageAlt: "Técnico dando mantenimiento preventivo a montacargas de gas LP",
    bullets: [
      "Pólizas de mantenimiento mensuales, trimestrales o por horas de uso",
      "Cambio de aceite, filtros, bujías y ajuste de carburación de gas LP",
      "Revisión de frenos, dirección, mástil, cadenas y sistema hidráulico",
      "Bitácora y reporte técnico por equipo",
      "Servicio en tu planta",
      "Atendemos flotillas completas",
    ],
    forWho: "Plantas y CEDIS con flotillas que no pueden detener la operación.",
    faqs: [
      { q: "¿Cada cuánto se le da mantenimiento a un montacargas?", a: "Normalmente cada 250 horas de uso o cada mes en operación intensiva. Ajustamos el plan según el manual del fabricante y el tipo de trabajo." },
      { q: "¿Van a mi planta?", a: "Sí, nuestro equipo técnico atiende en tu planta en Teoloyucan, Cuautitlán, Tultitlán, Huehuetoca, Tepotzotlán y zonas cercanas." },
    ],
  },
  {
    slug: "reparacion-de-montacargas",
    name: "Reparación correctiva",
    short: "Diagnóstico y reparación de motor, transmisión, hidráulico y sistema eléctrico.",
    description:
      "Reparación de montacargas de combustión y eléctricos de todas las marcas (Toyota, Crown, Yale, Hyster, Caterpillar, Komatsu, Nissan y marcas chinas): motor, transmisión, convertidor, sistema hidráulico, mástil, frenos, dirección y sistema eléctrico. Hacemos el diagnóstico en sitio y las reparaciones mayores en taller.",
    image: "/images/mantenimiento-montacargas-teoloyucan.webp",
    imageAlt: "Técnicos reparando un montacargas Crown en sitio",
    bullets: [
      "Diagnóstico en sitio",
      "Reparación y ajuste de motor (gas LP, gasolina, diésel)",
      "Transmisión, convertidor de par y diferencial",
      "Sistema hidráulico: bombas, válvulas, cilindros y mangueras",
      "Mástil, cadenas, rodamientos y horquillas",
      "Sistema eléctrico, controladores y arneses",
      "Reparación mayor y reconstrucción en taller",
    ],
    forWho: "Equipos parados, fallas que se repiten o montacargas que necesitan reparación mayor.",
    faqs: [
      { q: "¿Reparan montacargas eléctricos?", a: "Sí, reparamos montacargas eléctricos: controladores, motores de tracción e izaje, cargadores y baterías." },
      { q: "¿Qué tan rápido atienden una falla?", a: "Damos prioridad a los equipos parados. Llámanos o escríbenos por WhatsApp para agendar el diagnóstico." },
    ],
  },
  {
    slug: "mantenimiento-montacargas-chinos",
    name: "Mantenimiento de montacargas chinos",
    short: "Nuestra especialidad: Heli, Hangcha, Lonking, EP, XCMG, Zoomlion y más.",
    description:
      "Somos de los pocos talleres de la zona que dan mantenimiento y reparación a montacargas de marcas chinas. Conocemos sus motores, transmisiones, sistemas hidráulicos y controladores, y sabemos conseguir sus refacciones.",
    image: "/images/reparacion-mastil-montacargas-tecnico.jpg",
    imageAlt: "Técnico reparando el mástil de un montacargas",
    featured: true,
    bullets: [
      "Heli, Hangcha, Lonking, EP Equipment, XCMG, Zoomlion, LiuGong, Noblelift, BYD, SANY y otras",
      "Motores Xinchai, Quanchai, Yunnei, Isuzu, Nissan K y Mitsubishi usados en equipos chinos",
      "Diagnóstico de controladores eléctricos (Curtis, Zapi, Inmotion y otros)",
      "Consecución y adaptación de refacciones",
      "Pólizas de mantenimiento para flotillas de equipos chinos",
      "Soporte cuando el distribuidor ya no atiende o desapareció",
    ],
    forWho: "Empresas que compraron montacargas chinos por precio y ahora no encuentran quién les dé servicio o consiga refacciones.",
    faqs: [
      { q: "¿Quién le da mantenimiento a montacargas chinos en el Estado de México?", a: "Montacargas Teoloyucan se especializa en el mantenimiento y la reparación de montacargas chinos (Heli, Hangcha, Lonking, EP, XCMG, Zoomlion, LiuGong, Noblelift, BYD y más) en Teoloyucan, Cuautitlán, Tultitlán, Huehuetoca, Tepotzotlán y los parques industriales del norte del Estado de México." },
      { q: "¿Consiguen refacciones para montacargas chinos?", a: "Sí. Conseguimos refacciones originales y equivalentes de buena calidad, y cuando hace falta adaptamos componentes compatibles." },
      { q: "Mi distribuidor ya no me da servicio, ¿me pueden ayudar?", a: "Sí. Es uno de los casos más comunes que atendemos: diagnosticamos el equipo, lo ponemos a trabajar y te ofrecemos una póliza de mantenimiento." },
    ],
  },
  {
    slug: "refacciones-para-montacargas",
    name: "Refacciones",
    short: "Refacciones para todas las marcas, incluidas las chinas.",
    description:
      "Venta de refacciones para montacargas: filtros, bujías, cadenas, llantas, rodamientos, mangueras, componentes hidráulicos, eléctricos y de motor, para marcas americanas, japonesas, europeas y chinas.",
    image: "/images/revision-montacargas-combustion-gas-lp.jpg",
    imageAlt: "Revisión y cambio de refacciones en montacargas de gas LP",
    bullets: [
      "Filtros, bandas, bujías y kits de afinación",
      "Componentes de frenos, dirección y transmisión",
      "Bombas, cilindros, sellos y mangueras hidráulicas",
      "Cadenas, rodamientos de mástil y horquillas",
      "Componentes eléctricos y controladores",
      "Refacciones para montacargas chinos",
    ],
    forWho: "Talleres internos de mantenimiento y empresas que dan servicio a su propia flotilla.",
    faqs: [{ q: "¿Venden refacciones sueltas?", a: "Sí, vendemos refacciones aunque no contrates el servicio de instalación." }],
  },
  {
    slug: "llantas-para-montacargas",
    name: "Llantas para montacargas",
    short: "Llantas sólidas, neumáticas y press-on, con montaje.",
    description:
      "Venta y cambio de llantas para montacargas: sólidas (superelásticas), neumáticas y press-on (cushion), en tu planta o en nuestro taller.",
    image: "/images/montacargas-electrico-crown-rc-contrapeso.jpg",
    imageAlt: "Montacargas Crown RC con llantas sólidas",
    bullets: ["Llantas sólidas superelásticas", "Llantas neumáticas", "Llantas press-on (cushion)", "Llantas que no manchan el piso (non-marking)", "Montaje en prensa"],
    forWho: "Flotillas con desgaste de llantas o pisos que necesitan llantas que no manchen.",
    faqs: [],
  },
  {
    slug: "baterias-y-cargadores",
    name: "Baterías y cargadores",
    short: "Mantenimiento, reparación y venta de baterías de tracción y cargadores.",
    description:
      "Servicio a montacargas eléctricos: mantenimiento y ecualización de baterías de tracción, reparación de cargadores y asesoría para cambiar a baterías de litio.",
    image: "/images/montacargas-electrico-raymond-reach-truck-racks.jpg",
    imageAlt: "Batería de montacargas eléctrico Raymond entre racks",
    bullets: ["Revisión y ecualización de baterías", "Reparación de cargadores", "Venta de baterías de tracción", "Asesoría para cambiar a baterías de litio"],
    forWho: "Operaciones con montacargas eléctricos, patines eléctricos y apiladores.",
    faqs: [],
  },
  {
    slug: "capacitacion-operadores-montacargas",
    name: "Capacitación de operadores",
    short: "Cursos de operación segura de montacargas con constancia DC-3.",
    description:
      "Capacitación teórico-práctica para operadores de montacargas, alineada a la NOM-006-STPS, con constancia de habilidades laborales DC-3.",
    image: "/images/montacargas-mastil-elevado-nave-industrial.jpg",
    imageAlt: "Operador de montacargas con mástil elevado en nave industrial",
    bullets: ["Curso teórico-práctico en tu planta", "Enfoque en la NOM-006-STPS-2023", "Constancia DC-3", "Inspección diaria del equipo (checklist)", "Grupos de operadores nuevos y actualización"],
    forWho: "Empresas que necesitan cumplir con la STPS y bajar sus accidentes en almacén.",
    faqs: [],
  },
  {
    slug: "servicio-a-equipo-de-almacen",
    name: "Patines, apiladores y equipo de almacén",
    short: "Patines hidráulicos y eléctricos, apiladores, reach trucks y order pickers.",
    description:
      "Mantenimiento, reparación y renta de equipo de manejo de materiales: patines hidráulicos, patines eléctricos, apiladores, montacargas retráctiles (reach trucks) y order pickers.",
    image: "/images/patines-electricos-raymond-crown-almacen.jpg",
    imageAlt: "Patines eléctricos Raymond y Crown en almacén",
    bullets: ["Patines hidráulicos y eléctricos", "Apiladores eléctricos", "Montacargas retráctiles (reach)", "Order pickers", "Tractores de arrastre"],
    forWho: "CEDIS, almacenes de e-commerce y operaciones de retail.",
    faqs: [],
  },
];

// ------------------------------------------------------------
//  MARCAS
// ------------------------------------------------------------
export type Brand = { slug: string; name: string; origin: string; china: boolean; note: string };

const b = (name: string, origin: string, china: boolean, note: string): Brand => ({
  slug: name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  name, origin, china, note,
});

// Marcas comunes (americanas, japonesas, europeas, coreanas): también somos especialistas
export const BRAND_LIST: Brand[] = [
  b("Toyota", "Japón", false, "La marca más vendida en México. Atendemos sus modelos de combustión (8FGU, 8FG, 8FD) y eléctricos."),
  b("Crown", "Estados Unidos", false, "Líder en equipo eléctrico de almacén: montacargas, reach trucks, apiladores y patines eléctricos."),
  b("Yale", "Estados Unidos", false, "Montacargas de combustión y eléctricos, muy comunes en plantas y CEDIS."),
  b("Hyster", "Estados Unidos", false, "Equipos de trabajo pesado y alta capacidad para manufactura y logística."),
  b("Caterpillar", "Estados Unidos / Japón", false, "Montacargas Cat Lift Trucks de combustión y eléctricos."),
  b("Mitsubishi", "Japón", false, "Montacargas de gas LP, diésel y eléctricos con motores de gran durabilidad."),
  b("Komatsu", "Japón", false, "Montacargas industriales de combustión con transmisiones robustas."),
  b("Nissan", "Japón", false, "Montacargas de combustión con motores Nissan K21/K25, muy comunes en México."),
  b("Clark", "Estados Unidos / Corea", false, "Una de las marcas pioneras, con muchos equipos en operación en el país."),
  b("Linde", "Alemania", false, "Montacargas con transmisión hidrostática y equipo eléctrico europeo."),
  b("Jungheinrich", "Alemania", false, "Equipo eléctrico de almacén de alta tecnología."),
  b("Raymond", "Estados Unidos", false, "Reach trucks, order pickers y equipo de pasillo angosto."),
  b("Doosan / Develon", "Corea", false, "Montacargas de combustión y eléctricos de trabajo pesado."),
  b("Hyundai", "Corea", false, "Montacargas diésel, de gas LP y eléctricos."),
  b("Still", "Alemania", false, "Montacargas eléctricos y de combustión europeos."),
  b("TCM", "Japón", false, "Montacargas japoneses de combustión, hoy dentro de la familia Unicarriers."),
  b("Unicarriers", "Japón", false, "Sucesora de Nissan Forklift y TCM."),
  b("Baoli", "China / Alemania", false, "Marca del grupo KION fabricada en China."),
  // Marcas chinas: nuestra especialidad
  b("Heli", "China", true, "La marca china más vendida del mundo. Conocemos sus motores Xinchai e Isuzu y sus transmisiones."),
  b("Hangcha", "China", true, "Muy común en naves de México. Damos mantenimiento a sus equipos de combustión y de litio."),
  b("Lonking", "China", true, "Montacargas de combustión de bajo costo con motores Xinchai."),
  b("EP Equipment", "China", true, "Patines, apiladores y montacargas eléctricos de litio."),
  b("XCMG", "China", true, "Montacargas de combustión y eléctricos de un gran fabricante de maquinaria."),
  b("Zoomlion", "China", true, "Montacargas de combustión y eléctricos de litio."),
  b("LiuGong", "China", true, "Montacargas de combustión y eléctricos de un fabricante de maquinaria pesada."),
  b("Noblelift", "China", true, "Patines eléctricos, apiladores y montacargas de almacén."),
  b("BYD", "China", true, "Montacargas eléctricos con baterías de litio de fosfato de hierro."),
  b("SANY", "China", true, "Montacargas de combustión y eléctricos."),
  b("Maximal", "China", true, "Montacargas de combustión y todo terreno."),
  b("Socma", "China", true, "Montacargas de combustión de alta capacidad."),
  b("Dalian", "China", true, "Montacargas de combustión de uno de los fabricantes chinos más antiguos."),
  b("Sinomach", "China", true, "Montacargas de combustión."),
  b("JAC", "China", true, "Montacargas de combustión y eléctricos."),
  b("Hecha", "China", true, "Montacargas de combustión y eléctricos."),
];

export const BRANDS = {
  tradicionales: BRAND_LIST.filter((x) => !x.china).map((x) => x.name),
  chinas: BRAND_LIST.filter((x) => x.china).map((x) => x.name),
};
// Marcas que destacamos en portada
export const TOP_BRANDS = ["Toyota", "Crown", "Yale", "Hyster", "Caterpillar", "Mitsubishi", "Komatsu", "Nissan", "Clark", "Linde", "Jungheinrich", "Raymond"];

// ------------------------------------------------------------
//  ZONAS / PARQUES INDUSTRIALES (SEO local)
//  TODO: confirmar con el cliente qué parques atiende hoy
// ------------------------------------------------------------
export type Zone = { slug: string; name: string; parks: string[]; note: string };

export const ZONES: Zone[] = [
  { slug: "teoloyucan", name: "Teoloyucan", parks: ["Zona industrial de Teoloyucan", "Corredor Teoloyucan–Cuautitlán"], note: "Nuestra base de operaciones: aquí atendemos más rápido." },
  { slug: "cuautitlan-izcalli", name: "Cuautitlán Izcalli", parks: ["Parque Industrial Cuamatla", "Parque Industrial La Luz", "Parque Industrial Xhala", "Zona Industrial San Martín Obispo"], note: "Uno de los corredores industriales más grandes del Valle de México." },
  { slug: "cuautitlan", name: "Cuautitlán", parks: ["Zona industrial de Cuautitlán", "Corredor de la autopista México–Querétaro"], note: "A pocos minutos de nuestro taller." },
  { slug: "tultitlan", name: "Tultitlán", parks: ["Zona Industrial Tultitlán", "Corredor de la Vía López Portillo"], note: "Muchos CEDIS y operaciones logísticas." },
  { slug: "tepotzotlan", name: "Tepotzotlán", parks: ["Parques logísticos de la autopista México–Querétaro", "Zona Industrial El Trébol"], note: "Una de las zonas logísticas que más crece en el país." },
  { slug: "huehuetoca", name: "Huehuetoca", parks: ["Parques industriales de Huehuetoca", "Corredor Huehuetoca–Arco Norte"], note: "Naves nuevas conectadas al Arco Norte." },
  { slug: "zumpango", name: "Zumpango y zona AIFA", parks: ["Parques logísticos cercanos al AIFA", "Zona industrial de Zumpango"], note: "Una zona logística nueva alrededor del Aeropuerto Felipe Ángeles." },
  { slug: "coyotepec-melchor-ocampo-tultepec", name: "Coyotepec, Melchor Ocampo y Tultepec", parks: ["Naves industriales y bodegas de la región"], note: "Atendemos a empresas medianas y talleres de la región." },
];

// ------------------------------------------------------------
//  FAQ GENERAL (también va como FAQPage en schema.org)
// ------------------------------------------------------------
export const FAQS = [
  { q: "¿Dónde rentar un montacargas cerca de Teoloyucan o Cuautitlán?", a: "En Montacargas Teoloyucan rentamos montacargas de gas LP, diésel, gasolina y eléctricos por día, semana, mes o contrato anual, con entrega en Teoloyucan, Cuautitlán, Cuautitlán Izcalli, Tultitlán, Huehuetoca, Tepotzotlán y Zumpango." },
  { q: "¿Dan mantenimiento a montacargas de cualquier marca?", a: "Sí. Somos especialistas en todas las marcas: Toyota, Crown, Yale, Hyster, Caterpillar, Mitsubishi, Komatsu, Nissan, Clark, Linde, Jungheinrich, Raymond, Doosan y Hyundai, además de las marcas chinas como Heli, Hangcha, Lonking, EP, XCMG y Zoomlion." },
  { q: "¿Quién da mantenimiento a montacargas Toyota o Crown cerca de Cuautitlán?", a: "Montacargas Teoloyucan es especialista en montacargas Toyota, Crown, Yale, Hyster y Caterpillar, entre otras marcas. Damos mantenimiento preventivo, reparación y refacciones en tu planta en Teoloyucan, Cuautitlán, Cuautitlán Izcalli, Tultitlán, Tepotzotlán y Huehuetoca." },
  { q: "¿Quién repara montacargas chinos?", a: "El mantenimiento de montacargas chinos es nuestra especialidad. Somos de los pocos talleres de la zona que trabajan con marcas como Heli, Hangcha, Lonking, EP Equipment, XCMG, Zoomlion, LiuGong, Noblelift y BYD, y que consiguen sus refacciones." },
  { q: "¿Atienden parques industriales?", a: "Sí. La mayoría de nuestros clientes son empresas de los parques industriales y logísticos del norte del Estado de México. Ofrecemos pólizas de mantenimiento para flotillas y servicio en planta." },
  { q: "¿Cuál es su horario?", a: "Atendemos de lunes a sábado de 9:00 a 18:00 h. Pregunta por servicio fuera de horario para equipos parados." },
  { q: "¿Cómo cotizo?", a: `Llámanos al ${SITE.phone}, escríbenos por WhatsApp o llena el formulario de contacto. Dinos marca, modelo, capacidad y ubicación del equipo.` },
  { q: "¿Facturan?", a: "Sí, todos nuestros servicios se facturan." },
];

// ------------------------------------------------------------
//  CONTENIDO ÚNICO POR MARCA (modelos, fallas típicas, refacciones)
// ------------------------------------------------------------
export type BrandExtra = {
  models: string[];
  typicalFaults: string[];
  parts: string[];
  brandFaqs: { q: string; a: string }[];
};

export const BRAND_EXTRAS: Record<string, BrandExtra> = {
  toyota: {
    models: ["8FGU25 (gas LP)", "8FGU30 (gas LP)", "8FG15N (gas LP)", "8FDF30 (diésel)", "8FBN20 (eléctrico)", "7FBJ15 (eléctrico)"],
    typicalFaults: [
      "Falla del convertidor de par en modelos de combustión (8FGU/8FG)",
      "Fugas de aceite en cilindros del mástil",
      "Errores del sistema SAS (Sistema de Control Activo de Estabilidad)",
      "Desgaste acelerado de clutch húmedo en transmisiones automáticas",
      "Fallo de cargador de batería en modelos eléctricos (8FBN)",
    ],
    parts: ["Filtro de aceite Toyota", "Filtro de aire", "Bujías para gas LP", "Kit de frenos", "Sellos de cilindros de mástil", "Kit del convertidor de par", "Cadenas de mástil"],
    brandFaqs: [
      { q: "¿Cuántas horas de vida tiene un montacargas Toyota?", a: "Un Toyota bien mantenido puede superar las 10,000 horas de operación. La clave es el mantenimiento preventivo puntual cada 250 horas." },
      { q: "¿Qué significa el error SAS en un Toyota?", a: "El SAS (Sistema Activo de Estabilidad) detecta inclinaciones peligrosas. Los errores más comunes son por sensores de ángulo o presión defectuosos. Lo diagnosticamos con escáner." },
      { q: "¿Dan mantenimiento a Toyota sin ser distribuidores autorizados?", a: "Sí. Somos un taller especializado con experiencia en Toyota. Usamos refacciones originales y alternativas de calidad." },
    ],
  },
  crown: {
    models: ["RC 5500 (reach)", "SC 5200 (stand-up)", "FC 5200 (eléctrico)", "GPC 3020 (patin)", "WAV 50 (order picker)", "ST 3000 (patin de pie)"],
    typicalFaults: [
      "Fallo del módulo de control eléctrico (Crown Access 3)",
      "Desgaste prematuro de ruedas de conducción de poliuretano",
      "Falla del cargador de batería integrado (FastCharge)",
      "Contactores quemados por ciclos de carga frecuentes",
      "Fallo del sensor de altura del mástil en reach trucks",
    ],
    parts: ["Módulos de control Crown", "Ruedas de poliuretano", "Cargadores FastCharge", "Contactores", "Baterías de tracción 24V/36V/48V"],
    brandFaqs: [
      { q: "¿Pueden reparar un Crown fuera del distribuidor autorizado?", a: "Sí. Tenemos experiencia con la electrónica y los sistemas hidráulicos de Crown. Llámanos para agendar diagnóstico en tu planta." },
      { q: "¿Consiguen refacciones originales Crown?", a: "Conseguimos refacciones originales Crown y equivalentes de calidad comprobada. Los módulos de control y ruedas son los más solicitados." },
      { q: "¿Cuánto dura una batería de tracción Crown?", a: "Entre 3 y 5 años con mantenimiento correcto (ecualización, niveles de electrolito). Te ayudamos a evaluar si conviene rehabilitar o reemplazar." },
    ],
  },
  yale: {
    models: ["GLP040VX (gas LP, 2 ton)", "GDP030MX (diésel)", "GLP25VX (gas LP)", "ERP030VFN (eléctrico reach)", "MR14 (reach)"],
    typicalFaults: [
      "Falla en la transmisión automática (modelos GDP/GLP de combustión)",
      "Fugas en la bomba hidráulica de dirección",
      "Fallo del sistema de dirección asistida electro-hidráulica",
      "Desgaste de llantas prematuro en pisos abrasivos o irregulares",
      "Problemas con el sistema de frenos de estacionamiento",
    ],
    parts: ["Kit de transmisión Yale", "Bomba hidráulica", "Sellos de dirección", "Llantas sólidas y neumáticas", "Filtros de aceite y aire", "Cadenas de mástil"],
    brandFaqs: [
      { q: "¿Yale y Hyster son el mismo equipo?", a: "Sí, ambas marcas son de KION Group (antes NACCO Industries). Comparten muchas plataformas mecánicas, aunque tienen diferencias en acabados y sistemas de control." },
      { q: "¿Consiguen refacciones Yale en México?", a: "Sí, tenemos acceso a refacciones originales y alternativas de calidad para Yale: transmisiones, hidráulicos, motores y componentes eléctricos." },
      { q: "¿Dan mantenimiento a reach trucks Yale?", a: "Sí. Atendemos los modelos ERP y MR de Yale: controladores, mástiles telescópicos, motores de tracción e izaje." },
    ],
  },
  hyster: {
    models: ["H2.5FT (gas LP)", "H3.5FT (gas LP)", "H4.0FT", "H50FT (5 ton)", "H80FT (8 ton)", "J2.5XN (eléctrico)", "RS/RST45 (reach)"],
    typicalFaults: [
      "Fallo en el convertidor de torsión (serie FT de combustión)",
      "Desgaste acelerado del diferencial en trabajo pesado",
      "Fuga en cilindros de dirección hidráulica",
      "Fallo del sistema de control eléctrico en modelos J/XN",
      "Problemas de temperatura en motores Mazda y GM usados por Hyster",
    ],
    parts: ["Kit de diferencial", "Convertidor de torsión", "Cilindros de dirección", "Kit de motor (Mazda/GM)", "Sellos hidráulicos", "Cadenas y rodamientos de mástil"],
    brandFaqs: [
      { q: "¿Hyster sirve para trabajo pesado de 5 toneladas o más?", a: "Sí. La serie H50FT-H80FT está diseñada para cargas pesadas. Es una de las más robustas del mercado. Le damos mantenimiento y conseguimos refacciones." },
      { q: "¿Qué motor trae el Hyster H2.5FT?", a: "Generalmente motor Mazda XF (gas LP) o GM 2.4L. Son motores accesibles en México, con buena disponibilidad de refacciones." },
      { q: "¿Dan mantenimiento a Hyster de alta capacidad (8 ton+)?", a: "Sí. Atendemos toda la gama Hyster, incluyendo los modelos de alta capacidad para manufactura y logística pesada." },
    ],
  },
  caterpillar: {
    models: ["GP25N (gas LP)", "GP30N (gas LP)", "DP25N (diésel)", "DP30N (diésel)", "EP25K (eléctrico)", "GP40K (gas LP, 4 ton)"],
    typicalFaults: [
      "Fallo del módulo electrónico ECM/ECU",
      "Sensor de temperatura del motor defectuoso",
      "Falla en la transmisión PowerShift automática",
      "Fugas en el sistema hidráulico (válvulas de control de levante)",
      "Problemas eléctricos en arneses por vibración",
    ],
    parts: ["Módulo ECM", "Sensores de temperatura y presión", "Kit de transmisión PowerShift", "Válvulas de control hidráulico", "Filtros originales Cat"],
    brandFaqs: [
      { q: "¿Los montacargas Cat los fabrica Mitsubishi?", a: "Sí. Cat Lift Trucks son fabricados por Mitsubishi Logisnext (antes Mitsubishi Caterpillar Forklift). Comparten plataformas con Mitsubishi y Jungheinrich en algunos modelos." },
      { q: "¿Pueden leer códigos de error de un Caterpillar?", a: "Sí. Contamos con herramienta de diagnóstico para leer y borrar códigos de falla del ECM en montacargas Cat. Atendemos en tu planta." },
      { q: "¿Consiguen refacciones Cat en México?", a: "Sí, tenemos acceso a refacciones Cat originales y alternativas de alta calidad para toda la línea GP, DP y EP." },
    ],
  },
  heli: {
    models: ["CPCD25-RW5 (gas LP/gasolina, 2.5 ton)", "CPCD30 (3 ton)", "CPCD35 (3.5 ton)", "CPCD50 (5 ton)", "CPD20-30 (eléctrico)", "CPDS16 (reach)"],
    typicalFaults: [
      "Sobrecalentamiento del motor Xinchai 490 o 4D35",
      "Fugas de aceite en la junta de culata por recalentamiento",
      "Problemas con la transmisión automática (torque converter y cambios)",
      "Fuga de aceite de dirección hidráulica (sellos desgastados)",
      "Presión baja en el sistema hidráulico (bomba desgastada)",
      "Fallo del controlador en modelos eléctricos CPD",
    ],
    parts: ["Motor Xinchai 490/4D35", "Kit de junta de culata", "Kit de transmisión", "Bomba hidráulica Heli", "Sellos de dirección", "Controladores para eléctricos"],
    brandFaqs: [
      { q: "¿Dónde dar mantenimiento a un Heli en Estado de México?", a: "Montacargas Teoloyucan, en Teoloyucan, Edomex, es especialista en montacargas Heli. Damos mantenimiento preventivo, reparación y conseguimos refacciones Xinchai." },
      { q: "¿Qué motor trae el Heli CPCD25?", a: "El Heli CPCD25 generalmente trae motor Xinchai 490 (4 cilindros, gas LP) o motor Isuzu C240. Ambos son accesibles en México." },
      { q: "¿Consiguen refacciones Xinchai en México?", a: "Sí. Las refacciones del motor Xinchai 490 están disponibles. También conseguimos kits de transmisión, bombas hidráulicas y sellos para Heli." },
    ],
  },
  hangcha: {
    models: ["CPCD25-RH5 (gas LP)", "CPCD30 (3 ton)", "A-series (gas LP)", "N-series (litio, 2-3 ton)", "XC-series", "R-series (reach, litio)"],
    typicalFaults: [
      "Fallo del controlador Curtis (serie 1298, 1253) en modelos eléctricos",
      "Fallo del BMS (sistema de gestión de batería) en modelos de litio",
      "Fugas en el sistema hidráulico (sellos de cilindros desgastados)",
      "Problemas de motor de torsión de litio (recalentamiento, códigos de error)",
      "Fallo de la dirección eléctrica en modelos N-series",
      "Recalentamiento del motor de combustión en modelos A-series",
    ],
    parts: ["Controladores Curtis 1298/1253", "BMS y packs de baterías de litio", "Sellos hidráulicos", "Bomba hidráulica Hangcha", "Motor de torsión (eléctricos)", "Filtros A-series"],
    brandFaqs: [
      { q: "¿Pueden reparar un Hangcha eléctrico de litio?", a: "Sí. Diagnosticamos y reparamos los modelos N-series y R-series de Hangcha con batería de litio, incluyendo el BMS y los controladores Curtis." },
      { q: "¿Consiguen baterías de litio para Hangcha?", a: "Sí. Conseguimos packs de litio compatibles y hacemos el diagnóstico del BMS para saber si el problema es en celdas, conexiones o la electrónica." },
      { q: "¿Los Hangcha A-series tienen motor Xinchai?", a: "Sí, los modelos A-series de combustión generalmente traen motor Xinchai o Quanchai. Tenemos experiencia y refacciones para estos motores." },
    ],
  },
};

// ------------------------------------------------------------
//  CÓMO TRABAJAMOS (proceso de 4 pasos)
// ------------------------------------------------------------
export const HOW_WE_WORK = [
  { step: "01", title: "Diagnóstico", text: "Visita técnica a tu planta o inspección del equipo en nuestro taller. Te explicamos qué tiene y qué necesita." },
  { step: "02", title: "Cotización", text: "Presupuesto claro y sin letra chica el mismo día, con refacciones y mano de obra desglosadas." },
  { step: "03", title: "Servicio", text: "Reparación, mantenimiento o entrega del equipo en renta, con tiempo de entrega comprometido." },
  { step: "04", title: "Póliza", text: "Si tienes flotilla, te armamos un plan de mantenimiento preventivo con bitácora y reporte técnico por equipo." },
];

export const WHY_US = [
  { title: "Especialistas en todas las marcas", text: "Toyota, Crown, Yale, Hyster, Caterpillar, Mitsubishi, Komatsu, Nissan, Clark, Linde y más. Un solo proveedor para toda tu flotilla." },
  { title: "Especialistas en equipos chinos", text: "Damos servicio a las marcas que casi nadie quiere atender, y conseguimos sus refacciones." },
  { title: "Servicio en tu planta", text: "Técnicos con unidad de servicio para no detener tu producción." },
  { title: "Respuesta rápida en la zona", text: "Estamos en Teoloyucan, en el centro del corredor industrial norte." },
  { title: "Pólizas para flotillas", text: "Mantenimiento programado, bitácoras y reportes técnicos por equipo." },
  { title: "Renta con respaldo", text: "Si tu equipo rentado falla, lo reemplazamos." },
];
