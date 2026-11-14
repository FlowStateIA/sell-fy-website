import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Problem, WhyNotCrm, Method, Replace, Objections } from '../components/Chapters'
import { Mechanism } from '../components/Mechanism'
import { Eyebrow } from '../components/ChapterKit'
import { FeatureSection } from '../components/FeatureSection'
import { Fit } from '../components/Fit'
import { Cases } from '../components/Cases'
import { Pricing } from '../components/Pricing'
import { FinalCta } from '../components/FinalCta'
import { Footer } from '../components/Footer'

import { featureSections, productChapter } from '../content/home'

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
    <div className="min-h-screen" style={{ backgroundColor: '#08090a', color: '#f7f8f8' }}>
      <Navbar />
      <Hero />

      {/* El por qué, antes del producto */}
      <Problem />
      <WhyNotCrm />
      <Mechanism />

      {/* 04 — Así se ve. El rótulo abre el capítulo y las cuatro secciones son su cuerpo. */}
      <div id="producto" style={{ scrollMarginTop: 88 }}>
        <div className="max-w-[1200px] mx-auto px-6" style={{ paddingTop: 96 }}>
          <Eyebrow>{productChapter.eyebrow}</Eyebrow>
        </div>
        {featureSections.map(section => (
          <FeatureSection key={section.title} {...section} />
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
