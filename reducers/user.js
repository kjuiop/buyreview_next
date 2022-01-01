export const initialState = {
    isLoggingIn: false,
    isLoggedIn: false,
    isLoggingOut: false,
    me: null,
    signUpData: {},
    loginData: {},
}


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
        type: 'LOG_IN_REQUEST',
        data,
    }
}

export const logoutRequestAction = (data) => {
    return {
        type: 'LOG_OUT_REQUEST',
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN_REQUEST':
            console.log('LOG_IN_REQUEST', state);
            return {
                ...state,
                isLoggingIn: true,
            };
        case 'LOG_IN_SUCCESS':
            console.log('LOG_IN_SUCCESS', state);
            return {
            ...state,
            isLoggingIn: false,
            isLoggedIn: true,
            me: { ...action.data, nickname: 'jake' },
            };
        case 'LOG_IN_FAILURE':
            console.log('LOG_IN_FAILURE', state);
            return {
            ...state,
            isLoggingIn: false,
            isLoggedIn: false,
            };
        case 'LOG_OUT_REQUEST':
            return {
                ...state,
                isLoggingOut: true,
            }
        case 'LOG_OUT_SUCCESS':
            return {
                ...state,
                isLoggingOut: false,
                isLoggedIn: false,
                me: null,
            }
        case 'LOG_OUT_FAILURE':
            return {
                ...state,
                isLoggingOut: false,
            }
        default:
            return state;
    }
};

export default reducer;