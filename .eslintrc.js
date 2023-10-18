module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'padding-line-between-statements': 'off',
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/space-before-blocks': 'warn',
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const'],
        next: '*',
      },
    ],
    '@typescript-eslint/no-restricted-imports': [
      'error',
      {
        paths: ['shared'],
        patterns: ['shared/config/*/*', 'shared/lib/*/*', 'shared/ui/*/*', 'shared/api/*/*'],
      },
    ],
    'max-len': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off',
    quotes: ['error', 'single'],
  },
};
