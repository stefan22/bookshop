//jest >=28 ===jsdom - atm jest config also w/slco eslint-config package in npm registry

module.exports = {
  moduleFileExtensions: ['js', 'jsx'],
  modulePathIgnorePatterns: ['baggett/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/src/app.css',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
}
