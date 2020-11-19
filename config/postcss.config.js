const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './layouts/**/*.html',
        './content/**/*.md',      
      ],
      safelist: [
        'lazyloaded',
        'my-2',
        ...whitelister([
          './assets/scss/components/_syntax.scss',
          './assets/scss/components/_code.scss',
          './node_modules/flickity/dist/flickity.css',
        ]),
      ],
    }),
  ],
}
