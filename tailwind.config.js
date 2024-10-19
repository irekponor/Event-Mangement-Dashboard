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
      },
    },
  },
  plugins: [],
};
