import { Check, X } from 'lucide-react'
import { motion } from 'framer-motion'

import { fit } from '../content/home'
import { Chapter } from './ChapterKit'

/**
 * Capítulo 08 — cualificación. Decir para quién NO es también vende: le ahorra
 * la llamada a quien no encaja y le da confianza a quien sí.
 *
 * Color: salvia para lo que encaja, rojo para lo que no. Sin amarillo, que es
 * la regla de color del producto.
 */
export function Fit() {
  const columns = [
    { ...fit.yes, good: true },
    { ...fit.no, good: false },
  ]

  return (
    <Chapter eyebrow={fit.eyebrow} title={fit.title}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ marginTop: 56 }}>
        {columns.map((col, i) => (
          <motion.div
            key={col.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            style={{
              padding: '28px',
              borderRadius: 12,
              border: col.good
                ? '1px solid rgba(132,169,140,0.28)'
                : '1px solid rgba(255,255,255,0.07)',
              backgroundColor: '#0b0c0e',
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: col.good ? '#84a98c' : '#8a8f98',
                marginBottom: 20,
              }}
            >
              {col.title}
            </div>
            <ul className="flex flex-col gap-3">
              {col.items.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0" style={{ marginTop: 2 }}>
                    {col.good ? (
                      <Check size={16} strokeWidth={2} color="#84a98c" />
                    ) : (
                      <X size={16} strokeWidth={2} color="#e5534b" />
                    )}
                  </span>
                  <span style={{ fontSize: 14, lineHeight: '22px', color: '#d0d6e0' }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Chapter>
  )
}
