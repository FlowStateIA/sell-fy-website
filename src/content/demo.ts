/**
 * Contenido de la landing de embudo (/demo).
 *
 * Página de conversión: sin navegación, un solo objetivo — agendar.
 * Todo el copy vive aquí para poder iterarlo sin tocar el diseño.
 *
 * Público: infoproductores high ticket que venden por llamada.
 *
 * ⚠️ Las secciones de testimonios, métricas y garantía sólo se renderizan
 * si tienen datos. Se quedan vacías a propósito: no publicamos prueba
 * social inventada. Llénalas con datos reales cuando los tengas.
 */

/** ID del video de Loom. Sacar de la URL: loom.com/share/<ESTE_ID> */
export const LOOM_VIDEO_ID = ''

export const hero = {
  eyebrow: 'Para infoproductores que venden high ticket por llamada',
  headline: 'Centraliza tu operación y deja de adivinar por qué tu equipo no cierra',
  subheadline:
    'En este video te muestro la plataforma por dentro: cómo audita cada llamada, qué te dice de tus closers y cómo deja de escapársete el dinero que ya vendiste.',
  cta: 'Agendar una demo',
  ctaSub: '30 minutos · Sin compromiso',
}

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

export const beforeAfter = {
  title: 'La diferencia no es tener más leads. Es saber qué pasa con los que ya tienes.',
  before: {
    title: 'Sin Sell-Fy',
    items: [
      'Nadie escucha las llamadas: 300 grabaciones al mes es humanamente imposible',
      'El closer que va mal se detecta cuando ya perdiste el trimestre',
      'Las comisiones se calculan a mano y generan fricción con el equipo',
      'Las cuotas vencidas se descubren tarde, cuando el cliente ya se enfrió',
      'No sabes qué embudo te trae clientes rentables y cuál te quema presupuesto',
      'La información del cliente vive en la cabeza del vendedor que se va',
    ],
  },
  after: {
    title: 'Con Sell-Fy',
    items: [
      'Cada llamada se audita sola: score de 0 a 100 en 7 dimensiones',
      'Sabes esta semana qué closer necesita entrenamiento y exactamente en qué',
      'Las comisiones se calculan y liquidan solas, con PDF para cada persona',
      'Alertas automáticas por WhatsApp y email antes de que una cuota se venza',
      'CAC y ROI reales por embudo, con la inversión publicitaria prorrateada',
      'Dolores, objeciones y aspiraciones de tus clientes quedan en el sistema, no en una persona',
    ],
  },
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
    'La mayoría opera con cinco herramientas que no se hablan entre sí. Sell-Fy se queda con el trabajo de todas.',
  replaces: {
    title: 'Deja de usar',
    items: [
      'Tu CRM',
      'Las hojas de comisiones',
      'El control de cobros en Excel',
      'La información suelta en grupos de WhatsApp',
      'Los reportes que alguien arma a mano cada semana',
    ],
  },
  connects: {
    title: 'Se conecta con',
    items: ['Google Calendar', 'Google Meet', 'Calendly'],
  },
}

export const pricing = {
  title: 'Precio',
  amount: '$150',
  period: 'USD / mes',
  note: 'Usuarios ilimitados. Sin costo de setup. Sin permanencia.',
}

/** Comparativa de costo de oportunidad. */
export const costComparison = {
  title: '¿Caro? Calcula lo que te cuesta no tenerlo',
  subtitle:
    'Contratar a alguien que escuche las llamadas de tu equipo y lleve el control cuesta entre $800 y $1.500 USD al mes. Sell-Fy cuesta $150 y audita el 100% de las llamadas, todos los días.',
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
    amount: '$150',
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
