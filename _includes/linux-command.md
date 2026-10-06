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
