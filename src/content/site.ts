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
 * ⚠️ Las dos direcciones de abajo (Calendly y el checkout Standard de Whop)
 * todavía llevan «sell-fy» en la ruta. No se pueden cambiar desde el código:
 * son el nombre de la cuenta en cada servicio. Cuando se renombren allá, se
 * actualizan acá; mientras tanto, cambiarlas a mano las rompería.
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
 * Checkout de Whop. El cliente paga aquí.
 *
 * ⚠️ Si cambias este link, verifica en la página de checkout que las cifras
 * de PLANS sigan coincidiendo. La página no puede prometer un precio y el
 * checkout cobrar otro.
 */
export const WHOP_CHECKOUT_URL = 'https://whop.com/checkout/plan_lrfMAhKe5YTmT'

/**
 * Checkout del plan Standard. Es el link viejo del plan de $150.
 * ⚠️ PENDIENTE de conectar en Whop con las cifras nuevas (ver PLANS).
 */
export const WHOP_STANDARD_CHECKOUT_URL = 'https://whop.com/sell-fy/standar-plan/'

/**
 * Planes publicados. Una sola fuente para /demo y para el home.
 *
 * Modelo (decisión de producto, 2026-11-07): la implementación es un pago
 * inicial que INCLUYE el primer mes; la mensualidad se paga desde el segundo mes.
 *
 * ⚠️ PENDIENTE: los checkouts de Whop todavía no cobran estas cifras. El de Pro
 * (plan "Sell - Fy - Pro") cobra $200 de entrada + $297; el de Standard es el
 * link viejo de $150. No publicar en producción hasta conectarlos: la página no
 * puede prometer un precio y el checkout cobrar otro.
 */
export type Plan = {
  name: string
  setup: string
  monthly: string
  monthlyPeriod: string
  checkoutUrl: string
}

export const PLANS: { standard: Plan; pro: Plan } = {
  standard: {
    name: 'Standard',
    setup: '$897',
    monthly: '$150',
    monthlyPeriod: '/ mes',
    checkoutUrl: WHOP_STANDARD_CHECKOUT_URL,
  },
  pro: {
    name: 'Pro',
    setup: '$997',
    monthly: '$297',
    monthlyPeriod: '/ mes',
    checkoutUrl: WHOP_CHECKOUT_URL,
  },
}

/** La mensualidad más baja, para los CTA que dicen "desde". */
export const PRICE_FROM = PLANS.standard.monthly
