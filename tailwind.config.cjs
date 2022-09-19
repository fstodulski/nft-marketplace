/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'red-violet': 'var(--red-violet)',
        'red-linear': 'var(--red-linear)',
        dark: 'var(--dark)',
        'gray-one': 'var(--gray-one)',
        'gray-two': 'var(--gray-two)',
        'gray-three': 'var(--gray-three)',
        'black-one': 'var(--black-one)',
        'black-two': 'var(--black-two)',
        'black-three': 'var(--black-three)',
        'black-four': 'var(--black-four)'
      }
    }
  },
  plugins: [require('tailwind-scrollbar-hide')]
};
