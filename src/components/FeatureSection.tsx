import type { CSSProperties } from 'react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { color, depth, motion as mo, onDark, radius, space, type } from '../lib/theme'
import { Label, ProductShot } from './ui'

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
  title: string
  description: string
  /**
   * Capturas de la pantalla que ilustra la sección. Para reemplazarlas basta
   * con dejar el archivo nuevo con el mismo nombre en src/assets: no hay que
   * tocar código. Si la lista queda vacía, la sección muestra el hueco con el
   * nombre del archivo que espera, en vez de romperse.
   */
  images?: string[]
  image?: string
  /** Ruta de la app que se ve en la captura. Va en la barra del marco. */
  url?: string
  /** Archivos que espera esta sección, para el hueco cuando todavía no están. */
  expects?: string
  subFeatures: SubFeature[]
}

export function FeatureSection({
  title,
  description,
  images,
  image,
  url,
  expects,
  subFeatures,
}: FeatureSectionData) {
  const [activeSlide, setActiveSlide] = useState(0)
  const [openDetail, setOpenDetail] = useState<SubFeature['detail'] | null>(null)
  const allImages = images || (image ? [image] : [])

  useEffect(() => {
    if (allImages.length <= 1) return
    const id = setInterval(() => setActiveSlide(p => (p + 1) % allImages.length), 11000)
    return () => clearInterval(id)
  }, [allImages.length])

  return (
    <section style={{ padding: `${space.sectionTight} 0` }}>
      <div className="mx-auto px-6" style={{ maxWidth: space.maxWidth }}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: mo.base, ease: mo.ease }}
          className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-6 md:gap-16"
          style={{ paddingBottom: 48 }}
        >
          <h2
            style={{
              ...(type.h2 as CSSProperties),
              color: onDark.primary,
              whiteSpace: 'pre-line',
              textWrap: 'balance',
            }}
          >
            {title}
          </h2>
          <p
            style={{ ...(type.lead as CSSProperties), color: onDark.secondary, alignSelf: 'end' }}
          >
            {description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: mo.ease }}
        >
          {allImages.length > 0 ? (
            <>
              <div className="relative">
                {allImages.map((img, i) => (
                  <div key={i} style={{ display: i === activeSlide ? 'block' : 'none' }}>
                    <ProductShot
                      src={img}
                      alt={title.replace('\n', ' ')}
                      url={url}
                      maxHeight={540}
                    />
                  </div>
                ))}
              </div>

              {allImages.length > 1 && (
                <div className="flex items-center justify-center gap-2" style={{ marginTop: 22 }}>
                  {allImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      aria-label={`Ver captura ${i + 1} de ${allImages.length}`}
                      style={{
                        width: i === activeSlide ? 26 : 6,
                        height: 6,
                        borderRadius: radius.pill,
                        backgroundColor: i === activeSlide ? color.red : 'rgba(246,245,240,0.14)',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        padding: 0,
                      }}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <ProductShot
              alt={title.replace('\n', ' ')}
              url={url}
              path={expects}
              note="Deja el archivo con ese nombre en src/assets y la sección lo toma sola."
            />
          )}
        </motion.div>

        {/* Lo que hay dentro de esta pantalla. Abre el panel de detalle. */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: mo.fast, delay: 0.16, ease: mo.ease }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4"
          style={{ paddingTop: 44 }}
        >
          {subFeatures.map(sf => (
            <button
              key={sf.number}
              onClick={() => sf.detail && setOpenDetail(sf.detail)}
              disabled={!sf.detail}
              className="hairline group text-left transition-all duration-200 hover:-translate-y-0.5"
              style={{
                padding: '22px 24px',
                borderRadius: radius.md,
                backgroundColor: color.surface,
                boxShadow: depth.card,
                cursor: sf.detail ? 'pointer' : 'default',
              }}
            >
              <div className="flex items-center justify-between" style={{ marginBottom: 10 }}>
                <Label tone="muted">{sf.number}</Label>
                {sf.detail && (
                  <span
                    style={{ fontSize: 12, color: onDark.faint }}
                    className="transition-colors group-hover:!text-[#EC3C32]"
                  >
                    Ver detalle →
                  </span>
                )}
              </div>
              <div style={{ ...(type.h3 as CSSProperties), color: onDark.primary }}>{sf.label}</div>
              <p style={{ ...(type.body as CSSProperties), color: onDark.secondary, marginTop: 6 }}>
                {sf.description}
              </p>
            </button>
          ))}
        </motion.div>

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
                    <span
                      style={{ fontSize: 13, color: onDark.tertiary, width: 150, flexShrink: 0 }}
                    >
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
      </div>
    </section>
  )
}
