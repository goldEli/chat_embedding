/*
 * @Author: miaoyu
 * @Date: 2020-04-18 10:07:45
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-20 12:20:33
 * @Description:
 */
import * as React from 'react';
import styled from 'styled-components';
// import { Avatar, Menu } from 'antd';
import Avatar from 'antd/es/avatar';
import 'antd/es/avatar/style/index.css';
import Menu from 'antd/es/menu';
import 'antd/es/menu/style/index.css';
import { ClickParam } from 'antd/lib/menu';
// import 'antd/dist/antd.css';
import './app.css';
import robotImg from './images/robot.png';
import ChatRoomModal, { RefChatRoomModal } from './containers/ChatRoomModal';
import useSocket, { setCurrentBusinessType } from './hooks/useSocket';

interface Props {
  url: string;
}

const App: React.FC<Props> = (props) => {
  const refChatRoomModal = React.useRef<RefChatRoomModal>(null);
  const [data] = useSocket(props.url);

  function handleClick(param: ClickParam) {
    setCurrentBusinessType(param.key);
    refChatRoomModal?.current?.open(param.item.props.children);
  }

  const MenuItems = data.listOfBusinessTypes.map((item) => {
    return <Menu.Item key={item.key}>{item.label}</Menu.Item>;
  });

  const visible = data.listOfBusinessTypes.length > 0;

  return (
    <Box visible={visible}>
      <Avatar src={robotImg} />
      <MenuBox>
        <Menu onClick={handleClick} mode="vertical-right">
          {MenuItems}
        </Menu>
      </MenuBox>
      <ChatRoomModal src={props.url} ref={refChatRoomModal} />
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
  display: ${(props: { visible: boolean }) => {
    return visible ? 'block' : 'none';
  }}
  position: relative;
  &:hover ${MenuBox} {
    display: block;
  }
`;

export default App;
