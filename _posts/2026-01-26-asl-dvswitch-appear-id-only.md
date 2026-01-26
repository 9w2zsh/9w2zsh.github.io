---
title: "DVSwitch page on ASL appear ID only"
date: 2026-01-26
categories: [asl]
tags: [dvswitch]
---

## 

We are going to tell curl to ignore the certificate (for now).

1: Lets all get back to the clean version of dvswitch.sh <br>
as root (sudo -s) <br>
cd /opt/MMDVM_Bridge <br>
wget http://dvswitch.org/files/Testing/dvswitch.sh -O dvswitch.sh <br>
chmod +x dvswitch.sh <br>

2: Tell curl to downlod and ignore the cert (for now) <br>
as root (sudo -s) <br>
echo insecure >> ~/.curlrc <br>
/opt/MMDVM_Bridge/dvswitch.sh update <br>
reboot <br>