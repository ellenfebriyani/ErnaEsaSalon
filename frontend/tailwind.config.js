/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Color palette from the Figma design (skripsi BAB IV 4.2.9.4)
        salon: {
          bg: '#FFE9F0',
          accent: '#F97D9C',
          btn: '#C84870',
          btnHover: '#58001C',
          soft: '#FFC4DB',
          contact: '#FFB3C6',
          ok: '#E16C75',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
