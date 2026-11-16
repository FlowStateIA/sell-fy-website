import { createContext, useContext } from 'react'

import { onDark, onLight } from './theme'

/**
 * Tono de la sección. La home alterna tinta y marfil, y cada pieza adentro
 * necesita saber sobre qué fondo está parada para elegir su paleta de texto.
 *
 * Vive fuera de ChapterKit porque un archivo de componentes que además exporta
 * funciones rompe el refresco en caliente de Vite.
 */
export type Tone = 'dark' | 'light'

export const ToneContext = createContext<Tone>('dark')

export const useTone = () => useContext(ToneContext)

/** Paleta de texto según el fondo de la sección. */
export const palette = (tone: Tone) => (tone === 'light' ? onLight : onDark)
