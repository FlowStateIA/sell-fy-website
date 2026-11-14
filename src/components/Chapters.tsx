import { method, objections, problem, replace, whyNotCrm } from '../content/home'
import { Chapter, ChapterClose, ChapterGrid } from './ChapterKit'
import { ReplaceGrid } from './ReplaceGrid'

/**
 * Los capítulos de la home que son encabezado + grilla. Están juntos porque son
 * la misma pieza con distinto contenido: separarlos en cinco archivos de diez
 * líneas no haría más fácil cambiar el argumento.
 *
 * El orden es el del VSL que ya usa el equipo: primero el dolor, después por
 * qué lo que probaste no alcanzó, después el mecanismo, y sólo entonces el
 * producto.
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

/** 02 — el cambio de paradigma: por qué un CRM genérico no alcanza. */
export function WhyNotCrm() {
  return (
    <Chapter eyebrow={whyNotCrm.eyebrow} title={whyNotCrm.title} body={whyNotCrm.body}>
      <ChapterGrid items={whyNotCrm.items} cols={3} boxed />
    </Chapter>
  )
}

/** 05 — Control Comercial 360. Mantener el orden: comprender, implementar, acompañar. */
export function Method() {
  return (
    <Chapter eyebrow={method.eyebrow} title={method.title} body={method.subtitle}>
      <ChapterGrid items={method.pillars} cols={3} boxed />
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
