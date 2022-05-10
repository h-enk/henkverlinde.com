---
title: "Hyas CI workflow"
description: "Continuous integration (CI) workflow to test and build your Hyas project."
excerpt: "Recently, I set up a Continuous Integration (CI) workflow for <a href=\"https://github.com/h-enk/doks\">Doks</a>. Just thought I'd share my workflow. Use it to test and build your Hyas project — automatically."
date: 2020-11-19T10:10:58+01:00
lastmod: 2020-11-19T10:10:58+01:00
publishDate: '2020-11-19'
lastUpdated: '2020-11-19'
draft: false
weight: 50
images: []
categories: ["Guides"]
series: []
tags: ["Hyas", "CI", "GitHub"]
authors: ["Henk Verlinde"]
---

Recently, I set up a Continuous Integration (CI) workflow for [Doks](https://github.com/h-enk/doks). Just thought I'd share my workflow. Use it to test and build your Hyas project — automatically.

## Operating systems

Job runs on: `ubuntu-latest`, `windows-latest`, and `macos-latest`.

## Node.js

Node.js versions used: `14.x`, and `15.x`.

## Steps

1. Check out Hyas project
2. Set up Node.js
3. Install dependencies
4. Run Hyas test script: check scripts, styles, and markdown for errors
5. Run Hyas build script: delete temporary directories and build production website — including functions

## Workflow file

Copy the contents of the workflow file below, and save it as `./.github/workflows/hyas-ci.yml`:

```yaml
name: Hyas CI

on:
  push:
    branches: master
  pull_request:
    branches: master

jobs:
  build:
    runs-on: ${{ matrix.os }}

    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
        node: [14.x, 15.x]

    steps:
    - name: Check out Hyas project
      uses: actions/checkout@v2

    - name: Set up Node.js ${{ matrix.node }}
      uses: actions/setup-node@v2
      with:
        node-version: ${{ matrix.node }}

    - name: Install dependencies
      run: npm ci

    - name: Run Hyas test script
      run: npm test

    - name: Run Hyas build script
      run: npm run build
```

## Further reading

- [Building and testing Node.js](https://docs.github.com/en/free-pro-team@latest/actions/guides/building-and-testing-nodejs)
