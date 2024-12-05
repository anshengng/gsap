import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import pluginsAuto from "./plugins/plugins-auto";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    pluginsAuto({
      dir: "22",
    }),
  ],
});
