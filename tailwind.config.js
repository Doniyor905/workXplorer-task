/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 👈 обязательно для переключателя темы
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
