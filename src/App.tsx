import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import logoImg from './assets/logo.png'
import dashboardImg from './assets/dashboard.png'
import dataImg from './assets/data.png'
import data2Img from './assets/data2.png'
import audit1Img from './assets/audit1.png'
import audit2Img from './assets/audit2.png'
import audit3Img from './assets/audit3.png'
import audit4Img from './assets/audit4.png'
import ventas1Img from './assets/ventas1.png'
import ventas2Img from './assets/ventas2.png'
import ventas3Img from './assets/ventas3.png'
import ventas4Img from './assets/ventas4.png'
import analytics1Img from './assets/analytics1.png'
import analytics2Img from './assets/analytics2.png'

function App() {
  const [page, setPage] = useState<'home' | 'privacidad' | 'terminos'>('home')

  // Simple hash-based routing
  useEffect(() => {
    const handleRoute = () => {
      const path = window.location.pathname
      if (path === '/privacidad') setPage('privacidad')
      else if (path === '/terminos') setPage('terminos')
      else setPage('home')
    }
    handleRoute()
    window.addEventListener('popstate', handleRoute)
    return () => window.removeEventListener('popstate', handleRoute)
  }, [])

  if (page === 'privacidad') return <LegalPage title="Política de Privacidad" content={privacyContent} />
  if (page === 'terminos') return <LegalPage title="Términos de Servicio" content={termsContent} />

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#08090a', color: '#f7f8f8' }}>
      <Navbar />
      <Hero />
      <Manifesto />
      <FeatureSection
        title={'Tu cliente ya te dijo\ncómo venderle'}
        description="Las personas que ya te compraron tienen la clave para replicar ese resultado cientos de veces. Sell-fy extrae dolores, objeciones y aspiraciones de cada llamada y te entrega un perfil psicológico accionable."
        images={[dataImg, data2Img]}
        subFeatures={[
          { number: '1.1', label: 'Perfil Psicológico', description: 'Extracción automática de dolores, aspiraciones y objeciones de cada cliente.',
            detail: {
              title: 'Perfil Psicológico del Avatar',
              body: 'Cada llamada de ventas contiene la data más valiosa para tu marketing: los dolores reales de tu cliente, sus aspiraciones, su estado emocional y su nivel de urgencia. Jarvis extrae todo esto automáticamente y construye un cerebro de tu avatar.',
              specs: [
                { label: 'Dolor Dominante', value: 'El problema #1 que tu cliente verbaliza en la llamada' },
                { label: 'Aspiración Principal', value: 'Qué resultado espera obtener con tu solución' },
                { label: 'Estado Emocional', value: 'Análisis del tono y disposición del prospecto' },
                { label: 'Nivel de Urgencia', value: 'Qué tan listo está para tomar acción' },
              ],
            },
          },
          { number: '1.2', label: 'Patrones de Compra', description: 'Bloqueadores de conversión, tendencias emocionales y señales de cierre.',
            detail: {
              title: 'Patrones de Compra',
              body: 'Sell-fy detecta patrones recurrentes en las objeciones, bloqueos emocionales y señales de cierre de tus clientes. Esta data te permite personalizar tu embudo para que tu avatar se identifique en cada etapa y te compre sin saber por qué.',
              specs: [
                { label: 'Objeciones Frecuentes', value: 'Las 5 razones principales por las que no cierran' },
                { label: 'Bloqueador #1', value: 'El patrón que más ventas pone en riesgo' },
                { label: 'Señales de Cierre', value: 'Indicadores de que el lead está listo para comprar' },
                { label: 'Segmentación', value: 'Filtro por oferta para ver patrones por producto' },
              ],
            },
          },
        ]}
      />
      <FeatureSection
        title={'Analizar 300 llamadas\nes imposible. Jarvis lo hace.'}
        description="Score conductual de 0 a 100, mapa de la llamada, errores costosos y un plan de mejora personalizado por closer. Todo automático, sin escuchar una sola grabación."
        images={[audit1Img, audit2Img, audit3Img, audit4Img]}
        subFeatures={[
          { number: '2.1', label: 'Score Conductual', description: 'Evaluación de 0 a 100 basada en técnica de ventas, manejo de objeciones y cierre.',
            detail: {
              title: 'Score Conductual',
              body: 'Jarvis evalúa cada llamada en 7 dimensiones: Apertura, Descubrimiento, Presentación, Objeciones, Cierre, Control y Evaluación de Oferta. Cada dimensión recibe un puntaje independiente y se genera un score general de 0 a 100.',
              specs: [
                { label: 'Dimensiones', value: '7 áreas evaluadas por llamada' },
                { label: 'Mapa de la Llamada', value: 'Timeline con score por sección y timestamps' },
                { label: 'Error más costoso', value: 'Identificación automática del punto que puso en riesgo la venta' },
                { label: 'Entrenamiento', value: '+3,300 análisis de llamada cargados' },
              ],
            },
          },
          { number: '2.2', label: 'Insights por Closer', description: 'Fortalezas recurrentes, puntos de mejora y consistencia de cada vendedor en el tiempo.',
            detail: {
              title: 'Insights por Closer',
              body: 'Cada closer tiene un perfil de rendimiento basado en sus auditorías. Jarvis identifica patrones de fortaleza, puntos de mejora recurrentes y genera un plan de acción personalizado con nivel de impacto.',
              specs: [
                { label: 'Perfil del Lead', value: 'Dolor dominante, aspiración, estado emocional y urgencia' },
                { label: 'Qué ayudó al cierre', value: 'Técnicas específicas que funcionaron' },
                { label: 'Plan de Mejora', value: '3 acciones concretas con impacto alto/medio' },
                { label: 'Consistencia', value: 'Tracking de score promedio en el tiempo' },
              ],
            },
          },
        ]}
      />
      <FeatureSection
        title={'Sabe de dónde viene\ncada dólar de tu negocio'}
        description="Ventas nuevas, cuotas, renovaciones, upsells — todo trackeado. Comisiones automáticas para tu equipo, alertas de pagos vencidos y cartera organizada sin Excel."
        images={[ventas1Img, ventas2Img, ventas3Img, ventas4Img]}
        subFeatures={[
          { number: '3.1', label: 'Ventas & Cobros', description: 'Cuotas, renovaciones, alertas de vencimiento y cartera organizada.',
            detail: {
              title: 'Ventas & Cobros',
              body: 'Trazabilidad completa desde la primera llamada hasta el último cobro. Sabes exactamente de dónde viene cada dólar: ventas nuevas, cuotas, renovaciones, upsells. Alertas automáticas cuando un pago se vence.',
              specs: [
                { label: 'Estados de Venta', value: 'Cobrada, En cuotas, Pendiente, Caída, Reembolsada' },
                { label: 'Alertas', value: 'Notificación automática de cuotas vencidas vía WhatsApp y email' },
                { label: 'Cartera', value: 'Vista organizada por closer con cash pendiente por cobrar' },
                { label: 'Recurrencia', value: 'Tracking de renovaciones y pagos periódicos' },
              ],
            },
          },
          { number: '3.2', label: 'Comisiones', description: 'Liquidaciones automáticas, parciales y transparentes.',
            detail: {
              title: 'Comisiones',
              body: 'Cada venta genera comisiones automáticas para closer y setter. Liquidaciones parciales soportadas — una comisión puede aparecer en múltiples pagos. Todo transparente, sin Excel, sin conflictos.',
              specs: [
                { label: 'Cálculo', value: 'Automático al registrar la venta según % configurado' },
                { label: 'Liquidaciones', value: 'Parciales o totales con PDF profesional descargable' },
                { label: 'Estados', value: 'Ganada, Bloqueada (cash no cobrado), Liquidada' },
                { label: 'Visibilidad', value: 'Cada closer ve solo sus propias comisiones' },
              ],
            },
          },
        ]}
      />
      <FeatureSection
        title={'Deja de improvisar.\nDecide desde la data.'}
        description="Revenue, cash collected, tasa de cierre, rendimiento por funnel — todo en tiempo real. Detecta cuellos de botella exactos y oportunidades de mejora antes de que te cuesten."
        images={[analytics1Img, analytics2Img]}
        subFeatures={[
          { number: '4.1', label: 'Dashboard & KPIs', description: 'Revenue, cash collected, tasa de cierre y ranking de closers.',
            detail: {
              title: 'Dashboard & KPIs',
              body: 'Visibilidad total de tu operación comercial. Sabes qué va a pasar y qué tienes que mejorar. Revenue, cash collected, tasa de cierre, rendimiento por funnel, ranking de closers — todo en tiempo real.',
              specs: [
                { label: 'Salud Financiera', value: 'Vendido, cash cobrado, pendiente cobro, ventas caídas' },
                { label: 'Ejecución Comercial', value: 'Tasa de cierre, llamadas, auditorías, score promedio' },
                { label: 'Ranking', value: 'Closers ordenados por cash collected con tasa y score' },
                { label: 'Filtros', value: 'Por fecha, closer, funnel y tipo de venta' },
              ],
            },
          },
          { number: '4.2', label: 'Agendas', description: 'Google Calendar, seguimientos automáticos y control de no-shows.',
            detail: {
              title: 'Agendas Inteligentes',
              body: 'Integración bidireccional con Google Calendar. Seguimientos automáticos con recordatorios por WhatsApp, control de no-shows y métricas de show-up rate por setter.',
              specs: [
                { label: 'Google Calendar', value: 'Sincronización bidireccional automática' },
                { label: 'Seguimientos', value: 'Programados con canal (WhatsApp, llamada, email)' },
                { label: 'Recordatorios', value: 'Notificaciones automáticas al closer y al lead' },
                { label: 'No-shows', value: 'Tracking y métricas de show-up rate por setter' },
              ],
            },
          },
        ]}
      />
      <Pricing />
      <Footer />
    </div>
  )
}

