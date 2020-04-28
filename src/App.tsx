/*
 * @Author: miaoyu
 * @Date: 2020-04-18 10:07:45
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-28 14:54:41
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
import { configContext } from './ConfigContext';

interface Props {}

const App: React.FC<Props> = (props) => {
  const refChatRoomModal = React.useRef<RefChatRoomModal>(null);

  const config = React.useContext(configContext);

  const [data] = useSocket(config.webSocketUrl || '');

  const showMenu = data.listOfBusinessTypes.length > 1;

  const visible = data.listOfBusinessTypes.length > 0;

  function handleClick(key: string, title: string) {
    setCurrentBusinessType(key);
    refChatRoomModal?.current?.open(title);
  }

  const MenuItems = data.listOfBusinessTypes.map((item) => {
    return <Menu.Item key={item.key}>{item.label}</Menu.Item>;
  });

  return (
    <Box visible={visible} className="app">
      <Menu onClick={(param: ClickParam) => handleClick(param.key, param.item.props.children)} mode="vertical-right">
        <Menu.SubMenu
          title={
            <AvatarBox
              onClick={() => {
                if (!visible) return;
                const first = data.listOfBusinessTypes[0];
                handleClick(first.key, first.label);
              }}
            >
              <Avatar src={robotImg} />
            </AvatarBox>
          }
        >
          {showMenu && MenuItems}
        </Menu.SubMenu>
      </Menu>
      <ChatRoomModal src={config.serverUrl} ref={refChatRoomModal} />
    </Box>
  );
};

const AvatarBox = styled.div`
  cursor: pointer;
`;

const Box = styled.div`
  display: ${(props: { visible: boolean }) => (props.visible ? 'block' : 'none')};
  position: relative;
  .ant-menu-submenu-arrow{
    display: none;
  };
  .ant-menu-submenu-title{
    padding: 0;
  };
  .ant-menu{
    background-color: transparent;
    border-color: transparent;
  };
`;

export default App;
