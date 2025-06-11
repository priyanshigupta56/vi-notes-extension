// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          display: ['Montserrat', 'sans-serif'],
          handwritten: ['Caveat', 'cursive'],
        },
        colors: {
          // Your custom colors here
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        },
        keyframes: {
          'float': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' }
          },
          'pulse-soft': {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0.8' }
          }
        }
      },
    },
    plugins: [],
  }
  