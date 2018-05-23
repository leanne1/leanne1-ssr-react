import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Routes from '../client/routes';
import { rootReducer } from '../client/reducers';

const axiosInstance = axios.create({
  baseURL: '/api',
});

const store = createStore(
  rootReducer,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance)),
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>{renderRoutes(Routes)}</Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
