const path = require("path");
const rootDir = path.join(__dirname);
module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  testMatch: ["<rootDir>/src/**/*.spec.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  collectCoverage: true,
  coverageReporters: ["html", "lcov", "text"],
  reporters: [
    "default",
    [
      "jest-html-reporters",
      { publicPath: "./coverage3/", fileName: "reporters-jest.html" },
    ],
  ],
};
