import { useEffect, useState } from 'react'

import logoImg from '../assets/sellnode-logo-inversa.svg'
import { nav } from '../content/home'
import { CALENDLY_URL } from '../content/site'
import { APP_URL } from '../content/site'
import { Button } from './ui'
import { CTA_LABEL } from '../content/home'
import { onDark, space } from '../lib/theme'

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
        backgroundColor: scrolled ? 'rgba(10,11,12,0.72)' : 'transparent',
        borderColor: scrolled ? onDark.lineSoft : 'transparent',
      }}
    >
      <div className="mx-auto px-6 h-full flex items-center justify-between"
        style={{ maxWidth: space.maxWidth }}>
        {/* En móvil va el símbolo solo —que es el uso que el manual le da— porque
            la firma completa a su tamaño mínimo (144px) no deja sitio al CTA. */}
        <a href="/" className="flex items-center" style={{ marginLeft: -4 }}>
          <img
            src="/brand/sellnode-simbolo.svg"
            alt="SellNode"
            className="sm:hidden"
            style={{ height: 30 }}
          />
          <img
            src={logoImg}
            alt="SellNode"
            className="hidden sm:block"
            style={{ height: 27 }}
          />
        </a>

        <nav className="flex items-center gap-4 sm:gap-7 flex-shrink-0">
          {/* En español: decía «Pricing» y «Log in» en una página en español. */}
          <a
            href="/#producto"
            style={{ fontSize: 13.5, color: onDark.secondary }}
            className="hidden sm:inline hover:!text-[#F6F5F0] transition-colors"
          >
            {nav.producto}
          </a>
          <a
            href="/#precios"
            style={{ fontSize: 13.5, color: onDark.secondary }}
            className="hidden sm:inline hover:!text-[#F6F5F0] transition-colors"
          >
            {nav.precios}
          </a>
          <a
            href={APP_URL}
            style={{ fontSize: 13.5, color: onDark.secondary }}
            className="hidden sm:inline hover:!text-[#F6F5F0] transition-colors"
          >
            {nav.entrar}
          </a>
          <Button href={CALENDLY_URL}>{CTA_LABEL}</Button>
        </nav>
      </div>
    </header>
  )
}
