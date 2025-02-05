import { loadEnv, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { codecovVitePlugin } from "@codecov/vite-plugin";
import dotenv from "dotenv";

dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    codecovVitePlugin({
      enableBundleAnalysis: import.meta.env.VITE_CODECOV_TOKEN !== undefined,
      bundleName: "testing-with-react",
      uploadToken: import.meta.env.VITE_CODECOV_TOKEN,
    }),
  ],
  
  test: {
    global: true,
    environment: 'jsdom',
    setupFiles: './setupTest.ts'
  },

  
})
