/**
 * Datos de las piezas de demostración que quedan en código: el recorrido de una
 * venta (journey) y el chat de Jarvis (jarvis). Las pantallas del producto
 * (hero y capítulo 04) ya son capturas reales: viven en public/capturas.
 *
 * ⚠️ Los números cuadran entre piezas a propósito, que es lo que pide la guía
 * de marca para los datos de demostración (mismo período, misma operación):
 *   - Vendido 84.500 = Cobrado 52.300 + Por cobrar 32.200
 *   - 128 agendadas → 96 asistieron → 24 cerraron (tasa sobre llamadas realizadas)
 * Si cambias una cifra, cambia las que dependen de ella.
 *
 * Todos los nombres son inventados. Nunca poner datos de un cliente real.
 */

export const demoMeta = {
  badge: 'Demo',
  /** Pie de las capturas del capítulo 04. */
  shotHint: 'Captura de la app. Datos de ejemplo.',
}

/** Dinero con el mismo formato que usa la app: $84,500. */
export const money = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`

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
