import type { ReactNode } from 'react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import {
  atribucion,
  clientes,
  comisiones,
  comparar,
  demoMeta,
  mapa,
  money,
  tablero,
  type CobroViewId,
  type CompareViewId,
  type OfferId,
} from '../content/productDemo'
import { cell, fig } from '../lib/demoStyle'
import { color, motion as mo, onDark, radius, type } from '../lib/theme'
import { Bar, Card, Segmented, TableHead, WindowChrome } from './demoKit'

/**
 * Las cuatro pantallas del capítulo 04, recreadas en código y con algo que
 * tocar en cada una: filtrar por oferta, recorrer los tramos de una llamada,
 * pasar de comisiones a mora, comparar embudos, closers o duplas.
 *
 * Reemplazan a las capturas, que envejecían con cada cambio de la app y
 * mostraban nombres y comentarios de llamadas reales. Acá todo sale de
 * src/content/productDemo.ts, la misma operación de ejemplo que el hero.
 */

export type PanelId = 'clientes' | 'auditoria' | 'cobro' | 'comparar'

/** Ventana de una pantalla: la misma barra de navegador que la demo del hero. */
function PanelWindow({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="bezel" style={{ borderRadius: radius.xl }}>
      <div
        className="relative overflow-hidden text-left"
        style={{ borderRadius: 16, backgroundColor: color.surface }}
      >
        <WindowChrome url={url} badge={demoMeta.badge} />
        <div style={{ padding: 16 }}>{children}</div>
      </div>
    </div>
  )
}

/** Cambio de vista dentro de una pantalla: sale la anterior, entra la nueva. */
function Swap({ id, children }: { id: string; children: ReactNode }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.24, ease: mo.ease }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

const rowBorder = (i: number, total: number) =>
  i < total - 1 ? `1px solid ${onDark.lineSoft}` : undefined

/* ─────────────────────────── 1 · Inteligencia de clientes ─────────────────────────── */

function ClientesPanel() {
  const [offer, setOffer] = useState<OfferId>('todas')
  const current = clientes.offers.find(o => o.id === offer)!

  return (
    <PanelWindow url={clientes.url}>
      <div className="flex flex-wrap items-center justify-between" style={{ gap: 10, marginBottom: 14 }}>
        <Segmented
          id="clientes"
          label={clientes.filterLabel}
          options={clientes.offers}
          value={offer}
          onChange={setOffer}
        />
        <span style={{ fontSize: 11.5, color: onDark.tertiary }}>
          <span style={{ ...fig, color: onDark.primary }}>{current.calls}</span>{' '}
          {clientes.callsLabel}
        </span>
      </div>

      <Swap id={offer}>
        <div className="flex flex-col" style={{ gap: 12 }}>
          {clientes.groups.map(group => (
            <Card key={group.title} title={group.title}>
              <div className="flex flex-col" style={{ gap: 13 }}>
                {group.rows.map((row, i) => {
                  const count = row.counts[offer]
                  return (
                    <div key={row.quote}>
                      <div
                        className="flex items-baseline justify-between"
                        style={{ gap: 12, marginBottom: 7 }}
                      >
                        <span style={{ fontSize: 13, lineHeight: '19px', color: onDark.primary }}>
                          {row.quote}
                        </span>
                        <span className="flex-shrink-0" style={{ fontSize: 11.5, color: onDark.tertiary }}>
                          <span style={{ ...fig, fontSize: 13, color: onDark.primary }}>{count}</span>{' '}
                          {clientes.countLabel}
                        </span>
                      </div>
                      {/* Sobre el total de llamadas de la oferta elegida. */}
                      <Bar
                        pct={(count / current.calls) * 100}
                        tone={group.tone}
                        height={4}
                        delay={i * 0.07}
                      />
                    </div>
                  )
                })}
              </div>
            </Card>
          ))}
        </div>
      </Swap>
    </PanelWindow>
  )
}

/* ─────────────────────────── 2 · Mapa de la llamada ─────────────────────────── */

