/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background-image': "url('/images/header_background.jpeg')"
      },
      fontFamily: {
        'sans-serif': ['"Roboto"', 'sans-serif'],
      }
    },
    screens: {
      'mobile': '640px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
      'large-desktop': '1440px'
    }

  },
  plugins: [],
}

