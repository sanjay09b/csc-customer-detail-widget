const tailwindConfig = require("csc-config-widget/tailwind.config");

module.exports = {
  ...tailwindConfig,
  theme: {
    extend: {
      colors: {
        lightGray: "#F6F6F8",
        customBlue: "#136BEA",
      },
      fontFamily: {
        // 'sans': ['Helvetica', 'Arial', 'sans-serif'],
      },
    },

    screens: {
      sm: { min: "0px", max: "640px" },
      md: { min: "641px" },
      lg: { min: "1025px" },
      xl: { min: "1440px" },
    },
  },
};
