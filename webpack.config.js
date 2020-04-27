/*
 * @Author: miaoyu
 * @Date: 2020-04-17 13:42:03
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-27 17:01:51
 * @Description:
 */
const path = require('path');

module.exports = {
  mode: "production",
  // mode: 'development',
  entry: './src/index.tsx',
  // devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread'],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: "url-loader",
        options: {
          limit: Infinity // everything
        }
      },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: ['file-loader'],
      // },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    library: 'chatEmbedding',
    libraryTarget: 'umd',
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    globalObject: 'this'
  },
};
