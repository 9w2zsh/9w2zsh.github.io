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

## Error msg
the msg on Cloudflare Network>Tunnel:
this cloudflared versions is more than a year behind the latest release (2026.10.3) and is no longer supported. Upgrade to restore support

## Answer
This message appears because your Raspberry Pi is running a version of cloudflared that is more than a year old. Cloudflare enforces a strict one-year support window for security and stability reasons.
If running standard update commands didn't clear the error, it means cloudflared was likely installed on your Pi manually as a standalone binary or an untracked package.
You can bypass the outdated package manager and manually replace the binary to force an upgrade to version 2026.10.3 or newer.

### Step 1: Identify Your Raspberry Pi's Architecture

Raspberry Pis run on different CPU architectures depending on the model and OS version. Run this command to check yours:
```
uname -m
```
* If it outputs aarch64 or arm64: You have a 64-bit system.
* If it outputs armv7l or armhf: You have a 32-bit system.

### Step 2: Download and Install the Latest Binary

Choose the code block below that matches your architecture to download the latest binary directly from Cloudflare's GitHub Releases:

Option A: For 64-bit Systems (aarch64 / arm64)

```
# 1. Download the latest 64-bit arm binary
wget https://github.com

# 2. Overwrite the old binary inside your local bin path
sudo cp cloudflared-linux-arm64 /usr/local/bin/cloudflared

# 3. Grant executable permissions
sudo chmod +x /usr/local/bin/cloudflared
Use code with caution.
```
Option B: For 32-bit Systems (armv7l / armhf)

```
# 1. Download the latest 32-bit arm binary
wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-arm

# 2. Overwrite the old binary inside your local bin path
sudo cp cloudflared-linux-arm /usr/local/bin/cloudflared

# 3. Grant executable permissions
sudo chmod +x /usr/local/bin/cloudflared
```

### Step 3: Restart the Service & Verify

Now that the binary file is updated, restart the background service and verify it is running on the latest build:
```
# Restart the background daemon
sudo systemctl restart cloudflared

# Check the active version
cloudflared --version
```

The version string output should now match or exceed 2026.10.3. The deprecation warning on your Cloudflare Zero Trust dashboard should disappear within a few minutes once the tunnel re-establishes a live handshake with the network.
If the version number didn't change after performing these steps, your original install might be sitting in a different path. Run which cloudflared and tell me the path it returns so we can replace the correct file.
