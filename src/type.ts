/*
 * @Author: miaoyu
 * @Date: 2020-04-21 10:54:53
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-22 11:48:00
 * @Description:
 */

export interface Position {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}

export interface ConfigFromCustom {
  serverUrl: string;
  position?: Position;
  modalWidth?: number;
  modalHeight?: number;
}

export interface Config extends ConfigFromCustom {
  position: Position;
  modalWidth: number;
  modalHeight: number;
}


export interface ChatEmbedding {
  run: (config: Config) => void;
}

declare global {
  interface Window {
    /** documentation on foo */
    chatEmbedding: ChatEmbedding;
  }
}
