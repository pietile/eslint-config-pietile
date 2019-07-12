module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'prettier'],
  rules: {
    'arrow-body-style': [0, 'as-needed'],
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'max-len': ['error', { code: 100, ignoreUrls: true }],
    'no-console': 'off',
    'no-continue': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': ['error', { variables: false }],
  },
};
