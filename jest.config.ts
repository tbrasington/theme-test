export default {
  // [...]
  // Replace `ts-jest` with the preset you want to use
  // from the above list
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@ui-system": "<rootDir>/src",
    "^@components": "<rootDir>/src/components",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@theme": "<rootDir>/src/components",
    "^@theme/(.*)$": "<rootDir>/src/theme/$1",
    "^@test-utils": ["<rootDir>/src/utils/test-utils"],
  },
};
