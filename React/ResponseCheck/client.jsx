import React from 'react';
import ReactDom from 'react-dom';
import { hot } from'react-hot-loader/root';
//-> 구조분해문법 {hot}
//export되는 것이 객체나 배열이면 구조 분해 가능
import ResponseCheck from './ResponseCheck';

const Hot = hot(ResponseCheck);

ReactDom.render( <Hot />, document.querySelector('#root'));


//import vs require  살짝 호환,,?
// require 
// 노드의 모듈 시스템 