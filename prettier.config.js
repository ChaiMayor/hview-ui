module.exports = {
	printWidth: 80, // 最大单行长度
	tabWidth: 2, // 每个缩进的空格数
	useTabs: false, // 使用制表符而不是空格缩进行
	semi: true, // 在语句的末尾打印分号
	vueIndentScriptAndStyle: false, // 是否缩进 Vue 文件中的代码<script>和<style>标签。
	singleQuote: false, // 使用单引号而不是双引号
	quoteProps: "as-needed", // 引用对象中的属性时更改 "as-needed" "consistent" "preserve"
	bracketSpacing: true, // 在对象文字中的括号之间打印空格
	trailingComma: "all", // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
	arrowParens: "always", // 箭头函数只有一个参数的时候是否使用括号 always：使用  avoid： 省略
	insertPragma: false, // 是否在文件头部插入一个 @format标记表示文件已经被格式化了
	htmlWhitespaceSensitivity: "strict", // HTML 空白敏感性 css strict ignore
	endOfLine: "auto", // 换行符使用什么
	bracketSameLine: true,
	requirePragma: false,
};
