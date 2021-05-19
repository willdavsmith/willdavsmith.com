const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        header: ['Barlow', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        yellow: '0 -4px 0 0 rgb(251, 191, 36) inset',
        blue: '0 -4px 0 0 rgb(59, 130, 246) inset',
        red: '0 -4px 0 0 rgb(239, 68, 68) inset',
      },
      outline: {
        gray: '1px solid #cccccc',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
