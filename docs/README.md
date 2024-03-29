# baoshuo.css

> A useless css framework.

[![NPM](https://img.shields.io/npm/v/baoshuo.css.svg?style=flat-square)](https://www.npmjs.com/package/baoshuo.css) [![Author](https://img.shields.io/badge/Author-Baoshuo-b68469.svg?style=flat-square)](https://baoshuo.ren) [![Size](https://badge-size.herokuapp.com/renbaoshuo/baoshuo.css/master/dist/baoshuo.min.css?compression=gzip&style=flat-square)](https://github.com/renbaoshuo/baoshuo.css/tree/master/dist) [![LICENSE](https://img.shields.io/github/license/renbaoshuo/baoshuo.css.svg?style=flat-square)](./LICENSE) [![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/baoshuo.css/badge)](https://www.jsdelivr.com/package/npm/baoshuo.css)

## Features

- Lightweight.
- Easy to use.
- Dark mode support.

## Getting Started

There are many ways to get started with baoshuo.css framework in your projects.

### Install manually

Download the compiled and minified [`baoshuo.min.css`](dist/baoshuo.min.css) file, then put it to anywhere you like and include it in your website or app.

### Install using npm

```bash
npm install baoshuo.css --save
```

### Install from CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/baoshuo.css" />
```

### Compiling CSS

baoshuo.css uses Gulp for compiling CSS. Firstly you need to install `yarn`, which is used to manage Gulp and other dependencies.

Then, you can build the CSS file from the command line:

- Navigate to the root directory of `baoshuo.css`.
- Run `yarn install`. YARN will install all dev dependencies as listed in `package.json`.
- When completed, run `gulp build` task to compile CSS and minify files.
- You can find compiled CSS files in /dist directory.

All available Gulp tasks:

- `gulp build` - compile Sass to CSS and minify files (default)
- `gulp watch` - watch file changes and re-compile CSS files

## Documentation

_TODO_

## Browser Support

baoshuo.css uses [Autoprefixer](https://github.com/postcss/autoprefixer) to make most styles compatible with earlier browsers. For best compatibility, these browsers are recommended:

- Chrome 40+
- Firefox 40+
- Internet Explorer 11

## Author

**baoshuo.css** © [Baoshuo](https://github.com/renbaoshuo), Released under the [AGPL-3.0](./LICENSE) License.  
Authored and maintained by Baoshuo with help from [contributors](https://github.com/renbaoshuo/baoshuo.css/contributors).

Thanks to [SukkaW/suka.css](https://github.com/SukkaW/suka.css) for providing creative inspiration.

> [Personal Website](https://baoshuo.ren) · [Blog](https://blog.baoshuo.ren) · GitHub [@renbaoshuo](https://github.com/renbaoshuo) · Twitter [@renbaoshuo](https://twitter.com/renbaoshuo)
