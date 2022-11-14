module.exports = {
  moduleFileExtensions: ['js', 'jsx'],
  modulePathIgnorePatterns: ['baggett/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/src/app.css',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
}
