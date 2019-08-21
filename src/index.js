import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { searchRobots, requestRobots } from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import * as serviceWorker from './serviceWorker';
import thunkMiddleware from 'redux-thunk';

import './index.css';
import 'tachyons';

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots });

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
