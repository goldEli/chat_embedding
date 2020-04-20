/*
 * @Author: miaoyu
 * @Date: 2020-04-20 11:29:30
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-20 13:38:46
 * @Description:
 */
import * as React from 'react';

import message from 'antd/es/message';
import 'antd/es/message/style/index.css';

enum TOPIC {
  /**
   * 业务分类列表
   */
  listOfBusinessTypes = 'listOfBusinessTypes',
  /**
   * 当前业务类型
   */
  currentBusinessType = 'currentBusinessType',
}

type ListOfBusinessTypes = {
  key: string;
  label: string;
}[];

type CurrentBusinessType = string;

enum RESPONSE_STATUS {
  error = 0,
  success = 1,
  warning = 2,
}

export type StateType = {
  [TOPIC.listOfBusinessTypes]: ListOfBusinessTypes;
};

export type ActionType = {
  type: TOPIC.listOfBusinessTypes;
  payload: ListOfBusinessTypes;
};
export type Dispatch = (value: ActionType) => void;

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case TOPIC.listOfBusinessTypes:
      return {
        ...state,
        listOfBusinessTypes: action.payload,
      };
    default:
      return state;
  }
};

const initData: StateType = {
  listOfBusinessTypes: [],
};

let socket: any;

const useMessage = (url: string): [StateType] => {
  const [data, dispatch] = React.useReducer(reducer, initData);

  React.useEffect(() => {
    socket = createSocket(url);
    socket.then((socket: any) => {
      socket.addEventListener('message', eventHandle, false);
    });
    return () => {
      socket?.then((socket: any) => {
        socket.removeEventListener('message', eventHandle, false);
      });
    };
  }, []);
  const eventHandle = (response: any) => {
    const d = JSON.parse(response.data);
    const status = d.status;
    const { data, topic } = d.data;

    if (status === void 0) {
      message.error('websocket error');
      return;
    }

    if (status === RESPONSE_STATUS.error) {
      message.error(d.message);
    }

    if (status === RESPONSE_STATUS.warning) {
      message.warning(d.message);
    }

    dispatch({ type: topic, payload: data });
  };

  return [data];
};

const sendToServer = (option: { topic: TOPIC; data: string }) => {
  socket.then((socket: any) => {
    socket.send(JSON.stringify(option));
  });
};

export const setCurrentBusinessType = (value: string) => {
  sendToServer({
    topic: TOPIC.currentBusinessType,
    data: value,
  });
};

function createSocket(url: string) {
  const u = `ws://${url.split('://')[1]}/business`;
  return new Promise((resolve, reject) => {
    const s = new WebSocket(u);
    s.onopen = function () {
      s.send('Hello Server!');
      resolve(s);
    };

    s.addEventListener('close', function () {
      console.log('websocket is closed');
    });
  });
}
export default useMessage;
