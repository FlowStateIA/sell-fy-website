import { mechanism, method, objections, problem, replace, whyNotCrm } from '../content/home'
import { Chapter, ChapterClose, ChapterGrid } from './ChapterKit'
import { ReplaceGrid } from './ReplaceGrid'
import { SaleJourney } from './SaleJourney'

/**
 * Los capítulos de la home que son encabezado más una pieza.
 *
 * El orden pone primero qué hace la herramienta —una venta seguida paso a
 * paso— y después por qué importa. El tono alterna a propósito: los cortes en
 * marfil caen donde el argumento cambia de tema.
 */

/** 01 — qué hace: una venta, de la agenda al tablero. */
export function HowItConnects() {
  return (
    <Chapter
      shadeIndex={1}
      eyebrow={mechanism.eyebrow}
      title={mechanism.title}
      body={mechanism.body}
    >
      <SaleJourney />
      <ChapterClose>{mechanism.close}</ChapterClose>
    </Chapter>
  )
}

/** 02 — por qué importa: el dolor como cadena, que termina en la tarjeta roja. */
export function Problem() {
  return (
    <Chapter tone="light" eyebrow={problem.eyebrow} title={problem.title} body={problem.body}>
      <ChapterGrid items={problem.steps} cols={4} accentLast />
      <ChapterClose>{problem.close}</ChapterClose>
    </Chapter>
  )
}

/** 03 — por qué un CRM genérico no alcanza. */
export function WhyNotCrm() {
  return (
    <Chapter eyebrow={whyNotCrm.eyebrow} title={whyNotCrm.title} body={whyNotCrm.body}>
      <ChapterGrid items={whyNotCrm.items} cols={3} />
    </Chapter>
  )
}

/** 05 — Control Comercial 360. Mantener el orden: comprender, implementar, acompañar. */
export function Method() {
  return (
    <Chapter tone="light" eyebrow={method.eyebrow} title={method.title} body={method.subtitle}>
      <ChapterGrid items={method.pillars} cols={3} />
    </Chapter>
  )
}

/** 06 — lo que deja de pagar. La grilla sale de shared.ts, igual que en /demo. */
export function Replace() {
  return (
    <Chapter shadeIndex={1} eyebrow={replace.eyebrow} title={replace.title} body={replace.subtitle}>
      <ReplaceGrid />
    </Chapter>
  )
}

/** 07 — las objeciones reales, contestadas mostrando y no prometiendo. */
export function Objections() {
  return (
    <Chapter
      shadeIndex={2}
      eyebrow={objections.eyebrow}
      title={objections.title}
      body={objections.subtitle}
    >
      <ChapterGrid items={objections.items} cols={3} />
    </Chapter>
  )
}
