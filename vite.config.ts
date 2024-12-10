import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import errorLoggingPlugin from "./plugins/plugins-auto";
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), errorLoggingPlugin({ dts: 22 })],
  base: "./",
});
