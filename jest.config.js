module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  'testTimeout': 120000,
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "reporters": ["default", "jest-allure"],
  "setupFilesAfterEnv": ["jest-allure/dist/setup"],
}