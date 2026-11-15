# Clone Cardputer Zero sd card

To clone your entire Raspberry Pi SD card directly to a second SD card at /dev/sdb, use the sudo dd if=/dev/mmcblk0 of=/dev/sdb bs=4M status=progress command. Make sure the target card at /dev/sdb is equal to or larger than your source card so the full disk image fits properly.

## Step-by-Step Cloning Instructions

1. Verify Your Device Paths
Run `lsblk` in the terminal to confirm that your main OS card is `/dev/mmcblk0` and your USB card reader is `/dev/sdb`. Double-check the drive sizes in the output to ensure you do not overwrite the wrong drive.
2. Unmount Target Partitions
If Raspberry Pi OS automatically mounted any partitions on the destination SD card, unmount them first so dd can write cleanly to the raw device.
```bash
sudo umount /dev/sdb*
```
3. Run the dd Clone Command
Execute the block-level copy using 4M block sizes for faster transfer speeds and status=progress to monitor the live transfer. Omit partition numbers (like p1 or 1) so the entire bootable partition table is copied.
```bash
sudo dd if=/dev/mmcblk0 of=/dev/sdb bs=4M status=progress conv=fsync
```
4. Flush the Write Cache
Run sync after the command finishes to force all cached data to finish writing to the physical SD card before you unplug it.
```bash
sync
```

```bash
sudo wipefs --all --force /dev/sdb*
sudo parted -s /dev/sdb/ mklabel gpt
sudo parted -s /dev/sdb/ mkpart primary 0% 100%
sudo mkfs.ext4 -L BACKUP /dev/sdb1

sudo mkdir -p /media/backup
sudo mount /dev/sdb1 /media/backup
```
