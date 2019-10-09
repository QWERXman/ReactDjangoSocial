import { CHANGE_LOGIN, CHANGE_PASSWORD, TRY_LOGIN } from '../constants/actionTypes'

const initialState = {
    username: '',
    is_logged: false
};
  
export default (state = initialState, action:any) => {
    switch (action.type) {
        case CHANGE_LOGIN:
            console.log(action);            
            return {
                ...state,
                text: action.text,
            };
        case CHANGE_PASSWORD:
            console.log(action);            
            return {
                ...state,
                text: action.text,
            };
        case TRY_LOGIN:
            console.log(action);            
            return {
                ...state
            };
        default:
    return state;
}
};