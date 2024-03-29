module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "@nuxt/eslint-config",
    "plugin:tailwindcss/recommended",
    "eslint-config-prettier", // has to be last to be able to disable rules
  ],
  rules: { "vue/no-multiple-template-root": "off" },
};
