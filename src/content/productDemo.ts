/**
 * Datos de la demo viva del hero.
 *
 * Es una RECREACIÓN de la interfaz con datos de ejemplo, no una captura: por
 * eso el pie lo dice así y no «interfaz real». La estructura sigue al tablero
 * actual de la app (vendido / cobrado / por cobrar, embudo de llamadas, ranking
 * de closers, atribución por funnel).
 *
 * ⚠️ Los números cuadran entre pestañas a propósito, que es lo que pide la guía
 * de marca para los datos de demostración (mismo período, misma operación):
 *   - Vendido 84.500 = Cobrado 52.300 + Por cobrar 32.200
 *   - 128 agendadas → 96 asistieron → 24 cerraron (tasa sobre llamadas realizadas)
 *   - Los closers suman 96 llamadas, 24 ventas y 52.300 cobrados
 *   - Los funnels suman 128 agendas, 24 ventas y 52.300 cobrados
 * Si cambias una cifra, cambia las que dependen de ella.
 *
 * Todos los nombres son inventados. Nunca poner datos de un cliente real.
 */

export type DemoTabId = 'tablero' | 'atribucion' | 'llamadas' | 'cobros'

export const demoMeta = {
  org: 'Academia Norte',
  period: 'Este mes',
  badge: 'Demo',
  caption: 'Recreación de la interfaz. Datos de ejemplo, del mismo período en todas las pestañas.',
  pause: 'Pausar',
  play: 'Reanudar',
  /** Pie de las pantallas del capítulo 04: avisa que se pueden tocar. */
  touchHint: 'Pantalla de ejemplo. Puedes tocarla.',
}

export const demoTabs: {
  id: DemoTabId
  label: string
  url: string
  /** Lo que «acaba de pasar» en esa pantalla. Juntas cuentan una venta de punta a punta. */
  toast: { title: string; body: string }
}[] = [
  {
    id: 'tablero',
    label: 'Tablero',
    url: 'app.sell-node.com/dashboard',
    toast: { title: 'Venta registrada', body: 'Laura M. cerró Mentoría 12 semanas · $3,000' },
  },
  {
    id: 'atribucion',
    label: 'Atribución',
    url: 'app.sell-node.com/atribucion/resultados',
    toast: { title: 'Agenda nueva', body: 'Entró por el embudo Webinar · setter Dani V.' },
  },
  {
    id: 'llamadas',
    label: 'Llamadas',
    url: 'app.sell-node.com/llamadas',
    toast: { title: 'Llamada auditada', body: 'Score 82 de 100 · un momento a revisar' },
  },
  {
    id: 'cobros',
    label: 'Cobros',
    url: 'app.sell-node.com/ventas/cobros',
    toast: { title: 'Cuota cobrada', body: 'Carla P. pagó $800 · quedan $1,200' },
  },
]

/** Menú lateral de la recreación. `tab` marca cuál se enciende con cada pestaña. */
export const demoNav: { label: string; tab?: DemoTabId }[] = [
  { label: 'Dashboard', tab: 'tablero' },
  { label: 'Agendas' },
  { label: 'Llamadas', tab: 'llamadas' },
  { label: 'Ventas' },
  { label: 'Cobros', tab: 'cobros' },
  { label: 'Atribución', tab: 'atribucion' },
  { label: 'Finanzas' },
  { label: 'Servicio' },
]

export const tablero = {
  revenue: {
    title: 'Vendido',
    vendido: 84500,
    cobrado: 52300,
    porCobrar: 32200,
    cobradoLabel: 'Cobrado',
    porCobrarLabel: 'Por cobrar',
    stats: [
      { label: 'Ventas', value: '24' },
      { label: 'Ticket promedio', value: '$3,521' },
    ],
  },
  funnel: {
    title: 'Embudo de llamadas',
    rows: [
      { label: 'Agendadas', value: 128, note: '' },
      { label: 'Asistieron', value: 96, note: '75% show rate' },
      { label: 'Cerraron', value: 24, note: '25% de las realizadas' },
    ],
  },
  closers: {
    title: 'Ranking de closers',
    meta: 'Por dinero cobrado',
    columns: ['Closer', 'Llamadas', 'Ventas', 'Cierre', 'Cobrado'],
    rows: [
      { name: 'Laura M.', llamadas: 32, ventas: 9, cierre: '28%', cobrado: 19800 },
      { name: 'Andrés R.', llamadas: 28, ventas: 7, cierre: '25%', cobrado: 14600 },
      { name: 'Camila T.', llamadas: 22, ventas: 5, cierre: '23%', cobrado: 11200 },
      { name: 'Mateo G.', llamadas: 14, ventas: 3, cierre: '21%', cobrado: 6700 },
    ],
  },
}

