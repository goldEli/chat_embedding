# chat_embedding 

> 支持 Typescript

聊天机器人嵌入脚本

 [![NPM version][npm-image]][npm-url] 


[npm-image]: https://img.shields.io/npm/v/chat_embedding.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/chat_embedding


## Getting started

#### Using npm or yarn

```shell
$ npm install chat_embedding
```

```Javascript
import chatEmbedding from "chat_embedding"

chatEmbedding.run({
  serverUrl: "http://10.0.10.100:8237",
})

```

#### Import in Browser

```Javascript
// 聊天机器人服务地址
var serverUrl = "http://10.0.10.100:8237"
// 脚本文件地址
var jsFileUrl = serverUrl+"/static/js/chat_embedding.js"

var scriptTag = document.createElement('script');

scriptTag.src = jsFileUrl;

scriptTag.onload = function () {
  chatEmbedding.default.run({serverUrl})
}

document.body.appendChild(scriptTag);
```

### Parameters

| Property    | Description        | Required | Default                | Type                                                    |
|-------------|--------------------|----------|------------------------|---------------------------------------------------------|
| serverUrl   | 聊天机器人服务地址 | 是       |                        | string                                                  |
| position    | 聊天机器人位置     | 否       | {left:100,bottom:100,} | {left?:number,bottom?:number,right?:number,top?:number} |
| modalWidth  | 聊天窗口宽         | 否       | 800                    | number                                                  |
| modalHeight | 聊天窗口高         | 否       | 500                    | number                                                  |
| logoSrc     | 聊天窗口 logo 地址 | 否       |                        | string                                                  |