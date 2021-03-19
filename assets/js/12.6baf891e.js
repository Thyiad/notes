(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{366:function(s,a,t){"use strict";t.r(a);var e=t(42),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"_1-yum-安装docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-yum-安装docker"}},[s._v("#")]),s._v(" 1.yum 安装Docker")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker 要求centos系统的内核版本高于3.10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -r\nyum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -y：对所有提问都回答yes")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" docker start    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动docker后台服务")]),s._v("\ndocker run hello-world  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试运行hello-world")]),s._v("\n")])])]),t("h3",{attrs:{id:"_2-docker-守护进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-docker-守护进程"}},[s._v("#")]),s._v(" 2.Docker 守护进程")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker daemon -H tcp://0.0.0.0:2375 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -H调整网络和端口配置")]),s._v("\ndocker daemon -H unix://home/docker/docker.sock "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 也可以指定一个Unix套接字路径")]),s._v("\ndocker daemon -H tcp://0.0.0.0:2375 -H unix://home/docer/docker.sock    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 也可以指定多个绑定地址")]),s._v("\ndocker daemon -D    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出docker守护进程的详细信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" docker status   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查docker守护进程是否正在运行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" docker start    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动docker守护进程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" docker stop "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止docker守护进程")]),s._v("\n")])])]),t("h3",{attrs:{id:"_3-容器使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-容器使用"}},[s._v("#")]),s._v(" 3.容器使用")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker run -t -i  运行容器  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建一个能进行交互的容器，这两个参数是最基本的，后跟 /bin/bash 之类的参数，指定要运行的程序")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -i 保证容器中的STDIN是开启的")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -t 告诉docker为要创建的容器分配一个伪tty终端")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -d 后台运行（全称：detached，分离）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --name    指定名称")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --restart=on-failure:5    容器的退出代码非0时自动重启5次，其他值还有always等等")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# nginx的话需要 nginx -g "daemon off"，否则运行完容器就退出了，因为nginx是运行一个bash（pid为1），容器是把pid为1的程序作为容器是否正在运行的依据，')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止并退出容器")]),s._v("\ndocker start    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动容器")]),s._v("\ndocker attach   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入容器会话")]),s._v("\ndocker logs "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取容器的日志，-f 跟踪日志，与tail -f相似，-t加上时间戳")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看容器内部运行的进程")]),s._v("\ndocker stats "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看一个或多个容器的统计信息")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -d test_machine "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" /etc/new_config_file  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在容器内部额外启动新进程")]),s._v("\ndocker stop "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止容器")]),s._v("\ndocker inspect --format "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{{.Name}} {{.State.Running}}'")]),s._v(" daemon_dave  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取更多的容器信息，--format 来查看指定信息，后面的容器名可以传递多个（同时查看多个容器的信息）")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看正在运行的容器， -a 查看所有容器， -q ")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有容器")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除容器")]),s._v("\n")])])]),t("h3",{attrs:{id:"_4-镜像使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-镜像使用"}},[s._v("#")]),s._v(" 4.镜像使用")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker images  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出本地主机上的镜像")]),s._v("\ndocker search "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找镜像")]),s._v("\ndocker pull  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载镜像")]),s._v("\ndocker tag 860c279d2fec runoob/centos:dev "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为镜像添加标签")]),s._v("\ndocker rmi  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除镜像")]),s._v("\n")])])]),t("h3",{attrs:{id:"_5-日志驱动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-日志驱动"}},[s._v("#")]),s._v(" 5.日志驱动")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker run --log-driver"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"syslog"')]),s._v("\n")])])]),t("h3",{attrs:{id:"_6-构建镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-构建镜像"}},[s._v("#")]),s._v(" 6.构建镜像")]),s._v(" "),t("ul",[t("li",[s._v("创建基础目录")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" static_web\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" static_web\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" Dockerfile\n")])])]),t("ul",[t("li",[s._v("填写Dockerfile")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Version: 0.0.1")]),s._v("\nFROM ubuntu:14.04\nMAINTAINER Thyiad Tao "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1520583107@qq.com"')]),s._v("\nRUN "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y nginx  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 也可以用exec格式的RUN指令：RUN [ "apt-get","-y","nginx" ]')]),s._v("\nRUN "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hi, Iam in your container'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/usr/share/nginx/html/index.html\nEXPOSE "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# EXPOSE指令告诉Docker该容器内的应用程序将会使用容器的指定端口")]),s._v("\n")])])]),t("ul",[t("li",[s._v("编译镜像")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" static_web\ndocker build -t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"thyiad/static_web:v1"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --no-cache 指定不使用缓存")]),s._v("\n")])])]),t("h3",{attrs:{id:"_7-volume命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-volume命令"}},[s._v("#")]),s._v(" 7.volume命令")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker volume ls\ndocker volume inspect --format '{{.Mountpoint}}' xxx_wp_certs\n")])])]),t("blockquote",[t("p",[s._v("获取这个卷在宿主机中的实际路径")])]),s._v(" "),t("h3",{attrs:{id:"_7-docker-compose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-docker-compose"}},[s._v("#")]),s._v(" 7.docker compose")]),s._v(" "),t("h3",{attrs:{id:"docker配置shadowsocks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker配置shadowsocks"}},[s._v("#")]),s._v(" docker配置shadowsocks")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker run --restart"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always --name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("myshadowsocks -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("54285")]),s._v(":54285 oddrationale/docker-shadowsocks -s "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("54285")]),s._v(" -k thyiad -m aes-256-cfb\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n")])])]),t("h1",{attrs:{id:"dockerfile里面的命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile里面的命令"}},[s._v("#")]),s._v(" dockerfile里面的命令")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("FROM\nMAINTAINER\nARG\nRUN\nWORKDIR\nCOPY\nVOLUME\nENTRYPOINT\n")])])]),t("h1",{attrs:{id:"编译dockerfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译dockerfile"}},[s._v("#")]),s._v(" 编译dockerfile")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('docker build -t="thyiad/my-frp:v1" .\n')])])]),t("h1",{attrs:{id:"查看卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看卷"}},[s._v("#")]),s._v(" 查看卷")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker volume ls\ndocker volume inspect --format '{{ .Mountpoint }}' 自动前缀_卷名\n\napt-get update\ndocker exec\n")])])]),t("h3",{attrs:{id:"docker-compose-强制重新编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-强制重新编译"}},[s._v("#")]),s._v(" docker-compose 强制重新编译")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker-compose up -d --no-deps --build <service_name>\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);