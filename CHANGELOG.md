# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Changed
- Update dependencies `package.json`

## [0.0.4] - 2019-10-07
### Changed
- Update dependencies `package.json`

## [0.0.3] - 2019-09-11
### Changed
- Replaced config file w/ `config/` directory + files
- Updated links for `absLangURL`

## [0.0.2] - 2019-09-11
### Added
- Add `| absLangURL` to `og:image` in `seo.html`
- Add `{{ .Site.Data.seo.ogLocale }}` to `seo.html`
- Add `<meta name="theme-color" content="{{ $.Site.Params.themeColor }}">` to `favicon.html`
- Add layout class to body: `<body {{ with .Layout }}class="{{ . }}"{{ end }}>`
- Add partial `page-header.html`

### Changed
- Update dir `Cache-Control` in `_headers`
- Change favicon to "classical building"
- Update `What's included` in `README.md` for SEO tags
- Update pages `index.html`, `404.html`, and `about/index.md`

## [0.0.1] - 2019-09-10
### Added
- Initial version

[Unreleased]: https://github.com/ventizo/notre-dame/compare/v0.0.4...HEAD
[0.0.4]: https://github.com/ventizo/notre-dame/releases/tag/v0.0.4
[0.0.3]: https://github.com/ventizo/notre-dame/releases/tag/v0.0.3
[0.0.2]: https://github.com/ventizo/notre-dame/releases/tag/v0.0.2
[0.0.1]: https://github.com/ventizo/notre-dame/releases/tag/v0.0.1
