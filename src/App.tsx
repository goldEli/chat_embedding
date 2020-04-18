/*
 * @Author: miaoyu
 * @Date: 2020-04-18 10:07:45
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-18 11:40:07
 * @Description:
 */
import * as React from 'react';
import styled from 'styled-components';
import { Avatar } from 'antd';
import 'antd/dist/antd.css';
import './app.css';
import robotImg from './images/robot.png';

interface Props {}
const App: React.FC<Props> = (props) => {
  return (
    <Box>
      <Avatar src={robotImg} />
    </Box>
  );
};

const Box = styled.div``;

export default App;
