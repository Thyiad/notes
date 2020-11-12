---
title: centos8安装nginx
lang: zh-cn
sidebar: true
---

### 安装nginx
``` bash
dnf install nginx
```

### 启用nginx
``` bash
sudo systemctl enable nginx
sudo systemctl start nginx
```

### 如果需要配置防火墙
``` bash
firewall-cmd --permanent --zone=public --add-service=http
firewall-cmd --permanent --zone=public --add-service=https
firewall-cmd --reload
```