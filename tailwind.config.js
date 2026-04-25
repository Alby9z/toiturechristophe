/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette — industriel raffiné
        ardoise: {
          50:  '#f0f4f7',
          100: '#d8e4ec',
          200: '#b0c8d8',
          300: '#7aa3bc',
          400: '#4d7d9c',
          500: '#2c5f7a',
          600: '#1e2a35',   // ardoise principale
          700: '#162030',
          800: '#0e1825',
          900: '#080f18',
        },
        cuivre: {
          50:  '#fdf6ee',
          100: '#f8e8cf',
          200: '#f0cd9a',
          300: '#e5ab61',
          400: '#d4904a',   // cuivre clair
          500: '#b87333',   // cuivre principal
          600: '#9a5e26',
          700: '#7a4a1c',
          800: '#5c3614',
          900: '#3d230d',
        },
        stone: {
          50:  '#faf9f7',
          100: '#f4f1ec',
          200: '#e8e3d9',
          300: '#d4cec0',
          400: '#b8b0a0',
          500: '#9a9080',
          600: '#7a7060',
          700: '#5c5448',
          800: '#3e3830',
          900: '#221e18',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Lato"', '"Helvetica Neue"', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
        'xs':  ['0.75rem', { lineHeight: '1.1rem' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.14)',
        'nav': '0 2px 20px rgba(0,0,0,0.3)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease both',
        'fade-in': 'fadeIn 0.4s ease both',
        'slide-down': 'slideDown 0.3s ease both',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%':   { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'hero-pattern': "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(184,115,51,0.03) 40px, rgba(184,115,51,0.03) 41px)",
        'gradient-ardoise': 'linear-gradient(135deg, #080f18 0%, #1e2a35 60%, #2c3e50 100%)',
        'gradient-cuivre': 'linear-gradient(135deg, #b87333, #7a4a1c)',
      },
    },
  },
  plugins: [],
}
