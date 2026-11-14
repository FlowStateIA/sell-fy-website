import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

import { CALENDLY_URL } from '../content/site'
import { CTA_LABEL } from '../content/home'

/**
 * Primitivas de los capítulos de la home.
 *
 * La home es un argumento numerado, no un catálogo: cada capítulo lleva su
 * rótulo («01 — Dónde se pierde la respuesta») para que el lector sepa que va
 * por un camino. Estas piezas se comparten entre los capítulos para que el
 * ritmo y los tamaños sean los mismos en todos.
 */

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: '#6b6f76',
        marginBottom: 20,
      }}
    >
      {children}
    </div>
  )
}

/** Encabezado de capítulo: rótulo, titular y un párrafo opcional al costado. */
export function Chapter({
  eyebrow,
  title,
  body,
  id,
  children,
}: {
  eyebrow: string
  title: string
  body?: string
  id?: string
  children?: ReactNode
}) {
  return (
    <section id={id} style={{ padding: '96px 0' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <Eyebrow>{eyebrow}</Eyebrow>
          <div className={body ? 'grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12' : ''}>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                fontWeight: 510,
                letterSpacing: '-0.022em',
                lineHeight: 1.15,
                color: '#f7f8f8',
                whiteSpace: 'pre-line',
                maxWidth: body ? undefined : 820,
              }}
            >
              {title}
            </h2>
            {body && (
              <p style={{ fontSize: 17, lineHeight: '26px', color: '#8a8f98' }}>{body}</p>
            )}
          </div>
        </motion.div>
        {children}
      </div>
    </section>
  )
}

export type ChapterItem = {
  tag?: string
  title: string
  body: string
}

/**
 * Grilla de tarjetas de capítulo. La usan el dolor (4 pasos), los contrastes
 * contra un CRM (3), el mecanismo (3), los pilares del método (3) y las
 * objeciones (5), porque todas son lo mismo: rótulo opcional, título y texto.
 */
export function ChapterGrid({
  items,
  cols = 3,
  boxed = false,
}: {
  items: ChapterItem[]
  cols?: 2 | 3 | 4
  boxed?: boolean
}) {
  const colClass =
    cols === 4
      ? 'sm:grid-cols-2 lg:grid-cols-4'
      : cols === 2
        ? 'sm:grid-cols-2'
        : 'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <div className={`grid grid-cols-1 ${colClass} gap-4`} style={{ marginTop: 56 }}>
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, delay: Math.min(i, 3) * 0.08 }}
          style={
            boxed
              ? {
                  padding: '24px',
                  borderRadius: 12,
                  border: '1px solid rgba(255,255,255,0.07)',
                  backgroundColor: '#0b0c0e',
                }
              : { paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)' }
          }
        >
          {item.tag && (
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.07em',
                color: '#e5534b',
                marginBottom: 12,
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {item.tag}
            </div>
          )}
          <div style={{ fontSize: 15, fontWeight: 550, color: '#f7f8f8', marginBottom: 8 }}>
            {item.title}
          </div>
          <p style={{ fontSize: 14, lineHeight: '22px', color: '#6b6f76' }}>{item.body}</p>
        </motion.div>
      ))}
    </div>
  )
}

/** Línea de cierre de capítulo: una frase que resume y empuja al siguiente. */
export function ChapterClose({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        marginTop: 48,
        paddingTop: 28,
        borderTop: '1px solid rgba(255,255,255,0.06)',
        fontSize: 17,
        lineHeight: '26px',
        color: '#d0d6e0',
        maxWidth: 720,
      }}
    >
      {children}
    </p>
  )
}

/**
 * El único CTA de la página: agendar demo. Decisión de David del 2026-11-13.
 * Un solo destino y un solo texto, los dos desde una constante, para que la
 * página no pueda terminar ofreciendo dos acciones distintas.
 */
export function DemoCta({
  size = 'md',
  center = false,
  sub,
}: {
  size?: 'md' | 'lg'
  center?: boolean
  sub?: string
}) {
  return (
    <div className={`flex flex-col gap-3 ${center ? 'items-center' : 'items-start'}`}>
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition-opacity hover:opacity-90"
        style={{
          padding: size === 'lg' ? '14px 32px' : '10px 24px',
          backgroundColor: '#e6e6e6',
          color: '#08090a',
          border: 'none',
          borderRadius: 6,
          fontSize: size === 'lg' ? 15 : 13,
          fontWeight: 500,
          whiteSpace: 'nowrap',
        }}
      >
        {CTA_LABEL}
      </a>
      {sub && (
        <span style={{ fontSize: 13, color: '#6b6f76', maxWidth: 420 }}>{sub}</span>
      )}
    </div>
  )
}
