---
title: "Three Bugs in the Go Mysql Driver"
description: ""
excerpt: ""
date: 2020-06-20T12:12:43+02:00
lastmod: 2020-06-29T08:13:21+02:00
draft: true
weight: 30
images: ["three-bugs-in-the-go-mysql-driver.jpg"]
categories: ["Engineering", "Open Source"]
---

Although GitHub.com is still a Rails monolith, over the past few years we've begun the process of extracting critical functionality from our main application, by rewriting some of the code in Go—mostly addressing the pieces that need to run faster and more reliably than what we can accomplish with Ruby. Last year, we deployed a new authorizations service in production, authzd, which powers the "fine-grained authorizations" feature that we announced in GitHub Satellite 2019.

{{< img src="three-bugs-in-the-go-mysql-driver.jpg" alt="Introducing Github Super Linter: one linter to rule them all" caption="Build guidelines for code layout and format" class="wide" >}}
