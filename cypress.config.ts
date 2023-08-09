import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "reporter": "../node_modules/mochawesome/src/mochawesome.js",
  "reporterOptions": {
    "overwrite": false,
    "html": false,
    "json": true,
  }
});
