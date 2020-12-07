---
title: "Continuous Integration workflow for your Hyas project"
description: "Continuous integration (CI) workflow to test and build your Hyas project."
excerpt: "Continuous integration (CI) workflow to test and build your Hyas project."
date: 2020-11-19T10:10:58+01:00
lastmod: 2020-11-19T10:10:58+01:00
draft: false
weight: 50
images: ["continuous-integration-workflow-for-your-hyas-project.jpg"]
categories: ["Tools", "Guides"]
tags: ["Hugo", "GitHub", "Node.js"]
---

Recently, I set up a Continuous Integration (CI) workflow for [Doks](https://github.com/h-enk/doks).
Just thought I'd share my workflow. Use it to test and build your Hyas project 🤖

{{< img src="continuous-integration-workflow-for-your-hyas-project.jpg" alt="CI workflow automation for your Hyas project" caption="CI workflow automation for your Hyas project — Rijkswachter WhiteBOT by <em>Studio Hamerhaai</em>" class="wide" >}}

## Operating systems

Job runs on: `ubuntu-latest`, `windows-latest`, and `macos-latest`.

## Node.js

Node.js versions used: `14.x`, and `15.x`.

## Steps

1. Install Hugo (using [peaceiris/actions-hugo@v2](https://github.com/peaceiris/actions-hugo))
2. Check install Hugo
3. Install dependencies
4. Check for linting errors
5. Delete temporary directories
6. Build production website

## Workflow file

{{< gist h-enk f04b584a5fdbd4b72b7a2f2836fbba5d >}}

## Further reading

- [Building and testing Node.js](https://docs.github.com/en/free-pro-team@latest/actions/guides/building-and-testing-nodejs)
