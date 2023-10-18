module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './src/**/*'],
  theme: {
    extend: {
      colors: {
        'blue-dark': '#363740',
        'black-light': '#212121',
        'black-dark': '#1b1b1b',
        'deep-black': '#171717',
        'gray-light': '#F5F5F9',
        'orange-light': '#FFA500',
        'white-light': '#EAECF0',
        'white-dark': '#F9FAFB',
      },
      width: {
        108: '27rem',
      },
    },
    screens: {
      sm: { max: '639px' },
      md: { max: '767px' },
      lg: { max: '1023px' },
    },
  },
  plugins: [],
};
