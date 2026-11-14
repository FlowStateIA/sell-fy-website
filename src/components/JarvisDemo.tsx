import type { CSSProperties } from 'react'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowUp, MessageSquareText } from 'lucide-react'

import { demoMeta, jarvis } from '../content/productDemo'
import { color, motion as mo, onDark, radius, space, type } from '../lib/theme'
import { WindowChrome } from './demoKit'
import { Label } from './ui'

/**
 * Jarvis respondiendo, en vivo. A la izquierda, preguntas como las que sugiere
 * el asistente real; a la derecha, la conversación: la pregunta, qué consultó,
 * la respuesta línea por línea y los accesos a la pantalla donde está el dato.
 *
 * Las respuestas no se generan: están escritas con los datos de ejemplo de la
 * página (src/content/productDemo.ts), y el pie lo dice.
 */

/** Cuánto «piensa» antes de responder, y cuánto queda cada respuesta en pantalla. */
const THINK_MS = 900
const HOLD_MS = 8200

export function JarvisDemo() {
  const reduceMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  // Sólo avanza mientras se ve, para que al llegar arranque en la primera pregunta.
  const inView = useInView(ref, { margin: '-25% 0px -25% 0px' })
  const [index, setIndex] = useState(0)
  const [auto, setAuto] = useState(true)
  const playing = auto && inView && !reduceMotion

  const current = jarvis.questions[index]

  // Cada pregunta nueva pasa primero por «consultando»: se guarda cuál fue la
  // última respondida, y mientras no coincida con la actual, está pensando.
  const [answered, setAnswered] = useState<string | null>(null)
  const thinking = !reduceMotion && answered !== current.id
  useEffect(() => {
    const id = setTimeout(() => setAnswered(current.id), THINK_MS)
    return () => clearTimeout(id)
  }, [current.id])

  useEffect(() => {
    if (!playing) return
    const id = setTimeout(
      () => setIndex(i => (i + 1) % jarvis.questions.length),
      HOLD_MS,
    )
    return () => clearTimeout(id)
  }, [playing, index])

  // En móvil las preguntas van en una fila que se desliza y sigue a la activa.
  const listRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const list = listRef.current
    const tab = list?.children[index] as HTMLElement | undefined
    if (!list || !tab || list.scrollWidth <= list.clientWidth) return
    list.scrollTo({ left: tab.offsetLeft - 24, behavior: 'smooth' })
  }, [index])

  const lines = [current.intro, ...current.points, current.closing]

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-4 lg:gap-5"
      style={{ marginTop: space.block }}
    >
      {/* Las preguntas */}
      <div>
        <div
          ref={listRef}
          role="tablist"
          aria-label={jarvis.questionsLabel}
          className="flex lg:flex-col overflow-x-auto no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0"
          style={{ gap: 6 }}
        >
          {jarvis.questions.map((q, i) => {
            const on = i === index
            return (
              <button
                key={q.id}
                role="tab"
                aria-selected={on}
                onClick={() => {
                  setIndex(i)
                  setAuto(false)
                }}
                className={`relative flex items-center flex-shrink-0 text-left transition-colors duration-200 ${on ? 'glass' : ''}`}
                style={{
                  gap: 12,
                  padding: '15px 16px',
                  borderRadius: radius.md,
                  border: on ? undefined : '1px solid transparent',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  overflow: 'hidden',
                }}
              >
                <MessageSquareText
                  size={15}
                  strokeWidth={1.7}
                  color={on ? color.red : onDark.faint}
                  style={{ flexShrink: 0 }}
                />
                <span
                  style={{
                    fontSize: 15,
                    letterSpacing: '-0.02em',
                    whiteSpace: 'nowrap',
                    color: on ? onDark.primary : onDark.tertiary,
                  }}
                >
                  {q.question}
                </span>

                {on && playing && (
                  <motion.span
                    key={index}
                    className="absolute left-0 bottom-0"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: HOLD_MS / 1000, ease: 'linear' }}
                    style={{ height: 2, backgroundColor: color.red }}
                  />
                )}
              </button>
            )
          })}
        </div>
        <p
          className="hidden lg:block"
          style={{ fontSize: 12.5, lineHeight: '19px', color: onDark.faint, marginTop: 20, paddingLeft: 16 }}
        >
          {jarvis.note}
        </p>
      </div>

      {/* La conversación */}
      <div className="bezel" style={{ borderRadius: radius.xl }}>
        <div
          className="relative flex flex-col overflow-hidden text-left"
          style={{ borderRadius: 16, backgroundColor: color.surface, minHeight: 440 }}
        >
          <WindowChrome url="app.sell-node.com/asistente" badge={demoMeta.badge} />

          {/* Resplandor de fondo */}
          <div
            className="absolute inset-x-0 pointer-events-none"
            style={{
              top: 42,
              height: 260,
              background:
                'radial-gradient(60% 80% at 50% 0%, rgba(236,60,50,0.10), transparent 70%)',
            }}
          />

          <div className="relative flex-1 flex flex-col" style={{ padding: '22px 20px 18px', gap: 16 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                role="tabpanel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col"
                style={{ gap: 16 }}
              >
                {/* La pregunta */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: mo.ease }}
                  className="glass self-end"
                  style={{
                    maxWidth: '86%',
                    padding: '10px 14px',
                    borderRadius: '14px 14px 4px 14px',
                    fontSize: 14,
                    letterSpacing: '-0.01em',
                    color: onDark.primary,
                  }}
                >
                  {current.question}
                </motion.div>

                {/* La respuesta */}
                <div className="flex items-start" style={{ gap: 12 }}>
                  <span
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: radius.sm,
                      backgroundColor: 'rgba(236,60,50,0.12)',
                      border: '1px solid rgba(236,60,50,0.3)',
                    }}
                  >
                    <img src="/brand/sellnode-simbolo.svg" alt="" style={{ height: 12 }} />
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center flex-wrap" style={{ gap: 8, minHeight: 30 }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: onDark.primary }}>
                        {jarvis.name}
                      </span>
                      <Label tone="muted" style={{ letterSpacing: '0.1em' }}>
                        {thinking
                          ? `${jarvis.consulting}…`
                          : `${jarvis.consultedLabel} · ${current.consulted}`}
                      </Label>
                    </div>

                    {thinking ? (
                      <div className="flex items-center" style={{ gap: 5, height: 26 }} aria-hidden="true">
                        {[0, 1, 2].map(i => (
                          <motion.span
                            key={i}
                            animate={{ opacity: [0.25, 1, 0.25] }}
                            transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
                            style={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              backgroundColor: onDark.secondary,
                            }}
                          />
                        ))}
                      </div>
                    ) : (
                      <div style={{ marginTop: 4 }}>
                        {lines.map((line, i) => {
                          const point = i > 0 && i < lines.length - 1
                          return (
                            <motion.div
                              key={line}
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.35, delay: i * 0.28, ease: mo.ease }}
                              className="flex items-start"
                              style={{
                                gap: 10,
                                marginTop: i === 0 ? 0 : point ? 9 : 14,
                                ...(type.body as CSSProperties),
                                fontSize: 14,
                                color: point ? onDark.secondary : onDark.primary,
                              }}
                            >
                              {point && (
                                <span
                                  style={{
                                    width: 5,
                                    height: 5,
                                    borderRadius: '50%',
                                    backgroundColor: color.red,
                                    flexShrink: 0,
                                    marginTop: 9,
                                  }}
                                />
                              )}
                              <span>{line}</span>
                            </motion.div>
                          )
                        })}

                        {/* Adónde ir a ver el dato */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4, delay: lines.length * 0.28 }}
                          className="flex flex-wrap"
                          style={{ gap: 8, marginTop: 18 }}
                        >
                          {current.actions.map(action => (
                            <span
                              key={action}
                              className="btn-ghost inline-flex items-center"
                              style={{
                                gap: 6,
                                padding: '7px 12px',
                                borderRadius: radius.sm,
                                fontSize: 12.5,
                                fontWeight: 700,
                              }}
                            >
                              {action}
                              <span aria-hidden="true" style={{ color: onDark.tertiary }}>
                                →
                              </span>
                            </span>
                          ))}
                        </motion.div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Caja de texto, de adorno: la demo se maneja con las preguntas de la izquierda. */}
            <div
              className="well flex items-center justify-between mt-auto"
              aria-hidden="true"
              style={{ padding: '10px 10px 10px 16px', borderRadius: radius.md }}
            >
              <span style={{ fontSize: 13.5, color: onDark.faint }}>{jarvis.placeholder}</span>
              <span
                className="flex items-center justify-center"
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: radius.sm,
                  backgroundColor: 'rgba(246,245,240,0.08)',
                  color: onDark.tertiary,
                }}
              >
                <ArrowUp size={15} strokeWidth={2} />
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="lg:hidden" style={{ fontSize: 12.5, color: onDark.faint, textAlign: 'center' }}>
        {jarvis.note}
      </p>
    </div>
  )
}
