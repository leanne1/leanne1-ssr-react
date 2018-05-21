import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../../common/reducers';

export const setupStore = () => {
  const store = createStore(rootReducer, {}, applyMiddleware(thunk));
  return store;
};
