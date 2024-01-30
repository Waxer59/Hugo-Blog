/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: 'class',
  content: [
    '*.md',
    '*.html',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      animation: {
        float: 'float 6s ease-in-out infinite;'
      },
      keyframes: {
        float: {
          '0%': {
            transform: 'translatey(0px)'
          },
          '50%': {
            transform: 'translatey(-20px)'
          },
          '100%': {
            transform: 'translatey(0px)'
          }
        }
      },
      colors: {
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
};
