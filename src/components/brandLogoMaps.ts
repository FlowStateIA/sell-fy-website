/**
 * Mapas nombre → logo. Viven aparte de BrandLogos.tsx porque un archivo que
 * exporta componentes no debe exportar también constantes: rompe el fast
 * refresh de Vite (react-refresh/only-export-components).
 */

import type { ReactElement } from 'react'

import fathomIcon from '../assets/logos/fathom.png'
import hotmartIcon from '../assets/logos/hotmart.png'
import skoolIcon from '../assets/logos/skool.png'
import whopIcon from '../assets/logos/whop.png'
import { CalendlyLogo, GoogleCalendarLogo, GoogleMeetLogo, WhatsAppLogo } from './BrandLogos'

type LogoProps = { size?: number }

/** Marcas con SVG inline propio. */
export const CONNECT_LOGOS: Record<string, (props: LogoProps) => ReactElement> = {
  'Google Calendar': GoogleCalendarLogo,
  'Google Meet': GoogleMeetLogo,
  Calendly: CalendlyLogo,
  WhatsApp: WhatsAppLogo,
}

/**
 * Marcas sin SVG confiable: se usan los iconos oficiales descargados de cada
 * una (180–220px, nítidos en retina).
 *
 * ⚠️ Fathom es fathom.video (el grabador de llamadas). El "Fathom" de Simple
 * Icons es Fathom Analytics, otra empresa: no sirve aquí.
 */
export const BRAND_IMAGES: Record<string, string> = {
  Hotmart: hotmartIcon,
  Skool: skoolIcon,
  Whop: whopIcon,
  Fathom: fathomIcon,
}
