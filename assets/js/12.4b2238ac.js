(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{364:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"pm2常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pm2常用命令"}},[s._v("#")]),s._v(" pm2常用命令")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Fork mode")]),s._v("\npm2 start app.js --name my-api "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命令进程")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Cluster mode")]),s._v("\npm2 start app.js -i "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据当前系统cpu核心数量，来启动进程数量")]),s._v("\npm2 start app.js -i max      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 同上，已过时")]),s._v("\npm2 scale app +3             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加多3个进程")]),s._v("\npm2 scale app "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 变更进程数量到2")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Listing")]),s._v("\n\npm2 list               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示所有进程状态")]),s._v("\npm2 jlist              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以 JSON 格式显示所有进程状态")]),s._v("\npm2 prettylist         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以美化后的 JSON 显示所有进程状态")]),s._v("\n\npm2 describe "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示特定进程的信息")]),s._v("\n\npm2 monit              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监视所有进程")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Logs")]),s._v("\n\npm2 logs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--raw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示日志")]),s._v("\npm2 flush              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清空所有日志")]),s._v("\npm2 reloadLogs         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新载入所有日志")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Actions")]),s._v("\n\npm2 stop all           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止所有进程")]),s._v("\npm2 restart all        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新启动所有进程")]),s._v("\n\npm2 reload all         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新加载所有")]),s._v("\n\npm2 stop "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止指定id的进程(id)")]),s._v("\npm2 restart "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重起指定id的进程")]),s._v("\n\npm2 delete "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从pm2列表中删除进程")]),s._v("\npm2 delete all         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除pm2列表中的所有进程")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Misc")]),s._v("\n\npm2 reset "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("process"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重置元数据")]),s._v("\npm2 updatePM2          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新内存中的pm2")]),s._v("\npm2 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确保pm2守护进程已启动")]),s._v("\npm2 sendSignal SIGUSR2 my-app "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将系统信号发送到指定应用")]),s._v("\npm2 start app.js --no-daemon    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 无守护进程式启动")]),s._v("\npm2 start app.js --no-vizion    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 无可视化式启动")]),s._v("\npm2 start app.js --no-autorestart   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不会自动重启应用")]),s._v("\n")])])]),a("h3",{attrs:{id:"监听文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监听文件"}},[s._v("#")]),s._v(" 监听文件")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pm2 start app.js --watch\npm2 stop 0  # 不会停止监听\npm2 stop 0 --watch  # 会停止监听\n")])])]),a("h3",{attrs:{id:"ecosystem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ecosystem"}},[s._v("#")]),s._v(" ecosystem")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pm2 [start|restart|stop|delete] ecosystem.config.js\n\n# 如果修改了ignore_watch，重启时需要先关闭再启动：\npm2 stop ecosystem.config.js --watch\npm2 start ecosystem.config.js ——watch\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);