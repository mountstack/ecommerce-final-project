/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          main: "#2a3447",
          soft: "#384256",
          dark: "#222b3c",
        },

        text: {
          main: "white",
          soft: "#ddd",
          dark: "#2a3447",
        },
      },
    },
    plugins: [],
  },
};
