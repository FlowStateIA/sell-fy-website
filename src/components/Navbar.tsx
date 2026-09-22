import { useEffect, useState } from 'react'

import logoImg from '../assets/logo.png'

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
          <img src={logoImg} alt="Sell-fy" style={{ height: 80 }} />
        </a>

        <nav className="flex items-center gap-6 sm:gap-8">
          <a
            href="/demo"
            style={{ fontSize: 13, color: '#8a8f98' }}
            className="hover:!text-[#f7f8f8] transition-colors"
          >
            Demo
          </a>
          <a
            href="/#precios"
            style={{ fontSize: 13, color: '#8a8f98' }}
            className="hover:!text-[#f7f8f8] transition-colors"
          >
            Pricing
          </a>
          <a
            href="https://app.sell-fy.app"
            style={{ fontSize: 13, color: '#8a8f98' }}
            className="hover:!text-[#f7f8f8] transition-colors"
          >
            Log in
          </a>
        </nav>
      </div>
    </header>
  )
}
