import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // 添加 Prettier 插件
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'quotes': ['error', 'single'],
    'prettier/prettier': ['error', { singleQuote: true }], // 配置 Prettier 使用单引号
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'quotes': ['error', 'single'],
        'prettier/prettier': ['error', { singleQuote: true }], // 配置 Prettier 使用单引号
      },
    },
  ],
});