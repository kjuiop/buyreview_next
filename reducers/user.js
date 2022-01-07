import produce from "immer";

export const initialState = {
    logInLoading: false,
    logInDone: false,
    logInError: null,
    logOutLoading: false,
    logOutDone: false,
    logOutError: null,
    signUpLoading: false,
    signUpDone: false,
    signUpError: null,
    changeNicknameLoading: false,
    changeNicknameDone: false,
    changeNicknameError: null,
    me: null,
    signUpData: {},
    loginData: {},
}

const dummyUser = (data) => ({
    ...data,
    nickname: '제이크',
    id: 1,
    Posts: [{ id: 1}],
    Followings: [{ nickname: '제이크' }, { nickname: '최승원' }, { nickname: '고경아' }],
    Followers: [{ nickname: '남보나' }, { nickname: '임광춘' }, { nickname: '하성호' }],
});

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';



export const loginAction = (data) => {
    dispatch(loginRequestAction(data));
}


// redux-thunk
/**
 * 
export const loginAction = (data) => {
    return (dispatch, getState) => {
        // getState() 는 initialState 를 불러온다.
        const state = getState();
        setTimeout(() => {
            dispatch(loginRequestAction(data));
        }, 2000);
        axios.post('/api/login')
        .then((res) => {
            dispatch(loginSuccessAction(res.data));
        })
        .catch((err) => {
            dispatch(loginFailureAction(err));
        })
    }
}

 */

export const loginRequestAction = (data) => {
    return {
        type: LOG_IN_REQUEST,
        data,
    }
}

export const logoutRequestAction = (data) => {
    return {
        type: LOG_OUT_REQUEST,
    }
}

export const changeNicknameRequestAction = (data) => {
    return {
        type: CHANGE_NICKNAME_REQUEST,
        data,
    }
}

const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case LOG_IN_REQUEST:
                console.log(LOG_IN_REQUEST, state);
                draft.logInLoading = true;
                draft.logInDone = false;
                draft.logInError = null;
                break;
            case LOG_IN_SUCCESS:
                console.log(LOG_IN_SUCCESS, state);
                draft.logInLoading = false;
                draft.logInDone = true;
                draft.me = dummyUser(action.data);
                break;
            case LOG_IN_FAILURE:
                console.log(LOG_IN_FAILURE, state);
                draft.logInLoading = false;
                draft.logInError = action.error;
                break;
            case LOG_OUT_REQUEST:
                draft.logOutLoading = true;
                draft.logOutDone = false;
                draft.logOutError = null;
                break;
            case LOG_OUT_SUCCESS:
                draft.logOutLoading = false;
                draft.logOutDone = true;
                draft.me = null;
                break;
            case LOG_OUT_FAILURE:
                draft.logOutLoading = false;
                draft.logOutError = action.error;
                break;
            case SIGN_UP_REQUEST:
                draft.signUpLoading = true;
                draft.signUpDone = false;
                draft.signUpError = null;
                break;
            case SIGN_UP_SUCCESS:
                draft.signUpLoading = false;
                draft.signUpDone = true;
                break;
            case SIGN_UP_FAILURE:
                draft.signUpLoading = false;
                draft.signUpError = action.error;
                break;
            case CHANGE_NICKNAME_REQUEST:
                draft.changeNicknameLoading = true;
                draft.changeNicknameDone = false;
                draft.changeNicknameError = null;
                break;
            case CHANGE_NICKNAME_SUCCESS:
                draft.changeNicknameLoading = false;
                draft.changeNicknameDone = true;
                break;
            case CHANGE_NICKNAME_FAILURE:
                draft.changeNicknameLoading = false;
                draft.changeNicknameError = action.error;
                break;
            case ADD_POST_TO_ME:
                draft.me.Posts.unshift({ id : action.data });
                break;
                // return {
                //     ...state,
                //     me: {
                //         ...state.me,
                //         Posts: [{ id: action.data }, {...state.me.Posts}],
                //     }
                // }      
            case REMOVE_POST_OF_ME:
                console.log("REMOVE_POST_OF_ME", action.data);
                draft.me.Posts = draft.me.Posts.filter((y) => y.id !== action.data);
                break;
                // return {
                //     ...state,
                //     me: {
                //         ...state.me,
                //         Posts: state.me.Posts.filter((y) => y.id !== action.data),
                //     }
                // }   
            default:
                break;
        }
    });
};

export default reducer;