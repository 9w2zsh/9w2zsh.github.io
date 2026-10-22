---
title: "How to upgrade Cloudflare tunnel on Raspberry Pi"
categories: [cloudflare]
tags: [raspberrypi]
---

To upgrade the Cloudflare Tunnel (cloudflared) service on a Raspberry Pi, run the standard package manager update commands in your terminal:
bash
sudo apt update
sudo apt upgrade cloudflared
```

After upgrading the package, restart the system service to apply the new version:

```bash
sudo systemctl restart cloudflared
```

### Step-by-Step Instructions

* **Open Terminal or SSH:** Connect to your Raspberry Pi via SSH or open a terminal window directly on the device.
* **Update Package Lists:** Run `sudo apt update` to refresh your local repository index.
* **Upgrade Cloudflared:** Run `sudo apt upgrade cloudflared` to fetch and install the latest release from the official Cloudflare APT repository.
* **Restart the Service:** Run `sudo systemctl restart cloudflared` to restart the daemon and clear any active stale connections.
* **Verify Status:** Check that the service is running properly with:
  ```bash
  sudo systemctl status cloudflared
  ```

*Note: If you originally installed `cloudflared` using Docker rather than a native systemd package, pull the latest image instead:*
```bash
docker pull cloudflare/cloudflared:latest
```