import { motion } from 'framer-motion'

import dashboardImg from '../assets/dashboard.png'

export function Hero() {
  return (
    <section style={{ paddingTop: 140, paddingBottom: 0 }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 510,
            letterSpacing: '-0.022em',
            lineHeight: 1,
            color: '#f7f8f8',
            maxWidth: 720,
          }}
        >
          Escala tu equipo de ventas desde la data
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            marginTop: 24,
            fontSize: 15,
            lineHeight: '24px',
            color: '#8a8f98',
            maxWidth: 460,
          }}
        >
          IA que audita cada llamada, extrae el perfil psicológico de tu cliente
          y te dice exactamente qué mejorar para cerrar más.
        </motion.p>

        {/* Product screenshot — full width like Linear */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ marginTop: 64 }}
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
              alt="Sell-fy Dashboard"
              className="w-full"
              style={{ display: 'block' }}
            />
          </div>
          {/* Fade to black — Linear style */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: '40%',
              background: 'linear-gradient(to top, #08090a 0%, #08090a 10%, transparent 100%)',
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
