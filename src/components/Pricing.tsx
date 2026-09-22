import { motion } from 'framer-motion'

import { WHOP_CHECKOUT_URL } from '../content/site'

const includes = [
  { title: 'Software completo', desc: 'Ventas, cobros, comisiones, agendas, analítica y auditorías con IA. Sin límites de usuarios.' },
  { title: 'Onboarding en 24h', desc: 'Configuramos tu organización, roles, ofertas, funnels y permisos. Tu equipo opera desde el día 1.' },
  { title: 'Auditorías con Jarvis', desc: 'IA que analiza cada llamada de tu equipo. Score conductual, plan de mejora e inteligencia de clientes.' },
  { title: 'Soporte prioritario', desc: 'WhatsApp directo con nuestro equipo. Respuesta en horas, no en días.' },
  { title: 'Integraciones', desc: 'Google Calendar, CRM y notificaciones automáticas por WhatsApp y email.' },
  { title: 'Actualizaciones continuas', desc: 'Nuevas funcionalidades cada semana. Sin costo adicional, sin migraciones.' },
]

export function Pricing() {
  return (
    <section id="precios" style={{ padding: '96px 0 128px' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          style={{ paddingBottom: 64 }}
        >
          <div>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                fontWeight: 510,
                letterSpacing: '-0.022em',
                lineHeight: 1.1,
                color: '#f7f8f8',
              }}
            >
              {'No vendemos software.\nVendemos ejecución.'}
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: '26px', color: '#d0d6e0' }}>
              Sell-fy no se vende como herramienta suelta. Es parte de una consultoría integral donde configuramos, acompañamos y escalamos tu operación comercial.
            </p>
          </div>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px overflow-hidden"
          style={{
            borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.06)',
            backgroundColor: 'rgba(255,255,255,0.04)',
          }}
        >
          {includes.map((item, i) => (
            <div
              key={i}
              style={{
                padding: '32px',
                backgroundColor: '#08090a',
              }}
            >
              <div style={{ fontSize: 14, fontWeight: 500, color: '#f7f8f8', marginBottom: 8 }}>
                {item.title}
              </div>
              <div style={{ fontSize: 13, lineHeight: '20px', color: '#6b6f76' }}>
                {item.desc}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{
            marginTop: 48,
            padding: '32px',
            borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.06)',
            backgroundColor: '#0d0e10',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
              <span style={{ fontSize: 15, fontWeight: 500, color: '#f7f8f8' }}>Plan Standard</span>
              <span style={{ fontSize: 22, fontWeight: 560, color: '#f7f8f8', letterSpacing: '-0.02em' }}>
                $150
              </span>
              <span style={{ fontSize: 13, color: '#6b6f76' }}>USD / mes</span>
            </div>
            <div style={{ fontSize: 13, color: '#6b6f76' }}>
              Software completo, onboarding y soporte. Sin límites de usuarios. Cancela cuando quieras.
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0">
            <a
              href={WHOP_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors text-center"
              style={{
                padding: '10px 24px',
                backgroundColor: '#e6e6e6',
                color: '#08090a',
                borderRadius: 4,
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              Empezar ahora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
