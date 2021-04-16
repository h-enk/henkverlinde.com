---
title: "Hyas CLI: command line tool for Hyas and Doks"
description: "Command line tool making it easier and more seamless to work with Hyas — and Doks — from the command line."
excerpt: "Command line tool making it easier and more seamless to work with Hyas — and Doks — from the command line."
date: 2021-04-12T09:30:07+02:00
lastmod: 2021-04-12T09:30:07+02:00
draft: false
weight: 10
images: ["hyas-cli-command-line-tool-hyas-doks.png"]
categories: ["Tools", "Projects"]
tags: ["CLI", "Hyas", "Doks"]
---

```bash
Hyas command line tool

Usage: hyas <command> [options]

Commands:
  create <dir> [theme]  Create a new Hyas project
  start                 Start local development server
  build                 Build production website
  add [file]            Add content file
  clean                 Delete temporary directories
  lint [source]         Check for errors
  check                 Check local environment

Options:
  -h, --help     Show help for command                                 [boolean]
  -v, --version  Show @hyas/cli version                                [boolean]

Learn more:
  Use 'hyas <command> --help' for more information about a command.
  Read the manual at https://gethyas.com/hyas-cli
```

## Installation

Install the [Hyas CLI](https://www.npmjs.com/package/@hyas/cli) globally:

```bash
npm install -g @hyas/cli
```

## Usage

```bash
hyas <command> [options]
```

### npx

Or use [npx](https://nodejs.dev/learn/the-npx-nodejs-package-runner):

```bash
npx @hyas/cli <command> [options]
```

## Commands

| Command | Description |
| - | - |
| create | Create a new Hyas project |
| start | Start local development server
| build | Build production website
| add | Add content file
| clean | Delete temporary directories
| lint | Check for errors
| check | Check local environment

## Help

Use `hyas <command> --help` for more information about a command.

## Updates

You’ll get notified when an update is available.

## Documentation

- [Hyas CLI](https://gethyas.com/hyas-cli)