/* ─────────────────────────── Navbar ─────────────────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        scrolled
          ? 'backdrop-blur-md border-b'
          : ''
      }`}
      style={{
        height: 72,
        backgroundColor: scrolled ? 'rgba(8,9,10,0.8)' : 'transparent',
        borderColor: scrolled ? 'rgba(255,255,255,0.06)' : 'transparent',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
        <a href="/" style={{ marginLeft: -4 }}>
          <img src={logoImg} alt="Sell-fy" style={{ height: 80 }} />
        </a>

        <a
          href="https://app.sell-fy.app"
          style={{ fontSize: 13, color: '#8a8f98' }}
          className="hover:!text-[#f7f8f8] transition-colors"
        >
          Log in
        </a>
      </div>
    </header>
  )
}

/* ─────────────────────────── Hero ─────────────────────────── */

function Hero() {
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
            {dashboardImg ? (
              <img
                src={dashboardImg}
                alt="Sell-fy Dashboard"
                className="w-full"
                style={{ display: 'block' }}
              />
            ) : (
              <div
                style={{
                  aspectRatio: '16/9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontSize: 13, color: '#484b52' }}>
                  Dashboard screenshot — guarda como src/assets/dashboard.png
                </span>
              </div>
            )}
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

/* ─────────────────────────── Manifesto ─────────────────────────── */

function Manifesto() {
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

/* ─────────────────────────── Feature Section (Linear layout) ─────────────────────────── */

type SubFeature = {
  number: string
  label: string
  description: string
  detail?: {
    title: string
    body: string
    specs: { label: string; value: string }[]
  }
}

function FeatureSection({
  title,
  description,
  images,
  image,
  subFeatures,
}: {
  title: string
  description: string
  images?: string[]
  image?: string
  subFeatures: SubFeature[]
}) {
  const [activeSlide, setActiveSlide] = useState(0)
  const [openDetail, setOpenDetail] = useState<SubFeature['detail'] | null>(null)
  const allImages = images || (image ? [image] : [])

  // Auto-slide every 12 seconds
  useEffect(() => {
    if (allImages.length <= 1) return
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % allImages.length)
    }, 12000)
    return () => clearInterval(interval)
  }, [allImages.length])

  return (
    <section id="producto" style={{ padding: '96px 0 128px' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header — 2 column grid: title left, description right */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          style={{ paddingBottom: 48 }}
        >
          <div>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                fontWeight: 510,
                letterSpacing: '-0.022em',
                lineHeight: 1.1,
                color: '#f7f8f8',
                whiteSpace: 'pre-line',
              }}
            >
              {title}
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: '26px', color: '#d0d6e0' }}>
              {description}
            </p>
          </div>
        </motion.div>

        {/* Illustration — carousel with fade or placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          {allImages.length > 0 ? (
            <>
              <div
                className="w-full overflow-hidden relative"
                style={{
                  borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.06)',
                  backgroundColor: '#0d0e10',
                  maxHeight: 560,
                }}
              >
                {/* Images container — capped height, cropped from top */}
                <div className="relative" style={{ maxHeight: 560, overflow: 'hidden' }}>
                  {allImages.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${title.replace('\n', ' ')} ${i + 1}`}
                      className="w-full"
                      style={{
                        display: i === activeSlide ? 'block' : 'none',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        width: '100%',
                      }}
                    />
                  ))}
                </div>

                {/* Bottom gradient fade — Linear style */}
                <div
                  className="absolute bottom-0 left-0 right-0 pointer-events-none"
                  style={{
                    height: '40%',
                    background: 'linear-gradient(to top, #08090a 0%, #08090a 8%, transparent 100%)',
                  }}
                />
              </div>

              {/* Slide indicators */}
              {allImages.length > 1 && (
                <div className="flex items-center justify-center gap-2 mt-6">
                  {allImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      style={{
                        width: i === activeSlide ? 24 : 6,
                        height: 6,
                        borderRadius: 3,
                        backgroundColor: i === activeSlide ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.12)',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        padding: 0,
                      }}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div
              className="w-full overflow-hidden"
              style={{
                aspectRatio: '16/9',
                borderRadius: 8,
                border: '1px solid rgba(255,255,255,0.06)',
                backgroundColor: '#0d0e10',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: 13, color: '#484b52' }}>Espacio para screenshot</span>
            </div>
          )}
        </motion.div>

        {/* Footer — sub-features in 2-column grid */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="hidden md:grid grid-cols-2 gap-8"
          style={{ paddingTop: 48 }}
        >
          {subFeatures.map((sf) => (
            <div
              key={sf.number}
              className="flex items-start gap-3"
              style={{ cursor: sf.detail ? 'pointer' : 'default' }}
              onClick={() => sf.detail && setOpenDetail(sf.detail)}
            >
              <span style={{ fontSize: 12, color: '#484b52', fontWeight: 500, fontVariantNumeric: 'tabular-nums' }}>
                {sf.number}
              </span>
              <div className="flex items-center gap-2">
                <span style={{
                  fontSize: 14,
                  color: '#f7f8f8',
                  fontWeight: 500,
                  borderBottom: sf.detail ? '1px solid rgba(255,255,255,0.15)' : 'none',
                  paddingBottom: 1,
                }}>
                  {sf.label}
                </span>
                {sf.detail && (
                  <span style={{ fontSize: 11, color: '#484b52' }}>+</span>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Detail Modal — Linear style */}
        {openDetail && (
          <div
            className="fixed inset-0 z-50 flex items-start justify-end"
            style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
            onClick={() => setOpenDetail(null)}
          >
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="h-full overflow-y-auto"
              style={{
                width: 520,
                maxWidth: '90vw',
                backgroundColor: '#111214',
                borderLeft: '1px solid rgba(255,255,255,0.08)',
                padding: '48px 40px',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
                <span style={{ fontSize: 11, color: '#484b52', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 500 }}>
                  Tech Specs
                </span>
                <button
                  onClick={() => setOpenDetail(null)}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    border: '1px solid rgba(255,255,255,0.1)',
                    backgroundColor: 'transparent',
                    color: '#6b6f76',
                    fontSize: 14,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  ×
                </button>
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: 32,
                fontWeight: 510,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                color: '#f7f8f8',
                marginBottom: 20,
              }}>
                {openDetail.title}
              </h3>

              {/* Body */}
              <p style={{ fontSize: 15, lineHeight: '24px', color: '#8a8f98', marginBottom: 40 }}>
                {openDetail.body}
              </p>

              {/* Specs table */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: '#f7f8f8', padding: '16px 0 8px' }}>
                  Especificaciones
                </div>
                {openDetail.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="flex gap-8"
                    style={{
                      padding: '12px 0',
                      borderTop: '1px solid rgba(255,255,255,0.04)',
                    }}
                  >
                    <span style={{ fontSize: 13, color: '#6b6f76', width: 160, flexShrink: 0 }}>
                      {spec.label}
                    </span>
                    <span style={{ fontSize: 13, color: '#d0d6e0' }}>
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

/* ─────────────────────────── Pricing ─────────────────────────── */

function Pricing() {
  const includes = [
    { title: 'Software completo', desc: 'Ventas, cobros, comisiones, agendas, analítica y auditorías con IA. Sin límites de usuarios.' },
    { title: 'Onboarding en 24h', desc: 'Configuramos tu organización, roles, ofertas, funnels y permisos. Tu equipo opera desde el día 1.' },
    { title: 'Auditorías con Jarvis', desc: 'IA que analiza cada llamada de tu equipo. Score conductual, plan de mejora e inteligencia de clientes.' },
    { title: 'Soporte prioritario', desc: 'WhatsApp directo con nuestro equipo. Respuesta en horas, no en días.' },
    { title: 'Integraciones', desc: 'Google Calendar, CRM y notificaciones automáticas por WhatsApp y email.' },
    { title: 'Actualizaciones continuas', desc: 'Nuevas funcionalidades cada semana. Sin costo adicional, sin migraciones.' },
  ]

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
            <div style={{ fontSize: 15, fontWeight: 500, color: '#f7f8f8', marginBottom: 4 }}>
              Precio personalizado según tu equipo
            </div>
            <div style={{ fontSize: 13, color: '#6b6f76' }}>
              Agenda una consultoría gratuita de 30 min. Te mostramos la plataforma y armamos una propuesta.
            </div>
          </div>
          <a
            href="https://calendly.com/sell-fy/30min"
            className="flex-shrink-0 transition-colors"
            style={{
              padding: '10px 24px',
              backgroundColor: '#e6e6e6',
              color: '#08090a',
              borderRadius: 4,
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            Agenda una consulta
          </a>
        </motion.div>
      </div>
    </section>
  )
}

/* ─────────────────────────── Footer ─────────────────────────── */

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 0' }}>
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-4">
          <img src={logoImg} alt="Sell-fy" style={{ height: 20 }} />
          <span style={{ fontSize: 12, color: '#484b52' }}>
            Flow State IA LLC — © 2026
          </span>
        </div>

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
  )
}

/* ─────────────────────────── Legal Pages ─────────────────────────── */

function LegalPage({ title, content }: { title: string; content: string }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#08090a', color: '#f7f8f8' }}>
      <header style={{ height: 56, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-[800px] mx-auto px-6 h-full flex items-center justify-between">
          <a href="/">
            <img src={logoImg} alt="Sell-fy" style={{ height: 100 }} />
          </a>
          <a href="/" style={{ fontSize: 13, color: '#8a8f98' }}>← Volver</a>
        </div>
      </header>
      <div className="max-w-[800px] mx-auto px-6" style={{ padding: '64px 24px 128px' }}>
        <h1 style={{ fontSize: 32, fontWeight: 510, color: '#f7f8f8', marginBottom: 32 }}>{title}</h1>
        <div style={{ fontSize: 14, lineHeight: '24px', color: '#8a8f98', whiteSpace: 'pre-line' }}>
          {content}
        </div>
      </div>
    </div>
  )
}

const privacyContent = `POLÍTICA DE PRIVACIDAD — SELL-FY
Responsable: Flow State IA Consulting Group LLC
5980 Richmond Highway, Alexandria, VA 22303, United States
Responsable de Privacidad: David Bermudez — operaciones@sell-fy.app

1. IDENTIFICACIÓN DEL RESPONSABLE

Flow State IA Consulting Group LLC
Tax ID: 32-0832410
Dirección: 5980 Richmond Highway, Alexandria, VA 22303, United States
Correo de privacidad: operaciones@sell-fy.app

2. MARCO LEGAL APLICABLE

Esta Política se rige por las leyes del Estado de Virginia, Estados Unidos. Sell-Fy cumple voluntariamente con la Ley 1581 de 2012 y Decreto 1377 de 2013 (Colombia), Decreto 1074 de 2015, directrices de la SIC y estándares GDPR como referencia de mejores prácticas internacionales.

3. DATOS PERSONALES RECOPILADOS

Datos de usuarios: Nombre completo, correo electrónico, teléfono (opcional), rol dentro de la Organización (propietario, administrador, closer, setter), fotografía de perfil (opcional).

Datos generados por uso: Registros de ventas, comisiones, cobros y liquidaciones. Datos de contacto de clientes finales. Registros de agendas y llamadas. Grabaciones de llamadas (cuando el Cliente activa esta función). Transcripciones y análisis generados por IA. Métricas de rendimiento.

Datos que NO recopilamos: Origen racial o étnico, orientación política, religiosa o filosófica, datos de salud o vida sexual, datos biométricos, ni información financiera personal.

4. FINALIDADES DEL TRATAMIENTO

Principales (ejecución del contrato): Creación y gestión de cuentas. Prestación de servicios contratados. Autenticación y seguridad. Comunicaciones operativas. Facturación. Soporte técnico. Auditoría de llamadas mediante IA (cuando el Cliente lo activa).

Secundarias (consentimiento expreso): Comunicaciones comerciales. Estadísticas agregadas y anónimas. Encuestas de satisfacción. El titular puede revocar su consentimiento en cualquier momento.

5. PROPIEDAD Y ACCESO A LOS DATOS

Todos los datos comerciales ingresados en Sell-Fy son propiedad exclusiva de la Organización. Sell-Fy actúa como Encargado del tratamiento. Sell-Fy no accederá ni utilizará los datos comerciales para fines propios. Los datos están aislados mediante Row Level Security (RLS).

6. USO DE INTELIGENCIA ARTIFICIAL

Proveedores de IA: Anthropic (Claude) para análisis de transcripciones y N8N para automatización de flujos. El procesamiento se activa únicamente a instancias del Cliente. Los datos no se utilizan para entrenar modelos de IA externos.

7. ACCESO, USO Y COMPARTICIÓN DE DATOS DE GOOGLE

Sell-Fy accede a datos de tu cuenta de Google (Google Calendar y Google Drive) únicamente para prestar el servicio y a instancias del Cliente.

Google Calendar: leemos los eventos de tu calendario, incluidas las notas y transcripciones de llamadas asociadas a dichos eventos, para mostrarlos en la plataforma y para realizar auditorías de llamadas mediante inteligencia artificial. Sincronizamos eventos creados o gestionados desde Sell-Fy.

Google Drive: accedemos a las transcripciones y grabaciones de reuniones asociadas a tus llamadas con el fin de generar dichas auditorías.

Uso de inteligencia artificial sobre datos de Google: las transcripciones obtenidas de tu cuenta de Google se procesan mediante nuestra capa de automatización (n8n) y se analizan con nuestro proveedor de inteligencia artificial, Anthropic (Claude), con el único fin de generar auditorías de llamadas, una funcionalidad de cara al usuario. Estos datos NO se utilizan para entrenar modelos de inteligencia artificial.

Terceros con los que se comparten datos de Google: Supabase Inc. (almacenamiento y base de datos), Vercel Inc. (alojamiento de la aplicación) y Anthropic (análisis de transcripciones para auditorías). Estos proveedores actúan como encargados del tratamiento bajo nuestras instrucciones.

No vendemos, alquilamos ni transferimos datos de usuarios de Google a terceros con fines comerciales, publicitarios o de elaboración de perfiles.

El uso y la transferencia por parte de Sell-Fy de la información recibida de las APIs de Google se ajustará a la Política de Datos de Usuario de los Servicios de las API de Google, incluidos los requisitos de Uso Limitado (Limited Use).

Sell-Fy's use and transfer to any other app of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.

8. ALMACENAMIENTO Y TRANSFERENCIA INTERNACIONAL

Los datos se almacenan en servidores de Supabase Inc. (Amazon Web Services, Estados Unidos). Supabase cumple con certificaciones SOC 2 Type II. Los datos se conservan mientras exista la relación contractual. Tras la terminación, serán eliminados en máximo 30 días calendario.

9. DERECHOS DE LOS TITULARES

Conocer, actualizar y rectificar datos. Solicitar prueba de autorización. Revocar autorización para finalidades secundarias. Solicitar supresión. Presentar quejas ante la SIC (Colombia). Ser informado sobre el uso de sus datos.

Canal: operaciones@sell-fy.app — Consultas: 10 días hábiles. Reclamos: 15 días hábiles.

10. MEDIDAS DE SEGURIDAD

Técnicas: Encriptación TLS 1.3 y AES-256, Row Level Security, autenticación segura, monitoreo continuo, copias de seguridad automatizadas.
Organizativas: Acceso restringido bajo mínimo privilegio, política de no acceso a datos comerciales, procedimientos de respuesta ante incidentes.

11. COOKIES

Sell-Fy utiliza únicamente cookies estrictamente necesarias. NO utiliza cookies de rastreo, publicidad de terceros, Meta Pixel ni Google Analytics.

12. MENORES DE EDAD

Plataforma B2B exclusiva para mayores de 18 años. Datos de menores serán eliminados inmediatamente si se detectan.

13. MODIFICACIONES

Cambios sustanciales notificados por correo y aviso en la Plataforma con al menos 15 días de antelación.

Flow State IA Consulting Group LLC
Sell-Fy — sell-fy.app — operaciones@sell-fy.app
5980 Richmond Highway, Alexandria, VA 22303, United States`

const termsContent = `TÉRMINOS Y CONDICIONES DEL SERVICIO — SELL-FY
Entidad operadora: Flow State IA Consulting Group LLC
5980 Richmond Highway, Alexandria, VA 22303, United States
operaciones@sell-fy.app

1. PARTES Y ACEPTACIÓN

Los presentes Términos regulan el acceso y uso de la plataforma Sell-Fy, disponible en sell-fy.app, operada por Flow State IA Consulting Group LLC, empresa constituida bajo las leyes del Estado de Virginia, Estados Unidos.

Al acceder, registrarse o utilizar la Plataforma, el usuario y/o la Organización contratante ("el Cliente") aceptan estos Términos en su totalidad.

2. DESCRIPCIÓN DEL SERVICIO

Sell-Fy es una plataforma SaaS diseñada para negocios de ventas B2B. El acceso no se comercializa de forma individual: se provee como parte de una consultoría integral que incluye software, onboarding, configuración y acompañamiento operativo.

Funcionalidades: Gestión de ventas y pipeline comercial. Comisiones y liquidaciones para closers y setters. Gestión de cobros y seguimiento de pagos. Agendamiento y seguimiento de citas. Analítica y métricas de rendimiento. Gestión de equipos y funnels. Auditoría de llamadas con inteligencia artificial.

3. ACCESO Y CUENTAS

El acceso se activa tras la firma del acuerdo de servicio y el onboarding guiado. No existe registro público abierto. El usuario es responsable de la confidencialidad de sus credenciales y toda actividad bajo su cuenta.

Roles: Propietario (acceso total), Administrador/Manager (acceso operativo amplio), Closer (ventas y comisiones propias), Setter (agendas y comisiones propias).

4. OBLIGACIONES DE SELL-FY

Disponibilidad: Uptime objetivo del 99% mensual, excluyendo mantenimientos programados (notificados con 24h de antelación) y fuerza mayor.
Seguridad: Medidas técnicas y organizativas para proteger los datos.
Confidencialidad: No acceder ni divulgar datos comerciales del Cliente.
Soporte: Vía operaciones@sell-fy.app en días hábiles.
Incidentes: Notificación al Cliente en máximo 72 horas.
Actualizaciones: Comunicación de cambios significativos con 15 días de anticipación.

5. OBLIGACIONES DEL CLIENTE

Usar la Plataforma para fines comerciales lícitos. No intentar acceder a datos de otras Organizaciones. No realizar ingeniería inversa. No introducir código malicioso. Cumplir con la legislación de protección de datos aplicable. Mantener información de cuenta actualizada.

6. PROPIEDAD INTELECTUAL

De Sell-Fy: Todo el software, código, diseño, marcas y elementos de la Plataforma son propiedad exclusiva de Flow State IA Consulting Group LLC.
Del Cliente: Todos los datos e información comercial ingresados son propiedad exclusiva del Cliente.

7. PAGOS Y FACTURACIÓN

Acceso mediante acuerdo de servicio personalizado. Precio según cotización acordada. Métodos: Stripe (tarjeta, internacional) y transferencia bancaria (Colombia/LATAM). Invoice emitido por Flow State IA Consulting Group LLC.

Mora superior a 15 días: suspensión temporal. Mora superior a 30 días: terminación unilateral.

8. USO DE INTELIGENCIA ARTIFICIAL

Proveedores: Anthropic (Claude) para análisis de transcripciones y N8N para automatización. El procesamiento se activa solo cuando el Cliente lo solicita. Los datos no entrenan modelos externos. El Cliente es responsable de obtener consentimiento de sus clientes finales para grabación y análisis.

9. LIMITACIÓN DE RESPONSABILIDAD

Sell-Fy no será responsable por pérdidas indirectas, interrupciones por fuerza mayor, fallos de proveedores (Supabase, AWS, Vercel), decisiones comerciales basadas en métricas de la Plataforma, ni errores en datos ingresados por el Cliente.

Responsabilidad máxima: valor total pagado por el Cliente en los 3 meses previos al evento.

10. TERMINACIÓN

Por el Cliente: Aviso de 15 días a operaciones@sell-fy.app. Sin reembolso por períodos parciales.
Por Sell-Fy: Incumplimiento grave, mora >30 días, uso ilegal, o solicitud del Cliente.
Efectos: 30 días para exportar datos, luego eliminación segura e irreversible.

11. LEY APLICABLE

Leyes del Estado de Virginia, Estados Unidos. Controversias resueltas por negociación directa y, en su defecto, tribunales de Virginia. Clientes en Colombia pueden acudir a la SIC en materia de protección de datos.

12. DISPOSICIONES FINALES

Cláusulas inválidas no afectan las demás. La falta de ejercicio de un derecho no implica renuncia. Estos Términos constituyen el acuerdo completo entre las partes.

Flow State IA Consulting Group LLC
Sell-Fy — sell-fy.app — operaciones@sell-fy.app
5980 Richmond Highway, Alexandria, VA 22303, United States`

export default App
