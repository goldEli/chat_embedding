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
  // 聊天机器人服务地址
  serverUrl: "http://10.0.10.100:8237",
  // 自定义机器人出现的位置
  position: {
    left: 100,
    bottom: 100,
  },
  // 聊天窗口大小
  modalWidth: 800,
  modalHeight: 500,
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
  chatEmbedding.default.run({
    // 聊天机器人服务地址
    serverUrl,
    // 自定义机器人出现的位置
    position: {
      left: 100,
      bottom: 100,
    },
    // 聊天窗口大小
    modalWidth: 800,
    modalHeight: 500,
  })
}

document.body.appendChild(scriptTag);
```

### Parameters

```Javascript


interface Parameters {
  /**
   * 聊天机器人服务地址 
  */
  serverUrl: string;
  /**
   * 聊天机器人位置 
  */
  position?: Position;
  /**
   * 聊天窗口宽 
  */
  modalWidth?: number;
  /**
   * 聊天窗口高 
  */
  modalHeight?: number;
  /**
   * 聊天窗口 logo 地址 
  */
  logoSrc?: string;
}
```