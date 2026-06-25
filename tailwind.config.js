import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43', // Deep Navy Blue
        },
        mutedGreen: {
          500: '#4d7c64',
          600: '#3d6350',
          700: '#2e4a3c', 
        },
        warmGray: colors.stone,
        background: {
          light: '#fafaf9', // stone-50 (warm gray background)
          dark: '#1c1917', // stone-900
        },
        surface: {
          light: '#ffffff',
          dark: '#292524', // stone-800
        }
      },
      fontFamily: {
        sans: ['Lato', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
