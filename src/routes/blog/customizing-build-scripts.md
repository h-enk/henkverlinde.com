---
title: "Customizing build scripts"
description: "This is the third post of the series Using npm with Hugo. In a series of three posts I will introduce you to npm, show you how to manage dependencies, and show you how to customize build scripts."
excerpt: "This is the <em>third</em> post of the series <em>Using npm with Hugo</em>. In a series of three posts I will introduce you to npm, show you how to manage dependencies, and show you how to customize build scripts."
date: 2021-02-10T15:55:56+01:00
lastmod: 2021-02-10T15:55:56+01:00
publishDate: '2021-02-10'
lastUpdated: '2022-02-10'
draft: false
weight: 50
images: []
categories: ["Guides"]
series: ["Using npm with Hugo"]
tags: ["Hugo", "Nodejs", "npm"]
authors: ["Henk Verlinde"]
---
This is the third post of the series Using npm with Hugo. In a series of three posts I will introduce you to npm, show you how to manage dependencies, and show you how to customize build scripts.

In the [second post](/managing-dependencies) of the series, I showed you that Hugo itself can be seen as a dependency of your project, and that a starter theme provides you with full control over your dependencies and gives you the possibility to customize build scripts.

We also extended our basic example with a local Hugo install, a Hugo project structure, and a starter theme structure.

## Customizing scripts

Now we’re ready to talk about how to customize build scripts. In stead of using `npx` to run a script from a local npm package, we're going to add a number of custom [scripts](https://docs.npmjs.com/cli/v7/using-npm/scripts) to our `package.json`:

```json
{
  ..
  "scripts": {
    "prestart": "npm run clean",
    "start": "hugo server --disableFastRender",
    "prebuild": "npm run clean",
    "build": "hugo --minify",
    "clean": "shx rm -rf public resources",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ..
}
```

Note the _pre_ scripts `prestart` and `prebuild`. The `prestart` script e.g. executes _before_ the `start` script. Similarly, you can use _post_ scripts. A `poststart` script e.g. would execute _after_ the `start` script.

### Listing scripts

The `npm run` command lists the scripts available in your `package.json`:

```bash
$ npm run
Lifecycle scripts included in npm-hugo:
  prestart
    npm run clean
  start
    hugo server --disableFastRender
  test
    echo "Error: no test specified" && exit 1

available via `npm run-script`:
  prebuild
    npm run clean
  build
    hugo --gc --minify
  clean
    shx rm -rf public resources
```

### Running scripts

The `npm run start` command e.g. will:

1. delete the temporary build directories, and next
2. start the hugo server with the `--disableFastRender` flag enabled.

## Bootstrap

We can use dependencies to pull in resources for our project. Let's import the Bootstrap SCSS we added previously, into our starter theme:

```bash
shx mkdir assets && shx echo '@import \"bootstrap/scss/bootstrap\";' > ./assets/app.scss
```

And process the SCSS with Hugo in `./layouts/partials/head.html`:

```html
<head>
  {{ $options := (dict "targetPath" "main.css" "includePaths" (slice "node_modules")) -}}
  {{ $css := resources.Get "app.scss" | resources.ToCSS $options -}}
  <link rel="stylesheet" href="{{ $css.Permalink }}">
</head>
```

Let's add some Bootstrap styling to `./layouts/index.html`:

```html
{{ define "main" }}
  <div class="container-fluid">
    <div class="row vh-100 align-items-center justify-content-center">
      <div class="col-md-7">
        <h1 class="text-center">{{ .Title }} 🎉</h1>
      </div>
    </div>
  </div>
{{ end }}
```

Add the `resources` and `public` folders to `.gitignore`, and check the result with `npm run start`.

### Removing unused CSS

We can also use dependencies to pull in tooling for our build process. Let's make our project production ready by stripping out unnecessary CSS:

> [PurgeCSS](https://purgecss.com/) analyzes your content and your CSS files. Then it matches the selectors used in your files with the one in your content files. It removes unused selectors from your CSS, resulting in smaller CSS files.

We will also be installing [Autoprefixer](https://github.com/postcss/autoprefixer), a [PostCSS](https://github.com/postcss/postcss) plugin to parse CSS and add vendor prefixes to CSS rules using values from [Can I Use](https://caniuse.com/):

```bash
npm i -D @fullhuman/postcss-purgecss postcss-cli autoprefixer
```

Add `./postcss.config.js`:

```js
const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: ['./layouts/**/*.html']
    })
  ]
}
```

Update `./layouts/partials/head.html`:

```html
<head>
  {{ $options := (dict "targetPath" "main.css" "includePaths" (slice "node_modules")) -}}
  {{ $css := resources.Get "app.scss" | resources.ToCSS $options -}}
  {{ if hugo.IsProduction -}}
    {{ $css = $css | minify | fingerprint | resources.PostCSS | resources.PostProcess -}}
  {{ end -}}
  <link rel="stylesheet" href="{{ $css.Permalink }}">
</head>
```

Update `./config.toml`:

```toml
baseURL = "/"
..
```

Add to `package.json`:

```json
{
  ..
  "browserslist": [
    "defaults"
  ],
  ..
}
```

- [http-server](https://github.com/http-party/http-server) is a simple, zero-configuration command-line http server — handy for viewing a local production build.
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/) is a set of web developer tools built directly into the Google Chrome browser.

Run `npm run build` and check the result. That's it. We've brought down the file size of our CSS file from 185.76 KB to — yes that's right — 2.63 KB.

## Plugins

We could also use dependencies to pull in extra functionality into our starter theme. Think of e.g. SEO, performance, and security.

## Wrapping up

You're now familiar with customizing build scripts. We also extended our example with Bootstrap, and optimized it for use in production. You're now also aware that you can use dependencies to pull in extra functionality.

You can find the full example in the [npm-hugo](https://github.com/h-enk/npm-hugo) repo I've set up.

In case you’re curious, the idea for this series was taken from a similar post written about [WordPress](https://roots.io/using-composer-with-wordpress/).

Take a look at [Hyas](https://gethyas.com/) for a modern Hugo starter using npm to manage dependencies and run customized build scripts.
