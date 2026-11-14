import type { CSSProperties, ReactNode } from 'react'
import { motion } from 'framer-motion'
import {
  CalendarCheck,
  Calculator,
  Check,
  Headphones,
  Puzzle,
  Radar,
  TrendingUp,
  Users,
  X,
} from 'lucide-react'

import logoImg from '../assets/sellnode-logo-inversa.svg'
import { IntegrationsMarquee } from '../components/IntegrationsMarquee'
import { ReplaceGrid } from '../components/ReplaceGrid'
import { Button, Label } from '../components/ui'
import { COPYRIGHT, PRICE_FROM } from '../content/site'
import type { PainIcon } from '../content/demo'
import {
  LOOM_VIDEO_ID,
  hero,
  covers,
  metrics,
  forWho,
  includes,
  centralize,
  pricing,
  nextTier,
  costComparison,
  testimonials,
  guarantee,
  finalCta,
} from '../content/demo'
import { color, depth, motion as mo, onDark, onLight, radius, space, type } from '../lib/theme'
import { ToneContext, palette, type Tone } from '../lib/tone'

/**
 * Landing de embudo (/demo). Página de conversión: sin navegación, un solo
 * objetivo — empezar. A diferencia de la home, acá el CTA lleva a los planes y
 * al checkout; la home manda a agendar demo.
 *
 * Usa el mismo sistema visual que la home (src/lib/theme.ts): paleta del manual,
 * dos pesos de fuente, y secciones que alternan tinta y marfil.
 */

/* ─────────────────────────── Primitivas ─────────────────────────── */

/**
 * CTA de la página. Baja a #planes, donde cada tarjeta lleva su checkout.
 * El precio sale de site.ts, no escrito a mano: estaba en tres CTA y un cambio
 * de plan dejaba la página diciendo dos precios distintos.
 */
function StartCta({ size = 'lg', center = false }: { size?: 'md' | 'lg'; center?: boolean }) {
  return (
    <div className={`flex flex-col gap-3 ${center ? 'items-center' : 'items-start'}`}>
      <Button href="#planes" size={size}>
        Empezar ahora
      </Button>
      <span style={{ fontSize: 13, color: onDark.tertiary }}>
        {`Planes desde ${PRICE_FROM} USD/mes`}
      </span>
    </div>
  )
}

function SectionTitle({
  children,
  max = 800,
  center = false,
  tone = 'dark',
}: {
  children: ReactNode
  max?: number
  center?: boolean
  tone?: Tone
}) {
  return (
    <h2
      style={{
        ...(type.h2 as CSSProperties),
        fontSize: 'clamp(26px, 3.4vw, 42px)',
        color: palette(tone).primary,
        maxWidth: center ? undefined : max,
        textWrap: 'balance',
      }}
    >
      {children}
    </h2>
  )
}

function SectionLead({
  children,
  max = 640,
  tone = 'dark',
}: {
  children: ReactNode
  max?: number
  tone?: Tone
}) {
  return (
    <p
      style={{
        ...(type.lead as CSSProperties),
        color: palette(tone).secondary,
        marginTop: 18,
        maxWidth: max,
      }}
    >
      {children}
    </p>
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
        borderRadius: radius.sm,
        border: '1px solid rgba(236,60,50,0.26)',
        backgroundColor: 'rgba(236,60,50,0.08)',
      }}
    >
      <Icon size={18} strokeWidth={1.7} color={color.red} />
    </div>
  )
}

/** Sección de la página. En marfil cuando `tone="light"`, igual que en la home. */
function Section({
  children,
  id,
  tone = 'dark',
}: {
  children: ReactNode
  id?: string
  tone?: Tone
}) {
  const light = tone === 'light'
  return (
    <ToneContext.Provider value={tone}>
      <section
        id={id}
        style={{
          padding: `${space.sectionTight} 0`,
          backgroundColor: light ? color.ivory : 'transparent',
          color: palette(tone).primary,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: mo.base, ease: mo.ease }}
          className="mx-auto px-6"
          style={{ maxWidth: space.maxWidth }}
        >
          {children}
        </motion.div>
      </section>
    </ToneContext.Provider>
  )
}

