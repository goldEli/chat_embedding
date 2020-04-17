/*
 * @Author: miaoyu
 * @Date: 2020-04-17 13:42:03
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-17 17:41:01
 * @Description: 
 */
const path = require('path');

module.exports = {
  // mode: "production",
  mode: 'development',
  entry: './src/index.ts',
  // devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
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
    library: 'chat_embedding',
    libraryTarget: 'umd',
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
  },
};