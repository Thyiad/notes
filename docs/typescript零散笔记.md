---
title: typescript零散笔记
date: 2021-05-31
lang: zh-cn
---

补一点零散记录

- baseUrl、rootDir
    前者是给查找模块用的，如果``import``时不是相对路径，会根据这个去找

    后者是源代码的根路径

- lib
    js接口定义，默认会根据``target``导入合适的api定义

- 从一个数组中取出类型：

    ``` ts
    export const list = ['a', 'b', 'c'] as const;
    export type ListTypes = typeof list[number]; 
    // as const + typeof xxx[number]
    ```

- 从一个已知组件中取出 ``props`` 类型定义

    ``` ts
    type MyProps = ComponentProps<typeof SomeComponent> & { extendTypeA: string };
    // 借助ComponentProps
    ```

- 根据泛型类型参数，设置具体字段类型：

    ``` ts
        type A = {
        a:string
        b:number
        }

    type Test<T, P extends keyof T = keyof T> = {
    title: string;
    field: P;
    format: (value: T[P]) => string,
    }
    ```
