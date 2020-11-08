---
title: "Push notifications from your wired Doorbell"
date: 2020-11-08T09:41:28Z
draft: true
---

# Doorbell Push Notifications on iOS

First, caveats and disclaimers.

You’re going to need to be comfortable with wiring and running software on UNIX-based platforms. N.B. I’d advise you to find a qualified electrician to do the wiring. I don’t want to hear about anyone electrocuting themselves whilst attempting this at home.

My solution is focused on iOS and UNIX. That’s what I know, and that’s what I have. It’s possible that it could be tweaked to work on Android and Windows but I have access to neither of those platforms.

## The problem

There are situations in which I’m home but can’t hear the doorbell chime. In those situations I’d like to receive a push notification when someone rings the doorbell.

I might be training on my bike in the garage. I might be in the backyard. Or I might be out for a run. It would be nice to know whether the doorbell had rang. 

For bonus points, the notifications would include a picture of my front yard.

Video doorbells would achieve this but they’re big and expensive. Extra voltage is required, few interact with HomeKit, and I’m not sure I won’t hate the app that I’d have to use.

No all-in-one solutions to convert rings to notifications.

## Context

4 Raspberry PIs.

Kubernetes on them.

Our doorball is wired. The chime integrates a 240v AC > 8v DC transformer. 

I thought I could fit a Shelly device in the chime box that would detect whether the doorbell had been pushed. Whilst the Shelly could fit in the box, the integrated transformer’s voltage was not compatible with what Shelly required — 12v.

If I could remove the 8v transformer and replace it with a 12v, then everything should work. Unfortunately there was no straight replacement that I could buy. Instead I thought I could dremel the transformer out of a wall-plug transformer I had lying around. Alas, it wouldn’t fit and wiring it looked dangerous. 

## BOM

[BY32 Wired-Wireless converter](https://www.amazon.co.uk/Byron-BY32-Doorbell-Converter-wirefree/dp/B00O3CQT42/ref=sr_1_1?dchild=1&keywords=byron+doorbell+extender&qid=1604401184&sr=8-1). What is it supposed to be for? Where did I install it? How does it work? Where can I buy one? What voltage is required? How do I wired it? What does it look like?

RTL-SDR. What is it? Where can I buy it? Why do we need it?

rtl_433. What is it? How do I install it? How do I configure it?
How do I setup a service?

MQTT. What is it? How do you run it? How do you send events to it?

Node-Red. What is it? How to install? What are its dependencies? What flows do I need.

Pushcut. Camera-ffmpeg. HomeKit. What are those? Which is best for me? How much is Pushcut? What if I don’t have a non-HomeKit camera? Is this limited to iOS? 

MQTTThing.

##

Doorbell ring —-> Chime —-> BY32 —-> 433mhz —-> RTL-SDR —-> rtl_433 —-> mqtt —-> nodered —-> (mqtt/http)
