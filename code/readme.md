采取flask的框架

# 目录说明
static：存放css和js

templates：存放html


# API

采用json格式交互
```
{
    'type':'login',
    'content':{
        //根据type不同，内容不同
    }
}

```
## 前端发给后端
|名称|描述|
|:---|:---|
|login|用户登录|
|logout|用户退出|
|send|发送消息|
### login