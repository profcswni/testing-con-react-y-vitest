import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "vxr9ua",
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});