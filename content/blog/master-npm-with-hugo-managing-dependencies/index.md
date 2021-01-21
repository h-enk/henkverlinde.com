---
title: "Master npm with Hugo: managing dependencies"
description: "In a series of three posts I will introduce you to npm, show you how to manage dependencies, and show you how to customize build scripts. This is the second post of the series."
excerpt: "In a series of three posts I will introduce you to npm, show you how to manage dependencies, and show you how to customize build scripts. This is the second post of the series."
date: 2021-01-15T15:55:56+01:00
lastmod: 2021-01-15T15:55:56+01:00
draft: true
weight: 50
images: ["master-npm-with-hugo-managing-dependencies.png"]
categories: ["Tools", "Guides"]
series: ["Master npm with Hugo"]
tags: ["Hugo", "Node.js", "npm"]
---

In a series of three posts I will introduce you to npm, show you how to manage dependencies, and show you how to customize build scripts. This is the second post of the series.

{{< img src="master-npm-with-hugo-managing-dependencies.png" alt="Master npm with Hugo: managing dependencies" class="wide" >}}

## Hugo

In the first post of the series, we went through the most basic example of installing a single dependency to an empty project.

Now we're ready to talk about how you use npm with Hugo. When you think about a typical Hugo site, the easiest example of dependencies are the styles and scripts used by a theme. But there’s something more fundamental to realize: __Hugo itself is a dependency__.

If you think about it, you’re creating a site, or application, that _depends_ on Hugo. The Hugo core is a 3rd party library that is required for your application to work. This is difficult to understand at first due to that Hugo usually is installed globally.

global install vs local install

## The solution

## Installing

```bash
npm install hugo-bin
```

{{< alert icon="💬" text="Share your thoughts on \"npm with Hugo\" in <a href=\"https://github.com/h-enk/henkverlinde.com/discussions\">Discussions</a>." >}}
