/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* Paleta del manual de marca. Los valores viven en src/lib/theme.ts;
         acá están sólo los que se usan como clases de Tailwind. */
      colors: {
        bg: '#0A0B0C',
        ink: '#121415',
        ivory: '#F6F5F0',
        mist: '#CDCFC9',
        slate: '#51595B',
        accent: '#EC3C32',
      },
      fontFamily: {
        sans: ['"DejaVu Sans"', '-apple-system', 'system-ui', 'sans-serif'],
        mono: ['"DejaVu Sans Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
}
