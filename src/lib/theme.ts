/**
 * Sistema visual de SellNode. Una sola fuente para color, tipografía, ritmo y
 * profundidad; antes cada componente repetía los valores a mano y por eso
 * convivían tres rojos distintos y seis pesos de fuente que la tipografía no
 * tiene.
 *
 * La paleta es la del manual de marca (docs/marca/guia-marca-y-copy.md del repo
 * de la app), no una aproximación:
 *   Tinta #121415 · Rojo nodo #EC3C32 · Marfil #F6F5F0 · Niebla #CDCFC9 · Pizarra #51595B
 *
 * El rojo es «la acción principal» y ocupa cerca del 8 % de una pieza: va en el
 * CTA primario, en los rótulos de capítulo y en el nodo. En ningún otro lado.
 */

export const color = {
  /** Fondo de página. Un punto por debajo de Tinta para que las superficies se despeguen. */
  bg: '#0A0B0C',
  /** Tinta: superficies elevadas sobre el fondo (tarjetas, barras). */
  surface: '#121415',
  /** Un escalón más, para lo que tiene que leerse como «encima». */
  surfaceRaised: '#181A1C',
  /** Rojo nodo. Reservado a la acción principal y a los rótulos de capítulo. */
  red: '#EC3C32',
  /** Marfil: el fondo de las secciones claras y el texto sobre oscuro. */
  ivory: '#F6F5F0',
  /** Niebla: líneas y fondos suaves. */
  mist: '#CDCFC9',
  /** Pizarra: texto secundario sobre marfil. */
  slate: '#51595B',
  /** Salvia: lo que está bien. Sin amarillo, que es la regla de color del producto. */
  sage: '#84A98C',
} as const

/** Texto sobre fondo oscuro. Opacidades de marfil, para que todo venga de la paleta. */
export const onDark = {
  primary: color.ivory,
  secondary: 'rgba(246,245,240,0.64)',
  tertiary: 'rgba(246,245,240,0.44)',
  faint: 'rgba(246,245,240,0.30)',
  line: 'rgba(246,245,240,0.09)',
  lineSoft: 'rgba(246,245,240,0.055)',
} as const

/** Texto sobre marfil. */
export const onLight = {
  primary: color.surface,
  secondary: color.slate,
  tertiary: 'rgba(81,89,91,0.72)',
  line: color.mist,
  lineSoft: 'rgba(205,207,201,0.55)',
} as const

/**
 * Escala tipográfica.
 *
 * ⚠️ DejaVu Sans sólo trae 400 y 700: cualquier peso intermedio (510, 550, 600)
 * cae en uno de los dos. El código tenía seis pesos distintos creyendo tener
 * seis niveles. Acá hay dos, y la jerarquía la hacen el tamaño, el interletrado
 * y el color — que es como se hace con una familia de dos pesos.
 */
export const weight = { regular: 400, bold: 700 } as const

export const type = {
  /** Titular del hero. */
  display: {
    fontSize: 'clamp(40px, 6.2vw, 76px)',
    lineHeight: 1.02,
    letterSpacing: '-0.035em',
    fontWeight: weight.bold,
  },
  /** Titular de capítulo. */
  h2: {
    fontSize: 'clamp(28px, 3.8vw, 46px)',
    lineHeight: 1.1,
    letterSpacing: '-0.03em',
    fontWeight: weight.bold,
  },
  /** Título de tarjeta. */
  h3: {
    fontSize: 17,
    lineHeight: '24px',
    letterSpacing: '-0.012em',
    fontWeight: weight.bold,
  },
  /** Párrafo de entrada de capítulo. */
  lead: {
    fontSize: 17,
    lineHeight: '28px',
    letterSpacing: '-0.004em',
    fontWeight: weight.regular,
  },
  /** Texto corriente. */
  body: {
    fontSize: 14.5,
    lineHeight: '23px',
    fontWeight: weight.regular,
  },
  /** Rótulo en versalitas: capítulos, etiquetas, pies. */
  label: {
    fontSize: 11,
    lineHeight: '14px',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    fontWeight: weight.bold,
  },
  /** Cifras: siempre monoespaciadas y de ancho fijo, para que no bailen. */
  figure: {
    fontFamily: "'DejaVu Sans Mono', ui-monospace, monospace",
    fontVariantNumeric: 'tabular-nums',
    letterSpacing: '-0.02em',
  },
} as const

/** Radios. Generosos, que es lo que separa una interfaz moderna de una de 2015. */
export const radius = {
  sm: 8,
  md: 12,
  lg: 18,
  xl: 26,
  pill: 999,
} as const

/** Ritmo vertical. Las secciones respiran distinto según su peso en el argumento. */
export const space = {
  section: 'clamp(80px, 9vw, 140px)',
  sectionTight: 'clamp(64px, 7vw, 104px)',
  gutter: 24,
  maxWidth: 1180,
} as const

/**
 * Profundidad. La página era plana porque todo era el mismo borde sobre el
 * mismo fondo; estas tres capas son lo que da sensación de material.
 */
export const depth = {
  /** Borde que se aclara arriba, como si le diera una luz cenital. */
  edge: 'linear-gradient(180deg, rgba(246,245,240,0.14), rgba(246,245,240,0.04))',
  card: '0 1px 0 rgba(246,245,240,0.05) inset, 0 20px 50px -30px rgba(0,0,0,0.9)',
  cardHover: '0 1px 0 rgba(246,245,240,0.09) inset, 0 28px 60px -28px rgba(0,0,0,0.95)',
  /** Resplandor del color de marca, muy abierto y muy bajo. */
  glow: (opacity = 0.12) =>
    `radial-gradient(60% 50% at 50% 0%, rgba(236,60,50,${opacity}), transparent 70%)`,
} as const

export const motion = {
  ease: [0.22, 0.61, 0.36, 1] as const,
  fast: 0.35,
  base: 0.55,
}
