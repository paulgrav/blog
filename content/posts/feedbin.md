---
title: "An iOS Shortcut for Feedbin’s read-it-later service"
date: 2020-11-18T18:02:28Z
draft: true
tags:
  - projects
keywords:
  - rss
  - shortcuts
  - iOS
  - feedbin
---

Over the years I’ve used multiple read-it-later services on my iOS devices. From Instapaper, Pocket, and Apple’s own Reading List and for various reasons none of them has stuck with me. There has always been something that I’ve not quite liked about those services. 

Fast forward to 2020 and I think I finally found the ideal solution. It avoids running additional apps, and it’s free (sort of).

[NetNewsWire](https://ranchero.com/netnewswire/) is an excellent [RSS](https://en.wikipedia.org/wiki/RSS) feed reader that’s brought me back to feed reading for the first time since [Google Reader was shuttered.](https://www.google.com/reader/about/) It has a simple and clutter-free UI that allows me to complete tasks with minimal fuss.

[FeedBin](https://feedbin.com) is subscription-based RSS feed aggregation service that I use with NetNewsWire. NetNewsWire and Feedbin go great together.

Back in August 2019 FeedBin launched its own [read-it-later capability](https://feedbin.com/blog/2019/08/20/save-webpages-to-read-later/) but I never used it because I found it difficult to send articles to it. Bookmarklets are what Feedbin recommends but whilst they work fine on desktop browsers, they are clunky or impossible to use on mobile devices.

Better than a Bookmarklet is an iOS Shortcut that calls the Feedbin API to save articles to the read-it-later service. Turns out it’s easy to create. The great thing about Shortcuts is that you can call them from almost any context on iOS, and not restrict to a web browser like a Bookmarklet would be.

The Shortcut will ask for your Feedbin credentials (I wish Feedbin provided API tokens), and they’re used to authenticate an API call to the following endpoint: https://api.feedbin.com/v2/pages.json. Once installed you tap on Feedbin Pages in the Share Sheet.

[Get the Shortcut here](https://www.icloud.com/shortcuts/b53fda3abb55403f932dc6859100e535)

![](/images/feedbin-sharesheet.jpg)