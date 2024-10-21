/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // add custom values here
      colors: {
        "custom-color": "var(--primary-text-color)",
        "custom-color1": "var(--secondary-text-color)",
        "custom-color2": "var(--background-color)",
        "custom-color3": "var(--home-bg-color)",
        "custom-color4": "var(--event-bg-color)",
        "custom-color5": "var(--event-x-color)",
        "custom-color6": "var(--main-color)",
        "foreground-color": "var( --foreground-color)",
        "outline-color": "var( --custom-outline)",
      },
      fontFamily: {
        title: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
