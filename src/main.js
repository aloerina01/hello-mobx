import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import HelloWorld from './components/HelloWorld';
import CountButton from './components/CountButton';
import MessageStore from './models/MessageStore';
import CountStore from './models/CountStore';

const stores = {
  messageStore: new MessageStore(),
  countStore: new CountStore()
}

console.log(...stores);

render(
  <Provider messageStore={stores.messageStore} countStore={stores.countStore} >
    <HelloWorld />
  </Provider>,
  document.getElementById('app')
);