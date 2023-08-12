/** @type {import('tailwindcss').Config} */

const brandColors = {
  50: "#e3f7df",
  100: "#bfeeb4",
  200: "#a5e987",
  300: "#85d854",
  400: "#71cf2f",
  500: "#55c500",
  600: "#46a900",
  700: "#378d00",
  800: "#287100",
  900: "#195500",
  950: "#0a3900",
};

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: ({theme}) => ({
        brand: {
          ...brandColors,
        },
        surface: theme.colors.gray[100],
        "on-surface": theme.colors.gray[950],
        primary: brandColors[500],
        "on-primary": brandColors[50],
        "primary-container": brandColors[100],
        "on-primary-container": brandColors[600],
      }),
    },
  },
  plugins: [],
};
