/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          primary: '#2A2B2E',
          secondary: '#F2F2F2',
          accent: '#7C3AED',
          background: '#FAFAFA',
          card: '#FFFFFF'
        },
        animation: {
          'slide-up': 'slideUp 0.5s ease-out',
        },
        keyframes: {
          slideUp: {
            '0%': { transform: 'translateY(20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          }
        }
      },
    },
    plugins: [],
  };