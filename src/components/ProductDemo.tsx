import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  CalendarCheck,
  CreditCard,
  GraduationCap,
  LayoutDashboard,
  Pause,
  Phone,
  Play,
  Receipt,
  TrendingUp,
  Wallet,
  type LucideIcon,
} from 'lucide-react'

import {
  atribucion,
  cobros,
  demoMeta,
  demoNav,
  demoTabs,
  llamada,
  money,
  tablero,
  type DemoTabId,
} from '../content/productDemo'
import { cell, fig, toneColor } from '../lib/demoStyle'
import { color, depth, motion as mo, onDark, radius, type } from '../lib/theme'
import { Bar, Card, TableHead, WindowChrome } from './demoKit'
import { Label } from './ui'

/**
 * La demo viva del hero: el producto, navegable, en lugar de una captura.
 *
 * Cuatro pantallas recreadas en código con datos de ejemplo —por eso se ven
 * nítidas a cualquier tamaño, se pueden animar y no dependen de capturas que
 * envejecen cada vez que cambia la app—. Las pestañas avanzan solas y, al
 * entrar a cada una, aparece el aviso de lo que «acaba de pasar» ahí: juntas
 * cuentan una venta desde la agenda hasta la cuota cobrada.
 *
 * Los datos viven en src/content/productDemo.ts.
 */

const TAB_ICONS: Record<DemoTabId, LucideIcon> = {
  tablero: LayoutDashboard,
  atribucion: TrendingUp,
  llamadas: Phone,
  cobros: CreditCard,
}

const NAV_ICONS: Record<string, LucideIcon> = {
  Dashboard: LayoutDashboard,
  Agendas: CalendarCheck,
  Llamadas: Phone,
  Ventas: Receipt,
  Cobros: CreditCard,
  Atribución: TrendingUp,
  Finanzas: Wallet,
  Servicio: GraduationCap,
}

/** Cada cuánto cambia de pestaña cuando nadie la toca. */
const AUTOPLAY_MS = 6500

/* ─────────────────────────── Pantallas ─────────────────────────── */

