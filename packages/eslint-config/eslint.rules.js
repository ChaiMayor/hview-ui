/* eslint配置规则 https://eslint.org/docs/latest/rules/ */
module.exports = {
	"prettier/prettier": "error",
	"arrow-body-style": "off",
	"prefer-arrow-callback": "off",
	"no-console": 0,
	// 不允许不必要的转义字符 https://eslint.org/docs/latest/rules/no-useless-escape
	"no-useless-escape": "off",
	"comma-dangle": "off",
	// 禁止使用 var https://eslint.org/docs/latest/rules/no-var#rule-details
	"no-var": "error",
	// 使用单引号 https://eslint.org/docs/latest/rules/quotes#version
	quotes: ["error", "double"],
	// 禁止分号 https://eslint.org/docs/latest/rules/semi#rule-details
	// semi: 'error',
	// 禁止 debugger https://eslint.org/docs/latest/rules/no-debugger#rule-details
	"no-debugger": "error",
	// 禁止未使用的变量 https://eslint.org/docs/latest/rules/no-unused-vars#rule-details
	"no-unused-vars": "error",
	// 不允许使用未声明的变量 https://eslint.org/docs/latest/rules/no-undef
	"no-undef": "off",
	// 函数括号前的空格 https://eslint.org/docs/latest/rules/space-before-function-paren
	"space-before-function-paren": "off",
	// 禁止多个空行 https://eslint.org/docs/latest/rules/no-multiple-empty-lines#rule-details
	"no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0, maxBOF: 0 }],
	// 在文件末尾要求或禁止换行 https://eslint.org/docs/latest/rules/eol-last#rule-details
	"eol-last": "error",
	// 禁止所有选项卡 https://eslint.org/docs/latest/rules/no-tabs#rule-details
	"no-tabs": "error",
	"default-param-last": "off",
};
