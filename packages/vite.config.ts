/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import DefineOptions from "unplugin-vue-define-options/vite";
// import terser from "@rollup/plugin-terser";

export default defineConfig({
	build: {
		target: "modules",
		outDir: "es",
		// 压缩
		minify: true,
		// css分离
		cssCodeSplit: false,
		rollupOptions: {
			external: ["vue"],
			input: ["./index.ts"],
			output: [
				{
					format: "es",
					entryFileNames: "[name].full.min.js",
					preserveModules: false,
					exports: "named",
					dir: resolve(__dirname, "./hview-ui/dist"),
				},
				{
					format: "es",
					entryFileNames: "[name].mjs",
					preserveModules: true,
					exports: "named",
					dir: resolve(__dirname, "./hview-ui/es"),
				},
				{
					format: "cjs",
					entryFileNames: "[name].js",
					preserveModules: true,
					exports: "named",
					dir: resolve(__dirname, "./hview-ui/lib"),
				},
			],
		},
		lib: {
			entry: "./index.ts",
			name: "hview",
		},
	},
	plugins: [
		vue(),
		DefineOptions(),
		dts({
			entryRoot: "src",
			outputDir: [
				resolve(__dirname, "./hview-ui/es/src"),
				resolve(__dirname, "./hview-ui/lib/src"),
			],
		}),
		// {
		//   name: "style",
		//   generateBundle(config, bundle) {
		//     //这里可以获取打包后的文件目录以及代码code
		//     const keys = Object.keys(bundle);

		//     for (const key of keys) {
		//       const bundler: any = bundle[key as any];
		//       //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件

		//       this.emitFile({
		//         type: "asset",
		//         fileName: key, //文件名名不变
		//         source: bundler.code.replace(/\.less/g, ".css"),
		//       });
		//     }
		//   },
		// },
	],
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
		},
	},
});
