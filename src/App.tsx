/*
 * @Author: miaoyu
 * @Date: 2020-04-18 10:07:45
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-05-09 14:27:36
 * @Description:
 */
import * as React from 'react';
import styled from 'styled-components';
import Avatar from 'antd/es/avatar';
// import 'antd/es/avatar/style/css';
import "antd/es/avatar/style/index.css"
import Menu from 'antd/es/menu';
// import 'antd/es/menu/style/css';
import "antd/es/menu/style/index.css"
import "antd/es/tooltip/style/index.css"
import { ClickParam } from 'antd/lib/menu';
// import 'antd/dist/antd.css';
// import './app.css';
import robotImg from './images/robot.png';
import ChatRoomModal, { RefChatRoomModal } from './containers/ChatRoomModal';
import useSocket, { setCurrentBusinessType } from './hooks/useSocket';
import { configContext } from './ConfigContext';
import salesImg from './images/sales.png';
import preSalesImg from './images/pre_sales.png';
import "./index.scss"

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

  const robotBtn = (
    <AvatarBox
      onClick={() => {
        if (!visible) return;
        const first = data.listOfBusinessTypes[0];
        handleClick(first.key);
      }}
    >
      <Avatar src={robotImg} />
    </AvatarBox>
  );

  return (
    <Box visible={visible} className="chat-robot-embedding">
      {showMenu ? (
        <Menu onClick={(param: ClickParam) => handleClick(param.key)} mode="vertical-right">
          <Menu.SubMenu title={robotBtn}>{MenuItems}</Menu.SubMenu>
        </Menu>
      ) : (
        robotBtn
      )}
      <ChatRoomModal src={config.serverUrl} ref={refChatRoomModal} />
    </Box>
  );
};


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

const Img = styled.img`
  // height: 20px;
  padding-right: 8px;
`;

const AvatarBox = styled.div`
  cursor: pointer;
`;

const MenuItemS = styled(Menu.Item)`
  display: flex;
  align-items: center;
`;

export default App;