function PanelTablero() {
  const { revenue, funnel, closers } = tablero
  const cobradoPct = (revenue.cobrado / revenue.vendido) * 100
  const maxFunnel = funnel.rows[0].value
  const maxCobrado = closers.rows[0].cobrado
  const template = 'minmax(0,1.5fr) 0.7fr 0.6fr 0.6fr 1fr'

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
      <Card className="lg:col-span-7">
        <div style={{ fontSize: 11.5, color: onDark.tertiary }}>
          {revenue.title} · {demoMeta.period.toLowerCase()}
        </div>
        <div style={{ ...fig, fontSize: 34, lineHeight: 1.1, color: onDark.primary, marginTop: 6 }}>
          {money(revenue.vendido)}
        </div>

        {/* Vendido partido en lo que entró y lo que falta: la idea de la marca. */}
        <div className="flex" style={{ gap: 4, marginTop: 16, height: 8 }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${cobradoPct}%` }}
            transition={{ duration: 0.9, ease: mo.ease }}
            style={{ borderRadius: radius.pill, backgroundColor: color.sage }}
          />
          <div
            className="flex-1"
            style={{ borderRadius: radius.pill, backgroundColor: 'rgba(246,245,240,0.16)' }}
          />
        </div>
        <div className="flex flex-wrap" style={{ gap: '6px 22px', marginTop: 12 }}>
          {[
            { label: revenue.cobradoLabel, value: revenue.cobrado, dot: color.sage },
            { label: revenue.porCobrarLabel, value: revenue.porCobrar, dot: 'rgba(246,245,240,0.3)' },
          ].map(item => (
            <span key={item.label} className="flex items-center" style={{ gap: 7, fontSize: 12 }}>
              <span
                style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: item.dot }}
              />
              <span style={{ color: onDark.tertiary }}>{item.label}</span>
              <span style={{ ...fig, color: onDark.primary }}>{money(item.value)}</span>
            </span>
          ))}
        </div>

        <div
          className="grid grid-cols-2"
          style={{ gap: 12, marginTop: 16, paddingTop: 14, borderTop: `1px solid ${onDark.lineSoft}` }}
        >
          {revenue.stats.map(s => (
            <div key={s.label}>
              <div style={{ fontSize: 11, color: onDark.tertiary }}>{s.label}</div>
              <div style={{ ...fig, fontSize: 17, color: onDark.primary, marginTop: 3 }}>
                {s.value}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="lg:col-span-5" title={funnel.title}>
        <div className="flex flex-col" style={{ gap: 15 }}>
          {funnel.rows.map((row, i) => (
            <div key={row.label}>
              <div className="flex items-baseline justify-between" style={{ marginBottom: 7 }}>
                <span style={{ fontSize: 12, color: onDark.secondary }}>{row.label}</span>
                <span className="flex items-baseline" style={{ gap: 8 }}>
                  {row.note && (
                    <span style={{ fontSize: 11, color: onDark.tertiary }}>{row.note}</span>
                  )}
                  <span style={{ ...fig, fontSize: 15, color: onDark.primary }}>{row.value}</span>
                </span>
              </div>
              <Bar
                pct={(row.value / maxFunnel) * 100}
                tone={i === funnel.rows.length - 1 ? 'good' : 'neutral'}
                delay={i * 0.12}
              />
            </div>
          ))}
        </div>
      </Card>

      <Card className="lg:col-span-12" title={closers.title} meta={closers.meta}>
        <TableHead columns={closers.columns} template={template} />
        {closers.rows.map((row, i) => (
          <div
            key={row.name}
            className="grid items-center"
            style={{
              gridTemplateColumns: template,
              gap: 10,
              padding: '9px 0',
              borderBottom:
                i < closers.rows.length - 1 ? `1px solid ${onDark.lineSoft}` : undefined,
            }}
          >
            <span className="flex items-center min-w-0" style={{ gap: 9 }}>
              <span style={{ ...type.figure, fontSize: 11, color: onDark.faint, width: 12 }}>
                {i + 1}
              </span>
              <span className="truncate" style={{ fontSize: 12.5, color: onDark.primary }}>
                {row.name}
              </span>
            </span>
            <span style={cell}>{row.llamadas}</span>
            <span style={cell}>{row.ventas}</span>
            <span style={cell}>{row.cierre}</span>
            <span className="flex items-center justify-end" style={{ gap: 10 }}>
              <span className="hidden sm:block flex-1" style={{ maxWidth: 70 }}>
                <Bar pct={(row.cobrado / maxCobrado) * 100} tone="good" height={4} delay={i * 0.08} />
              </span>
              <span style={{ ...cell, fontWeight: 700, color: onDark.primary }}>
                {money(row.cobrado)}
              </span>
            </span>
          </div>
        ))}
      </Card>
    </div>
  )
}

function PanelAtribucion() {
  const maxCobrado = Math.max(...atribucion.rows.map(r => r.cobrado))
  const template = 'minmax(0,1.3fr) 0.9fr 0.7fr 0.6fr 1.3fr 0.7fr'

  return (
    <div className="flex flex-col" style={{ gap: 12 }}>
      <Card title={atribucion.title} meta={atribucion.meta}>
        {/* Móvil: sólo lo que hace falta para leer la decisión —agendas y cobro—.
            La tabla entera no cabe y, con scroll, la columna que importa quedaba afuera. */}
        <div className="sm:hidden flex flex-col" style={{ gap: 14 }}>
          {atribucion.rows.map((row, i) => (
            <div key={row.name}>
              <div className="flex items-baseline justify-between" style={{ marginBottom: 7 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: onDark.primary }}>
                  {row.name}
                  <span style={{ fontWeight: 400, color: onDark.tertiary, marginLeft: 8 }}>
                    {row.agendas} agendas
                  </span>
                </span>
                <span style={{ ...cell, fontWeight: 700, color: onDark.primary }}>
                  {money(row.cobrado)}
                </span>
              </div>
              <Bar pct={(row.cobrado / maxCobrado) * 100} tone="good" height={5} delay={i * 0.12} />
            </div>
          ))}
        </div>

        <div className="hidden sm:block">
          <div>
            <TableHead columns={atribucion.columns} template={template} />
            {atribucion.rows.map((row, i) => (
              <div
                key={row.name}
                className="grid items-center"
                style={{
                  gridTemplateColumns: template,
                  gap: 10,
                  padding: '14px 0',
                  borderBottom:
                    i < atribucion.rows.length - 1 ? `1px solid ${onDark.lineSoft}` : undefined,
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 700, color: onDark.primary }}>
                  {row.name}
                </span>
                <span style={cell}>{row.inversion ? money(row.inversion) : '—'}</span>
                <span style={cell}>{row.agendas}</span>
                <span style={cell}>{row.ventas}</span>
                <span className="flex items-center justify-end" style={{ gap: 10 }}>
                  <span className="flex-1" style={{ maxWidth: 90 }}>
                    <Bar
                      pct={(row.cobrado / maxCobrado) * 100}
                      tone="good"
                      height={5}
                      delay={i * 0.12}
                    />
                  </span>
                  <span style={{ ...cell, fontWeight: 700, color: onDark.primary }}>
                    {money(row.cobrado)}
                  </span>
                </span>
                <span style={{ ...cell, color: i === 0 ? color.sage : onDark.secondary }}>
                  {row.retorno}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Lo que la tabla permite decidir. La marca pide cerrar con una decisión. */}
      <Card style={{ backgroundColor: 'rgba(132,169,140,0.07)', borderColor: 'rgba(132,169,140,0.22)' }}>
        <Label style={{ color: color.sage, marginBottom: 8 }}>{atribucion.insightLabel}</Label>
        <div style={{ fontSize: 14.5, lineHeight: '22px', color: onDark.primary }}>
          {atribucion.insight}
        </div>
      </Card>
    </div>
  )
}

function ScoreRing({ value }: { value: number }) {
  const r = 42
  const circumference = 2 * Math.PI * r
  return (
    <div className="relative flex-shrink-0" style={{ width: 108, height: 108 }}>
      <svg viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(246,245,240,0.08)" strokeWidth="6" />
        <motion.circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke={color.sage}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference * (1 - value / 100) }}
          transition={{ duration: 1.1, ease: mo.ease }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span style={{ ...fig, fontSize: 30, lineHeight: 1, color: onDark.primary }}>{value}</span>
        <span style={{ fontSize: 10.5, color: onDark.tertiary, marginTop: 3 }}>
          {llamada.scoreLabel}
        </span>
      </div>
    </div>
  )
}

function PanelLlamada() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
      <div className="lg:col-span-5 flex flex-col" style={{ gap: 12 }}>
        <Card title={llamada.title}>
          <div className="flex items-center" style={{ gap: 18 }}>
            <ScoreRing value={llamada.score} />
            <div className="min-w-0">
              <div style={{ fontSize: 17, fontWeight: 700, color: onDark.primary }}>
                {llamada.lead}
              </div>
              <div style={{ fontSize: 12, lineHeight: '18px', color: onDark.tertiary, marginTop: 4 }}>
                {llamada.meta}
              </div>
            </div>
          </div>
        </Card>

        {/* Señala un momento revisable; no juzga al closer. */}
        <Card style={{ backgroundColor: 'rgba(236,60,50,0.06)', borderColor: 'rgba(236,60,50,0.24)' }}>
          <Label style={{ marginBottom: 8 }}>{llamada.momentLabel}</Label>
          <div style={{ fontSize: 13.5, lineHeight: '21px', color: onDark.primary }}>
            {llamada.moment}
          </div>
        </Card>
      </div>

      <Card className="lg:col-span-7" title={llamada.phasesTitle}>
        <div className="flex flex-col" style={{ gap: 11 }}>
          {llamada.phases.map((phase, i) => {
            const review = phase.value < llamada.reviewBelow
            return (
              <div
                key={phase.label}
                className="grid items-center"
                style={{ gridTemplateColumns: '112px 1fr 30px', gap: 12 }}
              >
                <span style={{ fontSize: 12, color: review ? onDark.primary : onDark.secondary }}>
                  {phase.label}
                </span>
                <Bar pct={phase.value} tone={review ? 'bad' : 'neutral'} delay={i * 0.06} />
                <span style={{ ...cell, color: review ? color.red : onDark.primary }}>
                  {phase.value}
                </span>
              </div>
            )
          })}
        </div>
      </Card>
    </div>
  )
}

function PanelCobros() {
  const { sale, portfolio, commission } = cobros
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
      <Card className="lg:col-span-7" title={sale.title} meta={sale.meta}>
        <div className="grid grid-cols-3" style={{ gap: 10 }}>
          {sale.totals.map(t => (
            <div key={t.label}>
              <div style={{ fontSize: 11, color: onDark.tertiary }}>{t.label}</div>
              <div style={{ ...fig, fontSize: 21, color: toneColor(t.tone), marginTop: 4 }}>
                {money(t.value)}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 18, borderTop: `1px solid ${onDark.lineSoft}` }}>
          {sale.installments.map((q, i) => (
            <div
              key={q.label}
              className="flex items-center justify-between"
              style={{
                gap: 12,
                padding: '11px 0',
                borderBottom:
                  i < sale.installments.length - 1 ? `1px solid ${onDark.lineSoft}` : undefined,
              }}
            >
              <span className="flex items-center min-w-0" style={{ gap: 10 }}>
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    flexShrink: 0,
                    backgroundColor: q.tone === 'good' ? color.sage : 'rgba(246,245,240,0.25)',
                  }}
                />
                <span style={{ fontSize: 12.5, color: onDark.primary }}>{q.label}</span>
                <span style={{ fontSize: 11.5, color: onDark.tertiary }}>{q.date}</span>
              </span>
              <span className="flex items-center" style={{ gap: 12 }}>
                {/* El estado va escrito: nunca se distingue sólo por color. */}
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: q.tone === 'good' ? color.sage : onDark.tertiary,
                  }}
                >
                  {q.status}
                </span>
                <span style={{ ...cell, fontWeight: 700, color: onDark.primary, minWidth: 54 }}>
                  {money(q.amount)}
                </span>
              </span>
            </div>
          ))}
        </div>
      </Card>

      <div className="lg:col-span-5 flex flex-col" style={{ gap: 12 }}>
        <Card title={portfolio.title}>
          <div className="flex flex-col" style={{ gap: 10 }}>
            {portfolio.rows.map(row => (
              <div key={row.label} className="flex items-baseline justify-between">
                <span style={{ fontSize: 12.5, color: onDark.secondary }}>{row.label}</span>
                <span style={{ ...fig, fontSize: 15, color: toneColor(row.tone) }}>
                  {money(row.value)}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card title={commission.title}>
          <Bar pct={(commission.released / commission.total) * 100} tone="good" />
          <div style={{ fontSize: 12.5, lineHeight: '19px', color: onDark.secondary, marginTop: 10 }}>
            {commission.body}
          </div>
        </Card>
      </div>
    </div>
  )
}

const PANELS: Record<DemoTabId, () => ReactNode> = {
  tablero: PanelTablero,
  atribucion: PanelAtribucion,
  llamadas: PanelLlamada,
  cobros: PanelCobros,
}

/* ─────────────────────────── La demo ─────────────────────────── */

export function ProductDemo() {
  const reduceMotion = useReducedMotion()
  const [active, setActive] = useState<DemoTabId>('tablero')
  // Corre sola hasta que alguien elige una pestaña o la pausa. Quien pidió
  // menos movimiento la recibe quieta desde el principio.
  const [playing, setPlaying] = useState(!reduceMotion)
  const [toastVisible, setToastVisible] = useState(false)

  const index = demoTabs.findIndex(t => t.id === active)
  const tab = demoTabs[index]
  const Panel = PANELS[active]

  useEffect(() => {
    if (!playing) return
    const id = setTimeout(() => {
      setActive(demoTabs[(index + 1) % demoTabs.length].id)
    }, AUTOPLAY_MS)
    return () => clearTimeout(id)
  }, [playing, index])

  // El aviso entra un momento después de cambiar de pantalla y se va solo.
  useEffect(() => {
    const show = setTimeout(() => setToastVisible(true), 900)
    const hide = setTimeout(() => setToastVisible(false), 5200)
    return () => {
      clearTimeout(show)
      clearTimeout(hide)
      setToastVisible(false)
    }
  }, [active])

  return (
    <div>
      {/* Pestañas */}
      <div className="flex justify-center" style={{ marginBottom: 18 }}>
        <div
          className="hairline flex items-center overflow-x-auto no-scrollbar max-w-full"
          role="tablist"
          aria-label="Pantallas de la demo"
          style={{
            gap: 4,
            padding: 5,
            borderRadius: radius.pill,
            backgroundColor: 'rgba(246,245,240,0.035)',
            backdropFilter: 'blur(12px)',
          }}
        >
          {demoTabs.map(t => {
            const Icon = TAB_ICONS[t.id]
            const selected = t.id === active
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={selected}
                onClick={() => {
                  setActive(t.id)
                  setPlaying(false)
                }}
                className="relative flex items-center flex-shrink-0 transition-colors duration-200"
                style={{
                  gap: 8,
                  padding: '9px 16px',
                  borderRadius: radius.pill,
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
                    layoutId="demo-tab"
                    className="absolute inset-0"
                    transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                    style={{
                      borderRadius: radius.pill,
                      backgroundColor: 'rgba(246,245,240,0.09)',
                      boxShadow: 'inset 0 1px 0 rgba(246,245,240,0.12)',
                    }}
                  />
                )}
                <Icon
                  size={14}
                  strokeWidth={2}
                  className="relative"
                  color={selected ? color.red : 'currentColor'}
                />
                <span className="relative">{t.label}</span>
              </button>
            )
          })}

          <button
            onClick={() => setPlaying(p => !p)}
            aria-label={playing ? demoMeta.pause : demoMeta.play}
            title={playing ? demoMeta.pause : demoMeta.play}
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

      {/* Ventana */}
      <div
        className="hairline relative overflow-hidden text-left"
        style={{
          borderRadius: radius.xl,
          backgroundColor: color.surface,
          boxShadow: `${depth.card}, 0 60px 120px -60px rgba(236,60,50,0.28)`,
        }}
      >
        <WindowChrome url={tab.url} badge={demoMeta.badge}>
          {/* Avance de la pestaña mientras corre sola */}
          {playing && (
            <motion.span
              key={active}
              className="absolute left-0 bottom-0"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: AUTOPLAY_MS / 1000, ease: 'linear' }}
              style={{ height: 1, backgroundColor: color.red, opacity: 0.7 }}
            />
          )}
        </WindowChrome>

        <div className="flex">
          {/* Menú lateral */}
          <aside
            className="hidden md:flex flex-col flex-shrink-0"
            style={{
              width: 178,
              padding: '16px 10px',
              gap: 2,
              borderRight: `1px solid ${onDark.lineSoft}`,
            }}
          >
            <div
              className="flex items-center"
              style={{ gap: 9, padding: '4px 8px 14px' }}
            >
              <img src="/brand/sellnode-simbolo.svg" alt="" style={{ height: 15 }} />
              <span className="truncate" style={{ fontSize: 12, fontWeight: 700, color: onDark.primary }}>
                {demoMeta.org}
              </span>
            </div>
            {demoNav.map(item => {
              const Icon = NAV_ICONS[item.label]
              const on = item.tab === active
              return (
                <div
                  key={item.label}
                  className="flex items-center transition-colors duration-300"
                  style={{
                    gap: 9,
                    padding: '7px 8px',
                    borderRadius: radius.sm,
                    fontSize: 12.5,
                    fontWeight: on ? 700 : 400,
                    color: on ? onDark.primary : onDark.tertiary,
                    backgroundColor: on ? 'rgba(246,245,240,0.07)' : 'transparent',
                  }}
                >
                  <Icon size={14} strokeWidth={1.8} color={on ? color.red : 'currentColor'} />
                  {item.label}
                </div>
              )
            })}
          </aside>

          {/* Pantalla */}
          <div className="flex-1 min-w-0" style={{ padding: 16 }}>
            <div
              className="flex items-center justify-between"
              style={{ marginBottom: 14, gap: 12 }}
            >
              <span style={{ fontSize: 15, fontWeight: 700, color: onDark.primary }}>
                {tab.label}
              </span>
              <span
                style={{
                  padding: '4px 10px',
                  borderRadius: radius.pill,
                  border: `1px solid ${onDark.line}`,
                  fontSize: 11,
                  color: onDark.secondary,
                }}
              >
                {demoMeta.period}
              </span>
            </div>

            <div className="lg:min-h-[392px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  role="tabpanel"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.28, ease: mo.ease }}
                >
                  <Panel />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Lo que acaba de pasar en esta pantalla */}
        <AnimatePresence>
          {toastVisible && (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: -14, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.4, ease: mo.ease }}
              className="hairline flex items-start"
              aria-live="polite"
              style={{
                position: 'absolute',
                top: 54,
                right: 12,
                maxWidth: 'min(320px, calc(100% - 24px))',
                gap: 12,
                padding: '12px 14px',
                borderRadius: radius.md,
                backgroundColor: 'rgba(24,26,28,0.92)',
                backdropFilter: 'blur(14px)',
                boxShadow: '0 24px 50px -18px rgba(0,0,0,0.9)',
              }}
            >
              <span
                className="flex items-center justify-center flex-shrink-0"
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
              <span className="min-w-0">
                <span className="block" style={{ fontSize: 12.5, fontWeight: 700, color: onDark.primary }}>
                  {tab.toast.title}
                </span>
                <span
                  className="block"
                  style={{ fontSize: 12, lineHeight: '17px', color: onDark.secondary, marginTop: 2 }}
                >
                  {tab.toast.body}
                </span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p style={{ marginTop: 16, fontSize: 12.5, color: onDark.faint, textAlign: 'center' }}>
        {demoMeta.caption}
      </p>
    </div>
  )
}
