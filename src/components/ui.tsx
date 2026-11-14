import type { CSSProperties, ReactNode } from 'react'

import { color, onDark, onLight, radius, type } from '../lib/theme'

/**
 * Primitivas de interfaz. Todo lo que se repetía a mano en cada componente
 * —botones, rótulos, cápsulas— vive acá y sale de los tokens.
 */

/** Rótulo en versalitas. Sobre oscuro va en rojo nodo; sobre marfil, en pizarra. */
export function Label({
  children,
  tone = 'accent',
  style,
}: {
  children: ReactNode
  tone?: 'accent' | 'muted' | 'light'
  style?: CSSProperties
}) {
  const colors = { accent: color.red, muted: onDark.tertiary, light: onLight.secondary }
  return (
    <div style={{ ...(type.label as CSSProperties), color: colors[tone], ...style }}>
      {children}
    </div>
  )
}

/** Cápsula del rótulo del hero: rótulo con un punto rojo, dentro de un borde fino. */
export function Pill({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2.5 sm:hairline"
      style={{
        padding: '7px 14px 7px 12px',
        borderRadius: radius.pill,
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: color.red,
          boxShadow: `0 0 10px ${color.red}`,
        }}
      />
      <span style={{ ...(type.label as CSSProperties), color: onDark.secondary }}>{children}</span>
    </span>
  )
}

/**
 * Botón. Dos variantes nada más: la acción principal en rojo nodo y la
 * secundaria en línea. El manual reserva el rojo para la acción principal, así
 * que no hay una tercera.
 */
export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  external = true,
  onLightBg = false,
  block = false,
}: {
  children: ReactNode
  href: string
  variant?: 'primary' | 'ghost'
  size?: 'md' | 'lg'
  external?: boolean
  onLightBg?: boolean
  /** Ocupa todo el ancho del contenedor: los botones de las tarjetas de plan. */
  block?: boolean
}) {
  const primary = variant === 'primary'
  const ghostBorder = onLightBg ? onLight.line : 'rgba(246,245,240,0.16)'
  const ghostText = onLightBg ? onLight.primary : onDark.primary

  return (
    <a
      href={href}
      {...(external && !href.startsWith('#')
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
      className={`${block ? 'flex w-full' : 'inline-flex'} items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-px`}
      style={{
        padding: size === 'lg' ? '14px 26px' : '10px 18px',
        borderRadius: radius.pill,
        backgroundColor: primary ? color.red : 'transparent',
        color: primary ? color.ivory : ghostText,
        border: primary ? '1px solid transparent' : `1px solid ${ghostBorder}`,
        fontSize: size === 'lg' ? 15 : 13.5,
        fontWeight: 700,
        letterSpacing: '-0.01em',
        whiteSpace: 'nowrap',
        boxShadow: primary ? `0 10px 30px -12px ${color.red}` : 'none',
      }}
    >
      {children}
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M3 8h10M9 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  )
}
