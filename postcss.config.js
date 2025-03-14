const stylelint = require("stylelint");

module.exports = {
  plugins: [
    stylelint({
      /* your options */
      fix: true,
    }),
  ],
};
