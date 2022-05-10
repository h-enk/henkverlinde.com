---
title: "Managing dependencies"
description: "This is the second post of the series Using npm with Hugo. In a series of three posts I will introduce you to npm, show you how to manage dependencies, and show you how to customize build scripts."
excerpt: "This is the <em>second</em> post of the series <em>Using npm with Hugo</em>. In a series of three posts I will introduce you to npm, show you how to manage dependencies, and show you how to customize build scripts."
date: 2021-01-27T15:55:56+01:00
lastmod: 2021-01-27T15:55:56+01:00
publishDate: '2021-01-27'
lastUpdated: '2021-06-26'
draft: false
weight: 50
images: []
categories: ["Guides"]
series: ["Using npm with Hugo"]
tags: ["Hugo", "Nodejs", "npm"]
authors: ["Henk Verlinde"]
---

This is the <em>second</em> post of the three piece series <em>Using npm with Hugo</em>.

<aside>
<p>The <em>Using npm with Hugo</em> series:</p>
<ol>
<li><a href="/blog/introduction-to-npm">Introduction to npm</a></li>
<li><a href="/blog/managing-dependencies">How to manage dependencies</a></li>
<li><a href="/blog/customizing-build-scripts">How to customize build scripts</a></li>
</ol>
</aside>

In the [first post](/blog/introduction-to-npm) of the series, I introduced to the basic concepts of npm. We also went through the most basic example of installing a single dependency to an empty project.

Let's continue.

## Integrating with Hugo

Now we're ready to talk about how you could use npm with Hugo. When you think about a typical Hugo site, the easiest example of dependencies are themes. But there’s something more fundamental to realize: __Hugo itself is a dependency__.

If you think about it, you’re creating a site, or application, that _depends_ on Hugo. The Hugo binary is a 3rd party library that is required for your application to work. This is difficult to understand at first due to that Hugo is usually installed in a global location.

If we could install Hugo locally as a dependency, we would have full control over the Hugo version used in our project. And best of all, all our project users would use the same version.

### How to

We have an issue:

<p class=emph>
Hugo is a binary, it doesn’t have a package.json file, so it’s not an npm package.
</p>

### The solution

