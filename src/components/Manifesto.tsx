import { motion } from 'framer-motion'

const pillars = [
  {
    fig: 'FIG 0.1',
    title: 'Tu cliente ya te dijo cómo venderle',
    description: 'Cada llamada tiene dolores, objeciones y aspiraciones. Sell-fy las extrae y te entrega el perfil psicológico de tu avatar sin que tengas que analizar nada.',
    svg: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Isometric layered discs — data layers */}
        <ellipse cx="100" cy="150" rx="70" ry="25" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
        <ellipse cx="100" cy="130" rx="70" ry="25" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
        <ellipse cx="100" cy="110" rx="70" ry="25" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
        <ellipse cx="100" cy="90" rx="70" ry="25" stroke="rgba(255,255,255,0.22)" strokeWidth="0.8" />
        <ellipse cx="100" cy="70" rx="70" ry="25" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
        {/* Vertical connectors */}
        <line x1="30" y1="70" x2="30" y2="150" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
        <line x1="170" y1="70" x2="170" y2="150" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
        {/* Top glow dot */}
        <circle cx="100" cy="70" r="3" fill="rgba(220,38,38,0.3)" />
        <circle cx="100" cy="70" r="1.5" fill="rgba(220,38,38,0.6)" />
      </svg>
    ),
  },
  {
    fig: 'FIG 0.2',
    title: 'Sistemas de IA que analizan tu negocio por ti',
    description: 'Score conductual, errores costosos y plan de mejora por closer. Todo automático, en cada llamada, sin que tengas que escuchar una sola.',
    svg: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Isometric cubes — AI blocks */}
        {/* Large cube */}
        <path d="M100 60 L155 90 L155 140 L100 170 L45 140 L45 90 Z" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
        <line x1="100" y1="60" x2="100" y2="170" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
        <line x1="45" y1="90" x2="155" y2="90" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
        {/* Small cube top */}
        <path d="M100 40 L130 55 L130 80 L100 95 L70 80 L70 55 Z" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
        <line x1="100" y1="40" x2="100" y2="95" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
        {/* Medium cube right */}
        <path d="M140 85 L170 100 L170 130 L140 145 L110 130 L110 100 Z" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
        {/* Floating particles */}
        <circle cx="80" cy="50" r="1" fill="rgba(255,255,255,0.2)" />
        <circle cx="130" cy="75" r="1" fill="rgba(255,255,255,0.15)" />
        <circle cx="60" cy="100" r="1" fill="rgba(255,255,255,0.1)" />
      </svg>
    ),
  },
  {
    fig: 'FIG 0.3',
    title: 'De 2K a 7K por closer',
    description: 'No contrates top players — créalos. Estructura + data + entrenamiento basado en auditorías reales = criterio que multiplica resultados.',
    svg: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Isometric ascending bars — growth */}
        {/* Bar 1 — shortest */}
        <path d="M35 160 L60 147 L60 130 L35 143 Z" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
        <path d="M60 147 L85 160 L85 143 L60 130 Z" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
        <path d="M35 143 L60 130 L85 143 L60 156 Z" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
        {/* Bar 2 — medium */}
        <path d="M65 150 L90 137 L90 110 L65 123 Z" stroke="rgba(255,255,255,0.16)" strokeWidth="0.8" />
        <path d="M90 137 L115 150 L115 123 L90 110 Z" stroke="rgba(255,255,255,0.13)" strokeWidth="0.8" />
        <path d="M65 123 L90 110 L115 123 L90 136 Z" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
        {/* Bar 3 — tall */}
        <path d="M95 140 L120 127 L120 85 L95 98 Z" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
        <path d="M120 127 L145 140 L145 98 L120 85 Z" stroke="rgba(255,255,255,0.16)" strokeWidth="0.8" />
        <path d="M95 98 L120 85 L145 98 L120 111 Z" stroke="rgba(255,255,255,0.22)" strokeWidth="0.8" />
        {/* Bar 4 — tallest */}
        <path d="M125 130 L150 117 L150 60 L125 73 Z" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
        <path d="M150 117 L175 130 L175 73 L150 60 Z" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
        <path d="M125 73 L150 60 L175 73 L150 86 Z" stroke="rgba(255,255,255,0.28)" strokeWidth="0.8" />
        {/* Arrow hint */}
        <path d="M50 165 L160 55" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" strokeDasharray="4 4" />
      </svg>
    ),
  },
]

export function Manifesto() {
  return (
    <section style={{ padding: '128px 0' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 96 }}
        >
          <h2
            style={{
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              fontWeight: 510,
              letterSpacing: '-0.022em',
              lineHeight: 1.2,
              maxWidth: 1000,
            }}
          >
            <span style={{ color: '#f7f8f8' }}>Tu equipo vende a ciegas. </span>
            <span style={{ color: '#484b52' }}>
              Menos del 10% opera desde la data real de su negocio.
            </span>
            <br />
            <span style={{ color: '#f7f8f8' }}>Sell-fy </span>
            <span style={{ color: '#484b52' }}>
              convierte cada llamada en inteligencia accionable.
            </span>
          </h2>
        </motion.div>

        {/* 3 pillars */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
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
              {/* Fig label */}
              <div style={{ fontSize: 11, color: '#484b52', fontWeight: 500, marginBottom: 32, fontVariantNumeric: 'tabular-nums' }}>
                {pillar.fig}
              </div>

              {/* SVG illustration */}
              <div style={{ width: '100%', height: 200, marginBottom: 32 }}>
                {pillar.svg}
              </div>

              {/* Title */}
              <h3 style={{ fontSize: 15, fontWeight: 500, color: '#f7f8f8', marginBottom: 8 }}>
                {pillar.title}
              </h3>

              {/* Description */}
              <p style={{ fontSize: 14, lineHeight: '22px', color: '#6b6f76' }}>
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
