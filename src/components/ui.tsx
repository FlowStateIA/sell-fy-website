import type { CSSProperties, ReactNode } from 'react'

import { color, onDark, onLight, radius, type } from '../lib/theme'

/**
 * Primitivas de interfaz. Todo lo que se repetía a mano en cada componente
 * —botones, rótulos, cápsulas, titulares a dos tonos— vive acá.
 */

/** Rótulo monoespaciado en versalitas. Sobre oscuro va en rojo nodo; sobre marfil, en pizarra. */
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

/** Cápsula del rótulo del hero: un punto rojo encendido y el rótulo, sobre vidrio. */
export function Pill({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2.5 sm:glass"
      style={{ padding: '8px 15px 8px 13px', borderRadius: radius.pill }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: color.red,
          boxShadow: `0 0 12px ${color.red}`,
        }}
      />
      <span style={{ ...(type.label as CSSProperties), color: onDark.secondary }}>{children}</span>
    </span>
  )
}

/**
 * Titular a dos tonos. El texto llega con un salto de línea: la primera línea
 * va en el color principal y lo que sigue un tono abajo, para que el titular
 * se lea en dos tiempos. Sin salto, va entero en el principal.
 */
export function TwoTone({ text, light = false }: { text: string; light?: boolean }) {
  const [first, ...rest] = text.split('\n')
  const c = light ? onLight : onDark
  return (
    <>
      <span style={{ color: c.primary }}>{first}</span>
      {rest.length > 0 && (
        <span style={{ color: light ? 'rgba(18,20,21,0.42)' : onDark.tertiary }}>
          {'\n' + rest.join('\n')}
        </span>
      )}
    </>
  )
}

/**
 * Botón. Dos variantes: la acción principal en rojo nodo con relieve y la
 * secundaria en vidrio. El relieve y los estados están en index.css
 * (.btn-primary, .btn-ghost).
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
  const skin =
    variant === 'primary' ? 'btn-primary' : onLightBg ? 'btn-ghost-light' : 'btn-ghost'

  return (
    <a
      href={href}
      {...(external && !href.startsWith('#')
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
      className={`${skin} ${block ? 'flex w-full' : 'inline-flex'} items-center justify-center gap-2`}
      style={{
        padding: size === 'lg' ? '14px 24px' : '10px 17px',
        borderRadius: radius.md,
        fontSize: size === 'lg' ? 14.5 : 13,
        fontWeight: 700,
        letterSpacing: '-0.015em',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M4.5 11.5l7-7M6 4.5h5.5V10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  )
}
