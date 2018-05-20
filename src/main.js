import React from 'react';
import ReactDOM from 'react-dom';
import mobx from 'mobx';
// import Provider from 'mobx-react';
import HelloWorld from './HelloWorld';
import MessageStore from './MessageStore';

mobx.useStrict(true);

// const stores = {
//   messageStore: new MessageStore()
// }
const messageStore = new MessageStore();

ReactDOM.render(
  <HelloWorld message={messageStore.message} />,
  document.getElementById('app')
);