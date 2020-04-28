/*
 * @Author: miaoyu
 * @Date: 2020-04-18 10:07:45
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-28 15:48:22
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
import salesImg from './images/sales.png';
import preSalesImg from './images/pre_sales.png';

interface Props {}

const imgs: { [key: string]: string } = {
  '1': preSalesImg,
  '2': salesImg,
};

const App: React.FC<Props> = (props) => {
  const refChatRoomModal = React.useRef<RefChatRoomModal>(null);

  const config = React.useContext(configContext);

  const [data] = useSocket(config.webSocketUrl || '');

  const showMenu = data.listOfBusinessTypes.length > 1;

  const visible = data.listOfBusinessTypes.length > 0;

  function handleClick(key: string) {
    setCurrentBusinessType(key);
    refChatRoomModal?.current?.open(data.listOfBusinessTypes.find((item) => item.key === key)?.label || '');
  }

  const MenuItems = data.listOfBusinessTypes.map((item, index) => {
    return (
      <MenuItemS key={item.key}>
        <Img src={imgs[item.key] || imgs['1']}></Img>
        {item.label}
      </MenuItemS>
    );
  });

  return (
    <Box visible={visible} className="app">
      <Menu onClick={(param: ClickParam) => handleClick(param.key)} mode="vertical-right">
        <Menu.SubMenu
          title={
            <AvatarBox
              onClick={() => {
                if (!visible) return;
                const first = data.listOfBusinessTypes[0];
                handleClick(first.key);
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

const Img = styled.img`
  height: 20px;
  padding-right: 8px;
`;

const AvatarBox = styled.div`
  cursor: pointer;
`;

const Box = styled.div`
  display: ${(props: { visible: boolean }) => (props.visible ? 'block' : 'none')};
  position: relative;
  .ant-menu-submenu-arrow {
    display: none;
  }
  .ant-menu-submenu-title {
    padding: 0;
  }
  .ant-menu {
    background-color: transparent;
    border-color: transparent;
  }
`;
const MenuItemS = styled(Menu.Item)`
  display: flex;
  align-items: center;
`;

export default App;
