import type { CSSProperties, ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion'
import {
  CalendarPlus,
  CircleDollarSign,
  ClipboardCheck,
  LayoutDashboard,
  Phone,
  ReceiptText,
  type LucideIcon,
} from 'lucide-react'

import { journey, money, type JourneyStepId } from '../content/productDemo'
import { cell, fig } from '../lib/demoStyle'
import { color, motion as mo, onDark, radius, type } from '../lib/theme'
import { Bar } from './demoKit'
import { Label } from './ui'

/**
 * El recorrido de una venta, paso a paso. Seis momentos —de la agenda al
 * tablero— que avanzan solos; a la derecha, lo que se ve en la app en cada uno.
 *
 * Es la sección que explica qué hace la herramienta: no describe módulos,
 * sigue una venta. La misma venta de la demo del hero.
 */

const ICONS: Record<JourneyStepId, LucideIcon> = {
  agenda: CalendarPlus,
  llamada: Phone,
  auditoria: ClipboardCheck,
  venta: ReceiptText,
  cobro: CircleDollarSign,
  tablero: LayoutDashboard,
}

/** Cuánto dura cada paso cuando avanza solo. */
const STEP_MS = 5200

/* ─────────────────────────── Piezas de las escenas ─────────────────────────── */

/** Tarjeta de una escena: un fragmento de la app, sobre vidrio. */
function Scene({ title, meta, children }: { title: string; meta?: ReactNode; children: ReactNode }) {
  return (
    <div
      className="glass w-full"
      style={{ borderRadius: radius.md, padding: 18, maxWidth: 440 }}
    >
      <div className="flex items-center justify-between" style={{ gap: 12, marginBottom: 16 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: onDark.primary }}>{title}</span>
        {meta}
      </div>
      {children}
    </div>
  )
}

function Chip({ children, tone = 'neutral' }: { children: ReactNode; tone?: 'neutral' | 'good' }) {
  const good = tone === 'good'
  return (
    <span
      style={{
        padding: '4px 9px',
        borderRadius: radius.pill,
        fontSize: 11,
        fontWeight: 700,
        whiteSpace: 'nowrap',
        color: good ? color.sage : onDark.secondary,
        border: `1px solid ${good ? 'rgba(132,169,140,0.32)' : onDark.line}`,
        backgroundColor: good ? 'rgba(132,169,140,0.1)' : 'rgba(246,245,240,0.03)',
      }}
    >
      {children}
    </span>
  )
}

const rowStyle = (last: boolean): CSSProperties => ({
  gap: 12,
  padding: '10px 0',
  borderBottom: last ? undefined : `1px solid ${onDark.lineSoft}`,
})

/* ─────────────────────────── Escenas ─────────────────────────── */

function SceneAgenda() {
  const d = journey.agenda
  return (
    <Scene title={d.title} meta={<Chip tone="good">{d.status}</Chip>}>
      <div style={{ fontSize: 20, letterSpacing: '-0.03em', color: onDark.primary }}>{d.lead}</div>
      <div style={{ fontSize: 12.5, color: onDark.tertiary, marginTop: 4 }}>{d.when}</div>
      <div className="flex flex-wrap" style={{ gap: 8, marginTop: 18 }}>
        {d.fields.map((f, i) => (
          <motion.span
            key={f.label}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.25 + i * 0.18, ease: mo.ease }}
            className="flex items-center"
            style={{
              gap: 7,
              padding: '7px 11px',
              borderRadius: radius.sm,
              border: `1px solid ${i === 0 ? 'rgba(236,60,50,0.34)' : onDark.line}`,
              backgroundColor: i === 0 ? 'rgba(236,60,50,0.08)' : 'rgba(246,245,240,0.03)',
              fontSize: 12,
            }}
          >
            <span style={{ color: onDark.tertiary }}>{f.label}</span>
            <span style={{ fontWeight: 700, color: onDark.primary }}>{f.value}</span>
          </motion.span>
        ))}
      </div>
    </Scene>
  )
}

