/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "medium-orange": "#e79d63",
      "dark-gray": "#47463b",
      "light-gray": "#807e71",
      "soft-white": "#eae7d4",
    },
    extend: {},
  },
  plugins: [],
};
