import { motion } from 'framer-motion'

import { PLANS } from '../content/site'
import { pricingCopy } from '../content/home'
import { Chapter, DemoCta } from './ChapterKit'
import { palette } from '../lib/tone'
import { Label } from './ui'
import { color, depth, motion as mo, onDark, radius, type } from '../lib/theme'

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
  const c = palette('dark')
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
        transition={{ duration: mo.base, delay: 0.1, ease: mo.ease }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px overflow-hidden"
        style={{
          marginTop: 64,
          borderRadius: radius.lg,
          border: `1px solid ${onDark.lineSoft}`,
          backgroundColor: onDark.lineSoft,
          overflow: 'hidden',
        }}
      >
        {pricingCopy.includes.map(item => (
          <div key={item.title} style={{ padding: '30px 28px', backgroundColor: color.bg }}>
            <div style={{ ...type.h3, fontSize: 15, color: c.primary, marginBottom: 8 }}>
              {item.title}
            </div>
            <div style={{ ...type.body, fontSize: 13.5, color: c.secondary }}>{item.desc}</div>
          </div>
        ))}
      </motion.div>

      {/* Planes. Mismas cifras que /demo: salen de PLANS (site.ts). */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: mo.base, delay: 0.18, ease: mo.ease }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4"
        style={{ marginTop: 16 }}
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
            className="hairline relative"
            style={{
              padding: '30px 28px',
              borderRadius: radius.lg,
              backgroundColor: highlight ? 'rgba(236,60,50,0.05)' : color.surface,
              boxShadow: depth.card,
            }}
          >
            {highlight && (
              <span
                className="absolute"
                style={{
                  top: 30,
                  right: 28,
                  padding: '5px 10px',
                  borderRadius: radius.pill,
                  backgroundColor: 'rgba(236,60,50,0.14)',
                  border: `1px solid rgba(236,60,50,0.3)`,
                }}
              >
                <Label>Recomendado</Label>
              </span>
            )}
            <Label tone="muted" style={{ marginBottom: 14 }}>
              {plan.name}
            </Label>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 10 }}>
              <span style={{ ...type.figure, fontSize: 38, fontWeight: 700, color: c.primary }}>
                {plan.monthly}
              </span>
              <span style={{ fontSize: 13, color: c.tertiary, whiteSpace: 'nowrap' }}>
                USD {plan.monthlyPeriod}
              </span>
            </div>
            <div style={{ ...type.body, color: c.secondary }}>{extra}</div>
            <div style={{ ...type.body, fontSize: 13.5, color: c.tertiary, marginTop: 8 }}>
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
