---
icon: fas fa-tools
order: 5
---

## Tools for markdown  

* <a href="https://www.w3schools.com/icons/icons_reference.asp" target="_blank">Icon for left nav</a>  
* [Markdown commands](https://markdownmonster.west-wind.com/docs/Markdown-Monster-Documentation/An-Introduction-to-Markdown.html) by Markdown Monster  
* [Basic markdown command](https://www.markdownguide.org/basic-syntax/)  

---

* [Digital Comics Prompt Generator](https://smcreative.interactivelink.site/E-comicprompter1)

---

## Linux command

<details markdown="block">
  <summary>Linux: check WLAN0</summary>

* nmcli device status
```
  DEVICE         TYPE      STATE                   CONNECTION
eth0           ethernet  connected               netplan-eth0
wlan0          wifi      connected               netplan-wlan0-zsh01-5G
lo             loopback  connected (externally)  lo
p2p-dev-wlan0  wifi-p2p  disconnected
```
* sudo iw dev wlan0 link
```
Connected to 84:01:12:36:4a:0d (on wlan0)
        SSID: zsh01-5G
        freq: 5180.0
        RX: 43780 bytes (302 packets)
        TX: 9236 bytes (59 packets)
        signal: -29 dBm
        rx bitrate: 6.0 MBit/s
        tx bitrate: 24.0 MBit/s
        bss flags:
        dtim period: 1
        beacon int: 100
```
* zainalsh@zshPi4:~ $ cat /sys/class/net/wlan0/operstate
```
up
```
* iwconfig wlan0
```
an0     IEEE 802.11  ESSID:"zsh01-5G"
          Mode:Managed  Frequency:5.18 GHz  Access Point: 84:01:12:36:4A:0D
          Bit Rate=24 Mb/s   Tx-Power=31 dBm
          Retry short limit:7   RTS thr:off   Fragment thr:off
          Power Management:on
          Link Quality=70/70  Signal level=-29 dBm
          Rx invalid nwid:0  Rx invalid crypt:0  Rx invalid frag:0
          Tx excessive retries:0  Invalid misc:0   Missed beacon:0
```
* ip a show wlan0
```
3: wlan0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether d8:3a:dd:aa:9a:10 brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.10/24 brd 192.168.1.255 scope global dynamic noprefixroute wlan0
       valid_lft 86184sec preferred_lft 86184sec
    inet6 2001:d08:e3:e79b:da3a:ddff:feaa:9a10/64 scope global dynamic mngtmpaddr proto kernel_ra
       valid_lft 258994sec preferred_lft 172594sec
    inet6 fe80::da3a:ddff:feaa:9a10/64 scope link proto kernel_ll
       valid_lft forever preferred_lft forever
```
* sudo iwlist wlan0 scan
```
wlan0     Scan completed :
          Cell 01 - Address: 84:01:12:36:4A:0D
                    Channel:36
                    Frequency:5.18 GHz (Channel 36)
                    Quality=70/70  Signal level=-28 dBm
                    Encryption key:on
                    ESSID:"zsh01-5G"
                    Bit Rates:6 Mb/s; 9 Mb/s; 12 Mb/s; 18 Mb/s; 24 Mb/s
                              36 Mb/s; 48 Mb/s; 54 Mb/s
                    Mode:Master
                    Extra:tsf=0000000000000000
                    Extra: Last beacon: 92ms ago
```

</details>

---

## remove all files in git repo  

* remove all files from git index
  ```
  git rm -r --cached '*'
  ```  
* Commit the changes
  ```
  git commit -m "Remove all files from repository"
  ```
* Push the changes
  ```
  git push origin master
  ```
---

## remote: Invalid username or token. Password authentication is not supported for Git operation  

#### Step 1: Generate a Personal Access Token (PAT)

* Log into your account on GitHub.
* Click your profile icon in the top-right corner and select Settings.
* Scroll down the left sidebar and click Developer settings.
* Expand Personal access tokens and select Tokens (classic).Click
* Generate new token → Generate new token (classic).
* Give it a descriptive name (e.g., "Laptop Git Terminal") and set an expiration date.
* Check the repo scope checkbox (this grants terminal access to your repositories).
* Click Generate token at the bottom of the page.
* Copy the generated token immediately. You will not be able to see it again after navigating away.

#### Step 2: Clear Your Old Cached Password  

Your system is likely still trying to use your old saved password. You must clear it before your terminal will accept the new token.
If you are using the local secret storage configuration, clear your credentials by running
```
bashgit config --global --unset credential.helper
```

#### Step 3: Apply the Token to Your Repository  

The easiest way to reconnect without running into credential manager caching bugs is to update your repository's remote URL directly with your token:
```
bashgit remote set-url origin https://github.com
```
---

#### ref  

* [How to Fix GitHub: Invalid username or password](https://www.youtube.com/watch?v=BiPuDyZy74g)

---

## error: src refspec main does not match any  

This error typically occurs because you haven't made any commits yet, or your local branch is spelled differently than the remote branch (e.g., local is master while remote is main).To fix this, add your files and make your first commit before pushing:
```
bashgit add .
git commit -m "Initial commit"
git push -u origin main
```  
---
