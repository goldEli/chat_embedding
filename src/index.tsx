/*
 * @Author: miaoyu
 * @Date: 2020-04-17 13:40:42
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-18 11:39:17
 * @Description:
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

interface Params {
  serverUrl: string;
  position?: Position;
  style?: CSSStyleDeclaration;
}

interface Position {
  left?: string;
  bottom?: string;
  top?: string;
  right?: string;
}

const md = {
  run: (params: Params) => {
    console.log(params.serverUrl);

    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      createContainer(),
    );
  },
};

function createContainer(style?: CSSStyleDeclaration) {
  const container = document.createElement('div');

  if (!style) {
    container.style.position = 'fixed';
    container.style.left = '100px';
    container.style.bottom = '100px';
  } else {
    Object.keys(style).forEach((key: any) => {
      container.style[key] = style[key];
    });
  }

  document.body.appendChild(container);
  return container;
}

module.exports = md;
