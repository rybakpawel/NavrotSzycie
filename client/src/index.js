import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './jsx/App';
import store from './jsx/redux/index';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);