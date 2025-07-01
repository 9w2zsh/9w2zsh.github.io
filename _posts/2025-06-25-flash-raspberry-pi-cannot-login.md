---
title: "Flash Raspberry Pi cannot login"
date: 2025-06-25
categories: [amateur_radio, raspberry_pi]
tags: [login, pi_0]
---

## Flash a new sd card

I wanted to install ASL3 on a new SD card so I flashed it with Raspberry Pi-0. I used root as the user and the password that I know. Surprisingly, when I plug in to Pi-0 and ssh to it, I cannot login as root even though i was using the right password.

The [forum](https://forums.raspberrypi.com/viewtopic.php?t=333248) on Raspberry Pi website has some suggestions

## True enough

As one of the suggestion given in the forum was, Rapberry Pi doesn't allow root access. So, I flash the sd card again but this time I put a user instead of root. It works this time!

## Install ASL3

Run
```
sudo apt-get update
```
got error
```
cache corrupted
unable to parse package file
```
to fix it run
```
sudo rm -rf /var/lib/apt/lists/*
```
that will delete all the files under that subdir
then run 
```
apt-get update
```

Run
```
apt-get upgrade
```
got bunch of errors, can't find source to download version xxx.xxx.xx

## Next step

Use [this step](https://allstarlink.github.io/install/pi-appliance/pi-detailed/#step-by-step-pi-appliance-setup) from https://allstarlink.github.io/install/pi-appliance/pi-detailed/#step-by-step-pi-appliance-setup instead

[Download](https://repo.allstarlink.org/images/pi/) image from https://repo.allstarlink.org/images/pi/ and burn to sd card using Raspberry Pi imager

Use this [Youtube video](https://www.youtube.com/watch?v=NPgTRa5bpnY)