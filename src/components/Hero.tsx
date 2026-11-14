import { motion } from 'framer-motion'

import { CTA_LABEL, hero } from '../content/home'
import { CALENDLY_URL } from '../content/site'
import { motion as mo, onDark, space, type } from '../lib/theme'
import { ProductDemo } from './ProductDemo'
import { Button, Pill } from './ui'

/**
 * Hero. Centrado y con el titular a dos tonos: la pregunta entera se lee, pero
 * la parte que importa —lo que el dueño no puede contestar hoy— queda en
 * marfil pleno y el resto un tono abajo.
 *
 * El fondo lleva retícula, resplandor del rojo de marca y grano. Las tres capas
 * juntas son lo que le da profundidad; antes era un plano negro.
 */
export function Hero() {
  const [before, after] = hero.headline.split(hero.headlineEmphasis)

  return (
    <section
      className="relative grain"
      style={{ paddingTop: 128, paddingBottom: 24, overflow: 'hidden' }}
    >
      {/* Resplandor del rojo nodo, abierto y bajo */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: 'clamp(360px, 62vh, 640px)',
          background: 'radial-gradient(52% 44% at 50% -6%, rgba(236,60,50,0.13), transparent 70%)',
        }}
      />
      {/* Retícula */}
      <div
        className="absolute inset-x-0 top-0 grid-bg pointer-events-none"
        style={{ height: 'clamp(420px, 70vh, 760px)' }}
      />

      <div
        className="relative mx-auto px-6 flex flex-col items-center text-center"
        style={{ maxWidth: space.maxWidth }}
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: mo.base, ease: mo.ease }}
        >
          <Pill>{hero.eyebrow}</Pill>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: mo.base, delay: 0.08, ease: mo.ease }}
          style={{
            ...type.display,
            marginTop: 28,
            maxWidth: 940,
            color: onDark.secondary,
            textWrap: 'balance',
          }}
        >
          {before}
          <span style={{ color: onDark.primary }}>{hero.headlineEmphasis}</span>
          {after}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: mo.base, delay: 0.16, ease: mo.ease }}
          style={{ ...type.lead, marginTop: 26, maxWidth: 620, color: onDark.secondary }}
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: mo.base, delay: 0.24, ease: mo.ease }}
          className="flex flex-col items-center"
          style={{ marginTop: 34, gap: 14 }}
        >
          <Button href={CALENDLY_URL} size="lg">
            {CTA_LABEL}
          </Button>
          <span style={{ fontSize: 13, color: onDark.tertiary, maxWidth: 440 }}>
            {hero.ctaSub}
          </span>
        </motion.div>

        {/* El producto, vivo: pestañas navegables en vez de una captura. */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32, ease: mo.ease }}
          className="w-full"
          style={{ marginTop: 64 }}
        >
          <ProductDemo />
        </motion.div>
      </div>
    </section>
  )
}
