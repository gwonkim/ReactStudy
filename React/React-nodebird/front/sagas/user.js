import { all, fork, takeLatest, call, put, take, delay, takeEvery } from 'redux-saga/effects'
import axios from 'axios';
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT, LOG_IN_REQUEST } from '../reducers/user';

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

function loginAPI() {
    /* 서버에 요청을 보내는 부분 */
    return axios.post('/login');
};

function* login() {
    try {

        yield call(loginAPI);  // 서버의 요청을 받아야 put 
        yield put({ //put은 dispatch 동일
            type: LOG_IN_SUCCESS,
        });
    } catch (e) { //loginAPI 실패
        console.erroe(e);
        yield put({
            type: LOG_IN_FAILURE,
        });
    }
};

/*  while 
function* watchLogin() {
    while (true) {
        yield take(LOG_IN);
        yield delay(2000);
        yield put({
            type: LOG_IN_SUCCESS,
        });
    }
} */

/* takeEvery */
function* watchLogin() {
    yield takeEvery(LOG_IN, login);
        
        /* function*() {
        yield take(LOG_IN);
        yield delay(2000);
        yield put({
            type: LOG_IN_SUCCESS,
        }); 
    }*/
}


/* ---------------------------------------------------------- */
/* 이 3가지가 짝을 이룸 */

function signAPI() {
    //서버에 요청을 보내는 부분
    return axios.post('/login');
}

function* signUp() {
    try {

        yield call(signAPI);  // 서버의 요청을 받아야 put 
        yield put({ //put은 dispatch 동일
            type: SIGN_UP_SUCCESS,
        });
    } catch (e) { //signAPI 실패
        console.erroe(e);
        yield put({
            type: SIGN_UP_FAILURE,
        });
    }
};

function* watchSignUp() {
    yield takeEvery(SIGN_UP_REQUEST, signUp);
}

/* ---------------------------------------------------------- */




/* function* helloSaga() {
    yield takeLatest(HELLO_SAGA, hello);
} */

export default function* userSaga() {
    yield all([
        /* 함수호출 3개 : 기본, call, fork */
        fork(watchLogin),
        fork(watchSignUp),
    ]);
}