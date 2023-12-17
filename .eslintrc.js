const RULES = {
  OFF: "off",
  WARN: "warn",
  ERROR: "error",
};

module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "react/prop-types": RULES.OFF,
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/explicit-module-boundary-types": RULES.OFF,
    "react/react-in-jsx-scope": RULES.OFF,
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
