/*
 * @Author: miaoyu
 * @Date: 2020-04-17 13:40:42
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-28 13:07:25
 * @Description:
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { ConfigFromCustom, ChatEmbedding } from './type';
import { ConfigContextProvider, defaultConfig } from './ConfigContext';
import { createContainer, createIframe, loadScript } from './utils';

const run = (config: ConfigFromCustom) => {
  const newConfg = { ...defaultConfig, ...config };
  console.log({ defaultConfig, config, newConfg });

  // 获取权限
  createIframe(config.serverUrl, () => {
    loadScript(config.serverUrl);
    window.chatEmbeddingQueryWebsocket = chatEmbeddingQueryWebsocket;
  });

  function chatEmbeddingQueryWebsocket(webSocketUrl: string) {
    ReactDOM.render(
      <React.StrictMode>
        <ConfigContextProvider value={{ ...newConfg, webSocketUrl }}>
          <App />
        </ConfigContextProvider>
      </React.StrictMode>,
      createContainer(newConfg.position),
    );
  }
};

const chatEmbedding: ChatEmbedding = {
  run,
};

// window.chatEmbedding = chatEmbedding;

export default chatEmbedding;
