---
title: git command
date: 2025-06-03 10:21:00 +0800
categories: [learn, git] 
tags: [command,cli,git]     # TAG names should always be lowercase
---

## Clone github repo to local pc

✅ 1. Install Git (if you haven’t already)
Windows: Download from https://git-scm.com/download/win

macOS: Install via Homebrew: brew install git or use the installer from the Git website.

Linux: Use your package manager, e.g., sudo apt install git for Ubuntu.

✅ 2. Copy the GitHub repo URL
Go to the GitHub repository in your browser.

Click the green Code button.

Copy the HTTPS link (e.g., https://github.com/username/repo-name.git).

✅ 3. Open your terminal or command prompt
Windows: Open Git Bash or Command Prompt

macOS/Linux: Open Terminal

✅ 4. Use the git clone command
``` bash
git clone https://github.com/username/repo-name.git
```
Replace the URL with the one you copied.

✅ 5. Navigate into the cloned folder
``` bash
cd repo-name
```

## Create a new github repo from local subdirectory

✅ Step 1: Navigate to Your Subdirectory
Open your terminal or command prompt, and go to the folder:
``` bash
cd path/to/your/subdirectory
```

✅ Step 2: Initialize Git (if it’s not already a repo)
```bash
git init
```
This sets up the folder as a local Git repository.

✅ Step 3: Add and Commit Files
```bash
git add .
git commit -m "Initial commit"
```
This stages and commits all files in that subdirectory.

✅ Step 4: Create a New GitHub Repo
1. Go to https://github.com
2. Click the + (top-right corner) > New repository
3. Fill out repo name, description, etc. Do NOT check "Initialize with README" (you already have files)
4. Click Create repository

GitHub will show you the remote URL (like https://github.com/yourusername/new-repo.git)

✅ Step 5: Link Your Local Repo to GitHub

Copy that URL and run this in your terminal:
``` bash
git remote add origin https://github.com/yourusername/new-repo.git
```
✅ Step 6: Push to GitHub
```bash
git branch -M main
git push -u origin main
```