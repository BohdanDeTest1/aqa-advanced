import globals from "globals";
import pluginJs from "@eslint/js";


export default {
  // env: {
  //   node: true,
  //   es2024: true
  // },
  languageOptions: { globals: globals.browser },
  // extends: [
  //   // pluginJs.configs.recommended,
  //   // 'plugin:/react/recommended'
  // ],

  rules: {
    //'eqeqe': 'error',
    'no-unused-vars': 'warn'
  },
  // ovveride: [{
  //   files: ["*.mjs"],
  //   parserOptions: {
  //     sourceType: "module",
  //   },
  // },
  // ],
};