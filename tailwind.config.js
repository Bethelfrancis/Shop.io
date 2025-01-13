/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        greys: "#f0f0f0",
        text: "#585858",
        accent: "#FFD700",
      },
      fontSize: {
        h1: 38,
      },
      width: {
        hero: 480,
        text: '80%',
        cust: '410px',
        input: 400
      },
      height: {
        hero: 450
      },
      screens: {
        sm: {max: '500px'},
        md: {max: '650px'},
        mt: {max: '750px'},
        lg: {max: '1000px'},
        xl: {max: '1150px'},
        xl1: {max: '2000px'},
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
      },
    },
  },
  plugins: [],
}