/* ─────────────────────────── Header sin navegación ─────────────────────────── */

function DemoHeader() {
  return (
    <header
      className="fixed top-0 w-full z-50 backdrop-blur-md"
      style={{
        height: 64,
        backgroundColor: 'rgba(10,11,12,0.8)',
        borderBottom: `1px solid ${onDark.lineSoft}`,
      }}
    >
      <div
        className="mx-auto px-5 sm:px-6 h-full flex items-center justify-between gap-3"
        style={{ maxWidth: space.maxWidth }}
      >
        {/* Sin link a home: en una página de embudo no se ofrecen salidas.
            En móvil va el símbolo solo, igual que en la home: la firma completa
            a su tamaño mínimo de marca no deja sitio al botón. */}
        <img
          src="/brand/sellnode-simbolo.svg"
          alt="SellNode"
          className="sm:hidden flex-shrink-0"
          style={{ height: 28 }}
        />
        <img
          src={logoImg}
          alt="SellNode"
          className="hidden sm:block flex-shrink-0"
          style={{ height: 27 }}
        />
        <Button href="#planes">Empezar ahora</Button>
      </div>
    </header>
  )
}

/* ─────────────────────────── Video ─────────────────────────── */

function VideoEmbed() {
  return (
    <div
      className="glass w-full overflow-hidden"
      style={{
        borderRadius: radius.lg,
        backgroundColor: color.surface,
        boxShadow: depth.card,
        aspectRatio: '16 / 9',
      }}
    >
      {LOOM_VIDEO_ID ? (
        <iframe
          src={`https://www.loom.com/embed/${LOOM_VIDEO_ID}?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`}
          title="SellNode en 5 minutos"
          allowFullScreen
          style={{ width: '100%', height: '100%', border: 0 }}
        />
      ) : (
        /* Hueco a la espera del video. */
        <div className="w-full h-full flex flex-col items-center justify-center gap-3 px-6 text-center">
          <Label tone="muted">Falta el video</Label>
          <span style={{ ...type.h3, color: onDark.secondary }}>Espacio del video de ventas</span>
          <span style={{ fontSize: 12.5, color: onDark.faint, maxWidth: 380 }}>
            Pega el ID de Loom en <code style={{ color: onDark.secondary }}>LOOM_VIDEO_ID</code>{' '}
            dentro de <code style={{ color: onDark.secondary }}>src/content/demo.ts</code>
          </span>
        </div>
      )}
    </div>
  )
}

/* ─────────────────────────── Página ─────────────────────────── */

/** Rótulo chico de cada bloque de precio dentro de una tarjeta de plan. */
const PLAN_LABEL: CSSProperties = { ...(type.label as CSSProperties), color: onDark.tertiary }

