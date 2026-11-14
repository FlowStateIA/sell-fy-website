import { Check, X } from 'lucide-react'
import { motion } from 'framer-motion'

import { fit } from '../content/home'
import { Chapter } from './ChapterKit'
import { palette } from '../lib/tone'
import { Label } from './ui'
import { color, motion as mo, radius, type } from '../lib/theme'

/**
 * Capítulo 08 — cualificación, en marfil. Tercer corte claro de la página, y el
 * que más conviene que sea legible: es el que decide si el visitante agenda.
 *
 * Salvia para lo que encaja, rojo para lo que no. Sin amarillo, que es la regla
 * de color del producto.
 */
export function Fit() {
  const c = palette('light')
  const columns = [
    { ...fit.yes, good: true },
    { ...fit.no, good: false },
  ]

  return (
    <Chapter tone="light" eyebrow={fit.eyebrow} title={fit.title}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4" style={{ marginTop: 56 }}>
        {columns.map((col, i) => (
          <motion.div
            key={col.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: mo.fast, delay: i * 0.08, ease: mo.ease }}
            className="paper"
            style={{
              padding: '30px 28px 32px',
              borderRadius: radius.lg,
              ...(col.good
                ? {
                    borderColor: 'rgba(132,169,140,0.5)',
                    backgroundImage: 'linear-gradient(180deg, #F5F9F5, #EDF4EE)',
                  }
                : {}),
            }}
          >
            <Label style={{ color: col.good ? '#4F7256' : c.secondary, marginBottom: 22 }}>
              {col.title}
            </Label>
            <ul className="flex flex-col gap-3.5">
              {col.items.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0" style={{ marginTop: 3 }}>
                    {col.good ? (
                      <Check size={15} strokeWidth={2.4} color={color.sage} />
                    ) : (
                      <X size={15} strokeWidth={2.4} color={color.red} />
                    )}
                  </span>
                  <span style={{ ...type.body, color: c.primary }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Chapter>
  )
}
