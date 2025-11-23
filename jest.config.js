module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.ts'],
  setupFilesAfterEnv: ['./jest.setup.js'], 
};

(global).localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};
