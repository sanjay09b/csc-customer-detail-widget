const tailwindConfig = require("csc-config-widget/tailwind.config");

module.exports = {
  ...tailwindConfig,
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "790px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        liteGrey: "#666666",
        customBlue: "#136BEA",
        success: "#008048",
        inactive: "#F6F6F8",
        inactiveTextColor: "#666666",
        suspended: "#EB7100",
        banned: "#CF112C",
        fraud: "#000000",
        customGrey: "#D9D9D9",
        orderBg: "#E5F2FD",
        profileBg: "#E5C2AC",
        systemBg: "#EEEEEE",
      },
    },
  },
};
