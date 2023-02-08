/* eslint-env node */
/* 配置参考：https://zhuanlan.zhihu.com/p/87667635 */
module.exports = {
	// root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:vue/vue3-essential",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		parser: "@typescript-eslint/parser",
	},
	parser: "vue-eslint-parser",
	plugins: ["vue", "@typescript-eslint"],
	rules: {
		// 组件名称不是多字母组成，会报这个错误“Component name “XXX“ should always be multi-word”。我们的组件很多是拼音简写，所以经常会有这个错误
		// 将其设置为0取消报错
		"vue/multi-word-component-names": 0,
		// 解决折行报错
		// "vue/html-closing-bracket-newline": ["error", "never"],
		// 不检查 ts-ignore
		// refer: https://blog.csdn.net/cc18868876837/article/details/116663244
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/no-explicit-any": ["off"],
	},
};
