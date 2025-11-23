module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.ts'],
  setupFilesAfterEnv: ['./jest.setup.js'],  // ✅ reference setup file
};

(global).localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};
