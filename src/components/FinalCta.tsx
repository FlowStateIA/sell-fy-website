import { motion } from 'framer-motion'

import { finalCta } from '../content/home'
import { DemoCta } from './ChapterKit'
import { motion as mo, onDark, space, type } from '../lib/theme'

/**
 * Cierre de la página. Acá va el lema, que es donde la guía de marca lo quiere
 * en piezas institucionales: abriendo o cerrando. Lo pusimos al cierre a
 * propósito — el titular del competidor dice casi lo mismo, y abrir con el
 * nuestro nos haría parecer la copia.
 */
export function FinalCta() {
  return (
    <section className="relative grain" style={{ padding: `${space.section} 0`, overflow: 'hidden' }}>
      {/* El resplandor vuelve en el cierre: abre y cierra la página igual. */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: 520,
          background:
            'radial-gradient(50% 60% at 50% 100%, rgba(236,60,50,0.14), transparent 70%)',
        }}
      />
      <div className="relative mx-auto px-6" style={{ maxWidth: space.maxWidth }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: mo.base, ease: mo.ease }}
          className="flex flex-col items-center text-center"
        >
          <h2
            style={{
              ...type.h2,
              fontSize: 'clamp(32px, 4.6vw, 56px)',
              color: onDark.primary,
              maxWidth: 820,
              textWrap: 'balance',
            }}
          >
            {finalCta.title}
          </h2>
          <p
            style={{ ...type.lead, marginTop: 22, color: onDark.secondary, maxWidth: 640 }}
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
