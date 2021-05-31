---
title: "Quick Start"
description: "A quick start to using Hyas."
date: 2020-04-17T12:17:54+00:00
lastmod: 2020-04-17T12:17:54+00:00
draft: false
images: []
---

```bash
cd my-doks-site
```

```html
<!doctype html>
<html class="no-js" lang="">

<head>
  <meta charset="utf-8">
  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <meta property="og:title" content="">
  <meta property="og:type" content="">
  <meta property="og:url" content="">
  <meta property="og:image" content="">

  <link rel="manifest" href="site.webmanifest">
  <link rel="apple-touch-icon" href="icon.png">
  <!-- Place favicon.ico in the root directory -->

  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/style.css">

  <meta name="theme-color" content="#fafafa">
</head>
```

| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |
{.table-striped}

How to start a new Hyas project — one pager.

## Requirements

Hyas uses npm to install dependencies and run commands. Installing npm is pretty simple. Download and install [Node.js](https://nodejs.org/) (it includes npm) for your platform.

## Start a new Hyas project

Create a new site, change directories, install dependencies, and start development server.

### Create a new site

```bash
git clone https://github.com/h-enk/hyas.git my-hyas-site
```

### Change directories

```bash
cd my-hyas-site
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run start
```

Hyas will start the Hugo development webserver accessible by default at `http://localhost:1313`. Saved changes will live reload in the browser.

## Other commands

Hyas comes with commands for common tasks. [Commands →](https://gethyas.com/docs/prologue/commands/)

## Documentation

- [Netlify](https://docs.netlify.com/)
- [Hugo](https://gohugo.io/documentation/)
- [Hyas](https://gethyas.com/)

## Communities

- [Netlify Community](https://community.netlify.com/)
- [Hugo Forums](https://discourse.gohugo.io/)
- [Hyas Discussions](https://github.com/h-enk/hyas/discussions)
