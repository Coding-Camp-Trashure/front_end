/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white-1": "#FFFFFF",
        "white-2": "#EDF3F1",
        "green-1": "#0B251C",
        "green-2": "#B7EB38",
        "green-3": "#6C8079",
        "orange": "#FF9736",
        "blue": "#040624",
        "gray-1": "#ABB4B1",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

