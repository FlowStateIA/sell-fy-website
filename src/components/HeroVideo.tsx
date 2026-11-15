import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, useReducedMotion } from 'framer-motion'

import { heroVideo } from '../content/home'
import { demoMeta } from '../content/productDemo'
import { color, onDark, radius } from '../lib/theme'
import { SaleToast, WindowChrome } from './demoKit'

/**
 * El producto en el hero: una grabación real del tablero, en bucle, dentro de la
 * ventana de la marca. Encima entra el aviso de una venta nueva, que se ata al
 * TIEMPO DEL VIDEO (no a un temporizador aparte): así vuelve a entrar en cada
 * vuelta del bucle y, si el video se pausa, el aviso se queda donde estaba.
 *
 * · Sin autoplay cuando el usuario pidió menos movimiento: se ve la portada con el
 *   aviso fijo.
 * · El video se pausa cuando sale de pantalla, para no gastar batería ni datos.
 * · En móvil el cuadro se recorta (cover) para que el tablero se vea más grande
 *   que si se encogiera el 16:9 entero.
 */
export function HeroVideo() {
  const reduceMotion = useReducedMotion()
  const marco = useRef<HTMLDivElement>(null)
  const video = useRef<HTMLVideoElement>(null)
  const [t, setT] = useState(0)

  // Pausa fuera de pantalla, reanuda al volver.
  useEffect(() => {
    const el = marco.current
    const v = video.current
    if (!el || !v || reduceMotion) return
    const obs = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) void v.play().catch(() => {})
        else v.pause()
      },
      { threshold: 0.25 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [reduceMotion])

  const { toast } = heroVideo
  const avisoVisible = reduceMotion || (t >= toast.from && t < toast.to)

  return (
    <div>
      <div className="bezel" style={{ borderRadius: radius.xl }}>
        <div
          ref={marco}
          className="relative overflow-hidden text-left"
          style={{ borderRadius: 16, backgroundColor: color.surface }}
        >
          <WindowChrome url={heroVideo.url} badge={demoMeta.badge} />

          <div className="relative hero-video-cuadro" style={{ backgroundColor: '#0B0C0D' }}>
            {reduceMotion ? (
              <img
                src={heroVideo.poster}
                alt={heroVideo.alt}
                className="block w-full h-full"
                style={{ objectFit: 'cover' }}
              />
            ) : (
              <video
                ref={video}
                src={heroVideo.src}
                poster={heroVideo.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={heroVideo.alt}
                onTimeUpdate={e => setT(e.currentTarget.currentTime)}
                className="block w-full h-full"
                style={{ objectFit: 'cover' }}
              />
            )}

            <AnimatePresence>
              {avisoVisible && (
                <SaleToast
                  key="venta-nueva"
                  title={toast.title}
                  body={toast.body}
                  amount={toast.amount}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <p style={{ marginTop: 18, fontSize: 12.5, color: onDark.faint, textAlign: 'center' }}>
        {heroVideo.caption}
      </p>
    </div>
  )
}
