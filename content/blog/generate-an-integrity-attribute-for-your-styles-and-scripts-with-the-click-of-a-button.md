---
title: "Generate an integrity attribute for your styles and scripts with the click of a button"
description: "Progressive Web Application (PWA) generating a <script> or <link> element with an integrity attribute."
image: "/images/blog/subresource-integrity-generator.webp"
date: "2021-03-25T13:56:26+01:00"
lastmod: "2021-03-25T13:56:26+01:00"
author: "Henk Verlinde"
categories: ["Tools"]
tags: ["SRI", "React", "PWA"]
series: []
---

> Subresource Integrity (SRI) is a security feature that enables browsers to verify that resources they fetch (for example, from a CDN) are delivered without unexpected manipulation. It works by allowing you to provide a cryptographic hash that a fetched resource must match. <cite>[mdn web docs](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity)</cite>

[Progressive Web App (PWA)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) generating a `<script>` or `<link>` element with an `integrity` attribute.

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
