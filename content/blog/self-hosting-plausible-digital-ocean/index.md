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

- [Plausible](https://plausible.io/)
- [DigitalOcean](https://www.digitalocean.com/)
- [Docker](https://www.docker.com/)
- [Caddy](https://caddyserver.com/)

{{< alert icon="💡" text="Get started on DigitalOcean with a $100, 60-day credit — for new users. <a href=\"https://m.do.co/c/c37c98036922\">Referral Invite →</a>" >}}

## Provisioning

### Create DigitalOcean droplet

- Ubuntu 20.04 (LTS) x64
- 1 CPU
- 1 GB RAM
- 25 GB NVMe SSDs
- 1,000 GB transfer

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

### Configure Caddy

```bash
nano reverse-proxy/docker-compose.caddy-gen.yml
```

### Configure MaxMind

```bash
nano geoip/geoip.conf
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

### Plausible

- [Plausible Analytics setup examples](https://github.com/plausible/hosting)
- [Getting started](https://plausible.io/docs/self-hosting)
- [Configuration options](https://plausible.io/docs/self-hosting-configuration)

### Services

- [Postmark](https://postmarkapp.com/)
- [MaxMind](https://www.maxmind.com/)
- [Cloud Firewalls](https://www.digitalocean.com/docs/networking/firewalls/)
