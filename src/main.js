import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react'
import HelloWorld from './components/HelloWorld';
import CountButton from './components/CountButton';
import MessageStore from './models/MessageStore';
import CountStore from './models/CountStore';
import ContentList from './models/ContentList';
import ContentListView from './components/ContentListView';

const stores = {
  messageStore: new MessageStore(),
  countStore: new CountStore(),
  contentList: new ContentList()
}

render(
  <Provider {...stores} >
    <div>
      <HelloWorld />
      <CountButton />
      <ContentListView />
    </div>
  </Provider>,
  document.getElementById('app')
);


// 理想のmain.jsとは？

// Storeのインスタンス(Singleton)をつくる
// const stores = createStoresInstance();

// 最初のusecaseを呼び出す
// usecase.init();

// レンダリング
// render(
//   <Provider {...stores}><div>{/** */}</div></Provider>,
//   document.getElementById('app')
// );