import axios from 'axios';
import { debug as _debug } from 'debug';

const debug = _debug('app:thunk');
const apiUrl = 'https://react-ssr-api.herokuapp.com';

// Action types
export const FETCH_USERS = 'fetch_users';

// Thunks
export const fetchUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(`${apiUrl}/users`);
    dispatch({
      type: FETCH_USERS,
      payload: res.data,
    });
  } catch (err) {
    debug(err.message);
  }
};
