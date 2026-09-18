---
title: "Push local files to github using CLI"
categories: [github]
tags: [dev]
---
To download a Git repository to a local folder for the first time, you should use the git clone command. If you already have the repository on your machine and just want to update it with the latest changes, you use git pull.  

Here is how to do both using the command line:  

### Scenario 1: You are downloading the repository for the first time (Clone)
This downloads all the project files, commit history, and metadata into a new folder on your computer.
* Copy the repository URL (from GitHub, GitLab, or Bitbucket).
* Open your terminal (or Git Bash on Windows).
* Navigate to the parent folder where you want your project folder to live:
  ```bash
  cd /path/to/your/parent-folder
  ```
* *Run the clone command:
  ```bash
  git clone https://github.com/<repo name>
  ```
Note: This automatically creates a new folder named after the repository. If you want to clone it into a specific folder with a custom name, add the folder name to the end of the command:
```bash
git clone https://github.com my-custom-folder-name
```

### Scenario 2: You already have the folder and want to get the latest updates (Pull)
If you already set up the project locally and someone else pushed updates to the remote repository, you use git pull to fetch and merge those changes.
* Open your terminal.
* Navigate directly into your existing project folder:
  ```bash
  cd /path/to/your/local-repository
  ```
* Pull the latest updates:
  ```bash
  git pull
  ```

### Scenario 3: Connecting a pre-existing local folder to a remote repository
If you have a local folder with files that you want to sync with a newly created, empty Git repository:
* Open your terminal and navigate to your folder:
  ```bash
  cd /path/to/your/local-folder
  ```
* Initialize Git in the folder:
  ```bash
  git init
  ```
* Link it to the remote repository:
  ```bash
  git remote add origin https://github.com
  ```
* Pull the remote files (like a README or license) to sync them before you make your first commit:
  ```bash
  git pull origin main
  ```

---
### Ref
Create the repo on github
```bash
git init
git add README.md 
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/<yourname>/<yourrepo>.git
git push -u origin main
```
Create new branch to work on feature
```bash
git checkout main
git pull origin main

git checkout -b feature/latest-items-first
git push -u origin feature/latest-items-first
```
Merge branch to main
* Make sure feature branch is pushed
  ```bash
  git checkout feature/latest-items-first
  git push origin feature/latest-items-first
  ```
* Switch to main
  ```bash
  git checkout main
  git pull origin main
  ```
* Merge feature
  ```bash
  git merge feature/latest-items-first
  ```
* Push updated main
  ```bash
  git push origin main
  ```
* Verify
  ```bash
  git log --oneline --graph --decorate -15
  ```
Create a Release Tag
```bash
git tag v1.3-latest-items-first
git push origin v1.3-latest-items-first
```
Optional Cleanup  
After confirming everything works on main:
```bash
git branch -d feature/latest-items-first
git push origin --delete feature/latest-items-first
```
