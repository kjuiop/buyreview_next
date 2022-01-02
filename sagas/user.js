import { all, fork, takeLatest, delay, put, call } from "redux-saga/effects";
import axios from "axios";
import { 
    LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, 
    LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
    SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, 
} from '../reducers/user';


function loginAPI(data) {
    return axios.post('/api/login', data);
}

// put은 dispatch 역할
// CALL 은 비동기 함수 호출  -> loginApi 가 return 할때까지 기다린 이후 실행  (then)
// FORK 는 동기 함수 호출  -> 그냥 실행
// yield 는 await 함수랑 비슷한 역할
function* logIn(action) {

    try {
        console.log("SAGA LOGIN", action);
        // const result = yield call(loginAPI, action.data);
        // yield delay(1000);
        yield put({
            type: LOG_IN_SUCCESS,
            data: action.data
        });
    } catch (err) {
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        });
    }

}


function logOutAPI() {
    return axios.post('/api/logout');
}

function* logOut() {

    try {
        const result = yield call(logOutAPI);
        yield put({
            type: LOG_OUT_SUCCESS,
            data: result.data
        });
    } catch (err) {
        yield put({
            type: LOG_OUT_FAILURE,
            data: err.response.data,
        });
    }

}

function signUpAPI() {
    return axios.post('/api/signUp');
}

function* signUp() {

    try {
        // const result = yield call(signUpAPI);
        yield delay(1000);
        yield put({
            type: SIGN_UP_SUCCESS,
            data: result.data
        });
    } catch (err) {
        yield put({
            type: SIGN_UP_FAILURE,
            data: err.response.data,
        });
    }

}


function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}


// take 는 일회용.
// takeEvery 는 계속해서 반복한다.
// takeLatest 는 실수로 마우스를 연속 2번 눌리는 걸 방지해줌
// 앞의 이벤트는 무시하고, 마지막 이벤트만 실행해줌
// takeLatest 는 응답을 취소시키는 것이지 요청을 취소시키지 않는다.
// takeLeading 은 맨 앞의 이벤트만 실행해줌
// throttle 은 2초 동안 1번만 요청을 보냄
// 보통은 서버에서 같은 요청 2번을 막아준다.

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ])
}