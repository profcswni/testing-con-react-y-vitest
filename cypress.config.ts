import { defineConfig } from "cypress";
import { loadEnv } from "vite";

const env = loadEnv("", process.cwd(), "VITE_");

export default defineConfig({
  projectId: env.VITE_CYPRESS_PROJECT_ID,
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
  e2e: {
    baseUrl: "http://localhost:5173",
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
