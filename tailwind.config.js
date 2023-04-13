module.exports = {
  content: ["./src/widget/**/*.{html,js,tsx,ts}"],
  prefix: "tw-",
  theme: {
    screens: {
      "tw-sm": "640px",

      "tw-md": "790px",

      "tw-lg": "1024px",

      "tw-xl": "1440px",

      "tw-2xl": "1600px",

      "tw-3xl": "1920px",
    },
    extend: {
      colors: {
        current: "currentColor",
        black: {
          DEFAULT: "#000000", // primary
          2: "#000000", // secondary
          3: "#000000", // secondary
        },
        white: {
          DEFAULT: "#FFFFFF", // primary
          2: "#F6F6F8", // secondary
        },
        gray: {
          DEFAULT: "#CCCCCC",
          2: "#666666",
          3: "#F6F6F8",
          4: "#EEEEEE",
          5: "#D9D9D9",
        },
        red: {
          DEFAULT: "#CF112C",
        },
        link: {
          DEFAULT: "#136BEA",
        },
        transparent: "transparent",
        success: "#008048",
        inactive: "#F6F6F8",
        inactiveTextColor: "#666666",
        suspended: "#EB7100",
        banned: "#CF112C",
        fraud: "#000000",
        hoverBlue: "#E5F2FD",
        lightGray: "#EEEEEE",
        customBlue: "#136BEA",
        orderBg: "#E5F2FD",
        profileBg: "#E5C2AC",
        systemBg: "#EEEEEE",
      },
      fontFamily: {
        sans: ["Helvetica Neue"],
      },
      fontSize: {
        xs: ["12px", "14px"],
        sm: ["14px", "18px"],
        base: ["16px", "20px"],
        lg: ["20px", "22px"],
        xl: ["24px", "26px"],
      },
      borderRadius: {
        none: "0",
        4: "4px",
        22: "22px",
      },
      spacing: {
        13: "13px",
      },
    },
  },
};
