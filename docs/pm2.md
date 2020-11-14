### pm2常用命令

``` bash
# Fork mode
pm2 start app.js --name my-api # 命令进程

# Cluster mode
pm2 start app.js -i 0        # 根据当前系统cpu核心数量，来启动进程数量
pm2 start app.js -i max      # 同上，已过时
pm2 scale app +3             # 加多3个进程
pm2 scale app 2              # 变更进程数量到2

# Listing

pm2 list               # 显示所有进程状态
pm2 jlist              # 以 JSON 格式显示所有进程状态
pm2 prettylist         # 以美化后的 JSON 显示所有进程状态

pm2 describe 0         # 显示特定进程的信息

pm2 monit              # 监视所有进程

# Logs

pm2 logs [--raw]       # 显示日志
pm2 flush              # 清空所有日志
pm2 reloadLogs         # 重新载入所有日志

# Actions

pm2 stop all           # 停止所有进程
pm2 restart all        # 重新启动所有进程

pm2 reload all         # 重新加载所有

pm2 stop 0             # 停止指定id的进程(id)
pm2 restart 0          # 重起指定id的进程

pm2 delete 0           # 从pm2列表中删除进程
pm2 delete all         # 删除pm2列表中的所有进程

# Misc

pm2 reset <process>    # 重置元数据
pm2 updatePM2          # 更新内存中的pm2
pm2 ping               # 确保pm2守护进程已启动
pm2 sendSignal SIGUSR2 my-app # 将系统信号发送到指定应用
pm2 start app.js --no-daemon    # 无守护进程式启动
pm2 start app.js --no-vizion    # 无可视化式启动
pm2 start app.js --no-autorestart   # 不会自动重启应用
```

### 监听文件
```
pm2 start app.js --watch
pm2 stop 0  # 不会停止监听
pm2 stop 0 --watch  # 会停止监听
```

### ecosystem
```
pm2 [start|restart|stop|delete] ecosystem.config.js

# 如果修改了ignore_watch，重启时需要先关闭再启动：
pm2 stop ecosystem.config.js --watch
pm2 start ecosystem.config.js ——watch
```
