import { all, fork, takeLatest, call, put } from 'redux-saga/effects'
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../reducers/user';

/* 
redux-saga
redux에서 LOG_IN이라는 액션이 실행되는지 
     대기하고 있다가 
        실행되면 
           |
   비동기 동작 실행 
      /        \
  SUCCESS     FAILURE
*/

fuction loginAPI() {
/* 서버에 요청을 보내는 부분 */
};

fuction* login() {
    try{
        yield call(loginAPI); 
        yield put({ //put은 dispatch 동일
            type : LOG_IN_SUCCESS,
        });
    } catch (e) { //loginAPI 실패
        console.erroe(e);
        yield put( {
            type : LOG_IN_FAILURE,
        });
    }
};

fuction* watchLogin() {
    yield takeLatest(Log_IN, login);
};

export default function* userSaga() {
    yield all([
        fork(watchLogin),
    ]);
}