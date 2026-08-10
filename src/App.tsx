import { useEffect, useState } from 'react'

import { Home } from './pages/Home'
import { Demo } from './pages/Demo'
import { LegalPage } from './pages/LegalPage'
import { privacyContent, termsContent } from './content/legal'

type Route = 'home' | 'demo' | 'privacidad' | 'terminos'

function resolveRoute(pathname: string): Route {
  const path = pathname.replace(/\/+$/, '') || '/'
  if (path === '/demo') return 'demo'
  if (path === '/privacidad') return 'privacidad'
  if (path === '/terminos') return 'terminos'
  return 'home'
}

function App() {
  const [route, setRoute] = useState<Route>(() => resolveRoute(window.location.pathname))

  // Routing basado en pathname. vercel.json reescribe cualquier ruta a index.html,
  // así que el servidor siempre entrega la SPA y aquí decidimos qué renderizar.
  useEffect(() => {
    const handleRoute = () => setRoute(resolveRoute(window.location.pathname))
    window.addEventListener('popstate', handleRoute)
    return () => window.removeEventListener('popstate', handleRoute)
  }, [])

  if (route === 'demo') return <Demo />
  if (route === 'privacidad') return <LegalPage title="Política de Privacidad" content={privacyContent} />
  if (route === 'terminos') return <LegalPage title="Términos de Servicio" content={termsContent} />

  return <Home />
}

export default App
