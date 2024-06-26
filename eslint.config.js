
module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    semi: 'error',
    'no-unused-vars': 'error',
    'no-console': 'off',
  },
};
