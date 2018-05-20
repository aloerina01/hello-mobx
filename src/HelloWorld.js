import React from 'react';
import { observer } from 'mobx';

// functional

// export default ({message}) => {
//   <h1>Hello {message} !!</h1>
// }

@observer
export default class HelloWorld extends React.Component {
  render() {
    return <h1>Hello {this.props.message} !!</h1>
  }
} 