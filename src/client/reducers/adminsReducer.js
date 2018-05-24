import { FETCH_ADMINS } from '../actions';

export const adminsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ADMINS:
      return action.payload;
    default:
      return state;
  }
};
