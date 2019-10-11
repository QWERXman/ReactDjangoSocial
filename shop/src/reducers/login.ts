import { CHANGE_LOGIN, CHANGE_PASSWORD, TRY_LOGIN, LOG_OUT } from '../constants/actionTypes'
import { login, logout } from '../service/auth'

const initialState = {
    username: '',
    password: '',
    is_logged: false
};

export default (state = initialState, action:any) => {
    switch (action.type) {
        case CHANGE_LOGIN:         
            return {
                ...state,
                username: action.login,
            };
        case CHANGE_PASSWORD:       
            return {
                ...state,
                password: action.password,
            };
        case TRY_LOGIN:
            login(state.username, state.password)
            return {
                ...state
            };
        case LOG_OUT:
            logout()
            return {
                ...state
            }
        default:
            return state;
    }
};