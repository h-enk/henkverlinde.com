const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './node_modules/@ventizo/core/layouts/**/*.html',
        './node_modules/@ventizo/core/content/**/*.md',
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
        'h3',
        'alert-link',
        'stretched-link',
        ...whitelister([
          './node_modules/@ventizo/core/assets/scss/common/_variables.scss',
          './node_modules/@ventizo/core/assets/scss/components/_alerts.scss',
          './node_modules/@ventizo/core/assets/scss/components/_code.scss',
          // './node_modules/@ventizo/core/assets/scss/components/_syntax.scss',
        ]),
      ],
    }),
  ],
}
