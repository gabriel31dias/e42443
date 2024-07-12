module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  };
  