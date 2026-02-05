---
title: "Allstar YSF mode"
date: 2026-02-05
categories: [ham]
tags: [allstar,ysf,dvswitch]
---

## Configure DVSwitch to run YSF mode

- Edit `/opt/MMDVM_Bridge/MMDVM_Bridge.ini`
make sure 
`[System Fusion Network] Enable=1`
- Edit `/opt/Analog_Bridge/Analog_Bridge.ini`
`[AMBE AUDIO] ambeMode=YSF`

## To change to YSF mode

`/opt/MMDVM_Bridge\dvswitch.sh mode YSF`

## To change to YSF18807 (Malaysia TG50210)

`/opt/MMDVM_Bridge\dvswitch.sh tune 818807`

*add 8 in front of YSF number
*[Malaysia YSF](https://xlx.lucifernet.com/dashboard/index.php?show=ysfmalaysia)
*refer to [YSF Reflector list](https://www.pistar.uk/ysf_reflectors.php)