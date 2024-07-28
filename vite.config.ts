import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// 解決 path 抱錯問題 1. npm install --save-dev @types/node
// 在設定檔中 "compilerOptions":{ "types": ["node"] }

// https://vitejs.dev/config/
export default defineConfig({
  // 部屬用 base 路徑
  base: "/myBlog/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
