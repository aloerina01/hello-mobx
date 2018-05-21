import React from 'react';
import { observer } from 'mobx-react';

export default observer(({store}) => <h1>Hello {store.message} !!</h1>);