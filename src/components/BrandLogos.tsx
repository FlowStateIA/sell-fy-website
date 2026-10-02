/**
 * Logos de marca en SVG inline para la sección "Se conecta con" de /demo.
 *
 * Son versiones simplificadas pero fieles en color a cada marca. Van
 * siempre acompañados del nombre, así que no dependen de ser pixel-perfect
 * para que el usuario las reconozca. Inline (no <img>) para que se vean
 * nítidas en cualquier resolución y no sumen peticiones de red.
 */

import type { ReactElement } from 'react'

type LogoProps = { size?: number }

export function GoogleCalendarLogo({ size = 22 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <rect x="9" y="9" width="30" height="30" rx="4" fill="#ffffff" />
      <path d="M9 13a4 4 0 0 1 4-4h22a4 4 0 0 1 4 4v3H9z" fill="#4285F4" />
      <text
        x="24"
        y="33"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="15"
        fill="#4285F4"
      >
        31
      </text>
    </svg>
  )
}

export function GoogleMeetLogo({ size = 22 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      {/* cuerpo de la cámara */}
      <rect x="7" y="14" width="27" height="20" rx="4" fill="#00AC47" />
      {/* lente / play */}
      <path d="M34 21l7-4.5v15L34 27z" fill="#00832D" />
      {/* pantalla */}
      <rect x="12" y="19" width="13" height="10" rx="2" fill="#ffffff" />
      {/* acento Google */}
      <rect x="7" y="27" width="6" height="7" rx="3" fill="#FFBA00" />
    </svg>
  )
}

export function CalendlyLogo({ size = 22 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="15" fill="#006BFF" />
      <path
        d="M31 18a9 9 0 1 0 0 12"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Mapa nombre → logo, para render data-driven desde el contenido. */
export const CONNECT_LOGOS: Record<string, (props: LogoProps) => ReactElement> = {
  'Google Calendar': GoogleCalendarLogo,
  'Google Meet': GoogleMeetLogo,
  Calendly: CalendlyLogo,
}
