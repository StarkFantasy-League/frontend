import nextJest from "next/jest";
import type { Config } from "jest";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig: Config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Ensures Jest is properly set up
  testEnvironment: "jsdom", // Simulates browser environment for Next.js components
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": ["babel-jest", { presets: ["next/babel"] }], // Ensures TypeScript and JSX are transformed properly
  },
  transformIgnorePatterns: ["/node_modules/(?!@starknet-react)"], // Transforms Next.js packages like @starknet-react
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Allows absolute imports (optional)
  },
};

export default createJestConfig(customJestConfig);