---
title: linux定时任务crontab
lang: zh-cn
---

crontab 的全称是 cron table，中文为作业列表

### cron 目录

- `/var/spool/cron/` 目录存放每个用户的crontab任务，每个任务以创建者的名字命名
- `/etc/crontab` 文件负责调度各种管理和维护任务
- `/etc/cron.d/` 目录用来存放任何要执行的crontab文件或脚本

还可以把脚本放在/etc/cron.hourly、/etc/cron.daily、/etc/cron.weekly、/etc/cron.monthly目录中，让它每小时/天/星期、月执行一次。

### cron 命令

``` bash
crontab [-u username]　　　　//省略用户表表示操作当前用户的crontab
    -e      (编辑工作表)
    -l      (列出工作表里的命令)
    -r      (删除工作作)
```

每天21:30执行命令
```
30 21 * * * myCmd
```