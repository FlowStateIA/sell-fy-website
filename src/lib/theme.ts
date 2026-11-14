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
  bg: '#0B0C0D',
  /** Tinta: superficies elevadas sobre el fondo (tarjetas, barras). */
  surface: '#121415',
  /** Un escalón más, para lo que tiene que leerse como «encima». */
  surfaceRaised: '#191B1D',
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

/**
 * Fondos de las secciones oscuras. Cada una va en un tono apenas distinto para
 * que dos seguidas no se fundan en una sola pared; todos son vecinos de Tinta.
 */
export const shade = ['#0B0C0D', '#0F1112', '#131516'] as const

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
 * Los titulares van en peso regular y con el interletrado muy cerrado: es lo
 * que hace que un titular grande se lea fino y no pesado. La negrita queda para
 * las cifras y para lo que hay que encontrar de un vistazo dentro de una pantalla.
 *
 * ⚠️ DejaVu Sans sólo trae 400 y 700. No existe un 500: cualquier peso
 * intermedio cae en uno de los dos, así que acá hay dos y nada más.
 */
export const weight = { regular: 400, bold: 700 } as const

export const type = {
  /** Titular del hero. */
  display: {
    fontSize: 'clamp(38px, 5.6vw, 68px)',
    lineHeight: 1.04,
    letterSpacing: '-0.055em',
    fontWeight: weight.regular,
  },
  /** Titular de capítulo. */
  h2: {
    fontSize: 'clamp(29px, 3.9vw, 46px)',
    lineHeight: 1.08,
    letterSpacing: '-0.052em',
    fontWeight: weight.regular,
  },
  /** Título de tarjeta. */
  h3: {
    fontSize: 18,
    lineHeight: '24px',
    letterSpacing: '-0.032em',
    fontWeight: weight.regular,
  },
  /** Párrafo de entrada de capítulo. */
  lead: {
    fontSize: 16.5,
    lineHeight: '27px',
    letterSpacing: '-0.012em',
    fontWeight: weight.regular,
  },
  /** Texto corriente. */
  body: {
    fontSize: 14,
    lineHeight: '22px',
    letterSpacing: '-0.006em',
    fontWeight: weight.regular,
  },
  /** Rótulo: monoespaciado, en versalitas y abierto. Capítulos, etiquetas, pies. */
  label: {
    fontFamily: "'DejaVu Sans Mono', ui-monospace, monospace",
    fontSize: 10.5,
    lineHeight: '14px',
    letterSpacing: '0.13em',
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

/** Radios. Rectángulos redondeados, no cápsulas: 13 para botones, 18 para tarjetas. */
export const radius = {
  sm: 9,
  md: 13,
  lg: 18,
  xl: 22,
  pill: 999,
} as const

/** Ritmo vertical. */
export const space = {
  section: 'clamp(84px, 9vw, 132px)',
  sectionTight: 'clamp(64px, 7vw, 100px)',
  gutter: 24,
  maxWidth: 1180,
} as const

/**
 * Profundidad. Cada superficie lleva tres sombras: un filo de luz arriba, una
 * línea de sombra abajo y la caída. Es lo que hace que una tarjeta parezca una
 * pieza con canto y no un rectángulo con borde.
 *
 * Las superficies en sí (vidrio, papel, marco de ventana) están en index.css
 * como clases: .glass, .glass-accent, .paper, .bezel y .well.
 */
export const depth = {
  card: 'inset 0 1px 0 rgba(255,255,255,0.10), inset 0 -1px 0 rgba(0,0,0,0.30), 0 22px 44px -26px rgba(0,0,0,0.85)',
  /** La ventana de producto: además, un halo del rojo de marca. */
  window:
    'inset 0 1px 0 rgba(255,255,255,0.16), inset 0 -1px 0 rgba(0,0,0,0.35), 0 0 0 6px rgba(246,245,240,0.018), 0 40px 100px -24px rgba(0,0,0,0.85), 0 0 90px -20px rgba(236,60,50,0.30)',
} as const

export const motion = {
  ease: [0.22, 0.61, 0.36, 1] as const,
  fast: 0.35,
  base: 0.55,
}
