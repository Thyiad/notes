---
title: chrome-devtools
lang: zh-cn
---

- 切换设备时，可以设置定位，可以设置传感器
- 悬浮在class上，可以查看作用到的元素节点
- dom节点也可以添加调试断点
- js代码行数上可以右键添加自定义断点
- 可以使用debug(函数名)，来给访问范围内的函数添加断点，会加到函数的第一行
- xhr可以根据url添加断点
- network可以过滤：
    > 普通字符串
    > 正则
    > 关键字：domain、has-response-header、is、larger-than、method、mime-type、mixed-content、scheme、set-cookie-domain、set-cookie-name、set-cookie-value、status-code
    > is:running 可以查找websocket资源
