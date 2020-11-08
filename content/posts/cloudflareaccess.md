---
title: "Using Cloudflare Access to secure access to service on your home network"
date: 2020-11-08T09:40:11Z
draft: true
tags:
  - security
keywords:
  - cdn
  - cloudflare
  - tls
---

# Using Cloudflare Access to secure access to service on your home network

## The problem

Need access to services on my local network.

Need secure access.

Don’t want to manage the security myself.

Free is good.

Cloudflare + Github IdP + Traefik

```
kind: HelmChart
metadata:
  name: traefik
  namespace: helm
spec:
  chart: traefik
  repo: https://helm.traefik.io/traefik
  targetNamespace: traefik
  valuesContent: |-
    persistence:
      enabled: true
      path: /certs
      size: 128Mi 
      storageClass: nfs-client
```

## Scope

Not going to explain how to run service on your home network.

Not going to explain how to proxy services on your home network.

Assumption that you have a service that is enc



# Describe the flow

User makes a request for a service.

Cloudflare 
