/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        xl: "1440px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "0.5rem",
          md: "5rem",
          lg: "2rem",
        },
        screens: {
          sm: "375px",
          md: "768px",
          lg: "1024px",
        },
      },
      colors: {
        background: "#ffffff",
        foreground: "#000000",
        accent: "#FFE629",
        "accent-light": "#FEFCE9",
        "accent-dark": "#6D5700",
        grey: "#888888",
        "grey-light": "#F1F0EF",
        "grey-dark": "#565656",
        "grey-darker": "#373736",
      },
      fontFamily: {
        default: "'Inter Variable', sans-serif",
      },
      fontSize: {
        lg: ["1.25rem", { lineHeight: 1.5 }],
        xl: ["1.5rem", { lineHeight: 1.5 }],
        "xl-lg": ["1.625rem", { lineHeight: 1.5 }],
        "xl-xl": ["1.75rem", { lineHeight: 1.5 }],
        "2xl": ["2rem", { lineHeight: 1.5 }],
        "2xl-lg": ["2.25rem", { lineHeight: 1.5 }],
        "2xl-xl": ["2.5rem", { lineHeight: 1.5 }],
        "3xl": ["3rem", { lineHeight: 1.5 }],
        "4xl": ["4rem", { lineHeight: 1.5 }],
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1.25rem",
        "3xl": "2.5rem",
      },
    },
  },
  plugins: [],
}
