module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src'], // This tells Jest to look for test files inside `src` folder
    transform: {
      '^.+\\.ts$': 'ts-jest', // Transpile .ts files using ts-jest
    },
    moduleFileExtensions: ['ts', 'js'],
    testMatch: [
      '**/src/**/*.test.ts', // Tells Jest to look for `.test.ts` files in the `src` folder
    ],
  };
  