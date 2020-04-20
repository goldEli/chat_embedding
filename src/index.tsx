/*
 * @Author: miaoyu
 * @Date: 2020-04-17 13:40:42
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-20 11:24:15
 * @Description:
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

interface Position {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}

interface Params {
  serverUrl: string;
  position?: Position;
}

interface ChatEmbedding {
  run: (params: Params) => void;
}

const chatEmbedding: ChatEmbedding = {
  run: (params: Params) => {
    ReactDOM.render(
      <React.StrictMode>
        <App src={params.serverUrl} />
      </React.StrictMode>,
      createContainer(params.position),
    );
  },
};

function createContainer(position?: Position) {
  const container = document.createElement('div');

  container.style.position = 'fixed';
  if (!position) {
    container.style.left = '100px';
    container.style.bottom = '100px';
  } else {
    if (position.left) {
      container.style.left = position.left;
    }
    if (position.right) {
      container.style.right = position.right;
    }
    if (position.top) {
      container.style.top = position.top;
    }
    if (position.bottom) {
      container.style.bottom = position.bottom;
    }
  }

  document.body.appendChild(container);
  return container;
}

export default chatEmbedding;
