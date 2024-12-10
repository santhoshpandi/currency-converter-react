/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation:{
        'slide-left':'slideFromLeft 1s ease-out forwards',
        'slide-right':'slideFromRight 1s ease-out forwards',
        'slide-top':'slideFromTop 1s ease-out forwards',
        'slide-bottom':'slideFromBottom 1s ease-out forwards',
      },
      keyframes:{
        slideFromLeft:{
          '0%' : {transform: 'translateX(-30%)',opacity: 0},
          '100%' : {transform: 'translateX(0%)',opacity: 1}
        },
        slideFromRight:{
          '0%' : {transform: 'translateX(30%)',opacity: 0},
          '100%' : {transform: 'translateX(0%)',opacity: 1}
        },
        slideFromTop:{
          '0%' : {transform: 'translateY(30%)',opacity: 0},
          '100%' : {transform: 'translateY(0%)',opacity: 1}
        },
        slideFromBottom:{
          '0%' : {transform: 'translateY(-30%)',opacity: 0},
          '100%' : {transform: 'translateY(0%)',opacity: 1}
        }
      }
    },
  },
  plugins: [],
}