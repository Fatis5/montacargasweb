// Contenido del blog — artículos de SEO y GEO para Montacargas Teoloyucan.
// Cada artículo incluye párrafo de respuesta directa, secciones y FAQ.

export type ContentBlock =
  | { t: "p"; v: string }
  | { t: "h2"; v: string }
  | { t: "h3"; v: string }
  | { t: "ul"; v: string[] }
  | { t: "ol"; v: string[] }
  | { t: "table"; caption?: string; headers: string[]; rows: string[][] }
  | { t: "note"; v: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  blocks: ContentBlock[];
  faqs: { q: string; a: string }[];
};

export const BLOG_POSTS: BlogPost[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. Rentar o comprar
  // ─────────────────────────────────────────────────────────────
  {
    slug: "renta-o-comprar-montacargas",
    title: "¿Rentar o comprar un montacargas? Guía para naves industriales",
    description:
      "Comparativa completa entre rentar y comprar montacargas para empresas e industrias del norte del Estado de México. Aprende cuándo conviene cada opción y cómo el mantenimiento cambia el cálculo.",
    date: "2024-11-01",
    image: "/images/montacargas-reach-crown-raymond-almacen.jpg",
    blocks: [
      {
        t: "p",
        v: "Rentar un montacargas conviene cuando el uso es menor a 4 horas diarias, el proyecto es temporal o el equipo propio está en reparación. Comprar es mejor cuando la operación es intensiva y constante. Montacargas Teoloyucan ofrece ambas opciones con mantenimiento incluido en la renta y planes de servicio posventa en la compra.",
      },
      {
        t: "h2",
        v: "¿Cuándo conviene rentar un montacargas?",
      },
      {
        t: "p",
        v: "La renta es la opción más inteligente en estos escenarios:",
      },
      {
        t: "ul",
        v: [
          "Picos de producción o temporada alta: necesitas más equipo por semanas o meses, no todo el año.",
          "Proyecto de duración definida: una nueva nave, una mudanza o el arranque de operaciones.",
          "Tu equipo propio está en mantenimiento correctivo y no puedes parar la producción.",
          "Uso menor a 4 horas por día: el costo de propiedad no se justifica con tan poco uso.",
          "Quieres probar un modelo o capacidad antes de invertir en la compra.",
        ],
      },
      {
        t: "h2",
        v: "¿Cuándo conviene comprar un montacargas?",
      },
      {
        t: "ul",
        v: [
          "Operación intensiva de más de 6 horas diarias, 5 o 6 días a la semana.",
          "La operación es estable y no tiene variaciones estacionales importantes.",
          "Tienes personal de mantenimiento interno o contratas una póliza con nosotros.",
          "Quieres optimizar los activos del negocio y aprovechar la depreciación fiscal.",
          "Necesitas una especificación muy particular (capacidad, mástil, adjuntos) que no está disponible en renta.",
        ],
      },
      {
        t: "table",
        caption: "Renta vs. compra: factores clave",
        headers: ["Factor", "Renta", "Compra"],
        rows: [
          ["Inversión inicial", "Mínima (depósito)", "Alta (precio del equipo)"],
          ["Costo mensual", "Renta fija, predecible", "Depreciación + mantenimiento"],
          ["Mantenimiento", "Incluido en la renta", "Separado (póliza o correctivo)"],
          ["Flexibilidad", "Alta: cambias o devuelves el equipo", "Baja: el equipo es tuyo"],
          ["Horizonte recomendado", "1 día a 2 años", "Más de 3 años de uso continuo"],
          ["Riesgo de obsolescencia", "Nulo: actualizas el equipo", "Existe: el equipo envejece"],
        ],
      },
      {
        t: "h2",
        v: "El factor que nadie considera: el mantenimiento",
      },
      {
        t: "p",
        v: "El costo total de un montacargas no termina en el precio de compra. Las empresas que no consideran el mantenimiento desde el inicio terminan pagando reparaciones correctivas que pueden costar 3 a 5 veces más que un plan preventivo. Si compras, contrata una póliza de mantenimiento desde el primer día. Si rentas con nosotros, el preventivo ya está incluido.",
      },
      {
        t: "h2",
        v: "¿Puedo rentar primero y comprar después?",
      },
      {
        t: "p",
        v: "Sí. Es una estrategia frecuente: rentas durante el arranque de la operación, pruebas el equipo en tu entorno real y, si te convence, lo compras o adquieres uno similar. En Montacargas Teoloyucan podemos asesorarte en ambas etapas.",
      },
    ],
    faqs: [
      { q: "¿Cuánto cuesta rentar un montacargas?", a: "El costo depende de la capacidad, el tipo (gas LP, diésel o eléctrico), el plazo y si incluye operador. Contáctanos para una cotización específica para tu operación." },
      { q: "¿La renta de montacargas incluye mantenimiento?", a: "Sí. Nuestra renta incluye mantenimiento preventivo. Si el equipo falla, lo reparamos o lo reemplazamos para no detener tu operación." },
      { q: "¿Puedo rentar un montacargas con operador?", a: "Sí. Podemos enviar el montacargas con operador certificado o solo el equipo, según lo que necesites." },
      { q: "¿Pueden venderme el montacargas que rento?", a: "Depende del equipo disponible. Consúltanos: en algunos casos sí es posible hacer una transición de renta a compra." },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 2. Mantenimiento montacargas chinos
  // ─────────────────────────────────────────────────────────────
  {
    slug: "mantenimiento-montacargas-chinos-heli-hangcha",
    title: "Mantenimiento de montacargas chinos: fallas comunes en Heli y Hangcha",
    description:
      "Guía técnica sobre el mantenimiento de montacargas chinos Heli y Hangcha: fallas comunes, refacciones y qué taller buscar en el Estado de México. Especialistas en Xinchai, Curtis y sistemas hidráulicos chinos.",
    date: "2024-11-05",
    image: "/images/reparacion-mastil-montacargas-tecnico.jpg",
    blocks: [
      {
        t: "p",
        v: "El mantenimiento de montacargas chinos (Heli, Hangcha, Lonking, EP Equipment, XCMG) es posible si encuentras un taller con experiencia en sus motores Xinchai, transmisiones automáticas y controladores Curtis o Zapi. Montacargas Teoloyucan, en Teoloyucan (Estado de México), es uno de los pocos talleres de la región que atiende estas marcas con refacciones y pólizas de mantenimiento.",
      },
      {
        t: "h2",
        v: "¿Por qué son tan comunes los montacargas chinos en México?",
      },
      {
        t: "p",
        v: "Las marcas chinas como Heli y Hangcha ofrecen una relación entre precio y capacidad que es difícil de igualar. Un Heli CPCD25 de 2.5 toneladas puede costar entre 30 y 50% menos que un Toyota o Crown equivalente. Muchas empresas del norte del Estado de México los compraron durante expansiones rápidas o para completar flotillas con menor inversión inicial.",
      },
      {
        t: "h2",
        v: "El problema real: el servicio posventa",
      },
      {
        t: "p",
        v: "El problema no es la calidad del equipo —que ha mejorado significativamente— sino la red de servicio. Muchos distribuidores de marcas chinas en México son pequeños o desaparecen después de algunos años, dejando a los clientes sin soporte técnico, sin refacciones y sin quien sepa diagnosticar el equipo. Es aquí donde Montacargas Teoloyucan llena el hueco.",
      },
      {
        t: "h2",
        v: "Fallas más comunes en montacargas Heli",
      },
      {
        t: "ul",
        v: [
          "Sobrecalentamiento del motor Xinchai 490 o 4D35 por obstrucción del radiador o fallo del termostato.",
          "Fuga de aceite en la junta de culata, frecuente cuando el motor se ha recalentado previamente.",
          "Problemas con la transmisión automática: resbalamiento de marchas o fallo del convertidor de torsión.",
          "Fuga de aceite de dirección hidráulica por sellos desgastados.",
          "Presión hidráulica baja que impide levantar la carga máxima (bomba hidráulica desgastada).",
          "Fallo del controlador en modelos eléctricos CPD (Curtis, Zapi o marca propia).",
        ],
      },
      {
        t: "h2",
        v: "Fallas más comunes en montacargas Hangcha",
      },
      {
        t: "ul",
        v: [
          "Fallo del controlador Curtis 1298 o 1253 en modelos eléctricos de las series A y N.",
          "Fallo del BMS (sistema de gestión de batería) en modelos de litio, con códigos de error que detienen el equipo.",
          "Fugas en el sistema hidráulico: sellos de cilindros de mástil y de la bomba.",
          "Problemas del motor de torsión en modelos eléctricos: recalentamiento o pérdida de potencia.",
          "Fallo del sistema de dirección eléctrica (EPS) en modelos N-series y R-series.",
        ],
      },
      {
        t: "h2",
        v: "¿Cómo mantener bien un montacargas chino?",
      },
      {
        t: "ol",
        v: [
          "Respeta los intervalos del fabricante: cambio de aceite de motor cada 250 horas, filtros cada 500 horas.",
          "Monitorea la temperatura del motor con regularidad, especialmente en trabajos intensivos.",
          "Revisa los niveles de aceite hidráulico y de transmisión mensualmente.",
          "Evalúa la batería de tracción cada 6 meses en modelos eléctricos (ecualización y niveles de electrolito en plomo-ácido).",
          "No dejes pasar fugas de aceite: en equipos chinos las fugas pequeñas escalan rápido.",
          "Contrata una póliza de mantenimiento con un taller que conozca estas marcas.",
        ],
      },
      {
        t: "h2",
        v: "¿Qué necesitas de tu taller de mantenimiento?",
      },
      {
        t: "ul",
        v: [
          "Experiencia con motores Xinchai y Quanchai (los más comunes en Heli, Hangcha y Lonking).",
          "Capacidad para diagnosticar controladores Curtis, Zapi e Inmotion.",
          "Acceso a refacciones originales o equivalentes de calidad para marcas chinas.",
          "Conocimiento del sistema hidráulico: bombas, válvulas y cilindros de los modelos más comunes.",
          "Disponibilidad para ir a tu planta o parque industrial.",
        ],
      },
    ],
    faqs: [
      { q: "¿Cada cuánto se le da mantenimiento a un Heli?", a: "Cada 250 horas de operación o cada 2 meses si el equipo trabaja poco. En operación intensiva (2 turnos), puede ser cada mes. Ajustamos el plan según el horómetro." },
      { q: "¿Consiguen refacciones originales para montacargas Heli y Hangcha?", a: "Sí. Conseguimos refacciones originales y equivalentes de calidad: motores Xinchai, kits de transmisión, bombas hidráulicas, sellos y controladores. Llámanos con el modelo y número de serie." },
      { q: "¿Pueden diagnosticar errores en un Hangcha eléctrico de litio?", a: "Sí. Contamos con herramienta de diagnóstico para controladores Curtis y Zapi, que son los más comunes en Hangcha eléctrico. También revisamos el BMS de los modelos de litio." },
      { q: "¿Hacen pólizas de mantenimiento para flotillas de montacargas chinos?", a: "Sí. Armamos pólizas por horómetro o calendario para flotillas de Heli, Hangcha, Lonking, EP y otras marcas chinas. Incluimos bitácora y reporte técnico por equipo." },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 3. NOM-006-STPS
  // ─────────────────────────────────────────────────────────────
  {
    slug: "nom-006-stps-montacargas",
    title: "NOM-006-STPS: lo que tu empresa debe cumplir con sus montacargas",
    description:
      "Resumen claro de la NOM-006-STPS-2023 para montacargas: obligaciones del patrón, requisitos de operadores, mantenimiento, señalización y consecuencias de no cumplir. Guía para empresas en Estado de México.",
    date: "2024-11-08",
    image: "/images/montacargas-mastil-elevado-nave-industrial.jpg",
    blocks: [
      {
        t: "p",
        v: "La NOM-006-STPS establece las condiciones de seguridad para el uso y mantenimiento de montacargas en México. Obliga al patrón a mantener los equipos en condiciones seguras, capacitar a los operadores con constancia DC-3 y llevar bitácoras de mantenimiento. El incumplimiento puede resultar en multas de hasta 25,000 UMAs y suspensión de actividades.",
      },
      {
        t: "h2",
        v: "¿Qué es la NOM-006-STPS?",
      },
      {
        t: "p",
        v: 'La NOM-006-STPS-2023 (Manejo y almacenamiento de materiales — Condiciones y procedimientos de seguridad) es la norma oficial mexicana que regula el uso seguro de montacargas industriales en centros de trabajo. Es de cumplimiento obligatorio para cualquier empresa que tenga montacargas en operación, sin importar el tamaño de la empresa o el número de equipos.',
      },
      {
        t: "h2",
        v: "Obligaciones del patrón",
      },
      {
        t: "ul",
        v: [
          "Contar con un programa de mantenimiento preventivo para cada montacargas.",
          "Llevar una bitácora de mantenimiento y operación por equipo.",
          "Proporcionar al operador el manual del equipo en español.",
          "Verificar que el operador tenga capacitación vigente (DC-3).",
          "Señalizar las áreas de tránsito de montacargas y los límites de velocidad.",
          "Garantizar que el equipo tenga extingidor en buen estado.",
          "No permitir que operen personas no capacitadas o menores de 18 años.",
          "Realizar verificaciones preoperacionales antes de cada turno.",
        ],
      },
      {
        t: "h2",
        v: "Requisitos para los operadores",
      },
      {
        t: "ul",
        v: [
          "Ser mayor de 18 años.",
          "Haber recibido capacitación teórico-práctica en operación segura de montacargas.",
          "Contar con constancia de habilidades laborales DC-3 vigente.",
          "Conocer el checklist de inspección preoperacional.",
          "Usar el equipo de protección personal: casco (en exteriores o áreas de alto riesgo), zapatos de seguridad y chaleco reflectante.",
          "No operar el equipo bajo los efectos de medicamentos que alteren los reflejos, alcohol o drogas.",
        ],
      },
      {
        t: "h2",
        v: "Mantenimiento y verificación según la norma",
      },
      {
        t: "ul",
        v: [
          "El mantenimiento debe realizarse con la frecuencia que indique el fabricante o cada 250 horas de uso, lo que ocurra primero.",
          "Deben documentarse todos los trabajos de mantenimiento realizados en la bitácora del equipo.",
          "El montacargas no debe operarse si tiene defectos que comprometan la seguridad.",
          "Las cadenas de mástil deben inspeccionarse periódicamente y reemplazarse cuando muestren alargamiento o daño.",
          "El sistema de frenos debe garantizar que el equipo se detenga en la distancia requerida.",
        ],
      },
      {
        t: "h2",
        v: "Señalización y áreas de tránsito",
      },
      {
        t: "ul",
        v: [
          "Las áreas donde transitan montacargas deben estar demarcadas con líneas amarillas en el piso.",
          "Se deben instalar espejos convexos en intersecciones ciegas.",
          "Los límites de velocidad (generalmente 10 km/h en interiores) deben estar señalizados.",
          "Las zonas de carga y descarga deben estar claramente definidas.",
          "El acceso de peatones a las áreas de operación de montacargas debe controlarse.",
        ],
      },
      {
        t: "h2",
        v: "Consecuencias de no cumplir",
      },
      {
        t: "ul",
        v: [
          "Multas de entre 250 y 25,000 veces la Unidad de Medida y Actualización (UMA).",
          "Suspensión temporal de actividades hasta corregir las deficiencias.",
          "Responsabilidad civil y penal en caso de accidente por incumplimiento.",
          "Daño a la reputación de la empresa y posibles sanciones de clientes corporativos que auditan a sus proveedores.",
        ],
      },
    ],
    faqs: [
      { q: "¿Cada cuánto hay que verificar el montacargas según la NOM-006-STPS?", a: "La norma exige mantenimiento preventivo conforme al manual del fabricante o cada 250 horas de operación. Además, se requiere una inspección preoperacional antes de cada turno." },
      { q: "¿Qué es la constancia DC-3 para operadores de montacargas?", a: "La DC-3 es la constancia de habilidades laborales emitida por la STPS que certifica que el operador recibió capacitación en operación segura de montacargas. Se obtiene después de un curso teórico-práctico con instructor certificado." },
      { q: "¿Ustedes imparten la capacitación para la DC-3?", a: "Sí. Ofrecemos cursos teórico-prácticos de operación segura de montacargas, alineados a la NOM-006-STPS, con constancia DC-3 al finalizar. Podemos impartirlos en tu planta." },
      { q: "¿Cuánto puede multar la STPS por incumplir la NOM-006-STPS?", a: "Las multas van de 250 a 25,000 UMAs. En 2024, una UMA equivale a $108.57 pesos, lo que representa multas de $27,142 hasta $2,714,250 pesos según la gravedad del incumplimiento." },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 4. Gas LP vs. eléctrico
  // ─────────────────────────────────────────────────────────────
  {
    slug: "gas-lp-vs-electrico-montacargas-cedis",
    title: "Gas LP vs. eléctrico: qué montacargas conviene en tu CEDIS",
    description:
      "Comparativa técnica entre montacargas de gas LP y eléctricos para CEDIS y naves industriales. Costos, autonomía, emisiones y cuándo vale la pena cambiar a litio. Guía para empresas en el Estado de México.",
    date: "2024-11-12",
    image: "/images/revision-montacargas-combustion-gas-lp.jpg",
    blocks: [
      {
        t: "p",
        v: "Para un CEDIS interior, el montacargas eléctrico es generalmente la mejor opción: cero emisiones, menor ruido y bajo costo operativo a largo plazo. Para operaciones mixtas o exteriores intensivas, el gas LP ofrece mayor autonomía y menor inversión inicial. Los equipos de litio están cerrando la brecha y haciendo que el eléctrico sea viable incluso en operaciones de dos turnos.",
      },
      {
        t: "h2",
        v: "Montacargas de gas LP: ventajas y limitaciones",
      },
      {
        t: "ul",
        v: [
          "✓ Menor costo de adquisición que el equivalente eléctrico.",
          "✓ Recarga en minutos: cambias el tanque y sigues trabajando.",
          "✓ Ideal para operaciones de 2 o 3 turnos sin paradas largas.",
          "✓ Funciona bien en exteriores y en temperaturas extremas.",
          "✗ Emite gases de combustión: requiere buena ventilación o no aplica en interiores cerrados.",
          "✗ Costo de combustible variable según el precio del gas LP.",
          "✗ Mayor cantidad de partes móviles = más puntos de falla y mantenimiento más frecuente.",
          "✗ Ruido más alto que el eléctrico.",
        ],
      },
      {
        t: "h2",
        v: "Montacargas eléctricos: ventajas y limitaciones",
      },
      {
        t: "ul",
        v: [
          "✓ Cero emisiones: ideal para almacenes de alimentos, farmacéuticos o con certificaciones ambientales.",
          "✓ Menor ruido: mejor para almacenes con trabajo de oficina cercano.",
          "✓ Costo de energía más bajo que el combustible a largo plazo.",
          "✓ Menos mantenimiento correctivo: sin motor de combustión, sin aceite de motor, sin bujías.",
          "✗ Tiempo de carga: de 6 a 8 horas en baterías de plomo-ácido.",
          "✗ Mayor costo inicial (equipo + cargador + área de carga).",
          "✗ Rendimiento de la batería disminuye en frío extremo.",
          "✗ Las baterías de plomo-ácido necesitan mantenimiento (ecualización, niveles de agua).",
        ],
      },
      {
        t: "table",
        caption: "Gas LP vs. Eléctrico vs. Litio: comparativa para CEDIS",
        headers: ["Factor", "Gas LP", "Eléctrico (plomo-ácido)", "Eléctrico (litio)"],
        rows: [
          ["Inversión inicial", "Media", "Media-Alta", "Alta"],
          ["Costo operativo mensual", "Alto (combustible)", "Bajo (electricidad)", "Muy bajo"],
          ["Recarga / turno extra", "Inmediata (cambio tanque)", "6–8 h de carga", "1–2 h de carga rápida"],
          ["Emisiones", "Sí (CO, NOx)", "Ninguna", "Ninguna"],
          ["Mantenimiento", "Frecuente", "Moderado", "Mínimo"],
          ["Vida útil del propulsor", "10,000+ h con buen mantenimiento", "Batería: 3–5 años", "Batería: 8–10 años"],
          ["Uso en interiores cerrados", "No recomendado", "Sí", "Sí"],
          ["Temperatura extrema", "Sin problema", "Pérdida de capacidad", "Pérdida leve"],
        ],
      },
      {
        t: "h2",
        v: "Factores decisivos para elegir",
      },
      {
        t: "ul",
        v: [
          "Tipo de instalación: si es interior cerrado sin ventilación industrial, el eléctrico es obligatorio.",
          "Número de turnos: con 2 o 3 turnos seguidos, el eléctrico de plomo-ácido requiere más baterías; el litio o el gas LP son más prácticos.",
          "Certificaciones del cliente: si manejas alimentos, farmacéuticos o tienes cliente que audita emisiones, necesitas eléctrico.",
          "Presupuesto de inversión vs. operativo: el gas LP tiene menor costo inicial pero mayor gasto mensual de combustible.",
          "Infraestructura disponible: el eléctrico requiere área de carga con ventilación (plomo-ácido) o cargadores de litio.",
        ],
      },
      {
        t: "h2",
        v: "El litio cambia el juego",
      },
      {
        t: "p",
        v: "Las baterías de litio (LFP, litio-ferrofosfato) están resolviendo los principales problemas del eléctrico tradicional: cargan en 1-2 horas, no necesitan sala de baterías especial, no emiten gases en la carga y duran el doble que el plomo-ácido. Marcas como Hangcha N-series, BYD y EP Equipment ya vienen de fábrica con litio. Si tu operación es intensiva y quieres eléctrico, el litio es hoy la mejor inversión.",
      },
    ],
    faqs: [
      { q: "¿Cuánto gas LP consume un montacargas de 2.5 toneladas al día?", a: "Un montacargas de 2.5 toneladas en operación normal consume entre 8 y 15 kg de gas LP por turno de 8 horas. El consumo varía según el peso de la carga, la altura de levante y el tipo de piso." },
      { q: "¿Cuánto dura la carga de un montacargas eléctrico?", a: "Una batería de plomo-ácido requiere entre 6 y 8 horas de carga completa. Los equipos con baterías de litio se cargan en 1 a 2 horas. Algunos modelos admiten carga parcial ('oportunidad de carga') en paradas cortas." },
      { q: "¿Los montacargas eléctricos pueden trabajar en exteriores?", a: "Sí, pero con limitaciones. No son recomendables en exteriores con lluvia intensa, lodo o superficies muy irregulares. Son ideales para exteriores pavimentados y secos. El frío extremo reduce la capacidad de la batería." },
      { q: "¿Vale la pena cambiar de gas LP a eléctrico?", a: "Depende de tu operación. Si trabajas en interiores y tus turnos son de 8 horas o menos, la transición se paga sola en 2-4 años por el ahorro en combustible y mantenimiento. Te ayudamos a hacer el análisis para tu caso específico." },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 5. Checklist diario
  // ─────────────────────────────────────────────────────────────
  {
    slug: "checklist-inspeccion-diaria-montacargas",
    title: "Checklist diario de inspección de montacargas (20 puntos)",
    description:
      "Checklist completo de inspección preoperacional de montacargas según la NOM-006-STPS. 20 puntos que el operador debe verificar antes de cada turno para prevenir accidentes y fallas. Descargable.",
    date: "2024-11-15",
    image: "/images/montacargas-crown-reach-capacidad-2000-kg.jpg",
    blocks: [
      {
        t: "p",
        v: "La inspección preoperacional diaria de un montacargas es obligatoria según la NOM-006-STPS y debe realizarla el operador antes de iniciar cada turno. Esta revisión de 5 a 10 minutos detecta fallas antes de que el equipo esté bajo carga, reduce accidentes y prolonga la vida útil del equipo. A continuación, el checklist completo de 20 puntos.",
      },
      {
        t: "h2",
        v: "¿Por qué es obligatorio el checklist?",
      },
      {
        t: "p",
        v: "La NOM-006-STPS establece que el patrón debe implementar verificaciones preoperacionales y que el operador debe conocer y aplicar el procedimiento de inspección antes de cada turno. No aplicar el checklist es una violación a la norma y puede resultar en multas. Más importante aún, la mayoría de los accidentes con montacargas ocurren por fallas mecánicas que una inspección habría detectado.",
      },
      {
        t: "h2",
        v: "El checklist completo: 20 puntos de inspección",
      },
      { t: "h3", v: "Sistema de frenos" },
      {
        t: "ul",
        v: [
          "1. Freno de servicio: el pedal no debe ceder hasta el piso; el equipo debe detenerse con suavidad.",
          "2. Freno de estacionamiento: debe mantener el equipo inmóvil en la pendiente máxima del área de trabajo.",
          "3. No hay ruidos extraños (chirridos, golpes) al frenar.",
        ],
      },
      { t: "h3", v: "Sistema de dirección" },
      {
        t: "ul",
        v: [
          "4. El volante gira suavemente sin juego excesivo ni ruidos.",
          "5. Las ruedas traseras responden correctamente al girar el volante.",
        ],
      },
      { t: "h3", v: "Mástil y horquillas" },
      {
        t: "ul",
        v: [
          "6. Las horquillas no tienen grietas, dobleces ni desgaste en los talones (más de 10% de desgaste = reemplazar).",
          "7. Las cadenas del mástil están tensas y lubricadas; no hay eslabones rotos o alargados.",
          "8. Los rodamientos y guías del mástil no hacen ruidos ni muestran desgaste visible.",
          "9. Los cilindros del mástil no tienen fugas de aceite hidráulico.",
          "10. El mástil sube, baja e inclina correctamente, sin tirones ni caídas.",
        ],
      },
      { t: "h3", v: "Llantas y ruedas" },
      {
        t: "ul",
        v: [
          "11. Las llantas sólidas no tienen cortes profundos, desgarros o deformaciones.",
          "12. Las llantas neumáticas (si aplica) tienen la presión correcta.",
          "13. Los pernos de las ruedas están completos y apretados.",
        ],
      },
      { t: "h3", v: "Iluminación y señales" },
      {
        t: "ul",
        v: [
          "14. Las luces de advertencia (sirena de respaldo, luz giratoria) funcionan.",
          "15. El claxon funciona.",
        ],
      },
      { t: "h3", v: "Niveles y fluidos" },
      {
        t: "ul",
        v: [
          "16. Nivel de aceite de motor (en equipos de combustión): dentro del rango.",
          "17. Nivel de aceite hidráulico: dentro del rango; no hay fugas visibles.",
          "18. Nivel de agua del radiador (si aplica): lleno.",
        ],
      },
      { t: "h3", v: "Combustible o batería" },
      {
        t: "ul",
        v: [
          "19. Montacargas de gas LP: el tanque tiene suficiente combustible para el turno; la válvula no tiene fugas.",
          "19. Montacargas eléctrico: la batería está cargada al 80% mínimo; no hay cables pelados ni ácido derramado.",
        ],
      },
      { t: "h3", v: "Seguridad general" },
      {
        t: "ul",
        v: [
          "20. El extingidor está en su lugar, con seguro y sin señales de uso o daño.",
        ],
      },
      {
        t: "h2",
        v: "Cómo implementarlo en tu planta",
      },
      {
        t: "ol",
        v: [
          "Imprime el checklist y coloca una copia en cada montacargas.",
          "Capacita a los operadores para que lo apliquen al inicio de cada turno.",
          "Define qué hacer si el equipo no pasa la inspección: reportarlo al supervisor y no operarlo.",
          "Guarda los checklists firmados durante al menos 3 meses (lo que pide la STPS en caso de inspección).",
          "Contrata una póliza de mantenimiento para corregir los puntos que fallen con regularidad.",
        ],
      },
    ],
    faqs: [
      { q: "¿La inspección preoperacional la hace el operador o el técnico de mantenimiento?", a: "La hace el operador antes de cada turno. Es una verificación visual y funcional rápida (5-10 min). El mantenimiento técnico profundo lo realiza el taller; la inspección diaria es responsabilidad del operador." },
      { q: "¿Hay un formato oficial para el checklist de montacargas?", a: "La NOM-006-STPS no establece un formato único, pero sí exige que exista un procedimiento documentado. Puedes usar nuestro checklist de 20 puntos, adaptándolo a las características específicas de tu equipo." },
      { q: "¿Qué hago si el montacargas no pasa la inspección preoperacional?", a: "No lo operes. Repórtalo al supervisor y coloca una señal de 'equipo fuera de servicio'. Llámanos para agendar el diagnóstico: si el equipo está en nuestra póliza, tenemos tiempo de respuesta prioritario." },
      { q: "¿Cuánto tiempo tarda la inspección preoperacional?", a: "Entre 5 y 10 minutos si el operador conoce bien el checklist. Con capacitación adecuada, se convierte en un hábito rápido que salva vidas y evita paros de producción costosos." },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 6. Costo de no mantener
  // ─────────────────────────────────────────────────────────────
  {
    slug: "costo-no-dar-mantenimiento-montacargas",
    title: "Cuánto cuesta no darle mantenimiento a tu montacargas",
    description:
      "Análisis del costo real de ignorar el mantenimiento preventivo de un montacargas: reparaciones correctivas, paros de producción, multas y accidentes. Por qué el mantenimiento siempre es más rentable.",
    date: "2024-11-20",
    image: "/images/mantenimiento-montacargas-teoloyucan.webp",
    blocks: [
      {
        t: "p",
        v: "No dar mantenimiento preventivo a un montacargas puede costar entre 3 y 10 veces más que el mantenimiento que se ignoró, contando solo la reparación correctiva. Si se suman los costos de paro de producción, daños a mercancía y posibles multas de la STPS, el impacto puede ser mucho mayor. El mantenimiento preventivo siempre es la inversión más rentable.",
      },
      {
        t: "h2",
        v: "La regla 1-5-30 del mantenimiento industrial",
      },
      {
        t: "p",
        v: "En ingeniería de mantenimiento existe una regla práctica ampliamente aceptada: si el mantenimiento preventivo cuesta 1, el mantenimiento correctivo (reparación) cuesta 5, y el paro de producción no planificado puede costar 30 veces más. Aunque los multiplicadores exactos varían, la dirección es siempre la misma: ignorar el mantenimiento preventivo es la decisión más cara a largo plazo.",
      },
      {
        t: "h2",
        v: "Los costos directos de no mantener",
      },
      {
        t: "ul",
        v: [
          "Reparación del convertidor de par: evitable con cambios de aceite de transmisión en tiempo. Sin mantenimiento, la falla es más probable y más costosa.",
          "Reconstrucción de motor: las fallas de motor por aceite degradado son costosas y toman días de taller.",
          "Fallo de bomba hidráulica: el desgaste prematuro es consecuencia directa de no cambiar el aceite hidráulico y el filtro.",
          "Sustitución de cadenas de mástil: las cadenas no lubricadas se alargan y fallan; el riesgo de accidente es alto.",
          "Reemplazo de llantas: el desgaste irregular por desalineación (evitable con revisión periódica) acelera el desgaste.",
        ],
      },
      {
        t: "h2",
        v: "Los costos ocultos (que casi nadie calcula)",
      },
      {
        t: "ul",
        v: [
          "Paro de producción: cada hora que tu montacargas está parado tiene un costo en productividad, pedidos retrasados y horas extra del personal.",
          "Daños a mercancía o instalaciones: un mástil que falla bajo carga puede tirar una estantería completa.",
          "Accidentes laborales: las consecuencias económicas, legales y humanas de un accidente son incalculables.",
          "Multas STPS: si la STPS inspecciona y encuentra el equipo sin bitácora de mantenimiento, las multas pueden ser significativas.",
          "Pérdida de valor del equipo: un montacargas sin mantenimiento pierde valor de reventa drásticamente.",
        ],
      },
      {
        t: "table",
        caption: "Preventivo vs. correctivo: comparativa de costos aproximados",
        headers: ["Tipo de acción", "¿Cuándo ocurre?", "Costo relativo", "Paro de producción"],
        rows: [
          ["Cambio de aceite + filtros", "Programado (cada 250 h)", "1x (referencia)", "No"],
          ["Revisión de frenos y cadenas", "Programada", "1x", "No"],
          ["Reparación de fuga hidráulica menor", "Correctivo temprano", "2–3x", "Mínimo (horas)"],
          ["Fallo de bomba hidráulica", "Correctivo tardío", "5–8x", "1–3 días"],
          ["Reconstrucción de motor", "Correctivo por negligencia", "10–15x", "1–2 semanas"],
          ["Accidente por fallo de cadenas", "Consecuencia extrema", "Incalculable", "Indefinido"],
        ],
      },
      {
        t: "h2",
        v: "Un ejemplo práctico",
      },
      {
        t: "p",
        v: "Imagina un montacargas Toyota 8FGU25 en operación de 8 horas diarias. Una póliza de mantenimiento preventivo cubre cambios de aceite, filtros, ajuste de carburación, revisión de frenos, dirección y mástil cada 250 horas. Sin esa póliza, es común que después de 1,000 horas la transmisión empiece a resbalar por aceite degradado, y a las 1,500 horas falle el convertidor. La reparación del convertidor más el tiempo de paro puede representar fácilmente 8 veces el costo de las 6 pólizas que se ignoraron.",
      },
      {
        t: "h2",
        v: "Qué incluye una póliza de mantenimiento preventivo",
      },
      {
        t: "ul",
        v: [
          "Cambio de aceite de motor, filtro de aceite y filtro de aire.",
          "Revisión y ajuste de carburación para gas LP (en modelos a combustión).",
          "Revisión de frenos de servicio y estacionamiento.",
          "Revisión de dirección hidráulica: fugas, juego, respuesta.",
          "Revisión de mástil: cadenas, rodamientos, cilindros, juego lateral.",
          "Revisión de horquillas: desgaste, fisuras.",
          "Revisión de llantas: desgaste, presión (neumáticas).",
          "Bitácora y reporte técnico por equipo con cada servicio.",
        ],
      },
    ],
    faqs: [
      { q: "¿Cuánto cuesta el mantenimiento preventivo de un montacargas?", a: "El costo depende de la marca, el modelo, la capacidad y los insumos (aceites, filtros, refacciones). Contáctanos para una cotización de póliza: generalmente es una fracción del costo de cualquier reparación correctiva." },
      { q: "¿Qué fallas causa no cambiar el aceite a tiempo?", a: "El aceite degradado pierde sus propiedades lubricantes y refrigerantes. En el motor provoca desgaste acelerado de pistones, cojinetes y árbol de levas. En la transmisión causa deterioro de los clutches internos y del convertidor de par." },
      { q: "¿Qué es más caro: reparar o mantener?", a: "Siempre es más caro reparar. El mantenimiento preventivo cuesta entre 3 y 10 veces menos que las reparaciones que evita, sin contar el paro de producción." },
      { q: "¿Con qué frecuencia hay que dar mantenimiento a un montacargas?", a: "La regla general es cada 250 horas de uso o cada 2 meses, lo que ocurra primero. En operaciones intensivas (2 turnos), puede ser cada mes. Te ayudamos a definir el plan según el uso real de tu equipo." },
    ],
  },
];
