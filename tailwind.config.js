/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-white": "#F3F3F3",
        "main-black": "#171717",
        "main-gray": "#606060",
        "main-blue": "#2429AF",
      },
      spacing: {
        25: "6.25rem",
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwind-scrollbar")],
};
