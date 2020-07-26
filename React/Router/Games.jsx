import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
/* import NumberBaseball from '../NumberBaseball/NumberBaseball';
import RSP from '../RSP/RCP';
import Lotto from '../Lotto/Hooks/Lotto'; */
import GameMatcher from './GameMatcher';

const Games = () => {
    return (
        <BrowserRouter>
            <div>
                <Link to="/game/number-baseball">NumberBaseball</Link>
          &nbsp;
          <Link to="/game/rock-scissors-paper">RSP</Link>
          &nbsp;
          <Link to="/game/lotto-generator">LOTTO</Link>
          &nbsp;
          <Link to="/game/index">GAMEMATCHER</Link>
            </div>
            <div>
                {/* 1. Switch 2. exact */}
                <Switch>
                    <Route exact path="/" render={(props) => <GameMatcher {...props} />} />
                    <Route path="/game/:name" render={(props) => <GameMatcher {...props} />} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default Games;

/* const Games = () => {
    return (
        <BrowserRouter>
            <div>
                <Link to="/number-baseball">NumberBaseball</Link>
            &nbsp;
            <Link to="/Rock-Scissors-Paper">RSP</Link>
            &nbsp;
            <Link to="/lotto-generator">LOTTO</Link>
            </div>
            <div>
                <Route path="/number-baseball" component={NumberBaseball} />
                <Route path="/Rock-Scissors-Paper" component={RSP} />
                <Route path="/lotto-generator" component={Lotto} />
            </div>
        </BrowserRouter>
    );
}; 



브라우저라우터를 사용해도 SE0을 위해 따로 세팅이 필요하긴 하다.
해시라우터는 실제 때


브라우저라우터
새로고침 때 안 뜸

*/