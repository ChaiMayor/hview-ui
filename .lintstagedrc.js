module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write", "eslint"],
  "{!(package)*.json,*.code-snippets,.!(browserslist)*rc}": [
    "prettier --write--parser json",
  ],
  "*.less": "stylelint packages/theme-chalk/src/**/*.less --fix",
  "package.json": ["prettier --write"],
  "*.vue": ["prettier --write", "eslint --fix", "eslint"],
  "packages/theme-chalk/src/**/*.{less,css}": [
    "stylelint --fix --custom-syntax postcss-less",
    "prettier --write",
  ],
  "*.md": ["prettier --write"],
  "*.*": ["ls-lint"],
};
