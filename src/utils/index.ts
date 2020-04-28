/*
 * @Author: miaoyu
 * @Date: 2020-04-28 13:01:11
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-28 14:55:17
 * @Description: 
 */

import {Position} from "../type"

export function createContainer(position: Position) {
  const container = document.createElement('div');

  container.style.position = 'fixed';
  container.style.zIndex = '99999';
  if (position.left) {
    container.style.left = position.left + 'px';
  }
  if (position.right) {
    container.style.right = position.right + 'px';
  }
  if (position.top) {
    container.style.top = position.top + 'px';
  }
  if (position.bottom) {
    container.style.bottom = position.bottom + 'px';
  }

  document.body.appendChild(container);
  return container;
}

export function loadScript(url: string) {
  const urlWithParams = new URL('getBusinessInfo/?func=chatEmbeddingQueryWebsocket', url).toString();

  const scriptTag = document.createElement('script');

  scriptTag.src = urlWithParams;

  // scriptTag.onload = callback

  document.body.appendChild(scriptTag);
}

export function createIframe(url: string, callback: () => void) {
  const ifrm = document.createElement('iframe');
  ifrm.style.display = 'none';
  ifrm.setAttribute('src', url);
  document.body.appendChild(ifrm); // to place at end of document
  ifrm.onload = () => {
    // periodical message sender
    const timer = setInterval( () => {
      ifrm.contentWindow?.postMessage(location.href, url); 
    }, 1000);

    function doStuff() {
      window.removeEventListener('message', doStuff);
      ifrm.remove();
      clearInterval(timer);
      callback();
    }

    window.addEventListener('message', doStuff);
  };
}