import logoImg from '../assets/sellnode-logo-inversa.svg'
import { APP_URL, COPYRIGHT } from '../content/site'
import { nav } from '../content/home'
import { onDark, space, type } from '../lib/theme'

/**
 * Pie. Lleva el descriptor de marca junto a la firma: es el último sitio donde
 * alguien que llegó por una búsqueda confirma qué es esto. «Entrar» también
 * vive acá porque en móvil el nav no lo muestra.
 */
const links = [
  { label: nav.entrar, href: APP_URL },
  { label: 'Política de Privacidad', href: '/privacidad' },
  { label: 'Términos de Servicio', href: '/terminos' },
]

export function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${onDark.lineSoft}`, padding: '44px 0 52px' }}>
      <div
        className="mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-end"
        style={{ maxWidth: space.maxWidth, gap: 28 }}
      >
        <div>
          <img src={logoImg} alt="SellNode" style={{ height: 27 }} />
          <div style={{ ...type.body, fontSize: 13.5, color: onDark.tertiary, marginTop: 14 }}>
            CRM para equipos que venden por llamada.
          </div>
          <div style={{ fontSize: 12, color: onDark.faint, marginTop: 10 }}>{COPYRIGHT}</div>
        </div>

        <nav className="flex flex-wrap items-center" style={{ gap: 22 }}>
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              style={{ fontSize: 13, color: onDark.tertiary }}
              className="hover:!text-[#F6F5F0] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
