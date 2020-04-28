/*
 * @Author: miaoyu
 * @Date: 2020-04-18 14:00:28
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-28 16:11:23
 * @Description: modal drag
 */

import * as React from 'react';
import DragM from 'dragm';
import styled from 'styled-components';
import { configContext } from '../../ConfigContext';

interface Props {
  title: string;
}

let modalDom: any = null;

const ModalDragTitle: React.FC<Props> = (props) => {
  const config = React.useContext(configContext);

  React.useEffect(() => {
    modalDom = document.getElementsByClassName(
      'ant-modal-wrap', // modal的class是ant-modal-wrap
    )[0];
  }, []);

  function updateTransform(transformStr: any) {
    modalDom.style.transform = transformStr;
  }
  return (
    <DragM updateTransform={updateTransform}>
      <div>
        <Title>
          {config.logoSrc && <Img className="chat-robot_logo" src={config.logoSrc} />}
          {config.logoSrc && <Spacer />}
          <span>{props.title}</span>
        </Title>
      </div>
    </DragM>
  );
};

const Spacer = styled.div`
  width: 8px;
`;

const Title = styled.div`
  display: flex;
  algin-item: center;
`;
const Img = styled.img`
  height: 22px;
`;

export default ModalDragTitle;
