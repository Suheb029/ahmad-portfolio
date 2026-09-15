/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        surfaceSubtle: '#F8FAFC',
        primary: '#4F46E5',
        primaryHover: '#4338CA',
        secondary: '#0284C7',
        accent: '#06B6D4',
        textPrimary: '#0F172A',
        textSecondary: '#475569',
        textMuted: '#94A3B8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}
