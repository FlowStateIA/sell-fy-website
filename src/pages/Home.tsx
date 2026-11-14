import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Problem, WhyNotCrm, Method, Replace, Objections } from '../components/Chapters'
import { Mechanism } from '../components/Mechanism'
import { Label } from '../components/ui'
import { FeatureSection } from '../components/FeatureSection'
import { Fit } from '../components/Fit'
import { Cases } from '../components/Cases'
import { Pricing } from '../components/Pricing'
import { FinalCta } from '../components/FinalCta'
import { Footer } from '../components/Footer'

import { featureSections, productChapter } from '../content/home'
import { color, onDark, space } from '../lib/theme'

/**
 * Home. El orden es el del VSL que ya usa el equipo, no una lista de funciones:
 * hook → dónde se pierde la respuesta → por qué un CRM no alcanza → cómo se
 * conecta → así se ve → cómo trabajamos → lo que dejas de pagar → lo que ya
 * probaste → si encaja o no → quiénes lo usan → planes → cierre.
 *
 * Un solo CTA en toda la página: agendar demo.
 */
export function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: color.bg, color: onDark.primary }}>
      <Navbar />
      <Hero />

      {/* El por qué, antes del producto */}
      <Problem />
      <WhyNotCrm />
      <Mechanism />

      {/* 04 — Así se ve. El rótulo abre el capítulo y las cuatro secciones son su cuerpo. */}
      <div id="producto" style={{ scrollMarginTop: 80 }}>
        <div className="mx-auto px-6" style={{ maxWidth: space.maxWidth, paddingTop: 104 }}>
          <Label>{productChapter.eyebrow}</Label>
        </div>
        {featureSections.map((section, i) => (
          <FeatureSection key={section.title} {...section} flip={i % 2 === 1} />
        ))}
      </div>

      <Method />
      <Replace />
      <Objections />
      <Fit />
      <Cases />
      <Pricing />
      <FinalCta />
      <Footer />
    </div>
  )
}
