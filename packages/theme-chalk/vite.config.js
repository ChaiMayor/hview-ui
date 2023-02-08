/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		target: "modules",
		// 打包文件目录
		outDir: "dist",
		// 压缩
		minify: true,
		// css分离
		cssCodeSplit: false,
		lib: {
			entry: "./src/index.less",
			name: "theme-chalk",
		},
	},
});
