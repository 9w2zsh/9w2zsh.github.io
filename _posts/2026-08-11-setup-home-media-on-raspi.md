---
title: "Setup home media server with Raspberry Pi - **WIP**"
date: 2026-08-11
categories: [raspi]
tags: [media]
---
## Prepare raspi  
* flash sd card  
  user Raspberry pi imager 1.9.4 or lower  
  don't use root as user  
---
## Configure Raspi  
* check date  
  ```
  timedatectl  
  ```
  if the time and date is wrong, fix it  
  ```
  sudo timedatectl set-timezone Asia/Kuala_Lumpur  
  ```
* check if boot from SD card  
  ```
  findmnt -n -o SOURCE,FSTYPE,SIZE /  
  ```
  respond should be  
  /dev/mmcblk0p2 ext4 61G  
* check for amount of space  
  ```
  df -h /  
  ```
  repond should be:  
  Filesystem      Size  Used Avail Use% Mounted on  
  /dev/mmcblk0p2   61G  3.4G   56G   6% /
* check all USB device connected to RasPi
  ```
  lsblk -o NAME,SIZE,FSTYPE,MOUNTPOINT,MODEL,SERIAL
  ```
  respond will be:  
  NAME         SIZE FSTYPE MOUNTPOINT     MODEL      SERIAL  
  loop0        905M swap  
  sda          999G                       Flash-Disk WA201016R1.000  
  └─sda1       999G vfat  
  mmcblk0     62.5G                                  0x12800004  
  ├─mmcblk0p1  512M vfat   /boot/firmware  
  └─mmcblk0p2   62G ext4   /  
  zram0        905M swap   [SWAP]
* unmount the USB drive, detach partition from file system tree
  ```
  sudo umount /dev/sda1 2>/dev/null
  ```
* wipe all, delete file system and digital signiture
  ```
  sudo wipefs -a /dev/sda
  ```
  output:
  /dev/sda: 2 bytes were erased at offset 0x000001fe (dos): 55 aa  
  /dev/sda: calling ioctl to re-read partition table: Success
* write new partition table to the drive
  ```
  sudo parted /dev/sda --script mklabel gpt
  ```
* create partition in the drive
  ```
  sudo parted /dev/sda --script mkpart primary ext4 0% 100%
  ```
  got this error:
  Error: The backup GPT table is corrupt, but the primary appears OK, so that will be used.
* setup the file system ext4
  ```
  sudo mkfs.ext4 -L bulk /dev/sda1
  ```
  output:
  mke2fs 1.47.2 (1-Jan-2025)  
  /dev/sda1 contains a vfat file system  
  Proceed anyway? (y,N) y  
  Creating filesystem with 261887744 4k blocks and 65478656 inodes  
  Filesystem UUID: dda67917-7919-45fd-a876-c12b0e5b8822  
  Superblock backups stored on blocks:  
        32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208,  
        4096000, 7962624, 11239424, 20480000, 23887872, 71663616, 78675968,  
        102400000, 214990848  
  
  Allocating group tables: done  
  Writing inode tables: done  
  Creating journal (262144 blocks):
  done  
  Writing superblocks and filesystem accounting information: done  
* check the UUID
  ```
  sudo blkid /dev/sda1
  ```
  output:  
  /dev/sda1: LABEL="bulk" UUID="dda67917-7919-45fd-a876-c12b0e5b8822" BLOCK_SIZE="4096" TYPE="ext4" PARTLABEL="primary" PARTUUID="0dd62df4-e01d-48a0-a4eb-ac2d9b828362"
  copy: dda67917-7919-45fd-a876-c12b0e5b8822
* create empty directory
  ```
  sudo mkdir -p /mnt/storage
  ```
* update filesystem table (fstab)
  ```
  sudo nano /etc/fstab
  ```
  add the UUID from above, make sure no ""
  proc            /proc           proc    defaults          0       0  
  PARTUUID=d3b37205-01  /boot/firmware  vfat    defaults          0       2  
  PARTUUID=d3b37205-02  /               ext4    defaults,noatime  0       1  
  UUID:dda67917-7919-45fd-a876-c12b0e5b8822 /mnt/storage ext4 defaults,noatime,nofail 0 2  