function SceneLlamada() {
  const d = journey.llamada
  return (
    <Scene title={d.title}>
      <div style={{ fontSize: 12.5, color: onDark.tertiary, marginTop: -8 }}>{d.meta}</div>
      <Label tone="muted" style={{ marginTop: 20, marginBottom: 10 }}>
        {d.question}
      </Label>
      <div className="grid grid-cols-2" style={{ gap: 8 }}>
        {d.outcomes.map(o => {
          const on = o === d.selected
          return (
            <motion.span
              key={o}
              initial={false}
              animate={on ? { scale: [1, 1.04, 1] } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center"
              style={{
                padding: '10px 8px',
                borderRadius: radius.sm,
                fontSize: 12.5,
                fontWeight: 700,
                color: on ? color.surface : onDark.tertiary,
                border: `1px solid ${on ? 'rgba(255,196,190,0.85)' : onDark.line}`,
                backgroundImage: on ? 'linear-gradient(180deg, #f8776e, #ec3c32)' : undefined,
                backgroundColor: on ? undefined : 'rgba(246,245,240,0.02)',
              }}
            >
              {o}
            </motion.span>
          )
        })}
      </div>
    </Scene>
  )
}

function SceneAuditoria() {
  const d = journey.auditoria
  return (
    <Scene
      title={d.title}
      meta={
        <span style={{ fontSize: 12, color: onDark.tertiary }}>
          <span style={{ ...fig, fontSize: 20, color: onDark.primary }}>{d.score}</span>{' '}
          {d.scoreLabel}
        </span>
      }
    >
      <div className="flex flex-col" style={{ gap: 10 }}>
        {d.phases.map((p, i) => {
          const review = p.value < d.reviewBelow
          return (
            <div
              key={p.label}
              className="grid items-center"
              style={{ gridTemplateColumns: '104px 1fr 26px', gap: 10 }}
            >
              <span style={{ fontSize: 12, color: review ? onDark.primary : onDark.secondary }}>
                {p.label}
              </span>
              <Bar pct={p.value} tone={review ? 'bad' : 'neutral'} height={5} delay={0.15 + i * 0.1} />
              <span style={{ ...cell, fontSize: 12, color: review ? color.red : onDark.primary }}>
                {p.value}
              </span>
            </div>
          )
        })}
      </div>
      <div
        style={{
          marginTop: 16,
          padding: '11px 12px',
          borderRadius: radius.sm,
          border: '1px solid rgba(236,60,50,0.26)',
          backgroundColor: 'rgba(236,60,50,0.07)',
        }}
      >
        <Label style={{ marginBottom: 5 }}>{d.momentLabel}</Label>
        <div style={{ fontSize: 12.5, lineHeight: '19px', color: onDark.primary }}>{d.moment}</div>
      </div>
    </Scene>
  )
}

function SceneVenta() {
  const d = journey.venta
  return (
    <Scene title={d.title} meta={<Chip>{d.offer}</Chip>}>
      <div style={{ ...fig, fontSize: 36, lineHeight: 1.05, color: onDark.primary }}>
        {money(d.amount)}
      </div>
      <div style={{ marginTop: 14, borderTop: `1px solid ${onDark.lineSoft}` }}>
        {d.rows.map((r, i) => (
          <div
            key={r.label}
            className="flex items-baseline justify-between"
            style={rowStyle(i === d.rows.length - 1)}
          >
            <span style={{ fontSize: 12.5, color: onDark.tertiary }}>{r.label}</span>
            <span style={{ fontSize: 12.5, color: onDark.primary, textAlign: 'right' }}>{r.value}</span>
          </div>
        ))}
      </div>
    </Scene>
  )
}

function SceneCobro() {
  const d = journey.cobro
  return (
    <Scene
      title={d.title}
      meta={
        <span style={{ fontSize: 12, color: onDark.tertiary }}>
          {d.collectedLabel}{' '}
          <span style={{ ...fig, color: color.sage }}>{money(d.collected)}</span>
        </span>
      }
    >
      <Bar pct={(d.collected / d.total) * 100} tone="good" delay={0.2} />
      <div style={{ marginTop: 10 }}>
        {d.rows.map((r, i) => (
          <div
            key={r.label}
            className="flex items-center justify-between"
            style={rowStyle(i === d.rows.length - 1)}
          >
            <span style={{ fontSize: 12.5, color: onDark.primary }}>{r.label}</span>
            <span className="flex items-center" style={{ gap: 12 }}>
              <span
                style={{ fontSize: 11, fontWeight: 700, color: r.good ? color.sage : onDark.tertiary }}
              >
                {r.status}
              </span>
              <span style={{ ...cell, fontWeight: 700, color: onDark.primary, minWidth: 52 }}>
                {money(r.amount)}
              </span>
            </span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 12, fontSize: 12, color: onDark.secondary }}>{d.commission}</div>
    </Scene>
  )
}

function SceneTablero() {
  const d = journey.tablero
  return (
    <Scene title={d.title}>
      {d.rows.map((r, i) => (
        <motion.div
          key={r.label}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: 0.2 + i * 0.16, ease: mo.ease }}
          className="flex items-center justify-between"
          style={rowStyle(i === d.rows.length - 1)}
        >
          <span className="min-w-0">
            <span className="block" style={{ fontSize: 11, color: onDark.tertiary }}>
              {r.label}
            </span>
            <span className="block" style={{ fontSize: 13.5, fontWeight: 700, color: onDark.primary }}>
              {r.value}
            </span>
          </span>
          <span style={{ fontSize: 12, color: onDark.secondary, textAlign: 'right' }}>{r.detail}</span>
        </motion.div>
      ))}
    </Scene>
  )
}

