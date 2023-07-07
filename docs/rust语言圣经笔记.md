---
title: rust语言圣经笔记
lang: zh-cn
---

# 安装

mac:
```bash
$ curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh  # 安装完之后需要按提示配置环境变量

```
windows:
https://www.rust-lang.org/install.html 下载安装

rust命令：
```bash
rustup update   # 更新
rustup self uninstall   # 卸载
rustc --version # 当前版本
```

# 镜像加速
使用字节跳动提供的镜像：

crates.io镜像
```
[source.crates-io]
# To use sparse index, change 'rsproxy' to 'rsproxy-sparse'
replace-with = 'rsproxy'

[source.rsproxy]
registry = "https://rsproxy.cn/crates.io-index"
[source.rsproxy-sparse]
registry = "sparse+https://rsproxy.cn/index/"

[registries.rsproxy]
index = "https://rsproxy.cn/crates.io-index"

[net]
git-fetch-with-cli = true
```

如果卡住：
> 强行停止正在构建的进程，例如杀掉 IDE 使用的 rust-analyzer 插件进程，然后删除 $HOME/.cargo/.package_cache 目录

rustup镜像

# 编译运行
```bash
rustc main.rs   # 编译成2进制可执行文件（名字为main，windows上为main.exe）
```

# cargo
```bash
cargo --version
cargo build # 编译
cargo build --release   # release构建
cargo run   # 编译并运行
cargo check # 仅检查，不编译
cargo update    # 更新依赖，仅小版本更新
```

# 语法

导入库
```rust
use std::io;
```

创建变量
```rust
let mut guess = String::new();  // 双冒号：静态函数。变量默认不可变，mut代表变量可变
```

传参
```rust
io::stdin().read_line(&mut guess).expect("Failed to read line");    // &表示该参数是一个引用，mut代表该参数可变
```
