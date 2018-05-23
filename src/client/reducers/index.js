import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
});
