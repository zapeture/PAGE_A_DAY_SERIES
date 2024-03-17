/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background-image": "url('/images/header_background.jpeg')"
      },
      fontFamily: {
        "sans-serif": ['"Roboto"', "sans-serif"],
        sans: ['"Open Sans"', "sans-serif"]
      }
    },
    screens: {
      // up breakpoints
      small_mobile_up: "320px",
      mobile_up: "640px",
      tablet_up: "768px",
      laptop_up: "1024px",
      desktop_up: "1280px",
      large_desktop_up: "1440px",
      // down breakpoints
      small_mobile_down: { max: "319px" },
      mobile_down: { max: "639px" },
      tablet_down: { max: "767px" },
      laptop_down: { max: "1023px" },
      desktop_down: { max: "1279px" },
      large_desktop_down: { max: "1439px" }
    },
    container: {
      center: true,
      padding: "1rem"
    },
    colors: {
      dark_mountain: "#000"
    }
  },
  plugins: []
}