* test by mount everything available
  ```
  sudo mount -a
  ```
  mount: /mnt/storage: fsconfig() failed: UUID:dda67917-7919-45fd-a876-c12b0e5b8822: Can't lookup blockdev.  
       dmesg(1) may have more information after failed mount system call.  
  mount: (hint) your fstab has been modified, but systemd still uses  
       the old version; use 'systemctl daemon-reload' to reload.  
  zainalsh@zshPi4:~ $ systemctl daemon-reload  
  ==== AUTHENTICATING FOR org.freedesktop.systemd1.reload-daemon ====  
  Authentication is required to reload the systemd state.  
  Authenticating as: Raspberry Pi OS (zainalsh)  
  Password:
  ==== AUTHENTICATION COMPLETE ====
* check if the disk has been mounted and available
  ```
  df -h /mnt/storage
  ```
  only this shown: 
  Filesystem      Size  Used Avail Use% Mounted on  
  /dev/mmcblk0p2   61G  3.4G   56G   6% /
* checking dmesg
  ```
  [ 1143.135800] usb 1-1.1: new high-speed USB device number 3 using xhci_hcd
  [ 1143.229707] usb 1-1.1: New USB device found, idVendor=6439, idProduct=3020, bcdDevice= 2.00
  [ 1143.229730] usb 1-1.1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
  [ 1143.229744] usb 1-1.1: Product: USB Device
  [ 1143.229755] usb 1-1.1: Manufacturer: WeiaoChip
  [ 1143.229765] usb 1-1.1: SerialNumber: WA201016R1.000
  [ 1143.233233] usb-storage 1-1.1:1.0: USB Mass Storage device detected
  [ 1143.234041] scsi host0: usb-storage 1-1.1:1.0
  [ 1144.251827] scsi 0:0:0:0: Direct-Access     Generic  Flash-Disk       1.00 PQ: 0 ANSI: 6
  [ 1144.256194] sd 0:0:0:0: [sda] 2095106048 512-byte logical blocks: (1.07 TB/999 GiB)
  [ 1144.261032] sd 0:0:0:0: [sda] Write Protect is off
  [ 1144.261060] sd 0:0:0:0: [sda] Mode Sense: 03 00 00 00
  [ 1144.264664] sd 0:0:0:0: [sda] No Caching mode page found
  [ 1144.264682] sd 0:0:0:0: [sda] Assuming drive cache: write through
  [ 1144.280344] sd 0:0:0:0: Attached scsi generic sg0 type 0
  [ 1144.317316]  sda: sda1
  [ 1144.317794] sd 0:0:0:0: [sda] Attached SCSI removable disk
  [ 1533.593428]  sda:
  [ 1640.236475] Alternate GPT is invalid, using primary GPT.
  [ 1640.236501]  sda: sda1
  [ 2408.170425] systemd-fstab-generator[1269]: Checking was requested for "UUID:dda67917-7919-45fd-a876-c12b0e5b8822", but it is not a device.
  [ 2684.363979] systemd-fstab-generator[1399]: Checking was requested for "UUID:dda67917-7919-45fd-a876-c12b0e5b8822", but it is not a device.
  [ 3059.534793] Alternate GPT is invalid, using primary GPT.
  [ 3059.534814]  sda:
  [ 3070.567450] Alternate GPT is invalid, using primary GPT.
  [ 3070.567488]  sda: sda1
  [ 3312.976826] systemd-fstab-generator[1565]: x-systemd.device-timeout ignored for UUID:c3ad1375-408b-467d-a7c4-f30b18469fff
  ```
* checking with Gemini:
  ```
  Looking closely at your dmesg log, there is also a major red flag: WeiaoChip controller reporting ~1 TB (1.07 TB) of storage. Cheap USB drives with generic controllers reporting 1TB are very frequently fake, hacked-capacity drives that corrupt partition tables and disconnect under write/read loads.  

  5.Test for Fake Drive Capacity:Determine if the flash drive is counterfeit.If the partition drops repeatedly after writing data, test the drive's true capacity using f2fs-tools or f3:Bashsudo apt-get install f3  
  f3write /mnt/usb
  f3read /mnt/usb

  Conclusion:  
  BAD USB DRIVE
  ```
  
