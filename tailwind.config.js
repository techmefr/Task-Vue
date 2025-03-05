/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#a47afc",
          DEFAULT: "#8a56e8",
          dark: "#6c45c9",
        },
        danger: "#ff6b6b",
        success: "#56c9a0",
        warning: "#ffb84d",
      },
    },
  },
  plugins: [],
};
