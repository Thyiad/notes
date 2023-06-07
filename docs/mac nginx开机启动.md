---
title: mac nginx开机启动
lang: zh-cn
---

使用homebrew安装nginx之后
```
brew install nginx
sudo cp /usr/local/opt/nginx/*.plist /Library/LaunchDaemons
sudo launchctl load -w /Library/LaunchDaemons/homebrew.mxcl.nginx.plist
```
