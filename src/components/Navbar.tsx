import { useEffect, useState } from 'react'

import logoImg from '../assets/sellnode-logo-inversa.svg'
import { CTA_LABEL, nav } from '../content/home'
import { APP_URL, CALENDLY_URL } from '../content/site'
import { onDark, radius, space } from '../lib/theme'
import { Button } from './ui'

/**
 * Barra de navegación flotante. Va en cápsula y separada del borde: al bajar
 * gana fondo y desenfoque, y se lee como una pieza del producto encima de la
 * página, no como una franja pegada arriba.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: nav.producto, href: '/#producto' },
    { label: nav.precios, href: '/#precios' },
    { label: nav.entrar, href: APP_URL },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-5" style={{ paddingTop: 12 }}>
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'hairline backdrop-blur-xl' : ''
        }`}
        style={{
          maxWidth: space.maxWidth,
          height: 58,
          padding: '0 10px 0 20px',
          borderRadius: radius.pill,
          backgroundColor: scrolled ? 'rgba(18,20,21,0.9)' : 'transparent',
          boxShadow: scrolled ? '0 18px 40px -24px rgba(0,0,0,0.9)' : 'none',
        }}
      >
        {/* En móvil va el símbolo solo —que es el uso que el manual le da— porque
            la firma completa a su tamaño mínimo (144px) no deja sitio al CTA. */}
        <a href="/" className="flex items-center">
          <img
            src="/brand/sellnode-simbolo.svg"
            alt="SellNode"
            className="sm:hidden"
            style={{ height: 28 }}
          />
          <img src={logoImg} alt="SellNode" className="hidden sm:block" style={{ height: 27 }} />
        </a>

        <nav className="flex items-center gap-4 sm:gap-7 flex-shrink-0">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{ fontSize: 13.5, color: onDark.secondary }}
              className="hidden sm:inline hover:!text-[#F6F5F0] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button href={CALENDLY_URL}>{CTA_LABEL}</Button>
        </nav>
      </div>
    </header>
  )
}
