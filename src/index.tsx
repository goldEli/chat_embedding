/*
 * @Author: miaoyu
 * @Date: 2020-04-17 13:40:42
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-25 18:44:20
 * @Description:
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Position, ConfigFromCustom, ChatEmbedding } from './type';
import { ConfigContextProvider, defaultConfig } from './ConfigContext';

const chatEmbedding: ChatEmbedding = {
  run: (config: ConfigFromCustom) => {
    const newConfg = { ...defaultConfig, ...config };
    console.log({ defaultConfig, config, newConfg });
    loadScript(config.serverUrl);
    function chatEmbeddingQueryWebsocket(webSocketUrl: string) {
      ReactDOM.render(
        <React.StrictMode>
          <ConfigContextProvider value={{...newConfg, webSocketUrl}}>
            <App />
          </ConfigContextProvider>
        </React.StrictMode>,
        createContainer(newConfg.position),
      );
    }
    window.chatEmbeddingQueryWebsocket = chatEmbeddingQueryWebsocket
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

function loadScript(url: string) {
  const urlWithParams = url + '/?func=chatEmbeddingQueryWebsocket';

  const scriptTag = document.createElement('script');

  scriptTag.src = urlWithParams;

  // scriptTag.onload = callback

  document.body.appendChild(scriptTag);
}

window.chatEmbedding = chatEmbedding;

export default chatEmbedding;
