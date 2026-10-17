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

/** ID del video de Loom. Sacar de la URL: loom.com/share/<ESTE_ID> */
export const LOOM_VIDEO_ID = '245f6a6353a240d08d4420581a380a17'

export const hero = {
  eyebrow: 'Para infoproductores que quieren centralizar su negocio',
  headline: 'Toda la operación de tu negocio en un solo lugar, auditada por IA',
  subheadline:
    'En este video te muestro cómo funciona por dentro y cómo deja de escapársete el dinero que ya vendiste.',
  cta: 'Agendar una demo',
  ctaSub: '30 minutos · Sin compromiso',
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
export type PainIcon =
  | 'puzzle'
  | 'users'
  | 'headphones'
  | 'calculator'
  | 'radar'
  | 'trending'

export const forWho = {
  title: '¿Sell-Fy es para tu negocio?',
  subtitle: 'Si te pasa alguna de estas seis cosas, sí.',
  cards: [
    {
      icon: 'puzzle' as PainIcon,
      title: 'Tu operación está partida',
      desc: 'Calendly por un lado, el CRM por otro, las comisiones en Excel.',
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
      title: 'No sabes qué embudo funciona',
      desc: 'No puedes decir con números cuál te trae clientes rentables.',
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
      title: 'Auditoría de llamadas con IA',
      desc: 'Score conductual de 0 a 100 en 7 dimensiones, mapa de la llamada con timestamps, identificación del error más costoso y plan de mejora por closer.',
    },
    {
      title: 'Inteligencia de tus clientes',
      desc: 'Dolores, objeciones, aspiraciones y señales de cierre extraídas automáticamente de cada conversación. El cerebro de tu avatar, construido solo.',
    },
    {
      title: 'Ventas, cobros y cartera',
      desc: 'Cuotas, renovaciones, reservas y upsells trackeados. Alertas de vencimiento automáticas. Sabes de dónde viene cada dólar.',
    },
    {
      title: 'Comisiones y liquidaciones',
      desc: 'Cálculo automático por closer y setter, liquidaciones parciales y PDF descargable. Se acaban las discusiones.',
    },
    {
      title: 'Analítica real',
      desc: 'Revenue, cash collected, tasa de cierre, CAC y ROI por embudo con inversión prorrateada por día.',
    },
    {
      title: 'Implementación en 24h',
      desc: 'Configuramos tu organización, roles, ofertas, embudos y permisos. Tu equipo opera desde el día 1.',
    },
  ],
}

/**
 * Centralización. El mensaje es "deja de tener todo repartido".
 *
 * ⚠️ Calendly está en "se conecta" y NO en "reemplaza" a propósito:
 * Sell-Fy todavía no tiene generador de eventos propio (no hay página
 * pública de reserva, ni tipos de evento, ni reglas de horario). Moverlo
 * a "reemplaza" sería prometer algo que se cae en la demo. Cuando exista
 * el módulo de agendamiento propio, se mueve.
 */
export const centralize = {
  title: 'Reemplaza y centraliza lo que ya usas',
  subtitle:
    'Hoy ese negocio se maneja con cinco o seis herramientas que no se hablan entre sí. Sell-Fy se queda con el trabajo de todas.',
  columns: {
    outside: 'Lo que usas hoy por fuera',
    inside: 'Lo que lo reemplaza en Sell-Fy',
  },
  /** Mapeo uno a uno del brief de negocio. Cada fila es una herramienta que el cliente deja de pagar. */
  rows: [
    { outside: 'Calendly o similar para agendar llamadas', inside: 'Calenfy' },
    { outside: 'CRM genérico para el pipeline comercial', inside: 'CRM + Ventas' },
    { outside: 'Hoja de cálculo de comisiones y liquidaciones', inside: 'Comisiones' },
    {
      outside: 'Notion o un tablero suelto para la entrega del programa',
      inside: 'Entrega de Servicio',
    },
    {
      outside: 'Herramienta de grabación y auditoría de llamadas',
      inside: 'Auditorías + Inteligencia',
    },
    { outside: 'Hoja de gastos, nómina y caja del negocio', inside: 'Finanzas' },
    { outside: 'Dashboards armados a mano cada semana', inside: 'Analítica + Informes' },
  ],
  /**
   * ⚠️ Calendly salió de aquí: con Calenfy incluido en el plan de lanzamiento
   * pasó a la columna de "lo que reemplaza". Seguir mostrándolo como
   * integración al lado de la fila que lo reemplaza se contradice solo.
   */
  connects: {
    title: 'Se conecta con',
    items: ['Google Calendar', 'Google Meet'],
  },
}

/**
 * Precio del Plan de lanzamiento ($297 + $500 de setup), que es el foco
 * comercial según el brief de octubre 2026.
 *
 * ⚠️ El plan de $150 ya no se publica: el lanzamiento corrige el precio y
 * suma Finanzas, Calenfy y Entrega de Servicio, que son justamente los tres
 * módulos que más herramientas sueltas reemplazan. Los clientes que hoy
 * pagan $150 son una decisión aparte (respetar precio o migrar), no un plan
 * de esta página.
 *
 * ⚠️ El Plan completo ($497) se muestra como destino del upsell, SIN botón
 * de compra: todavía dependen de él las ocho piezas que faltan. Venderlo
 * hoy sería cobrar por algo que no existe.
 */
export const pricing = {
  title: 'Precio',
  /** Pago inicial único: implementación + primer mes de membresía incluido. */
  setup: {
    label: 'Setup inicial',
    unit: 'USD',
    amount: '$500',
    period: 'pago único',
    note: 'Incluye la implementación completa + tu primer mes de membresía.',
    items: [] as string[],
  },
  /** Suscripción recurrente a partir del segundo mes. Lleva los beneficios del producto. */
  recurring: {
    label: 'Mensualidad',
    unit: 'USD',
    amount: '$297',
    period: '/ mes',
    note: 'A partir del segundo mes. Usuarios ilimitados.',
    items: [
      'CRM, Ventas, Comisiones y Cobros',
      'Auditoría de llamadas con IA e Inteligencia',
      'Finanzas: caja, gastos, nómina y recurrencia',
      'Calenfy: tu propia página de agendamiento',
      'Entrega de Servicio: programas, alumnos y mentorías',
    ] as string[],
  },
  note: 'Usuarios ilimitados. Sin permanencia.',
}

/**
 * Siguiente escalón. Se muestra como ancla y destino del upsell, nunca como
 * algo comprable hoy. `available: false` apaga cualquier CTA.
 */
export const nextTier = {
  label: 'Plan completo',
  badge: 'Próximamente',
  available: false,
  unit: 'USD',
  amount: '$497',
  period: '/ mes',
  note: 'Se habilita cuando cierren los módulos que faltan. Es el upgrade natural del plan de lanzamiento, no un plan paralelo.',
  items: [
    'Todo lo del plan de lanzamiento',
    'Instagram, Meta y métricas de campaña',
    'WooCommerce y BCL',
    'Chat de setters y módulo de lanzamientos',
  ] as string[],
}

/** Comparativa de costo de oportunidad. */
export const costComparison = {
  title: '¿Caro? Calcula lo que te cuesta no tenerlo',
  subtitle:
    'Contratar a alguien que escuche las llamadas de tu equipo y lleve el control cuesta entre $800 y $1.500 USD al mes. Sell-Fy cuesta $297, audita el 100% de las llamadas y además te reemplaza el CRM, el agendador, la hoja de comisiones y la de finanzas.',
  human: {
    label: 'Contratar a alguien',
    amount: '$800 – $1.500',
    period: '/mes',
    items: [
      'Escucha 20 o 30 llamadas al mes, no 300',
      'Vacaciones, incapacidades y rotación',
      'Meses de curva de aprendizaje',
      'Criterio distinto en cada auditoría',
    ],
  },
  product: {
    label: 'Sell-Fy',
    amount: '$297',
    period: '/mes',
    items: [
      'Audita el 100% de las llamadas',
      'El mismo criterio en las 300',
      'Operando en 24 horas',
      'Crece con tu equipo sin contratar a nadie más',
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

export const finalCta = {
  title: 'Agenda 30 minutos y te lo muestro con tus números',
  subtitle:
    'No es una llamada de ventas con presentación genérica. Miramos tu operación, te muestro la plataforma por dentro y decides.',
  cta: 'Agendar una demo',
}
