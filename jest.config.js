const jestConfig = require("csc-config-widget/jest-config");
module.exports = {
  ...jestConfig,
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/identity-obj-proxy",
    "\\.(jpg|jpeg|png|svg)$": "<rootDir>/src/__mocks__/fileMock.js",
  },
};
