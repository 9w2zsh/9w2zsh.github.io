---
title: "Echolink node on Allstar node"
date: 2026-08-08
categories: [voip]
tags: [echolink]
---

## Edit echolink.conf  
* cd /etc/asterisk  
* copy echolink configuration file  
  ```
  cp echolink.xxx echolink.conf  
  ```
* edit echolink.conf, enter all details  
  ```
  el0]  
  confmode=yes  
  call=<your callsign>-L           ; Change this! Make sure has -L  
  pwd=<echolink password>          ; Change this!  
  name=<your good name>            ; Change this to your real name!  
  qth=<your QTH>                   ; Change this to your actual QTH!  
  email=<your email address        ; Change this!  
  maxstns=20  
  rtcptimeout=10  
  node=<your echolink node number> ; Echolink node number - Change this!
  recfile=/tmp/recorded.gsm  
  astnode=<allstar node number>    ; Change this to your active Allstar node number!
  ```
* edit modules.conf, make sure this line is there and not commented  
  ```
  load=chan_echolink.so  
  ```
* restart asterisk  

---
## Test  
* Go to your mobile phone and see if the echolink node is available, test connect to the Echolink node  
* Go to [Echolink.org links](https://www.echolink.org/links.jsp) and see if your Echolink node is listed there as ON  
