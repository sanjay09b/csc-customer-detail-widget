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
        lightGray: "#EEEEEE",
        customBlue: "#136BEA",
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
    },
  },
};

