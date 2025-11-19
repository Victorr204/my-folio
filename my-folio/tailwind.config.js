/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Professional navy/teal palette
        primary: {
          50: '#f5f7ff',
          100: '#e9efff',
          200: '#c6d7ff',
          300: '#9fb8ff',
          400: '#6f8fff',
          500: '#3366d6',
          600: '#2b52b0',
          700: '#213d86',
          800: '#17294f',
          900: '#0d1428',
        },
        accent: {
          50: '#f0f9f8',
          100: '#dff3ef',
          200: '#bfebe0',
          300: '#8fe0cc',
          400: '#4fd1b1',
          500: '#14b8a6',
          600: '#0e9a8b',
          700: '#0b7a6f',
          800: '#095a53',
          900: '#073f3a',
        },
        neutral: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e9e9eb',
          300: '#d6d6d9',
          400: '#a8a8ad',
          500: '#6e6e74',
          600: '#4b4b50',
          700: '#2f2f33',
          800: '#1b1b1d',
          900: '#0b0b0c',
        },
      },
    },
  },
  plugins: [],
  
  darkMode: 'class',
theme: {
  extend: {
    colors: {
      cyan: {
        400: '#00C2FF',
      },
    },
  },
},

}

