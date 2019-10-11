import { combineReducers } from 'redux';

import { EDIT_PROFILE_DATA } from './EditProfile/actionTypes'
import { CREATE_NEWS } from './CreateNews/actionTypes'
import { SET_PROFILE_NEWS_LIST } from './actionTypes'


const initialState = {
    name: null,
    secondName: null,
    avatar: null,
    status: null,
    birthday: null,
    city: null,
    newsList: []
};

export default (state = initialState, action:any) => {
    switch (action.type) {
        case EDIT_PROFILE_DATA:
            return {
                ...state,
                name: action.name,
                secondName: action.secondName,
                avatar: action.avatar,
                status: action.status,
                birthday: action.birthday,
                city: action.city,
            };
        case SET_PROFILE_NEWS_LIST:
            return {
                ...state,
                newsList: action.newsList
            };
        case CREATE_NEWS:
            return {
                ...state,
                newsList: [action, ...state.newsList]
            };
        default:
            return state;
    }
};