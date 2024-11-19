/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['ndex.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Warna biru khusus
        secondary: '#FBBF24', // Warna kuning khusus
        customdark: '#535255',
        customHeader: '#26282A',
        customCard: '#1E1E20',
        customFont: '#7C7E80',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  
  
  plugins: [],
}

