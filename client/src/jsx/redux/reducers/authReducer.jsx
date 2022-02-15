const defaultState = {
    isLoading: false,
    isAuthenticate: false,
    user: null,
    token: localStorage.getItem('token')
};

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'USER_LOADING':
            return {
                ...state,
                isLoading: true
            }
        case 'USER_LOADED':
            return {
                ...state,
                isAuthenticate: true,
                isLoading: false,
                user: action.payload
            };
        case 'LOGIN_SUCCESS':
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isLoading: false,
                isAuthenticate: true,
                user: action.payload.user
            }
        case 'AUTH_ERROR':
        case 'LOGIN_FAIL':
        case 'LOGOUT_SUCCESS':
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticate: false,
                isLoading: false
            }
        default:
            return state;
    }
};

export default authReducer;
