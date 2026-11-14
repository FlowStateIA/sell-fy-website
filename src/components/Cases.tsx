import { motion } from 'framer-motion'

import { cases } from '../content/home'
import { Chapter } from './ChapterKit'
import { palette } from '../lib/tone'
import { color, depth, motion as mo, onDark, radius, type } from '../lib/theme'
import { Label } from './ui'

/**
 * Capítulo 09 — prueba social. Sólo Manstery y CSM, sin cifras de crecimiento,
 * y la nota al pie lo dice en voz alta en vez de disimularlo.
 */
export function Cases() {
  const c = palette('dark')

  return (
    <Chapter eyebrow={cases.eyebrow} title={cases.title}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4" style={{ marginTop: 56 }}>
        {cases.items.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: mo.fast, delay: i * 0.08, ease: mo.ease }}
            className="hairline flex flex-col"
            style={{
              padding: '34px 30px',
              borderRadius: radius.lg,
              backgroundColor: color.surface,
              boxShadow: depth.card,
            }}
          >
            {/* Una barra de acento por tarjeta, en vez de un borde entero */}
            <span
              style={{
                width: 28,
                height: 2,
                borderRadius: 2,
                backgroundColor: color.red,
                marginBottom: 22,
              }}
            />
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: '-0.025em',
                color: c.primary,
                marginBottom: 8,
              }}
            >
              {item.name}
            </div>
            <Label tone="muted" style={{ marginBottom: 20 }}>
              {item.context}
            </Label>
            <p style={{ ...type.body, fontSize: 15, lineHeight: '25px', color: c.secondary }}>
              {item.body}
            </p>
          </motion.div>
        ))}
      </div>
      <p style={{ marginTop: 26, fontSize: 13, color: onDark.faint }}>{cases.note}</p>
    </Chapter>
  )
}
