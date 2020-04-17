<!--
 * @Author: miaoyu
 * @Date: 2020-04-17 13:26:45
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-17 13:38:16
 * @Description: 
 -->

# chat_embedding 

聊天机器人嵌入脚本

## Getting started
#### install

```shell
npm install chat_embedding
```

#### how to use

```JavaScript
import ChatEmbedding from "chat_embedding"

// 初始化传入机器人服务地址
new chatE = ChatEmbedding("http://10.0.10.100:3000")

chatE.run()

```