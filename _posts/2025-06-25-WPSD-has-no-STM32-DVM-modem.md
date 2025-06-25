---
title: "WPSD has no STM32 DVM modem"
date: 2025-06-25
categories: [amateur_radio, mmdvm]
tags: [wpsd, modem, pi-0]
---

## Configure WPSD on Pi-0

When configuring WPSD to select modem type, cannot find "STM32-DVM / MMDVM_HS" anymore. Searching on the internet, found the documentation on W0CHP website on this [there is no such modem](https://w0chp.radio/articles/there-is-no-such-modem/)

## Checking my config

Run

```
sudo wpsd-detectmodem
```

gave me this

```
Detected MMDVM_HS Port: /dev/ttyAMA0 (GPIO) Baud: 115200 Protocol: V1
Modem Data: MMDVM_HS_Hat-v1.5.2 20201108 14.7456MHz ADF7021 FW by CA6JAU GitID #89d***********************************
```

and I should select whatever shown in **Modem Data** section

However, in the Radio/Modem Type selection, there is no option for that type of Modem.
