//jest >=28 ===jsdom - atm jest config also w/slco eslint-config package in npm registry

module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['jsx', 'js'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
}
