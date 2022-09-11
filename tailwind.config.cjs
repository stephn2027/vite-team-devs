/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  plugins: [require('daisyui'), require('tw-elements/dist/plugin')],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
    themes: [
      {
        mytheme: {
          primary: '#9F24D7',
          secondary: '#4660F5',
          accent: '#37CDBE',
          neutral: '#0E0E12',
          'base-100': '#FFFFFF',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        white: 'var(--white)',
        black: 'var(--black)',
      },
    },
  },
};
