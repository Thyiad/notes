---
title: rust程序设计语言笔记
lang: zh-cn
---

### 安装

mac:
```bash
$ curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh

```
windows:
https://www.rust-lang.org/install.html 下载安装

rust命令：
```bash
rustup update   # 更新
rustup self uninstall   # 卸载
rustc --version # 当前版本
```

### 编译运行
```bash
rustc main.rs   # 编译成2进制可执行文件（名字为main，windows上为main.exe）
```

### cargo
```bash
cargo --version
cargo build # 编译
cargo build --release   # release构建
cargo run   # 编译并运行
cargo check # 仅检查，不编译
cargo update    # 更新依赖，仅小版本更新
```

### 语法

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
