---
title: centos8安装mongodb
lang: zh-cn
---

### 创建repo

``vim /etc/yum.repos.d/mongodb-org-5.0.repo``，填入以下内容：

``` bash
[mongodb-org-5.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/5.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-5.0.asc
```

### 安装

``` bash
sudo yum install -y mongodb-org
```

### 启动 ``mongodb``

```
systemctl start mongod
systemctl enable mongod
systemctl status mongod
```

### 如果开启了防火墙

```
firewall-cmd --zone=public --add-port=27017/tcp --permanent
firewall-cmd --reload
```

### 文件位置

- /etc/mongod.conf — Configuration file of MongoDB [ By default localhost IP  (127.0.0.1) is bind IP and 27017 is the default port ]
- /var/lib/mongo  — Data directory of MongoDB
- /var/log/mongodb/mongod.log  — Log file of MongoDB
