import type { CSSProperties, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Pause, Play, type LucideIcon } from 'lucide-react'

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

/**
 * Aviso de «lo que acaba de pasar» que se asoma sobre la ventana de producto:
 * una venta cerrada, una cuota cobrada. Va como hijo directo de AnimatePresence
 * para que también anime al salir. Lo usan el hero y la demo de pestañas.
 */
export function SaleToast({
  title,
  body,
  amount,
}: {
  title: string
  body: string
  /** Cifra a la derecha (en salvia): lo que entró. Opcional. */
  amount?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -14, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.98 }}
      transition={{ duration: 0.4, ease: mo.ease }}
      className="glass flex items-start sale-toast"
      aria-live="polite"
      style={{
        position: 'absolute',
        top: 54,
        right: 12,
        maxWidth: 'min(340px, calc(100% - 24px))',
        gap: 12,
        padding: '12px 14px',
        borderRadius: radius.md,
        backgroundColor: 'rgba(24,26,28,0.92)',
        backdropFilter: 'blur(14px)',
        boxShadow: '0 24px 50px -18px rgba(0,0,0,0.9)',
      }}
    >
      <span
        className="relative flex items-center justify-center flex-shrink-0"
        style={{
          width: 30,
          height: 30,
          borderRadius: radius.sm,
          backgroundColor: 'rgba(236,60,50,0.12)',
          border: '1px solid rgba(236,60,50,0.28)',
        }}
      >
        <img src="/brand/sellnode-simbolo.svg" alt="" style={{ height: 12 }} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block" style={{ fontSize: 12.5, fontWeight: 700, color: onDark.primary }}>
          {title}
        </span>
        <span
          className="block"
          style={{ fontSize: 12, lineHeight: '17px', color: onDark.secondary, marginTop: 2 }}
        >
          {body}
        </span>
      </span>
      {amount && (
        <span
          className="flex-shrink-0"
          style={{ ...type.figure, fontSize: 13, fontWeight: 700, color: color.sage, marginTop: 1 }}
        >
          {amount}
        </span>
      )}
    </motion.div>
  )
}

/**
 * Las pestañas de las demos: un selector con icono, y un botón para pausar el
 * avance automático. Lo usan la demo de /demo y las fotos del hero, para que
 * las dos se manejen igual.
 */
export function DemoTabBar<Id extends string>({
  tabs,
  icons,
  active,
  playing,
  onSelect,
  onTogglePlay,
  layoutId,
  pauseLabel = 'Pausar',
  playLabel = 'Reanudar',
}: {
  tabs: readonly { id: Id; label: string }[]
  icons: Record<Id, LucideIcon>
  active: Id
  playing: boolean
  onSelect: (id: Id) => void
  onTogglePlay: () => void
  /** Distinto por cada barra que haya en pantalla, para que el resaltado no salte entre ellas. */
  layoutId: string
  pauseLabel?: string
  playLabel?: string
}) {
  return (
    <div className="flex justify-center" style={{ marginBottom: 18 }}>
      <div
        className="well flex items-center overflow-x-auto no-scrollbar max-w-full"
        role="tablist"
        aria-label="Pantallas de la demo"
        style={{ gap: 4, padding: 5, borderRadius: 17 }}
      >
        {tabs.map(t => {
          const Icon: LucideIcon = icons[t.id]
          const selected = t.id === active
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={selected}
              aria-label={t.label}
              onClick={() => onSelect(t.id)}
              className="demo-tab relative flex items-center flex-shrink-0 transition-colors duration-200"
              style={{
                borderRadius: 12,
                border: 'none',
                cursor: 'pointer',
                fontSize: 13,
                fontWeight: 700,
                color: selected ? onDark.primary : onDark.tertiary,
                backgroundColor: 'transparent',
              }}
            >
              {selected && (
                <motion.span
                  layoutId={layoutId}
                  className="absolute inset-0"
                  transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                  style={{
                    borderRadius: 12,
                    border: '1px solid rgba(246,245,240,0.12)',
                    backgroundImage:
                      'linear-gradient(180deg, rgba(246,245,240,0.14), rgba(246,245,240,0.05))',
                    boxShadow:
                      'inset 0 1px 0 rgba(255,255,255,0.14), 0 6px 14px -8px rgba(0,0,0,0.8)',
                  }}
                />
              )}
              <Icon
                size={14}
                strokeWidth={2}
                className="relative"
                color={selected ? color.red : 'currentColor'}
              />
              <span className="demo-tab-label relative">{t.label}</span>
            </button>
          )
        })}

        <button
          onClick={onTogglePlay}
          aria-label={playing ? pauseLabel : playLabel}
          title={playing ? pauseLabel : playLabel}
          className="flex items-center justify-center flex-shrink-0"
          style={{
            width: 32,
            height: 32,
            marginLeft: 2,
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            color: onDark.tertiary,
            backgroundColor: 'transparent',
          }}
        >
          {playing ? <Pause size={13} strokeWidth={2.2} /> : <Play size={13} strokeWidth={2.2} />}
        </button>
      </div>
    </div>
  )
}

/**
 * Una captura real de la app dentro de la ventana de la marca. En escritorio es
 * 16:9; en teléfono se cambia por la vista de teléfono de la app (ver .shot-cuadro en index.css). `children` se
 * pinta encima de la imagen: el aviso que «acaba de pasar».
 */
export function ShotWindow({
  src,
  srcMovil,
  alt,
  url,
  badge,
  priority = false,
  children,
}: {
  src: string
  /** La misma pantalla vista en teléfono (la app es responsive): vertical y con letra legible. */
  srcMovil: string
  alt: string
  url: string
  badge: string
  /** El hero carga la imagen ya; las de más abajo, al acercarse. */
  priority?: boolean
  children?: ReactNode
}) {
  return (
    <div className="bezel" style={{ borderRadius: radius.xl }}>
      <div
        className="relative overflow-hidden text-left"
        style={{ borderRadius: 16, backgroundColor: color.surface }}
      >
        <WindowChrome url={url} badge={badge} />
        <div className="relative shot-cuadro" style={{ backgroundColor: '#0B0C0D' }}>
          <picture>
            <source media="(max-width: 639px)" srcSet={srcMovil} />
            <img
              src={src}
              alt={alt}
              width={2200}
              height={1238}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
              className="block w-full h-full"
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </picture>
          {children}
        </div>
      </div>
    </div>
  )
}
