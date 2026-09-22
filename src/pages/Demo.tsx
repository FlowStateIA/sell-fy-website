import { motion } from 'framer-motion'
import { Puzzle, Users, Headphones, Calculator, Radar, TrendingUp } from 'lucide-react'

import logoImg from '../assets/logo.png'
import { CALENDLY_URL, WHOP_CHECKOUT_URL } from '../content/site'
import type { PainIcon } from '../content/demo'
import {
  LOOM_VIDEO_ID,
  hero,
  metrics,
  forWho,
  includes,
  centralize,
  pricing,
  costComparison,
  testimonials,
  guarantee,
  finalCta,
} from '../content/demo'

/* ─────────────────────────── Primitivas ─────────────────────────── */

function CtaButton({
  label,
  sub,
  size = 'md',
  center = false,
  href = CALENDLY_URL,
  variant = 'solid',
}: {
  label: string
  sub?: string
  size?: 'md' | 'lg'
  center?: boolean
  href?: string
  variant?: 'solid' | 'outline'
}) {
  const solid = variant === 'solid'
  return (
    <div className={`flex flex-col gap-2 ${center ? 'items-center' : 'items-start'}`}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition-opacity hover:opacity-90"
        style={{
          padding: size === 'lg' ? '14px 32px' : '10px 24px',
          backgroundColor: solid ? '#e6e6e6' : 'transparent',
          color: solid ? '#08090a' : '#d0d6e0',
          border: solid ? 'none' : '1px solid rgba(255,255,255,0.14)',
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

/** Par de CTAs: comprar directo (Whop) como primario + agendar demo (Calendly) secundario. */
function CtaPair({ size = 'lg', center = false }: { size?: 'md' | 'lg'; center?: boolean }) {
  return (
    <div
      className={`flex flex-col sm:flex-row gap-3 ${center ? 'items-center justify-center' : 'items-start'}`}
    >
      <CtaButton
        label="Empezar ahora"
        sub="Plan Standard · $150 USD/mes"
        href={WHOP_CHECKOUT_URL}
        size={size}
        center={center}
        variant="solid"
      />
      <CtaButton
        label="Agendar una demo"
        sub="30 min · sin compromiso"
        href={CALENDLY_URL}
        size={size}
        center={center}
        variant="outline"
      />
    </div>
  )
}

function SectionTitle({
  children,
  max = 800,
  center = false,
}: {
  children: React.ReactNode
  max?: number
  center?: boolean
}) {
  return (
    <h2
      style={{
        fontSize: 'clamp(26px, 3.2vw, 38px)',
        fontWeight: 510,
        letterSpacing: '-0.022em',
        lineHeight: 1.15,
        color: '#f7f8f8',
        maxWidth: center ? undefined : max,
      }}
    >
      {children}
    </h2>
  )
}

const PAIN_ICONS = {
  puzzle: Puzzle,
  users: Users,
  headphones: Headphones,
  calculator: Calculator,
  radar: Radar,
  trending: TrendingUp,
} as const

function PainIconChip({ name }: { name: PainIcon }) {
  const Icon = PAIN_ICONS[name]
  return (
    <div
      className="flex items-center justify-center flex-shrink-0"
      style={{
        width: 38,
        height: 38,
        borderRadius: 9,
        border: '1px solid rgba(220,38,38,0.22)',
        backgroundColor: 'rgba(220,38,38,0.07)',
      }}
    >
      <Icon size={18} strokeWidth={1.6} color="#e5534b" />
    </div>
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
          href={WHOP_CHECKOUT_URL}
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
          Empezar ahora
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

/* ─────────────────────────── Página ─────────────────────────── */

export function Demo() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#08090a', color: '#f7f8f8' }}>
      <DemoHeader />

      {/* Hero + VSL — compactado a propósito para que el video entre completo
          en el primer pantallazo. En una VSL el video es la página. */}
      <section style={{ paddingTop: 96, paddingBottom: 24 }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mx-auto"
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
                fontSize: 'clamp(30px, 3.8vw, 46px)',
                fontWeight: 510,
                letterSpacing: '-0.022em',
                lineHeight: 1.05,
                color: '#f7f8f8',
              }}
            >
              {hero.headline}
            </h1>
            <p
              className="mx-auto"
              style={{
                marginTop: 16,
                fontSize: 16,
                lineHeight: '25px',
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
            className="mx-auto"
            style={{ marginTop: 28, maxWidth: 880 }}
          >
            <VideoEmbed />
            <div style={{ marginTop: 24 }}>
              <CtaPair size="lg" center />
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

      {/* ¿Es para ti? — rejilla de dolores */}
      <Section>
        <div className="text-center mx-auto" style={{ maxWidth: 720 }}>
          <SectionTitle center>{forWho.title}</SectionTitle>
          <p style={{ fontSize: 16, lineHeight: '26px', color: '#8a8f98', marginTop: 18 }}>
            {forWho.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" style={{ marginTop: 56 }}>
          {forWho.cards.map((card) => (
            <div
              key={card.title}
              className="flex gap-4"
              style={{
                padding: 24,
                borderRadius: 10,
                border: '1px solid rgba(255,255,255,0.07)',
                backgroundColor: '#0b0c0e',
              }}
            >
              <PainIconChip name={card.icon} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 500, color: '#f7f8f8', lineHeight: '21px' }}>
                  {card.title}
                </div>
                <div style={{ fontSize: 13, lineHeight: '21px', color: '#6b6f76', marginTop: 7 }}>
                  {card.desc}
                </div>
              </div>
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

      {/* Centralización — reemplaza vs se conecta */}
      <Section>
        <SectionTitle max={680}>{centralize.title}</SectionTitle>
        <p style={{ fontSize: 17, lineHeight: '26px', color: '#8a8f98', marginTop: 16, maxWidth: 640 }}>
          {centralize.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ marginTop: 48 }}>
          {/* Lo que deja de usar */}
          <div
            style={{
              padding: 32,
              borderRadius: 10,
              border: '1px solid rgba(255,255,255,0.07)',
              backgroundColor: '#0b0c0e',
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#e5534b',
                marginBottom: 22,
              }}
            >
              {centralize.replaces.title}
            </div>
            <ul className="flex flex-col gap-3">
              {centralize.replaces.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    style={{
                      fontSize: 14,
                      color: '#6b6f76',
                      textDecoration: 'line-through',
                      textDecorationColor: 'rgba(229,83,75,0.5)',
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Lo que sigue conectado */}
          <div
            style={{
              padding: 32,
              borderRadius: 10,
              border: '1px solid rgba(255,255,255,0.07)',
              backgroundColor: 'transparent',
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#8a8f98',
                marginBottom: 22,
              }}
            >
              {centralize.connects.title}
            </div>
            <div className="flex flex-wrap gap-3">
              {centralize.connects.items.map((name) => (
                <span
                  key={name}
                  style={{
                    padding: '9px 18px',
                    borderRadius: 999,
                    border: '1px solid rgba(255,255,255,0.1)',
                    fontSize: 13,
                    color: '#d0d6e0',
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Precio y costo de oportunidad */}
      <Section>
        <div className="text-center mx-auto" style={{ maxWidth: 760 }}>
          <SectionTitle center>{costComparison.title}</SectionTitle>
          <p style={{ fontSize: 16, lineHeight: '26px', color: '#8a8f98', marginTop: 18 }}>
            {costComparison.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ marginTop: 56 }}>
          {[
            { data: costComparison.human, highlight: false },
            { data: costComparison.product, highlight: true },
          ].map(({ data, highlight }) => (
            <div
              key={data.label}
              style={{
                padding: 32,
                borderRadius: 12,
                border: highlight
                  ? '1px solid rgba(229,83,75,0.35)'
                  : '1px solid rgba(255,255,255,0.07)',
                backgroundColor: highlight ? '#0d0e10' : 'transparent',
              }}
            >
              <div
                className="inline-block"
                style={{
                  padding: '6px 14px',
                  borderRadius: 999,
                  border: highlight
                    ? '1px solid rgba(229,83,75,0.35)'
                    : '1px solid rgba(255,255,255,0.12)',
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: highlight ? '#e5534b' : '#8a8f98',
                }}
              >
                {data.label}
              </div>

              <div className="flex items-baseline gap-2" style={{ marginTop: 24 }}>
                <span style={{ fontSize: 13, color: '#6b6f76' }}>USD</span>
                <span
                  style={{
                    fontSize: 40,
                    fontWeight: 510,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    color: highlight ? '#f7f8f8' : '#8a8f98',
                  }}
                >
                  {data.amount}
                </span>
                <span style={{ fontSize: 14, color: '#6b6f76' }}>{data.period}</span>
              </div>

              <ul className="flex flex-col gap-3" style={{ marginTop: 28 }}>
                {data.items.map((item) => (
                  <li key={item} className="flex gap-3" style={{ fontSize: 14, lineHeight: '22px' }}>
                    <span style={{ color: highlight ? '#e5534b' : '#484b52', flexShrink: 0 }}>
                      {highlight ? '✓' : '✕'}
                    </span>
                    <span style={{ color: highlight ? '#d0d6e0' : '#6b6f76' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center" style={{ marginTop: 48 }}>
          <CtaPair size="lg" center />
          <p style={{ fontSize: 13, color: '#6b6f76', marginTop: 20 }}>{pricing.note}</p>
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
              <CtaPair size="lg" />
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
