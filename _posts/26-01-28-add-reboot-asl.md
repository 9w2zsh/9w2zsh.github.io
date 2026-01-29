---
title: "Adding reboot at 4:00am"
date: 2025-09-05
categories: [asl,crontab]
tags: [reboot]
---

## Here is how to reboot ASL node at 4:00am everyday

1. login to ASL node
2. at menu take option 9 to get shell prompt
3. at the prompt type 'crontab -e`
4. add this line
`0 4 * * * /sbin/reboot
5. reboot ASL