// @flow

import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('countStore')
@observer
export default class CountButton extends React.Component<{countStore?: CountStore}> {
    render() {
        return (
        <div>
            <button type="text" onClick={() => this.props.countStore.increment()}>countUp</button>
            <h3>count: {this.props.countStore.count}</h3>
        </div>);
    }
}