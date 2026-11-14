import type { CSSProperties, ReactNode } from 'react'
import { motion } from 'framer-motion'

import { color, motion as mo, onDark, radius, type } from '../lib/theme'
import { toneColor, type DemoTone } from '../lib/demoStyle'
import { Label } from './ui'

/**
 * Piezas con las que se arman las pantallas recreadas: tarjeta, barra, cabecera
 * de tabla, barra de navegador y selector segmentado. Las usan la demo del hero
 * y las cuatro pantallas del capítulo 04, para que todas se vean como la misma
 * aplicación.
 */

export function Card({
  title,
  meta,
  children,
  className,
  style,
}: {
  title?: string
  meta?: string
  children: ReactNode
  className?: string
  style?: CSSProperties
}) {
  return (
    <div
      className={className}
      style={{
        borderRadius: radius.md,
        border: `1px solid ${onDark.lineSoft}`,
        backgroundColor: 'rgba(246,245,240,0.022)',
        padding: 16,
        ...style,
      }}
    >
      {title && (
        <div className="flex items-baseline justify-between gap-3" style={{ marginBottom: 14 }}>
          <span style={{ fontSize: 12.5, fontWeight: 700, color: onDark.primary }}>{title}</span>
          {meta && (
            <span className="truncate" style={{ fontSize: 11, color: onDark.tertiary }}>
              {meta}
            </span>
          )}
        </div>
      )}
      {children}
    </div>
  )
}

/** Barra que crece al aparecer. */
export function Bar({
  pct,
  tone = 'neutral',
  height = 6,
  delay = 0,
}: {
  pct: number
  tone?: DemoTone
  height?: number
  delay?: number
}) {
  return (
    <div
      style={{
        height,
        borderRadius: radius.pill,
        backgroundColor: 'rgba(246,245,240,0.07)',
        overflow: 'hidden',
      }}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.9, delay, ease: mo.ease }}
        style={{
          height: '100%',
          borderRadius: radius.pill,
          backgroundColor: tone === 'neutral' ? 'rgba(246,245,240,0.55)' : toneColor(tone),
        }}
      />
    </div>
  )
}

/**
 * Cabecera de tabla. Las columnas se definen con `template` (en línea) o con
 * `className` cuando la tabla cambia de columnas según el ancho; `mobileHidden`
 * dice qué columnas no se muestran en teléfono.
 */
export function TableHead({
  columns,
  template,
  className = '',
  mobileHidden = [],
}: {
  columns: string[]
  template?: string
  className?: string
  mobileHidden?: number[]
}) {
  return (
    <div
      className={`grid items-center ${className}`}
      style={{
        gridTemplateColumns: template,
        gap: 10,
        paddingBottom: 9,
        borderBottom: `1px solid ${onDark.lineSoft}`,
      }}
    >
      {columns.map((c, i) => (
        <span
          key={c}
          className={mobileHidden.includes(i) ? 'hidden sm:block' : undefined}
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: onDark.faint,
            textAlign: i === 0 ? 'left' : 'right',
          }}
        >
          {c}
        </span>
      ))}
    </div>
  )
}

/** Barra de navegador de la ventana: semáforo, dirección y la marca de demo. */
export function WindowChrome({
  url,
  badge,
  children,
}: {
  url: string
  badge: string
  children?: ReactNode
}) {
  return (
    <div
      className="relative flex items-center gap-3"
      style={{
        padding: '0 16px',
        height: 42,
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
        style={{ ...type.figure, fontSize: 11, color: onDark.faint }}
      >
        {url}
      </span>
      <span className="flex items-center" style={{ gap: 6 }}>
        <span style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: color.sage }} />
        <Label tone="muted">{badge}</Label>
      </span>
      {children}
    </div>
  )
}

/**
 * Selector segmentado. `id` distingue un selector de otro: el resaltado se
 * desliza entre opciones y, sin un nombre propio, saltaría de una pantalla a la
 * de al lado.
 */
export function Segmented<T extends string>({
  id,
  options,
  value,
  onChange,
  label,
}: {
  id: string
  options: { id: T; label: string }[]
  value: T
  onChange: (next: T) => void
  label: string
}) {
  return (
    <div
      role="tablist"
      aria-label={label}
      className="well inline-flex items-center overflow-x-auto no-scrollbar max-w-full"
      style={{ gap: 2, padding: 3, borderRadius: 12 }}
    >
      {options.map(option => {
        const selected = option.id === value
        return (
          <button
            key={option.id}
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(option.id)}
            className="relative flex-shrink-0 transition-colors duration-200"
            style={{
              padding: '6px 12px',
              borderRadius: 9,
              border: 'none',
              cursor: 'pointer',
              fontSize: 12,
              fontWeight: 700,
              whiteSpace: 'nowrap',
              color: selected ? onDark.primary : onDark.tertiary,
              backgroundColor: 'transparent',
            }}
          >
            {selected && (
              <motion.span
                layoutId={`seg-${id}`}
                className="absolute inset-0"
                transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                style={{
                  borderRadius: 9,
                  border: '1px solid rgba(246,245,240,0.12)',
                  backgroundImage:
                    'linear-gradient(180deg, rgba(246,245,240,0.14), rgba(246,245,240,0.05))',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.14)',
                }}
              />
            )}
            <span className="relative">{option.label}</span>
          </button>
        )
      })}
    </div>
  )
}
