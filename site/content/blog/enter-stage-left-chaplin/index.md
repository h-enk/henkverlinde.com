---
title: Enter Stage Left, Chaplin
description: The 20th member of my family of free WordPress themes, Chaplin, was finally released today. This is a fun one.
date: 2019-07-02T10:50:16+01:00
draft: false
---

{{< img src="chaplin-collage-compressed.jpg" alt="Notre Dame - photo by Pedro Lastra" class="wide" >}}

Most of my themes are pretty static. What you see in the screenshot is what you’re going to see when you activate the theme on your site, and if you want to modify that look in any way, you’re going to have to create a child theme or add custom CSS. Both options involve more messing about with template files and code than most people are comfortable with. That’s a drawback to most of my themes – but also a feature, I think. In a theme landscape where most themes require five plugins and an hour with the documentation (if one exists) to replicate the screenshot on an actual website, it’s convenient with themes that look exactly like the screenshot the minute you activate them.

At the command prompt, type `nano`.

```
"require": {
  "php": ">=5.6",
  "johnpbloch/wordpress": "4.9.4",
  "h-enk/json-sitemap": "^1.0"
}
```

```json
"require": {
  "php": ">=5.6",
  "johnpbloch/wordpress": "4.9.4",
  "h-enk/json-sitemap": "^1.0"
}
```

```bash
# Create/start a development environment
$ vagrant up

# Provision a remote server
$ ansible-playbook server.yml -e env=production

# Deploy WordPress site
$ ./bin/deploy.sh production example.com
```

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

```go-html-template
<section id="main">
  <div>
    <h1 id="title">{{ .Title }}</h1>
    {{ range .Pages }}
      {{ .Render "summary"}}
    {{ end }}
  </div>
</section>
```

### Baskerville
- Fixed for ``<a href="#">`get_author_meta( 'description' )`</a>`` now including a paragraph element
- Updated contributors template to hide email for users that have `showemail != true`
- Removed duplicate `get_header()` in `template-fullwidth.php`
- Made all functions in `functions.php` pluggable :rocket:

## What’s included?
The non-Gutenberg adjustments include:

- Gutenberg editor styles, with layout, typography and colors matching the theme
- Custom font sizes and color palette in the editor
- Styling for the blocks introduced in Gutenberg
- Additional style updates to make the new alignment options work for all elements

### Plus and also
For a while, though, I’ve been thinking about how I could build a theme for customizable than the ones I’ve been making so far. With the introduction of the Block Editor in WordPress 5.0, any page on a WordPress site can accommodate pretty much any layout, making WordPress itself a lot more flexible than it was just a year ago.

<blockquote class="blockquote">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>

I realized that if I built a theme with the capabilities of the Block Editor in mind, I would want it to be equally capable to handle different styles. Not just a custom accent color, but the ability to easily change every color and font in the theme.

> Dorothy followed her through many of the beautiful rooms in her castle.

If the Block Editor would enable users to create any layout on their site, and the theme would allow them to style the layouts however they want, then that could end up being pretty useful.

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

<form>
  <div class="input-group">
    <input type="email" placeholder="Email address" aria-label="Email address" aria-describedby="button-addon2" required>
    <div class="input-group-append">
      <button type="submit" id="button-addon2">Subscribe</button>
    </div>
  </div>
</form>

## Lists

1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item

- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item


<form>
  <div class="form-group">
    <label for="exampleInputEmail1" class="sr-onlyss">Email address</label>
    <input type="email" class="form-control22" id="exampleInputEmail1" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
  </div>
  <button type="submit" class="btn22">Submit</button>
</form>
