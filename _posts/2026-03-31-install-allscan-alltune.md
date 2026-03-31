---
title: "Install AllScan and AllTune on Allstar node"
date: 2026-03-31
categories: [allstar,install]
tags: [allscan]
---

## Install Allscan  

```
cd ~
rm AllScanInstallUpdate.php
wget 'https://raw.githubusercontent.com/davidgsd/AllScan/main/AllScanInstallUpdate.php'
chmod 755 AllScanInstallUpdate.php
sudo ./AllScanInstallUpdate.php
```

[link](https://github.com/davidgsd/AllScan#readmethebiblegarth)  
[youtube](https://www.youtube.com/watch?v=wRQ43qFdcko)

## Install Alltune
```
1. Edit config.ini  
2. Create folder alltune under /srv/http/alltune on Allstar node  
3. Copy all files under folder alltune to /srv/http/alltune  
4. Remove index.html under /srv/http  
5. Create file /srv/http/index.php
<?php
header("Location: alltune/index.php");
```