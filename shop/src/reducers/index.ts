import { combineReducers } from 'redux';

import news from './news';
import menu from './menu';
import login from './login';

export default combineReducers({
    news,
    menu,
    login
});