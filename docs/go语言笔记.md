---
lang: zh-cn
---

### 编译
```bash
go run hello.go // 执行go语言代码
go build hello.go   // 编译go语言代码，生成二进制文件
./hello // 执行二进制文件
```

### 变量声明

变量
``` go
var s string = '1'
var s1, s2 string = '1', '2'
var i := 1

// 这种不带声明格式的只能在函数体中使用
a, b := 123, "123"
```

常量
``` go
const a int = 1
// 枚举
const (
    Unknown = 0
    Female = 1
    Male = 2
)
const (
    a = iota
    b = iota
    c = iota
)
const (
    a = iota
    b
    c
)
```

### 函数

``` go
func function_name (param) retun_type {
    return xxx
}
```

### 数组
``` go
var balance [10] float32
balance := [5]float32(1,2,3,4,5)
balance := [...]float32(1,2,3,4,5)
balance := [5]float32(1:2,3:6)
```

### 指针
``` go
var ptr *int    // 指针变量
var a int = 1
ptr = &a

// ptr存储的是变量地址，类似于：20818a220
// *ptr访问的是指针变量的值，这里是 a 的值：1
```

### 结构体
```go
type Book struct {
    title string
    author string
}
book := Book{"Go" "go"}
book1 := Book{title: "go", author: "go"}

// 访问方式一模一样，结构指针看起来很鸡肋
var bookPoint *Book = &book1
bookPoint.title
```

### 切片
其实就是动态数组，go中数组长度不可改变
```go
var slice1 []type = make([]type, len)
var s []int = []int{}
s:=[]int{1,2,3}
s := arr[startIndex:endIndex]
```

### 范围
``` go
nums := []int{1,2,3}
sum := 0
for _, num := range nums{
    sum += num
}

```

### 集合

``` go
// 创建集合
var m1 map[string]string
m1 = make(map[string]string)
m1 := map[string]string{"a": "a", "b": "b"}

m1["a"] = "a"
delete(m1, "a")

```

### 类型转换

``` go
float32(xxx)
```

### 接口
``` go
// 定义接口
type Phone interface {
	call()
}
// 定义struct
type NokiaPhone struct {
}
// 定义实现
func (nokiaPhone NokiaPhone) call() {
	fmt.Println("I am Nokia, I can call you!" + nokiaPhone.title)
}
```

### 错误处理

### 并发
``` go
// 使用关键字go调用一个函数，开启goroutine
// 其实就是开启一个新线程
go f("a")

// 声明通道
ch := make(chan int)

// 传递数据
ch <- v // 把v发送到通道ch
v := <-ch   // 从ch接收数据赋值给v

// 遍历通道数据
for i := range ch {
    fmt.Println(i)
}

// 发送端会一直阻塞直到发出数据
// 接收端会一直阻塞直到接收到数据
// 如何持续接收数据？如何像event的方式一样接收数据？
// 感觉没有async和await那样直观、方便
```

### 设置代理

``` bash
启用 Go Modules 功能
go env -w GO111MODULE=on

# 配置 GOPROXY 环境变量，以下三选一

# 1. 七牛 CDN
go env -w  GOPROXY=https://goproxy.cn,direct

# 2. 阿里云
go env -w GOPROXY=https://mirrors.aliyun.com/goproxy/,direct

# 3. 官方
go env -w  GOPROXY=https://goproxy.io,direct
```

### mod
``` bash
go mod init helloworld  // 初始化module
go mod tidy // 下载缺少的包
```
