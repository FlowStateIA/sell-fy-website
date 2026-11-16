import logoImg from '../assets/sellnode-logo-inversa.svg'
import { CTA_LABEL, nav } from '../content/home'
import { APP_URL, CALENDLY_URL } from '../content/site'
import { onDark, radius, space } from '../lib/theme'
import { Button } from './ui'

/**
 * Barra de navegación flotante: una pieza de vidrio separada del borde, siempre
 * visible. Se lee como parte del producto, encima de la página, y no como una
 * franja pegada arriba.
 */
export function Navbar() {
  const links = [
    { label: nav.producto, href: '/#producto' },
    { label: nav.precios, href: '/#precios' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-5" style={{ paddingTop: 14 }}>
      <div
        className="glass mx-auto flex items-center justify-between"
        style={{
          maxWidth: space.maxWidth + 24,
          height: 62,
          padding: '0 11px 0 20px',
          borderRadius: radius.xl,
          backgroundColor: 'rgba(14,15,16,0.72)',
          backdropFilter: 'blur(22px) saturate(1.8)',
          WebkitBackdropFilter: 'blur(22px) saturate(1.8)',
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

        <nav className="hidden md:flex items-center" style={{ gap: 30 }}>
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{ fontSize: 13.5, letterSpacing: '-0.01em', color: onDark.secondary }}
              className="hover:!text-[#F6F5F0] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center" style={{ gap: 18 }}>
          <a
            href={APP_URL}
            style={{ fontSize: 13.5, letterSpacing: '-0.01em', color: onDark.secondary }}
            className="hidden sm:inline hover:!text-[#F6F5F0] transition-colors"
          >
            {nav.entrar}
          </a>
          <Button href={CALENDLY_URL}>{CTA_LABEL}</Button>
        </div>
      </div>
    </header>
  )
}
