import React from 'react';
import ReactDom from 'react-dom';
import { hot } from'react-hot-loader/root';
import RCP from './RCP1234';

const Hot = hot(RCP);

ReactDom.render( <Hot />, document.querySelector('#root'));
