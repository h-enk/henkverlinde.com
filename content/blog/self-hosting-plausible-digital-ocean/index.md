---
title: "Self-Hosting Plausible Analytics on DigitalOcean"
description: "Super simple, robust, and secure setup for self-hosting Plausible Analytics on DigitalOcean."
excerpt: "Super simple, robust, and secure setup for self-hosting Plausible Analytics on DigitalOcean."
date: 2021-03-09T08:33:25+01:00
lastmod: 2021-03-09T08:33:25+01:00
draft: false
weight: 30
images: ["self-hosting-plausible-digitalocean.png"]
categories: ["Tools", "Guides"]
tags: ["Plausible", "DigitalOcean", "Docker", "Caddy"]
---

Main components:

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

```bash
ADMIN_USER_NAME=<your-admin-user-name>
ADMIN_USER_EMAIL=<your-admin-user-email>
ADMIN_USER_PWD=<your-admin-user-password>
BASE_URL=<your-base-url>
SECRET_KEY_BASE=<your-secret-key-base>
DISABLE_REGISTRATION=true
MAILER_EMAIL=<your-mailer-email>
SMTP_HOST_ADDR=<your-smtp-host-address>
SMTP_USER_NAME=<your-smtp-user-name>
SMTP_USER_PWD=<your-smtp-user-password>
MAILER_ADAPTER=Bamboo.PostmarkAdapter
POSTMARK_API_KEY=<your-postmark-api-key>
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
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

```bash
GEOIPUPDATE_ACCOUNT_ID=<your-account-id>
GEOIPUPDATE_LICENSE_KEY=<your-license-key>
```

### Add DNS record

- Record type: A
- Name: `[subdomain]`
- Value: IPv4 address of DigitalOcean droplet

### Add current user to docker group

<!-- https://github.com/docker/compose/issues/4181#issuecomment-777572764 -->

```bash
sudo usermod -aG docker $USER
```

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
