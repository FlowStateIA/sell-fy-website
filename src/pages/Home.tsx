import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Manifesto } from '../components/Manifesto'
import { FeatureSection } from '../components/FeatureSection'
import { Pricing } from '../components/Pricing'
import { Footer } from '../components/Footer'

import { featureSections } from '../content/home'

export function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#08090a', color: '#f7f8f8' }}>
      <Navbar />
      <Hero />
      <Manifesto />
      {featureSections.map((section) => (
        <FeatureSection key={section.title} {...section} />
      ))}
      <Pricing />
      <Footer />
    </div>
  )
}
