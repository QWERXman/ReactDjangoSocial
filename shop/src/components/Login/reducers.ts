import { EDIT_PROFILE_DATA } from '../Profile/EditProfile/actionTypes'
import { login, logout } from 'service/auth'
import { TRY_LOGIN, LOG_OUT } from './actionTypes';


const initialState = {
    name: null,
    secondName: null
};

export default (state = initialState, action:any) => {
    switch (action.type) {
        case EDIT_PROFILE_DATA:
            return {
                ...state,
                name: action.name,
                secondName: action.secondName
            };
            case TRY_LOGIN:
                login(action.login, action.pass)
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