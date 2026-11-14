import { motion } from 'framer-motion'

import { cases } from '../content/home'
import { Chapter } from './ChapterKit'

/**
 * Capítulo 09 — prueba social.
 *
 * Sólo Manstery y CSM, que son los dos casos autorizados, y SIN cifras de
 * crecimiento: no hay ninguna confirmada, y la nota al pie lo dice en voz alta
 * en lugar de disimularlo. El competidor directo no tiene ni un testimonio.
 */
export function Cases() {
  return (
    <Chapter eyebrow={cases.eyebrow} title={cases.title}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ marginTop: 56 }}>
        {cases.items.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="flex flex-col"
            style={{
              padding: '32px',
              borderRadius: 12,
              border: '1px solid rgba(255,255,255,0.07)',
              backgroundColor: '#0b0c0e',
            }}
          >
            <div style={{ fontSize: 20, fontWeight: 550, color: '#f7f8f8', marginBottom: 6 }}>
              {item.name}
            </div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: '#6b6f76',
                marginBottom: 20,
              }}
            >
              {item.context}
            </div>
            <p style={{ fontSize: 15, lineHeight: '24px', color: '#d0d6e0' }}>{item.body}</p>
          </motion.div>
        ))}
      </div>
      <p style={{ marginTop: 24, fontSize: 13, color: '#6b6f76' }}>{cases.note}</p>
    </Chapter>
  )
}
