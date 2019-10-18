import { combineReducers } from 'redux';

import { GET_ALL_NEWS } from './actionTypes'


const initialState = {
    newsList: []
};

export default (state = initialState, action:any) => {
    switch (action.type) {
        case GET_ALL_NEWS:
            return {
                ...state,
                newsList: action.data
            };
        default:
            return state;
    }
};