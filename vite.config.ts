import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "@uni-helper/vite-plugin-uni-components";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Components(), uni(), , AutoImport()],
});
