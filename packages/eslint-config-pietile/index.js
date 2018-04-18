module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react', 'pietile-base'],
  rules: {
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-typos': 'off',
    'react/require-default-props': 'off',
  },
};
