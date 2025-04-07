/** @type {import('tailwindcss').Config} */
export const content = ["./index,html","./src/**/*.{js,ts,jsx,tsx}",];
export const theme = {
  extend: {
    fontFamily:{
      sans:['Roboto','sans-serif']
    },
    gridTemplateColums:{
      '70/30':'70% 28%',
    }
  },
};
export const plugins = [];

