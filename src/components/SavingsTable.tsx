import type { CSSProperties } from 'react'
import { Fragment } from 'react'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

import { savings } from '../content/home'
import { PLANS } from '../content/site'
import { color, motion as mo, onDark, radius, space, type } from '../lib/theme'
import { Chapter } from './ChapterKit'
import { Label } from './ui'

/**
 * Lo que te ahorras: lo que cuesta armar lo mismo con herramientas sueltas,
 * contra la mensualidad del plan Pro.
 *
 * El total, el ahorro y la lista de fuentes del pie salen de las filas de
 * home.ts y del plan de site.ts. Nada se escribe a mano acá, para que la tabla
 * no pueda decir una cifra y el plan otra.
 */

const usd = (n: number) => `$${n.toLocaleString('en-US')}`
/** '$297' → 297. Los planes guardan el precio como texto. */
const toNumber = (price: string) => Number(price.replace(/[^\d.]/g, ''))

const ROW_H = 58

export function SavingsTable() {
  const total = savings.rows.reduce((sum, row) => sum + row.price, 0)
  const ours = toNumber(PLANS.pro.monthly)
  const monthly = total - ours
  const count = String(savings.rows.length)

  const title = savings.title.replace('{total}', usd(total))
  const footnote = savings.footnote
    .replace('{date}', savings.checkedOn)
    .replace('{setup}', PLANS.pro.setup.replace('$', ''))

  // El pie se parte en «{sources}» para poder enlazar cada proveedor a su página.
  const [noteBefore, noteAfter] = footnote.split('{sources}')

  const cellBorder = `1px solid ${onDark.lineSoft}`

  return (
    <Chapter shadeIndex={1} eyebrow={savings.eyebrow} title={title} body={savings.body}>
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: mo.base, ease: mo.ease }}
        className="relative grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_240px]"
        style={{ marginTop: space.block }}
      >
        {/* Por separado */}
        <div
          className="glass md:!rounded-r-none"
          style={{ borderRadius: radius.xl, padding: '8px clamp(16px, 4vw, 26px) 0' }}
        >
          <div
            className="flex items-center justify-between"
            style={{ height: ROW_H, borderBottom: cellBorder }}
          >
            <Label tone="muted">{savings.headers.tool}</Label>
            <Label tone="muted">{savings.headers.price}</Label>
          </div>

          {savings.rows.map(row => (
            <div
              key={row.name}
              className="flex items-center justify-between"
              style={{ height: ROW_H, borderBottom: cellBorder, gap: 14 }}
            >
              <span className="flex items-center min-w-0" style={{ gap: 14 }}>
                {/* Inicial en vez de logo: son marcas de terceros. */}
                <span
                  className="flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: radius.sm,
                    border: `1px solid ${onDark.line}`,
                    backgroundColor: 'rgba(246,245,240,0.05)',
                    fontSize: 14,
                    fontWeight: 700,
                    color: onDark.secondary,
                  }}
                >
                  {row.name[0]}
                </span>
                <span className="min-w-0 flex flex-wrap items-baseline" style={{ columnGap: 10 }}>
                  <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.02em', color: onDark.primary }}>
                    {row.name}
                  </span>
                  <span style={{ fontSize: 12.5, color: onDark.tertiary }}>{row.does}</span>
                </span>
              </span>
              <span style={{ ...type.figure, fontSize: 15, color: onDark.primary }}>
                {usd(row.price)}
              </span>
            </div>
          ))}

          <div className="flex items-center justify-between" style={{ height: 88 }}>
            <span>
              <span className="block" style={{ fontSize: 15, fontWeight: 700, color: onDark.primary }}>
                {savings.totalLabel}
              </span>
              <span className="block" style={{ fontSize: 12.5, color: onDark.tertiary, marginTop: 3 }}>
                {savings.totalNote.replaceAll('{n}', count)}
              </span>
            </span>
            <span
              style={{
                ...type.figure,
                fontSize: 22,
                color: onDark.secondary,
                textDecoration: 'line-through',
                textDecorationColor: color.red,
              }}
            >
              {usd(total)}
            </span>
          </div>
        </div>

        {/* SellNode: la columna que se levanta por encima de la tabla */}
        <div
          className="glass-accent relative mt-3 md:mt-0 md:-my-4 flex flex-col"
          style={{ borderRadius: radius.xl, padding: '8px 22px 0' }}
        >
          <div
            className="flex items-center justify-center md:mt-4"
            style={{ height: ROW_H, gap: 10, borderBottom: '1px solid rgba(18,20,21,0.14)' }}
          >
            <img
              src="/brand/sellnode-simbolo.svg"
              alt=""
              style={{ height: 15, filter: 'brightness(0)' }}
            />
            <span>
              <span className="block" style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.02em' }}>
                SellNode
              </span>
              <span
                className="block"
                style={{ ...(type.label as CSSProperties), fontSize: 9.5, color: 'rgba(18,20,21,0.62)' }}
              >
                {savings.planLabel}
              </span>
            </span>
          </div>

          {/* En escritorio, un «Incluido» alineado con cada fila. En móvil se
              resume en una línea: repetirlo seis veces sin la tabla al lado no dice nada. */}
          {savings.rows.map(row => (
            <div
              key={row.name}
              className="hidden md:flex items-center justify-center"
              style={{ height: ROW_H, gap: 8, borderBottom: '1px solid rgba(18,20,21,0.14)' }}
            >
              <Check size={15} strokeWidth={2.4} />
              <span style={{ fontSize: 13.5, fontWeight: 700 }}>{savings.included}</span>
            </div>
          ))}
          <div
            className="md:hidden flex items-start justify-center"
            style={{ padding: '16px 0', gap: 8, borderBottom: '1px solid rgba(18,20,21,0.14)' }}
          >
            <Check size={15} strokeWidth={2.4} style={{ flexShrink: 0, marginTop: 3 }} />
            <span style={{ fontSize: 13.5, lineHeight: '21px', fontWeight: 700 }}>
              {savings.rows.map(r => r.does).join(' · ')}
            </span>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center text-center" style={{ minHeight: 88, padding: '14px 0 18px' }}>
            <span style={{ ...type.figure, fontSize: 34, fontWeight: 700, lineHeight: 1 }}>
              {PLANS.pro.monthly}
            </span>
            <span
              style={{
                ...(type.label as CSSProperties),
                fontSize: 9.5,
                color: 'rgba(18,20,21,0.62)',
                marginTop: 9,
              }}
            >
              {savings.ourNote}
            </span>
          </div>
        </div>
      </motion.div>

      {/* El ahorro, calculado */}
      <div className="flex flex-wrap items-baseline" style={{ gap: '6px 16px', marginTop: 44 }}>
        <span style={{ ...(type.h2 as CSSProperties), fontSize: 'clamp(24px, 3vw, 34px)', color: onDark.primary }}>
          {savings.savingLine.replace('{month}', usd(monthly))}
        </span>
        <span style={{ ...type.figure, fontSize: 15, color: onDark.tertiary }}>
          {savings.savingYear.replace('{year}', usd(monthly * 12))}
        </span>
      </div>

      <p style={{ fontSize: 12, lineHeight: '19px', color: onDark.faint, marginTop: 18, maxWidth: 860 }}>
        {noteBefore}
        {savings.rows.map((row, i) => (
          <Fragment key={row.name}>
            <a
              href={row.source}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: onDark.tertiary, textDecoration: 'underline', textUnderlineOffset: 3 }}
            >
              {row.name}
            </a>{' '}
            ({row.plan}){i < savings.rows.length - 1 ? ', ' : ''}
          </Fragment>
        ))}
        {noteAfter}
      </p>
    </Chapter>
  )
}
