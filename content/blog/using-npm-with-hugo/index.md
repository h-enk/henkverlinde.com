---
title: "Master npm with Hugo: an introduction to npm"
description: "An introduction to npm and how to manage Hugo core, modules, and even themes with it."
excerpt: "An introduction to npm and how to manage Hugo core, modules, and even themes with it."
date: 2021-01-13T16:02:36+01:00
lastmod: 2021-01-13T16:02:36+01:00
draft: true
weight: 50
images: ["using-npm-with-hugo.png"]
categories: ["Tools", "Guides"]
series: ["Master npm with Hugo"]
tags: ["Hugo", "Node.js", "npm"]
---

An introduction to npm and how to manage Hugo core, modules, and even themes with it.

{{< img src="using-npm-with-hugo.png" alt="Using npm with Hugo" class="wide" >}}

## Intro to npm

## Integrating with Hugo

Finally we’re ready to talk about how you use npm with Hugo. When you think about a typical Hugo site, the easiest example of dependencies are modules. But there’s something more fundamental to realize: __Hugo itself is a dependency__.

If you think about it, you’re creating a site, or application, that depends on Hugo. The Hugo core is a 3rd party library that is required for your application to work.

## How to

```bash
npm install hugo-bin
```

```bash
Hugo Static Site Generator v0.80.0/extended windows/amd64 BuildDate: unknown
```

## Why

. Hugo e.g. is

Think benefits:

With [The Twelve-Factor App](https://12factor.net/) in mind. See in particular: II. Dependencies.

Every Hugo theme uses dependencies. Dependencies provide for functionalities. There are basically 3 ways (in order of adoption by theme developers):

- Hardcode deliver
- Hugo Modules
- npm modules

## What

Manage your Hugo project's:

1. Dependencies (via `devDependencies` and `dependencies` objects)
2. Build steps (via `scripts` object)

Note: Hugo itself can be seen as a dependency

Manage your Hugo project as a Node.js project. Making it easier to manage dependencies and to customize build steps.

npm makes it easier to manage dependencies and customize build steps of your Hugo project.
~~Extend Hugo's building speed and flexibility.~~ With npm you get easy, flexible dependency management and additional build tooling. Make use of the best of both worlds — I believe it's a brilliant match.
