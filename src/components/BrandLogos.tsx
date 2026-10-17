/**
 * Logos de marca en SVG inline para la sección "Se conecta con" de /demo.
 *
 * Son versiones simplificadas pero fieles en color a cada marca. Van
 * siempre acompañados del nombre, así que no dependen de ser pixel-perfect
 * para que el usuario las reconozca. Inline (no <img>) para que se vean
 * nítidas en cualquier resolución y no sumen peticiones de red.
 */

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
/** Glifo oficial de WhatsApp (Simple Icons) con el verde de marca. */
export function WhatsAppLogo({ size = 22 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#25D366"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
      />
    </svg>
  )
}
