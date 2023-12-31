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
        mont: ["Montserrat", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },
      colors: {
        "main-yellow": "#f2ba59",
        "main-gray": "#f7f7f7",
      },
      backgroundImage: {
        "hero-bg": "url('/img/breadcrumb-bg.jpg')",
      },
    },
  },
  plugins: [],
};
