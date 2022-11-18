module.exports = {
  singleQuote: true,
  tabWidth: 4,
  trailingComma: "none",
  arrowParens: "avoid",
  plugins: [
    require("./node_modules/prettier-plugin-tailwindcss/dist/index.js"),
  ],
}
