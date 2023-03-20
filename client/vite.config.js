import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // update the <base> tag to use the correct publicPath
        base: "/public",

        // update the name of your favicon file
        assetFileNames: "favicon.ico",
      },
    },
  },
});
