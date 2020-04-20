/*
 * @Author: miaoyu
 * @Date: 2020-04-18 14:00:28
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-20 11:17:09
 * @Description: modal drag
 */

import * as React from 'react';
import DragM from 'dragm';

interface Props {
  title: string;
}

let modalDom: any = null;

const ModalDragTitle: React.FC<Props> = (props) => {
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
        <span>{props.title}</span>
      </div>
    </DragM>
  );
};

export default ModalDragTitle;
