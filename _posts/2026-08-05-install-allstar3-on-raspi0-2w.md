---
title: "Install AllStarLink 3 on Raspberry Pi-0 2 w"
date: 2026-08-05
categories: [radio,install]
tags: [allstar]
---
## Pre-req
* Pi-0 2 w (64-bit)
* Download image from [ASL3 image](https://repo.allstarlink.org/images/pi/index.php?b=)

---
## Tune radio to tx/rx
sudo simpleusb-tune-menu  
2: adjust accordingly with node 55553  
B: enabled  
G: enabled  
H: ground  
I: usbinvert  
J: no  

remember W to write the config  

---
## Change announce callsign from CW to voice - \*WIP\*  

---
## Announce IP address  
* [Blog KB4MDD](https://kb4mdd.blogspot.com/2023/01/allstarlink-announce-ip-address.html)  
* File: /usr/sbin/sayip.sh  
* Remember to change node to your node  
* Change this line  
```
CMD=$CMD"/usr/share/asterisk/sounds/en/letters/dot.ulaw "  
CMD=$CMD"/usr/share/asterisk/sounds/en/digits/$x.ulaw "  
```

## Update: Or use this install from KD4FMU  
[Speak-IP-Address-for-ASL3](https://github.com/KD5FMU/Speak-IP-Address-for-ASL3)  
* Run this install:  
  ```
  sudo wget https://raw.githubusercontent.com/KD5FMU/Speak-IP-Address-for-ASL3/refs/heads/main/install-speakip-v1.0.10.sh  
  ```
* meke it executable  
  ```
  sudo chmod +x install-speakip-v1.0.10.sh  
  ```
* execute the script  
  ```
  sudo ./install-speakip-v1.0.10.sh  
  ```
* how to use:  
  \*890 = Shutdown AllStar Node  
  \*891 = Reboot AllStar Node  
  \*892 = Speak Local IP address  
  \*893 = Speak Public IP address  

---
## Ref  
```
sudo scp -P 222 root@192.168.1.2:/var/lib/asterisk/sounds/digits/*.* .  
```