export const atribucion = {
  title: 'Atribución por funnel',
  meta: 'Agendas, ventas y cobro de cada embudo',
  columns: ['Funnel', 'Inversión', 'Agendas', 'Ventas', 'Cobrado', 'Retorno'],
  rows: [
    { name: 'Webinar', inversion: 6200, agendas: 52, ventas: 11, cobrado: 24900, retorno: '4.0×' },
    { name: 'VSL', inversion: 5900, agendas: 50, ventas: 9, cobrado: 19600, retorno: '3.3×' },
    { name: 'Directo', inversion: 0, agendas: 26, ventas: 4, cobrado: 7800, retorno: '—' },
  ],
  insightLabel: 'Para decidir',
  insight: 'Webinar y VSL agendaron casi lo mismo. Webinar dejó $5,300 más cobrados.',
}

export const llamada = {
  title: 'Auditoría de llamada',
  lead: 'Carla P.',
  meta: 'Closer Laura M. · 46 min · embudo Webinar',
  score: 82,
  scoreLabel: 'de 100',
  phasesTitle: 'Score por fase',
  phases: [
    { label: 'Apertura', value: 90 },
    { label: 'Descubrimiento', value: 85 },
    { label: 'Presentación', value: 88 },
    { label: 'Objeciones', value: 62 },
    { label: 'Cierre', value: 80 },
    { label: 'Control', value: 84 },
    { label: 'Oferta', value: 86 },
  ],
  /** Por debajo de este puntaje la fase se marca para revisar. */
  reviewBelow: 70,
  momentLabel: 'Momento a revisar · 18:42',
  moment: 'El presupuesto apareció después de la oferta. Revisa ese fragmento con el closer.',
}

export const cobros = {
  sale: {
    title: 'Mentoría 12 semanas',
    meta: 'Carla P. · cerró Laura M.',
    totals: [
      { label: 'Vendido', value: 3000, tone: 'neutral' as const },
      { label: 'Cobrado', value: 1800, tone: 'good' as const },
      { label: 'Pendiente', value: 1200, tone: 'neutral' as const },
    ],
    installmentsTitle: 'Cuotas',
    installments: [
      { label: 'Cuota 1', amount: 1000, status: 'Cobrada', date: '2 nov', tone: 'good' as const },
      { label: 'Cuota 2', amount: 800, status: 'Cobrada', date: '9 nov', tone: 'good' as const },
      { label: 'Cuota 3', amount: 1200, status: 'Por venir', date: '30 nov', tone: 'neutral' as const },
    ],
  },
  portfolio: {
    title: 'Cartera del período',
    rows: [
      { label: 'Por cobrar', value: 32200, tone: 'neutral' as const },
      { label: 'Por venir', value: 28100, tone: 'neutral' as const },
      { label: 'En mora', value: 4100, tone: 'bad' as const },
    ],
  },
  commission: {
    title: 'Comisión de Laura M.',
    body: '$180 liberados de $300. Se libera con cada cobro, no con la venta.',
    released: 180,
    total: 300,
  },
}

