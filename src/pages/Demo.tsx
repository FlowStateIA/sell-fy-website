import { useState } from 'react'
import { motion } from 'framer-motion'

import logoImg from '../assets/logo.png'
import { CALENDLY_URL } from '../content/site'
import {
  LOOM_VIDEO_ID,
  hero,
  metrics,
  forWho,
  beforeAfter,
  includes,
  integrations,
  pricing,
  testimonials,
  guarantee,
  faq,
  finalCta,
} from '../content/demo'

/* ─────────────────────────── Primitivas ─────────────────────────── */

function CtaButton({ label, sub, size = 'md' }: { label: string; sub?: string; size?: 'md' | 'lg' }) {
  return (
    <div className="flex flex-col items-start gap-2">
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition-opacity hover:opacity-90"
        style={{
          padding: size === 'lg' ? '14px 32px' : '10px 24px',
          backgroundColor: '#e6e6e6',
          color: '#08090a',
          borderRadius: 6,
          fontSize: size === 'lg' ? 15 : 13,
          fontWeight: 500,
        }}
      >
        {label}
      </a>
      {sub && <span style={{ fontSize: 12, color: '#6b6f76' }}>{sub}</span>}
    </div>
  )
}

function SectionTitle({ children, max = 800 }: { children: React.ReactNode; max?: number }) {
  return (
    <h2
      style={{
        fontSize: 'clamp(26px, 3.2vw, 38px)',
        fontWeight: 510,
        letterSpacing: '-0.022em',
        lineHeight: 1.15,
        color: '#f7f8f8',
        maxWidth: max,
      }}
    >
      {children}
    </h2>
  )
}

function Section({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <section id={id} style={{ padding: '80px 0' }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="max-w-[1200px] mx-auto px-6"
      >
        {children}
      </motion.div>
    </section>
  )
}

/* ─────────────────────────── Header sin navegación ─────────────────────────── */

function DemoHeader() {
  return (
    <header
      className="fixed top-0 w-full z-50 backdrop-blur-md"
      style={{
        height: 64,
        backgroundColor: 'rgba(8,9,10,0.85)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Sin link a home: en una página de embudo no se ofrecen salidas */}
        <img src={logoImg} alt="Sell-fy" style={{ height: 64 }} />
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-90"
          style={{
            padding: '8px 18px',
            backgroundColor: '#e6e6e6',
            color: '#08090a',
            borderRadius: 6,
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          Agendar demo
        </a>
      </div>
    </header>
  )
}

/* ─────────────────────────── Video ─────────────────────────── */

function VideoEmbed() {
  return (
    <div
      className="w-full overflow-hidden"
      style={{
        borderRadius: 10,
        border: '1px solid rgba(255,255,255,0.08)',
        backgroundColor: '#0d0e10',
        aspectRatio: '16 / 9',
      }}
    >
      {LOOM_VIDEO_ID ? (
        <iframe
          src={`https://www.loom.com/embed/${LOOM_VIDEO_ID}?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`}
          title="Sell-Fy en 5 minutos"
          allowFullScreen
          style={{ width: '100%', height: '100%', border: 0 }}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-3 px-6 text-center">
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: '9px solid transparent',
                borderBottom: '9px solid transparent',
                borderLeft: '14px solid rgba(255,255,255,0.35)',
                marginLeft: 4,
              }}
            />
          </div>
          <span style={{ fontSize: 13, color: '#6b6f76' }}>
            Espacio del video de ventas
          </span>
          <span style={{ fontSize: 12, color: '#484b52', maxWidth: 380 }}>
            Pega el ID de Loom en <code style={{ color: '#8a8f98' }}>LOOM_VIDEO_ID</code> dentro de{' '}
            <code style={{ color: '#8a8f98' }}>src/content/demo.ts</code>
          </span>
        </div>
      )}
    </div>
  )
}

/* ─────────────────────────── FAQ ─────────────────────────── */

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-6 text-left transition-colors"
        style={{
          padding: '20px 0',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          color: '#f7f8f8',
          fontSize: 15,
          fontWeight: 500,
        }}
      >
        <span>{q}</span>
        <span style={{ fontSize: 18, color: '#6b6f76', flexShrink: 0, lineHeight: 1 }}>
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <p style={{ fontSize: 14, lineHeight: '23px', color: '#8a8f98', paddingBottom: 20, maxWidth: 760 }}>
          {a}
        </p>
      )}
    </div>
  )
}

/* ─────────────────────────── Página ─────────────────────────── */

