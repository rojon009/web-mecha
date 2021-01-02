module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ["Comfortaa", "cursive"],
      },
      spacing: {
        hero: "580px",
      },
    },
  },
  variants: {
    extend: {
      translate: ["responsive", "hover", "focus", "active"],
    },
  },
  plugins: [],
};
