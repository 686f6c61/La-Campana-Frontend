/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {

          "bg-primary": "#F70025",

          "base-100": "#fff",


        },
      },
    ],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  plugins: [
    require('daisyui'),
  ],
}