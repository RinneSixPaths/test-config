import React from 'react';

import '../../style.css';
import helloStyles from './hello.css';

export default class Hello extends React.Component {
  render() {
    return (
      <h1 className={helloStyles.text}>Test</h1>
    );
  }
}
