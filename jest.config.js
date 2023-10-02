const path = require('path');
const rootDir = path.join(__dirname);
module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    transform: {
      '^.+\\.(ts|js|html)$': ['ts-jest', {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      }]
    },
    testMatch: ['<rootDir>/src/**/*.spec.ts'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    coverageReporters: ['html', 'lcov', 'text'],
  };
  