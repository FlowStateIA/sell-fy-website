import { motion } from 'framer-motion'

import { finalCta } from '../content/home'
import { DemoCta } from './ChapterKit'

/**
 * Cierre de la página. Acá va el lema, que es donde la guía de marca lo quiere
 * en piezas institucionales: abriendo o cerrando. Lo pusimos al cierre a
 * propósito — el titular del competidor dice casi lo mismo, y abrir con el
 * nuestro nos haría parecer la copia.
 */
export function FinalCta() {
  return (
    <section style={{ padding: '96px 0 128px' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <h2
            style={{
              fontSize: 'clamp(30px, 4vw, 46px)',
              fontWeight: 510,
              letterSpacing: '-0.022em',
              lineHeight: 1.1,
              color: '#f7f8f8',
              maxWidth: 760,
            }}
          >
            {finalCta.title}
          </h2>
          <p
            style={{
              marginTop: 20,
              fontSize: 17,
              lineHeight: '26px',
              color: '#8a8f98',
              maxWidth: 640,
            }}
          >
            {finalCta.subtitle}
          </p>
          <div style={{ marginTop: 36 }}>
            <DemoCta size="lg" center sub={finalCta.ctaSub} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
