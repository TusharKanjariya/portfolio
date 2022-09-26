module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope"]
      },
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
  ],
}
