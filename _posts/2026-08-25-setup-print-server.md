---
title:"Setup print server"
categories:[print]
tags:[printserver,cups,linux]
---
## Setup print server on raspberry pi (CUPS)
* check if print server already running
  ```
  lpstat -r
  ```
  if you see schedular is running, meaning CUPS is installed and running
  also can check with
  ```
  systemctl status cups
  ```
  to see if CUPS web interface is available
  ```
  curl http://<ipaddress>:631
  ```
  open browser and go to http://<ipaddress>:631
* if not installed
  ```
  sudo apt update
  sudo apt install cups cups-client
  ```
  enable and start it
  ```
  sudo systemctl enable cups
  sudo systemctl start cups
  ```
  add user ot print admin group
  ```
  sudo usermod -aG lpadmin $USER
  ```
  connect printer and verify
  ```
  lsusb
  lpinfo -v
  ```
  device printer should be listed
* if you need to install Canon E400 driver
  ```
  cd ~/Downloads
  tar -xvf cnijfilter-source-*.tar.gz
  cd cnijfilter-*
  sudo ./install.sh
  ```
* add printer in CUPS  
  Open http://ipaddress:631  
  go to Administration -> add printer, select Canon E400 and complete setup  
* Share printer on network
  ```
  sudo nano /etc/cups/cupsd.conf
  ```
  ensure CUPS allos network access, then restart
  ```
  sudo cupsctl --share-printers
  sudo cupsctl --remote-admin
  sudo systemctl restart cups
  ```
* PC can setup printer  
  Open Settings> Bluetooth & devices> Printers & scanners  
  Click Add device, then select the Canon E400  
  if not, click Add manually. Select shared printer by name, enter  
  ```
  https://<ipaddress>:631/printers/Canon_E400_series
  ```
---
## Print from Apple device
* From iPhone  
  Open any document, photo, webpage  
  Tab Share  
  Tap Print  
  Tap select printer  
---
#### Ref
* 
