import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { searchRobots } from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import * as serviceWorker from './serviceWorker';
import thunkMiddleware from 'redux-thunk';

import './index.css';
import 'tachyons';

const logger = createLogger();
const store = createStore(
  searchRobots,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
