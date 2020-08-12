import { all, call } from 'redux-saga/effects';
import user from './user';
import post from './post'

/* 
제너레이터(*)
함수 실행을 중간에 멈출 수 있고 
원할 때 재개할 수 있음 
*/
export default function* rootSaga() {
    yield all([
        call(user),
        call(post),
    ]);
}

