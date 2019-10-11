import { combineReducers } from 'redux';

import news from './news';
import menu from './menu';
import login from './login';
import profile from '../components/Profile/redusers';

export default combineReducers({
    news,
    menu,
    login,
    profile
});