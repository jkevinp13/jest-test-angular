# JestTestAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Migrate Jest

1. Remove Karma related stuff:
npm remove karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter


rm ./karma.conf.js ./src/test.ts

2. Install @angular-builders/jest and jest:

npm i -D jest @types/jest @angular-builders/jest

3. Update your Typescript configurations:

In tsconfig.spec.json (root directory or project roots, used by Jest):

- Replace jasmine in types array with jest
You want your tests to be type-checked against Jest typings and not Jasmine
- Remove test.ts from files array
This file was responsible for Karma setup, you don’t need it here anymore
- Add emitDecoratorMetadata: true in compilerOptions (here is why you need this)

4. In angular.json change @angular-devkit/build-angular:karma to @angular-builders/jest:run :

```
"projects": {
    ...
    "[your-project]": {
         ...
         "architect": {
                ...
                "test": {
                          "builder": "@angular-builders/jest:run"
                          "options": {
                                ... //see here
                          }
```

5. Add jest.config.js

```
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
```