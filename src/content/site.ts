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
 * 🚨 DESALINEADO: este producto cobra $150/mes, pero /demo ya publica el
 * Plan de lanzamiento a $297/mes. Hay que crear el producto de $297 en Whop
 * y reemplazar esta URL ANTES de desplegar, o la página promete un precio
 * y el checkout cobra otro.
 */
export const WHOP_CHECKOUT_URL = 'https://whop.com/sell-fy/standar-plan/'
