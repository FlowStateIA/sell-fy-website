import { method, objections, problem, replace, whyNotCrm } from '../content/home'
import { Chapter, ChapterClose, ChapterGrid } from './ChapterKit'
import { ReplaceGrid } from './ReplaceGrid'

/**
 * Capítulos que son encabezado más grilla. Están juntos porque son la misma
 * pieza con distinto contenido.
 *
 * El tono alterna a propósito: «Por qué un CRM no alcanza» y «Cómo trabajamos»
 * van en marfil y cortan la pared de negro en los dos puntos donde el argumento
 * cambia de tercio.
 */

/** 01 — el dolor como cadena causal, no como lista de quejas. */
export function Problem() {
  return (
    <Chapter eyebrow={problem.eyebrow} title={problem.title} body={problem.body}>
      <ChapterGrid items={problem.steps} cols={4} />
      <ChapterClose>{problem.close}</ChapterClose>
    </Chapter>
  )
}

/** 02 — el cambio de paradigma. Primer corte en marfil. */
export function WhyNotCrm() {
  return (
    <Chapter
      tone="light"
      eyebrow={whyNotCrm.eyebrow}
      title={whyNotCrm.title}
      body={whyNotCrm.body}
    >
      <ChapterGrid items={whyNotCrm.items} cols={3} boxed />
    </Chapter>
  )
}

/** 05 — Control Comercial 360. Segundo corte en marfil. */
export function Method() {
  return (
    <Chapter tone="light" eyebrow={method.eyebrow} title={method.title} body={method.subtitle}>
      <ChapterGrid items={method.pillars} cols={3} boxed accentFirst />
    </Chapter>
  )
}

/** 06 — lo que deja de pagar. La grilla sale de shared.ts, igual que en /demo. */
export function Replace() {
  return (
    <Chapter eyebrow={replace.eyebrow} title={replace.title} body={replace.subtitle}>
      <ReplaceGrid />
    </Chapter>
  )
}

/** 07 — las objeciones reales, contestadas mostrando y no prometiendo. */
export function Objections() {
  return (
    <Chapter eyebrow={objections.eyebrow} title={objections.title} body={objections.subtitle}>
      <ChapterGrid items={objections.items} cols={3} boxed />
    </Chapter>
  )
}
