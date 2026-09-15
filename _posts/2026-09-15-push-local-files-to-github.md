---
title: "Push local files to github using CLI"
categories: [github]
tags: [dev]
---
## Push Your Local Files via Terminal/Command Prompt
Open your terminal (Mac/Linux) or Command Prompt/Git Bash (Windows), then run the following commands sequentially
* Navigate to your local project folder
  ```bash
  cd /path/to/your/local/project
  ```
* Initialize Git in the directory
  ```bash
  git init
  ```
* Stage all your files for the upload
  ```bash
  git add .
  ```
* Commit the files locally
  ```bash
  git commit -m "First commit"  
  ```
* Rename your default branch to main
  ```bash
  bashgit branch -M main
  ```
* Link your local repository to GitHub (Replace the URL with your copied GitHub URL)
  ```bash
  git remote add origin https://github.com
  ```
* Push your code to GitHub
  ```bash
  git push -u origin main
  ```