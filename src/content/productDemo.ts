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
    url: 'app.sell-fy.app/dashboard',
    toast: { title: 'Venta registrada', body: 'Laura M. cerró Mentoría 12 semanas · $3,000' },
  },
  {
    id: 'atribucion',
    label: 'Atribución',
    url: 'app.sell-fy.app/atribucion/resultados',
    toast: { title: 'Agenda nueva', body: 'Entró por el embudo Webinar · setter Dani V.' },
  },
  {
    id: 'llamadas',
    label: 'Llamadas',
    url: 'app.sell-fy.app/llamadas',
    toast: { title: 'Llamada auditada', body: 'Score 82 de 100 · un momento a revisar' },
  },
  {
    id: 'cobros',
    label: 'Cobros',
    url: 'app.sell-fy.app/ventas/cobros',
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
