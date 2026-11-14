import { motion } from 'framer-motion'

import dashboardImg from '../assets/dashboard.png'
import { hero } from '../content/home'
import { DemoCta, Eyebrow } from './ChapterKit'

export function Hero() {
  return (
    <section style={{ paddingTop: 140, paddingBottom: 0 }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1
            style={{
              fontSize: 'clamp(38px, 5vw, 60px)',
              fontWeight: 510,
              letterSpacing: '-0.022em',
              lineHeight: 1.05,
              color: '#f7f8f8',
              maxWidth: 820,
            }}
          >
            {hero.headline}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            marginTop: 24,
            fontSize: 17,
            lineHeight: '26px',
            color: '#8a8f98',
            maxWidth: 620,
          }}
        >
          {hero.subheadline}
        </motion.p>

        {/* El único CTA de la página. Antes el hero no tenía ninguno. */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ marginTop: 32 }}
        >
          <DemoCta size="lg" sub={hero.ctaSub} />
        </motion.div>

        {/* Captura del producto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ marginTop: 56 }}
          className="relative"
        >
          <div
            className="overflow-hidden"
            style={{
              borderRadius: 8,
              border: '1px solid rgba(255,255,255,0.08)',
              backgroundColor: '#0d0e10',
            }}
          >
            <img
              src={dashboardImg}
              alt="Tablero de SellNode"
              className="w-full"
              style={{ display: 'block' }}
            />
          </div>
          {/* Degradado al fondo de la página */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: '40%',
              background: 'linear-gradient(to top, #08090a 0%, #08090a 10%, transparent 100%)',
            }}
          />
          {/* Obligatorio por la guía de marca: los datos de ejemplo se rotulan. */}
          <div
            className="absolute left-0 right-0 text-center"
            style={{ bottom: 8, fontSize: 12, color: '#484b52' }}
          >
            {hero.caption}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
