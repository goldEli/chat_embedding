/*
 * @Author: miaoyu
 * @Date: 2020-04-21 10:54:53
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-28 16:19:29
 * @Description:
 */

export interface Position {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}

export interface ConfigFromCustom {
  /**
   * 聊天机器人服务地址
   */
  serverUrl: string;
  /**
   * 聊天机器人位置
   */
  position?: Position;
  /**
   * 聊天窗口宽
   */
  modalWidth?: number;
  /**
   * 聊天窗口高
   */
  modalHeight?: number;
  /**
   * 聊天窗口 logo 地址
   */
  logoSrc?: string;
}

export interface Config extends ConfigFromCustom {
  position: Position;
  modalWidth: number;
  modalHeight: number;
  webSocketUrl?: string;
}

export interface ChatEmbedding {
  run: (config: Config) => void;
}

declare global {
  interface Window {
    /** documentation on foo */
    chatEmbedding: ChatEmbedding;
    chatEmbeddingQueryWebsocket: (webSocketUrl: string) => void;
    define: any;
  }
}
