import type { CSSProperties } from 'react'

import { integrations } from '../content/shared'
import { onDark, type } from '../lib/theme'
import { BRAND_IMAGES, CONNECT_LOGOS } from './brandLogoMaps'

/**
 * Cinta infinita con las herramientas que se conectan. La lista va duplicada
 * y la pista se desplaza -50%: al reiniciar, la segunda copia está justo
 * donde estaba la primera, así que no se ve el corte.
 *
 * `aria-hidden` en la copia para que un lector de pantalla no lea dos veces
 * la misma lista. La usan la home y /demo.
 */
function IntegrationLogo({ name }: { name: string }) {
  const Svg = CONNECT_LOGOS[name]
  if (Svg) return <Svg size={22} />

  const src = BRAND_IMAGES[name]
  if (!src) return null
  // Los iconos descargados son cuadrados tipo app: el radio los uniforma
  // con los SVG de al lado.
  return (
    <img
      src={src}
      alt=""
      width={22}
      height={22}
      // Sin lazy: la cinta se mueve sola y un logo que todavía no cargó
      // aparecería como hueco a los pocos segundos. Pesan entre 2 y 16 KB.
      style={{ width: 22, height: 22, borderRadius: 5, objectFit: 'contain' }}
    />
  )
}

/** Una pasada de la lista. `copia` oculta el duplicado a lectores de pantalla. */
function MarqueeTrack({ copia }: { copia: boolean }) {
  return (
    <ul className="flex items-center shrink-0" style={{ gap: 0 }} aria-hidden={copia || undefined}>
      {integrations.map(name => (
        <li
          key={name}
          className="flex items-center shrink-0"
          style={{
            gap: 9,
            fontSize: 14,
            color: onDark.secondary,
            padding: '0 26px',
            whiteSpace: 'nowrap',
          }}
        >
          <IntegrationLogo name={name} />
          {name}
        </li>
      ))}
    </ul>
  )
}

export function IntegrationsMarquee({ label }: { label?: string }) {
  return (
    <div>
      {label && (
        <div
          className="text-center"
          style={{ ...(type.label as CSSProperties), color: onDark.tertiary, marginBottom: 18 }}
        >
          {label}
        </div>
      )}
      <div
        style={{
          borderTop: `1px solid ${onDark.lineSoft}`,
          borderBottom: `1px solid ${onDark.lineSoft}`,
          padding: '18px 0',
          overflow: 'hidden',
          // Desvanece los extremos para que la cinta no "aparezca" de golpe.
          maskImage: 'linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)',
        }}
      >
        <div className="marquee-track flex w-max">
          <MarqueeTrack copia={false} />
          <MarqueeTrack copia />
        </div>
      </div>
    </div>
  )
}
