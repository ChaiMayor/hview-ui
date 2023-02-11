const fg = require("fast-glob");

const getPackages = (packagePath) =>
  fg.sync("*", { cwd: packagePath, onlyDirectories: true });

const scopes = [
  ...getPackages("packages"),
  ...getPackages("internal"),
  "docs",
  "play",
  "project",
  "core",
  "style",
  "ci",
  "dev",
  "deploy",
  "other",
  "typography",
  "color",
  "border",
  "var",
  "ssr",
  "site",
];

module.exports = {
  ignores: [(commit) => commit.includes("init")],
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", scopes],
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [1, "always"],
    "header-max-length": [2, "always", 72],
    "subject-full-stop": [2, "never", "."],
    "subject-case": [
      1,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
    "subject-case": [0],
    /**
     * type[scope]: [function] description
     * ^^^^
     */
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "release",
        "style",
        "test",
        "improvement",
      ],
    ],
  },
};
