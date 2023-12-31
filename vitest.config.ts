import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      // you can include other reporters, but 'json-summary' is required, json is recommended
      reporter: ['text', 'json-summary', 'json'],

      statements: 90,
      functions: 90,
      branches: 90,
      lines: 90,
    }
  }
});