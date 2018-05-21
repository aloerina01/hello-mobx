import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class CountButton extends React.Component {
    render() {
        return (
        <div>
            <button type="text" onClick={() => this.props.store.increment()}>countUp</button>
            <h3>count: {this.props.store.count}</h3>
        </div>);
    }
}