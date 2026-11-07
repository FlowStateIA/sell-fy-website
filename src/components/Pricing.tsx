import { motion } from 'framer-motion'

import { PLANS } from '../content/site'

const includes = [
  {
    title: 'Software completo',
    desc: 'Ventas, cobros, comisiones, agendas, analítica y auditorías con IA. Sin límites de usuarios.',
  },
  {
    title: 'Implementación en 7 días',
    desc: 'Configuramos tu organización, roles, ofertas, funnels y permisos, y entrenamos a tu equipo.',
  },
  {
    title: 'Auditorías con Jarvis',
    desc: 'IA que analiza cada llamada de tu equipo. Score conductual, plan de mejora e inteligencia de clientes.',
  },
  {
    title: 'Soporte prioritario',
    desc: 'WhatsApp directo con nuestro equipo. Respuesta en horas, no en días.',
  },
  {
    title: 'Integraciones',
    desc: 'Google Calendar, CRM y notificaciones automáticas por WhatsApp y email.',
  },
  {
    title: 'Actualizaciones continuas',
    desc: 'Nuevas funcionalidades cada semana. Sin costo adicional, sin migraciones.',
  },
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
              SellNode no se vende como herramienta suelta. Es parte de una consultoría integral
              donde configuramos, acompañamos y escalamos tu operación comercial.
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
              <div style={{ fontSize: 13, lineHeight: '20px', color: '#6b6f76' }}>{item.desc}</div>
            </div>
          ))}
        </motion.div>

        {/* Planes. Mismas cifras que /demo: salen de PLANS (site.ts). */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          style={{ marginTop: 48 }}
        >
          {[
            { plan: PLANS.standard, highlight: false, extra: 'CRM, ventas, cobros, comisiones y auditorías con IA.' },
            { plan: PLANS.pro, highlight: true, extra: 'Todo Standard + booking nativo (tu propio Calendly), Finanzas y Entrega de Servicio.' },
          ].map(({ plan, highlight, extra }) => (
            <div
              key={plan.name}
              className="flex flex-col justify-between gap-6"
              style={{
                padding: '28px',
                borderRadius: 8,
                border: highlight ? '1px solid rgba(229,83,75,0.35)' : '1px solid rgba(255,255,255,0.06)',
                backgroundColor: '#0d0e10',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: '#f7f8f8' }}>{plan.name}</span>
                  <span className="font-mono" style={{ fontSize: 22, fontWeight: 700, color: '#f7f8f8' }}>
                    {plan.monthly}
                  </span>
                  <span style={{ fontSize: 13, color: '#6b6f76', whiteSpace: 'nowrap' }}>USD {plan.monthlyPeriod}</span>
                </div>
                <div style={{ fontSize: 13, lineHeight: '20px', color: '#8a8f98' }}>{extra}</div>
                <div style={{ fontSize: 13, lineHeight: '20px', color: '#6b6f76', marginTop: 4 }}>
                  {`Implementación ${plan.setup} USD, incluye tu primer mes. Mensualidad desde el segundo mes.`}
                </div>
              </div>
              <a
                href={plan.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-90 text-center self-stretch sm:self-start"
                style={{
                  padding: '10px 24px',
                  backgroundColor: highlight ? '#e6e6e6' : 'transparent',
                  color: highlight ? '#08090a' : '#d0d6e0',
                  border: highlight ? 'none' : '1px solid rgba(255,255,255,0.14)',
                  borderRadius: 4,
                  fontSize: 13,
                  fontWeight: 500,
                }}
              >
                Empezar con {plan.name}
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