The solution is to use a binary wrapper for Hugo with a `package.json` file already added. [hugo-bin](https://github.com/fenneclab/hugo-bin) is currently the most popular/accepted package.

There's been some [discussion](https://github.com/fenneclab/hugo-bin/issues/32) about migrating this package to Hugo, but it hasn’t happened yet and isn’t likely to anytime soon.

<aside>
<p>Unlike hugo-bin, <a href="https://github.com/dominique-mueller/hugo-installer">hugo-installer</a> verifies the checksum & runs a health check when installing. Recommended to use. [<em>Update Jun 26 2021</em>]</p>
</aside>

### Installing

We need the extended version of Hugo for [Sass/SCSS](https://sass-lang.com/) processing. Add a local `.npmrc` configuration file to the project root:

```ini
hugo_bin_build_tags = "extended"
```

Now we can get to installing:

```bash
npm install hugo-bin --save-dev
```

Your `package.json` will now look like:

```json
{
  "name": "npm-hugo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "bootstrap": "^5.0.0-beta1",
    "hugo-bin": "^0.68.0"
  }
}
```

<aside>
<p>In this series we also use the <code>npx</code> command. <a href="https://docs.npmjs.com/cli/v7/commands/npx">npx</a> (included with npm) runs a command from a local or remote npm package.</p>
</aside>

Let's check the locally installed Hugo version:

```bash
npx hugo version
```

It should output something like this:

```bash
Hugo Static Site Generator v0.80.0/extended windows/amd64 BuildDate: unknown
```

That’s it. We now have the extended version of Hugo locally installed.

## Setting up a Hugo project

Let's set up our Hugo project:

```bash
npx hugo new site . --force
```

And list out our project folder:

```bash
$ ls

    Directory: .\npm-hugo

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d----           1/26/2021 12:28 PM                archetypes
d----           1/26/2021 12:28 PM                content
d----           1/26/2021 12:28 PM                data
d----           1/26/2021 12:28 PM                layouts
d----           1/26/2021 11:20 AM                node_modules
d----           1/26/2021 12:36 PM                resources
d----           1/26/2021 12:28 PM                static
d----           1/26/2021  1:18 PM                themes
-a---           1/21/2021  1:26 PM             12 .gitignore
-a---           1/26/2021 11:13 AM             32 .npmrc
-a---           1/26/2021  1:21 PM            100 config.toml
-a---           1/26/2021 11:20 AM         124376 package-lock.json
-a---           1/26/2021 12:04 PM            333 package.json
-a---           1/21/2021  1:28 PM             12 README.md
```

We now have a project structure, but no content or theme yet.

### Adding a theme

You could now pick up Hugo's Quick Start at [Step 3: Add a Theme](https://gohugo.io/getting-started/quick-start/#step-3-add-a-theme). That will add a theme as a Git submodule. Since you’re reading an article about npm, you’ve probably realized that [Git submodules aren’t the proper way to deal with dependencies](https://www.philosophicalhacker.com/post/using-git-submodules-effectively/).

Hugo also offers the possibility to [add a theme as a Hugo module](https://gohugo.io/hugo-modules/use-modules/#use-a-module-for-a-theme). That will require you to install Go, is also fairly complex, but looks like [a better alternative than Git submodules](https://www.hugofordevelopers.com/articles/master-hugo-modules-managing-themes-as-modules/).

Installing themes as a npm dependency looks like where we want to go. However, most themes are set up without a `package.json` file and any form of dependency management itself.

That's why we will use a starter theme with a `package.json` file. This will provide us with full control over our dependencies and give us the possibility to customize build scripts.

#### Adding starter theme files

Let's create a new blank theme to help us get started:

```bash
npx hugo new theme blank-theme
```

We now have a theme structure living in the `themes/blank-theme` folder.

However, our theme will be a starter that lives in the project root.

<aside>
<p>In this series we also use the <code>shx</code> command. <a href="https://github.com/shelljs/shx">shx</a> runs simple Unix-like, cross-platform commands from npm package scripts and the command line.</p>
</aside>

Let's install shx first:

```bash
npm install shx --save-dev
```

Now we can easily copy the blank theme files to the root of our project:

```bash
shx cp -rf themes/blank-theme/* .
```

And remove the themes folder:

```bash
shx rm -rf themes
```

We're almost there. Let's add some content to the homepage:

```bash
shx echo '{{ define \"main\" }}<h1>{{ .Title }}</h1>{{ end }}' > ./layouts/index.html
```

That's it. We’re now ready to run Hugo:

```bash
npx hugo server
```

## Updating

I recommend regularly updating the local packages your project depends on to improve your website's code as improvements to its dependencies are made. It will keep your website stable, usable, and secure.

### Checking for outdated packages

The [`npm outdated`](https://docs.npmjs.com/cli/v7/commands/npm-outdated) command will check the registry to see if any (or, specific) installed packages are currently outdated:

```bash
npm outdated [[<@scope>/]<pkg> ...]
```

### Updating a package

The [`npm update`](https://docs.npmjs.com/cli/v7/commands/npm-update) command will update all the packages listed to the latest version (specified by the tag config), respecting semver:

```bash
npm update [<pkg>...]
```

## Wrapping up

You're now aware that Hugo itself can be seen as a dependency of your project, and that a starter theme provides you with full control over your dependencies and gives you the possibility to customize build scripts.

We also extended our basic example with a local Hugo install, a Hugo project structure, and a starter theme structure. You can find the example in the [npm-hugo](https://github.com/h-enk/npm-hugo) repo I've set up.

In the [next post](/blog/customizing-build-scripts) we’re going to talk about how to customize build scripts.

<aside>
<p>Take a look at <a href="https://gethyas.com/">Hyas</a> for a modern Hugo starter using npm to manage dependencies and run customized build scripts.</p>
</aside>
