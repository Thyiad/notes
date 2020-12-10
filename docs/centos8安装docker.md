---
title: centos8安装nginx
lang: zh-cn
---

### 应用更新（可选，但是推荐）
``` bash
dnf update -y; reboot
```

### 安装 Docker CE
``` bash
dnf list docker-ce
dnf install docker-ce --nobest -y
```

### 设置为服务
``` bash
systemctl start docker
systemctl enable docker
```

### 验证docker安装结果
``` bash
docker --version
```

### 安装 Docker Compose
``` bash
dnf install curl -y # 如果没有安装curl的话
curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose    # 版本号替换成当前最新的
chmod +x /usr/local/bin/docker-compose
```

### 验证 docker compose 安装结果
``` bash
docker-compose --version
```
