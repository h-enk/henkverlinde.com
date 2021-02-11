---
title: "Master npm with Hugo: customizing build scripts"
description: ""
excerpt: ""
date: 2021-01-15T15:56:02+01:00
lastmod: 2021-01-15T15:56:02+01:00
draft: true
weight: 10
images: ["master-npm-with-hugo-customizing-build-scripts.png"]
categories: ["Tools", "Guides"]
series: ["Master npm with Hugo"]
tags: ["Hugo", "Node.js", "npm"]
---

In a series of three posts I will introduce you to npm, show you how to manage dependencies, and show you how to customize build scripts. This is the third post of the series.

{{< img src="master-npm-with-hugo-customizing-build-scripts.png" alt="Master npm with Hugo: customizing build scripts" class="wide" >}}

In the [second post](/master-npm-with-hugo-managing-dependencies/) of the series, I showed you that Hugo itself can be viewed as a dependency of your project, and that a starter theme provides you with full control over your dependencies and gives you the possibility to customize build scripts.

We also extended our basic example with a local Hugo install, a Hugo project structure, and a starter theme structure.

Now we’re ready to talk about how to customize build scripts.

## Add Bootstrap scss

In the first post we installed [Bootstrap](https://getbootstrap.com/), the popular HTML, CSS, and JS library.

## Add PurgeCSS (Hugo's?)

## Wrap up

You can find the example in the [npm-hugo](https://github.com/h-enk/npm-hugo) repo I've set up.

{{< alert icon="💡" text="<a href=\"https://gethyas.com/\">Hyas</a> is a modern Hugo starter using npm to manage dependencies and run customized build scripts." >}}
