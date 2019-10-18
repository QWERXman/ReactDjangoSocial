import { combineReducers } from 'redux';

import menu from './menu';
import login from '../components/Login/reducers';
import profile from '../components/Profile/redusers';
import news from '../components/News/reducers';

export default combineReducers({
    news,
    menu,
    login,
    profile
});