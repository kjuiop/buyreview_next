import { all, fork, takeLatest, put, call, delay, throttle } from "redux-saga/effects";
import shortId from "shortid";
import { 
    ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
    REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE,
    ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, 
    LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE,
    generateDummyPost
} from '../reducers/post';

import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "../reducers/user";


function loadPostsAPI(data) {
    return axios.get('/api/post', data);
}

function* loadPosts(action) {

    try {
        console.log("SAGA LOAD_POSTS", action.data);
        // const result = yield call(addPostAPI, action.data);
        yield delay(1000);

        const id = shortId.generate();
        yield put({
            type: LOAD_POSTS_SUCCESS,
            data: generateDummyPost(10),
        });
    } catch (err) {
        yield put({
            type: LOAD_POSTS_FAILURE,
            data: err.response.data,
        });
    }

}


function addPostAPI(data) {
    return axios.post('/api/post', data);
}

function* addPost(action) {

    try {
        console.log("SAGA ADDPOST", action.data);
        // const result = yield call(addPostAPI, action.data);
        yield delay(1000);

        const id = shortId.generate();
        yield put({
            type: ADD_POST_SUCCESS,
            data: {
                id,
                content: action.data,
            }
        });
        yield put({
            type: ADD_POST_TO_ME,
            data: id,
        })
    } catch (err) {
        yield put({
            type: ADD_POST_FAILURE,
            data: err.response.data,
        });
    }

}


function removePostAPI(data) {
    return axios.post('/api/post', data);
}

function* removePost(action) {

    try {
        console.log("SAGA removePOST", action.data);
        // const result = yield call(addPostAPI, action.data);
        yield delay(1000);
        yield put({
            type: REMOVE_POST_SUCCESS,
            data: action.data,
        });
        yield put({
            type: REMOVE_POST_OF_ME,
            data: action.data,
        })
    } catch (err) {
        console.log(err);
        yield put({
            type: REMOVE_POST_FAILURE,
            error: err.response.data,
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
            error: err.response.data,
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

function* watchLoadPosts() {
    yield throttle(3000, LOAD_POSTS_REQUEST, loadPosts);
}

function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchLoadPosts),
        fork(watchRemovePost),
        fork(watchAddComment),
    ])
}