---
title: "Introducing Github Super Linter: one linter to rule them all"
description: "Setting up a new repository with all the right linters for the different types of code can be time consuming and tedious."
excerpt: "Setting up a new repository with all the right linters for the different types of code can be time consuming and tedious. So many tools and configurations to choose from and often more than one linter is needed to cover all the languages used."
date: 2020-06-19T11:19:12+02:00
lastmod: 2020-06-29T08:13:21+02:00
draft: false
weight: 20
images: ["starship_mk1_night_v2_0.jpg", "BFR_Clouds_B_noRCS.jpg", "introducing-github-super-linter-one-linter-to-rule-them-all.jpg"]
categories: ["Engineering", "Open Source"]
---

Setting up a new repository with all the right linters for the different types of code can be time consuming and tedious. So many tools and configurations to choose from and often more than one linter is needed to cover all the languages used.

The [GitHub Super Linter](https://github.com/github/super-linter) was built out of necessity by the GitHub Services DevOps Engineering team to maintain consistency in our documentation and code while making communication and collaboration across the company a more productive experience. Now we are open sourcing that so everyone can use and improve it!

{{< img src="starship_mk1_night_v2_0.jpg" alt="Introducing Github Super Linter: one linter to rule them all" caption="Build guidelines for code layout and format" class="wide" >}}

The [Super Linter](https://github.com/github/super-linter) solves many of these requirements through automation. Some included features:

- Prevent broken code from being uploaded to master branches
- Help establish coding best practices across multiple languages
- Build guidelines for code layout and format
- Automate the process to help streamline code reviews
- With these basic criteria, we should be shipping better, cleaner, and more stable code internally and to our customers and partners

## What is it?
The Super Linter is a _source code repository_ that is packaged into a Docker container and called by GitHub Actions. This allows for any repository on GitHub.com to call the Super Linter and start utilizing its benefits.

The Super Linter will currently support a lot of languages and more coming in the future. For details on languages, check out the [`README.md`](https://github.com/github/super-linter/blob/master/README.md).

```bash
$ git clone git@github.com:h-enk/hyas.git my-hyas-site
```

[See it in action](#)
