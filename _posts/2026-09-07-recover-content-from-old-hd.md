---
title: "Recover content from old hard drive"
cateries: [recover,data]
tags: [linux,windows]
---
## Identify the drive
* connect the hd to raspberry pi
* run
  ```linux
  lsblk -o NAME,SIZE,FSTYPE,MOUNTPOINT,MODEL
  ```
  then
  ```linux
  sudo fdisk -l
  ```
* check if the kernel detect any error
  ```
  dmesg | tail -100
  ```
  or
  ```
  dmesg | grep -iE "sd|usb|error|fail"
  ```
  check filesystem
  ```
  sudo blkid /dev/sda1
  ```
  if Linux filesystem
  ```
  sudo fsck -n /dev/sda1
  ```
  if NTFS:
  ```
  sudo ntfsfix -n /dev/sda1
  ```
  **this is a non-destructive check**

---
## mount the drive
* create mount point
  ```
  sudo mkdir -p /mnt/wd
  ```
* mount it  
  ```
  sudo mount /dev/sda1 /mnt/wd
  ```
* verify
  ```
  df -h  
  ```
  or
  ```
  ls -lah /mnt/wd
  ```
### if mount fails
```
sudo mount /dev/sda1 /mnt/wd 
dmesg | tail -50
``` 

---
## check SMART
* install smartmontools
  ```
  sudo apt install smartmontools
  ```
  try
  ```
  sudo smartctl -d sat -a dev/sda  
  ```
  if fails
  ```
  sudo smartctl -a /dev/sda
  ```

---
## backup files (general location)
* once you can mount the drive, copy the files
  ```
  rsync -avh /mnt/wd/<folders> /<destination>
  ```

---
# backup files to windows drive
* create a folder
  ```
  d:\wd_recovery
  ```
* share the drive  
  right click folder -> Properties -> Sharing -> Advanced Sharing  
  share it as 
  ```
  wd_recovery
  ```
* on raspberry pi
  ```
  sudo apt update
  sudo apt install cifs-utils
  ```
* create mount point
  ```
  sudo mkdir -p /mnt/winbackup
  ```
* mount the windows share
  ```
  sudo mount -t cifs //<ip address>/WD_recovery /mnt/winbackup -o username=<windows users>,uid=$(id -u),gid=$(id -g),vers=3.0
  ```
* verify
  ```
  df -h
  /ls /mnt/winbackup
  ```
* copy files
  ```
  rsync -av --ingore-errors --progress "/mnt/wd/<folders>/" "/mnt/winbackup/"
  ```

---
## backup files to google drive \<wip\>
* install rclone
  ```
  sudo apt update
  sudo apt install rclone
  ```
  verify
  ```
  rclone version
  ```