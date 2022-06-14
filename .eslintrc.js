module.exports = {
  env: {
    browser: false,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'commonjs',
  },
  plugins: [
    '@typescript-eslint',
    'jest',
  ],
  rules: {
    'import/extensions': 'off',
    'max-len': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
