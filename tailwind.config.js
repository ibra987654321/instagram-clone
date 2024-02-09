/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        btnBgColor: '#3797EF',
        inputBgColor: '#F5F5F5',
        textColor: '#5A6A9D',
        textBlack: '#09132C',
        chatBgColor: '#D7F8F4',
      },
    },
    fontSize: {
      '36': '36px',
      '18': '18px',
      '16': '16px',
      '14': '14px',
      '12': '12px',
      '10': '10px',
    },
  },
  plugins: [],
}

