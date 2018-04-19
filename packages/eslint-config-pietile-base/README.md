# 🥧 Base Pietile eslint config

Custom eslint config based on [Airbnb's base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) and [prettier](https://github.com/prettier/eslint-config-prettier) configs.

This config exclude React specific rules. (Config with react support is [here](https://github.com/mxck/eslint-config-pietile/tree/master/packages/eslint-config-pietile))

## Installation

1.  `npm info "eslint-config-pietile-base@latest" peerDependencies` - to get the peer dependencies and versions.
2.  `yarn add --dev <dependency>@<version>` for each listed peer dependency.
3.  `yarn add --dev eslint-config-pietile-base` to install config.
4.  Create `.eslintrc.js` file in root of your project.

```js
module.exports = {
  extends: ['pietile-base'],
};
```

5.  _Optional._ If you use prettier create `.prettierrc` file in root of your project

```json
{
  "singleQuote": true,
  "printWidth": 100,
  "trailingComma": "all"
}
```

### License

MIT License. © Maksim Milyutin and Vladislav Shabanov 2018
