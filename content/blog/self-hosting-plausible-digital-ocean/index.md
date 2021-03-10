---
title: "Self-Hosting Plausible Analytics on DigitalOcean"
description: "Super simple, robust, and secure setup for self-hosting Plausible Analytics on DigitalOcean."
excerpt: "Super simple, robust, and secure setup for self-hosting Plausible Analytics on DigitalOcean."
date: 2021-03-09T08:33:25+01:00
lastmod: 2021-03-09T08:33:25+01:00
draft: false
weight: 5
images: ["self-hosting-plausible-digitalocean.png"]
categories: ["Tools", "Guides"]
tags: ["Plausible", "DigitalOcean", "Docker", "Caddy"]
---

Super simple, robust, and secure setup for self-hosting Plausible Analytics on DigitalOcean.

{{< img src="self-hosting-plausible-digitalocean.png" alt="Self-Hosting Plausible Analytics on DigitalOcean" caption="Self-Hosting Plausible Analytics on DigitalOcean" class="wide" >}}

Elements:

- [Plausible](https://plausible.io/)
- [DigitalOcean](https://www.digitalocean.com/)
- [Docker](https://www.docker.com/)
- [Caddy](https://caddyserver.com/)

Services:

- [Postmark](https://postmarkapp.com/)
- [MaxMind](https://www.maxmind.com/)

## Provisioning

### Create DigitalOcean droplet

- Ubuntu 20.04 (LTS) x64
- 1 CPU
- 1 GB RAM
- 25 GB NVMe SSDs
- 1,000 GB transfer

See also:  [Recommended Initial Droplet Configuration](https://www.digitalocean.com/docs/droplets/tutorials/recommended-setup/)

### Upgrade installed packages

```bash
sudo apt update && sudo apt upgrade
```

### Install Docker and Docker Compose

```bash
sudo apt install docker.io docker-compose
```

### Clone plausible/hosting repo

```bash
git clone https://github.com/plausible/hosting && cd hosting
```

## Configuration

### Generate secret key

```bash
openssl rand -base64 64
```

### Configure Plausible

```bash
nano plausible-conf.env
```

```env
ADMIN_USER_NAME=replace-me
ADMIN_USER_EMAIL=replace-me
ADMIN_USER_PWD=replace-me
BASE_URL=replace-me
SECRET_KEY_BASE=replace-me
DISABLE_REGISTRATION=true
MAILER_EMAIL=replace-me
SMTP_HOST_ADDR=replace-me
SMTP_USER_NAME=replace-me
SMTP_USER_PWD=replace-me
MAILER_ADAPTER=Bamboo.PostmarkAdapter
POSTMARK_API_KEY=replace-me
GOOGLE_CLIENT_ID=replace-me
GOOGLE_CLIENT_SECRET=replace-me
```

### Configure Caddy

```bash
nano reverse-proxy/docker-compose.caddy-gen.yml
```

```yml
version: "3.3"
services:
  caddy-gen:
    container_name: caddy-gen
    image: "wemakeservices/caddy-gen:latest"
    restart: always
    volumes:
      - /var/run/docker.sock:/tmp/docker.sock:ro
      - caddy-certificates:/data/caddy
    ports:
      - "80:80"
      - "443:443"
    depends_on:
      - plausible

  plausible:
    labels:
      virtual.host: "example.com" # change to your domain name
      virtual.port: "8000"
      virtual.tls-email: "admin@example.com" # change to your email

volumes:
    caddy-certificates:
        driver: local
```

### Configure MaxMind

```bash
nano geoip/geoip.conf
```

```conf
GEOIPUPDATE_ACCOUNT_ID=<your-account-id>
GEOIPUPDATE_LICENSE_KEY=<your-license-key>
```

### Add DNS record

- Record type: A
- Name: `[subdomain]`
- Value: IPv4 address of DigitalOcean droplet

## Running

### Start server

```bash
docker-compose -f docker-compose.yml -f geoip/docker-compose.geoip.yml -f reverse-proxy/docker-compose.caddy-gen.yml up -d
```

### View logs

```bash
docker logs -f hosting_plausible_1
```

### Stop server

```bash
docker-compose down
```

## Resources

- [Getting started](https://plausible.io/docs/self-hosting)
- [Configuration options](https://plausible.io/docs/self-hosting-configuration)
- [Plausible Analytics setup examples](https://github.com/plausible/hosting)
