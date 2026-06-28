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
        // --- Primary: Horizon Blue ---
        horizon: {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          DEFAULT: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        // --- Secondary: Orchid Purple ---
        orchid: {
          50:  '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          DEFAULT: '#7C3AED',
          600: '#6D28D9',
          700: '#5B21B6',
          800: '#4C1D95',
        },
        // --- Success: Mint Green ---
        mint: {
          50:  '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          DEFAULT: '#10B981',
          600: '#059669',
          700: '#047857',
        },
        // --- Danger/Urgency: Coral ---
        coral: {
          50:  '#FFF1F2',
          100: '#FFE4E6',
          200: '#FECDD3',
          DEFAULT: '#F43F5E',
          600: '#E11D48',
          700: '#BE123C',
        },
        // --- Neutrals: Slate scale ---
        slate: {
          50:  '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 12px -2px rgba(0,0,0,0.08), 0 2px 6px -2px rgba(0,0,0,0.05)',
        'card-dark': '0 1px 3px 0 rgba(0,0,0,0.3), 0 1px 2px -1px rgba(0,0,0,0.2)',
      },
      keyframes: {
        'spine-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'ring-fill': {
          '0%': { 'stroke-dashoffset': '251.2' },
          '100%': { 'stroke-dashoffset': '0' },
        },
      },
      animation: {
        'spine-pulse': 'spine-pulse 2s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'ring-fill': 'ring-fill 1.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
