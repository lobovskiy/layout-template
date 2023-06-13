# layout-template

## General info

A boilerplate for creating HTML+CSS+JS projects with _development server_ and _SASS/SCSS preprocessor_.

## Quick start with creating new project using this template

1. Create new repository on Github and save github directions for starting work with the new repository

2. Clone this template project to a new local project folder on your PC:

   `git clone <https://github.com/this-repo-url.git> <path/to/your/new-project-folder-name>`

3. Delete hidden folder `.git` from the root directory of the cloned repository

4. Specify title of your app inside the `title` tag of `src/index.html` file:

   `<title>Your app title</title>`

5. Specify name and version of your project in the `package.json` settings:

   ```
   {
     "name": "new-project-name",
     "version": "1.0.0",
     ...
   }
   ```

6. To add a favicon in `webpack.config.js` uncomment a line with the HtmlWebpackPlugin's `favicon` property and specify a path to where your favicon file is in its value:

   ```
   module.exports = {
     ...
     plugins: [
       ...
       new HtmlWebpackPlugin({
         favicon: './path/to/your-favicon-file.png',
         ...
       }),
       ...
     ],
     ...
   }
   ```

7. Install dependencies using npm:

   `npm install`

8. Add information about your project here in README.md

9. Push repository to Github in accordance with directions for starting work given in the first step.

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
- [normalize.css](https://www.npmjs.com/package/normalize.css)
- [Babel](https://babeljs.io/) with polyfills and "preset-env" preset
- [EditorConfig](https://editorconfig.org/)
- [ESLint](https://eslint.org/) with ["airbnb-base" config](https://www.npmjs.com/package/eslint-config-airbnb-base)
- [Prettier](https://editorconfig.org/)

  _Note: to use autoformatting with Prettier please make sure that [Prettier is installed and configured as a default formatter in your IDE](https://prettier.io/docs/en/editors.html)._
