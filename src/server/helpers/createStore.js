import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { rootReducer } from '../../client/reducers';

export const setupStore = (cookie = '') => {
  const axiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com/',
    headers: { cookie },
  });

  return createStore(
    rootReducer,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance)),
  );
};
