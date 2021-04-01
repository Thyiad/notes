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
a, b := 123, '123'
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
var m1 map[string]string

```

### 类型转换

``` go
float32(xxx)
``·

### 接口
好怪异的接口

### 设置代理
```
# 启用 Go Modules 功能
go env -w GO111MODULE=on

# 配置 GOPROXY 环境变量，以下三选一

# 1. 七牛 CDN
go env -w  GOPROXY=https://goproxy.cn,direct

# 2. 阿里云
go env -w GOPROXY=https://mirrors.aliyun.com/goproxy/,direct

# 3. 官方
go env -w  GOPROXY=https://goproxy.io,direct
```