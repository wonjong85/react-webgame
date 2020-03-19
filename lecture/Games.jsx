import React from 'react';
import { BrowserRouter, HashRouter, Link, Route } from 'react-router-dom';
import NumberBaseball from '../3.숫자야구/NumberBaseball';
import RSP from '../5.가위바위보/RSP';
import Lotto from './Lotto';
import GameMatcher from './GameMatcher';

const Games = () => {
  return (
    <BrowserRouter>
      <Link to={'/game/number-baseball?query=10&hello=ray&bye=react'}>숫자야구</Link>
      &nbsp;
      <Link to={'/game/rock-scissors-paper'}>가위바위보</Link>
      &nbsp;
      <Link to={'/game/lotto-generator'}>로또생성기</Link>
      &nbsp;
      <Link to={'/game/index'}>게임매처</Link>
      <div>
        {/*<Route path={'/number-baseball'} component={NumberBaseball}/>*/}
        {/*<Route path={'/rock-scissors-paper'} component={RSP}/>*/}
        {/*<Route path={'/lotto-generatorto-generator'} component={Lotto}/>*/}
        <Route path={'/game/:name'} component={GameMatcher}/>
      </div>
    </BrowserRouter>
  )
};

export default Games;