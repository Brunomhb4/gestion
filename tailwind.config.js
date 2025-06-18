/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#C1E8FF',
          100: '#7DA0CA',
          200: '#638363',
          300: '#352859',
          400: '#291024',
          500: '#291024',
          600: '#352859',
          700: '#352859',
          800: '#291024',
          900: '#291024',
          950: '#291024',
        },
        secondary: {
          50: '#C1E8FF',
          100: '#7DA0CA',
          200: '#638363',
          300: '#352859',
          400: '#291024',
          500: '#352859',
          600: '#291024',
          700: '#291024',
          800: '#291024',
          900: '#291024',
          950: '#291024',
        },
        // New palette colors
        navy: {
          50: '#C1E8FF',
          100: '#7DA0CA',
          200: '#638363',
          300: '#352859',
          400: '#291024',
          500: '#291024',
          600: '#291024',
          700: '#291024',
          800: '#291024',
          900: '#291024',
        },
        blue: {
          50: '#C1E8FF',
          100: '#C1E8FF',
          200: '#7DA0CA',
          300: '#638363',
          400: '#352859',
          500: '#352859',
          600: '#291024',
          700: '#291024',
          800: '#291024',
          900: '#291024',
        },
        sage: {
          50: '#C1E8FF',
          100: '#7DA0CA',
          200: '#638363',
          300: '#638363',
          400: '#638363',
          500: '#638363',
          600: '#352859',
          700: '#291024',
          800: '#291024',
          900: '#291024',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'slide-up': 'slideUp 0.2s ease-out',
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
      },
    },
  },
  plugins: [],
};