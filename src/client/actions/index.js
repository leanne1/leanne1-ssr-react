import { debug as _debug } from 'debug';

const debug = _debug('app:thunk');

// Action types
export const FETCH_USERS = 'fetch_users';
export const FETCH_CURRENT_USER = 'fetch_current_user';

// Thunks
export const fetchUsers = () => async (dispatch, getState, api) => {
  try {
    const res = await api.get('/users');
    dispatch({
      type: FETCH_USERS,
      payload: res.data,
    });
  } catch (err) {
    debug(err.message);
  }
};


export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  try {
    const res = await api.get('/current_user');
    dispatch({
      type: FETCH_CURRENT_USER,
      payload: res.data,
    });
  } catch (err) {
    debug(err.message);
  }
};
