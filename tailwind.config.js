/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta de azules armoniosa
        'deep-navy': '#021024',      // Azul muy oscuro (casi negro)
        'navy-blue': '#052659',      // Azul marino profundo
        'midnight-blue': '#1B3B6F',  // Azul medianoche clásico
        'sky-muted': '#5483B3',      // Azul cielo apagado
        'blue-soft': '#7DA0CA',      // Azul grisáceo suave
        'sky-light': '#C1E8FF',      // Azul muy claro / celeste
        
        // Variaciones para diferentes usos
        primary: {
          50: '#C1E8FF',
          100: '#A8DCFF',
          200: '#7DA0CA',
          300: '#5483B3',
          400: '#1B3B6F',
          500: '#052659',
          600: '#021024',
          700: '#011020',
          800: '#010C1A',
          900: '#000814',
        },
        
        // Colores de sistema manteniendo la armonía
        success: {
          50: '#E8F5E8',
          100: '#C3E6C3',
          200: '#9DD69D',
          300: '#77C677',
          400: '#51B651',
          500: '#2BA62B',
          600: '#228522',
          700: '#1A641A',
          800: '#114311',
          900: '#082208',
        },
        warning: {
          50: '#FFF8E1',
          100: '#FFECB3',
          200: '#FFE082',
          300: '#FFD54F',
          400: '#FFCA28',
          500: '#FFC107',
          600: '#FFB300',
          700: '#FFA000',
          800: '#FF8F00',
          900: '#FF6F00',
        },
        error: {
          50: '#FFEBEE',
          100: '#FFCDD2',
          200: '#EF9A9A',
          300: '#E57373',
          400: '#EF5350',
          500: '#F44336',
          600: '#E53935',
          700: '#D32F2F',
          800: '#C62828',
          900: '#B71C1C',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-in': 'slideIn 0.4s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
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
        '4xl': '2rem',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(2, 16, 36, 0.1), 0 4px 6px -2px rgba(2, 16, 36, 0.05)',
        'medium': '0 4px 25px -5px rgba(2, 16, 36, 0.15), 0 10px 10px -5px rgba(2, 16, 36, 0.04)',
        'large': '0 10px 40px -10px rgba(2, 16, 36, 0.25), 0 20px 25px -5px rgba(2, 16, 36, 0.1)',
      }
    },
  },
  plugins: [],
};