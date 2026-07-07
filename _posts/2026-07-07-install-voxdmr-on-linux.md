---
title: "Install VoxDMR on linux"
date: 2026-07-07
categories: [install,dmr,linux]
tags: [voxdmr,app]
---

## how it was started

having many handy without battery is equal as no handy at all.

started my day as usual. after breakfast, enjoying the coffee and time to checkout if there's any one on TG50210, MalaysiaNET. But all of my handy out of battery. I was looking at the laptop that I've just installed linux mint. I remember VoxDMR and a thought, what if I install VoxDMR on this laptop.

---

## the steps

1. Download VoxDMR from the [installation website](https://www.voxdmr.com/docs/installation/).
   ```
   curl -LO https://github.com/jcalado/voxdmr-site/releases/latest/download/VoxDMR-linux-x86_64
   ```
2. chmod
   ```
   chmod +x VoxDMR-linux-x86_64
   ```
4. run
   ```
   ./VoxDMR-linux-x86_64
   ```

not so fast!

VoxDMR required GLIBC 2.43 and linux Mint only has GLIBC 2.31. It is not recommended to upgrade the system wide GLIBC as it might break some other component. So the only way is to install GLIBC 2.43 locally and invoke it when I run VoxDMR.

---

## compile local GLIBC 2.43

1. prepare system
   ```
   sudo apt update
   sudo apt install build-essential bison flex python3 make wget gawk
   ```
2. download and prepare source
   ```
   cd ~
   mkdir glibc-build && cd glibc-build
   wget https://ftp.gnu.org/gnu/glibc/glibc-2.43.tar.gz
   tar -xzf glibc-2.43.tar.gz
   mkdir build && cd build
   ```
3. configure and compile
   Note: Replace $HOME with your actual home path if needed, i didn't change anything
   ```
   ../glibc-2.43/configure --prefix=$HOME/glibc-2.43-local --disable-werror
   make -j$(nproc)
   make install   
   ```
4. integrate with VoxDMR
   Note: Assuming VoxDMR is in your home directory
   ```
   cd ~
   mv glibc-2.43-local VoxDMR/glibc-2.43-local   
   ```
5. running VoxDMR with local GLIBC
   Note: you cannot simply run the program normally, you must invoke dynamic linker from the local GLIBC folder
   ```
   cd ~/VoxDMR
   ./glibc-2.43-local/lib/ld-linux-x86-64.so.2 --library-path ./glibc-2.43-local/lib ./VoxDMR-linux-x86_64
   ```

---

## you might run into issue with libasound.so.2.

if you run VoxDMR and it cannot find libasound.so.2, you need to add the system path to the library search path
```
cd ~/VoxDMR
./glibc-2.43-local/lib/ld-linux-x86-64.so.2 \
  --library-path ./glibc-2.43-local/lib:/lib/x86_64-linux-gnu:/usr/lib/x86_64-linux-gnu \
  ./VoxDMR-linux-x86_64
```
that should fix it

---

### ref

[Search from Brave](https://search.brave.com/ask?q=how+to+install+GLIBC_2.43+on+linux+mint&conversation=094bd7faa4e980d524f20a348fe76559bccb#F9QA6T9o4UfykBYmt--0Z1fB9dOcZFkMyukzK1SzrxM)
