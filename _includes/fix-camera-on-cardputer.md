
why I cannot launch camera on my cardputer zero

The camera app on the M5Stack Cardputer Zero typically fails to launch due to a known software or firmware glitch, or conflicts caused by recent system updates or package installations (such as installing third-party tools like Raspyjack).

Common Causes & Fixes

• Software / Firmware Bug: Early firmware versions and certain updates have a known bug that breaks the camera application.
	• Fix: Update your system image or reinstall the official matching firmware via the M5Stack Documentation or their official GitHub repository.
• Package / CLI Conflicts: Running general package upgrades (like apt upgrade and autoremove) via the command line or installing store apps like Raspyjack can break dependencies required by the camera app.
	• Fix: Re-flash the base system image using the M5 Imager/installer tool to restore missing or overwritten camera drivers.
To help narrow down the exact fix, let me know:
• How you are trying to launch it (from the graphical launcher, CLI terminal, or after installing a specific app)?
• Have you recently run system updates or installed tools like Raspyjack?
• 
Reddit·r/CardPuter
Cardputer Zero Camera app not working - Reddit
13 Nov 2026 — While trying to launch it from cli I am getting this error. Anyone having the same problem? Maybe my apt upgrade and autoremove br...
• 
Reddit·Leather_Platypus_430
Is there something I'm missing ? : r/CardPuter
12 Nov 2026 — Yea I think they addressed the camera issue to software updates I think the same for the other problems ... The Cardputer Zero (th...
0:03
Show all
    
       
i uninstall raspyjack and did apt autoremove and apt clean. please help to fix this issue

Installing Raspyjack and running apt autoremove breaks or removes the dependencies needed by the Cardputer Zero Camera app. You do not need to re-flash your SD card—you can fix it immediately by manually downloading and reinstalling the latest .deb packages from the official CardputerZero GitHub releases.

Step 1: Reinstall the Camera App

Connect your Cardputer Zero to Wi-Fi, open the terminal (or connect via SSH), and run these commands to install the latest Camera package:
bash
wget https://github.com
sudo apt update
sudo apt install ./Camera_1.0.4_m5stack1_arm64.deb
Use code with caution.
(Note: Using sudo apt install ./ will automatically pull back any shared libraries that apt autoremove deleted.)

Step 2: Restore the FactoryTest App (Optional)

Uninstalling Raspyjack also frequently removes or breaks the FactoryTest app. If that icon is missing or broken as well, restore it with these commands:
bash
wget https://github.com
sudo apt install ./FactoryTest_1.0.2_m5stack1_arm64.deb
Use code with caution.

Step 3: Reboot

Once the installation finishes, reboot your device so the launcher refreshes and the camera driver re-initializes:
bash
sudo reboot
Use code with caution.
If the terminal throws a 404 Not Found error on the .deb link or a dependency error during apt install, paste the exact terminal output here and I can help troubleshoot it.
• 
Reddit·r/CardPuter
Cardputer Zero Camera app not working - Reddit
13 Nov 2026 — If you'd prefer to fix the issue right away, you can manually update Camera and FactoryTest apps with the following commands: # Do...
• 
Facebook·CardputerZero Launch Group
Raspyjack installation causes camera app and test app issues?
November 14, 2026 — Raspyjack installation causes camera app and test app issues? You can manually download and install latest releases to fixing that...
• 
GitHub
GitHub - 7h30th3r0n3/Raspyjack: Small offensive network ...
Connect the CardputerZero to WiFi. Open the App Store, search RaspyJack (or enter share code RJAK ). Tap Install, then launch it. ...

pi@CardputerZero:~ $ sudo apt update
[sudo] password for pi:
Hit:1 http://deb.debian.org/debian trixie InRelease
Hit:2 http://deb.debian.org/debian trixie-updates InRelease
Hit:3 http://deb.debian.org/debian-security trixie-security InRelease
Hit:4 http://archive.raspberrypi.com/debian trixie InRelease
Hit:5 https://www.kismetwireless.net/repos/apt/release/trixie trixie InRelease
1 package can be upgraded. Run 'apt list --upgradable' to see it.
Notice: Skipping acquire of configured file 'main/binary-armhf/Packages' as repository 'https://www.kismetwireless.net/repos/apt/release/trixie trixie InRelease' doesn't support architecture 'armhf'
pi@CardputerZero:~ $ sudo apt install ./Camera_1.0.4_m5stack1_arm64.deb
Error: Unsupported file ./Camera_1.0.4_m5stack1_arm64.deb given on commandline

That Error: Unsupported file message happens because v1.0.4 does not exist yet—the latest official release is v1.0.3. When wget tried to download v1.0.4, GitHub returned a 404 HTML page or failed to save a valid .deb file, causing apt to reject it.

Step 1: Download and Install Version v1.0.3

Remove any empty or broken Camera_1.0.4 file from your home folder, download the verified v1.0.3 release from the CardputerZero Camera repository, and install it:
bash
rm -f Camera_1.0.4_m5stack1_arm64.deb
wget https://github.com/CardputerZero/Camera/releases/download/v1.0.3/Camera_1.0.3_m5stack1_arm64.deb
sudo apt install ./Camera_1.0.3_m5stack1_arm64.deb
Use code with caution.

Step 2: Reinstall FactoryTest (Recommended)

If apt autoremove also removed dependencies for the FactoryTest app (which includes hardware camera diagnostics), reinstall v1.0.2 from the CardputerZero FactoryTest repository:
bash
wget https://github.com
sudo apt install ./FactoryTest_1.0.2_m5stack1_arm64.deb
Use code with caution.

Step 3: Reboot Your Device

Reboot so the graphical launcher refreshes the app icons and reloads the camera interface:
bash
sudo reboot
Use code with caution.
(Note: Avoid running sudo apt upgrade afterward, as upgrading core Debian Trixie system packages can break the Cardputer Zero camera runtime again.)
After running the v1.0.3 install command and rebooting, let me know if the Camera app opens properly or if the terminal prints any missing dependency warnings.
• 
Reddit·r/CardPuter
Cardputer Zero Camera app not working - Reddit
November 13, 2026 — you can manually update Camera and FactoryTest apps with the following commands: # Download the latest Camera application package.
• 
Reddit·r/CardPuter
It's here! : r/CardPuter - Reddit
9 Nov 2026 — Reflash the official system image and avoid running system upgrade commands such as apt upgrade afterward.
• 
GitHub
M5Stack CardputerZero Community
November 13, 2026 — FactoryTest | RFID | | Camera (Not compatible with CardputerZero Lite) FactoryTest Public Factory test app for CardputerZero

pi@CardputerZero:~ $ sudo apt install ./Camera_1.0.3_m5stack1_arm64.deb
Note, selecting 'camera' instead of './Camera_1.0.3_m5stack1_arm64.deb'
Solving dependencies... Error!
Some packages could not be installed. This may mean that you have
requested an impossible situation or if you are using the unstable
distribution that some required packages have not yet been created
or been moved out of Incoming.
The following information may help to resolve the situation:

Unsatisfied dependencies:
 libcamera0.7 : Depends: libcamera-ipa (= 0.7.2+rpt20261009-1) but 0.8.0+rpt20261104-1 is to be installed
Error: Unable to correct problems, you have held broken packages.
Error: The following information from --solver 3.0 may provide additional context:
   Unable to satisfy dependencies. Reached two conflicting decisions:
   1. libcamera0.7:arm64 is selected for install because:
      1. camera:arm64=1.0.3-m5stack1 is selected as an upgrade
      2. camera:arm64=1.0.3-m5stack1 Depends libcamera0.7 (>= 0.7.2)
   2. libcamera0.7:arm64 Depends libcamera-ipa (= 0.7.2+rpt20261009-1)
      but none of the choices are installable:
      [no choices]

That error occurs because Raspberry Pi's repository recently pushed libcamera-ipa version 0.8.0, while the Cardputer Zero Camera app (v1.0.3) strictly requires libcamera0.7 (0.7.2).
You can fix this immediately by downloading the matching 0.7.2 versions directly from the Raspberry Pi archive and downgrading them.

Step 1: Download and Downgrade libcamera Packages

Run these three commands in your terminal to pull the compatible 0.7.2 builds from the Raspberry Pi Debian Archive and install them:
bash
wget http://archive.raspberrypi.com/debian/pool/main/libc/libcamera/libcamera0.7_0.7.2+rpt20261009-1_arm64.deb
wget http://archive.raspberrypi.com/debian/pool/main/libc/libcamera/libcamera-ipa_0.7.2+rpt20261009-1_arm64.deb
sudo apt install --allow-downgrades ./libcamera0.7_0.7.2+rpt20261009-1_arm64.deb ./libcamera-ipa_0.7.2+rpt20261009-1_arm64.deb
Use code with caution.

Step 2: Pin the Packages (Prevent Auto-Upgrades)

Hold these two packages so future updates do not overwrite them with 0.8.0 before M5Stack releases their official OTA camera patch:
bash
sudo apt-mark hold libcamera0.7 libcamera-ipa
Use code with caution.

Step 3: Install the Camera App & Reboot

Now install the Camera_1.0.3 file you already downloaded and reboot your device:
bash
sudo apt install ./Camera_1.0.3_m5stack1_arm64.deb
sudo reboot
Use code with caution.
(Note: Once M5Stack releases an updated Camera app for libcamera 0.8.0 via OTA, you can unhold those packages later by running sudo apt-mark unhold libcamera0.7 libcamera-ipa.)
If the wget download returns a 404 Not Found or if apt flags another rpicam-apps sub-package conflict, paste the exact terminal message here and I will find the matching .deb file for it.
• 
Reddit·r/CardPuter
Cardputer Zero Camera app not working - Reddit
13 Nov 2026 — Option 1: Wait for the Official Update. There's no need to reinstall anything or return your device. Option 2: Manually Update the...

pi@CardputerZero:~ $ sudo apt install ./Camera_1.0.3_m5stack1_arm64.deb
Note, selecting 'camera' instead of './Camera_1.0.3_m5stack1_arm64.deb'
The following packages were automatically installed and are no longer required:
  libboost-program-options1.83.0  libopencv-features2d410  libtbb12        python3-libarchive-c  python3-videodev2
  libcamera0.4                    libopencv-flann410       libtbbbind-2-5  python3-openexr
  libopencv-calib3d410            libopencv-imgproc410     libtbbmalloc2   python3-pidng
  libopencv-core410               libopencv-objdetect410   python3-av      python3-piexif
  libopencv-dnn410                libqt6openglwidgets6     python3-kms++   python3-simplejpeg
Use 'sudo apt autoremove' to remove them.

Upgrading:
  camera

Summary:
  Upgrading: 1, Installing: 0, Removing: 0, Not Upgrading: 2
  Download size: 0 B / 1,411 kB
  Space needed: 65.5 kB / 36.7 GB available

Get:1 /home/pi/Camera_1.0.3_m5stack1_arm64.deb camera arm64 1.0.3-m5stack1 [1,411 kB]
Reading changelogs... Done
(Reading database ... 145824 files and directories currently installed.)
Preparing to unpack .../Camera_1.0.3_m5stack1_arm64.deb ...
Unpacking camera (1.0.3-m5stack1) over (1.0.2-m5stack1) ...
Setting up camera (1.0.3-m5stack1) ...
Notice: Download is performed unsandboxed as root as file '/home/pi/Camera_1.0.3_m5stack1_arm64.deb' couldn't be accessed by user '_apt'. - pkgAcquire::Run (13: Permission denied)

The camera (1.0.3-m5stack1) package installed cleanly over the old 1.0.2 version, and the dependency conflict is now completely resolved.

Final Steps to Complete

• Reboot Your Device: Restart your Cardputer Zero so the graphical launcher refreshes and loads the updated camera runtime.bash
sudo reboot
Use code with caution.
• Do Not Run sudo apt autoremove: Ignore the terminal suggestion to run autoremove for now, as packages like libopencv and python3-picamera2 helpers in that list may still be needed by other system apps or hardware diagnostics.
• Ignore the _apt Sandboxing Notice: The Notice: Download is performed unsandboxed as root message at the bottom is normal whenever installing a local .deb file from your /home/pi directory and does not affect the app.
After rebooting, let me know if the Camera app launches properly or if you'd like to clean up the temporary .deb files in your home folder.
