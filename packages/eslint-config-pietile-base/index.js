const rules = require('./rules');

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'prettier'],
  rules,
};
