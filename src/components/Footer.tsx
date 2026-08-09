import logoImg from '../assets/logo.png'

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 0' }}>
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-4">
          <img src={logoImg} alt="Sell-fy" style={{ height: 20 }} />
          <span style={{ fontSize: 12, color: '#484b52' }}>
            Flow State IA LLC — © 2026
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a href="/privacidad" style={{ fontSize: 12, color: '#484b52' }} className="hover:!text-[#8a8f98] transition-colors">
            Política de Privacidad
          </a>
          <a href="/terminos" style={{ fontSize: 12, color: '#484b52' }} className="hover:!text-[#8a8f98] transition-colors">
            Términos de Servicio
          </a>
        </div>
      </div>
    </footer>
  )
}
