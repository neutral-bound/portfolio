import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers/index_store';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk, middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
