import globals from 'globals';
import parser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.Config} */
export default {
  files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  languageOptions: {
    globals: globals.browser,
    parser: parser,
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules: {},
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
