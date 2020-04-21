/*
 * @Author: miaoyu
 * @Date: 2020-04-21 10:54:53
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-21 11:36:26
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
