const jestConfig = require("csc-config-widget/jest-config");
module.exports = {
  ...jestConfig,
  // moduleNameMapper: {
  //   "^.+.(png)$": "jest-transform-stub",
  // },
  // moduleNameMapper: {
  //   "/.(jpg|jpeg|png)$/":
  //     "D:Sephore CSCcsc-customer-detail-widget-configsrc__mocks__\fileMock.js",
  // },

  // moduleNameMapper: {
  //   ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
  //     "jest-transform-stub",
  // },
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/identity-obj-proxy",
    "\\.(jpg|jpeg|png)$": "<rootDir>/src/__mocks__/fileMock.js",
  },
};
