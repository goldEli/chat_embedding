/*
 * @Author: miaoyu
 * @Date: 2020-04-17 13:40:42
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-17 17:21:15
 * @Description:
 */

// exports.hello = function() {
//   console.log('hello world!')
// }

console.log("引入成功")
const md = {
  hello: (value: string) => console.log(value)
}

console.log(md)

module.exports = md 