/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        DMSans: "'DMSans'"
      },
      colors: {
        primary: "#2F73F2",
        secondary: "#102D47",
        grey: "#668199",
        bordercolor: "#CCD7E1",
      },
      screens: {
        sm: "768px",
        md: "1024px",
        lg: "1280px",
        xl: "1536px",
        "2xl": "1920px",
      },
      fontSize: {
        58: [
          "3.625rem",
          {
            lineHeight: "5.375rem",
          },
        ],
        48: [
          "3rem",
          {
            lineHeight: "5rem",
          },
        ],
        40: [
          "2.5rem",
          {
            lineHeight: "3rem",
          },
        ],
        48: [
          "3rem",
          {
            lineHeight: "3.75rem",
          },
        ],
        32: [
          "2rem",
          {
            lineHeight: "2.5rem",
          },
        ],
        28: [
          "1.75rem",
          {
            lineHeight: "2.25rem",
          },
        ],
        24: [
          "1.5rem",
          {
            lineHeight: "2rem",
          },
        ],
        18: [
          "1.125rem",
          {
            lineHeight: "1.75rem",
          },
        ],
        14: [
          "0.875rem",
          {
            lineHeight: "1.1394rem",
          },
        ],
      },
    },
  },
  plugins: [],
};