import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
});

// "lint-staged": {
// 	"**/*.{jsx,ts,tsx,vue}": "pnpm run lint-staged:js",
// 	"**/*.{jsx,tsx,ts,md,json,vue}": [
// 		"prettier --write"
// 	]
// }
