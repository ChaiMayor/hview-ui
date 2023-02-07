const eslintRules = require('./eslint.rules');
const tsRules = require('./ts.rules');
const vueRules = require('./vue.rules');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  /* 'plugin:prettier/recommended' 可手动配置 */
  extends: ['plugin:vue/vue3-essential', 'prettier', 'plugin:@typescript-eslint/recommended'],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    ...eslintRules,
    ...tsRules,
    ...vueRules
  }
};
