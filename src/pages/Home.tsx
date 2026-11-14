import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { IntegrationsMarquee } from '../components/IntegrationsMarquee'
import {
  AskJarvis,
  HowItConnects,
  Method,
  Objections,
  Problem,
  Replace,
  WhyNotCrm,
} from '../components/Chapters'
import { Label } from '../components/ui'
import { FeatureSection } from '../components/FeatureSection'
import { Fit } from '../components/Fit'
import { Pricing } from '../components/Pricing'
import { SavingsTable } from '../components/SavingsTable'
import { FinalCta } from '../components/FinalCta'
import { Footer } from '../components/Footer'

import { featureSections, integrationsLabel, productChapter } from '../content/home'
import { color, onDark, shade, space } from '../lib/theme'

/**
 * Home. Primero muestra qué hace la herramienta y después por qué importa:
 * producto vivo → con qué se conecta → una venta paso a paso → dónde se pierde
 * la respuesta → por qué un CRM no alcanza → las pantallas → cómo trabajamos →
 * lo que dejas de pagar → lo que ya probaste → si encaja o no → planes → lo que te
 * ahorras → cierre.
 *
 * Un solo CTA en toda la página: agendar demo.
 */
export function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: color.bg, color: onDark.primary }}>
      <Navbar />
      <Hero />

      <div style={{ padding: '56px 0 72px' }}>
        <IntegrationsMarquee label={integrationsLabel} />
      </div>

      {/* Qué hace, y por qué importa */}
      <HowItConnects />
      <Problem />
      <WhyNotCrm />

      {/* 04 — Así se ve. El rótulo abre el capítulo y las cuatro secciones son su cuerpo. */}
      <div id="producto" style={{ scrollMarginTop: 80, backgroundColor: shade[1] }}>
        <div className="mx-auto px-6" style={{ maxWidth: space.maxWidth, paddingTop: 96 }}>
          <Label>{productChapter.eyebrow}</Label>
        </div>
        {featureSections.map((section, i) => (
          <FeatureSection key={section.title} {...section} flip={i % 2 === 1} />
        ))}
      </div>

      <AskJarvis />
      <Method />
      <Replace />
      <Objections />
      <Fit />
      <Pricing />
      <SavingsTable />
      <FinalCta />
      <Footer />
    </div>
  )
}
