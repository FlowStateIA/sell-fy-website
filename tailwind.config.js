/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#08090a',
        'text-primary': '#f7f8f8',
        'text-secondary': '#8a8f98',
        'text-tertiary': '#6b6f76',
        'text-quaternary': '#484b52',
        'border-default': 'rgba(255,255,255,0.08)',
        accent: '#dc2626',
      },
      fontFamily: {
        sans: ['"Inter"', '"SF Pro Display"', '-apple-system', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