/** Dinero con el mismo formato que usa la app: $84,500. */
export const money = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`

/* ═══════════════════════════════════════════════════════════════════════════
   Pantallas del capítulo 04 («Así se ve»).

   Misma operación de ejemplo que el hero, así que las cifras tienen que seguir
   cuadrando con las de arriba:
     - 96 llamadas auditadas = las 96 que «asistieron» = 58 + 38 por oferta
     - Comisión liberada 5.230 = 10 % de lo cobrado (52.300)
     - Comisión bloqueada 3.220 = 10 % de lo por cobrar (32.200)
     - En mora 4.100 = 1.400 + 1.500 + 1.200
     - Las duplas de cada closer suman sus llamadas, ventas y cobro del ranking
   ═══════════════════════════════════════════════════════════════════════════ */

export type OfferId = 'todas' | 'mentoria' | 'intensivo'

/** Inteligencia de clientes: lo que dicen en las llamadas, agrupado por oferta. */
export const clientes = {
  url: 'app.sell-node.com/inteligencia/clientes',
  filterLabel: 'Filtrar por oferta',
  offers: [
    { id: 'todas' as OfferId, label: 'Todas las ofertas', calls: 96 },
    { id: 'mentoria' as OfferId, label: 'Mentoría 12 semanas', calls: 58 },
    { id: 'intensivo' as OfferId, label: 'Programa intensivo', calls: 38 },
  ],
  callsLabel: 'llamadas auditadas',
  countLabel: 'llamadas',
  groups: [
    {
      title: 'Dolores que más se repiten',
      tone: 'neutral' as const,
      rows: [
        { quote: '«Llevo meses aplicando y no me llaman»', counts: { todas: 41, mentoria: 26, intensivo: 15 } },
        { quote: '«No sé cómo cobrar en dólares»', counts: { todas: 28, mentoria: 17, intensivo: 11 } },
        { quote: '«Me da miedo dejar mi trabajo actual»', counts: { todas: 19, mentoria: 9, intensivo: 10 } },
      ],
    },
    {
      title: 'Objeciones antes de decidir',
      tone: 'bad' as const,
      rows: [
        { quote: '«Tengo que consultarlo con mi pareja»', counts: { todas: 22, mentoria: 13, intensivo: 9 } },
        { quote: '«Ahora no tengo el dinero»', counts: { todas: 17, mentoria: 8, intensivo: 9 } },
        { quote: '«Ya probé un curso y no funcionó»', counts: { todas: 11, mentoria: 7, intensivo: 4 } },
      ],
    },
  ],
}

/** Mapa de una llamada: sus tramos, con marca de tiempo, puntaje y una nota revisable. */
export const mapa = {
  url: 'app.sell-node.com/llamadas/auditoria',
  title: 'Mapa de la llamada',
  meta: 'Carla P. · closer Laura M. · 46 min',
  segmentsLabel: 'Tramos de la llamada',
  /** Duración total en segundos, para repartir el ancho de los tramos. */
  total: 46 * 60,
  reviewBelow: 70,
  segments: [
    { id: 'apertura', label: 'Apertura', start: '0:00', seconds: 220, score: 90, note: 'Marcó la agenda de la llamada y pidió permiso para preguntar.' },
    { id: 'descubrimiento', label: 'Descubrimiento', start: '3:40', seconds: 510, score: 85, note: 'Tres preguntas sobre la situación actual. Faltó ponerle número al costo de no cambiar.' },
    { id: 'presentacion', label: 'Presentación', start: '12:10', seconds: 295, score: 88, note: 'Conectó el programa con el dolor que el cliente nombró primero.' },
    { id: 'oferta', label: 'Oferta', start: '17:05', seconds: 85, score: 86, note: 'Dijo el precio una sola vez y sin justificarlo.' },
    { id: 'objeciones', label: 'Objeciones', start: '18:30', seconds: 890, score: 62, note: 'El presupuesto apareció después de la oferta. Revisa ese fragmento con el closer.' },
    { id: 'cierre', label: 'Cierre', start: '33:20', seconds: 760, score: 80, note: 'Acordó el siguiente paso con fecha.' },
  ],
  planTitle: 'Plan de mejora de Laura M.',
  planMeta: 'Sale de sus llamadas del mes',
  plan: [
    { action: 'Pregunta por el presupuesto antes de presentar la oferta.', impact: 'Impacto alto' },
    { action: 'Resume el dolor con las palabras del cliente antes de decir el precio.', impact: 'Impacto medio' },
    { action: 'Responde cada objeción con una pregunta, no con un argumento.', impact: 'Impacto medio' },
  ],
}

export type CobroViewId = 'comisiones' | 'mora'

/** Comisiones (liberadas con el cobro, no con la venta) y cuotas en mora. */
export const comisiones = {
  url: 'app.sell-node.com/ventas/comisiones',
  viewLabel: 'Vista',
  views: [
    { id: 'comisiones' as CobroViewId, label: 'Comisiones' },
    { id: 'mora' as CobroViewId, label: 'En mora' },
  ],
  table: {
    title: 'Comisiones del período',
    meta: '10 % por venta',
    columns: ['Closer', 'Liberada', 'Bloqueada', 'Liquidada'],
    rows: [
      { name: 'Laura M.', liberada: 1980, bloqueada: 1170, liquidada: 1200 },
      { name: 'Andrés R.', liberada: 1460, bloqueada: 990, liquidada: 900 },
      { name: 'Camila T.', liberada: 1120, bloqueada: 680, liquidada: 700 },
      { name: 'Mateo G.', liberada: 670, bloqueada: 380, liquidada: 400 },
    ],
    totalLabel: 'Total',
    note: 'La comisión se libera cuando el dinero entra. Lo bloqueado corresponde a cuotas que todavía no se cobran.',
  },
  overdue: {
    title: 'Cuotas en mora',
    meta: '$4,100 en 3 cuotas',
    rows: [
      { name: 'Diego R.', detail: 'Cuota 2 de 3 · venció hace 9 días', amount: 1400 },
      { name: 'Sofía L.', detail: 'Cuota 3 de 4 · venció hace 4 días', amount: 1500 },
      { name: 'Iván C.', detail: 'Cuota 2 de 2 · venció hace 2 días', amount: 1200 },
    ],
    statusLabel: 'Vencida',
    note: 'El closer de cada venta recibió el aviso por WhatsApp el día del vencimiento.',
  },
}

export type CompareViewId = 'embudos' | 'closers' | 'duplas'

/** Comparación en el mismo período. Embudos y closers reutilizan los datos del hero. */
export const comparar = {
  url: 'app.sell-node.com/analitica',
  viewLabel: 'Comparar por',
  views: [
    { id: 'embudos' as CompareViewId, label: 'Embudos' },
    { id: 'closers' as CompareViewId, label: 'Closers' },
    { id: 'duplas' as CompareViewId, label: 'Duplas' },
  ],
  columns: {
    embudos: ['Embudo', 'Agendas', 'Ventas', 'Cobrado'],
    closers: ['Closer', 'Llamadas', 'Cierre', 'Cobrado'],
    duplas: ['Setter + closer', 'Llamadas', 'Cierre', 'Cobrado'],
  },
  duplas: [
    { name: 'Dani V. + Laura M.', llamadas: 18, cierre: '33%', cobrado: 13400 },
    { name: 'Dani V. + Andrés R.', llamadas: 15, cierre: '27%', cobrado: 8300 },
    { name: 'Sara N. + Camila T.', llamadas: 12, cierre: '25%', cobrado: 6900 },
    { name: 'Sara N. + Laura M.', llamadas: 14, cierre: '21%', cobrado: 6400 },
    { name: 'Sara N. + Andrés R.', llamadas: 13, cierre: '23%', cobrado: 6300 },
  ],
  /** La guía pide decir siempre qué se midió y sobre qué denominador. */
  notes: {
    embudos: 'Agendas, ventas y dinero cobrado de cada embudo, este mes.',
    closers: 'Tasa de cierre = ventas ÷ llamadas realizadas por cada closer, este mes.',
    duplas: 'Las cinco duplas con más cobro. Tasa de cierre = ventas ÷ llamadas realizadas de la dupla.',
  },
}

/* ═══════════════════════════════════════════════════════════════════════════
   El recorrido de una venta, paso a paso (capítulo «Cómo se conecta»).

   Es la misma venta que aparece en el hero: Carla P., embudo Webinar, setter
   Dani V., closer Laura M., Mentoría 12 semanas por 3.000 en tres cuotas.
   ═══════════════════════════════════════════════════════════════════════════ */

export type JourneyStepId = 'agenda' | 'llamada' | 'auditoria' | 'venta' | 'cobro' | 'tablero'

export const journey = {
  stepsLabel: 'Pasos de la venta',
  steps: [
    {
      id: 'agenda' as JourneyStepId,
      label: 'Entra la agenda',
      caption: 'La agenda nace con su embudo y su setter. El origen queda puesto desde el primer minuto.',
    },
    {
      id: 'llamada' as JourneyStepId,
      label: 'Se hace la llamada',
      caption: 'El closer marca qué pasó: asistió, cerró, quedó en seguimiento o no se presentó.',
    },
    {
      id: 'auditoria' as JourneyStepId,
      label: 'La llamada se audita sola',
      caption: 'La grabación recibe un puntaje por fase y señala el momento que conviene revisar.',
    },
    {
      id: 'venta' as JourneyStepId,
      label: 'Se registra la venta',
      caption: 'Lo acordado y el plan de pagos quedan en la misma ficha. La comisión se calcula sola.',
    },
    {
      id: 'cobro' as JourneyStepId,
      label: 'Entra cada cobro',
      caption: 'Cada cuota que entra baja la cartera y libera su parte de la comisión.',
    },
    {
      id: 'tablero' as JourneyStepId,
      label: 'Lo ves en el tablero',
      caption: 'La venta ya suma en su embudo, en su closer y en su dupla, sin que nadie arme un reporte.',
    },
  ],
  agenda: {
    title: 'Llamada de diagnóstico',
    lead: 'Carla P.',
    when: 'Jueves · 2:30 p. m.',
    fields: [
      { label: 'Embudo', value: 'Webinar' },
      { label: 'Setter', value: 'Dani V.' },
      { label: 'Closer', value: 'Laura M.' },
    ],
    status: 'Agendada',
  },
  llamada: {
    title: 'Carla P. · Llamada de diagnóstico',
    meta: 'Asistió · 46 min · grabación adjunta',
    question: 'Resultado de la llamada',
    outcomes: ['Venta', 'Seguimiento', 'No cerró', 'No asistió'],
    selected: 'Venta',
  },
  auditoria: {
    title: 'Auditoría',
    score: 82,
    scoreLabel: 'de 100',
    phases: [
      { label: 'Descubrimiento', value: 85 },
      { label: 'Presentación', value: 88 },
      { label: 'Objeciones', value: 62 },
      { label: 'Cierre', value: 80 },
    ],
    reviewBelow: 70,
    momentLabel: 'Momento a revisar · 18:42',
    moment: 'El presupuesto apareció después de la oferta.',
  },
  venta: {
    title: 'Venta registrada',
    offer: 'Mentoría 12 semanas',
    amount: 3000,
    rows: [
      { label: 'Plan de pagos', value: '3 cuotas' },
      { label: 'Primer pago', value: '$1,000 · Stripe' },
      { label: 'Comisión de Laura M.', value: '$300 · bloqueada hasta el cobro' },
    ],
  },
  cobro: {
    title: 'Cobros de la venta',
    collectedLabel: 'Cobrado',
    collected: 1800,
    total: 3000,
    rows: [
      { label: 'Cuota 1', amount: 1000, status: 'Cobrada', good: true },
      { label: 'Cuota 2', amount: 800, status: 'Cobrada', good: true },
      { label: 'Cuota 3', amount: 1200, status: 'Por venir', good: false },
    ],
    commission: 'Comisión liberada: $180 de $300',
  },
  tablero: {
    title: 'Dónde suma esta venta',
    rows: [
      { label: 'Embudo', value: 'Webinar', detail: '11 ventas · $24,900 cobrados' },
      { label: 'Closer', value: 'Laura M.', detail: '9 ventas · $19,800 cobrados' },
      { label: 'Dupla', value: 'Dani V. + Laura M.', detail: '33% de cierre · $13,400 cobrados' },
    ],
  },
}

/* ═══════════════════════════════════════════════════════════════════════════
   Jarvis, el asistente (capítulo «Pregúntale a tus datos»).

   Las preguntas son del tipo que el asistente real sugiere, y cada respuesta
   corresponde a algo que de verdad consulta: el resumen del período, lo que
   dicen los clientes, las auditorías, el ranking del equipo y los seguimientos.

   Las respuestas usan los mismos datos de ejemplo que el resto de la página:
     - Resumen: 84.500 vendidos, 52.300 cobrados, 32.200 por cobrar, 4.100 en mora
     - Objeciones: 22, 17 y 11 menciones en 96 llamadas (13 de 58 en Mentoría)
     - Mateo G.: 3 ventas en 14 llamadas (21 %); el equipo, 24 en 96 (25 %)
   Y siguen la voz de marca: dicen qué se midió y sobre qué, señalan algo
   revisable y no juzgan a nadie.
   ═══════════════════════════════════════════════════════════════════════════ */

export const jarvis = {
  name: 'Jarvis',
  role: 'Asistente',
  questionsLabel: 'Preguntas de ejemplo',
  placeholder: 'Escribe tu pregunta…',
  consulting: 'Consultando',
  consultedLabel: 'Consultó',
  note: 'Respuestas armadas con los datos de ejemplo de esta página.',
  questions: [
    {
      id: 'resumen',
      question: '¿Cómo vamos este mes?',
      consulted: 'Resumen del período',
      intro: 'Este mes llevas $84,500 vendidos y $52,300 cobrados.',
      points: [
        'Quedan $32,200 por cobrar; $4,100 de eso está en mora.',
        '128 agendas, 96 llamadas realizadas: 75% de show rate.',
        '24 ventas: 25% de cierre sobre las llamadas realizadas.',
      ],
      closing: 'La mora está en 3 cuotas. Conviene mirarlas antes de que termine el mes.',
      actions: ['Ver tablero', 'Ver cobros'],
    },
    {
      id: 'objeciones',
      question: '¿Qué objeciones aparecen más este mes?',
      consulted: 'Inteligencia de clientes · 96 llamadas auditadas',
      intro: 'Tres objeciones se repiten en las 96 llamadas auditadas del mes:',
      points: [
        '«Tengo que consultarlo con mi pareja» — en 22 llamadas.',
        '«Ahora no tengo el dinero» — en 17 llamadas.',
        '«Ya probé un curso y no funcionó» — en 11 llamadas.',
      ],
      closing: 'La primera pesa más en Mentoría 12 semanas: aparece en 13 de sus 58 llamadas.',
      actions: ['Ver inteligencia de clientes'],
    },
    {
      id: 'entrenar',
      question: '¿Qué debería entrenar con mi equipo?',
      consulted: 'Auditorías del período',
      intro: 'El tramo de objeciones es el de menor puntaje del equipo este mes.',
      points: [
        'En varias llamadas el presupuesto aparece después de la oferta.',
        'Cuando se pregunta antes, el tramo de objeciones puntúa más alto.',
      ],
      closing:
        'Para practicar: preguntar por el presupuesto antes de presentar la oferta. Hay un ejemplo en la llamada de Carla P., minuto 18:42.',
      actions: ['Ver auditorías', 'Abrir la llamada'],
    },
    {
      id: 'closer',
      question: '¿Qué closer necesita apoyo?',
      consulted: 'Ranking del equipo',
      intro: 'Mateo G. cerró 3 de 14 llamadas este mes: 21%. El equipo cerró 24 de 96: 25%.',
      points: [
        'Con 14 llamadas la muestra es chica: una venta más lo deja en 29%.',
        'También fue quien menos llamadas recibió del equipo.',
      ],
      closing: 'Antes de sacar una conclusión, revisa sus auditorías y cuántas agendas le llegan.',
      actions: ['Ver perfil de Mateo', 'Ver reparto de agendas'],
    },
    {
      id: 'seguimientos',
      question: '¿Qué seguimientos están vencidos?',
      consulted: 'Seguimientos',
      intro: 'Hay 6 seguimientos vencidos y 4 programados para hoy.',
      points: [
        '4 vencidos son de Andrés R. y 2 de Camila T.',
        'El más antiguo lleva 5 días sin gestión.',
      ],
      closing: 'Los de hoy están repartidos entre Laura M. y Mateo G.',
      actions: ['Ver seguimientos'],
    },
  ],
}
