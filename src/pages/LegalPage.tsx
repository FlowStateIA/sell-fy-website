import logoImg from '../assets/logo.png'

export function LegalPage({ title, content }: { title: string; content: string }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#08090a', color: '#f7f8f8' }}>
      <header style={{ height: 56, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-[800px] mx-auto px-6 h-full flex items-center justify-between">
          <a href="/">
            <img src={logoImg} alt="Sell-fy" style={{ height: 100 }} />
          </a>
          <a href="/" style={{ fontSize: 13, color: '#8a8f98' }}>← Volver</a>
        </div>
      </header>
      <div className="max-w-[800px] mx-auto px-6" style={{ padding: '64px 24px 128px' }}>
        <h1 style={{ fontSize: 32, fontWeight: 510, color: '#f7f8f8', marginBottom: 32 }}>{title}</h1>
        <div style={{ fontSize: 14, lineHeight: '24px', color: '#8a8f98', whiteSpace: 'pre-line' }}>
          {content}
        </div>
      </div>
    </div>
  )
}
