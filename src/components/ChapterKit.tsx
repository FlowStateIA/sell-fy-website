import type { CSSProperties, ReactNode } from 'react'
import { motion } from 'framer-motion'

import { CALENDLY_URL } from '../content/site'
import { CTA_LABEL } from '../content/home'
import { color, depth, motion as mo, onLight, radius, space, type } from '../lib/theme'
import { ToneContext, palette, useTone, type Tone } from '../lib/tone'
import { Button, Label } from './ui'

/**
 * Piezas de los capítulos de la home.
 *
 * La home alterna secciones en tinta y en marfil. No es decoración: doce
 * secciones del mismo negro se leen como una sola pared, y el corte en claro
 * marca dónde cambia el argumento. Los dos fondos salen del manual de marca.
 */

export function Chapter({
  eyebrow,
  title,
  body,
  id,
  tone = 'dark',
  children,
}: {
  eyebrow: string
  title: string
  body?: string
  id?: string
  tone?: Tone
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
          backgroundColor: light ? color.ivory : 'transparent',
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
              className={body ? 'grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-7 md:gap-16' : ''}
              style={{ marginTop: 22 }}
            >
              <h2
                style={{
                  ...(type.h2 as CSSProperties),
                  color: c.primary,
                  whiteSpace: 'pre-line',
                  textWrap: 'balance',
                  maxWidth: body ? undefined : 860,
                }}
              >
                {title}
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
 * Grilla de tarjetas. La primera lleva el acento rojo: el manual reserva el rojo
 * para una cosa por pieza, y en una grilla esa cosa es por dónde se empieza a leer.
 */
export function ChapterGrid({
  items,
  cols = 3,
  boxed = false,
  accentFirst = false,
}: {
  items: ChapterItem[]
  cols?: 2 | 3 | 4
  boxed?: boolean
  accentFirst?: boolean
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
    <div className={`grid grid-cols-1 ${colClass} gap-3 md:gap-4`} style={{ marginTop: 64 }}>
      {items.map((item, i) => {
        const accent = accentFirst && i === 0
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: mo.fast, delay: Math.min(i, 4) * 0.07, ease: mo.ease }}
            className={boxed && !light ? 'hairline' : undefined}
            style={
              boxed
                ? {
                    padding: '26px 24px 28px',
                    borderRadius: radius.lg,
                    backgroundColor: light
                      ? 'rgba(255,255,255,0.6)'
                      : accent
                        ? 'rgba(236,60,50,0.05)'
                        : color.surface,
                    border: light ? `1px solid ${onLight.lineSoft}` : undefined,
                    boxShadow: light ? 'none' : depth.card,
                  }
                : {
                    paddingTop: 22,
                    borderTop: `1px solid ${accent ? color.red : c.line}`,
                  }
            }
          >
            {item.tag && (
              <Label
                tone={light ? 'light' : accent || !boxed ? 'accent' : 'muted'}
                style={{ marginBottom: 14 }}
              >
                {item.tag}
              </Label>
            )}
            <div style={{ ...(type.h3 as CSSProperties), color: c.primary, marginBottom: 8 }}>
              {item.title}
            </div>
            <p style={{ ...(type.body as CSSProperties), color: c.secondary }}>{item.body}</p>
          </motion.div>
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
        marginTop: 56,
        paddingTop: 30,
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
  const tone = useTone()
  const c = palette(tone)
  return (
    <div className={`flex flex-col gap-3 ${center ? 'items-center' : 'items-start'}`}>
      <Button href={CALENDLY_URL} size={size}>
        {CTA_LABEL}
      </Button>
      {sub && <span style={{ fontSize: 13, color: c.tertiary, maxWidth: 440 }}>{sub}</span>}
    </div>
  )
}
