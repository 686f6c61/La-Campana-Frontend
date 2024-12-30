/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [

    ],
  },
  theme: {
    extend: {
      colors: {
        "lacampana-red1": "#E32119",
        "lacampana-red2": "#F70025",
        "lacampana-gray1": "#3C3C3B",
        "lacampana-gray2": "#828282",
        "lacampana-gray3": "#BDBDBD",
        "lacampana-gray4": "#E0E0E0",
        "lacampana-white": "#F2F2F2",
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        antonio: ["Antonio", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"]
      },
      fontSize: {
        "h1": "40px",
        "h2": "30px",
        "h3": "25px",
        "h4": "18px",
        "h5": "14px",
        "h6": "18px",
        "h1-desktop": "52px",
        "h2-desktop": "42px",
        "h3-desktop": "32px",
        "h4-desktop": "24px",
        "h5-desktop": "18px",
        "sub-h1": "18px",
        "sub-h1-desktop": "26px",
        "p1": "14px",
        "p2": "12px",
        "p1-desktop": "17px",
        "p2-desktop": "14px",
        "p3-desktop": "12px",
      },
      screens: {
        'tablet': '768px',
        'desktop': '1280px',
      },
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require('daisyui'),
  ],
}