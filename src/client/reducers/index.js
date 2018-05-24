import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { authReducer } from './authReducer';
import { adminsReducer } from './adminsReducer';

export const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
  admins: adminsReducer,
});
