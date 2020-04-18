/*
 * @Author: miaoyu
 * @Date: 2020-04-18 12:28:21
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-18 14:37:57
 * @Description: chat room modal
 */

import * as React from 'react';
import { Modal } from 'antd';
import styled from 'styled-components';
import ModalDragTitle from '../../components/ModalDragTitle';

interface Props {
  src: string;
}

type Open = (title: string) => void;

export type RefChatRoomModal = { open: Open };

const ChatRoomModal = (props: Props, ref?: React.Ref<RefChatRoomModal>) => {
  const [visible, setVisible] = React.useState(false);

  const [title, setTitle] = React.useState('');

  const open: Open = (title) => {
    setTitle(title);
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

  const ModalTitle = <ModalDragTitle title={title || '标题'} />;

  return (
    <ModalStyled width={800} title={ModalTitle} visible={visible} onOk={handleOk} onCancel={handleCancel} footer={null}>
      <ChatRoomBox>
        <ChatRoom src={props.src} frameBorder="0" />
      </ChatRoomBox>
    </ModalStyled>
  );
};

const ModalStyled = styled(Modal)`
  .ant-modal-body {
    padding: 0;
  }
  .ant-modal-header {
    background-color: rgb(102, 147, 219);
  }
  .ant-modal-header span{
    color: #fff;
  }
  .ant-modal-close-x {
    color: #fff;
  }
`;

const ChatRoomBox = styled.div`
  width: 100%;
  height: 500px;
`;
const ChatRoom = styled.iframe`
  width: 100%;
  height: 100%;
`;

export default React.forwardRef(ChatRoomModal);
