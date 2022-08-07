/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins':['Poppins', 'sans-serif'],
        'tajwal':['Tajawal', 'sans-serif']
      },
      textColor:{
        'main':'#00ffc3',
        'Cblue':'#23496F'
      },
      backgroundColor:{
        'main':'#00ffc3',
        'Cblue':'#23496F'
      },
      backgroundImage:{
        'Propertypattern':'url("/pattern.png")'

      }
    },
  },
  plugins: [],
}
