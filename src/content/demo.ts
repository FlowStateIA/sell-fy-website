/**
 * Contenido de la landing de embudo (/demo).
 *
 * Página de conversión: sin navegación, un solo objetivo — agendar.
 * Todo el copy vive aquí para poder iterarlo sin tocar el diseño.
 *
 * Público: infoproductores que quieren centralizar su negocio.
 *
 * ⚠️ Las secciones de testimonios, métricas y garantía sólo se renderizan
 * si tienen datos. Se quedan vacías a propósito: no publicamos prueba
 * social inventada. Llénalas con datos reales cuando los tengas.
 */

import { PLANS, type Plan } from './site'

/** Reexportado para no romper los imports que ya apuntaban a este archivo. */
export { insteadOfLabel, replaceRows, connectsWith, integrations, type ReplaceIcon } from './shared'

/** ID del video de Loom. Sacar de la URL: loom.com/share/<ESTE_ID> */
export const LOOM_VIDEO_ID = '245f6a6353a240d08d4420581a380a17'

/**
 * ⚠️ El hero no define el texto del botón: todos los CTA de la página son el
 * mismo componente (CtaPair) y llevan al checkout. Tenía aquí un `cta` y un
 * `ctaSub` de cuando se agendaba por Calendly, que ya no renderizaba nadie.
 */
export const hero = {
  eyebrow: 'Para equipos que venden por llamada',
  headline: 'Centraliza tu operación High Ticket en un solo lugar',
  subheadline:
    'Mira cómo funciona por dentro y escala tu negocio desde la data real.',
}

/**
 * Las áreas que cubre la plataforma. Es lo que le da sustento al "toda la
 * operación" del titular.
 *
 * ⚠️ Van como chips, no dentro del subtítulo: doce palabras en texto corrido
 * son un muro que empuja el video fuera del primer pantallazo. Como chips se
 * leen de un vistazo y ocupan dos líneas.
 */
export const covers = [
  'Ventas',
  'Cobros',
  'Comisiones',
  'Agendas',
  'Auditoría de llamadas',
  'Entrega de servicio',
  'Analítica',
]

/**
 * Métricas de validación. Vacío = la sección no se muestra.
 * Sólo números reales y verificables.
 */
export const metrics: { value: string; label: string }[] = []

/** Claves de icono válidas. Se mapean a lucide-react en Demo.tsx */
export type PainIcon = 'puzzle' | 'users' | 'headphones' | 'calculator' | 'radar' | 'trending'

export const forWho = {
  title: '¿Es para tu negocio?',
  subtitle: 'Si te pasa algo de esto, sí.',
  cards: [
    {
      icon: 'puzzle' as PainIcon,
      title: 'Tu operación está partida',
      desc: 'El CRM por un lado, la entrega en otro y las comisiones en Excel.',
    },
    {
      icon: 'users' as PainIcon,
      title: 'No sabes quién falla',
      desc: 'No ves en qué parte de la llamada pierde la venta cada closer.',
    },
    {
      icon: 'headphones' as PainIcon,
      title: 'Nadie escucha las llamadas',
      desc: 'Cientos de grabaciones al mes que no abre nadie.',
    },
    {
      icon: 'calculator' as PainIcon,
      title: 'Comisiones a mano',
      desc: 'Cada mes, la misma discusión sobre quién cobra qué.',
    },
    {
      icon: 'radar' as PainIcon,
      title: 'No sabes de dónde viene cada venta',
      desc: 'Inviertes sin saber qué embudo trae clientes que pagan.',
    },
    {
      icon: 'trending' as PainIcon,
      title: 'Dependes de la memoria',
      desc: 'Lo que sabe cada vendedor se va cuando él se va.',
    },
  ],
}

export const includes = {
  title: 'Qué incluye',
  subtitle: 'La plataforma y la implementación, juntas.',
  items: [
    {
      title: 'CRM, ventas y cartera',
      desc: 'Pipeline, cuotas, renovaciones y reservas, con recordatorios de cobro automáticos.',
    },
    {
      title: 'Auditoría de llamadas',
      desc: 'Score de 0 a 100 por fase, mapa con tiempos, el momento de riesgo y plan de mejora por closer.',
    },
    {
      title: 'Inteligencia de clientes',
      desc: 'Los dolores, objeciones y aspiraciones que tus clientes dicen en cada llamada, por oferta.',
    },
    {
      title: 'Embudos en un tablero',
      desc: 'Conecta tus canales de venta y ve qué embudo trae clientes que pagan y cuál no.',
    },
    {
      title: 'Entrega de servicio',
      desc: 'Programas, alumnos con progreso, sesiones y encuestas, en el mismo sistema.',
    },
    {
      title: 'Calend-Fy',
      desc: 'Tu página de agendamiento con tu marca, con reparto entre el equipo y disponibilidad por persona.',
    },
    {
      title: 'Comisiones y liquidaciones',
      desc: 'Cálculo automático por closer y setter, liquidaciones parciales y PDF.',
    },
    {
      title: 'Analítica e informes',
      desc: 'Vendido, cobrado, tasa de cierre y retorno por embudo, siempre al día.',
    },
    {
      title: 'Implementación en 7 días',
      desc: 'Configuramos tu organización, roles, ofertas y embudos, y entrenamos a tu equipo.',
    },
  ],
}

