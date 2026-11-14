import { useEffect, useState } from 'react'

import logoImg from '../assets/sellnode-logo-inversa.svg'
import { nav } from '../content/home'
import { APP_URL } from '../content/site'
import { DemoCta } from './ChapterKit'

export function Navbar() {
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
          <img src={logoImg} alt="SellNode" style={{ height: 27 }} />
        </a>

        <nav className="flex items-center gap-4 sm:gap-7 flex-shrink-0">
          {/* En español: decía «Pricing» y «Log in» en una página en español. */}
          <a
            href="/#producto"
            style={{ fontSize: 13, color: '#8a8f98' }}
            className="hidden sm:inline hover:!text-[#f7f8f8] transition-colors"
          >
            {nav.producto}
          </a>
          <a
            href="/#precios"
            style={{ fontSize: 13, color: '#8a8f98' }}
            className="hidden sm:inline hover:!text-[#f7f8f8] transition-colors"
          >
            {nav.precios}
          </a>
          <a
            href={APP_URL}
            style={{ fontSize: 13, color: '#8a8f98' }}
            className="hidden sm:inline hover:!text-[#f7f8f8] transition-colors"
          >
            {nav.entrar}
          </a>
          <DemoCta />
        </nav>
      </div>
    </header>
  )
}
