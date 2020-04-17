/*
 * @Author: miaoyu
 * @Date: 2020-04-17 13:42:03
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-17 13:44:29
 * @Description: 
 */
const path = require('path');

module.exports = {
  mode: "production",
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};