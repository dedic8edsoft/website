const tailwindColors = require('tailwindcss/colors');

const sizes = {};

for (let i = 0; i < 500; i++) {
  sizes[i] = `${i / 4}rem`;
  sizes[`${i}.5`] = `${(i + 0.5) / 4}rem`;
}

const textSizes = {};

for (let i = 0; i < 100; i++) {
  textSizes[i] = `${i}px`;
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}', './styles/**/*.scss'],
  theme: {
    screens: {
      xxs: '320px',
      xs: '480px',
      sm: '600px',
      'max-md': { max: '767px' },
      md: '768px',
      'max-lg': { max: '989px' },
      lg: '990px',
      'max-xl': { max: '1199px' },
      xl: '1200px',
    },
    extend: {
      spacing: sizes,
      minHeight: sizes,
      minWidth: sizes,
      maxHeight: sizes,
      maxWidth: sizes,
      borderRadius: sizes,
      fontSize: textSizes,
      colors: {
        primary: {
          DEFAULT: '#28ABE3',
          light: '#393939',
          dark: '#393939',
          ...tailwindColors.blue,
        },
        red: {
          DEFAULT: '#D41317',
        },
        pink: {
          DEFAULT: '#ffd7ef',
          ...tailwindColors.pink,
        },
        yellow: {
          DEFAULT: '#FFBF23',
          light: '#f47e34',
          ...tailwindColors.yellow,
        },
        green: {
          white: '#c4fb7c',
          DEFAULT: '#226742',
          light: '#37a968',
          dark: '#00522d',
          ...tailwindColors.green,
        },
        gray: {
          ...tailwindColors.gray,
          DEFAULT: '#f6f5f5',
          dark: '#333333',
          light: '#f9f9f9',
          50: '#f1f1f1',
          100: '#969595',
          200: '#dadada',
          300: '#3a3a3a',
          400: '#cfcfcf',
          500: '#848484',
          600: '#bdbdbd',
          700: '#eeeeee',
          800: '#f7f7f7',
        },
        blue: {
          ...tailwindColors.blue,
          light: '#4d7ecc',
          50: '#9dd1f6',
          100: '#31aae2',
          200: '#2281ad',
        },
        black: {
          DEFAULT: '#000000',
          dark: '#2d2d2d',
          light: '#313131',
          100: '#222222',
        },
      },
      fontFamily: {
        default: ['Greycliff CF'],
        demi: ['Greycliff CF Demi'],
      },
      zIndex: {
        '-1': -1,
      },
      boxShadow: {
        'yellow-md': '0 0 0 0.25rem #8d101740',
        'green-md': '0 0 0 0.25rem #00522c40',
      },
    },
  },
  plugins: [],
};
