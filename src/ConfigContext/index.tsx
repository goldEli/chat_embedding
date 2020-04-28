/*
 * @Author: miaoyu
 * @Date: 2020-04-21 10:53:20
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-28 15:58:47
 * @Description: 
 */
import * as React from "react";

import {Config} from "../type"

type ConfigContextInterface = Config

export const defaultConfig:ConfigContextInterface = {
  serverUrl: "",
  position: {
    left: 100,
    bottom: 100,
  },
  modalWidth: 800,
  modalHeight: 500,
}

export const configContext = React.createContext<ConfigContextInterface>(defaultConfig);

export const ConfigContextProvider = configContext.Provider;

export const ConfigContextConsumer = configContext.Consumer;