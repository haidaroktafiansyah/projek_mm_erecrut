const colors = require('tailwindcss/colors')
delete colors.lightBlue

module.exports = {
  purge: {
    enabled: true,
    content: ['./**/*.tsx', './**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: colors,
      textColor: colors,
    },
    colors: {
      ...colors
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
