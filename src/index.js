import React from 'react';
import  ReactDOM  from 'react-dom';

/**Redux import */
import { Provider } from 'react-redux'; //It keep track of global state and we can access that state from anywhere
import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';

/**Setting Redux */
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
