export const loadUser = () => async (dispatch, getState) => {
    dispatch({
        type: 'USER_LOADING'
    });

    const token = getState().authReducer.token;
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    if (token) config.headers['x-auth-token'] = token;

    fetch('http://localhost:5000/user/', config)
        .then(res => {
            if (res.ok) {
                dispatch({
                    type: 'USER_LOADED',
                    payload: res.data
                })
            }
        })
        .catch(err => {
            dispatch({
                type: 'AUTH_ERROR'
            })
        })
};

export const signIn = (email, password) => {
    return (dispatch) => {
        fetch(`http://localhost:5000/user/auth`, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                const { token, user, message } = data
                if (!token) console.log(message);
                else {
                    dispatch({
                        type: 'LOGIN_SUCCESS',
                        payload: {
                            token,
                            user
                        }
                    });
                }
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
};

export const logOut = () => {
    return (dispatch) => dispatch({
        type: 'LOGOUT_SUCCESS',
    });
};