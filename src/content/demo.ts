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

/** ID del video de Loom. Sacar de la URL: loom.com/share/<ESTE_ID> */
export const LOOM_VIDEO_ID = '245f6a6353a240d08d4420581a380a17'

/**
 * ⚠️ El hero no define el texto del botón: todos los CTA de la página son el
 * mismo componente (CtaPair) y llevan al checkout. Tenía aquí un `cta` y un
 * `ctaSub` de cuando se agendaba por Calendly, que ya no renderizaba nadie.
 */
export const hero = {
  eyebrow: 'Para infoproductores que quieren centralizar su negocio',
  headline: 'Toda la operación de tu negocio en un solo lugar, auditada por IA',
  subheadline:
    'En este video te muestro cómo funciona por dentro y cómo deja de escapársete el dinero que ya vendiste.',
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
  'Cuotas',
  'Comisiones',
  'Embudos',
  'Agendas',
  'Entrega de servicio',
  'Calendario',
  'Métricas',
  'Reportes',
  'Recordatorios',
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
  title: '¿SellNode es para tu negocio?',
  subtitle: 'Si te pasa alguna de estas seis cosas, sí.',
  cards: [
    {
      icon: 'puzzle' as PainIcon,
      title: 'Tu operación está partida',
      desc: 'El CRM por un lado, la entrega del servicio en otro, las comisiones en Excel.',
    },
    {
      icon: 'users' as PainIcon,
      title: 'No sabes quién falla',
      desc: 'Tienes closers, pero no en qué parte de la llamada pierden la venta.',
    },
    {
      icon: 'headphones' as PainIcon,
      title: 'Nadie escucha las llamadas',
      desc: 'Se acumulan cientos de grabaciones al mes y no las abre nadie.',
    },
    {
      icon: 'calculator' as PainIcon,
      title: 'Comisiones a mano',
      desc: 'Cada mes, la misma discusión sobre quién cobra qué.',
    },
    {
      icon: 'radar' as PainIcon,
      title: 'No sabes la atribución real del lead',
      desc: 'Ni dónde está el cuello de botella de la operación. Inviertes sin saber qué canal te trae clientes rentables.',
    },
    {
      icon: 'trending' as PainIcon,
      title: 'Dependes de la memoria',
      desc: 'Lo que sabe cada vendedor se va con él cuando renuncia.',
    },
  ],
}

export const includes = {
  title: 'Qué incluye',
  subtitle: 'No es una licencia de software. Es la plataforma más la implementación.',
  items: [
    {
      title: 'CRM, ventas y cartera',
      desc: 'Pipeline comercial, ventas adicionales, cuotas, renovaciones y reservas. Recordatorios de cobro automáticos para que no se te quede plata en la calle.',
    },
    {
      title: 'Audita el 100% de las llamadas de tu equipo',
      desc: 'Score conductual de 0 a 100 en 7 dimensiones, mapa de la llamada con timestamps, el error más costoso y plan de mejora por closer. Todas, todos los días.',
    },
    {
      title: 'Inteligencia del cliente',
      desc: 'El perfil psicológico de tu avatar: dolores, objeciones, aspiraciones y señales de cierre extraídas automáticamente de cada conversación.',
    },
    {
      title: 'Centralización de funnels',
      desc: 'Conecta tus diferentes canales de venta y trackéalos todos en el mismo tablero. Sabes qué embudo trae clientes rentables y cuál no.',
    },
    {
      title: 'Entrega de servicio',
      desc: 'Programas reutilizables, alumnos con checklist y progreso, sesiones y calendario del mentor, encuestas por sesión y reporting de la entrega.',
    },
    {
      title: 'Calend-Fy',
      desc: 'Tu propia página de agendamiento con la marca de tu organización: tipos de evento, reglas de reparto entre el equipo y disponibilidad por persona.',
    },
    {
      title: 'Comisiones y liquidaciones',
      desc: 'Cálculo automático por closer y setter, liquidaciones parciales y PDF descargable. Se acaban las discusiones.',
    },
    {
      title: 'Analítica, atribución e informes',
      desc: 'Atribución por funnel con inversión prorrateada, revenue, cash collected, tasa de cierre, CAC y ROI. Información en línea, no el reporte de la semana pasada.',
    },
    {
      title: 'Implementación en 7 días',
      desc: 'Configuramos tu organización, roles, ofertas, embudos y permisos, y entrenamos a tu equipo para que opere sin ti encima.',
    },
  ],
}

