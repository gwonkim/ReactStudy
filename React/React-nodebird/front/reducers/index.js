/* 
하나로 묶어주는 존재 
root 
*/

import { combineReducers } from 'redux';
import user from './user';
import post from './post';

const rootReducer = combineReducers({
  user,
  post,
});

export default rootReducer;