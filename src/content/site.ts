/**
 * Constantes compartidas del sitio.
 * Centralizadas para que un cambio de URL o de precio no haya que buscarlo en varios archivos.
 */

export const APP_URL = 'https://app.sell-fy.app'
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
 * Checkout de Whop. El cliente paga aquí.
 *
 * ⚠️ Si cambias este link, verifica en la página de checkout que las cifras
 * de PRICE sigan coincidiendo. La página no puede prometer un precio y el
 * checkout cobrar otro.
 */
export const WHOP_CHECKOUT_URL = 'https://whop.com/checkout/plan_lrfMAhKe5YTmT'

/**
 * Precio del Plan de lanzamiento. Una sola fuente para /demo y para el home:
 * cuando vivía en los dos archivos, el home se quedó en $150 mientras /demo
 * ya vendía a $297.
 *
 * Verificado contra el checkout de Whop (plan "Sell - Fy - Pro"):
 * cuota inicial $200 + primer mes $297 = $497 hoy, luego $297 cada mes.
 */
export const PRICE = {
  planName: 'Plan de lanzamiento',
  monthly: '$297',
  monthlyPeriod: '/ mes',
  setup: '$200',
  dueToday: '$497',
}
