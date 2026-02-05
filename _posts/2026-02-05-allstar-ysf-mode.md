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

## To change to different reflector (add 8 in front)

`/opt/MMDVM_Bridge\dvswitch.sh tune 818807` - Malaysia TG50210  
`/opt/MMDVM_Bridge/dvswitch.sh tune 832592` - America-link

* add 8 in front of YSF number in the command line to change YSF
* link to [Malaysia YSF](https://xlx.lucifernet.com/dashboard/index.php?show=ysfmalaysia)
* refer to [YSF Reflector list](https://www.pistar.uk/ysf_reflectors.php) at Pi-Star link

## Reference

1. [Command for tuning YSF with Allstar](https://dvswitch.groups.io/g/main/topic/command_for_tuning_ysf_with/80024935)
2. [Is it possible to link YSF to ALLSTARLINK?](https://dvswitch.groups.io/g/allstarlink/topic/is_it_possible_to_link_ysf_to/87126486)  
[Sample config file](/assets/img/YSF_to_ASL_sample_configuration.txt)