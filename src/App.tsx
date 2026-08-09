import { useEffect, useState } from 'react'

import { Home } from './pages/Home'
import { LegalPage } from './pages/LegalPage'
import { privacyContent, termsContent } from './content/legal'

type Route = 'home' | 'privacidad' | 'terminos'

function resolveRoute(pathname: string): Route {
  if (pathname === '/privacidad') return 'privacidad'
  if (pathname === '/terminos') return 'terminos'
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

  if (route === 'privacidad') return <LegalPage title="Política de Privacidad" content={privacyContent} />
  if (route === 'terminos') return <LegalPage title="Términos de Servicio" content={termsContent} />

  return <Home />
}

export default App
