import type { CSSProperties } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'

import { color, motion as mo, onDark, radius, space, type } from '../lib/theme'
import { ProductPanel, type PanelId } from './ProductPanels'
import { Label } from './ui'

export type SubFeature = {
  number: string
  label: string
  description: string
  detail?: {
    title: string
    body: string
    specs: { label: string; value: string }[]
  }
}

export type FeatureSectionData = {
  /** Nombre del módulo, sobre el titular. */
  kicker: string
  title: string
  description: string
  /** Qué pantalla recreada acompaña a la sección (ver ProductPanels.tsx). */
  panel: PanelId
  subFeatures: SubFeature[]
}

/**
 * Sección de producto: el argumento a un lado y la pantalla, viva, al otro.
 * `flip` alterna el lado para que cuatro secciones seguidas no se lean como
 * una lista.
 */
export function FeatureSection({
  kicker,
  title,
  description,
  panel,
  subFeatures,
  flip = false,
}: FeatureSectionData & { flip?: boolean }) {
  const [openDetail, setOpenDetail] = useState<SubFeature['detail'] | null>(null)

  return (
    <section style={{ padding: `${space.sectionTight} 0` }}>
      <div
        className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-14"
        style={{ maxWidth: space.maxWidth }}
      >
        {/* El argumento */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: mo.base, ease: mo.ease }}
          className={`lg:col-span-5 ${flip ? 'lg:order-2' : ''}`}
        >
          <Label tone="muted">{kicker}</Label>
          <h2
            style={{
              ...(type.h2 as CSSProperties),
              fontSize: 'clamp(26px, 3vw, 38px)',
              color: onDark.primary,
              whiteSpace: 'pre-line',
              textWrap: 'balance',
              marginTop: 16,
            }}
          >
            {title}
          </h2>
          <p
            style={{
              ...(type.lead as CSSProperties),
              fontSize: 16,
              lineHeight: '27px',
              color: onDark.secondary,
              marginTop: 18,
            }}
          >
            {description}
          </p>

          {/* Lo que hay dentro del módulo. Cada fila abre su detalle. */}
          <div style={{ marginTop: 28, borderTop: `1px solid ${onDark.line}` }}>
            {subFeatures.map(sf => (
              <button
                key={sf.number}
                onClick={() => sf.detail && setOpenDetail(sf.detail)}
                disabled={!sf.detail}
                className="group w-full text-left flex items-start transition-colors duration-200"
                style={{
                  gap: 14,
                  padding: '16px 0',
                  border: 'none',
                  borderBottom: `1px solid ${onDark.line}`,
                  backgroundColor: 'transparent',
                  cursor: sf.detail ? 'pointer' : 'default',
                }}
              >
                <span style={{ ...type.figure, fontSize: 11.5, color: onDark.faint, marginTop: 3 }}>
                  {sf.number}
                </span>
                <span className="flex-1 min-w-0">
                  <span
                    className="block"
                    style={{ ...(type.h3 as CSSProperties), fontSize: 15, color: onDark.primary }}
                  >
                    {sf.label}
                  </span>
                  <span
                    className="block"
                    style={{ ...(type.body as CSSProperties), fontSize: 13.5, color: onDark.tertiary, marginTop: 3 }}
                  >
                    {sf.description}
                  </span>
                </span>
                {sf.detail && (
                  <span
                    className="flex-shrink-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:!text-[#EC3C32]"
                    style={{ fontSize: 14, color: onDark.faint, marginTop: 2 }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* La pantalla */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.08, ease: mo.ease }}
          className={`lg:col-span-7 min-w-0 ${flip ? 'lg:order-1' : ''}`}
        >
          <ProductPanel id={panel} />
        </motion.div>
      </div>

      {/* Panel de detalle */}
      {openDetail && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-end"
          style={{ backgroundColor: 'rgba(5,6,7,0.7)', backdropFilter: 'blur(6px)' }}
          onClick={() => setOpenDetail(null)}
        >
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: mo.ease }}
            className="h-full overflow-y-auto"
            style={{
              width: 540,
              maxWidth: '92vw',
              backgroundColor: color.surface,
              borderLeft: `1px solid ${onDark.line}`,
              padding: '48px 40px',
            }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between" style={{ marginBottom: 20 }}>
              <Label>Detalle</Label>
              <button
                onClick={() => setOpenDetail(null)}
                aria-label="Cerrar"
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: radius.pill,
                  border: `1px solid ${onDark.line}`,
                  backgroundColor: 'transparent',
                  color: onDark.secondary,
                  fontSize: 15,
                  cursor: 'pointer',
                }}
              >
                ×
              </button>
            </div>

            <h3
              style={{
                ...(type.h2 as CSSProperties),
                fontSize: 30,
                color: onDark.primary,
                marginBottom: 18,
              }}
            >
              {openDetail.title}
            </h3>
            <p
              style={{
                ...(type.lead as CSSProperties),
                fontSize: 15,
                lineHeight: '25px',
                color: onDark.secondary,
                marginBottom: 36,
              }}
            >
              {openDetail.body}
            </p>

            <div style={{ borderTop: `1px solid ${onDark.line}` }}>
              {openDetail.specs.map(spec => (
                <div
                  key={spec.label}
                  className="flex flex-col sm:flex-row gap-1 sm:gap-8"
                  style={{ padding: '14px 0', borderBottom: `1px solid ${onDark.lineSoft}` }}
                >
                  <span style={{ fontSize: 13, color: onDark.tertiary, width: 150, flexShrink: 0 }}>
                    {spec.label}
                  </span>
                  <span style={{ fontSize: 13.5, lineHeight: '21px', color: onDark.primary }}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}
