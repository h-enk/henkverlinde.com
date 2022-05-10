---
title: 'SRI Generator'
description: 'Progressive Web Application (PWA) generating a <script> or <link> element with an integrity attribute.'
excerpt: 'Progressive Web Application (PWA) generating a <script> or <link> element with an integrity attribute.'
date: 2021-03-25T13:56:26+01:00
lastmod: 2021-03-25T13:56:26+01:00
publishDate: '2021-03-25'
lastUpdated: '2021-05-25'
draft: false
weight: 20
images: ['subresource-integrity-generator.webp']
caption: 'Photograph: Hannah Le Leu/Ocean Photography Awards'
categories: ['Tools']
series: []
tags: ['SRI', 'React', 'PWA']
authors: ['Henk Verlinde']
picture: ['/sri-generator.png']
---

![Subresource Integrity Generator](/sri-generator.png)

[Progressive Web App (PWA)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) generating a `<script>` or `<link>` element with an `integrity` attribute.

<a class=emph href="https://sri-gen.henkverlinde.com/">
Use SRI Generator!
</a>

## App

- [sri-gen.henkverlinde.com](https://sri-gen.henkverlinde.com/)

## Usage

1. Enter URL of JS or CSS file — or drop a local file
2. Select SHA strength
3. Click Generate
4. Click Copy
5. Paste `<script>` or `<link>` element

## Documentation

- [MDN](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity)
- [Can I use](https://caniuse.com/subresource-integrity)

## Acknowledgements

Based on:

- [Subresource Integrity (SRI) Generator](https://github.com/laysent/sri-hash-generator) by LaySent

Major changes:

- Use one SHA option only — following current practice
- Default to SHA-512 — following [current browser support](https://w3c.github.io/webappsec-subresource-integrity/#hash-functions)
- Add Reset button
- Replace Copied alert with in page message
- Replace CSS with [Water.css](https://watercss.kognise.dev/)
