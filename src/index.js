import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';
import { loadAuthToken } from './local-storage';
import { storeAuthInfo } from './actions/auth-actions';

const token = loadAuthToken();
if (token) {
    storeAuthInfo(token, store.dispatch.bind(store));
}

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