const SCENES: Record<JourneyStepId, () => ReactNode> = {
  agenda: SceneAgenda,
  llamada: SceneLlamada,
  auditoria: SceneAuditoria,
  venta: SceneVenta,
  cobro: SceneCobro,
  tablero: SceneTablero,
}

/* ─────────────────────────── El recorrido ─────────────────────────── */

export function SaleJourney() {
  const reduceMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  // Sólo avanza mientras se ve: si no, al llegar ya iría por el paso cuatro.
  const inView = useInView(ref, { margin: '-25% 0px -25% 0px' })
  const [index, setIndex] = useState(0)
  const [auto, setAuto] = useState(true)
  const playing = auto && inView && !reduceMotion

  useEffect(() => {
    if (!playing) return
    const id = setTimeout(() => setIndex(i => (i + 1) % journey.steps.length), STEP_MS)
    return () => clearTimeout(id)
  }, [playing, index])

  // En móvil los pasos van en una fila que se desliza: la fila sigue al paso
  // activo. Se mueve sólo la fila, nunca la página.
  const listRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const list = listRef.current
    const tab = list?.children[index] as HTMLElement | undefined
    if (!list || !tab || list.scrollWidth <= list.clientWidth) return
    list.scrollTo({ left: tab.offsetLeft - 24, behavior: 'smooth' })
  }, [index])

  const step = journey.steps[index]
  const SceneView = SCENES[step.id]

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] gap-4 lg:gap-5"
      style={{ marginTop: 56 }}
    >
      {/* Los pasos */}
      <div
        ref={listRef}
        role="tablist"
        aria-label={journey.stepsLabel}
        className="flex lg:flex-col overflow-x-auto no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0"
        style={{ gap: 6 }}
      >
        {journey.steps.map((s, i) => {
          const Icon = ICONS[s.id]
          const on = i === index
          return (
            <button
              key={s.id}
              role="tab"
              aria-selected={on}
              onClick={() => {
                setIndex(i)
                setAuto(false)
              }}
              className={`relative flex items-center flex-shrink-0 text-left transition-colors duration-200 ${on ? 'glass' : ''}`}
              style={{
                gap: 13,
                padding: '15px 16px',
                borderRadius: radius.md,
                border: on ? undefined : '1px solid transparent',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                overflow: 'hidden',
              }}
            >
              <span
                style={{
                  ...type.figure,
                  fontSize: 11,
                  color: on ? color.red : onDark.faint,
                  width: 16,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <Icon size={16} strokeWidth={1.7} color={on ? onDark.primary : onDark.tertiary} />
              <span
                style={{
                  fontSize: 15,
                  letterSpacing: '-0.02em',
                  whiteSpace: 'nowrap',
                  color: on ? onDark.primary : onDark.tertiary,
                }}
              >
                {s.label}
              </span>

              {/* Avance del paso mientras corre solo */}
              {on && playing && (
                <motion.span
                  key={index}
                  className="absolute left-0 bottom-0"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: STEP_MS / 1000, ease: 'linear' }}
                  style={{ height: 2, backgroundColor: color.red }}
                />
              )}
            </button>
          )
        })}
      </div>

      {/* La escena */}
      <div
        className="glass relative flex flex-col overflow-hidden"
        style={{ borderRadius: radius.xl, minHeight: 440 }}
      >
        {/* Resplandor detrás de la escena */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(60% 55% at 50% 38%, rgba(236,60,50,0.13), transparent 70%)',
          }}
        />
        <div className="relative flex-1 flex items-center justify-center" style={{ padding: 24 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={step.id}
              role="tabpanel"
              initial={{ opacity: 0, y: 14, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: mo.ease }}
              className="w-full flex justify-center"
            >
              <SceneView />
            </motion.div>
          </AnimatePresence>
        </div>

        <div
          className="relative flex items-start"
          style={{
            gap: 12,
            padding: '18px 22px 20px',
            borderTop: `1px solid ${onDark.lineSoft}`,
            backgroundColor: 'rgba(0,0,0,0.18)',
          }}
        >
          <span style={{ ...type.figure, fontSize: 11.5, color: color.red, marginTop: 4 }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <AnimatePresence mode="wait">
            <motion.p
              key={step.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ ...(type.lead as CSSProperties), fontSize: 15, lineHeight: '24px', color: onDark.secondary }}
            >
              {step.caption}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
