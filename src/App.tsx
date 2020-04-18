/*
 * @Author: miaoyu
 * @Date: 2020-04-18 10:07:45
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-18 13:45:02
 * @Description:
 */
import * as React from 'react';
import styled from 'styled-components';
import { Avatar, Menu, Tooltip } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import 'antd/dist/antd.css';
import './app.css';
import robotImg from './images/robot.png';
import ChatRoomModal, { RefChatRoomModal } from './containers/ChatRoomModal';

interface Props {
  src: string
}

const menuData = [
  { key: 'mail', label: '售前咨询' },
  { key: 'app', label: '售后咨询' },
];

const App: React.FC<Props> = (props) => {
  const refChatRoomModal = React.useRef<RefChatRoomModal>(null);

  function handleClick(param: ClickParam) {
    console.log(param);
    refChatRoomModal?.current?.open(param.item.props.children);
  }

  const MenuItems = menuData.map((item) => {
    return <Menu.Item key={item.key}>{item.label}</Menu.Item>;
  });

  return (
    <Box>
      <Avatar src={robotImg} />
      <MenuBox>
        <Menu onClick={handleClick} mode="vertical-right">
          {MenuItems}
        </Menu>
      </MenuBox>
      <ChatRoomModal src={props.src} ref={refChatRoomModal} />
    </Box>
  );
};

const MenuBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 32px;
  padding-left: 8px;
  display: none;
  cursor: pointer;
`;
const Box = styled.div`
  position: relative;
  &:hover ${MenuBox} {
    display: block;
  }
`;

export default App;
