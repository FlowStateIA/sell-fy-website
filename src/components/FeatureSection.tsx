import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

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
  images?: string[]
  image?: string
  subFeatures: SubFeature[]
}

export function FeatureSection({
  title,
  description,
  images,
  image,
  subFeatures,
}: FeatureSectionData) {
  const [activeSlide, setActiveSlide] = useState(0)
  const [openDetail, setOpenDetail] = useState<SubFeature['detail'] | null>(null)
  const allImages = images || (image ? [image] : [])

  // Auto-slide every 12 seconds
  useEffect(() => {
    if (allImages.length <= 1) return
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % allImages.length)
    }, 12000)
    return () => clearInterval(interval)
  }, [allImages.length])

  return (
    <section id="producto" style={{ padding: '96px 0 128px' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header — 2 column grid: title left, description right */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          style={{ paddingBottom: 48 }}
        >
          <div>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                fontWeight: 510,
                letterSpacing: '-0.022em',
                lineHeight: 1.1,
                color: '#f7f8f8',
                whiteSpace: 'pre-line',
              }}
            >
              {title}
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: '26px', color: '#d0d6e0' }}>
              {description}
            </p>
          </div>
        </motion.div>

        {/* Illustration — carousel with fade or placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          {allImages.length > 0 ? (
            <>
              <div
                className="w-full overflow-hidden relative"
                style={{
                  borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.06)',
                  backgroundColor: '#0d0e10',
                  maxHeight: 560,
                }}
              >
                {/* Images container — capped height, cropped from top */}
                <div className="relative" style={{ maxHeight: 560, overflow: 'hidden' }}>
                  {allImages.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${title.replace('\n', ' ')} ${i + 1}`}
                      className="w-full"
                      style={{
                        display: i === activeSlide ? 'block' : 'none',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        width: '100%',
                      }}
                    />
                  ))}
                </div>

                {/* Bottom gradient fade — Linear style */}
                <div
                  className="absolute bottom-0 left-0 right-0 pointer-events-none"
                  style={{
                    height: '40%',
                    background: 'linear-gradient(to top, #08090a 0%, #08090a 8%, transparent 100%)',
                  }}
                />
              </div>

              {/* Slide indicators */}
              {allImages.length > 1 && (
                <div className="flex items-center justify-center gap-2 mt-6">
                  {allImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      style={{
                        width: i === activeSlide ? 24 : 6,
                        height: 6,
                        borderRadius: 3,
                        backgroundColor: i === activeSlide ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.12)',
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
            <div
              className="w-full overflow-hidden"
              style={{
                aspectRatio: '16/9',
                borderRadius: 8,
                border: '1px solid rgba(255,255,255,0.06)',
                backgroundColor: '#0d0e10',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: 13, color: '#484b52' }}>Espacio para screenshot</span>
            </div>
          )}
        </motion.div>

        {/* Footer — sub-features in 2-column grid */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="hidden md:grid grid-cols-2 gap-8"
          style={{ paddingTop: 48 }}
        >
          {subFeatures.map((sf) => (
            <div
              key={sf.number}
              className="flex items-start gap-3"
              style={{ cursor: sf.detail ? 'pointer' : 'default' }}
              onClick={() => sf.detail && setOpenDetail(sf.detail)}
            >
              <span style={{ fontSize: 12, color: '#484b52', fontWeight: 500, fontVariantNumeric: 'tabular-nums' }}>
                {sf.number}
              </span>
              <div className="flex items-center gap-2">
                <span style={{
                  fontSize: 14,
                  color: '#f7f8f8',
                  fontWeight: 500,
                  borderBottom: sf.detail ? '1px solid rgba(255,255,255,0.15)' : 'none',
                  paddingBottom: 1,
                }}>
                  {sf.label}
                </span>
                {sf.detail && (
                  <span style={{ fontSize: 11, color: '#484b52' }}>+</span>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Detail Modal — Linear style */}
        {openDetail && (
          <div
            className="fixed inset-0 z-50 flex items-start justify-end"
            style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
            onClick={() => setOpenDetail(null)}
          >
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="h-full overflow-y-auto"
              style={{
                width: 520,
                maxWidth: '90vw',
                backgroundColor: '#111214',
                borderLeft: '1px solid rgba(255,255,255,0.08)',
                padding: '48px 40px',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
                <span style={{ fontSize: 11, color: '#484b52', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 500 }}>
                  Tech Specs
                </span>
                <button
                  onClick={() => setOpenDetail(null)}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    border: '1px solid rgba(255,255,255,0.1)',
                    backgroundColor: 'transparent',
                    color: '#6b6f76',
                    fontSize: 14,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  ×
                </button>
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: 32,
                fontWeight: 510,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                color: '#f7f8f8',
                marginBottom: 20,
              }}>
                {openDetail.title}
              </h3>

              {/* Body */}
              <p style={{ fontSize: 15, lineHeight: '24px', color: '#8a8f98', marginBottom: 40 }}>
                {openDetail.body}
              </p>

              {/* Specs table */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: '#f7f8f8', padding: '16px 0 8px' }}>
                  Especificaciones
                </div>
                {openDetail.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="flex gap-8"
                    style={{
                      padding: '12px 0',
                      borderTop: '1px solid rgba(255,255,255,0.04)',
                    }}
                  >
                    <span style={{ fontSize: 13, color: '#6b6f76', width: 160, flexShrink: 0 }}>
                      {spec.label}
                    </span>
                    <span style={{ fontSize: 13, color: '#d0d6e0' }}>
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
