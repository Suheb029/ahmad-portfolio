/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0D17',
        surface: '#1A1D2D',
        primary: '#4F46E5',
        secondary: '#06B6D4',
        textPrimary: '#F9FAFB',
        textSecondary: '#9CA3AF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}
