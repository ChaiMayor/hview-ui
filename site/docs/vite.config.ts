import vueSetupExtend from "unplugin-vue-setup-extend-plus/vite";
import type { UserConfigExport } from "vite";
import svgLoader from "vite-svg-loader";
import DefineOptions from "unplugin-vue-define-options/vite";
import { resolve } from "path";

export default (): UserConfigExport => {
	return {
		plugins: [vueSetupExtend() as any, svgLoader(), DefineOptions()],
		optimizeDeps: {
			exclude: ["vitepress"],
		},
		css: {
			postcss: {
				plugins: [
					{
						postcssPlugin: "internal:charset-removal",
						AtRule: {
							charset: (atRule): void => {
								if (atRule.name === "charset") {
									atRule.remove();
								}
							},
						},
					},
				],
			},
		},
		server: {
			port: 9999,
		},
		resolve: {
			alias: [
				{
					find: "exam",
					replacement: resolve(__dirname, "./examples"),
				},
				{
					find: "locale",
					replacement: resolve(__dirname, "../../packages/locale"),
				},
				{
					find: "utils",
					replacement: resolve(__dirname, "../../packages/utils"),
				},
			],
		},
	};
};
