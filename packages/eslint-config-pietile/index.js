const baseRules = require('eslint-config-pietile-base/rules');

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    ...baseRules,
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-typos': 'off',
    'react/require-default-props': 'off',
  },
};
