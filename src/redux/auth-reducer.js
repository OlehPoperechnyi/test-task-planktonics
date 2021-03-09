const SET_USER_DATA = 'SET_USER_DATA';

let initialState =
    {
        id: null,
        email: null,
        login: null,
        isAuth: false,
        rememberMe: false
    };
//check for locally saved data
if (localStorage.getItem('authState') !== null) {
    initialState = { ...JSON.parse(localStorage.getItem('authState'))}
}
//implementation for server requests
//Thunks
/*export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.resultCode === 0) {
        dispatch(setUserData(response.data.id, response.data.email, response.data.login, true));
    }
}
export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : "some error!"
        dispatch(stopSubmit("login", {_error: message}));
    }
}
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
}*/

//Dispatches
export const setUserData = (id, email = null, login = null, isAuth, rememberMe) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth, rememberMe}
});

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            localStorage.setItem('authState', JSON.stringify(action.payload));
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
};


export default authReducer;