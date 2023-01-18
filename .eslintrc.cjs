/* eslint-env node */
/* 配置参考：https://zhuanlan.zhihu.com/p/87667635 */
module.exports = {
  root: true,
  rules: {
    // 组件名称不是多字母组成，会报这个错误“Component name “XXX“ should always be multi-word”。我们的组件很多是拼音简写，所以经常会有这个错误
    // 将其设置为0取消报错
    "vue/multi-word-component-names": 0,
    "vue/html-closing-bracket-newline": ["error", "never"],
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier", // 去掉eslint和prettier冲突的配置
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
};
