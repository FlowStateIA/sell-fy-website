/**
 * Constantes compartidas del sitio.
 * Centralizadas para que un cambio de URL o de precio no haya que buscarlo en varios archivos.
 */

/**
 * La app. El dominio viejo (app.sell-fy.app) redirige acá desde la migración a
 * SellNode, así que se enlaza directo al nuevo.
 */
export const APP_URL = 'https://app.sell-node.com'
/**
 * ⚠️ La dirección de abajo (Calendly) todavía lleva «sell-fy» en la ruta. No se
 * puede cambiar desde el código: es el nombre de la cuenta en el servicio. Cuando
 * se renombre allá, se actualiza acá; mientras tanto, cambiarla a mano la rompería.
 */
export const CALENDLY_URL = 'https://calendly.com/sell-fy/30min'

/**
 * Entidad legal, en un solo lugar.
 *
 * ⚠️ Tiene que coincidir con src/content/legal.ts. Los dos footers decían
 * "LLC" mientras los Términos y la Política decían "SAS": los commits que
 * cambiaron la entidad a la sociedad colombiana no tocaron los footers.
 */
export const LEGAL_ENTITY = 'Flow State IA SAS'
export const COPYRIGHT = `${LEGAL_ENTITY} — © ${new Date().getFullYear()}`

/**
 * El plan publicado. Una sola fuente para la home y /demo.
 *
 * Modelo (decisión de producto, 2026-11-07; el dueño confirmó las cifras el
 * 2026-11-18): la implementación es un pago inicial que INCLUYE el primer mes;
 * la mensualidad se paga desde el segundo mes. Hay un solo plan: la plataforma
 * completa.
 *
 * ⚠️ La página ya no enlaza a ningún checkout: todo botón lleva a agendar
 * (CALENDLY_URL) y el cobro se acuerda en la llamada. Los links de Whop se
 * quitaron el 2026-11-18, así que la página no puede prometer un precio que un
 * checkout cobre distinto.
 */
export type Plan = {
  name: string
  setup: string
  monthly: string
  monthlyPeriod: string
}

export const PLAN: Plan = {
  name: 'SellNode',
  setup: '$997',
  monthly: '$297',
  monthlyPeriod: '/ mes',
}
