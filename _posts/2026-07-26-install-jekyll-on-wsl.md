---
title: "Install Jekyll on WSL"
date: 2026-07-26
categories: [WSL, Linux]
tags: [WSL, Linux, Jekyll]
---

## Install Jekyll on WSL

I wanted to have Jekyll installed on WSL to be able to generate posts locally on my Windows 11 machine.

However, for some reason, Jekyll didn't installed correctly on my Windows 11. Other solution was to install Jekyll on WSL instead and still can view the local blog on Windows 11 by accessing http://localhost:4000 from browser. The editing of the blog can be done using AGY or VS code, which ever is convenient.

* Check and run the install
```
wsl --install
```
* reboot
* create workspace
```
mkdir -p ~/Projects
cd ~/Projects
pwd
```
* run update & upgrade
```
sudo apt update && sudo apt upgrade -y
```
* install ruby
```
sudo apt install -y build-essential ruby-full zlib1g-dev
```
* check ruby install
```
ruby --version
gem --version
```
* configure ruby gems
```
echo '# Install Ruby Gems to user directory' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/.gem"' >> ~/.bashrc
echo 'export PATH="$HOME/.gem/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```
* install bundler and Jekyll
```
gem install bundler jekyll
```
* check bundler and Jekyll
```
bundler --version
jekyll --version
```
* make local folder for the blog
```
mkdir -p ~/Projects/Websites
cd ~/Projects/Websites
```
* clone source from github
```
git clone https://github.com/yourgit/yourblog.github.io.git
```
* then
```
cd PersonalBlog
bundle install
jekyll serve
```

Your blog should be available at http://localhost:4000

