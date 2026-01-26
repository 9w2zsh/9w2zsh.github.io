---
title: "DVSwitch page on ASL appear ID only"
date: 2026-01-26
categories: [asl]
tags: [dvswitch]
---

## 

We are going to tell curl to ignore the certificate (for now).

1: Lets all get back to the clean version of dvswitch.sh
as root (sudo -s)
cd /opt/MMDVM_Bridge
wget http://dvswitch.org/files/Testing/dvswitch.sh -O dvswitch.sh
chmod +x dvswitch.sh

2: Tell curl to downlod and ignore the cert (for now)
as root (sudo -s)
echo insecure >> ~/.curlrc
/opt/MMDVM_Bridge/dvswitch.sh update
reboot