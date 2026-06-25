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
        background: {
          DEFAULT: '#131313',
          deep: '#0A0A0B',
        },
        primary: {
          DEFAULT: '#eb9a01', // primary-container
          fixed: '#ffddb5',
          dim: '#ffb958', // primary
        },
        secondary: {
          DEFAULT: '#3131c0', // secondary-container
          fixed: '#e1e0ff',
          dim: '#c0c1ff', // secondary
        },
        tertiary: {
          DEFAULT: '#ca93ff',
          fixed: '#f0dbff',
          dim: '#ddb7ff',
        },
        error: '#ffb4ab',
        'neon-cyan': '#00F0FF',
        'off-white': '#FAFAF7',
        surface: {
          DEFAULT: '#131313',
          dim: '#131313',
          bright: '#393939',
          'container-lowest': '#0e0e0e',
          'container-low': '#1c1b1b',
          container: '#20201f',
          'container-high': '#2a2a2a',
          'container-highest': '#353535',
        },
        'on-surface': {
          DEFAULT: '#e5e2e1',
          variant: '#d8c3ad',
        },
        outline: {
          DEFAULT: '#a08e7a',
          variant: '#524434',
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