export function Demo() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: color.bg, color: onDark.primary }}>
      <DemoHeader />

      {/* Hero + VSL — compactado a propósito para que el video entre completo
          en el primer pantallazo. En una VSL el video es la página. */}
      <section
        className="relative grain"
        style={{ paddingTop: 100, paddingBottom: 28, overflow: 'hidden' }}
      >
        <div
          className="absolute inset-x-0 top-0 pointer-events-none"
          style={{
            height: 'clamp(360px, 62vh, 640px)',
            background:
              'radial-gradient(52% 44% at 50% -6%, rgba(236,60,50,0.13), transparent 70%)',
          }}
        />
        <div
          className="absolute inset-x-0 top-0 grid-bg pointer-events-none"
          style={{ height: 'clamp(420px, 70vh, 760px)' }}
        />

        <div className="relative mx-auto px-6" style={{ maxWidth: space.maxWidth }}>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: mo.base, ease: mo.ease }}
            className="text-center mx-auto"
            style={{ maxWidth: 880 }}
          >
            <Label tone="muted" style={{ marginBottom: 18 }}>
              {hero.eyebrow}
            </Label>
            <h1
              style={{
                ...(type.h2 as CSSProperties),
                fontSize: 'clamp(30px, 4.2vw, 52px)',
                lineHeight: 1.06,
                color: onDark.primary,
                textWrap: 'balance',
              }}
            >
              {hero.headline}
            </h1>
            <p
              className="mx-auto"
              style={{
                ...(type.lead as CSSProperties),
                fontSize: 16,
                lineHeight: '26px',
                marginTop: 16,
                color: onDark.secondary,
                maxWidth: 680,
              }}
            >
              {hero.subheadline}
            </p>

            {/* Las áreas que cubre. Deliberadamente discretas: sustentan el
                "toda la operación" del titular sin competir con él ni empujar
                el video fuera del primer pantallazo. */}
            <div
              className="flex flex-wrap justify-center gap-x-2 gap-y-2 mx-auto"
              style={{ marginTop: 18, maxWidth: 720 }}
            >
              {covers.map(item => (
                <span
                  key={item}
                  style={{
                    padding: '5px 11px',
                    borderRadius: radius.pill,
                    border: `1px solid ${onDark.line}`,
                    backgroundColor: 'rgba(246,245,240,0.03)',
                    fontSize: 12,
                    lineHeight: '16px',
                    color: onDark.secondary,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* El video va inmediatamente después del titular */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: mo.ease }}
            className="mx-auto"
            style={{ marginTop: 26, maxWidth: 900 }}
          >
            <VideoEmbed />
            <div style={{ marginTop: 28 }}>
              <StartCta size="lg" center />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integraciones. Va justo debajo del CTA del video: responde "¿y lo que
          ya uso?" antes de que el prospecto empiece a leer los dolores. */}
      <div style={{ marginTop: 36 }}>
        <IntegrationsMarquee />
      </div>

      {/* Métricas — sólo si hay datos reales */}
      {metrics.length > 0 && (
        <Section>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden"
            style={{
              borderRadius: radius.lg,
              border: `1px solid ${onDark.lineSoft}`,
              backgroundColor: onDark.lineSoft,
            }}
          >
            {metrics.map(m => (
              <div key={m.label} style={{ padding: '28px 24px', backgroundColor: color.bg }}>
                <div style={{ ...type.figure, fontSize: 30, fontWeight: 700, color: onDark.primary }}>
                  {m.value}
                </div>
                <div style={{ fontSize: 13, color: onDark.tertiary, marginTop: 6 }}>{m.label}</div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* ¿Es para ti? — rejilla de dolores. Primer corte en marfil. */}
      <Section tone="light">
        <div className="text-center mx-auto" style={{ maxWidth: 720 }}>
          <SectionTitle center tone="light">
            {forWho.title}
          </SectionTitle>
          <p
            style={{
              ...(type.lead as CSSProperties),
              color: onLight.secondary,
              marginTop: 16,
            }}
          >
            {forWho.subtitle}
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
          style={{ marginTop: 56 }}
        >
          {forWho.cards.map(card => (
            <div
              key={card.title}
              className="flex gap-4"
              style={{
                padding: 24,
                borderRadius: radius.lg,
                border: `1px solid ${onLight.lineSoft}`,
                backgroundColor: 'rgba(255,255,255,0.6)',
              }}
            >
              <PainIconChip name={card.icon} />
              <div>
                <div style={{ ...type.h3, fontSize: 15.5, color: onLight.primary }}>
                  {card.title}
                </div>
                <div style={{ ...type.body, fontSize: 14, color: onLight.secondary, marginTop: 6 }}>
                  {card.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Centralización — reemplaza vs se conecta */}
      <Section>
        <SectionTitle max={680}>{centralize.title}</SectionTitle>
        <SectionLead>{centralize.subtitle}</SectionLead>
        <ReplaceGrid />
      </Section>

      {/* Qué incluye. Segundo corte en marfil. */}
      <Section tone="light">
        <SectionTitle tone="light">{includes.title}</SectionTitle>
        <SectionLead tone="light" max={620}>
          {includes.subtitle}
        </SectionLead>
        {/* Móvil: carrusel horizontal deslizable (evita apilar nueve tarjetas y
            alargar la página). Desde md: grilla. */}
        <div
          className="mt-12 flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar
                     -mx-6 px-6 scroll-px-6
                     md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:overflow-visible"
        >
          {includes.items.map(item => (
            <div
              key={item.title}
              className="snap-start shrink-0 w-[82%] sm:w-[55%] md:w-auto"
              style={{
                padding: '26px 24px 28px',
                borderRadius: radius.lg,
                border: `1px solid ${onLight.lineSoft}`,
                backgroundColor: 'rgba(255,255,255,0.6)',
              }}
            >
              <div style={{ ...type.h3, fontSize: 15.5, color: onLight.primary, marginBottom: 8 }}>
                {item.title}
              </div>
              <div style={{ ...type.body, fontSize: 14, color: onLight.secondary }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Precio y costo de oportunidad */}
      <Section>
        <div className="text-center mx-auto" style={{ maxWidth: 760 }}>
          <SectionTitle center>{costComparison.title}</SectionTitle>
          <p style={{ ...(type.lead as CSSProperties), color: onDark.secondary, marginTop: 18 }}>
            {costComparison.subtitle}
          </p>
        </div>

        {/* Una sola tarjeta: el costo de seguir igual. El contrapeso es el
            bloque de planes que va justo debajo. Va en línea punteada y sin
            relleno a propósito: es lo que se deja atrás, no una oferta. */}
        <div className="mx-auto w-full" style={{ marginTop: 56, maxWidth: 460 }}>
          <div
            className="p-6 sm:p-8"
            style={{
              borderRadius: radius.lg,
              border: `1px dashed rgba(246,245,240,0.16)`,
            }}
          >
            <span
              className="inline-block"
              style={{
                padding: '6px 12px',
                borderRadius: radius.pill,
                border: `1px solid ${onDark.line}`,
              }}
            >
              <Label tone="muted">{costComparison.human.label}</Label>
            </span>

            {/* La cifra baja a 30px en móvil: a 40 "$800 – $1.500" se partía
                en dos líneas dentro de la tarjeta. */}
            <div className="flex items-baseline gap-2 flex-wrap" style={{ marginTop: 24 }}>
              <span style={{ fontSize: 13, color: onDark.tertiary }}>USD</span>
              <span
                className="text-[30px] sm:text-[40px]"
                style={{
                  ...type.figure,
                  fontWeight: 700,
                  lineHeight: 1,
                  whiteSpace: 'nowrap',
                  color: onDark.secondary,
                }}
              >
                {costComparison.human.amount}
              </span>
              <span style={{ fontSize: 14, color: onDark.tertiary }}>
                {costComparison.human.period}
              </span>
            </div>

            <ul className="flex flex-col gap-3" style={{ marginTop: 28 }}>
              {costComparison.human.items.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <X
                    size={15}
                    strokeWidth={2.2}
                    color={onDark.faint}
                    style={{ flexShrink: 0, marginTop: 4 }}
                  />
                  <span style={{ ...type.body, color: onDark.tertiary }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Planes. Cada tarjeta lleva su propio checkout; el resto de los CTA de
            la página baja aquí (#planes) para que el cliente elija. */}
        <div id="planes" style={{ marginTop: 96, scrollMarginTop: 88 }}>
          <div className="text-center mx-auto" style={{ maxWidth: 640 }}>
            <SectionTitle center>{pricing.title}</SectionTitle>
            <p style={{ ...(type.lead as CSSProperties), color: onDark.secondary, marginTop: 14 }}>
              {pricing.subtitle}
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mx-auto w-full items-stretch"
            style={{ marginTop: 44, maxWidth: 880 }}
          >
            {pricing.plans.map(plan => (
              <div
                key={plan.name}
                className="glass flex flex-col p-6 sm:p-8"
                style={{
                  borderRadius: radius.lg,
                  backgroundColor: plan.highlight ? 'rgba(236,60,50,0.05)' : color.surface,
                  boxShadow: depth.card,
                }}
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      letterSpacing: '-0.025em',
                      color: onDark.primary,
                    }}
                  >
                    {plan.name}
                  </span>
                  {plan.badge && (
                    <span
                      style={{
                        padding: '5px 10px',
                        borderRadius: radius.pill,
                        backgroundColor: 'rgba(236,60,50,0.14)',
                        border: '1px solid rgba(236,60,50,0.3)',
                      }}
                    >
                      <Label>{plan.badge}</Label>
                    </span>
                  )}
                </div>
                {/* Alto fijo de dos líneas: así las cifras de las dos tarjetas quedan a la misma altura */}
                <p
                  className="md:min-h-[46px]"
                  style={{ ...type.body, color: onDark.secondary, marginTop: 8 }}
                >
                  {plan.tagline}
                </p>

                {/* Implementación: pago inicial que ya incluye el primer mes */}
                <div style={{ marginTop: 24 }}>
                  <div style={PLAN_LABEL}>{pricing.setupLabel}</div>
                  <div className="flex items-baseline gap-2" style={{ marginTop: 10 }}>
                    <span style={{ fontSize: 13, color: onDark.tertiary }}>USD</span>
                    <span
                      style={{
                        ...type.figure,
                        fontSize: 40,
                        fontWeight: 700,
                        lineHeight: 1,
                        color: onDark.primary,
                      }}
                    >
                      {plan.setup}
                    </span>
                  </div>
                  <p style={{ fontSize: 13, lineHeight: '20px', color: onDark.tertiary, marginTop: 8 }}>
                    {pricing.setupNote}
                  </p>
                </div>

                {/* Mensualidad, desde el segundo mes */}
                <div
                  style={{
                    marginTop: 20,
                    paddingTop: 20,
                    borderTop: `1px solid ${onDark.line}`,
                  }}
                >
                  <div style={PLAN_LABEL}>{pricing.monthlyLabel}</div>
                  <div className="flex items-baseline gap-2" style={{ marginTop: 10 }}>
                    <span style={{ fontSize: 13, color: onDark.tertiary }}>USD</span>
                    <span
                      style={{
                        ...type.figure,
                        fontSize: 26,
                        fontWeight: 700,
                        lineHeight: 1,
                        color: onDark.primary,
                      }}
                    >
                      {plan.monthly}
                    </span>
                    <span style={{ fontSize: 14, color: onDark.tertiary }}>{plan.monthlyPeriod}</span>
                  </div>
                </div>

                {/* El booking nativo va aparte: es lo que más pesa al elegir Pro */}
                {plan.featured && (
                  <div
                    style={{
                      marginTop: 22,
                      padding: 16,
                      borderRadius: radius.md,
                      border: '1px solid rgba(236,60,50,0.3)',
                      backgroundColor: 'rgba(236,60,50,0.08)',
                    }}
                  >
                    <div
                      className="flex items-center gap-2"
                      style={{ ...type.h3, fontSize: 14.5, color: onDark.primary }}
                    >
                      <CalendarCheck size={16} strokeWidth={1.8} color={color.red} />
                      {plan.featured.title}
                    </div>
                    <p style={{ fontSize: 13, lineHeight: '20px', color: onDark.secondary, marginTop: 6 }}>
                      {plan.featured.desc}
                    </p>
                  </div>
                )}

                <ul className="flex flex-col gap-3" style={{ marginTop: 22 }}>
                  {plan.items.map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <Check
                        size={15}
                        strokeWidth={2.4}
                        color={color.red}
                        style={{ flexShrink: 0, marginTop: 4 }}
                      />
                      <span style={{ ...type.body, color: onDark.secondary }}>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto" style={{ paddingTop: 28 }}>
                  <Button
                    href={plan.checkoutUrl}
                    variant={plan.highlight ? 'primary' : 'ghost'}
                    size="lg"
                    block
                  >
                    Empezar con {plan.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center" style={{ fontSize: 13, color: onDark.tertiary, marginTop: 24 }}>
            {pricing.note}
          </p>
        </div>

        {/* Siguiente escalón. Ancla de precio y destino del upsell — deliberadamente
            sin CTA: todavía dependen de él los módulos que faltan.
            Apagado con nextTier.visible mientras no esté listo. */}
        {nextTier.visible && (
          <div
            className="mx-auto w-full"
            style={{
              marginTop: 48,
              maxWidth: 680,
              padding: 28,
              borderRadius: radius.lg,
              border: '1px dashed rgba(246,245,240,0.16)',
            }}
          >
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <Label tone="muted">{nextTier.label}</Label>
              <span
                style={{
                  padding: '4px 10px',
                  borderRadius: radius.pill,
                  border: `1px solid ${onDark.line}`,
                  fontSize: 11,
                  color: onDark.tertiary,
                }}
              >
                {nextTier.badge}
              </span>
            </div>

            <div className="flex items-baseline gap-2" style={{ marginTop: 14 }}>
              <span style={{ fontSize: 13, color: onDark.tertiary }}>{nextTier.unit}</span>
              <span
                style={{
                  ...type.figure,
                  fontSize: 30,
                  fontWeight: 700,
                  lineHeight: 1,
                  color: onDark.secondary,
                }}
              >
                {nextTier.amount}
              </span>
              <span style={{ fontSize: 14, color: onDark.tertiary }}>{nextTier.period}</span>
            </div>

            <p style={{ fontSize: 13, lineHeight: '20px', color: onDark.tertiary, marginTop: 12 }}>
              {nextTier.note}
            </p>

            <ul className="flex flex-wrap gap-x-5 gap-y-2" style={{ marginTop: 18 }}>
              {nextTier.items.map(item => (
                <li key={item} style={{ fontSize: 13, color: onDark.tertiary }}>
                  · {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>

      {/* Testimonios — sólo si hay reales */}
      {testimonials.length > 0 && (
        <Section>
          <SectionTitle max={620}>Lo que dicen quienes ya lo usan</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4" style={{ marginTop: 48 }}>
            {testimonials.map(t => (
              <div
                key={t.name}
                className="glass"
                style={{
                  padding: 28,
                  borderRadius: radius.lg,
                  backgroundColor: color.surface,
                  boxShadow: depth.card,
                }}
              >
                <p style={{ ...type.body, fontSize: 15, lineHeight: '25px', color: onDark.secondary }}>
                  “{t.quote}”
                </p>
                <div style={{ marginTop: 20 }}>
                  <div style={{ ...type.h3, fontSize: 14, color: onDark.primary }}>{t.name}</div>
                  <div style={{ fontSize: 12.5, color: onDark.tertiary }}>{t.role}</div>
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
            className="glass"
            style={{
              padding: 40,
              borderRadius: radius.lg,
              backgroundColor: color.surface,
              boxShadow: depth.card,
              maxWidth: 760,
            }}
          >
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: '-0.025em',
                color: onDark.primary,
                marginBottom: 12,
              }}
            >
              {guarantee.title}
            </div>
            <p style={{ ...(type.lead as CSSProperties), fontSize: 15, color: onDark.secondary }}>
              {guarantee.body}
            </p>
          </div>
        </Section>
      )}

      {/* CTA final */}
      <section style={{ padding: `${space.sectionTight} 0 ${space.section}` }}>
        <div className="mx-auto px-6" style={{ maxWidth: space.maxWidth }}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: mo.base, ease: mo.ease }}
            className="glass relative overflow-hidden px-6 py-12 sm:px-12 sm:py-14"
            style={{
              borderRadius: radius.xl,
              backgroundColor: color.surface,
              boxShadow: depth.card,
            }}
          >
            {/* El resplandor del hero vuelve en el cierre, desde la esquina. */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(55% 90% at 100% 100%, rgba(236,60,50,0.16), transparent 70%)',
              }}
            />
            <div className="relative">
              <SectionTitle max={720}>{finalCta.title}</SectionTitle>
              <SectionLead max={620}>{finalCta.subtitle}</SectionLead>
              <div style={{ marginTop: 32 }}>
                <StartCta size="lg" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer mínimo — sólo legal, sin salidas de navegación */}
      <footer style={{ borderTop: `1px solid ${onDark.lineSoft}`, padding: '28px 0' }}>
        <div
          className="mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          style={{ maxWidth: space.maxWidth }}
        >
          <span style={{ fontSize: 12, color: onDark.faint }}>{COPYRIGHT}</span>
          <div className="flex items-center gap-5">
            <a
              href="/privacidad"
              style={{ fontSize: 12.5, color: onDark.tertiary }}
              className="hover:!text-[#F6F5F0] transition-colors"
            >
              Política de Privacidad
            </a>
            <a
              href="/terminos"
              style={{ fontSize: 12.5, color: onDark.tertiary }}
              className="hover:!text-[#F6F5F0] transition-colors"
            >
              Términos de Servicio
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
