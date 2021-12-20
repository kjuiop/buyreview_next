export const initialState = {
    isLoggedIn: true,
    user: null,
    signUpData: {},
    loginData: {},
}

export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
}

export const logoutAction = (data) => {
    return {
        type: 'LOG_OUT',
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            console.log('LOG_IN', state);
            return {
                ...state,
                isLoggedIn: true,
                user: action.data,
            };
        case 'LOG_OUT':
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            }
        default:
            return state;
    }
};

export default reducer;