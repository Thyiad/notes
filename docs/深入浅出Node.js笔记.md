---
title: 深入浅出Node.js笔记
lang: zh-cn
---

### node简介

介绍了nodejs的起源、特点以及应用场景

### 模块机制

- nodejs中的模块机制叫做 commonjs
    > require, module.exports = {}

- 模块分为两种：核心模块、文件模块

- 核心模块
    - C/C++编写，放在源码仓库的的src目录下
    - javascript编写，放在源码仓库的lib目录下
    > C/C++编写核心模块，javascript负责包装和向外导出
    > 纯 C/C++编写的，被称为内建模块
    > javascript 核心模块：js文件被v8的js2c.py转换成C++数组，使用时直接从内存中加载
    > 由里到外：内建模块>核心模块>文件模块

### 异步I/O

其他语言中主要是同步I/O，在node中异步I/O为其主要变成方式和设计理念

有4种：异步、同步、阻塞、非阻塞，操作系统只有阻塞I/O和非阻塞I/O
> 非/阻塞I/O 还是通过轮询，查询状态，跟异步I/O其实是两回事，很容易混淆
轮询技术的衍变历程：
- read
    > 重复检查I/O状态
- select
    > 对文件描述符上的事件状态进行判断
- poll
    > 在select的基础上改进，采用链表存储，避免数组长度的问题
- epoll
    > 最高效，真正的事件通知、执行回调

大概过程：异步调用 -> 线程池执行 -> 事件循环（通知循环中的IO观察者）

非IO的异步api：
- setTimeout
- setInterval
    > 这两者无需IO线程池的参与，在tick中判断是否需要执行
    > 插入到定时器观察者的一个红黑树中
- process.nextTick
    > 插入队列，下一轮tick中执行
- setImmediate
    > 优先级低于nextTick，nextTick属于idle观察者，setImmediate属于check观察者

### 异步编程

sync async解决了回调地狱
如果调用IO特别多，为了防止并发过多，还是需要自行设计队列来控制并发数

### 内存控制

- 内存使用情况：
``` bash
node
process.memoryUsage()
```
``` javascript
{
  rss: 26009600,
  heapTotal: 5222400,   // 申请到的堆内存
  heapUsed: 2962952,    // 已使用的内存
  external: 1526857,
  arrayBuffers: 9399
}
```

- 内存对象被分为新生代和老生代两代
> 与java, .net很像

- 新生代采用scavenge算法（具体实现中采用Cheney算法）
> scavenge: 内存一分为二，从from里把活的复制到to，然后角色翻转（from释放空间变成to，to变成from）

- 老生代采用Mark-Sweep & Mark-Compact算法
> Mark-Sweep：引用标记，给活着的对象打上标记，清理未标记的对象
> Mark-Sweep 会导致内存碎片（内存不连续）
> Mark-Compact 会在清理后把活着的对象移动，使得内存连续

- 增量标记、延迟清理、增量式整理

### 理解Buffer

- 处理字节所用
- 内存分配在C++层面，并不在V8的堆内存中
- slab 分配机制
- Node中以8KB为界限来区分Buffer是大对象还是小对象


### 网络编程

介绍了TCP、Http、WebSocket等原生模块

### 构建Web应用
从基础模块中搭建web应用

### 玩转进程

Cluster

### 测试

单元测试、性能测试

### 产品化

工程化、部署、性能、日志、监控、稳定性、异构并存