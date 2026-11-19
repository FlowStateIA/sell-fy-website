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

import { PLAN } from './site'
import { method } from './home'

/** Reexportado para no romper los imports que ya apuntaban a este archivo. */
export { insteadOfLabel, replaceRows, connectsWith, integrations, type ReplaceIcon } from './shared'

/** ID del video de Loom. Sacar de la URL: loom.com/share/<ESTE_ID> */
export const LOOM_VIDEO_ID = '76fc9c04adf44ed6ae5bccc892cd8169'

/**
 * ⚠️ El hero no define el texto del botón: todos los CTA de la página son el
 * mismo (DemoCta) y llevan a agendar. La etiqueta (CTA_LABEL) vive en home.ts y
 * la línea del diagnóstico (ctaDiagnostic) en shared.ts.
 */
export const hero = {
  eyebrow: 'Para equipos que venden por llamada',
  headline: 'Centraliza tu operación High Ticket en un solo lugar',
  subheadline:
    'Mira cómo funciona por dentro y cómo trabajamos con tu equipo para que toda tu operación quede adentro.',
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
export type PainIcon = 'puzzle' | 'radar' | 'users' | 'brain' | 'graduation' | 'clock'

/**
 * Los seis dolores del genoma de marketing (sección «Dolores y problemas
 * principales»), en el mismo orden y con sus palabras. Los títulos nombran lo
 * que le pasa al dueño, no lo que hace mal: la guía pide no juzgar personas.
 *
 * ⚠️ Antes había tres tarjetas que no salían del genoma («no sabes quién falla»,
 * «nadie escucha las llamadas», «comisiones a mano»). Si quieres sumar un dolor,
 * primero tiene que estar en el genoma.
 */
export const forWho = {
  title: '¿Es para tu negocio?',
  subtitle: 'Si te pasa algo de esto, sí.',
  cards: [
    {
      icon: 'puzzle' as PainIcon,
      title: 'Tus datos están regados',
      desc: 'CRM, hojas y calendario: hay que abrir los tres para saber qué pasó.',
    },
    {
      icon: 'radar' as PainIcon,
      title: 'No sabes qué embudo te deja dinero',
      desc: 'Ni qué dupla de setter y closer rinde mejor.',
    },
    {
      icon: 'users' as PainIcon,
      title: 'Tu director comercial arma los reportes',
      desc: 'Consolida métricas, revisa llamadas y verifica comisiones en vez de dirigir al equipo.',
    },
    {
      icon: 'brain' as PainIcon,
      title: 'El proceso vive en la cabeza de alguien',
      desc: 'Si esa persona no está, nadie sabe cómo se hace, y cada vendedor nuevo lo aprende distinto.',
    },
    {
      icon: 'graduation' as PainIcon,
      title: 'La venta no llega a la entrega',
      desc: 'El equipo que entrega el programa no recibe lo que se vendió.',
    },
    {
      icon: 'clock' as PainIcon,
      title: 'Decides con datos de la semana pasada',
      desc: 'Los reportes llegan tarde, y las decisiones también.',
    },
  ],
  /** Cualificación: el genoma pide decir también para quién no es. */
  note: 'Pensado para equipos con closers y setters que venden por llamada agendada. Si estás empezando, todavía no es para ti.',
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
      desc: 'El perfil psicológico de cada cliente, armado desde sus llamadas: dolores, aspiraciones y objeciones, por oferta.',
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
      desc: 'Vendido, cobrado, tasa de cierre y retorno por embudo. Se actualizan en cuanto tu equipo registra.',
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
    'Hoy lo manejas con cinco o seis herramientas que no se hablan. SellNode es el CRM hecho por infoproductores, para infoproductores: no un CRM genérico adaptado, sino uno diseñado para tu modelo y para crecer sin sumar caos.',
}

/**
 * Cómo trabajamos contigo. Los tres pasos son los de la home (`method`): es el
 * mismo texto y vive allá; aquí sólo cambian el titular y el subtítulo.
 */
export const how = {
  title: 'Trabajamos de la mano con tu equipo',
  subtitle:
    'Nuestro equipo trabaja con el tuyo: entendemos tu operación, la configuramos contigo en 7 días y te acompañamos para que tengas todo al día.',
  steps: method.pillars,
}

/**
 * Un solo plan: la plataforma completa. La implementación incluye el primer mes;
 * la mensualidad empieza el segundo mes. Las cifras salen de PLAN (site.ts).
 *
 * El booking nativo va destacado aparte (`featured`): es lo que más pesa en la
 * decisión, porque le ahorra al cliente Calendly.
 */
export const pricing = {
  title: 'Un plan, con la implementación contigo',
  subtitle:
    'La plataforma completa y nuestro equipo trabajando con el tuyo para dejarla funcionando.',
  setupLabel: 'Implementación',
  setupNote: 'Pago inicial. Incluye tu primer mes.',
  monthlyLabel: 'Desde el segundo mes',
  plan: {
    ...PLAN,
    tagline: 'Ventas, cobros, equipo, finanzas y entrega del servicio en un solo lugar.',
    featured: {
      title: 'Booking nativo incluido',
      desc: 'Tu página de agendamiento propia. Te ahorras Calendly.',
    },
    items: [
      'CRM, ventas, comisiones y cobros',
      'Auditoría de llamadas con IA e inteligencia de clientes',
      'Agendas, analítica e informes',
      'Finanzas: caja, gastos, nómina y recurrencia',
      'Entrega de Servicio: programas, alumnos y mentorías',
      'Implementación en 7 días y soporte por WhatsApp',
    ],
  },
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
  note: 'Se habilita cuando cierren los módulos que faltan. Es el upgrade natural del plan actual, no un plan paralelo.',
  items: [
    'Todo lo del plan actual',
    'Instagram, Meta y métricas de campaña',
    'WooCommerce y BCL',
    'Chat de setters y módulo de lanzamientos',
  ] as string[],
}

/**
 * Lo que cuesta seguir como estás. No es una cifra: es la lista de lo que pasa
 * mientras la operación sigue repartida. Antes llevaba el sueldo de quien audita
 * y un rango en dólares sin fuente; salieron los dos (decisión del dueño,
 * 2026-11-18). Lo de las herramientas sueltas ya lo cubre la tabla de ahorro.
 */
export const costComparison = {
  title: 'Lo que cuesta seguir como estás',
  subtitle:
    'Lo caro no es una herramienta: es la falta de datos, las horas armando reportes y áreas que no se hablan entre sí.',
  human: {
    label: 'Seguir como estás',
    items: [
      'Las llamadas no se auditan',
      'Nadie extrae el perfil psicológico de tu cliente en cada llamada',
      'Tu equipo no trabaja en un solo ecosistema',
      'Horas a la semana armando reportes',
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
 * El botón de esta sección lleva a agendar, igual que todos los de la página, y
 * el título habla de la llamada, no de pagar: antes decía "Centraliza tu
 * operación esta semana" y el botón llevaba al checkout.
 */
export const finalCta = {
  title: 'Veamos cómo se adapta SellNode a tu operación',
  subtitle:
    'Agenda una demo. Primero entendemos tu operación; si encaja, la configuramos contigo en 7 días y capacitamos a tu equipo por rol.',
}