export function Demo() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#08090a', color: '#f7f8f8' }}>
      <DemoHeader />

      {/* Hero + VSL */}
      <section style={{ paddingTop: 120, paddingBottom: 24 }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ maxWidth: 860 }}
          >
            <div
              style={{
                fontSize: 12,
                color: '#8a8f98',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              {hero.eyebrow}
            </div>
            <h1
              style={{
                fontSize: 'clamp(34px, 4.6vw, 56px)',
                fontWeight: 510,
                letterSpacing: '-0.022em',
                lineHeight: 1.05,
                color: '#f7f8f8',
              }}
            >
              {hero.headline}
            </h1>
            <p
              style={{
                marginTop: 22,
                fontSize: 17,
                lineHeight: '27px',
                color: '#8a8f98',
                maxWidth: 680,
              }}
            >
              {hero.subheadline}
            </p>
          </motion.div>

          {/* El video va inmediatamente después del titular */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ marginTop: 48, maxWidth: 980 }}
          >
            <VideoEmbed />
            <div style={{ marginTop: 32 }}>
              <CtaButton label={hero.cta} sub={hero.ctaSub} size="lg" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Métricas — sólo si hay datos reales */}
      {metrics.length > 0 && (
        <Section>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden"
            style={{
              borderRadius: 8,
              border: '1px solid rgba(255,255,255,0.06)',
              backgroundColor: 'rgba(255,255,255,0.04)',
            }}
          >
            {metrics.map((m) => (
              <div key={m.label} style={{ padding: '28px 24px', backgroundColor: '#08090a' }}>
                <div style={{ fontSize: 28, fontWeight: 510, letterSpacing: '-0.02em', color: '#f7f8f8' }}>
                  {m.value}
                </div>
                <div style={{ fontSize: 13, color: '#6b6f76', marginTop: 4 }}>{m.label}</div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* ¿Es para ti? */}
      <Section>
        <SectionTitle>{forWho.title}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ marginTop: 48 }}>
          {[forWho.yes, forWho.no].map((col, idx) => (
            <div
              key={col.title}
              style={{
                padding: 32,
                borderRadius: 8,
                border: '1px solid rgba(255,255,255,0.06)',
                backgroundColor: idx === 0 ? '#0d0e10' : 'transparent',
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: idx === 0 ? '#f7f8f8' : '#8a8f98',
                  marginBottom: 20,
                }}
              >
                {col.title}
              </div>
              <ul className="flex flex-col gap-3">
                {col.items.map((item) => (
                  <li key={item} className="flex gap-3" style={{ fontSize: 14, lineHeight: '22px' }}>
                    <span style={{ color: idx === 0 ? '#dc2626' : '#484b52', flexShrink: 0 }}>
                      {idx === 0 ? '→' : '·'}
                    </span>
                    <span style={{ color: idx === 0 ? '#d0d6e0' : '#6b6f76' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Antes / Después */}
      <Section>
        <SectionTitle max={900}>{beforeAfter.title}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ marginTop: 48 }}>
          {[beforeAfter.before, beforeAfter.after].map((col, idx) => (
            <div
              key={col.title}
              style={{
                padding: 32,
                borderRadius: 8,
                border: '1px solid rgba(255,255,255,0.06)',
                backgroundColor: idx === 1 ? '#0d0e10' : 'transparent',
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: idx === 1 ? '#f7f8f8' : '#6b6f76',
                  marginBottom: 20,
                }}
              >
                {col.title}
              </div>
              <ul className="flex flex-col gap-4">
                {col.items.map((item) => (
                  <li key={item} className="flex gap-3" style={{ fontSize: 14, lineHeight: '22px' }}>
                    <span style={{ color: idx === 1 ? '#f7f8f8' : '#484b52', flexShrink: 0 }}>
                      {idx === 1 ? '✓' : '✕'}
                    </span>
                    <span style={{ color: idx === 1 ? '#d0d6e0' : '#6b6f76' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Qué incluye */}
      <Section>
        <SectionTitle>{includes.title}</SectionTitle>
        <p style={{ fontSize: 17, lineHeight: '26px', color: '#8a8f98', marginTop: 16, maxWidth: 620 }}>
          {includes.subtitle}
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px overflow-hidden"
          style={{
            marginTop: 48,
            borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.06)',
            backgroundColor: 'rgba(255,255,255,0.04)',
          }}
        >
          {includes.items.map((item) => (
            <div key={item.title} style={{ padding: 32, backgroundColor: '#08090a' }}>
              <div style={{ fontSize: 14, fontWeight: 500, color: '#f7f8f8', marginBottom: 8 }}>
                {item.title}
              </div>
              <div style={{ fontSize: 13, lineHeight: '21px', color: '#6b6f76' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Integraciones */}
      <Section>
        <SectionTitle max={620}>{integrations.title}</SectionTitle>
        <div className="flex flex-wrap gap-3" style={{ marginTop: 32 }}>
          {integrations.items.map((name) => (
            <span
              key={name}
              style={{
                padding: '9px 18px',
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.08)',
                fontSize: 13,
                color: '#d0d6e0',
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </Section>

      {/* Precio + ROI */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <SectionTitle max={420}>{pricing.title}</SectionTitle>
            <div className="flex items-baseline gap-2" style={{ marginTop: 28 }}>
              <span style={{ fontSize: 56, fontWeight: 510, letterSpacing: '-0.03em', color: '#f7f8f8', lineHeight: 1 }}>
                {pricing.amount}
              </span>
              <span style={{ fontSize: 15, color: '#6b6f76' }}>{pricing.period}</span>
            </div>
            <p style={{ fontSize: 14, color: '#8a8f98', marginTop: 14 }}>{pricing.note}</p>
            <div style={{ marginTop: 28 }}>
              <CtaButton label={finalCta.cta} sub={hero.ctaSub} />
            </div>
          </div>

          <div
            style={{
              padding: 32,
              borderRadius: 8,
              border: '1px solid rgba(255,255,255,0.06)',
              backgroundColor: '#0d0e10',
            }}
          >
            <div style={{ fontSize: 15, fontWeight: 500, color: '#f7f8f8', marginBottom: 24 }}>
              {pricing.roi.title}
            </div>
            <div className="flex flex-col">
              {pricing.roi.rows.map((row, i) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-6"
                  style={{
                    padding: '14px 0',
                    borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <span style={{ fontSize: 13, lineHeight: '20px', color: '#8a8f98' }}>{row.label}</span>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                      color: row.positive ? '#f7f8f8' : '#6b6f76',
                    }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
            <p
              style={{
                fontSize: 13,
                lineHeight: '21px',
                color: '#d0d6e0',
                marginTop: 24,
                paddingTop: 20,
                borderTop: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {pricing.roi.closing}
            </p>
          </div>
        </div>
      </Section>

      {/* Testimonios — sólo si hay reales */}
      {testimonials.length > 0 && (
        <Section>
          <SectionTitle max={620}>Lo que dicen quienes ya lo usan</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginTop: 48 }}>
            {testimonials.map((t) => (
              <div
                key={t.name}
                style={{
                  padding: 28,
                  borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.06)',
                  backgroundColor: '#0d0e10',
                }}
              >
                <p style={{ fontSize: 14, lineHeight: '23px', color: '#d0d6e0' }}>“{t.quote}”</p>
                <div style={{ marginTop: 20 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: '#f7f8f8' }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: '#6b6f76' }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Garantía — sólo si existe */}
      {guarantee && (
        <Section>
          <div
            style={{
              padding: 40,
              borderRadius: 8,
              border: '1px solid rgba(255,255,255,0.08)',
              backgroundColor: '#0d0e10',
              maxWidth: 760,
            }}
          >
            <div style={{ fontSize: 20, fontWeight: 510, color: '#f7f8f8', marginBottom: 12 }}>
              {guarantee.title}
            </div>
            <p style={{ fontSize: 15, lineHeight: '25px', color: '#8a8f98' }}>{guarantee.body}</p>
          </div>
        </Section>
      )}

      {/* FAQ */}
      <Section>
        <SectionTitle max={620}>Preguntas frecuentes</SectionTitle>
        <div style={{ marginTop: 40, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          {faq.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </Section>

      {/* CTA final */}
      <section style={{ padding: '96px 0 128px' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            style={{
              padding: '56px 40px',
              borderRadius: 10,
              border: '1px solid rgba(255,255,255,0.08)',
              backgroundColor: '#0d0e10',
            }}
          >
            <SectionTitle max={720}>{finalCta.title}</SectionTitle>
            <p style={{ fontSize: 16, lineHeight: '26px', color: '#8a8f98', marginTop: 18, maxWidth: 620 }}>
              {finalCta.subtitle}
            </p>
            <div style={{ marginTop: 32 }}>
              <CtaButton label={finalCta.cta} sub={hero.ctaSub} size="lg" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer mínimo — sólo legal, sin salidas de navegación */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '28px 0' }}>
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <span style={{ fontSize: 12, color: '#484b52' }}>Flow State IA LLC — © 2026</span>
          <div className="flex items-center gap-5">
            <a href="/privacidad" style={{ fontSize: 12, color: '#484b52' }} className="hover:!text-[#8a8f98] transition-colors">
              Política de Privacidad
            </a>
            <a href="/terminos" style={{ fontSize: 12, color: '#484b52' }} className="hover:!text-[#8a8f98] transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
