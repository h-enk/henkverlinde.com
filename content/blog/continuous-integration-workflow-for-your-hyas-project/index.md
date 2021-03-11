---
title: "Continuous Integration workflow for your Hyas project"
description: "Continuous integration (CI) workflow to test and build your Hyas project."
excerpt: "Recently, I set up a Continuous Integration (CI) workflow for <a href=\"https://github.com/h-enk/doks\">Doks</a>. Just thought I'd share my workflow. Use it to test and build your Hyas project — automatically."
date: 2020-11-19T10:10:58+01:00
lastmod: 2020-11-19T10:10:58+01:00
draft: false
weight: 30
images: ["continuous-integration-workflow-for-your-hyas-project.png"]
categories: ["Tools", "Guides"]
tags: ["Hugo", "GitHub", "Node.js"]
---

## Operating systems

Job runs on: `ubuntu-latest`, `windows-latest`, and `macos-latest`.

## Node.js

Node.js versions used: `14.x`, and `15.x`.

## Steps

1. Check out Hyas project
2. Set up Node.js
3. Install dependencies
4. Run Hyas test script:
   - check scripts,
   - styles, and
   - markdown for errors.
5. Run Hyas build script:
   - delete temporary directories, and
   - build production website,
   - including functions.

## Workflow file

{{< gist h-enk f3bbca43d050e6d6b10bdb229dd7052f >}}

## Further reading

- [Building and testing Node.js](https://docs.github.com/en/free-pro-team@latest/actions/guides/building-and-testing-nodejs)
