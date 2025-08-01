/** @type {import("stylelint").Config} */
export default {
  customSyntax: "postcss-html",
  plugins: [
    "stylelint-scss",
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-no-unsupported-browser-features",
    "stylelint-prettier",
  ],
  extends: ["stylelint-config-standard-scss", "stylelint-config-recess-order", "stylelint-config-prettier-scss"],
  ignoreFiles: ["node_modules/**/*", ".astro/**/*"],
  rules: {
    "prettier/prettier": true,
    "plugin/declaration-block-no-ignored-properties": true,
    "plugin/no-unsupported-browser-features": [
      true,
      {
        severity: "warning",
        ignore: ["css-nesting"],
      },
    ],
    "font-family-no-missing-generic-family-keyword": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
    "no-duplicate-selectors": [
      true,
      {
        severity: "warning",
      },
    ],
    "selector-class-pattern": null,
  },
};
