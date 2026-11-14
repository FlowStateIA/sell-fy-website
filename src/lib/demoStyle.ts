import type { CSSProperties } from 'react'

import { color, onDark, type } from './theme'

/**
 * Estilos de las pantallas recreadas (la demo del hero y las del capítulo 04).
 * Viven aparte de los componentes porque un archivo de componentes que además
 * exporta constantes rompe el refresco en caliente de Vite.
 *
 * Regla de color, la misma del producto: salvia = bien, rojo = para revisar,
 * todo lo demás en marfil o gris. Sin amarillo.
 */
export type DemoTone = 'good' | 'bad' | 'neutral'

export const toneColor = (tone: DemoTone) =>
  tone === 'good' ? color.sage : tone === 'bad' ? color.red : onDark.primary

/** Cifra destacada: monoespaciada, de ancho fijo y en negrita. */
export const fig: CSSProperties = { ...type.figure, fontWeight: 700 }

/** Celda numérica de tabla, alineada a la derecha. */
export const cell: CSSProperties = {
  ...type.figure,
  fontSize: 12.5,
  color: onDark.secondary,
  textAlign: 'right',
}
