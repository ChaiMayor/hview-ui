/* ts配置规则  https://typescript-eslint.io/rules */
module.exports = {
  // 规定数组类型定义方式 https://typescript-eslint.io/rules/array-type
  '@typescript-eslint/array-type': 'error',
  // 禁止使用大写 String、Number 定义类型 https://typescript-eslint.io/rules/ban-types
  '@typescript-eslint/ban-types': 'off', // beta
  // 不允许尾随逗号 https://typescript-eslint.io/rules/comma-dangle
  '@typescript-eslint/comma-dangle': 'error',
  // 强制使用 interface 定义类型 https://typescript-eslint.io/rules/consistent-type-definitions
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  // 统一导出规则 https://typescript-eslint.io/rules/consistent-type-exports
  // '@typescript-eslint/consistent-type-exports': 'error',
  // 自定义对象类型样式 https://typescript-eslint.io/rules/consistent-indexed-object-style
  '@typescript-eslint/consistent-indexed-object-style': ['warn', 'record'],
  // !禁止使用后缀运算符的非空断言 https://typescript-eslint.io/rules/no-non-null-assertion/
  '@typescript-eslint/no-non-null-assertion': 'error',
  // 强制一致地使用类型导入 https://typescript-eslint.io/rules/consistent-type-imports
  '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
  // 禁止未使用的变量 https://typescript-eslint.io/rules/no-unused-vars
  '@typescript-eslint/no-unused-vars': 'error',
  // 不可以有 any https://typescript-eslint.io/rules/no-explicit-any/
  '@typescript-eslint/no-explicit-any': 'off',
  // 不可以有 require https://typescript-eslint.io/rules/no-var-requires/
  '@typescript-eslint/no-var-requires': 'off',
  // 带有默认值的函数参数在最后 https://typescript-eslint.io/rules/default-param-last
  '@typescript-eslint/default-param-last': 'error',
  // 必须标记函数返回值 https://typescript-eslint.io/rules/explicit-function-return-type
  '@typescript-eslint/explicit-function-return-type': 'off'
};
