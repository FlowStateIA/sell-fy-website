import { motion } from 'framer-motion'

import { mechanism } from '../content/home'
import { Chapter, ChapterClose } from './ChapterKit'

/**
 * Capítulo 03 — el mecanismo: origen, llamada y cobro reunidos en un punto.
 *
 * Las tres ilustraciones isométricas venían del Manifesto que esta sección
 * reemplaza; acá encajan mejor, porque son exactamente tres piezas que
 * confluyen, que es la idea del nodo del logo.
 */

const figures = [
  // Capas apiladas: el origen, muchas visitas que decantan en una.
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <ellipse cx="100" cy="150" rx="70" ry="25" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
    <ellipse cx="100" cy="130" rx="70" ry="25" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
    <ellipse cx="100" cy="110" rx="70" ry="25" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
    <ellipse cx="100" cy="90" rx="70" ry="25" stroke="rgba(255,255,255,0.22)" strokeWidth="0.8" />
    <ellipse cx="100" cy="70" rx="70" ry="25" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
    <line x1="30" y1="70" x2="30" y2="150" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
    <line x1="170" y1="70" x2="170" y2="150" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
    <circle cx="100" cy="70" r="3" fill="rgba(220,38,38,0.3)" />
    <circle cx="100" cy="70" r="1.5" fill="rgba(220,38,38,0.6)" />
  </svg>,
  // Cubos: la llamada, descompuesta en fases.
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M100 60 L155 90 L155 140 L100 170 L45 140 L45 90 Z" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
    <line x1="100" y1="60" x2="100" y2="170" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
    <line x1="45" y1="90" x2="155" y2="90" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
    <path d="M100 40 L130 55 L130 80 L100 95 L70 80 L70 55 Z" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
    <line x1="100" y1="40" x2="100" y2="95" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
    <path d="M140 85 L170 100 L170 130 L140 145 L110 130 L110 100 Z" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
    <circle cx="80" cy="50" r="1" fill="rgba(255,255,255,0.2)" />
    <circle cx="130" cy="75" r="1" fill="rgba(255,255,255,0.15)" />
    <circle cx="60" cy="100" r="1" fill="rgba(255,255,255,0.1)" />
  </svg>,
  // Barras: el cobro, que entra en partes y se acumula.
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M35 160 L60 147 L60 130 L35 143 Z" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
    <path d="M60 147 L85 160 L85 143 L60 130 Z" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
    <path d="M35 143 L60 130 L85 143 L60 156 Z" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
    <path d="M65 150 L90 137 L90 110 L65 123 Z" stroke="rgba(255,255,255,0.16)" strokeWidth="0.8" />
    <path d="M90 137 L115 150 L115 123 L90 110 Z" stroke="rgba(255,255,255,0.13)" strokeWidth="0.8" />
    <path d="M65 123 L90 110 L115 123 L90 136 Z" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
    <path d="M95 140 L120 127 L120 85 L95 98 Z" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
    <path d="M120 127 L145 140 L145 98 L120 85 Z" stroke="rgba(255,255,255,0.16)" strokeWidth="0.8" />
    <path d="M95 98 L120 85 L145 98 L120 111 Z" stroke="rgba(255,255,255,0.22)" strokeWidth="0.8" />
    <path d="M125 130 L150 117 L150 60 L125 73 Z" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
    <path d="M150 117 L175 130 L175 73 L150 60 Z" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
    <path d="M125 73 L150 60 L175 73 L150 86 Z" stroke="rgba(255,255,255,0.28)" strokeWidth="0.8" />
    <path d="M50 165 L160 55" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" strokeDasharray="4 4" />
  </svg>,
]

export function Mechanism() {
  return (
    <Chapter eyebrow={mechanism.eyebrow} title={mechanism.title} body={mechanism.body}>
      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ marginTop: 72, borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        {mechanism.steps.map((step, i) => (
          <motion.div
            key={step.tag}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            style={{
              padding: '48px 32px 48px 0',
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              paddingLeft: i > 0 ? 32 : 0,
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.07em',
                color: '#e5534b',
                marginBottom: 28,
              }}
            >
              {step.tag}
            </div>
            <div style={{ width: '100%', height: 180, marginBottom: 28 }}>{figures[i]}</div>
            <h3 style={{ fontSize: 15, fontWeight: 550, color: '#f7f8f8', marginBottom: 8 }}>
              {step.title}
            </h3>
            <p style={{ fontSize: 14, lineHeight: '22px', color: '#6b6f76' }}>{step.body}</p>
          </motion.div>
        ))}
      </div>
      <ChapterClose>{mechanism.close}</ChapterClose>
    </Chapter>
  )
}
