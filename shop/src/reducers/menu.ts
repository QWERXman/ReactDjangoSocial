import { CHANGE_ROUTE } from '../constants/actionTypes'
const initialState = {
    items: null,
};
  
export default (state = initialState, action:any) => {
    switch (action.type) {
        case CHANGE_ROUTE:
            console.log(action);
            
            return {
                ...state,
                id: action,
            };
        default:
            return state;
    }
};