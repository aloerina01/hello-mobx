import React from 'react';
import { render } from 'react-dom';
import mobx from 'mobx';
// import Provider from 'mobx-react';
import HelloWorld from './components/HelloWorld';
import CountButton from './components/CountButton';
import MessageStore from './models/MessageStore';
import CountStore from './models/CountStore';

const messageStore = new MessageStore();
const countStore = new CountStore();

render(
  <div>
    <HelloWorld store={messageStore} />
    <CountButton store={countStore} />
  </div>,
  document.getElementById('app')
);