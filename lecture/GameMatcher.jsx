import React, { Component } from 'react';
import NumberBaseball from '../3.숫자야구/NumberBaseball';
import RSP from '../5.가위바위보/RSP';
import Lotto from './Lotto';

class GameMatcher extends Component {
  render() {
    let urlSearchParams = new URLSearchParams(this.props.location.search.slice(1));
    console.log(urlSearchParams.get('hello'));
    switch (this.props.match.params.name) {
      case 'number-baseball':
        return <NumberBaseball/>;
      case 'rock-scissors-paper':
        return <RSP/>;
      case 'lotto-generator':
        return <Lotto/>;
      default:
        return (
          <>
            일치하는 게임이 없습니다.
          </>
        );
    }
  }
}

export default GameMatcher;