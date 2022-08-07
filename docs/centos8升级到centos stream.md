---
title: centos8升级到centos stream
lang: zh-cn
---

### 直接升级

``` bash
sudo dnf update -y
sudo reboot

cat /etc/centos-release
sudo dnf install centos-release-stream -y
sudo dnf swap centos-{linux,stream}-repos -y
sudo dnf distro-sync -y

sudo reboot
cat /etc/centos-release
```

官方文档：<https://www.linode.com/docs/guides/migrate-from-centos-8-to-centos-stream/>

### 报错处理

如果执行过dnf update，有这种报错：

```
Failed to download metadata for repo 'appstream': Cannot prepare internal mirrorlist: No URLs in mirrorlist
```

就先手动更新一下源：

``` sh
cd /etc/yum.repos.d/

sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-*
sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*
```
