module.exports = {
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,js,jsx,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!src/**/stories.ts',
    '!src/screens/**/*.ts',
    '!src/styles/**/*.ts',
    '!src/context/**/*.ts',
    '!src/services/api.ts',
    '!src/hooks/**/*.ts',
    '!src/routers/**/*.ts',
    '!src/graphql/**/*.ts'
  ],
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  coverageReporters: ['clover', 'json', 'lcov', ['text', { skipFull: true }]]
}
