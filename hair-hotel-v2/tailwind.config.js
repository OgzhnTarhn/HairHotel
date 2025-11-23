/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Özel Bronz/Altın Rengimiz
        'bronze': '#D4AF37', 
        'bronze-light': '#E5C565',
        'bronze-dark': '#AA8C2C',
        // Koyu Arka Plan Rengimiz (Simsiyah değil, çok koyu gri)
        'dark-bg': '#121212',
        'dark-surface': '#1E1E1E'
      },
      fontFamily: {
        // İleride buraya özel font ekleyebiliriz
        sans: ['Inter', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}