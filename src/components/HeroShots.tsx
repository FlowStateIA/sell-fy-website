import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, useInView, useReducedMotion } from 'framer-motion'
import { ClipboardCheck, CreditCard, LayoutDashboard, Phone, type LucideIcon } from 'lucide-react'

import { heroShots, type HeroShotId } from '../content/home'
import { onDark } from '../lib/theme'
import { DemoTabBar, SaleToast, ShotWindow } from './demoKit'

/**
 * El producto en el hero: capturas reales de la app, una por pestaña. Las
 * pestañas avanzan solas y, al entrar a cada una, aparece el aviso de lo que
 * «acaba de pasar» ahí. Mismo comportamiento que la demo de /demo.
 *
 * · Avanza sólo mientras está a la vista, y no avanza si el usuario pidió menos
 *   movimiento: ve la primera pantalla con su aviso fijo y las pestañas a mano.
 * · Al elegir una pestaña, deja de avanzar.
 * · Las capturas no cambian de tamaño entre pestañas, así que la página no salta.
 */

const ICONS: Record<HeroShotId, LucideIcon> = {
  tablero: LayoutDashboard,
  llamadas: Phone,
  cobros: CreditCard,
  auditoria: ClipboardCheck,
}

/** Cada cuánto cambia de pestaña cuando nadie la toca. */
const AUTOPLAY_MS = 6500

export function HeroShots() {
  const reduceMotion = useReducedMotion()
  const marco = useRef<HTMLDivElement>(null)
  const visible = useInView(marco, { amount: 0.4 })
  const [active, setActive] = useState<HeroShotId>(heroShots.tabs[0].id)
  const [playing, setPlaying] = useState(!reduceMotion)
  const [toastVisible, setToastVisible] = useState(false)

  const index = heroShots.tabs.findIndex(t => t.id === active)
  const tab = heroShots.tabs[index]
  const avisoVisible = reduceMotion || toastVisible

  useEffect(() => {
    if (!playing || !visible) return
    const id = setTimeout(() => {
      setActive(heroShots.tabs[(index + 1) % heroShots.tabs.length].id)
    }, AUTOPLAY_MS)
    return () => clearTimeout(id)
  }, [playing, visible, index])

  // El aviso entra un momento después de cambiar de pantalla y se va solo.
  // Con menos movimiento queda fijo.
  useEffect(() => {
    if (reduceMotion) return
    const show = setTimeout(() => setToastVisible(true), 900)
    const hide = setTimeout(() => setToastVisible(false), 5200)
    return () => {
      clearTimeout(show)
      clearTimeout(hide)
      setToastVisible(false)
    }
  }, [active, reduceMotion])

  return (
    <div ref={marco}>
      <DemoTabBar
        tabs={heroShots.tabs}
        icons={ICONS}
        active={active}
        playing={playing}
        onSelect={id => {
          setActive(id)
          setPlaying(false)
        }}
        onTogglePlay={() => setPlaying(p => !p)}
        layoutId="hero-tab"
      />

      <ShotWindow
        src={tab.src}
        srcMovil={tab.srcMovil}
        alt={tab.alt}
        url={tab.url}
        badge={heroShots.badge}
        priority
      >
        <AnimatePresence>
          {avisoVisible && (
            <SaleToast
              key={active}
              title={tab.toast.title}
              body={tab.toast.body}
              amount={'amount' in tab.toast ? tab.toast.amount : undefined}
            />
          )}
        </AnimatePresence>
      </ShotWindow>

      <p style={{ marginTop: 18, fontSize: 12.5, color: onDark.faint, textAlign: 'center' }}>
        {heroShots.caption}
      </p>
    </div>
  )
}
