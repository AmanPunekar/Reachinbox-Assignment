/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #4b63dd, #0524bf)",
        "custom-bg": "linear-gradient(90deg, #111214, #121212)",
        "bg-sign": "#707172",
      },
      backgroundColor: {
        bottomfoot: "#121212",
      },
      width: {
        log: "460px",
      },
      textColor: {
        colorbtm: "#5C5F66",
      },
    },
  },
  plugins: [],
};
