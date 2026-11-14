import type { CSSProperties, ReactNode } from 'react'

import { color, depth, onDark, onLight, radius, type } from '../lib/theme'

/**
 * Primitivas de interfaz. Todo lo que se repetía a mano en cada componente
 * —botones, rótulos, marcos de captura— vive acá y sale de los tokens.
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

/**
 * Marco de captura de producto.
 *
 * La barra superior con la dirección hace que la imagen se lea como el producto
 * y no como un dibujo. Si todavía no hay imagen, en lugar de romperse muestra
 * el hueco con el nombre exacto del archivo que hay que dejar, para que
 * reemplazar una captura no obligue a tocar código.
 */
export function ProductShot({
  src,
  alt,
  path,
  url = 'app.sell-fy.app',
  note,
  maxHeight,
}: {
  src?: string
  alt: string
  /** Dónde va el archivo cuando todavía no existe. */
  path?: string
  url?: string
  note?: string
  maxHeight?: number
}) {
  return (
    <figure style={{ margin: 0 }}>
      <div
        className="hairline overflow-hidden"
        style={{
          borderRadius: radius.lg,
          backgroundColor: color.surface,
          boxShadow: depth.card,
        }}
      >
        {/* Barra del navegador */}
        <div
          className="flex items-center gap-3"
          style={{
            padding: '0 14px',
            height: 38,
            borderBottom: `1px solid ${onDark.lineSoft}`,
            backgroundColor: color.surfaceRaised,
          }}
        >
          <span className="flex items-center gap-1.5">
            {[0, 1, 2].map(i => (
              <span
                key={i}
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(246,245,240,0.13)',
                }}
              />
            ))}
          </span>
          <span
            className="flex-1 text-center truncate"
            style={{
              ...type.figure,
              fontSize: 11,
              color: onDark.faint,
            }}
          >
            {url}
          </span>
          <span style={{ width: 42 }} />
        </div>

        {src ? (
          <div style={{ maxHeight, overflow: 'hidden' }}>
            <img
              src={src}
              alt={alt}
              className="w-full"
              style={{ display: 'block', objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
        ) : (
          /* Hueco a la espera de la captura nueva. */
          <div
            className="flex flex-col items-center justify-center text-center"
            style={{
              aspectRatio: '16/9',
              gap: 10,
              padding: 24,
              backgroundImage:
                'repeating-linear-gradient(135deg, rgba(246,245,240,0.025) 0 10px, transparent 10px 20px)',
            }}
          >
            <Label tone="muted">Falta la captura</Label>
            <div style={{ ...type.h3, color: onDark.secondary }}>{alt}</div>
            {path && (
              <code style={{ ...type.figure, fontSize: 12, color: onDark.faint }}>{path}</code>
            )}
          </div>
        )}
      </div>
      {note && (
        <figcaption
          style={{ marginTop: 12, fontSize: 12.5, color: onDark.faint, textAlign: 'center' }}
        >
          {note}
        </figcaption>
      )}
    </figure>
  )
}
