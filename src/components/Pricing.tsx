import { motion } from 'framer-motion'

import { PLANS } from '../content/site'
import { pricingCopy } from '../content/home'
import { Chapter, DemoCta } from './ChapterKit'

/**
 * Capítulo 10 — planes.
 *
 * ⚠️ Las cifras NO se tocaron: salen de PLANS (site.ts), que avisa que los
 * checkouts de Whop todavía cobran cantidades distintas a las publicadas.
 * Pendiente de confirmación del dueño antes de cambiarlas.
 *
 * Los botones «Empezar con Standard/Pro» que iban al checkout de Whop salieron
 * de la home: la decisión del 2026-11-13 es que la home tenga un solo CTA, y
 * que sea agendar demo. La compra directa sigue viva en /demo.
 */
export function Pricing() {
  return (
    <Chapter
      id="precios"
      eyebrow={pricingCopy.eyebrow}
      title={pricingCopy.title}
      body={pricingCopy.body}
    >
      {/* Qué incluye */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px overflow-hidden"
        style={{
          marginTop: 56,
          borderRadius: 8,
          border: '1px solid rgba(255,255,255,0.06)',
          backgroundColor: 'rgba(255,255,255,0.04)',
        }}
      >
        {pricingCopy.includes.map(item => (
          <div key={item.title} style={{ padding: '32px', backgroundColor: '#08090a' }}>
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
        style={{ marginTop: 32 }}
      >
        {[
          {
            plan: PLANS.standard,
            highlight: false,
            extra: 'CRM, ventas, cobros, comisiones y auditorías de llamada.',
          },
          {
            plan: PLANS.pro,
            highlight: true,
            extra:
              'Todo Standard, más agendamiento propio, Finanzas y Entrega de Servicio.',
          },
        ].map(({ plan, highlight, extra }) => (
          <div
            key={plan.name}
            style={{
              padding: '28px',
              borderRadius: 8,
              border: highlight
                ? '1px solid rgba(229,83,75,0.35)'
                : '1px solid rgba(255,255,255,0.06)',
              backgroundColor: '#0d0e10',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: '#f7f8f8' }}>{plan.name}</span>
              <span
                className="font-mono"
                style={{ fontSize: 22, fontWeight: 700, color: '#f7f8f8' }}
              >
                {plan.monthly}
              </span>
              <span style={{ fontSize: 13, color: '#6b6f76', whiteSpace: 'nowrap' }}>
                USD {plan.monthlyPeriod}
              </span>
            </div>
            <div style={{ fontSize: 13, lineHeight: '20px', color: '#8a8f98' }}>{extra}</div>
            <div style={{ fontSize: 13, lineHeight: '20px', color: '#6b6f76', marginTop: 4 }}>
              {`Implementación ${plan.setup} USD, incluye tu primer mes. Mensualidad desde el segundo mes.`}
            </div>
          </div>
        ))}
      </motion.div>

      {/* El único CTA, también acá: los planes informan, la demo convierte. */}
      <div style={{ marginTop: 32 }}>
        <DemoCta size="lg" sub="Vemos qué plan corresponde a tu operación en la llamada." />
      </div>
    </Chapter>
  )
}
