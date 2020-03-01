import React, { Component, PureComponent } from 'react';

class Try extends PureComponent {
  render() {
    console.log('Try 렌더링');
    const { tryInfo } = this.props;
    return (
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    );
  }
}

export default Try;
