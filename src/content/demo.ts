/**
 * Contenido de la landing de embudo (/demo).
 *
 * Página de conversión: sin navegación, un solo objetivo — agendar.
 * Todo el copy vive aquí para poder iterarlo sin tocar el diseño.
 *
 * ⚠️ Las secciones de testimonios, métricas y garantía sólo se renderizan
 * si tienen datos. Se quedan vacías a propósito: no publicamos prueba
 * social inventada. Llénalas con datos reales cuando los tengas.
 */

/** ID del video de Loom. Sacar de la URL: loom.com/share/<ESTE_ID> */
export const LOOM_VIDEO_ID = ''

export const hero = {
  eyebrow: 'Para agencias y equipos de ventas high-ticket',
  headline: 'Mira cómo tu equipo pasa de vender por intuición a vender desde la data',
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
  subtitle:
    'Sell-Fy trabaja para equipos que ya están vendiendo por llamada y necesitan dejar de operar con la información partida en pedazos.',
  cards: [
    {
      icon: 'puzzle' as PainIcon,
      title: 'Tu operación vive en cinco herramientas distintas',
      desc: 'Pagas Calendly, pagas un CRM, las comisiones van en Excel y lo importante quedó escrito en un grupo de WhatsApp.',
    },
    {
      icon: 'users' as PainIcon,
      title: 'No sabes con certeza quién está fallando',
      desc: 'Tienes closers y setters, pero no puedes señalar quién falla ni en qué parte exacta de la llamada.',
    },
    {
      icon: 'headphones' as PainIcon,
      title: 'Las grabaciones se acumulan sin que nadie las abra',
      desc: 'Vendes high-ticket por llamada, y escuchar 300 grabaciones al mes no lo hace nadie.',
    },
    {
      icon: 'calculator' as PainIcon,
      title: 'Las comisiones se calculan a mano',
      desc: 'Cuotas, cobros y liquidaciones en hojas de cálculo, con discusiones cada mes sobre quién cobra qué.',
    },
    {
      icon: 'radar' as PainIcon,
      title: 'No sabes de dónde viene cada venta',
      desc: 'No puedes decir con números qué embudo te trae clientes rentables y cuál te está quemando el presupuesto.',
    },
    {
      icon: 'trending' as PainIcon,
      title: 'Quieres operar con control, no con memoria',
      desc: 'Tu negocio ya factura lo suficiente para dejar de depender de lo que cada persona recuerde.',
    },
  ],
  /** Cierre tipo gancho. Los segmentos con accent van resaltados. */
  closing: [
    { text: 'Si hoy pagas Calendly, un CRM aparte y encima llevas las comisiones en Excel, ' },
    { text: 'ya estás gastando más de $150 al mes', accent: true },
    { text: ' en tener tu operación partida en pedazos.' },
  ] as { text: string; accent?: boolean }[],
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

export const integrations = {
  title: 'Se conecta con lo que ya usas',
  items: [
    'Google Calendar',
    'Google Meet',
    'Calendly',
    'GoHighLevel',
    'Meta / Instagram',
    'Stripe',
    'WhatsApp',
    'Email',
  ],
}

export const pricing = {
  title: 'Precio',
  amount: '$150',
  period: 'USD / mes',
  note: 'Usuarios ilimitados. Sin costo de setup. Sin permanencia.',
  roi: {
    title: '¿Caro? Calcula lo que te cuesta no tenerlo',
    rows: [
      {
        label: 'Un solo closer que pasa de 2K a 7K al mes',
        value: '+$5.000 / mes',
        positive: true,
      },
      {
        label: 'Contratar a alguien que escuche y analice las llamadas',
        value: '$800 – $1.500 / mes',
        positive: false,
      },
      {
        label: 'Una cuota de $2.000 que se vence sin que nadie la vea',
        value: '−$2.000',
        positive: false,
      },
      {
        label: 'Sell-Fy completo, con implementación',
        value: '$150 / mes',
        positive: true,
      },
    ],
    closing:
      'Con que Sell-Fy te salve una sola cuota vencida al mes, ya se pagó solo el año entero.',
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

export const faq = [
  {
    q: '¿Necesito grabar las llamadas para que funcione?',
    a: 'Para las auditorías con IA, sí. Sell-Fy se integra con Google Meet y toma la transcripción automáticamente, o puedes subir la grabación a mano. El resto de la plataforma —ventas, cobros, comisiones, agendas— funciona sin grabaciones.',
  },
  {
    q: '¿Cuánto tarda la implementación?',
    a: 'Configuramos tu organización, roles, ofertas, embudos y permisos en 24 horas. Tu equipo empieza a operar el día 1, no en tres semanas.',
  },
  {
    q: '¿Hay límite de usuarios?',
    a: 'No. Closers, setters, managers y auditores ilimitados dentro del mismo precio. No te cobramos por crecer el equipo.',
  },
  {
    q: '¿Qué pasa con la información de mis clientes?',
    a: 'Los datos comerciales son propiedad exclusiva de tu organización. Están aislados por Row Level Security, y no se usan para entrenar modelos de IA externos. Si te vas, tienes 30 días para exportar todo.',
  },
  {
    q: '¿Se integra con mi calendario y mis herramientas actuales?',
    a: 'Sí. Google Calendar con sincronización bidireccional, Google Meet, Calendly, GoHighLevel, Meta, Stripe, y notificaciones por WhatsApp y email.',
  },
  {
    q: '¿Cada closer ve la información de los demás?',
    a: 'No. Los permisos son por rol y por ruta. Un closer ve sus propias ventas y sus propias comisiones. El owner y el admin ven todo.',
  },
  {
    q: '¿Necesito saber de tecnología para usarlo?',
    a: 'No. Nosotros hacemos la configuración inicial completa y te acompañamos. La plataforma está pensada para que la use un equipo comercial, no un equipo técnico.',
  },
]

export const finalCta = {
  title: 'Agenda 30 minutos y te lo muestro con tus números',
  subtitle:
    'No es una llamada de ventas con presentación genérica. Miramos tu operación, te muestro la plataforma por dentro y decides.',
  cta: 'Agendar una demo',
}
