/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primaryFonts: ["Montserrat", "sans-serif"],
        secondaryFonts: ["DM Sans", "sans-serif"],
      },
      screens: {
        '425': '424px',
        '375': '375px',
        '320': { 'max': '339px' },
        '1280': '1280px',
        'lg-1': { 'min': '1025', 'max': '1279px' },
        'xs': { 'min': '340px', 'max': '639px' },
        // => @media (min-width: 340px and max-width: 639px) { ... }
        '2xl': { 'min': '1440px' },
        '3xl': { 'min': '1536px' },

      },
      colors: {
        primaryBg: "#121212",
        secondBg: "#1F1F1F",
        thirdBg: "#171717",
        fourthBg: "#1B1B1B",
        primary_text: "#FFF616",
        secondary_text: "#FBFFFF",
        third_text: "#A3A5A5",
        delete_text: '#E8727B',
        button: '#E45863',
        contact_btn: 'rgba(255, 246, 22, 0.05)',

      },

      maxWidth: {
        "screen-3xl": "1440px",
      },


      fontSize: {
        'desk-lg': ['15px', {
          lineHeight: '125%',
        }],
        'desk-lg-1': ['16px', {
          lineHeight: '125%',
        }],
        'desk-lg-2': ['17px', {
          lineHeight: '125%',
        }],
        'desk-lg-3': ['18px', {
          lineHeight: '125%',
        }],
      },
      lineHeight: {
        '125': '125%'
      },
      backgroundImage: {
        btn_gradiant: ' linear-gradient(0deg,rgba(52, 50, 0, 0.12) 0%,rgba(52, 50, 0, 0.12) 100%)',
      },

    },
  },
  plugins: [],
}