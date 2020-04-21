/*
 * @Author: miaoyu
 * @Date: 2020-04-17 13:40:42
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-21 11:46:25
 * @Description:
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Config, Position, ConfigFromCustom } from './type';
import { ConfigContextProvider, defaultConfig } from './ConfigContext';

interface ChatEmbedding {
  run: (config: Config) => void;
}

const chatEmbedding: ChatEmbedding = {
  run: (config: ConfigFromCustom) => {
    const newConfg = { ...defaultConfig, ...config };
    console.log({defaultConfig, config, newConfg})
    ReactDOM.render(
      <React.StrictMode>
        <ConfigContextProvider value={newConfg}>
          <App />
        </ConfigContextProvider>
      </React.StrictMode>,
      createContainer(newConfg.position),
    );
  },
};

function createContainer(position: Position) {
  const container = document.createElement('div');

  container.style.position = 'fixed';
  if (position.left) {
    container.style.left = position.left + 'px';
  }
  if (position.right) {
    container.style.right = position.right + 'px';
  }
  if (position.top) {
    container.style.top = position.top + 'px';
  }
  if (position.bottom) {
    container.style.bottom = position.bottom + 'px';
  }

  document.body.appendChild(container);
  return container;
}

export default chatEmbedding;
