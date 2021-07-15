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
        'table',
        'thead',
        'tbody',
        'tr',
        'th',
        'td',
        'blockquote',
        'btn',
        ...whitelister([
          './assets/scss/components/_buttons.scss',
          './assets/scss/components/_code.scss',
          './node_modules/highlight.js/styles/github-dark.css',
        ]),
      ],
    }),
  ],
}
