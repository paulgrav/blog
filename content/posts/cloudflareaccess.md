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

# Using Cloudflare Access to secure access to services on your home network

## The problem

I’ve always wanted to run services on my local network and access them remotely but until now setting up authorization and encryption has been a minefield. Certificates would cost money, and the setup was a pain. Authorization would need to be configured on an per-app basis. Apps may have built-in auth, or they may leave that problem to the user. Thusfar I avoided exposing any services to the public internet.

This article describes how you can setup authorization and encryption for your services running on your home network.

You’re going to need a Cloudflare account. Cloudflare is developer friendly CDN provider but has a lot of other interesting features. It will setup and manage the encryption and authorization.

A Github account is required. We’ll using Github as our Identity Provider. You can use other IdPs but I’m guessing that there’s a good chance you have a Github account if you’re reading this.

Lastly, you’ll need Docker installed. We’re going to use Nginx as our pretend service.

There are a couple of assumptions:

- Port forwarding is configured on your router.
- You know the public IP that your ISP assigns to you. I’m not going to describe how you setup dynamic DNS, there is plethora for blogs that explain that.
- You must have domain name, and are able create and configure domain records. Again, I’m assuming you know how to do this.

## Describe the flow

Cloudflare is going to sit between the user and the services running on your home network. It ensure that users are authenticated with the GitHub 

![Example image](/images/cloudflareflow.png)

User makes a request for a service.

User—->CF Access—->IdP—->Traefik

## Step 1. Setup Cloudflare

Sign-up for Cloudflare.

Create a zone (example.com)

Create a couple of host records (nginx.origin.example.com, nginx.example.com)

## Step 2. Configure SSL

Explain how Cloudflare will provision its own certs for your domain.

Explain the you need to encrypt traffic between CF and your origin.

Explain why you want your origin to validate from where requests originate.

- Configure Authenticated Origin Pull Force your origin web server to validate that a web request comes from Cloudflare.

1. Full Strict
2. Origin Server. Create Certificate
3. Download cert details.
4. Run Docker.

Bonus point

Install Origin Pull

## Step 3. Configure Cloudflare Access

1. Setup One-Time Pin
2. Select Github and follow instructions
3. Configure any other IdPs that you’d like
4. Create an access policy
	5. App name: nginx
	6. Sub domain: nginx
	7. Leave session duration
	8. Policy name: github (can be anything)
	9. Include: emails and enter your Github email address
	10. Save
11. Now visit nginx.example.com


