import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from '../common/routes';
import { rootReducer } from '../common/reducers';

const store = createStore(rootReducer, window.INITIAL_STATE, applyMiddleware(thunk));

ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>{renderRoutes(Routes)}</Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
