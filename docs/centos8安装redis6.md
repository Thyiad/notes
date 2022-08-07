---
title: centos8安装redis6
lang: zh-cn
---

### centos8未升级到centos stream

``` bash
sudo dnf -y update
sudo dnf install -y vim
sudo dnf install https://rpms.remirepo.net/enterprise/remi-release-8.rpm -y

sudo dnf module enable redis:remi-6.2 -y
sudo dnf install redis

sudo systemctl start redis
sudo systemctl enable redis
sudo systemctl status redis

sudo vim /etc/redis/redis.conf
sudo systemctl restart redis
```

来源：<https://citizix.com/how-to-install-configure-redis-6-on-rocky-linux-centos-8/>

redis 的一些常用配置：

``` bash
bind 0.0.0.0
requirepass j2GfJuLFR8
appendonly yes
appendfilename "appendonly.aof"
```

### centos8 stream 安装redis6

``` bash
dnf module -y install redis:6

systemctl start redis
systemctl enable redis
systemctl status redis

sudo vim /etc/redis.conf
sudo systemctl restart redis
```

### 如果开启了防火墙

``` bash
firewall-cmd --add-service=redis --permanent
firewall-cmd --reload
```
