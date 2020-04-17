/*
 * @Author: miaoyu
 * @Date: 2020-04-17 13:42:03
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-17 14:42:25
 * @Description: 
 */
const path = require('path');

module.exports = {
  // mode: "production",
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
  },
};