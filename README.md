# preact-material-boilerplate

## Documentation

- This is a material template for [preact-cli](https://github.com/developit/preact-cli) using [preact-material-components](https://github.com/prateekbh/preact-material-components).
- [For Preact](https://preactjs.com/): General information about how to work with Preact, not specific to this template

## Usage

``` bash
$ npm install -g preact-cli
$ preact create material my-project
$ cd my-project
$ npm install
$ npm run dev
```

Development server runs on port `8080`. If the default port is already in use on your machine it will start the development server on a random port.

## Styling material components
In order to style the material components you can give class names to the components and target them with the css selectorr in any css files.

To style them globally use the index `[style.css](https://github.com/preactjs-templates/material/blob/master/template/src/style/index.css)`, so that it affects it everywhere.
e.g.
```
.mdc-dialog .mdc-dialog__surface{
  max-width: 300px;
  min-width: 0;
  color: tomato;
}
```

## Theming
In order to alter the theme of the app you can again use the index `[style.css](https://github.com/preactjs-templates/material/blob/master/template/src/style/index.css)` and alter the theme variables in it defined here: 
https://material.io/develop/web/components/theme/#css-custom-properties

But you can also give class names to the components and use these variables to just change the theme of that component.

## Commands

- `npm run start`: Runs `serve` or `dev`, depending on `NODE_ENV` value. Defaults to `dev server`

- `npm run dev`: Run a development, HMR server

- `npm run serve`: Run a production-like server

- `npm run build`: Production-ready build

- `npm run lint`: Pass JavaScript files using ESLint

### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `preact-cli`:

``` bash
preact create username/repo my-project
```
