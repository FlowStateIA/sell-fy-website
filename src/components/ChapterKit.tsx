import type { CSSProperties, ReactNode } from 'react'
import { motion } from 'framer-motion'

import { CALENDLY_URL } from '../content/site'
import { CTA_LABEL } from '../content/home'
import { color, motion as mo, onDark, radius, shade, space, type } from '../lib/theme'
import { ToneContext, palette, useTone, type Tone } from '../lib/tone'
import { Button, Label, TwoTone } from './ui'

/**
 * Piezas de los capítulos de la home.
 *
 * La home alterna secciones en tinta y en marfil. No es decoración: muchas
 * secciones del mismo negro se leen como una sola pared, y el corte en claro
 * marca dónde cambia el argumento. Entre dos oscuras seguidas cambia apenas el
 * tono (`shade`), por la misma razón.
 */

export function Chapter({
  eyebrow,
  title,
  body,
  id,
  tone = 'dark',
  shadeIndex = 0,
  children,
}: {
  eyebrow: string
  title: string
  body?: string
  id?: string
  tone?: Tone
  /** Cuál de los tonos oscuros usa la sección (0, 1 o 2). */
  shadeIndex?: 0 | 1 | 2
  children?: ReactNode
}) {
  const c = palette(tone)
  const light = tone === 'light'

  return (
    <ToneContext.Provider value={tone}>
      <section
        id={id}
        className="relative"
        style={{
          padding: `${space.section} 0`,
          backgroundColor: light ? color.ivory : shade[shadeIndex],
          color: c.primary,
          scrollMarginTop: 80,
        }}
      >
        <div className="relative mx-auto px-6" style={{ maxWidth: space.maxWidth }}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: mo.base, ease: mo.ease }}
          >
            <Label tone={light ? 'light' : 'accent'}>{eyebrow}</Label>
            <div
              className={body ? 'grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 md:gap-16' : ''}
              style={{ marginTop: 20 }}
            >
              <h2
                style={{
                  ...(type.h2 as CSSProperties),
                  whiteSpace: 'pre-line',
                  textWrap: 'balance',
                  maxWidth: body ? undefined : 860,
                }}
              >
                <TwoTone text={title} light={light} />
              </h2>
              {body && (
                <p style={{ ...(type.lead as CSSProperties), color: c.secondary, alignSelf: 'end' }}>
                  {body}
                </p>
              )}
            </div>
          </motion.div>
          {children}
        </div>
      </section>
    </ToneContext.Provider>
  )
}

export type ChapterItem = {
  tag?: string
  title: string
  body: string
}

/**
 * Grilla de tarjetas: vidrio sobre oscuro, papel sobre marfil. Con `accentLast`
 * la última va en rojo nodo — el manual reserva el rojo para una cosa por
 * pieza, y en una secuencia esa cosa es adónde se llega.
 */
export function ChapterGrid({
  items,
  cols = 3,
  accentLast = false,
}: {
  items: ChapterItem[]
  cols?: 2 | 3 | 4
  accentLast?: boolean
}) {
  const tone = useTone()
  const c = palette(tone)
  const light = tone === 'light'

  const colClass =
    cols === 4
      ? 'sm:grid-cols-2 lg:grid-cols-4'
      : cols === 2
        ? 'sm:grid-cols-2'
        : 'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <div className={`grid grid-cols-1 ${colClass} gap-3 md:gap-4`} style={{ marginTop: 60 }}>
      {items.map((item, i) => {
        const accent = accentLast && i === items.length - 1
        const skin = accent ? 'glass-accent' : light ? 'paper' : 'glass'
        const ink = accent ? color.surface : c.primary
        const soft = accent ? 'rgba(18,20,21,0.72)' : c.secondary
        return (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: mo.fast, delay: Math.min(i, 4) * 0.07, ease: mo.ease }}
            className={skin}
            style={{ padding: '24px 22px 26px', borderRadius: radius.lg }}
          >
            {item.tag && (
              <div
                style={{
                  ...(type.label as CSSProperties),
                  color: accent ? 'rgba(18,20,21,0.62)' : light ? c.secondary : onDark.tertiary,
                  marginBottom: 34,
                }}
              >
                {item.tag}
              </div>
            )}
            <div style={{ ...(type.h3 as CSSProperties), color: ink, marginBottom: 9 }}>
              {item.title}
            </div>
            <p style={{ ...(type.body as CSSProperties), fontSize: 13.5, color: soft }}>{item.body}</p>
          </motion.article>
        )
      })}
    </div>
  )
}

/** Frase que cierra un capítulo y empuja al siguiente. */
export function ChapterClose({ children }: { children: ReactNode }) {
  const c = palette(useTone())
  return (
    <p
      style={{
        marginTop: 52,
        paddingTop: 28,
        borderTop: `1px solid ${c.line}`,
        ...(type.lead as CSSProperties),
        color: c.primary,
        maxWidth: 760,
      }}
    >
      {children}
    </p>
  )
}

/** El único CTA de la página: agendar demo. */
export function DemoCta({
  size = 'md',
  center = false,
  sub,
}: {
  size?: 'md' | 'lg'
  center?: boolean
  sub?: string
}) {
  const c = palette(useTone())
  return (
    <div className={`flex flex-col gap-3 ${center ? 'items-center' : 'items-start'}`}>
      <Button href={CALENDLY_URL} size={size}>
        {CTA_LABEL}
      </Button>
      {sub && <span style={{ fontSize: 13, color: c.tertiary, maxWidth: 440 }}>{sub}</span>}
    </div>
  )
}