/**
 * Banner de integraciones que cruza la página debajo del video.
 *
 * Los logos se resuelven por nombre en src/components/brandLogoMaps.ts:
 * agregar una marca aquí sin logo allá la deja sin icono.
 *
 * ⚠️ Calendly aparece aquí Y tachado en las tarjetas de reemplazo. No es
 * contradicción: Calend-Fy reemplaza la suscripción, pero importa los datos
 * desde Calendly para que nadie pierda su historial al migrar.
 */
export const integrations = [
  'Calendly',
  'Hotmart',
  'Skool',
  'Whop',
  'Fathom',
  'Google Calendar',
  'Google Meet',
  'WhatsApp',
]

/** Claves de icono de las tarjetas de reemplazo. Se mapean a lucide-react en Demo.tsx */
export type ReplaceIcon =
  'calendar' | 'kanban' | 'calculator' | 'graduation' | 'audio' | 'wallet' | 'chart'

export const centralize = {
  title: 'Reemplaza y centraliza lo que ya usas',
  subtitle:
    'Hoy ese negocio se maneja con cinco o seis herramientas que no se hablan entre sí. SellNode se queda con el trabajo de todas.',
  /** Etiqueta que une las dos mitades de cada tarjeta. */
  insteadOf: 'En lugar de',
  /** Mapeo uno a uno del brief de negocio. Cada fila es una herramienta que el cliente deja de pagar. */
  rows: [
    {
      icon: 'calendar' as ReplaceIcon,
      inside: 'Calend-Fy',
      outside: 'Calendly o similar para agendar llamadas',
    },
    {
      icon: 'kanban' as ReplaceIcon,
      inside: 'CRM + Ventas',
      outside: 'Un CRM genérico para el pipeline comercial',
    },
    {
      icon: 'calculator' as ReplaceIcon,
      inside: 'Comisiones',
      outside: 'Hojas de cálculo de comisiones y liquidaciones',
    },
    {
      icon: 'graduation' as ReplaceIcon,
      inside: 'Entrega de Servicio',
      outside: 'Notion o un tablero suelto para la entrega del programa',
    },
    {
      icon: 'audio' as ReplaceIcon,
      inside: 'Auditorías + Inteligencia',
      outside: 'Una herramienta de grabación y auditoría de llamadas',
    },
    {
      icon: 'wallet' as ReplaceIcon,
      inside: 'Finanzas',
      outside: 'Hojas de gastos, nómina y caja del negocio',
    },
    {
      icon: 'chart' as ReplaceIcon,
      inside: 'Analítica + Informes',
      outside: 'Dashboards armados a mano cada semana',
    },
  ],
  /**
   * Calendly volvió: el booking nativo (Calend-Fy) solo viene en el plan Pro,
   * así que quien toma Standard sigue agendando con Calendly y se integra.
   */
  connects: {
    title: 'Se conecta con',
    items: ['Google Calendar', 'Google Meet', 'Calendly'],
  },
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
    'Los dos incluyen implementación acompañada y tu primer mes. La mensualidad empieza el segundo mes.',
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
      tagline: 'Todo Standard, más los módulos que reemplazan tus herramientas externas.',
      highlight: true,
      badge: 'Recomendado',
      featured: {
        title: 'Booking nativo incluido',
        desc: 'Tu propia página de agendamiento, pensada para setters y closers. Te ahorras Calendly.',
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
 * ⚠️ Sólo hay una tarjeta. El contrapeso de Sell-Fy es el bloque de precio
 * que va justo debajo ($500 de setup + $297/mes), no una segunda tarjeta.
 */
export const costComparison = {
  title: 'Calcula lo que te cuesta no tenerlo',
  subtitle:
    'No es sólo el sueldo de alguien que escuche las llamadas. Son las horas que se van ordenando información regada, las decisiones que tomas por memoria porque la data no está, y las cinco o seis suscripciones que ya pagas por separado.',
  human: {
    label: 'Seguir como estás',
    amount: '$800 – $1.500',
    /** Corto a propósito: un period largo parte la cifra en dos líneas. El matiz
     *  de que es sólo el sueldo va en el subtítulo y en el primer ítem. */
    period: '/mes',
    items: [
      'Y eso es sólo el sueldo de quien audita',
      'Escucha 20 o 30 llamadas al mes, no 300',
      'Cinco o seis suscripciones que pagas aparte',
      'Horas cada semana armando reportes a mano',
      'Decisiones por memoria, porque la data no está cruzada',
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
    'Empiezas hoy y nosotros configuramos tu organización, roles, ofertas, embudos y permisos. En 7 días tu equipo está operando adentro.',
}
