/*
 * @Author: miaoyu
 * @Date: 2020-04-18 12:28:21
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-18 13:18:08
 * @Description: chat room modal
 */

import * as React from 'react';
import { Modal, Button } from 'antd';

interface Props {}

type Open = (title: string) => void;

export type RefChatRoomModal = { open: Open };

const ChatRoomModal = (props: Props, ref?: React.Ref<RefChatRoomModal>) => {
  const [visible, setVisible] = React.useState(false);

  const [title, setTitle] = React.useState("")

  const open: Open = (title) => {
    setTitle(title)
    setVisible(true);
  };

  React.useImperativeHandle(ref, () => ({
    open,
  }));

  function handleOk() {
    setVisible(false);
  }

  function handleCancel() {
    setVisible(false);
  }

  return (
    <Modal title={title} visible={visible} onOk={handleOk} onCancel={handleCancel}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default React.forwardRef(ChatRoomModal);
