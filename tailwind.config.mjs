/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.astro"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        highlight: {
          dim: "rgba(156, 220, 254, 0.2)",
          normal: "rgba(156, 220, 254, 0.4)",
          bright: "rgba(156, 220, 254, 1)",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // "--tw-prose-headings": theme('colors.cyan.500'),
            // "--tw-prose-invert-headings": theme('colors.cyan.500'),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
