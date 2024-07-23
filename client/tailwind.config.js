/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '7xl': '80rem',
      },
      colors: {
        'dark-gray': '#323232',
        'light-gray': '#505050'
      },
      clipPath: {
        'custom-clip': 'circle(61.6% at 87% 1%)',
      }
    },
    fontFamily: {
      'hero': ['Rozha One', 'serif'],
      'body': ['Lato', 'serif']
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    function({ addUtilities }) {
      addUtilities({
        '.clip-custom-clip': {
          'clip-path': 'circle(61.6% at 87% 1%)',
        },
      }, ['responsive', 'hover']);
    }
  ],
}

