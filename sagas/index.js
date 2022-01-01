import { all, fork } from 'redux-saga/effects';

import postSaga from './post';
import userSaga from './user';




// const l = logIn({ type: 'LOG_IN_REQUEST', data: { id: 'kjuiop' }});
// 테스트 하기 용이,
// yield 지점 전까지만 실행되기 때문
// l.next();
// l.next();










// call, fork 로 generator 함수를 실행
// all 은 함수들을 동시에 실행할 수 있게 해준다.

export default function* rootSaga() {
    yield all ([
        fork(userSaga),
        fork(postSaga),
    ]);
}