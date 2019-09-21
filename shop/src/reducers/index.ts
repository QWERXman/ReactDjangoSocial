import { combineReducers } from 'redux';

import news from './news';
import menu from './menu';

export default combineReducers({
    news,
    menu
});