function AuditoriaPanel() {
  // Arranca en el tramo que hay que revisar, que es por donde se abre una auditoría.
  const [selected, setSelected] = useState('objeciones')
  const segment = mapa.segments.find(s => s.id === selected)!
  const review = (score: number) => score < mapa.reviewBelow

  return (
    <PanelWindow url={mapa.url}>
      <Card title={mapa.title} meta={mapa.meta}>
        {/* Cada tramo ocupa el ancho de lo que duró. */}
        <div
          role="tablist"
          aria-label={mapa.segmentsLabel}
          className="flex"
          style={{ gap: 3, height: 34 }}
        >
          {mapa.segments.map(s => {
            const on = s.id === selected
            const bad = review(s.score)
            return (
              <button
                key={s.id}
                role="tab"
                aria-selected={on}
                aria-label={`${s.label}, ${s.start}, ${s.score} de 100`}
                title={`${s.label} · ${s.start}`}
                onClick={() => setSelected(s.id)}
                className="transition-all duration-200"
                style={{
                  flexGrow: s.seconds,
                  flexBasis: 0,
                  minWidth: 14,
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: 6,
                  backgroundColor: bad
                    ? on
                      ? color.red
                      : 'rgba(236,60,50,0.45)'
                    : on
                      ? 'rgba(246,245,240,0.6)'
                      : 'rgba(246,245,240,0.16)',
                  transform: on ? 'scaleY(1)' : 'scaleY(0.72)',
                }}
              />
            )
          })}
        </div>
        <div
          className="flex justify-between"
          style={{ ...type.figure, fontSize: 10.5, color: onDark.faint, marginTop: 8 }}
        >
          <span>0:00</span>
          <span>46:00</span>
        </div>

        <Swap id={selected}>
          <div
            style={{
              marginTop: 14,
              padding: '13px 14px',
              borderRadius: radius.sm,
              border: `1px solid ${review(segment.score) ? 'rgba(236,60,50,0.26)' : onDark.lineSoft}`,
              backgroundColor: review(segment.score)
                ? 'rgba(236,60,50,0.06)'
                : 'rgba(246,245,240,0.025)',
            }}
          >
            <div className="flex items-baseline justify-between" style={{ gap: 10, marginBottom: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: onDark.primary }}>
                {segment.label}
                <span style={{ ...type.figure, fontWeight: 400, color: onDark.tertiary, marginLeft: 8 }}>
                  {segment.start}
                </span>
              </span>
              <span
                style={{
                  ...fig,
                  fontSize: 14,
                  color: review(segment.score) ? color.red : onDark.primary,
                }}
              >
                {segment.score}
              </span>
            </div>
            <div style={{ fontSize: 13, lineHeight: '20px', color: onDark.secondary }}>
              {segment.note}
            </div>
          </div>
        </Swap>
      </Card>

      <Card title={mapa.planTitle} meta={mapa.planMeta} style={{ marginTop: 12 }}>
        <ol className="flex flex-col" style={{ gap: 11 }}>
          {mapa.plan.map((item, i) => (
            <li key={item.action} className="flex items-start" style={{ gap: 11 }}>
              <span style={{ ...type.figure, fontSize: 11.5, color: onDark.faint, marginTop: 2 }}>
                {i + 1}
              </span>
              <span className="flex-1" style={{ fontSize: 13, lineHeight: '20px', color: onDark.primary }}>
                {item.action}
              </span>
              <span
                className="flex-shrink-0 hidden sm:inline"
                style={{ fontSize: 11, color: onDark.tertiary, marginTop: 2 }}
              >
                {item.impact}
              </span>
            </li>
          ))}
        </ol>
      </Card>
    </PanelWindow>
  )
}

/* ─────────────────────────── 3 · Comisiones y mora ─────────────────────────── */

function CobroPanel() {
  const [view, setView] = useState<CobroViewId>('comisiones')
  const { table, overdue } = comisiones
  const template = 'minmax(0,1.4fr) 1fr 1fr 1fr'
  const total = (key: 'liberada' | 'bloqueada' | 'liquidada') =>
    table.rows.reduce((sum, row) => sum + row[key], 0)

  return (
    <PanelWindow url={comisiones.url}>
      <div style={{ marginBottom: 14 }}>
        <Segmented
          id="cobro"
          label={comisiones.viewLabel}
          options={comisiones.views}
          value={view}
          onChange={setView}
        />
      </div>

      <Swap id={view}>
        {view === 'comisiones' ? (
          <Card title={table.title} meta={table.meta}>
            <TableHead columns={table.columns} template={template} />
            {table.rows.map(row => (
              <div
                key={row.name}
                className="grid items-center"
                style={{
                  gridTemplateColumns: template,
                  gap: 10,
                  padding: '10px 0',
                  borderBottom: `1px solid ${onDark.lineSoft}`,
                }}
              >
                <span className="truncate" style={{ fontSize: 12.5, color: onDark.primary }}>
                  {row.name}
                </span>
                <span style={{ ...cell, fontWeight: 700, color: color.sage }}>
                  {money(row.liberada)}
                </span>
                <span style={cell}>{money(row.bloqueada)}</span>
                <span style={cell}>{money(row.liquidada)}</span>
              </div>
            ))}
            <div
              className="grid items-center"
              style={{ gridTemplateColumns: template, gap: 10, paddingTop: 11 }}
            >
              <span style={{ fontSize: 12, fontWeight: 700, color: onDark.tertiary }}>
                {table.totalLabel}
              </span>
              <span style={{ ...cell, fontWeight: 700, color: onDark.primary }}>
                {money(total('liberada'))}
              </span>
              <span style={{ ...cell, fontWeight: 700, color: onDark.primary }}>
                {money(total('bloqueada'))}
              </span>
              <span style={{ ...cell, fontWeight: 700, color: onDark.primary }}>
                {money(total('liquidada'))}
              </span>
            </div>
            <p style={{ fontSize: 12, lineHeight: '18px', color: onDark.tertiary, marginTop: 14 }}>
              {table.note}
            </p>
          </Card>
        ) : (
          <Card title={overdue.title} meta={overdue.meta}>
            {overdue.rows.map((row, i) => (
              <div
                key={row.name}
                className="flex items-center justify-between"
                style={{
                  gap: 12,
                  padding: '11px 0',
                  borderBottom: rowBorder(i, overdue.rows.length),
                }}
              >
                <span className="min-w-0">
                  <span className="block" style={{ fontSize: 13, fontWeight: 700, color: onDark.primary }}>
                    {row.name}
                  </span>
                  <span className="block" style={{ fontSize: 11.5, color: onDark.tertiary, marginTop: 2 }}>
                    {row.detail}
                  </span>
                </span>
                <span className="flex items-center flex-shrink-0" style={{ gap: 12 }}>
                  {/* El estado va escrito: nunca se distingue sólo por color. */}
                  <span style={{ fontSize: 11, fontWeight: 700, color: color.red }}>
                    {overdue.statusLabel}
                  </span>
                  <span style={{ ...cell, fontWeight: 700, color: onDark.primary, minWidth: 54 }}>
                    {money(row.amount)}
                  </span>
                </span>
              </div>
            ))}
            <p style={{ fontSize: 12, lineHeight: '18px', color: onDark.tertiary, marginTop: 14 }}>
              {overdue.note}
            </p>
          </Card>
        )}
      </Swap>
    </PanelWindow>
  )
}

