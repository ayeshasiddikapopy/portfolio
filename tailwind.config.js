/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1240px',
        center: true,
      },
      colors: {
        'primary' :'#E6A4B4',
        'secondary': '#F5EEE6',
        'white':'#FFF8E3',
        '':'#F3D7CA',
        'black' : '#222222'
      },
      fontFamily:{
        'philospher' : ["Philosopher", 'sans-serif'],
        'sans':[ "Open Sans", 'sans-serif']
      }

    }
  },
  plugins: [],
} 
