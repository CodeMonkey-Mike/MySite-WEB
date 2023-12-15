module.exports = {
  root:true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  settings: {
    react: {
      version: '16.13.1',
    },
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
  ],
  plugins: ['@typescript-eslint','react', 'react-hooks', 'import'],
  rules: {
    '@typescript-eslint/no-array-constructor': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { vars: 'local', args: 'none' }],
    'import/newline-after-import': 'warn',
    'import/no-cycle': 'error',
    'import/no-extraneous-dependencies': 'error',
    'no-var': 'warn',
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'warn',
    radix: 'warn',
    semi: ["error", "always"],
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'warn',
    'react/sort-comp': 'warn',
  },
};
