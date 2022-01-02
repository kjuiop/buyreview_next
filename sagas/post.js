import { all, fork, takeLatest, put, call, delay } from "redux-saga/effects";
import { 
    ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
    ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE 
} from '../reducers/post';

function addPostAPI(data) {
    return axios.post('/api/post', data);
}

function* addPost(action) {

    try {
        console.log("SAGA ADDPOST", action.data);
        // const result = yield call(addPostAPI, action.data);
        yield delay(1000);
        yield put({
            type: ADD_POST_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        yield put({
            type: ADD_POST_FAILURE,
            data: err.response.data,
        });
    }

}


function addCommentAPI(data) {
    return axios.post(`/api/post/${data.postId}/comment`, data);
}

function* addComment(action) {

    try {
        console.log("addComment SAGA");
        // const result = yield call(addCommentAPI, action.data);
        yield delay(1000);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: action.data
        });
    } catch (err) {
        yield put({
            type: ADD_COMMENT_FAILURE,
            data: err.response.data,
        });
    }

}

// take 는 일회용.
// takeEvery 는 계속해서 반복한다.
// takeLatest 는 실수로 마우스를 연속 2번 눌리는 걸 방지해줌
// 앞의 이벤트는 무시하고, 마지막 이벤트만 실행해줌
// takeLatest 는 응답을 취소시키는 것이지 요청을 취소시키지 않는다.
// takeLeading 은 맨 앞의 이벤트만 실행해줌
// throttle 은 2초 동안 1번만 요청을 보냄
// 보통은 서버에서 같은 요청 2번을 막아준다.

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
    ])
}