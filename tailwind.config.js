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
  theme: {
    extend: {
      screens: {
        'xl': '1280px',
        '2xl': '1536px',
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