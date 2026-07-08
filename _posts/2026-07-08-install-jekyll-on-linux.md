---
title: "Install Jekyll on linux"
date: 2026-07-08
categories: [install,jekyll]
tags: [linux,mint]
---   

## Install Jekyll on linux  

To install Jekyll on Linux, you must install the Ruby development prerequisites, configure a local user environment, and install the Jekyll gem.  

#### 1. Install pre-req  

```
sudo apt-get install ruby-full build-essential zlib1g-dev
```  

#### 2. Configure local Gem dir  

Avoid install RubyGems as root. Configure as user  
```
echo '# Ruby Gems Environment' >> ~/.bashrc
echo 'export GEM_HOME=$HOME/gems' >> ~/.bashrc
echo 'export PATH=$HOME/gems/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```  

#### 3. Install Jekyll and Bundler  

```
gem install jekyll bundler
```  

#### 4. Create your site  

```
jekyll new ./Project/testsite
cd ./Project/testsite
bundle exec jekyll server
```  

Open http://localhost:4000 in your browser and you can see the new website that you've just created  
