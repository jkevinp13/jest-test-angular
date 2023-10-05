const path = require("path");
const rootDir = path.join(__dirname);
module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  testMatch: ["<rootDir>/src/**/*.spec.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  coverageReporters: ["html", "lcov", "text"],
};
