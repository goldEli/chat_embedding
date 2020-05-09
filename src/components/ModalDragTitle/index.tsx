/*
 * @Author: miaoyu
 * @Date: 2020-04-18 14:00:28
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-05-09 14:32:29
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
          <TitleText>{props.title}</TitleText>
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
const TitleText = styled.span`
  font-size: 14px;
`;
const Img = styled.img`
  height: 22px;
`;

export default ModalDragTitle;