/**
 * Reemplaza y centraliza. Las filas y los logos conectados viven en
 * `shared.ts`, porque la home muestra el mismo bloque: si cambia qué
 * herramienta absorbe cada módulo, cambia en los dos sitios a la vez.
 * Aquí quedan sólo los titulares, que son propios de esta página.
 */
export const centralize = {
  title: 'Reemplaza y centraliza lo que ya usas',
  subtitle:
    'Hoy lo manejas con cinco o seis herramientas que no se hablan. SellNode hace el trabajo de todas.',
}

/**
 * Dos planes. La implementación incluye el primer mes; la mensualidad empieza
 * el segundo mes. Cifras y checkouts salen de PLANS (site.ts).
 *
 * La diferencia de Pro son tres módulos que reemplazan herramientas externas.
 * El booking nativo va destacado aparte (`featured`): es el que más pesa en la
 * decisión, porque le ahorra al cliente Calendly.
 */
export type PricingPlan = Plan & {
  tagline: string
  highlight: boolean
  badge: string | null
  featured: { title: string; desc: string } | null
  items: string[]
}

export const pricing: {
  title: string
  subtitle: string
  setupLabel: string
  setupNote: string
  monthlyLabel: string
  plans: PricingPlan[]
  note: string
} = {
  title: 'Elige tu plan',
  subtitle:
    'Los dos incluyen la implementación y tu primer mes. La mensualidad empieza el segundo.',
  setupLabel: 'Implementación',
  setupNote: 'Pago inicial. Incluye tu primer mes.',
  monthlyLabel: 'Desde el segundo mes',
  plans: [
    {
      ...PLANS.standard,
      tagline: 'Ventas, cobros y equipo en un solo lugar.',
      highlight: false,
      badge: null,
      featured: null,
      items: [
        'CRM, Ventas, Comisiones y Cobros',
        'Auditoría de llamadas con IA e Inteligencia de clientes',
        'Agendas, Analítica e Informes',
        'Implementación en 7 días y soporte por WhatsApp',
      ],
    },
    {
      ...PLANS.pro,
      tagline: 'Todo Standard, más finanzas, entrega de servicio y agenda propia.',
      highlight: true,
      badge: 'Recomendado',
      featured: {
        title: 'Booking nativo incluido',
        desc: 'Tu página de agendamiento propia. Te ahorras Calendly.',
      },
      items: [
        'Todo lo del plan Standard',
        'Finanzas: caja, gastos, nómina y recurrencia',
        'Entrega de Servicio: programas, alumnos y mentorías',
      ],
    },
  ],
  note: 'Usuarios ilimitados. Sin permanencia.',
}

/**
 * Siguiente escalón. Se muestra como ancla y destino del upsell, nunca como
 * algo comprable hoy. `available: false` apaga cualquier CTA.
 *
 * ⚠️ `visible: false` lo saca de la página por ahora. El contenido se queda
 * aquí listo para encenderlo cuando cierren las ocho piezas que faltan.
 */
export const nextTier = {
  visible: false,
  label: 'Plan completo',
  badge: 'Próximamente',
  available: false,
  unit: 'USD',
  amount: '$497',
  period: '/ mes',
  note: 'Se habilita cuando cierren los módulos que faltan. Es el upgrade natural del plan Pro, no un plan paralelo.',
  items: [
    'Todo lo del plan Pro',
    'Instagram, Meta y métricas de campaña',
    'WooCommerce y BCL',
    'Chat de setters y módulo de lanzamientos',
  ] as string[],
}

/**
 * Costo de oportunidad. No compara sólo contra contratar a alguien: el costo
 * real de seguir igual es el sueldo, más las horas que se van ordenando
 * información, más las decisiones que se toman sin data, más las
 * suscripciones sueltas que ya se están pagando.
 *
 * ⚠️ Sólo hay una tarjeta. El contrapeso de SellNode es el bloque de precio
 * que va justo debajo ($500 de setup + $297/mes), no una segunda tarjeta.
 */
export const costComparison = {
  title: 'Lo que cuesta seguir como estás',
  subtitle:
    'No es solo el sueldo de quien escuche las llamadas: son las horas armando reportes, las decisiones por memoria y las herramientas sueltas que ya pagas.',
  human: {
    label: 'Seguir como estás',
    amount: '$800 – $1.500',
    /** Corto a propósito: un period largo parte la cifra en dos líneas. El matiz
     *  de que es sólo el sueldo va en el subtítulo y en el primer ítem. */
    period: '/mes',
    items: [
      'Solo el sueldo de quien audita',
      'Escucha 20 o 30 llamadas al mes, no todas',
      'Cinco o seis suscripciones aparte',
      'Horas a la semana armando reportes',
      'Decisiones por memoria, no por datos',
      'Vacaciones, incapacidades y rotación',
    ],
  },
}

/**
 * Testimonios reales. Vacío = la sección no se muestra.
 * Formato: { quote, name, role }
 */
export const testimonials: { quote: string; name: string; role: string }[] = []

/**
 * Garantía. null = la sección no se muestra.
 * Definir sólo si de verdad se va a honrar.
 */
export const guarantee: { title: string; body: string } | null = null

/**
 * ⚠️ El título tiene que hablar de empezar, no de agendar. El botón de esta
 * sección lleva al checkout, no a una llamada: decía "Agenda 30 minutos" y
 * cobraba $297 al hacer clic.
 */
export const finalCta = {
  title: 'Centraliza tu operación esta semana',
  subtitle:
    'Empiezas hoy y lo dejamos configurado. En 7 días tu equipo opera adentro.',
}
