import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/app';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'

import createStore from './store'

import 'semantic-ui-css/semantic.min.css'

import { login } from './service/auth'
login('qwerxman', 'wasdferruM32')
const store = createStore()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
