---
title: 'Why you should use npm as a dependency manager for Hugo'
description: 'This is the first post of the series Using npm with Hugo. In a series of three posts I will introduce you to npm, show you how to manage dependencies, and show you how to customize build scripts.'
image: "/images/blog/why-npm-hugo.webp"
date: "2021-01-15T15:55:48+01:00"
lastmod: "2021-01-15T15:55:48+01:00"
author: "Henk Verlinde"
categories: ['Guides']
tags: ['Hugo', 'Nodejs', 'npm']
series: ['Using npm with Hugo']
---

This is the <em>first</em> post of the three piece series <em>Using npm with Hugo</em>.

<aside>
	<ol>
	<li><a href="/blog/introduction-to-npm">Introduction to npm</a></li>
	<li><a href="/blog/managing-dependencies">How to manage dependencies</a></li>
	<li><a href="/blog/customizing-build-scripts">How to customize build scripts</a></li>
	</ol>
</aside>

Let's get started 😀

## npm

[npm](https://www.npmjs.com/) is the default dependency manager for [Node.js](https://nodejs.org/) used by millions of developers. Your first question is most likely _"what is a dependency manager and why do I need one?"_.

Almost any code you write probably ends up depending on 3rd party libraries. All of these libraries (projects, frameworks, files, etc) become _dependencies_ of your project. npm lets you declare the dependencies for a project and it will install and manage them.

If you’ve used [Composer](http://getcomposer.org/) for PHP, [Bundler](http://bundler.io/) for Ruby, or [pip](http://www.pip-installer.org/en/latest/) for Python, then you’ve already used a dependency manager.

All these tools deal with _packages_. Every dependency is also a package. What constitutes a package? It can be a local file, local folder, remote zip, local Git repository, remote Git repository, GitHub repository, etc.

Most dependency managers also include a global registry of available packages. For npm, this is the [npm Registry](https://www.npmjs.com/). To get an idea of what kind of packages are available, just browse through the [most depended upon packages](https://www.npmjs.com/browse/depended).

I’ll do my best to explain some npm concepts throughout the series, but the official [npm Docs](https://docs.npmjs.com/packages-and-modules) are quite accessible as well. It’s recommended to read them to get a full understanding of npm.

### Installation

Installing npm is pretty simple. Download and install [Node.js](https://nodejs.org/) (it includes npm) for your platform. I recommend installing the current release.

### Usage

Seeing npm in action usually solves most of the confusion you might have after reading about dependencies and packages. Let’s go through the most basic example of installing a single dependency to an empty project.

In this case our project is just an empty folder to start with:

```bash
mkdir npm-hugo && cd npm-hugo
```

For npm, you declare your dependencies in a `package.json` file. Create one without having npm ask any questions:

```bash
npm init -y
```

For this example we're only installing one dependency: [Bootstrap](https://getbootstrap.com/), the popular HTML, CSS, and JS library:

```bash
npm install bootstrap@next --save-dev
```

You’ll then get the following output:

```bash
added 2 packages, and audited 2 packages in 2s

2 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

And your `package.json` will look like:

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
		"bootstrap": "^5.0.0-beta1"
	}
}
```

Let’s list out some folders to see what actually happened:

```bash
$ ls

    Directory: .\npm-hugo

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d----           1/14/2021  7:44 PM                node_modules
-a---           1/14/2021  7:44 PM           1693 package-lock.json
-a---           1/14/2021  7:44 PM            281 package.json
```

```bash
$ ls node_modules

    Directory: .\npm-hugo\node_modules

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d----           1/14/2021  7:44 PM                @popperjs
d----           1/14/2021  7:44 PM                bootstrap
-a---           1/14/2021  7:44 PM            977 .package-lock.json
```

We can see that npm created a `node_modules` directory that contains the `bootstrap` and `@popperjs` packages.

You might be wondering about the new `package-lock.json` file that was generated. The [npm Docs](https://docs.npmjs.com/cli/v8/configuring-npm/package-lock-json) explain it nicely:

> `package-lock.json` is automatically generated for any operations where npm modifies either the `node_modules` tree, or `package.json`. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.

## Advantages

You might still be wondering what’s the point in using npm and going through all the work above. npm (and any dependency manager for that matter) has many advantages:

- your dependencies are explicitly declared in a single place
- installing and updating is handled by the tool
- your project is locked onto specific versions
- you don’t need to include the actual 3rd party code in your version control repository

The last one is huge. Without a dependency manager, you’re stuck doing one of two things:

- adding the entirety of a 3rd party library into your VCS repo
- using something like Git submodules

This means that when you’re using npm, you check the following files into your repository:

- `package.json`
- `package-lock.json`

That’s it. Add `node_modules` to your `.gitignore` and let npm handle it. Now whoever wants to setup your project, they just run the standard `git clone` followed by `npm install`.

## Wrapping up

You're now familiar with the basic concepts of npm. We also went through the most basic example of installing a single dependency to an empty project. You can find the example in the [npm-hugo](https://github.com/h-enk/npm-hugo) repo I've set up.

<aside>
<p>Take a look at <a href="https://gethyas.com/">Hyas</a> for a modern Hugo starter using npm to manage dependencies and run customized build scripts.</p>
</aside>

In the [next post](/blog/managing-dependencies) we're going to talk about how to manage dependencies.
