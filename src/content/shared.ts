/**
 * Copy que comparten la home y la landing de embudo (/demo).
 *
 * Aquí vive sólo lo que es el MISMO conocimiento: qué módulo de SellNode
 * reemplaza a qué herramienta. Si eso cambia, tiene que cambiar en los dos
 * sitios a la vez. Los titulares NO están aquí: cada página presenta el bloque
 * a su manera, porque llega con un contexto distinto.
 *
 * `demo.ts` reexporta estos nombres para no romper los imports que ya existían.
 */

/** Claves de icono de las tarjetas de reemplazo. Se mapean a lucide-react en ReplaceGrid.tsx */
export type ReplaceIcon =
  'calendar' | 'kanban' | 'calculator' | 'graduation' | 'audio' | 'wallet' | 'chart'

/** Etiqueta que une las dos mitades de cada tarjeta. */
export const insteadOfLabel = 'En lugar de'

/** Mapeo uno a uno. Cada fila es una herramienta que el cliente deja de pagar. */
export const replaceRows: { icon: ReplaceIcon; inside: string; outside: string }[] = [
  {
    icon: 'calendar',
    inside: 'Agendamiento propio',
    outside: 'Calendly o similar para agendar llamadas',
  },
  {
    icon: 'kanban',
    inside: 'CRM + Ventas',
    outside: 'Un CRM genérico para el pipeline comercial',
  },
  {
    icon: 'calculator',
    inside: 'Comisiones',
    outside: 'Hojas de cálculo de comisiones y liquidaciones',
  },
  {
    icon: 'graduation',
    inside: 'Entrega de Servicio',
    outside: 'Notion o un tablero suelto para la entrega del programa',
  },
  {
    icon: 'audio',
    inside: 'Auditorías + Inteligencia',
    outside: 'Una herramienta de grabación y auditoría de llamadas',
  },
  {
    icon: 'wallet',
    inside: 'Finanzas',
    outside: 'Hojas de gastos, nómina y caja del negocio',
  },
  {
    icon: 'chart',
    inside: 'Analítica + Informes',
    outside: 'Dashboards armados a mano cada semana',
  },
]

/**
 * Lo que sigue conectado. Calendly aparece aquí Y tachado arriba: no es
 * contradicción. El agendamiento propio reemplaza la suscripción, pero importa
 * los datos desde Calendly para que nadie pierda su historial al migrar.
 */
export const connectsWith = {
  title: 'Se conecta con',
  items: ['Google Calendar', 'Google Meet', 'Calendly'],
}