/* ─────────────────────────── 4 · Comparar ─────────────────────────── */

type CompareRow = { name: string; a: string; b: string; cobrado: number }

/** Las tres vistas, con la misma forma. Embudos y closers salen de los datos del hero. */
const COMPARE_ROWS: Record<CompareViewId, CompareRow[]> = {
  embudos: atribucion.rows.map(r => ({
    name: r.name,
    a: String(r.agendas),
    b: String(r.ventas),
    cobrado: r.cobrado,
  })),
  closers: tablero.closers.rows.map(r => ({
    name: r.name,
    a: String(r.llamadas),
    b: r.cierre,
    cobrado: r.cobrado,
  })),
  duplas: comparar.duplas.map(r => ({
    name: r.name,
    a: String(r.llamadas),
    b: r.cierre,
    cobrado: r.cobrado,
  })),
}

function CompararPanel() {
  const [view, setView] = useState<CompareViewId>('embudos')
  const rows = COMPARE_ROWS[view]
  const max = Math.max(...rows.map(r => r.cobrado))
  const template = 'minmax(0,1.6fr) 0.7fr 0.6fr 1.5fr'

  return (
    <PanelWindow url={comparar.url}>
      <div className="flex flex-wrap items-center justify-between" style={{ gap: 10, marginBottom: 14 }}>
        <Segmented
          id="comparar"
          label={comparar.viewLabel}
          options={comparar.views}
          value={view}
          onChange={setView}
        />
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

      <Swap id={view}>
        <Card>
          <TableHead columns={comparar.columns[view]} template={template} />
          {rows.map((row, i) => (
            <div
              key={row.name}
              className="grid items-center"
              style={{
                gridTemplateColumns: template,
                gap: 10,
                padding: '11px 0',
                borderBottom: rowBorder(i, rows.length),
              }}
            >
              <span className="truncate" style={{ fontSize: 12.5, fontWeight: 700, color: onDark.primary }}>
                {row.name}
              </span>
              <span style={cell}>{row.a}</span>
              <span style={cell}>{row.b}</span>
              <span className="flex items-center justify-end" style={{ gap: 10 }}>
                <span className="hidden sm:block flex-1" style={{ maxWidth: 84 }}>
                  <Bar pct={(row.cobrado / max) * 100} tone="good" height={4} delay={i * 0.07} />
                </span>
                <span style={{ ...cell, fontWeight: 700, color: onDark.primary }}>
                  {money(row.cobrado)}
                </span>
              </span>
            </div>
          ))}
          {/* Qué se midió y sobre qué denominador: lo pide la guía de marca. */}
          <p style={{ fontSize: 12, lineHeight: '18px', color: onDark.tertiary, marginTop: 14 }}>
            {comparar.notes[view]}
          </p>
        </Card>
      </Swap>
    </PanelWindow>
  )
}

const PANELS: Record<PanelId, () => ReactNode> = {
  clientes: ClientesPanel,
  auditoria: AuditoriaPanel,
  cobro: CobroPanel,
  comparar: CompararPanel,
}

/** La pantalla recreada de una sección de producto, con su pie de demo. */
export function ProductPanel({ id }: { id: PanelId }) {
  const Panel = PANELS[id]
  return (
    <div>
      <Panel />
      <p style={{ marginTop: 12, fontSize: 12, color: onDark.faint, textAlign: 'center' }}>
        {demoMeta.touchHint}
      </p>
    </div>
  )
}
