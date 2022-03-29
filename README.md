# henkverlinde.com

[![Hyas CI](https://github.com/h-enk/henkverlinde.com/workflows/Hyas%20CI/badge.svg)](https://github.com/h-enk/henkverlinde.com/actions?query=workflow%3A%22Hyas+CI%22)
[![Netlify Status](https://api.netlify.com/api/v1/badges/410615a7-3f4b-450b-abc6-aa45d0307921/deploy-status)](https://app.netlify.com/sites/henkverlinde/deploys)


## Local development on Windows

On Windows, the `.npmrc` file can't access the `.env` file by default.

### Requirements

```bash
npm install -g dotenv-cli
```

### Check for outdated packages

```bash
dotenv npm outdated
```

### Install packages

```bash
dotenv npm install
```

### Recources

- [entropitor/dotenv-cli](https://github.com/entropitor/dotenv-cli)
