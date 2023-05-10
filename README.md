# layout-template

## General info

A boilerplate for creating HTML+CSS+JS projects with _development server_ and _SASS/SCSS preprocessor_.

## Setup

1. Install the project locally using npm:

   `npm install`

2. Specify name of your project as a value of the HtmlWebpackPlugin's `title` property in the `\webpack.config.js` file.

   To add a favicon also uncomment a line with the `favicon` property and specify a path to where your favicon file is as its value.

```
module.exports = {
  ...
  plugins: [
    ...
    new HtmlWebpackPlugin({
      title: 'Your project name',
      favicon: './path/to/your-favicon-file.png',
      ...
    }),
    ...
  ],
  ...
}
```

## Available scripts

### `npm start`

Starts the project in development mode.

### `npm run build`

Builds the app for production to the `dist` folder.

## Technologies

Tools used for handy development:

- [Webpack v5](https://webpack.js.org/) with loaders and plugins:
  - [webpack-dev-server](https://webpack.js.org/configuration/dev-server/)
  - [html-loader](https://webpack.js.org/loaders/html-loader/)
  - [html-webpack](https://webpack.js.org/plugins/html-webpack-plugin/)
  - [css-loader](https://webpack.js.org/loaders/css-loader/)
  - [css-minimizer-webpack-plugin](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/)
  - [mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/)
  - [sass-loader](https://webpack.js.org/loaders/sass-loader/)
- [Sass](https://sass-lang.com/)
- [Babel](https://babeljs.io/) with polyfills and "preset-env" preset
- [EditorConfig](https://editorconfig.org/)
- [ESLint](https://eslint.org/) with ["airbnb-base" config](https://www.npmjs.com/package/eslint-config-airbnb-base)
- [Prettier](https://editorconfig.org/)

  _Note: to use autoformatting with Prettier please make sure that [Prettier is installed and configured as a default formatter in your IDE](https://prettier.io/docs/en/editors.html)._
