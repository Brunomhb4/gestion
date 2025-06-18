/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta principal con armonía mejorada
        navy: {
          50: '#f8f9fb',
          100: '#eef1f6',
          200: '#dde3ec',
          300: '#c4cdd9',
          400: '#a5b2c4',
          500: '#8b9bb0',
          600: '#6b7a8f',
          700: '#4a5568',
          800: '#352859',
          900: '#291024',
        },
        sage: {
          50: '#f6f8f6',
          100: '#e8f0e8',
          200: '#d1e1d1',
          300: '#a8c8a8',
          400: '#7fb07f',
          500: '#638363',
          600: '#4f6b4f',
          700: '#3f553f',
          800: '#334433',
          900: '#2a372a',
        },
        sky: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#C1E8FF',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#7DA0CA',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Colores de sistema manteniendo armonía
        primary: {
          50: '#f8f9fb',
          100: '#eef1f6',
          200: '#dde3ec',
          300: '#c4cdd9',
          400: '#a5b2c4',
          500: '#291024',
          600: '#291024',
          700: '#352859',
          800: '#291024',
          900: '#291024',
        },
        secondary: {
          50: '#f6f8f6',
          100: '#e8f0e8',
          200: '#d1e1d1',
          300: '#a8c8a8',
          400: '#7fb07f',
          500: '#638363',
          600: '#638363',
          700: '#4f6b4f',
          800: '#3f553f',
          900: '#2a372a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'slide-up': 'slideUp 0.2s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(4px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};